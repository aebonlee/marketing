import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek7 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 7 - 가격 전략"
        description="가격 결정 요인, 가격 전략 유형, 가격 탄력성, 할인 및 프로모션 가격 전략을 학습합니다."
        path="/lessons/week7"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 7: 가격 전략</h1>
          <p>가격 결정의 핵심 요인과 다양한 가격 전략 유형을 체계적으로 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 가격 결정 요인</h2>
            <p data-aos="fade-up">
              가격(Price)은 마케팅 믹스(4P) 중 유일하게 수익을 직접 창출하는 요소입니다.
              가격 결정은 기업의 수익성과 시장 경쟁력에 직접적인 영향을 미칩니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>요인 구분</th>
                  <th>세부 요인</th>
                  <th>영향</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}><strong>내부 요인</strong></td>
                  <td>마케팅 목표</td>
                  <td>생존, 이익 극대화, 시장 점유율, 품질 리더십</td>
                </tr>
                <tr>
                  <td>마케팅 믹스 전략</td>
                  <td>제품, 유통, 촉진과의 일관성 필요</td>
                </tr>
                <tr>
                  <td>원가 구조</td>
                  <td>고정비, 변동비가 가격의 하한선 결정</td>
                </tr>
                <tr>
                  <td rowSpan={3}><strong>외부 요인</strong></td>
                  <td>시장 수요</td>
                  <td>수요의 크기와 가격 민감도</td>
                </tr>
                <tr>
                  <td>경쟁 환경</td>
                  <td>경쟁사의 가격, 제품, 전략</td>
                </tr>
                <tr>
                  <td>기타 환경</td>
                  <td>경제 상황, 정부 규제, 유통업자 반응</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>가격 결정의 3C 모델:</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>Cost (원가):</strong> 가격의 하한선 - 최소한 원가를 회수해야 함</li>
                <li><strong>Customer (고객):</strong> 가격의 상한선 - 고객이 인식하는 가치의 한계</li>
                <li><strong>Competition (경쟁):</strong> 가격의 기준점 - 경쟁사 가격을 참고하여 포지셔닝</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. 가격 전략 유형</h2>
            <p data-aos="fade-up">
              기업은 제품의 특성, 시장 상황, 마케팅 목표에 따라 다양한 가격 전략을 활용합니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (1) 침투 가격 전략 (Penetration Pricing)
            </h3>
            <p data-aos="fade-up">
              초기에 낮은 가격으로 시장에 진입하여 빠르게 시장 점유율을 확보하는 전략입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>적합한 상황</td>
                  <td>가격 민감도가 높은 시장, 규모의 경제가 작용하는 경우</td>
                </tr>
                <tr>
                  <td>장점</td>
                  <td>빠른 시장 침투, 경쟁자 진입 억제</td>
                </tr>
                <tr>
                  <td>단점</td>
                  <td>초기 이익 낮음, 가격 인상 시 고객 저항 가능</td>
                </tr>
                <tr>
                  <td>사례</td>
                  <td>샤오미(저가 스마트폰), 넷플릭스(초기 구독료)</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (2) 스키밍 가격 전략 (Skimming Pricing)
            </h3>
            <p data-aos="fade-up">
              초기에 높은 가격을 설정하고 점차 가격을 인하하는 전략입니다.
              혁신적인 제품이나 프리미엄 시장에서 주로 활용됩니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>적합한 상황</td>
                  <td>혁신 제품, 강력한 브랜드 파워, 높은 진입 장벽</td>
                </tr>
                <tr>
                  <td>장점</td>
                  <td>초기 개발비 빠른 회수, 프리미엄 이미지 구축</td>
                </tr>
                <tr>
                  <td>단점</td>
                  <td>높은 가격이 경쟁자를 끌어들일 수 있음</td>
                </tr>
                <tr>
                  <td>사례</td>
                  <td>애플 아이폰 신모델 출시, 소니 플레이스테이션</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (3) 경쟁 가격 전략 (Competitive Pricing)
            </h3>
            <p data-aos="fade-up">
              경쟁사의 가격을 기준으로 가격을 설정하는 전략입니다.
              시장에서의 상대적 위치를 고려하여 동일, 상위, 하위 가격을 책정합니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>프리미엄 가격:</strong> 경쟁사보다 높은 가격 (차별화된 가치 제공)</li>
              <li><strong>동일 가격:</strong> 경쟁사와 유사한 가격 (다른 요소로 차별화)</li>
              <li><strong>저가 전략:</strong> 경쟁사보다 낮은 가격 (원가 우위 필요)</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (4) 심리적 가격 전략 (Psychological Pricing)
            </h3>
            <p data-aos="fade-up">
              소비자의 심리를 이용하여 가격을 설정하는 전략입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>단수 가격</td>
                  <td>9로 끝나는 가격으로 저렴한 느낌 전달</td>
                  <td>10,000원 대신 9,900원</td>
                </tr>
                <tr>
                  <td>명성 가격</td>
                  <td>높은 가격으로 고품질 이미지 전달</td>
                  <td>에르메스, 롤렉스의 프리미엄 가격</td>
                </tr>
                <tr>
                  <td>관습 가격</td>
                  <td>소비자가 기대하는 통상적 가격 유지</td>
                  <td>커피 한 잔 가격, 자판기 음료 가격</td>
                </tr>
                <tr>
                  <td>앵커링 효과</td>
                  <td>기준 가격을 먼저 제시하여 비교 유도</td>
                  <td>"정가 50,000원 → 할인가 29,900원"</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 가격 탄력성</h2>
            <p data-aos="fade-up">
              가격 탄력성(Price Elasticity of Demand)은 가격 변화에 대한 수요 변화의 민감도를 나타내는 지표입니다.
              가격 전략 수립 시 반드시 고려해야 하는 핵심 개념입니다.
            </p>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>가격 탄력성 공식:</strong></p>
              <p style={{ margin: '12px 0 0', fontFamily: 'monospace', fontSize: '1rem' }}>
                Ed = (수요 변화율) / (가격 변화율) = (%변화 in Q) / (%변화 in P)
              </p>
            </div>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>탄력성 값</th>
                  <th>특징</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>탄력적 수요</td>
                  <td>|Ed| &gt; 1</td>
                  <td>가격 변화에 수요가 크게 반응</td>
                  <td>항공권, 외식, 브랜드 의류</td>
                </tr>
                <tr>
                  <td>비탄력적 수요</td>
                  <td>|Ed| &lt; 1</td>
                  <td>가격이 변해도 수요 변화 적음</td>
                  <td>생필품, 의약품, 담배</td>
                </tr>
                <tr>
                  <td>단위 탄력적</td>
                  <td>|Ed| = 1</td>
                  <td>가격 변화율과 수요 변화율 동일</td>
                  <td>이론적 균형 상태</td>
                </tr>
              </tbody>
            </table>
            <p data-aos="fade-up">
              <strong>가격 탄력성에 영향을 미치는 요인:</strong>
            </p>
            <ul data-aos="fade-up">
              <li>대체재의 존재 여부 (대체재가 많을수록 탄력적)</li>
              <li>제품의 필수성 (필수품일수록 비탄력적)</li>
              <li>소득 대비 지출 비중 (비중이 클수록 탄력적)</li>
              <li>시간의 경과 (장기적으로 더 탄력적)</li>
            </ul>

            <h2 data-aos="fade-up">4. 할인 및 프로모션 가격</h2>
            <p data-aos="fade-up">
              할인과 프로모션 가격은 단기적으로 매출을 촉진하거나 특정 목적을 달성하기 위해 활용됩니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>유형</th>
                  <th>설명</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>수량 할인</td>
                  <td>대량 구매 시 단가 인하</td>
                  <td>"3개 구매 시 10% 할인"</td>
                </tr>
                <tr>
                  <td>계절 할인</td>
                  <td>비수기에 가격 인하</td>
                  <td>겨울 에어컨 할인, 여름 패딩 할인</td>
                </tr>
                <tr>
                  <td>현금 할인</td>
                  <td>조기 결제 또는 현금 결제 시 할인</td>
                  <td>"2/10, net 30" (10일 내 결제 시 2% 할인)</td>
                </tr>
                <tr>
                  <td>번들 가격</td>
                  <td>여러 제품을 묶어 할인 판매</td>
                  <td>세트 메뉴, 소프트웨어 패키지</td>
                </tr>
                <tr>
                  <td>로스리더 가격</td>
                  <td>특정 제품을 원가 이하로 판매하여 집객</td>
                  <td>마트의 미끼 상품 (계란, 우유)</td>
                </tr>
                <tr>
                  <td>쿠폰/리베이트</td>
                  <td>구매 후 일정 금액 환불 또는 차회 할인</td>
                  <td>온라인 쿠폰, 캐시백 이벤트</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>주의:</strong> 과도한 할인은 브랜드 가치를 훼손하고, 소비자가 정상 가격 구매를 기피하는 "할인 중독" 현상을 초래할 수 있습니다. 할인 전략은 장기적인 브랜드 전략과의 일관성을 유지해야 합니다.</p>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week6" className="lesson-nav-btn prev">
                &#8592; 이전: 제품 전략
              </Link>
              <Link to="/lessons/week8" className="lesson-nav-btn next">
                다음: 유통 전략 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek7;
