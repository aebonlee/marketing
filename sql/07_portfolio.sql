-- ============================================
-- 07. portfolio (포트폴리오)
-- ============================================

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

SELECT public._create_policy_if_not_exists('portfolio', 'Anyone can read portfolio',                      'SELECT', 'true');
SELECT public._create_policy_if_not_exists('portfolio', 'Authenticated users can create portfolio items',  'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('portfolio', 'Authors can update own portfolio items',          'UPDATE', 'auth.uid() = user_id');
SELECT public._create_policy_if_not_exists('portfolio', 'Authors can delete own portfolio items',          'DELETE', 'auth.uid() = user_id');
