import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek1 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 1 - 마케팅의 이해"
        description="마케팅의 정의, 역사적 발전, 마케팅 콘셉트, 마케팅의 중요성과 핵심 용어를 학습합니다."
        path="/lessons/week1"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 1: 마케팅의 이해</h1>
          <p>마케팅의 기본 개념과 역사적 발전, 핵심 콘셉트를 이해합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 마케팅의 정의</h2>
            <p data-aos="fade-up">
              마케팅(Marketing)이란 고객의 필요(Needs)와 욕구(Wants)를 파악하고, 이를 충족시키는 제품이나 서비스를
              개발하여 고객에게 가치를 전달하는 일련의 활동을 의미합니다.
            </p>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>미국마케팅학회(AMA) 정의:</strong></p>
              <p>"마케팅은 고객, 의뢰인, 파트너, 그리고 사회 전체에 가치 있는 제공물을 창조, 전달, 교환하기 위한 활동, 제도, 프로세스이다."</p>
            </div>
            <p data-aos="fade-up">
              필립 코틀러(Philip Kotler)는 마케팅을 "수익성 있는 방식으로 고객의 필요를 충족시키는 것"이라고 정의했습니다.
              마케팅은 단순한 판매 활동이 아니라, 고객 가치 창출을 위한 전략적 경영 활동입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>판매(Selling)</th>
                  <th>마케팅(Marketing)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>출발점</td>
                  <td>공장(제품)</td>
                  <td>시장(고객 필요)</td>
                </tr>
                <tr>
                  <td>초점</td>
                  <td>기존 제품</td>
                  <td>고객 가치</td>
                </tr>
                <tr>
                  <td>수단</td>
                  <td>판촉, 광고</td>
                  <td>통합 마케팅</td>
                </tr>
                <tr>
                  <td>목표</td>
                  <td>매출 극대화</td>
                  <td>고객 만족을 통한 이익</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">2. 마케팅의 역사적 발전</h2>
            <p data-aos="fade-up">
              마케팅은 산업혁명 이후 시장 환경의 변화에 따라 여러 단계를 거쳐 발전해 왔습니다.
              각 시대의 경영 철학은 시장 상황과 소비자의 변화를 반영합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>시대</th>
                  <th>중심 개념</th>
                  <th>특징</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>생산 지향 시대 (1900s~)</td>
                  <td>대량 생산</td>
                  <td>공급 부족, 만들면 팔리는 시대</td>
                </tr>
                <tr>
                  <td>제품 지향 시대 (1930s~)</td>
                  <td>품질 개선</td>
                  <td>더 좋은 제품이 선택받는다는 믿음</td>
                </tr>
                <tr>
                  <td>판매 지향 시대 (1950s~)</td>
                  <td>적극적 판매</td>
                  <td>공급 과잉, 공격적 판촉 활동</td>
                </tr>
                <tr>
                  <td>마케팅 지향 시대 (1960s~)</td>
                  <td>고객 중심</td>
                  <td>고객 필요 파악 후 제품 개발</td>
                </tr>
                <tr>
                  <td>사회적 마케팅 시대 (1990s~)</td>
                  <td>사회적 책임</td>
                  <td>고객 + 사회 전체 이익 고려</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 마케팅 콘셉트</h2>
            <p data-aos="fade-up">
              마케팅 콘셉트(Marketing Concept)는 기업이 시장에 접근하는 철학적 관점을 의미합니다.
              크게 5가지 주요 콘셉트가 있습니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (1) 생산 콘셉트 (Production Concept)
            </h3>
            <p data-aos="fade-up">
              소비자는 저렴하고 쉽게 구할 수 있는 제품을 선호한다는 관점입니다.
              대량 생산과 유통 효율성에 초점을 맞춥니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (2) 제품 콘셉트 (Product Concept)
            </h3>
            <p data-aos="fade-up">
              소비자는 품질, 성능, 혁신적 특징이 뛰어난 제품을 선호한다는 관점입니다.
              지속적인 제품 개선에 초점을 맞추지만, "마케팅 근시안(Marketing Myopia)"에 빠질 수 있는 위험이 있습니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (3) 판매 콘셉트 (Selling Concept)
            </h3>
            <p data-aos="fade-up">
              적극적인 판매와 촉진 활동을 하지 않으면 소비자가 충분히 구매하지 않는다는 관점입니다.
              비탐색재(보험, 백과사전 등)에서 많이 활용됩니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (4) 마케팅 콘셉트 (Marketing Concept)
            </h3>
            <p data-aos="fade-up">
              목표 시장의 필요와 욕구를 파악하고, 경쟁자보다 효과적으로 고객 만족을 전달하는 것이 핵심입니다.
              "만들어서 파는 것"이 아니라 "고객이 원하는 것을 만드는 것"이 중심 철학입니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (5) 사회적 마케팅 콘셉트 (Societal Marketing Concept)
            </h3>
            <p data-aos="fade-up">
              고객의 욕구 충족과 함께 사회 전체의 복지를 고려하는 관점입니다.
              환경 보호, 윤리적 경영, CSR(기업의 사회적 책임) 등이 포함됩니다.
            </p>

            <h2 data-aos="fade-up">4. 마케팅의 중요성</h2>
            <p data-aos="fade-up">
              현대 경영에서 마케팅은 기업 성공의 핵심 요소입니다. 마케팅의 주요 역할은 다음과 같습니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>고객 가치 창출:</strong> 고객의 필요를 충족시키는 제품과 서비스를 제공합니다.</li>
              <li><strong>시장 기회 발견:</strong> 새로운 시장 기회를 탐색하고 사업 확장의 기반을 마련합니다.</li>
              <li><strong>경쟁 우위 확보:</strong> 차별화된 가치 제안으로 경쟁에서 우위를 점합니다.</li>
              <li><strong>수익성 향상:</strong> 효과적인 마케팅 전략으로 매출과 이익을 증대시킵니다.</li>
              <li><strong>브랜드 구축:</strong> 강력한 브랜드 이미지와 고객 충성도를 형성합니다.</li>
              <li><strong>사회적 가치 실현:</strong> 사회 문제 해결에 기여하며 지속가능한 성장을 추구합니다.</li>
            </ul>

            <h2 data-aos="fade-up">5. 핵심 용어 정리</h2>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>용어</th>
                  <th>정의</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>필요 (Needs)</td>
                  <td>인간이 느끼는 기본적인 결핍 상태 (의식주, 안전, 소속감 등)</td>
                </tr>
                <tr>
                  <td>욕구 (Wants)</td>
                  <td>문화와 개인적 특성에 의해 형성된 필요의 구체적 형태</td>
                </tr>
                <tr>
                  <td>수요 (Demands)</td>
                  <td>구매력이 뒷받침된 욕구</td>
                </tr>
                <tr>
                  <td>가치 (Value)</td>
                  <td>고객이 제품에서 얻는 혜택과 지불하는 비용의 차이</td>
                </tr>
                <tr>
                  <td>교환 (Exchange)</td>
                  <td>가치 있는 것을 제공하고 대가를 받는 행위</td>
                </tr>
                <tr>
                  <td>마케팅 믹스 (4P)</td>
                  <td>Product(제품), Price(가격), Place(유통), Promotion(촉진)</td>
                </tr>
                <tr>
                  <td>STP</td>
                  <td>Segmentation(세분화), Targeting(타겟팅), Positioning(포지셔닝)</td>
                </tr>
                <tr>
                  <td>CRM</td>
                  <td>Customer Relationship Management, 고객관계관리</td>
                </tr>
              </tbody>
            </table>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons" className="lesson-nav-btn prev">
                &#8592; 목록으로
              </Link>
              <Link to="/lessons/week2" className="lesson-nav-btn next">
                다음: 마케팅 환경분석 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek1;
