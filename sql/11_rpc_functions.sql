-- ============================================
-- 11. RPC Functions (조회수 증가, 로그인 기록 등)
-- DROP IF EXISTS → CREATE OR REPLACE 로 파라미터 기본값 충돌 방지
-- ============================================

-- 게시판 조회수 증가
DROP FUNCTION IF EXISTS public.increment_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_views(post_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.posts SET views = views + 1 WHERE id = post_id; END; $$;

-- 강의 조회수 증가
DROP FUNCTION IF EXISTS public.increment_lecture_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_lecture_views(lecture_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.lectures SET views = views + 1 WHERE id = lecture_id; END; $$;

-- 갤러리 조회수 증가
DROP FUNCTION IF EXISTS public.increment_gallery_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_gallery_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.gallery SET views = views + 1 WHERE id = item_id; END; $$;

-- 포트폴리오 조회수 증가
DROP FUNCTION IF EXISTS public.increment_portfolio_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_portfolio_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.portfolio SET views = views + 1 WHERE id = item_id; END; $$;

-- 웹사이트 조회수 증가
DROP FUNCTION IF EXISTS public.increment_website_views(bigint);
CREATE OR REPLACE FUNCTION public.increment_website_views(item_id bigint)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.websites SET views = views + 1 WHERE id = item_id; END; $$;

-- 마지막 로그인 시간 갱신
DROP FUNCTION IF EXISTS public.update_last_login(uuid);
CREATE OR REPLACE FUNCTION public.update_last_login(target_user_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN UPDATE public.user_profiles SET last_login = now() WHERE id = target_user_id; END; $$;

-- 회원 상태 확인
DROP FUNCTION IF EXISTS public.check_user_status(uuid, text);
CREATE OR REPLACE FUNCTION public.check_user_status(target_user_id uuid, current_domain text)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE result json;
BEGIN
  SELECT json_build_object('status', 'active', 'reason', '', 'suspended_until', null) INTO result;
  RETURN result;
END; $$;
