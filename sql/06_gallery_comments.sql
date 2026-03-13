-- ============================================
-- 06. gallery_comments (갤러리 댓글)
-- ============================================

CREATE TABLE IF NOT EXISTS public.gallery_comments (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  gallery_id    bigint REFERENCES public.gallery(id) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   text,
  content       text NOT NULL,
  created_at    timestamptz DEFAULT now()
);

ALTER TABLE public.gallery_comments ENABLE ROW LEVEL SECURITY;

SELECT public._create_policy_if_not_exists('gallery_comments', 'Anyone can read gallery comments',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('gallery_comments', 'Authenticated users can create gallery comments', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('gallery_comments', 'Authors can delete own gallery comments',         'DELETE', 'auth.uid() = user_id');
