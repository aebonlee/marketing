import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek5 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 5 - STP 전략"
        description="시장 세분화(Segmentation), 목표시장 선정(Targeting), 포지셔닝(Positioning) 전략을 학습합니다."
        path="/lessons/week5"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 5: STP 전략</h1>
          <p>시장 세분화, 목표시장 선정, 포지셔닝의 체계적인 전략 수립 방법을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 시장 세분화 (Segmentation)</h2>
            <p data-aos="fade-up">
              시장 세분화란 전체 시장을 유사한 필요, 특성, 행동을 가진 소비자 집단으로 나누는 과정입니다.
              효과적인 세분화를 통해 각 집단에 맞춤형 마케팅 전략을 수립할 수 있습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>세분화 기준</th>
                  <th>변수</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>인구통계적</td>
                  <td>연령, 성별, 소득, 직업, 교육, 가족 규모</td>
                  <td>20대 여성, 고소득 전문직</td>
                </tr>
                <tr>
                  <td>지리적</td>
                  <td>국가, 지역, 도시 규모, 기후</td>
                  <td>수도권, 해안 도시</td>
                </tr>
                <tr>
                  <td>심리적</td>
                  <td>라이프스타일, 가치관, 성격</td>
                  <td>건강 지향형, 모험 추구형</td>
                </tr>
                <tr>
                  <td>행동적</td>
                  <td>사용량, 구매 빈도, 브랜드 충성도, 추구 편익</td>
                  <td>헤비 유저, 가격 민감 소비자</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>효과적인 세분화의 조건 (MIDAS):</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>Measurable (측정 가능성):</strong> 세분 시장의 규모와 구매력을 측정할 수 있어야 함</li>
                <li><strong>Identifiable (식별 가능성):</strong> 세분 시장의 구성원을 명확히 식별할 수 있어야 함</li>
                <li><strong>Differentiable (차별 가능성):</strong> 세분 시장 간 차이가 명확해야 함</li>
                <li><strong>Accessible (접근 가능성):</strong> 세분 시장에 효과적으로 도달할 수 있어야 함</li>
                <li><strong>Substantial (충분한 규모):</strong> 수익을 낼 수 있을 만큼 시장 규모가 충분해야 함</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. 목표시장 선정 (Targeting)</h2>
            <p data-aos="fade-up">
              세분화된 시장 중 기업이 집중할 목표시장을 선정하는 과정입니다.
              기업의 자원, 역량, 경쟁 상황 등을 고려하여 가장 매력적인 세분 시장을 선택합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>타겟팅 전략</th>
                  <th>설명</th>
                  <th>적합한 상황</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>비차별적 마케팅<br />(Mass Marketing)</td>
                  <td>전체 시장을 하나의 동질적 시장으로 보고 단일 마케팅 믹스 적용</td>
                  <td>범용 생활용품, 기초 식품</td>
                </tr>
                <tr>
                  <td>차별적 마케팅<br />(Differentiated)</td>
                  <td>여러 세분 시장에 각각 다른 마케팅 믹스를 적용</td>
                  <td>자동차, 의류, 화장품 브랜드</td>
                </tr>
                <tr>
                  <td>집중적 마케팅<br />(Concentrated)</td>
                  <td>하나 또는 소수의 세분 시장에 집중</td>
                  <td>니치 시장, 중소기업, 스타트업</td>
                </tr>
                <tr>
                  <td>마이크로 마케팅<br />(Micromarketing)</td>
                  <td>개인 수준의 맞춤형 마케팅</td>
                  <td>이커머스 개인화 추천, 맞춤 서비스</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              목표시장 평가 기준
            </h3>
            <ul data-aos="fade-up">
              <li><strong>시장 매력도:</strong> 시장 규모, 성장률, 수익성</li>
              <li><strong>경쟁 강도:</strong> 경쟁자 수, 진입 장벽, 대체재 위협</li>
              <li><strong>기업 적합성:</strong> 기업 목표, 자원, 핵심 역량과의 적합도</li>
            </ul>

            <h2 data-aos="fade-up">3. 포지셔닝 (Positioning)</h2>
            <p data-aos="fade-up">
              포지셔닝이란 목표 소비자의 마음속에 경쟁 제품과 차별화된 위치를 차지하도록 하는 전략입니다.
              "소비자가 우리 브랜드를 어떻게 인식하게 할 것인가?"에 대한 답을 제시합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>포지셔닝 전략</th>
                  <th>설명</th>
                  <th>사례</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>속성/편익 기반</td>
                  <td>제품의 특정 속성이나 편익을 강조</td>
                  <td>볼보(안전), 다이슨(기술력)</td>
                </tr>
                <tr>
                  <td>가격/품질 기반</td>
                  <td>가격 대비 품질 또는 프리미엄을 강조</td>
                  <td>이케아(가성비), 롤렉스(프리미엄)</td>
                </tr>
                <tr>
                  <td>사용 상황 기반</td>
                  <td>제품의 특정 사용 상황을 강조</td>
                  <td>게토레이(운동 후 수분 보충)</td>
                </tr>
                <tr>
                  <td>사용자 기반</td>
                  <td>특정 사용자 그룹을 타겟</td>
                  <td>나이키(운동선수 정신)</td>
                </tr>
                <tr>
                  <td>경쟁 기반</td>
                  <td>경쟁자 대비 우위를 강조</td>
                  <td>펩시 vs 코카콜라 비교 광고</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>포지셔닝 맵(Positioning Map):</strong> 소비자가 중요하게 생각하는 2가지 속성을 축으로 한 2차원 공간에 자사와 경쟁사의 위치를 표시한 것입니다. 시각적으로 경쟁 상황을 파악하고 차별화 기회를 발견할 수 있습니다.</p>
            </div>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              포지셔닝 스테이트먼트 작성법
            </h3>
            <p data-aos="fade-up">
              효과적인 포지셔닝을 위해서는 명확한 포지셔닝 스테이트먼트를 작성해야 합니다.
            </p>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>포지셔닝 스테이트먼트 템플릿:</strong></p>
              <p style={{ fontStyle: 'italic', margin: '12px 0 0' }}>
                "[목표 시장]에게 [브랜드]는 [차별화 포인트]를 제공하는 [제품 카테고리]입니다.
                왜냐하면 [근거/이유]이기 때문입니다."
              </p>
            </div>

            <h2 data-aos="fade-up">4. STP 사례 분석</h2>
            <p data-aos="fade-up">
              실제 기업의 STP 전략 사례를 통해 이론의 실무 적용 방법을 이해합니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              사례: 스타벅스의 STP 전략
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>STP 단계</th>
                  <th>스타벅스 전략</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Segmentation</strong></td>
                  <td>인구통계(20~40대, 중상위 소득), 심리적(프리미엄 라이프스타일, 경험 중시), 행동적(카페 이용 빈도 높음)</td>
                </tr>
                <tr>
                  <td><strong>Targeting</strong></td>
                  <td>프리미엄 커피 경험을 중시하는 도시 직장인과 밀레니얼 세대 (차별적 마케팅)</td>
                </tr>
                <tr>
                  <td><strong>Positioning</strong></td>
                  <td>"제3의 공간(Third Place)" - 집과 직장 사이의 편안한 공간으로 포지셔닝. 단순한 커피가 아닌 프리미엄 경험과 라이프스타일 제공</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              사례: 현대자동차의 STP 전략
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>STP 단계</th>
                  <th>현대자동차 전략</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Segmentation</strong></td>
                  <td>가격대별(소형/중형/대형/고급), 용도별(세단/SUV/전기차), 라이프스타일별(가족/비즈니스/아웃도어)</td>
                </tr>
                <tr>
                  <td><strong>Targeting</strong></td>
                  <td>다수의 세분 시장을 대상으로 다양한 차종 라인업 운영 (차별적 마케팅), 제네시스를 통한 프리미엄 시장 진출</td>
                </tr>
                <tr>
                  <td><strong>Positioning</strong></td>
                  <td>현대: "새로운 가능성(New Possibilities)" - 혁신과 지속가능성 강조. 제네시스: "Athletic Elegance" - 고급스러움과 역동적 디자인 강조</td>
                </tr>
              </tbody>
            </table>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week4" className="lesson-nav-btn prev">
                &#8592; 이전: 마케팅 조사
              </Link>
              <Link to="/lessons/week6" className="lesson-nav-btn next">
                다음: 제품 전략 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek5;
