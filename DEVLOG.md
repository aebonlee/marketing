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
- `npm run build` — 프로덕션 빌드
- GitHub Pages 배포 (marketing.dreamitbiz.com)

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
├── public/
│   ├── CNAME
│   └── favicon.svg
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
- **DreamIT Computing** — computing.dreamitbiz.com (컴퓨팅 사고)
- **DreamIT Marketing** — marketing.dreamitbiz.com (마케팅) ← 현재 사이트
- **DreamIT KoreaTeach** — koreatech.dreamitbiz.com (한국어교육)
