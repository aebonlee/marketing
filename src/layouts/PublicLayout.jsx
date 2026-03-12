import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import useCodeCopy from '../hooks/useCodeCopy';
import useTableScroller from '../hooks/useTableScroller';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const WhatIsMarketing = lazy(() => import('../pages/WhatIsMarketing'));
const WeeklyPlan = lazy(() => import('../pages/WeeklyPlan'));
const Syllabus = lazy(() => import('../pages/Syllabus'));
const PracticeGuide = lazy(() => import('../pages/PracticeGuide'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));
const LessonIndex = lazy(() => import('../pages/LessonIndex'));
const LessonWeek1 = lazy(() => import('../pages/LessonWeek1'));
const LessonWeek2 = lazy(() => import('../pages/LessonWeek2'));
const LessonWeek3 = lazy(() => import('../pages/LessonWeek3'));
const LessonWeek4 = lazy(() => import('../pages/LessonWeek4'));
const LessonWeek5 = lazy(() => import('../pages/LessonWeek5'));
const LessonWeek6 = lazy(() => import('../pages/LessonWeek6'));
const LessonWeek7 = lazy(() => import('../pages/LessonWeek7'));
const LessonWeek8 = lazy(() => import('../pages/LessonWeek8'));
const LessonWeek9 = lazy(() => import('../pages/LessonWeek9'));
const LessonWeek10 = lazy(() => import('../pages/LessonWeek10'));
const LessonWeek11 = lazy(() => import('../pages/LessonWeek11'));
const LessonWeek12 = lazy(() => import('../pages/LessonWeek12'));
const LessonWeek13 = lazy(() => import('../pages/LessonWeek13'));
const LessonWeek14 = lazy(() => import('../pages/LessonWeek14'));
const LessonWeek15 = lazy(() => import('../pages/LessonWeek15'));
const DigitalHome = lazy(() => import('../pages/DigitalHome'));
const DigitalSEO = lazy(() => import('../pages/DigitalSEO'));
const DigitalSEM = lazy(() => import('../pages/DigitalSEM'));
const DigitalSNS = lazy(() => import('../pages/DigitalSNS'));
const DigitalContent = lazy(() => import('../pages/DigitalContent'));
const DigitalEmail = lazy(() => import('../pages/DigitalEmail'));
const DigitalPerformance = lazy(() => import('../pages/DigitalPerformance'));
const DigitalInfluencer = lazy(() => import('../pages/DigitalInfluencer'));
const DigitalAutomation = lazy(() => import('../pages/DigitalAutomation'));
const Board = lazy(() => import('../pages/Board'));
const BoardDetail = lazy(() => import('../pages/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/BoardWrite'));
const Gallery = lazy(() => import('../pages/Gallery'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetail'));
const GalleryWrite = lazy(() => import('../pages/GalleryWrite'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const PortfolioWrite = lazy(() => import('../pages/PortfolioWrite'));
const Websites = lazy(() => import('../pages/Websites'));
const WebsiteDetail = lazy(() => import('../pages/WebsiteDetail'));
const WebsiteWrite = lazy(() => import('../pages/WebsiteWrite'));
const LectureMaterials = lazy(() => import('../pages/LectureMaterials'));
const Lectures = lazy(() => import('../pages/Lectures'));
const LectureDetail = lazy(() => import('../pages/LectureDetail'));
const LectureWrite = lazy(() => import('../pages/LectureWrite'));
const Admin = lazy(() => import('../pages/Admin'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = () => {
  useCodeCopy();
  useTableScroller();

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />

            {/* Marketing Basics */}
            <Route path="/basics/what-is-marketing" element={<WhatIsMarketing />} />
            <Route path="/basics/weekly-plan" element={<WeeklyPlan />} />
            <Route path="/basics/syllabus" element={<Syllabus />} />
            <Route path="/basics/practice-guide" element={<PracticeGuide />} />

            {/* 15-Week Lessons */}
            <Route path="/lessons" element={<LessonIndex />} />
            <Route path="/lessons/week1" element={<LessonWeek1 />} />
            <Route path="/lessons/week2" element={<LessonWeek2 />} />
            <Route path="/lessons/week3" element={<LessonWeek3 />} />
            <Route path="/lessons/week4" element={<LessonWeek4 />} />
            <Route path="/lessons/week5" element={<LessonWeek5 />} />
            <Route path="/lessons/week6" element={<LessonWeek6 />} />
            <Route path="/lessons/week7" element={<LessonWeek7 />} />
            <Route path="/lessons/week8" element={<LessonWeek8 />} />
            <Route path="/lessons/week9" element={<LessonWeek9 />} />
            <Route path="/lessons/week10" element={<LessonWeek10 />} />
            <Route path="/lessons/week11" element={<LessonWeek11 />} />
            <Route path="/lessons/week12" element={<LessonWeek12 />} />
            <Route path="/lessons/week13" element={<LessonWeek13 />} />
            <Route path="/lessons/week14" element={<LessonWeek14 />} />
            <Route path="/lessons/week15" element={<LessonWeek15 />} />

            {/* Digital Marketing */}
            <Route path="/digital" element={<DigitalHome />} />
            <Route path="/digital/seo" element={<DigitalSEO />} />
            <Route path="/digital/sem" element={<DigitalSEM />} />
            <Route path="/digital/sns" element={<DigitalSNS />} />
            <Route path="/digital/content" element={<DigitalContent />} />
            <Route path="/digital/email" element={<DigitalEmail />} />
            <Route path="/digital/performance" element={<DigitalPerformance />} />
            <Route path="/digital/influencer" element={<DigitalInfluencer />} />
            <Route path="/digital/automation" element={<DigitalAutomation />} />

            {/* Lectures (강의자료) */}
            <Route path="/lectures/materials" element={<LectureMaterials />} />
            <Route path="/lectures" element={<LectureMaterials />} />

            {/* References (참고자료) */}
            <Route path="/references" element={<Lectures />} />
            <Route path="/references/write" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/edit/:id" element={<AuthGuard><LectureWrite /></AuthGuard>} />
            <Route path="/references/:id" element={<LectureDetail />} />

            {/* Community — Board */}
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/community/board/:id" element={<BoardDetail />} />

            {/* Community — Gallery */}
            <Route path="/community/gallery" element={<Gallery />} />
            <Route path="/community/gallery/write" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/edit/:id" element={<AuthGuard><GalleryWrite /></AuthGuard>} />
            <Route path="/community/gallery/:id" element={<GalleryDetail />} />

            {/* Community — Portfolio */}
            <Route path="/community/portfolio" element={<Portfolio />} />
            <Route path="/community/portfolio/write" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/edit/:id" element={<AuthGuard><PortfolioWrite /></AuthGuard>} />
            <Route path="/community/portfolio/:id" element={<PortfolioDetail />} />

            {/* Community — Websites */}
            <Route path="/community/websites" element={<Websites />} />
            <Route path="/community/websites/write" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/edit/:id" element={<AuthGuard><WebsiteWrite /></AuthGuard>} />
            <Route path="/community/websites/:id" element={<WebsiteDetail />} />

            {/* Admin */}
            <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />

            {/* Legacy redirects */}
            <Route path="/board" element={<Navigate to="/community/board" replace />} />
            <Route path="/board/:id" element={<Navigate to="/community/board" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
