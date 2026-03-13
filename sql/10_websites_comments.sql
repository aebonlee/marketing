-- ============================================
-- 10. websites_comments (웹사이트 댓글)
-- ============================================

CREATE TABLE IF NOT EXISTS public.websites_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  website_id    bigint REFERENCES public.websites(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.websites_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('websites_comments', 'Anyone can read website comments',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('websites_comments', 'Authenticated users can create website comments', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('websites_comments', 'Authors can delete own website comments',         'DELETE', 'auth.uid() = user_id');
