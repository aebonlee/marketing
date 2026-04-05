import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const categories = [
  {
    path: '/digital/seo',
    title: 'SEO (검색엔진최적화)',
    desc: '검색 결과 상위 노출을 위한 최적화 전략',
    icon: '🔎',
  },
  {
    path: '/digital/sem',
    title: 'SEM (검색광고)',
    desc: 'Google Ads, 네이버 검색광고 실전',
    icon: '💡',
  },
  {
    path: '/digital/sns',
    title: 'SNS 마케팅',
    desc: '인스타그램, 유튜브, 틱톡 마케팅 전략',
    icon: '📱',
  },
  {
    path: '/digital/content',
    title: '콘텐츠 마케팅',
    desc: '가치 있는 콘텐츠로 고객을 끌어오는 전략',
    icon: '✍️',
  },
  {
    path: '/digital/email',
    title: '이메일 마케팅',
    desc: '효과적인 이메일 캠페인 설계와 자동화',
    icon: '📧',
  },
  {
    path: '/digital/performance',
    title: '퍼포먼스 마케팅',
    desc: '데이터 기반 성과 최적화 마케팅',
    icon: '📈',
  },
  {
    path: '/digital/influencer',
    title: '인플루언서 마케팅',
    desc: '인플루언서 협업과 캠페인 관리',
    icon: '⭐',
  },
  {
    path: '/digital/automation',
    title: '마케팅 자동화',
    desc: '마케팅 프로세스 자동화와 효율화',
    icon: '⚙️',
  },
];

const DigitalHome = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="디지털마케팅 실무"
        description="SEO, SEM, SNS, 콘텐츠, 이메일, 퍼포먼스, 인플루언서, 마케팅 자동화까지 디지털마케팅 실무를 체계적으로 학습합니다."
        path="/digital"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>디지털마케팅 실무</h1>
          <p>현업에서 바로 활용할 수 있는 디지털마케팅 핵심 역량을 키워보세요.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="category-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {categories.map((item, index) => (
              <Link
                to={item.path}
                key={item.path}
                className="category-card"
                data-aos="fade-up"
                data-aos-delay={index * 60}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  padding: '32px 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-white)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }}>
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalHome;
