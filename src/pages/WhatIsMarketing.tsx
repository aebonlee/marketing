import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const WhatIsMarketing = () => {
  useAOS();

  return (
    <>
      <SEOHead title="마케팅이란?" path="/basics/what-is-marketing" />

      <section className="page-header">
        <div className="container">
          <h1>마케팅이란?</h1>
          <p>Marketing — 고객 가치를 창출하고 전달하는 경영 활동의 핵심</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>마케팅의 정의와 핵심 개념을 설명할 수 있다.</li>
                <li>마케팅과 판매(영업)의 차이를 구분할 수 있다.</li>
                <li>현대 마케팅의 진화 과정을 이해한다.</li>
                <li>마케팅 믹스 4P의 구성요소를 설명할 수 있다.</li>
              </ul>
            </div>

            {/* ─── 1. 마케팅의 정의 ─── */}
            <h2 data-aos="fade-up">1. 마케팅의 정의</h2>

            <h3>1.1 AMA(미국마케팅협회)의 정의</h3>
            <p>
              <strong>미국마케팅협회(AMA)</strong>는 마케팅을 다음과 같이 정의합니다:
            </p>

            <div className="callout-box" data-aos="fade-up">
              <p><em>
                "마케팅은 고객, 파트너, 그리고 사회 전체에 가치 있는 제공물을 창출하고, 전달하고,
                교환하는 활동, 제도, 그리고 프로세스이다."
              </em></p>
              <p style={{ textAlign: 'right', marginTop: '8px' }}>— AMA, 2017</p>
            </div>

            <h3>1.2 필립 코틀러(Philip Kotler)의 정의</h3>
            <p>
              현대 마케팅의 아버지로 불리는 <strong>필립 코틀러(Philip Kotler)</strong>는
              마케팅을 다음과 같이 설명합니다:
            </p>

            <div className="callout-box" data-aos="fade-up">
              <p><em>
                "마케팅은 수익성 있는 방식으로 고객의 필요(Needs)를 충족시키는 것이다."
              </em></p>
              <p style={{ textAlign: 'right', marginTop: '8px' }}>— Philip Kotler</p>
            </div>

            <p>
              즉, 마케팅은 단순히 제품을 판매하는 것이 아니라,
              <strong> 고객이 원하는 가치를 파악하고 이를 충족시키는 전체적인 과정</strong>을 의미합니다.
            </p>

            {/* ─── 2. 마케팅의 핵심 요소 ─── */}
            <h2 data-aos="fade-up">2. 마케팅의 핵심 요소</h2>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>핵심 요소</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>고객 가치(Customer Value)</strong></td>
                  <td>고객이 제품/서비스로부터 얻는 혜택과 지불하는 비용의 차이</td>
                  <td>애플 제품의 디자인, 사용성, 브랜드 가치</td>
                </tr>
                <tr>
                  <td><strong>교환(Exchange)</strong></td>
                  <td>양 당사자가 서로 가치 있는 것을 주고받는 행위</td>
                  <td>소비자는 비용을 지불하고, 기업은 제품/서비스를 제공</td>
                </tr>
                <tr>
                  <td><strong>관계 마케팅(Relationship Marketing)</strong></td>
                  <td>일회성 거래가 아닌 장기적 고객 관계 구축</td>
                  <td>멤버십 프로그램, CRM, 로열티 프로그램</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 마케팅 vs 판매 ─── */}
            <h2 data-aos="fade-up">3. 마케팅 vs 판매 (Sales)</h2>

            <p>
              마케팅과 판매(영업)는 흔히 혼동되지만, 근본적으로 다른 개념입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구분</th><th>마케팅 (Marketing)</th><th>판매 (Sales)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>출발점</strong></td>
                  <td>고객의 필요와 욕구</td>
                  <td>기업의 제품</td>
                </tr>
                <tr>
                  <td><strong>초점</strong></td>
                  <td>고객 가치 창출</td>
                  <td>제품 판매량 극대화</td>
                </tr>
                <tr>
                  <td><strong>시점</strong></td>
                  <td>제품 기획 이전부터 시작</td>
                  <td>제품 생산 이후 시작</td>
                </tr>
                <tr>
                  <td><strong>방향</strong></td>
                  <td>시장 → 기업 (Outside-In)</td>
                  <td>기업 → 시장 (Inside-Out)</td>
                </tr>
                <tr>
                  <td><strong>목표</strong></td>
                  <td>장기적 고객 만족과 관계</td>
                  <td>단기적 매출과 이익</td>
                </tr>
                <tr>
                  <td><strong>비유</strong></td>
                  <td>고객이 원하는 낚시터를 찾아주기</td>
                  <td>잡은 물고기를 팔기</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 포인트</h3>
              <p>
                피터 드러커(Peter Drucker)는 이렇게 말했습니다:<br />
                <em>"마케팅의 목적은 판매를 불필요하게 만드는 것이다."</em><br />
                고객을 충분히 이해하면, 제품이 스스로 팔리게 됩니다.
              </p>
            </div>

            {/* ─── 4. 현대 마케팅의 진화 ─── */}
            <h2 data-aos="fade-up">4. 현대 마케팅의 진화</h2>

            <p>마케팅은 시대에 따라 끊임없이 진화해왔습니다:</p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>시기</th><th>특징</th><th>핵심 키워드</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>생산 지향</strong></td>
                  <td>~1930년대</td>
                  <td>대량 생산으로 원가 절감, 공급 부족 시대</td>
                  <td>효율, 대량생산</td>
                </tr>
                <tr>
                  <td><strong>제품 지향</strong></td>
                  <td>1930~1950년대</td>
                  <td>좋은 품질의 제품이 스스로 팔린다는 믿음</td>
                  <td>품질, 성능</td>
                </tr>
                <tr>
                  <td><strong>판매 지향</strong></td>
                  <td>1950~1960년대</td>
                  <td>적극적 판매 촉진과 광고 활동</td>
                  <td>광고, 프로모션</td>
                </tr>
                <tr>
                  <td><strong>마케팅 지향</strong></td>
                  <td>1960~2000년대</td>
                  <td>고객 니즈 파악 후 제품 개발</td>
                  <td>고객 중심, STP, 4P</td>
                </tr>
                <tr>
                  <td><strong>디지털 마케팅</strong></td>
                  <td>2000년대~</td>
                  <td>인터넷, 소셜미디어, 모바일 중심</td>
                  <td>SEO, SNS, 콘텐츠</td>
                </tr>
                <tr>
                  <td><strong>데이터 기반 마케팅</strong></td>
                  <td>2010년대~현재</td>
                  <td>빅데이터, AI, 개인화 마케팅</td>
                  <td>AI, 자동화, 개인화</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. 마케팅 믹스 4P ─── */}
            <h2 data-aos="fade-up">5. 마케팅 믹스 4P</h2>

            <p>
              <strong>마케팅 믹스(Marketing Mix)</strong>는 기업이 목표 시장에서 마케팅 목표를
              달성하기 위해 사용하는 통제 가능한 마케팅 도구의 집합입니다.
              E. Jerome McCarthy가 제안한 <strong>4P</strong>가 가장 대표적입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>4P</th><th>영문</th><th>핵심 질문</th><th>주요 내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>제품 (Product)</strong></td>
                  <td>Product</td>
                  <td>무엇을 팔 것인가?</td>
                  <td>제품 설계, 품질, 브랜드, 포장, 서비스</td>
                </tr>
                <tr>
                  <td><strong>가격 (Price)</strong></td>
                  <td>Price</td>
                  <td>얼마에 팔 것인가?</td>
                  <td>가격 결정, 할인, 결제 조건, 가격 전략</td>
                </tr>
                <tr>
                  <td><strong>유통 (Place)</strong></td>
                  <td>Place</td>
                  <td>어디서 팔 것인가?</td>
                  <td>유통 채널, 물류, 재고 관리, 입지 선정</td>
                </tr>
                <tr>
                  <td><strong>촉진 (Promotion)</strong></td>
                  <td>Promotion</td>
                  <td>어떻게 알릴 것인가?</td>
                  <td>광고, PR, 판매촉진, 인적판매, 디지털 마케팅</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>4P에서 4C로의 진화</h3>
              <p>
                로버트 라우터본(Robert Lauterborn)은 기업 관점의 4P를 고객 관점의 <strong>4C</strong>로 전환할 것을 제안했습니다:
              </p>
              <ul>
                <li><strong>Product → Customer Value</strong> (고객 가치)</li>
                <li><strong>Price → Cost</strong> (고객 비용)</li>
                <li><strong>Place → Convenience</strong> (편의성)</li>
                <li><strong>Promotion → Communication</strong> (소통)</li>
              </ul>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>마케팅</strong>은 고객의 필요를 파악하고 가치를 창출하여 교환하는 일련의 과정이다.</li>
                <li>핵심 요소: <strong>고객 가치, 교환, 관계 마케팅</strong></li>
                <li>마케팅은 판매와 다르다 — 고객 관점에서 출발하여 장기적 관계를 추구한다.</li>
                <li>마케팅은 생산 지향 → 제품 지향 → 판매 지향 → 마케팅 지향 → <strong>디지털/데이터 기반</strong>으로 진화했다.</li>
                <li>마케팅 믹스 4P: <strong>Product, Price, Place, Promotion</strong></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsMarketing;
