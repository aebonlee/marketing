import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';
import site from '../config/site';

const Home = () => {
  const { t } = useLanguage();
  useAOS();

  const weeklyLessons = [
    { path: '/lessons/week1',  step: '1주차',  title: '마케팅의 이해',         desc: '마케팅 개념, 정의, 역할 이해',           icon: '📖' },
    { path: '/lessons/week2',  step: '2주차',  title: '마케팅 환경분석',       desc: 'PEST, SWOT, 3C 분석 기법',              icon: '🔍' },
    { path: '/lessons/week3',  step: '3주차',  title: '소비자 행동',           desc: '구매의사결정 과정과 영향 요인',           icon: '🧠' },
    { path: '/lessons/week4',  step: '4주차',  title: '마케팅 조사',           desc: '시장조사 방법론과 데이터 수집',           icon: '📊' },
    { path: '/lessons/week5',  step: '5주차',  title: 'STP 전략',             desc: '시장세분화, 표적시장, 포지셔닝',          icon: '🎯' },
    { path: '/lessons/week6',  step: '6주차',  title: '제품 전략',             desc: '제품 개발, 브랜딩, 제품수명주기',         icon: '📦' },
    { path: '/lessons/week7',  step: '7주차',  title: '가격 전략',             desc: '가격결정 방법과 가격전략 유형',           icon: '💰' },
    { path: '/lessons/week8',  step: '8주차',  title: '유통 전략',             desc: '유통채널 설계와 물류 관리',              icon: '🚚' },
    { path: '/lessons/week9',  step: '9주차',  title: '촉진 전략',             desc: '광고, PR, 판매촉진, 인적판매',           icon: '📢' },
    { path: '/lessons/week10', step: '10주차', title: '디지털마케팅 기초',      desc: '디지털마케팅 개요와 온라인 채널',         icon: '💻' },
    { path: '/lessons/week11', step: '11주차', title: '콘텐츠 & SNS 마케팅',   desc: '콘텐츠 전략과 소셜미디어 활용',          icon: '📱' },
    { path: '/lessons/week12', step: '12주차', title: 'SEO & SEM',            desc: '검색엔진최적화와 검색광고',              icon: '🔎' },
    { path: '/lessons/week13', step: '13주차', title: '데이터 기반 마케팅',     desc: 'Google Analytics, 성과 분석',           icon: '📈' },
    { path: '/lessons/week14', step: '14주차', title: '브랜드 & CRM',          desc: '브랜드 관리와 고객관계관리',             icon: '🤝' },
    { path: '/lessons/week15', step: '15주차', title: '마케팅 트렌드',          desc: 'AI 마케팅, 메타버스, 최신 트렌드',       icon: '🚀' },
  ];

  const digitalTopics = [
    { path: '/digital/seo',          title: 'SEO',              desc: '검색엔진최적화 전략과 실무',       icon: '🔎' },
    { path: '/digital/sem',          title: 'SEM',              desc: '검색광고(Google Ads) 운영',       icon: '💡' },
    { path: '/digital/sns',          title: 'SNS 마케팅',        desc: '소셜미디어 채널별 운영 전략',      icon: '📱' },
    { path: '/digital/content',      title: '콘텐츠 마케팅',      desc: '블로그, 영상, 콘텐츠 기획',       icon: '✍️' },
    { path: '/digital/email',        title: '이메일 마케팅',      desc: '뉴스레터, 자동화 이메일 캠페인',   icon: '📧' },
    { path: '/digital/performance',  title: '퍼포먼스 마케팅',    desc: 'ROAS, CPA, 전환 최적화',         icon: '📈' },
    { path: '/digital/influencer',   title: '인플루언서 마케팅',   desc: '인플루언서 협업과 캠페인 전략',    icon: '⭐' },
    { path: '/digital/automation',   title: '마케팅 자동화',      desc: 'CRM 연동, 자동화 플랫폼 활용',    icon: '⚙️' },
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              <span className="hero-title-line1">{t('site.home.title')}</span>{' '}
              <span className="hero-title-line2">{t('site.home.subtitle')}</span>
            </h1>
            <p className="hero-description">{t('site.home.heroDesc')}</p>
            <div className="hero-actions">
              <Link to="/lessons" className="hero-btn primary">{t('site.home.startLearning')}</Link>
              <Link to="/community/board" className="hero-btn secondary">{t('site.home.goToBoard')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Marketing */}
      <section className="section ct-intro-section">
        <div className="container">
          <div className="ct-intro" data-aos="fade-up">
            <h2 className="section-title">{t('site.home.whatIsMarketing')}</h2>
            <p className="ct-description">{t('site.home.marketingDescription')}</p>
          </div>
          <div className="learning-goals" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('site.home.learningGoals')}</h3>
            <ul className="goals-list">
              <li>{t('site.home.goal1')}</li>
              <li>{t('site.home.goal2')}</li>
              <li>{t('site.home.goal3')}</li>
              <li>{t('site.home.goal4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 15-Week Curriculum Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.home.curriculum')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.home.curriculumDesc')}</p>
          <div className="curriculum-grid">
            {weeklyLessons.map((ch, i) => (
              <Link
                to={ch.path}
                key={ch.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="curriculum-step">{ch.step}</span>
                <span className="curriculum-icon">{ch.icon}</span>
                <h3 className="curriculum-card-title">{ch.title}</h3>
                <p className="curriculum-card-desc">{ch.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Practice Cards */}
      <section className="section curriculum-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('site.home.digitalTitle')}</h2>
          <p className="section-subtitle" data-aos="fade-up">{t('site.home.digitalDesc')}</p>
          <div className="curriculum-grid">
            {digitalTopics.map((item, i) => (
              <Link
                to={item.path}
                key={item.path}
                className="curriculum-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="curriculum-icon">{item.icon}</span>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
