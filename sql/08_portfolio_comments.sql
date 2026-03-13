-- ============================================
-- 08. portfolio_comments (포트폴리오 댓글)
-- ============================================

CREATE TABLE IF NOT EXISTS public.portfolio_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  portfolio_id  bigint REFERENCES public.portfolio(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.portfolio_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('portfolio_comments', 'Anyone can read portfolio comments',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('portfolio_comments', 'Authenticated users can create portfolio comments', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('portfolio_comments', 'Authors can delete own portfolio comments',         'DELETE', 'auth.uid() = user_id');
