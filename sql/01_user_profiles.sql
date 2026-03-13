-- ============================================
-- 01. user_profiles (회원 프로필)
-- ============================================

CREATE TABLE IF NOT EXISTS public.user_profiles (
  id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         text,
  full_name     text,
  role          text DEFAULT 'member',
  signup_domain text,
  last_login    timestamptz,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('user_profiles', 'Anyone can read profiles',    'SELECT', 'true');
SELECT public._create_policy_if_not_exists('user_profiles', 'Users can update own profile', 'UPDATE', 'auth.uid() = id');
SELECT public._create_policy_if_not_exists('user_profiles', 'Users can insert own profile', 'INSERT', NULL, 'auth.uid() = id');

-- 신규 회원가입 시 자동 프로필 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role, signup_domain, created_at)
  VALUES (
    NEW.id, NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', ''),
    'member',
    COALESCE(NEW.raw_user_meta_data ->> 'signup_domain', ''),
    now()
  ) ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
