-- ============================================
-- 03. comments (게시판 댓글)
-- ============================================

CREATE TABLE IF NOT EXISTS public.comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id       bigint REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('comments', 'Anyone can read comments',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('comments', 'Authenticated users can create comments', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('comments', 'Authors can delete own comments',         'DELETE', 'auth.uid() = user_id');
