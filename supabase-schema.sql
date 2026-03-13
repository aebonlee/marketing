-- ============================================
-- DreamIT Marketing - Supabase SQL Schema
-- Supabase SQL Editor에서 실행하세요
-- ============================================

-- ─── 1. user_profiles (회원 프로필) ───
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

CREATE POLICY "Anyone can read profiles"
  ON public.user_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 신규 회원가입 시 자동 프로필 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role, signup_domain, created_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', ''),
    'member',
    COALESCE(NEW.raw_user_meta_data ->> 'signup_domain', ''),
    now()
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ─── 2. posts (게시판) ───
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

CREATE POLICY "Anyone can read posts"
  ON public.posts FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create posts"
  ON public.posts FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can delete own posts"
  ON public.posts FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 3. comments (게시판 댓글) ───
CREATE TABLE IF NOT EXISTS public.comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id       bigint REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments"
  ON public.comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON public.comments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can delete own comments"
  ON public.comments FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 4. lectures (강의자료) ───
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

CREATE POLICY "Anyone can read published lectures"
  ON public.lectures FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create lectures"
  ON public.lectures FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update lectures"
  ON public.lectures FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete lectures"
  ON public.lectures FOR DELETE
  USING (auth.uid() IS NOT NULL);


-- ─── 5. gallery (갤러리) ───
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

CREATE POLICY "Anyone can read gallery"
  ON public.gallery FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create gallery items"
  ON public.gallery FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can update own gallery items"
  ON public.gallery FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Authors can delete own gallery items"
  ON public.gallery FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 6. gallery_comments (갤러리 댓글) ───
CREATE TABLE IF NOT EXISTS public.gallery_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  gallery_id    bigint REFERENCES public.gallery(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.gallery_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read gallery comments"
  ON public.gallery_comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create gallery comments"
  ON public.gallery_comments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can delete own gallery comments"
  ON public.gallery_comments FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 7. portfolio (포트폴리오) ───
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

CREATE POLICY "Anyone can read portfolio"
  ON public.portfolio FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create portfolio items"
  ON public.portfolio FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can update own portfolio items"
  ON public.portfolio FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Authors can delete own portfolio items"
  ON public.portfolio FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 8. portfolio_comments (포트폴리오 댓글) ───
CREATE TABLE IF NOT EXISTS public.portfolio_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  portfolio_id  bigint REFERENCES public.portfolio(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.portfolio_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read portfolio comments"
  ON public.portfolio_comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create portfolio comments"
  ON public.portfolio_comments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can delete own portfolio comments"
  ON public.portfolio_comments FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 9. websites (웹 추천사이트) ───
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

CREATE POLICY "Anyone can read websites"
  ON public.websites FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create websites"
  ON public.websites FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can update own websites"
  ON public.websites FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Authors can delete own websites"
  ON public.websites FOR DELETE
  USING (auth.uid() = user_id);


-- ─── 10. websites_comments (웹사이트 댓글) ───
CREATE TABLE IF NOT EXISTS public.websites_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  website_id    bigint REFERENCES public.websites(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.websites_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read website comments"
  ON public.websites_comments FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create website comments"
  ON public.websites_comments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authors can delete own website comments"
  ON public.websites_comments FOR DELETE
  USING (auth.uid() = user_id);


-- ============================================
-- RPC Functions (조회수 증가, 로그인 기록 등)
-- ============================================

-- 게시판 조회수 증가
CREATE OR REPLACE FUNCTION public.increment_views(post_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.posts SET views = views + 1 WHERE id = post_id;
END;
$$;

-- 강의 조회수 증가
CREATE OR REPLACE FUNCTION public.increment_lecture_views(lecture_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.lectures SET views = views + 1 WHERE id = lecture_id;
END;
$$;

-- 갤러리 조회수 증가
CREATE OR REPLACE FUNCTION public.increment_gallery_views(item_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.gallery SET views = views + 1 WHERE id = item_id;
END;
$$;

-- 포트폴리오 조회수 증가
CREATE OR REPLACE FUNCTION public.increment_portfolio_views(item_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.portfolio SET views = views + 1 WHERE id = item_id;
END;
$$;

-- 웹사이트 조회수 증가
CREATE OR REPLACE FUNCTION public.increment_website_views(item_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.websites SET views = views + 1 WHERE id = item_id;
END;
$$;

-- 마지막 로그인 시간 갱신
CREATE OR REPLACE FUNCTION public.update_last_login(target_user_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.user_profiles
  SET last_login = now()
  WHERE id = target_user_id;
END;
$$;

-- 회원 상태 확인 (선택사항 - 계정 정지/차단 기능)
CREATE OR REPLACE FUNCTION public.check_user_status(target_user_id uuid, current_domain text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  SELECT json_build_object('status', 'active', 'reason', '', 'suspended_until', null)
  INTO result;
  RETURN result;
END;
$$;
