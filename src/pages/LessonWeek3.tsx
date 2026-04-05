import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek3 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 3 - 소비자 행동"
        description="소비자 구매 의사결정 과정, 행동 영향 요인, 구매 유형, 소비자 인사이트를 학습합니다."
        path="/lessons/week3"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 3: 소비자 행동</h1>
          <p>소비자의 구매 의사결정 과정과 행동에 영향을 미치는 다양한 요인을 분석합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 소비자 구매 의사결정 과정</h2>
            <p data-aos="fade-up">
              소비자는 제품을 구매할 때 일련의 의사결정 단계를 거칩니다.
              이 과정을 이해하면 각 단계에 적합한 마케팅 전략을 수립할 수 있습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>설명</th>
                  <th>마케팅 활동</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. 문제 인식</td>
                  <td>현재 상태와 이상적 상태 사이의 차이를 인식</td>
                  <td>필요 환기, 문제 제기 광고</td>
                </tr>
                <tr>
                  <td>2. 정보 탐색</td>
                  <td>내적 탐색(기억)과 외적 탐색(매체, 지인)</td>
                  <td>SEO, 콘텐츠 마케팅, 리뷰 관리</td>
                </tr>
                <tr>
                  <td>3. 대안 평가</td>
                  <td>평가 기준에 따라 대안을 비교</td>
                  <td>비교 광고, USP 강조, 시연</td>
                </tr>
                <tr>
                  <td>4. 구매 결정</td>
                  <td>최종 브랜드 선택 및 구매 실행</td>
                  <td>프로모션, 구매 편의성 제공</td>
                </tr>
                <tr>
                  <td>5. 구매 후 행동</td>
                  <td>만족/불만족 평가, 재구매 의사 결정</td>
                  <td>AS, 고객 관리, 리뷰 유도</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>인지 부조화(Cognitive Dissonance):</strong> 고가 제품 구매 후 "내가 올바른 선택을 했는가?"라는 불안감을 느끼는 현상입니다. 기업은 구매 후 확신을 주는 커뮤니케이션(감사 메시지, 사용 가이드 등)으로 이를 해소해야 합니다.</p>
            </div>

            <h2 data-aos="fade-up">2. 소비자 행동 영향 요인</h2>
            <p data-aos="fade-up">
              소비자 행동은 다양한 요인들의 복합적인 영향을 받습니다.
              크게 개인적, 심리적, 사회적, 문화적 요인으로 구분할 수 있습니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (1) 개인적 요인
            </h3>
            <ul data-aos="fade-up">
              <li><strong>연령과 생애 주기:</strong> 연령대별 소비 패턴이 다름 (예: MZ세대 vs. 시니어)</li>
              <li><strong>직업과 경제적 상황:</strong> 소득 수준에 따른 소비 능력 차이</li>
              <li><strong>라이프스타일:</strong> 개인의 활동, 관심사, 의견(AIO)에 따른 소비 패턴</li>
              <li><strong>성격과 자아 개념:</strong> 자신의 이미지와 일치하는 브랜드 선호</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (2) 심리적 요인
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>요인</th>
                  <th>설명</th>
                  <th>마케팅 적용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>동기(Motivation)</td>
                  <td>행동을 유발하는 내적 힘 (매슬로우 욕구 5단계)</td>
                  <td>욕구 단계에 맞는 소구 포인트 설정</td>
                </tr>
                <tr>
                  <td>지각(Perception)</td>
                  <td>정보를 선택, 조직, 해석하는 과정</td>
                  <td>선택적 주의를 끄는 광고 디자인</td>
                </tr>
                <tr>
                  <td>학습(Learning)</td>
                  <td>경험을 통한 행동 변화</td>
                  <td>반복 노출, 샘플링, 체험 마케팅</td>
                </tr>
                <tr>
                  <td>태도(Attitude)</td>
                  <td>대상에 대한 일관된 평가 성향</td>
                  <td>브랜드 이미지 구축, 태도 변화 전략</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (3) 사회적 요인
            </h3>
            <ul data-aos="fade-up">
              <li><strong>준거집단:</strong> 소비자의 태도와 행동에 영향을 미치는 집단 (가족, 친구, 동료)</li>
              <li><strong>오피니언 리더:</strong> 특정 분야에서 다른 사람들의 의사결정에 영향을 미치는 인물</li>
              <li><strong>가족:</strong> 구매 의사결정에서 가장 중요한 소비 단위</li>
              <li><strong>역할과 지위:</strong> 사회적 역할에 부합하는 소비 행동</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (4) 문화적 요인
            </h3>
            <ul data-aos="fade-up">
              <li><strong>문화:</strong> 사회 구성원이 공유하는 가치, 신념, 관습의 총체</li>
              <li><strong>하위문화:</strong> 민족, 종교, 지역 등에 따른 세부 문화 집단</li>
              <li><strong>사회계층:</strong> 소득, 교육, 직업 등에 따른 사회적 계층 구분</li>
            </ul>

            <h2 data-aos="fade-up">3. 구매 유형</h2>
            <p data-aos="fade-up">
              소비자의 구매 행동은 관여도(Involvement)와 브랜드 간 차이에 따라 유형이 달라집니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th></th>
                  <th>브랜드 간 차이 큼</th>
                  <th>브랜드 간 차이 적음</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>고관여</strong></td>
                  <td><strong>복잡한 구매 행동</strong><br />충분한 정보 탐색 후 신중 결정<br />(예: 자동차, 주택)</td>
                  <td><strong>부조화 감소 구매 행동</strong><br />구매 후 불안감 발생 가능<br />(예: 카펫, 가구)</td>
                </tr>
                <tr>
                  <td><strong>저관여</strong></td>
                  <td><strong>다양성 추구 구매 행동</strong><br />새로운 것을 시도하려는 경향<br />(예: 과자, 음료)</td>
                  <td><strong>습관적 구매 행동</strong><br />별다른 고민 없이 반복 구매<br />(예: 소금, 휴지)</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">4. 소비자 인사이트</h2>
            <p data-aos="fade-up">
              소비자 인사이트(Consumer Insight)란 소비자의 행동 이면에 숨겨진 동기, 욕구, 감정을 깊이 이해하는 것입니다.
              단순한 데이터 분석을 넘어 "왜 그렇게 행동하는가?"에 대한 근본적인 이해를 추구합니다.
            </p>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>소비자 인사이트 도출 방법:</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>관찰 조사:</strong> 실제 소비 환경에서 행동을 관찰 (에스노그래피)</li>
                <li><strong>심층 인터뷰:</strong> 1:1 대화를 통한 깊은 동기 탐색</li>
                <li><strong>소셜 리스닝:</strong> SNS, 온라인 커뮤니티의 자발적 의견 분석</li>
                <li><strong>고객 여정 맵:</strong> 구매 전~후 전체 경험을 시각화하여 Pain Point 발견</li>
                <li><strong>빅데이터 분석:</strong> 대량의 행동 데이터에서 패턴과 트렌드 도출</li>
              </ul>
            </div>
            <p data-aos="fade-up">
              좋은 소비자 인사이트는 "소비자가 알지 못하지만 공감하는 진실"을 담고 있어야 하며,
              이를 기반으로 한 마케팅 전략은 소비자의 마음을 움직이는 강력한 힘을 가집니다.
            </p>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week2" className="lesson-nav-btn prev">
                &#8592; 이전: 마케팅 환경분석
              </Link>
              <Link to="/lessons/week4" className="lesson-nav-btn next">
                다음: 마케팅 조사 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek3;
