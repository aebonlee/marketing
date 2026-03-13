-- ============================================
-- 02. posts (게시판)
-- ============================================

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

SELECT public._create_policy_if_not_exists('posts', 'Anyone can read posts',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('posts', 'Authenticated users can create posts', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('posts', 'Authors can delete own posts',         'DELETE', 'auth.uid() = user_id');
