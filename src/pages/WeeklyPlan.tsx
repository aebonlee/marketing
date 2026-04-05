import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const weeklyData = [
  { week: 1,  theory: '마케팅의 개념과 정의, 마케팅의 역할',                practice: '마케팅 사례 분석 (국내외 브랜드)' },
  { week: 2,  theory: '거시환경(PEST) 분석, 미시환경(3C) 분석',            practice: 'SWOT 분석 실습 (기업 사례 적용)' },
  { week: 3,  theory: '소비자 구매의사결정 과정, 관여도',                   practice: '소비자 행동 설문조사 설계' },
  { week: 4,  theory: '마케팅 조사 방법론, 1차/2차 자료 수집',              practice: '온라인 설문조사 도구 활용 실습' },
  { week: 5,  theory: '시장세분화(Segmentation), 표적시장(Targeting), 포지셔닝(Positioning)', practice: 'STP 전략 수립 워크숍' },
  { week: 6,  theory: '제품 개념, 제품수명주기(PLC), 신제품 개발',          practice: '제품 컨셉 기획서 작성' },
  { week: 7,  theory: '가격결정 방법, 가격전략 유형',                      practice: '가격 시뮬레이션 실습' },
  { week: 8,  theory: '유통채널 설계, 물류관리, 옴니채널',                  practice: '유통채널 전략 분석 (온/오프라인)' },
  { week: 9,  theory: '광고, PR, 판매촉진, IMC 전략',                     practice: '촉진 믹스 캠페인 기획' },
  { week: 10, theory: '디지털마케팅 개요, 온라인 마케팅 채널',              practice: 'Google Analytics 기초 실습' },
  { week: 11, theory: '콘텐츠 마케팅 전략, SNS 플랫폼별 특성',             practice: 'SNS 콘텐츠 제작 및 게시 실습' },
  { week: 12, theory: '검색엔진최적화(SEO), 검색광고(SEM)',                practice: 'Google Ads 키워드 광고 실습' },
  { week: 13, theory: '마케팅 데이터 분석, KPI 설정, A/B 테스트',           practice: '데이터 분석 보고서 작성' },
  { week: 14, theory: '브랜드 관리, 고객관계관리(CRM), 충성도',             practice: 'CRM 전략 수립 프로젝트' },
  { week: 15, theory: 'AI 마케팅, 마케팅 자동화, 최신 트렌드',              practice: '최종 마케팅 전략 발표' },
];

const WeeklyPlan = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.basics.weeklyPlan.title')} path="/basics/weekly-plan" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.basics.weeklyPlan.title')}</h1>
          <p>{t('site.basics.weeklyPlan.subtitle')}</p>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="board-table-wrapper">
            <table className="board-table weekly-plan-table">
              <thead>
                <tr>
                  <th style={{ width: '70px', textAlign: 'center' }}>{t('site.basics.weeklyPlan.week')}</th>
                  <th>{t('site.basics.weeklyPlan.theory')} (2{t('site.basics.weeklyPlan.hours')})</th>
                  <th>{t('site.basics.weeklyPlan.practice')} (2{t('site.basics.weeklyPlan.hours')})</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((row) => (
                  <tr key={row.week} className={row.week === 8 || row.week === 15 ? 'exam-row' : ''}>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.week}</td>
                    <td>{row.theory}</td>
                    <td>{row.practice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeeklyPlan;
