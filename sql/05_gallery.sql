-- ============================================
-- 05. gallery (갤러리)
-- ============================================

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

SELECT public._create_policy_if_not_exists('gallery', 'Anyone can read gallery',                      'SELECT', 'true');
SELECT public._create_policy_if_not_exists('gallery', 'Authenticated users can create gallery items',  'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('gallery', 'Authors can update own gallery items',          'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('gallery', 'Authors can delete own gallery items',          'DELETE', 'auth.uid() = user_id');
