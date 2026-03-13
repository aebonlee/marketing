-- ============================================
-- DreamIT Marketing - Supabase SQL Schema
-- koreatech과 동일 Supabase 프로젝트 공유 시
-- 이미 존재하는 테이블/정책은 건너뜁니다.
-- Supabase SQL Editor에서 실행하세요.
-- ============================================

-- ─── 헬퍼: 정책이 없을 때만 생성 ───
CREATE OR REPLACE FUNCTION public._create_policy_if_not_exists(
  _table text, _name text, _cmd text, _qual text DEFAULT NULL, _check text DEFAULT NULL
)
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = _table AND policyname = _name
  ) THEN
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR %s %s %s',
      _name, _table, _cmd,
      CASE WHEN _qual  IS NOT NULL THEN 'USING (' || _qual  || ')' ELSE '' END,
      CASE WHEN _check IS NOT NULL THEN 'WITH CHECK (' || _check || ')' ELSE '' END
    );
  END IF;
END;
$$;


-- ─── 1. user_profiles ───
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

SELECT public._create_policy_if_not_exists('user_profiles', 'Anyone can read profiles',   'SELECT', 'true');
SELECT public._create_policy_if_not_exists('user_profiles', 'Users can update own profile','UPDATE', 'auth.uid() = id');
SELECT public._create_policy_if_not_exists('user_profiles', 'Users can insert own profile','INSERT', NULL, 'auth.uid() = id');

-- 트리거
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


-- ─── 2. posts ───
CREATE TABLE IF NOT EXISTS public.posts (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title         text NOT NULL,
  category      text DEFAULT 'free',
  content       text,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  views         integer DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('posts', 'Anyone can read posts',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('posts', 'Authenticated users can create posts','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('posts', 'Authors can delete own posts',        'DELETE', 'auth.uid() = user_id');


-- ─── 3. comments ───
CREATE TABLE IF NOT EXISTS public.comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id       bigint REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('comments', 'Anyone can read comments',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('comments', 'Authenticated users can create comments','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('comments', 'Authors can delete own comments',        'DELETE', 'auth.uid() = user_id');


-- ─── 4. lectures ───
CREATE TABLE IF NOT EXISTS public.lectures (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  week_number   integer,
  title         text NOT NULL,
  file_url      text DEFAULT '',
  content       text DEFAULT '',
  is_published  boolean DEFAULT true,
  views         integer DEFAULT 0,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);
ALTER TABLE public.lectures ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('lectures', 'Anyone can read published lectures',       'SELECT', 'true');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can create lectures',  'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can update lectures',  'UPDATE', 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can delete lectures',  'DELETE', 'auth.uid() IS NOT NULL');


-- ─── 5. gallery ───
CREATE TABLE IF NOT EXISTS public.gallery (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title         text NOT NULL,
  category      text DEFAULT 'artwork',
  image_url     text,
  link_url      text,
  description   text DEFAULT '',
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  views         integer DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('gallery', 'Anyone can read gallery',                     'SELECT', 'true');
SELECT public._create_policy_if_not_exists('gallery', 'Authenticated users can create gallery items', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('gallery', 'Authors can update own gallery items',         'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('gallery', 'Authors can delete own gallery items',         'DELETE', 'auth.uid() = user_id');


-- ─── 6. gallery_comments ───
CREATE TABLE IF NOT EXISTS public.gallery_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  gallery_id    bigint REFERENCES public.gallery(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.gallery_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('gallery_comments', 'Anyone can read gallery comments',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('gallery_comments', 'Authenticated users can create gallery comments','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('gallery_comments', 'Authors can delete own gallery comments',        'DELETE', 'auth.uid() = user_id');


-- ─── 7. portfolio ───
CREATE TABLE IF NOT EXISTS public.portfolio (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title         text NOT NULL,
  summary       text DEFAULT '',
  cover_image   text,
  tags          text,
  content       text DEFAULT '',
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  views         integer DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('portfolio', 'Anyone can read portfolio',                     'SELECT', 'true');
SELECT public._create_policy_if_not_exists('portfolio', 'Authenticated users can create portfolio items', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('portfolio', 'Authors can update own portfolio items',         'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('portfolio', 'Authors can delete own portfolio items',         'DELETE', 'auth.uid() = user_id');


-- ─── 8. portfolio_comments ───
CREATE TABLE IF NOT EXISTS public.portfolio_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  portfolio_id  bigint REFERENCES public.portfolio(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.portfolio_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('portfolio_comments', 'Anyone can read portfolio comments',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('portfolio_comments', 'Authenticated users can create portfolio comments','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('portfolio_comments', 'Authors can delete own portfolio comments',        'DELETE', 'auth.uid() = user_id');


-- ─── 9. websites ───
CREATE TABLE IF NOT EXISTS public.websites (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title         text NOT NULL,
  category      text DEFAULT 'general',
  url           text NOT NULL,
  image_url     text,
  description   text DEFAULT '',
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  views         integer DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.websites ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('websites', 'Anyone can read websites',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('websites', 'Authenticated users can create websites','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('websites', 'Authors can update own websites',        'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('websites', 'Authors can delete own websites',        'DELETE', 'auth.uid() = user_id');


-- ─── 10. websites_comments ───
CREATE TABLE IF NOT EXISTS public.websites_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  website_id    bigint REFERENCES public.websites(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE public.websites_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('websites_comments', 'Anyone can read website comments',              'SELECT', 'true');
SELECT public._create_policy_if_not_exists('websites_comments', 'Authenticated users can create website comments','INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('websites_comments', 'Authors can delete own website comments',        'DELETE', 'auth.uid() = user_id');


-- ============================================
-- RPC Functions
-- DROP IF EXISTS → CREATE OR REPLACE 로 파라미터 기본값 충돌 방지
-- ============================================

DROP FUNCTION IF EXISTS public.increment_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_views(post_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.posts SET views = views + 1 WHERE id = post_id; END; $$;

DROP FUNCTION IF EXISTS public.increment_lecture_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_lecture_views(lecture_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.lectures SET views = views + 1 WHERE id = lecture_id; END; $$;

DROP FUNCTION IF EXISTS public.increment_gallery_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_gallery_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.gallery SET views = views + 1 WHERE id = item_id; END; $$;

DROP FUNCTION IF EXISTS public.increment_portfolio_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_portfolio_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.portfolio SET views = views + 1 WHERE id = item_id; END; $$;

DROP FUNCTION IF EXISTS public.increment_website_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_website_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.websites SET views = views + 1 WHERE id = item_id; END; $$;

DROP FUNCTION IF EXISTS public.update_last_login(uuid);
CREATE OR REPLACE FUNCTION public.update_last_login(target_user_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.user_profiles SET last_login = now() WHERE id = target_user_id; END; $$;

DROP FUNCTION IF EXISTS public.check_user_status(uuid, text);
CREATE OR REPLACE FUNCTION public.check_user_status(target_user_id uuid, current_domain text)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE result json;
BEGIN
  SELECT json_build_object('status', 'active', 'reason', '', 'suspended_until', null) INTO result;
  RETURN result;
END; $$;


-- ─── 헬퍼 함수 정리 (선택) ───
-- DROP FUNCTION IF EXISTS public._create_policy_if_not_exists;
