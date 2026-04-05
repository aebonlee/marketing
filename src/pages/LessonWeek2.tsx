import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek2 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 2 - 마케팅 환경분석"
        description="거시환경(PEST), 미시환경(Porter's 5 Forces), SWOT 분석 등 마케팅 환경분석 프레임워크를 학습합니다."
        path="/lessons/week2"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 2: 마케팅 환경분석</h1>
          <p>거시환경과 미시환경을 체계적으로 분석하는 프레임워크를 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 거시환경 분석 (PEST)</h2>
            <p data-aos="fade-up">
              거시환경(Macro Environment)은 기업이 직접 통제할 수 없는 외부 환경 요인입니다.
              PEST 분석은 거시환경을 정치적, 경제적, 사회문화적, 기술적 요인으로 구분하여 체계적으로 분석하는 프레임워크입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>요인</th>
                  <th>영문</th>
                  <th>주요 분석 항목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>정치적 (Political)</td>
                  <td>Political</td>
                  <td>정부 규제, 세금 정책, 무역 정책, 정치적 안정성</td>
                </tr>
                <tr>
                  <td>경제적 (Economic)</td>
                  <td>Economic</td>
                  <td>경제 성장률, 인플레이션, 환율, 소비자 구매력</td>
                </tr>
                <tr>
                  <td>사회문화적 (Social)</td>
                  <td>Social</td>
                  <td>인구 구조, 라이프스타일, 교육 수준, 문화적 가치관</td>
                </tr>
                <tr>
                  <td>기술적 (Technological)</td>
                  <td>Technological</td>
                  <td>기술 혁신, R&D, 자동화, 디지털 전환</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>PESTLE 확장 모델:</strong> PEST에 법적(Legal) 요인과 환경적(Environmental) 요인을 추가하여 PESTLE 분석으로 확장할 수 있습니다. 최근 ESG 경영의 중요성이 높아지면서 환경적 요인의 분석이 더욱 강조되고 있습니다.</p>
            </div>

            <h2 data-aos="fade-up">2. 미시환경 분석 (Porter's 5 Forces)</h2>
            <p data-aos="fade-up">
              마이클 포터(Michael Porter)의 5 Forces 모델은 산업의 경쟁 강도와 수익성을 분석하는 프레임워크입니다.
              5가지 경쟁 요인을 통해 산업의 매력도를 평가할 수 있습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>경쟁 요인</th>
                  <th>설명</th>
                  <th>분석 포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>기존 경쟁자 간 경쟁</td>
                  <td>산업 내 현재 경쟁자들의 경쟁 강도</td>
                  <td>경쟁사 수, 시장 성장률, 차별화 정도</td>
                </tr>
                <tr>
                  <td>신규 진입자의 위협</td>
                  <td>새로운 경쟁자가 진입할 가능성</td>
                  <td>진입 장벽, 초기 투자비용, 규모의 경제</td>
                </tr>
                <tr>
                  <td>대체재의 위협</td>
                  <td>기존 제품을 대체할 수 있는 제품의 존재</td>
                  <td>전환 비용, 대체재의 가격 대비 성능</td>
                </tr>
                <tr>
                  <td>공급자의 교섭력</td>
                  <td>원재료 공급자가 가격 및 조건에 미치는 영향력</td>
                  <td>공급자 수, 전환 비용, 공급 독점도</td>
                </tr>
                <tr>
                  <td>구매자의 교섭력</td>
                  <td>고객이 가격 인하 및 품질 향상을 요구하는 힘</td>
                  <td>구매자 집중도, 정보 접근성, 전환 비용</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. SWOT 분석</h2>
            <p data-aos="fade-up">
              SWOT 분석은 기업의 내부 역량(강점/약점)과 외부 환경(기회/위협)을 종합적으로 분석하는 전략 도구입니다.
              거시환경과 미시환경 분석의 결과를 전략적 의사결정에 활용할 수 있도록 정리하는 데 유용합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th></th>
                  <th>긍정적 요인</th>
                  <th>부정적 요인</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>내부 환경</strong></td>
                  <td><strong>강점 (Strengths)</strong><br />기업이 보유한 핵심 역량, 자원, 경쟁 우위</td>
                  <td><strong>약점 (Weaknesses)</strong><br />부족한 자원, 역량 부재, 경쟁 열위</td>
                </tr>
                <tr>
                  <td><strong>외부 환경</strong></td>
                  <td><strong>기회 (Opportunities)</strong><br />시장 성장, 기술 변화, 규제 완화 등 유리한 환경</td>
                  <td><strong>위협 (Threats)</strong><br />경쟁 심화, 규제 강화, 소비자 변화 등 불리한 환경</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>SWOT 교차 전략:</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>SO 전략:</strong> 강점을 활용하여 기회를 극대화</li>
                <li><strong>WO 전략:</strong> 약점을 보완하여 기회를 활용</li>
                <li><strong>ST 전략:</strong> 강점을 활용하여 위협을 최소화</li>
                <li><strong>WT 전략:</strong> 약점을 보완하고 위협을 회피</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 환경분석 사례</h2>
            <p data-aos="fade-up">
              실제 기업의 마케팅 환경분석 사례를 통해 프레임워크의 적용 방법을 이해할 수 있습니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              사례 1: 국내 커피 시장 PEST 분석
            </h3>
            <ul data-aos="fade-up">
              <li><strong>Political:</strong> 식품위생법 강화, 1회용 컵 보증금 제도 시행</li>
              <li><strong>Economic:</strong> 소비자 물가 상승, 프리미엄 소비 트렌드 확대</li>
              <li><strong>Social:</strong> 카페 문화 일상화, 1인 가구 증가, 건강 음료 관심 증대</li>
              <li><strong>Technological:</strong> 모바일 주문(사이렌오더), AI 기반 고객 추천 시스템</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              사례 2: 스마트폰 시장 Porter's 5 Forces 분석
            </h3>
            <ul data-aos="fade-up">
              <li><strong>기존 경쟁:</strong> 삼성, 애플 양강 구도 + 중국 브랜드 약진 (높음)</li>
              <li><strong>신규 진입:</strong> 높은 기술 장벽과 초기 투자비용 (낮음)</li>
              <li><strong>대체재:</strong> 태블릿, 웨어러블 디바이스 (중간)</li>
              <li><strong>공급자 교섭력:</strong> 반도체 등 핵심 부품 공급자 영향력 (중간~높음)</li>
              <li><strong>구매자 교섭력:</strong> 브랜드 충성도에 따라 상이 (중간)</li>
            </ul>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week1" className="lesson-nav-btn prev">
                &#8592; 이전: 마케팅의 이해
              </Link>
              <Link to="/lessons/week3" className="lesson-nav-btn next">
                다음: 소비자 행동 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek2;
