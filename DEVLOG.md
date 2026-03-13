# DreamIT Marketing 개발일지

## 프로젝트 개요
- **프로젝트명**: DreamIT Marketing (마케팅 학습 사이트)
- **도메인**: marketing.dreamitbiz.com
- **기술 스택**: React 19 + Vite 7 + Supabase + React Router 7
- **기반 프로젝트**: D:\koreatech (컴퓨팅 사고 학습 사이트) 아키텍처 동일 적용
- **기본 테마 컬러**: Coral (#E8590C)

---

## 개발 단계별 기록

### 1단계: 프로젝트 초기화
- Vite React 프로젝트 생성 (`D:\marketing`)
- 의존성: react 19, react-router-dom 7, @supabase/supabase-js
- Git 초기화 및 GitHub 리포지토리 연결 (aebonlee/marketing)
- 디렉토리 구조: src/config, contexts, hooks, utils, components, layouts, pages, styles

**생성 파일:**
- `package.json` — name: "dreamit-marketing"
- `vite.config.js` — 포트 5175, copy-404 플러그인
- `index.html` — 마케팅 브랜딩, OG 태그
- `.gitignore`, `.env.example`, `CNAME`, `public/CNAME`
- `public/favicon.svg` — Coral 컬러 "MK" 아이콘

---

### 2단계: 코어 인프라 복사 (koreatech → marketing)

**Contexts (4개):**
- `ThemeContext.jsx` — 기본 colorTheme을 'coral'로 변경
- `LanguageContext.jsx` — 동일 복사
- `AuthContext.jsx` — 동일 복사 (Google/Kakao OAuth + 이메일 인증)
- `ToastContext.jsx` — 동일 복사

**Hooks (3개):**
- `useAOS.js` — IntersectionObserver 기반 AOS 애니메이션
- `useCodeCopy.js` — 코드 블록 복사 버튼
- `useTableScroller.js` — 테이블 가로 스크롤

**Utils (4개):**
- `supabase.js` — Supabase CRUD (posts, lectures, gallery, portfolio, websites, comments)
- `auth.js` — 인증 헬퍼 함수
- `searchStorage.js` — 검색 기록 저장
- `translations.js` — 한/영 번역 (마케팅 메뉴 전면 재작성)

**Components (6개):**
- `layout/Navbar.jsx` — COLOR_OPTIONS에 coral(#E8590C) 추가
- `layout/Footer.jsx` — 동일 복사
- `SearchModal.jsx` — 동일 복사
- `SEOHead.jsx` — 사이트명/URL/설명 변경
- `AuthGuard.jsx` — 동일 복사
- `Pagination.jsx` — 동일 복사

**Styles (12개 CSS 파일):**
- `base.css` — 기본 컬러를 Coral(#E8590C)로 변경, blue를 override로 추가
- `navbar.css`, `hero.css`, `footer.css`, `shop.css`, `auth.css`
- `animations.css`, `search.css`, `toast.css`, `dark-mode.css`
- `responsive.css`, `site.css`

---

### 3단계: 설정 파일 작성/수정

**site.js 메뉴 구성:**
- 마케팅 기초 (마케팅이란, 주차별 계획, 강의계획서, 실습 가이드)
- 15주 학습 (Week 1~15 드롭다운)
- 디지털마케팅 실무 (SEO, SEM, SNS, 콘텐츠, 이메일, 퍼포먼스, 인플루언서, 자동화)
- 강의자료, 참고자료, 커뮤니티 (게시판, 갤러리, 포트폴리오, 웹사이트)

**translations.js 변경:**
- `site.nav` 섹션 전면 재작성 (마케팅 기초, 15주 학습, 디지털마케팅 실무 등)
- 공통 키(auth, search, comments, board, gallery, portfolio, websites, lectures, admin) 유지

**base.css 변경:**
- `:root` 기본값: `--primary-blue: #E8590C` (Coral)
- `--primary-dark: #C24A0A`, `--primary-light: #F08040`
- 그라데이션, bg-tint 등 관련 변수 모두 Coral 계열로 수정
- `html[data-color="blue"]` override 블록 추가 (기존 파란색 테마)

---

### 4단계: 라우팅 (PublicLayout.jsx)

54+ 라우트 정의:
- `/` — Home
- `/login`, `/register`, `/forgot-password`, `/mypage`
- `/basics/*` — 마케팅 기초 4페이지
- `/lessons`, `/lessons/week1`~`/lessons/week15` — 15주 학습
- `/digital`, `/digital/seo`~`/digital/automation` — 디지털마케팅 실무
- `/lectures/materials`, `/references/*` — 강의자료/참고자료
- `/community/board/*`, `/community/gallery/*`, `/community/portfolio/*`, `/community/websites/*`
- `/admin` — 관리자
- `*` — 404

---

### 5단계: 콘텐츠 페이지 작성 (30개)

**홈 & 마케팅 기초 (6개):**
| 파일 | 내용 |
|------|------|
| `Home.jsx` | 히어로 + 마케팅 소개 + 15주 커리큘럼 카드 + 디지털마케팅 카드 |
| `WhatIsMarketing.jsx` | 마케팅의 정의, 역사, 핵심 개념 |
| `WeeklyPlan.jsx` | 15주 주차별 학습 계획표 |
| `Syllabus.jsx` | 강의계획서 (목표, 평가, 일정) |
| `PracticeGuide.jsx` | 실습 가이드 (도구, 방법론) |
| `LessonIndex.jsx` | 15주 학습 카드 그리드 |

**15주 학습 페이지 (15개):**
| 주차 | 주제 |
|------|------|
| 1주차 | 마케팅의 이해 |
| 2주차 | 마케팅 환경 분석 |
| 3주차 | 소비자 행동 |
| 4주차 | 마케팅 조사 |
| 5주차 | STP 전략 |
| 6주차 | 제품 전략 |
| 7주차 | 가격 전략 |
| 8주차 | 유통 전략 |
| 9주차 | 촉진 전략 |
| 10주차 | 디지털 마케팅 기초 |
| 11주차 | 콘텐츠 & SNS 마케팅 |
| 12주차 | SEO & SEM |
| 13주차 | 데이터 기반 마케팅 |
| 14주차 | 브랜드 & CRM |
| 15주차 | 마케팅 트렌드 |

**디지털마케팅 실무 (9개):**
| 파일 | 주제 |
|------|------|
| `DigitalHome.jsx` | 디지털마케팅 실무 홈 (8개 카드) |
| `DigitalSEO.jsx` | 검색엔진 최적화 |
| `DigitalSEM.jsx` | 검색엔진 마케팅 |
| `DigitalSNS.jsx` | SNS 마케팅 |
| `DigitalContent.jsx` | 콘텐츠 마케팅 |
| `DigitalEmail.jsx` | 이메일 마케팅 |
| `DigitalPerformance.jsx` | 퍼포먼스 마케팅 |
| `DigitalInfluencer.jsx` | 인플루언서 마케팅 |
| `DigitalAutomation.jsx` | 마케팅 자동화 |

**DB 기반 페이지 (22개, koreatech에서 복사):**
- 인증: Login, Register, ForgotPassword, MyPage
- 관리: Admin, NotFound
- 게시판: Board, BoardDetail, BoardWrite
- 갤러리: Gallery, GalleryDetail, GalleryWrite
- 포트폴리오: Portfolio, PortfolioDetail, PortfolioWrite
- 웹사이트: Websites, WebsiteDetail, WebsiteWrite
- 강의: Lectures, LectureDetail, LectureWrite, LectureMaterials

---

### 6단계: 빌드 & 배포

- `npm install` — 의존성 설치 완료
- `npm run build` — 프로덕션 빌드 성공 (151 modules, 58 assets)
- Git 초기 커밋 (97 files, 24,459 insertions)
- GitHub 리포지토리 푸시: `aebonlee/marketing` (main)

---

### 7단계: CI/CD 및 OG 태그 설정

**GitHub Actions 배포 워크플로 (.github/workflows/deploy.yml):**
- `main` 브랜치 push 시 자동 빌드 → `gh-pages` 브랜치로 배포
- `peaceiris/actions-gh-pages@v4` 사용
- Supabase 자격증명은 GitHub Secrets로 관리
- SPA 라우팅 지원: `index.html` → `404.html` 자동 복사
- 커스텀 도메인: `marketing.dreamitbiz.com`

**Open Graph (OG) 메타 태그 설정:**
- `index.html` (정적): 카카오/네이버/페이스북 등 크롤러가 읽을 수 있는 정적 OG 태그
  - `og:type` = "website"
  - `og:title` = "DreamIT Marketing | 마케팅 학습"
  - `og:description` = "마케팅 기초부터 디지털마케팅 실무까지 - 15주 체계적 학습 과정"
  - `og:image` = "https://marketing.dreamitbiz.com/og-image.png" (400x302)
  - `og:url` = "https://marketing.dreamitbiz.com"
  - `og:site_name` = "DreamIT Marketing"
  - `og:locale` = "ko_KR"
  - Twitter Card 메타태그 (summary_large_image)
- `SEOHead.jsx` (동적): 각 페이지별 title, description, canonical URL, OG 태그 오버라이드
- `public/og-image.png` — OG 미리보기 이미지 (400x302px)

**환경 변수 (.env):**
- Supabase URL/Key 설정 (koreatech과 동일 프로젝트 공유)
- `.env`는 `.gitignore`에 포함 — GitHub Secrets로 CI/CD에서 주입

**GitHub Secrets 필요:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

### 8단계: Supabase 데이터베이스 스키마

`supabase-schema.sql` 파일 생성 — Supabase SQL Editor에서 실행하여 DB 초기화

**테이블 10개:**
| # | 테이블 | 용도 | 주요 컬럼 |
|---|--------|------|-----------|
| 1 | `user_profiles` | 회원 프로필 | id(uuid→auth.users), email, full_name, role, signup_domain, last_login |
| 2 | `posts` | 게시판 | id, title, category, content, user_id, author_name, views |
| 3 | `comments` | 게시판 댓글 | id, post_id(FK), user_id, author_name, content |
| 4 | `lectures` | 강의자료 | id, week_number, title, file_url, content, is_published, views |
| 5 | `gallery` | 갤러리 | id, title, category, image_url, link_url, description, views |
| 6 | `gallery_comments` | 갤러리 댓글 | id, gallery_id(FK), user_id, author_name, content |
| 7 | `portfolio` | 포트폴리오 | id, title, summary, cover_image, tags, content, views |
| 8 | `portfolio_comments` | 포트폴리오 댓글 | id, portfolio_id(FK), user_id, author_name, content |
| 9 | `websites` | 웹 추천사이트 | id, title, category, url, image_url, description, views |
| 10 | `websites_comments` | 웹사이트 댓글 | id, website_id(FK), user_id, author_name, content |

**RPC 함수 7개 + 트리거 1개:**
- `handle_new_user()` — 회원가입 시 user_profiles 자동 생성 (트리거)
- `increment_views(post_id)` — 게시판 조회수 +1
- `increment_lecture_views(lecture_id)` — 강의 조회수 +1
- `increment_gallery_views(item_id)` — 갤러리 조회수 +1
- `increment_portfolio_views(item_id)` — 포트폴리오 조회수 +1
- `increment_website_views(item_id)` — 웹사이트 조회수 +1
- `update_last_login(target_user_id)` — 마지막 로그인 시간 갱신
- `check_user_status(target_user_id, current_domain)` — 계정 상태 확인

**Row Level Security (RLS):**
- 모든 테이블에 RLS 활성화
- SELECT: 누구나 읽기 가능
- INSERT: 인증된 사용자만 생성 가능
- UPDATE/DELETE: 본인 작성글만 수정/삭제 가능

---

### 9단계: SQL 스크립트 개별 파일 분리

koreatech과 동일한 Supabase 프로젝트를 공유하므로, 기존 테이블/정책과 충돌 없이 실행 가능하도록 개선:

**헬퍼 함수:**
- `_create_policy_if_not_exists()` — `pg_policies`를 확인하여 이미 존재하는 RLS 정책은 건너뛰는 안전한 생성 함수

**개별 SQL 파일 (sql/ 디렉토리, 12개):**
| # | 파일 | 내용 |
|---|------|------|
| 00 | `00_helper.sql` | `_create_policy_if_not_exists()` 헬퍼 함수 |
| 01 | `01_user_profiles.sql` | user_profiles 테이블 + handle_new_user 트리거 |
| 02 | `02_posts.sql` | posts 게시판 테이블 |
| 03 | `03_comments.sql` | comments 댓글 테이블 |
| 04 | `04_lectures.sql` | lectures 강의자료 테이블 |
| 05 | `05_gallery.sql` | gallery 갤러리 테이블 |
| 06 | `06_gallery_comments.sql` | gallery_comments 갤러리 댓글 테이블 |
| 07 | `07_portfolio.sql` | portfolio 포트폴리오 테이블 |
| 08 | `08_portfolio_comments.sql` | portfolio_comments 댓글 테이블 |
| 09 | `09_websites.sql` | websites 웹 추천사이트 테이블 |
| 10 | `10_websites_comments.sql` | websites_comments 댓글 테이블 |
| 11 | `11_rpc_functions.sql` | RPC 함수 7개 (CREATE OR REPLACE) |

**실행 순서:**
1. Supabase SQL Editor에서 `00_helper.sql` 먼저 실행
2. `01` → `11` 순서대로 실행 (테이블 간 FK 의존성 순서)
3. `CREATE TABLE IF NOT EXISTS`로 이미 존재하는 테이블은 건너뜀
4. `_create_policy_if_not_exists()`로 이미 존재하는 정책은 건너뜀
5. RPC 함수는 `CREATE OR REPLACE`로 안전하게 덮어쓰기

**`supabase-schema.sql` (통합본):**
- 12개 파일 내용을 하나로 합친 버전 (한 번에 실행 가능)

---

### 10단계: RPC 함수 파라미터 충돌 해결

**문제:** koreatech에서 이미 생성된 RPC 함수의 파라미터 기본값이 다를 경우 `CREATE OR REPLACE`만으로는 덮어쓸 수 없음
```
ERROR: 42P13: cannot remove parameter defaults from existing function
HINT: Use DROP FUNCTION check_user_status(uuid,text) first.
```

**해결:** 모든 RPC 함수에 `DROP FUNCTION IF EXISTS` 추가 후 `CREATE OR REPLACE` 실행
- `sql/11_rpc_functions.sql` 수정
- `supabase-schema.sql` 통합본 수정
- 7개 함수 모두 동일 패턴 적용: `DROP → CREATE OR REPLACE`

---

### 11단계: 기본 컬러 Blue 변경 및 게시판 구조 정비

**기본 컬러 Coral → Blue 변경:**
- `ThemeContext.jsx` — 기본 colorTheme을 `'coral'` → `'blue'`로 변경
- `base.css` — `:root` 기본값을 Blue(#0046C8)로, Coral은 override로 전환
- `site.js` — `themeColor: '#0046C8'`

**게시판 구조 분리 (강의자료 / 참고자료):**
- `lectures` 테이블에 `category` 컬럼 추가 (`'lecture'` / `'reference'`)
- `supabase.js` — `getLectures(category)` 카테고리 필터 지원
- `LectureMaterials.jsx` — koreatech 하드코딩 PDF 삭제, DB 기반 게시판으로 재작성 (category='lecture')
- `Lectures.jsx` — category='reference' 필터 적용
- `LectureDetail.jsx` / `LectureWrite.jsx` — URL 경로 기반 자동 분기 (강의자료 ↔ 참고자료)
- `PublicLayout.jsx` — `/lectures/write`, `/lectures/edit/:id`, `/lectures/:id` 라우트 추가

**게시판 최종 구조:**
| 메뉴 | DB 테이블 | 카테고리 | 라우트 |
|------|-----------|---------|--------|
| 강의자료 | `lectures` | `lecture` | `/lectures` |
| 참고자료 | `lectures` | `reference` | `/references` |
| 게시판 | `posts` | notice/question/free | `/community/board` |
| 갤러리 | `gallery` | — | `/community/gallery` |
| 포트폴리오 | `portfolio` | — | `/community/portfolio` |
| 웹사이트 | `websites` | — | `/community/websites` |

---

## 프로젝트 구조

```
D:\marketing/
├── index.html
├── package.json
├── vite.config.js
├── CNAME
├── .gitignore
├── .env.example
├── DEVLOG.md
├── supabase-schema.sql
├── sql/
│   ├── 00_helper.sql
│   ├── 01_user_profiles.sql
│   ├── 02_posts.sql
│   ├── 03_comments.sql
│   ├── 04_lectures.sql
│   ├── 05_gallery.sql
│   ├── 06_gallery_comments.sql
│   ├── 07_portfolio.sql
│   ├── 08_portfolio_comments.sql
│   ├── 09_websites.sql
│   ├── 10_websites_comments.sql
│   └── 11_rpc_functions.sql
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   └── og-image.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   ├── admin.js
    │   └── site.js
    ├── contexts/
    │   ├── ThemeContext.jsx
    │   ├── LanguageContext.jsx
    │   ├── AuthContext.jsx
    │   └── ToastContext.jsx
    ├── hooks/
    │   ├── useAOS.js
    │   ├── useCodeCopy.js
    │   └── useTableScroller.js
    ├── utils/
    │   ├── supabase.js
    │   ├── auth.js
    │   ├── searchStorage.js
    │   └── translations.js
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── SearchModal.jsx
    │   ├── SEOHead.jsx
    │   ├── AuthGuard.jsx
    │   └── Pagination.jsx
    ├── layouts/
    │   └── PublicLayout.jsx
    ├── styles/
    │   ├── base.css
    │   ├── navbar.css
    │   ├── hero.css
    │   ├── footer.css
    │   ├── shop.css
    │   ├── auth.css
    │   ├── animations.css
    │   ├── search.css
    │   ├── toast.css
    │   ├── dark-mode.css
    │   ├── responsive.css
    │   └── site.css
    └── pages/
        ├── Home.jsx
        ├── WhatIsMarketing.jsx
        ├── WeeklyPlan.jsx
        ├── Syllabus.jsx
        ├── PracticeGuide.jsx
        ├── LessonIndex.jsx
        ├── LessonWeek1.jsx ~ LessonWeek15.jsx
        ├── DigitalHome.jsx
        ├── DigitalSEO.jsx ~ DigitalAutomation.jsx
        ├── Login.jsx, Register.jsx, ForgotPassword.jsx
        ├── MyPage.jsx, Admin.jsx, NotFound.jsx
        ├── Board.jsx, BoardDetail.jsx, BoardWrite.jsx
        ├── Gallery.jsx, GalleryDetail.jsx, GalleryWrite.jsx
        ├── Portfolio.jsx, PortfolioDetail.jsx, PortfolioWrite.jsx
        ├── Websites.jsx, WebsiteDetail.jsx, WebsiteWrite.jsx
        └── Lectures.jsx, LectureDetail.jsx, LectureWrite.jsx, LectureMaterials.jsx
```

---

## 패밀리 사이트
- **DreamIT Marketing** — marketing.dreamitbiz.com (마케팅) ← 현재 사이트
- **DreamIT KoreaTeach** — koreatech.dreamitbiz.com (컴퓨팅사고 과목 - 한국기술교육대학교 강의)
