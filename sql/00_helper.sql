-- ============================================
-- 00. 헬퍼 함수: 정책이 없을 때만 생성
-- 가장 먼저 실행하세요.
-- ============================================

CREATE OR REPLACE FUNCTION public._create_policy_if_not_exists(
  _table text, _name text, _cmd text, _qual text DEFAULT NULL, _check text DEFAULT NULL
)
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = _table AND policyname = _name
  ) THEN
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR %s %s %s',
      _name, _table, _cmd,
      CASE WHEN _qual  IS NOT NULL THEN 'USING (' || _qual  || ')' ELSE '' END,
      CASE WHEN _check IS NOT NULL THEN 'WITH CHECK (' || _check || ')' ELSE '' END
    );
  END IF;
END;
$$;
