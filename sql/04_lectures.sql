-- ============================================
-- 04. lectures (강의자료)
-- ============================================

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

SELECT public._create_policy_if_not_exists('lectures', 'Anyone can read published lectures',        'SELECT', 'true');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can create lectures',   'INSERT', NULL, 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can update lectures',   'UPDATE', 'auth.uid() IS NOT NULL');
SELECT public._create_policy_if_not_exists('lectures', 'Authenticated users can delete lectures',   'DELETE', 'auth.uid() IS NOT NULL');
