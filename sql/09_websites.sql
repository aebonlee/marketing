-- ============================================
-- 09. websites (웹 추천사이트)
-- ============================================

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

SELECT public._create_policy_if_not_exists('websites', 'Anyone can read websites',               'SELECT', 'true');
SELECT public._create_policy_if_not_exists('websites', 'Authenticated users can create websites', 'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('websites', 'Authors can update own websites',         'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('websites', 'Authors can delete own websites',         'DELETE', 'auth.uid() = user_id');
