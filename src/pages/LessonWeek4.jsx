import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek4 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 4 - 마케팅 조사"
        description="마케팅 조사 프로세스, 1차/2차 자료, 조사 방법론, 데이터 분석 기초를 학습합니다."
        path="/lessons/week4"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 4: 마케팅 조사</h1>
          <p>체계적인 마케팅 조사 프로세스와 다양한 조사 방법론을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 마케팅 조사 프로세스</h2>
            <p data-aos="fade-up">
              마케팅 조사(Marketing Research)는 마케팅 의사결정에 필요한 정보를 체계적으로 수집, 분석, 해석하는 과정입니다.
              올바른 프로세스를 따르면 정확하고 유용한 조사 결과를 얻을 수 있습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>핵심 활동</th>
                  <th>주요 산출물</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. 문제 정의</td>
                  <td>조사 목적과 범위를 명확히 설정</td>
                  <td>조사 목표, 가설 설정</td>
                </tr>
                <tr>
                  <td>2. 조사 설계</td>
                  <td>조사 방법, 표본, 일정 계획 수립</td>
                  <td>조사 설계서</td>
                </tr>
                <tr>
                  <td>3. 자료 수집</td>
                  <td>설문, 관찰, 실험 등으로 데이터 수집</td>
                  <td>원시 데이터</td>
                </tr>
                <tr>
                  <td>4. 자료 분석</td>
                  <td>통계 기법을 활용한 데이터 분석</td>
                  <td>분석 결과, 통계표</td>
                </tr>
                <tr>
                  <td>5. 결과 보고</td>
                  <td>분석 결과를 바탕으로 시사점 도출</td>
                  <td>조사 보고서, 전략 제안</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>좋은 마케팅 조사의 조건:</strong> 조사 문제가 명확해야 하고, 적절한 조사 방법을 선택해야 하며, 수집된 데이터의 신뢰성과 타당성이 확보되어야 합니다. 또한 결과를 실행 가능한 전략으로 연결하는 것이 중요합니다.</p>
            </div>

            <h2 data-aos="fade-up">2. 1차 자료 vs 2차 자료</h2>
            <p data-aos="fade-up">
              마케팅 조사에 활용되는 자료는 수집 방식에 따라 1차 자료와 2차 자료로 구분됩니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>1차 자료 (Primary Data)</th>
                  <th>2차 자료 (Secondary Data)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>정의</td>
                  <td>특정 조사 목적을 위해 직접 수집한 자료</td>
                  <td>이미 존재하는 기존 자료를 활용</td>
                </tr>
                <tr>
                  <td>수집 방법</td>
                  <td>설문, 인터뷰, 관찰, 실험</td>
                  <td>논문, 보고서, 정부 통계, 뉴스</td>
                </tr>
                <tr>
                  <td>장점</td>
                  <td>조사 목적에 맞는 맞춤형 자료 확보</td>
                  <td>시간과 비용 절약, 빠른 접근</td>
                </tr>
                <tr>
                  <td>단점</td>
                  <td>시간과 비용이 많이 소요</td>
                  <td>목적에 완전히 부합하지 않을 수 있음</td>
                </tr>
                <tr>
                  <td>활용 시점</td>
                  <td>2차 자료로 해결되지 않을 때</td>
                  <td>조사 초기 단계에서 우선 검토</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 조사 방법</h2>
            <p data-aos="fade-up">
              마케팅 조사에는 다양한 방법론이 활용됩니다. 조사 목적과 상황에 맞는 방법을 선택하는 것이 중요합니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (1) 설문조사 (Survey)
            </h3>
            <p data-aos="fade-up">
              가장 널리 사용되는 조사 방법으로, 구조화된 질문지를 통해 대규모 데이터를 효율적으로 수집합니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>온라인 설문:</strong> 비용 효율적, 대규모 표본 확보 용이 (Google Forms, SurveyMonkey)</li>
              <li><strong>전화 설문:</strong> 실시간 응답, 높은 응답률</li>
              <li><strong>대면 설문:</strong> 심층적 응답 확보, 비언어적 반응 관찰 가능</li>
              <li><strong>우편 설문:</strong> 넓은 지역 커버리지, 낮은 응답률</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (2) 관찰조사 (Observation)
            </h3>
            <p data-aos="fade-up">
              소비자의 실제 행동을 직접 관찰하여 데이터를 수집하는 방법입니다.
              응답 편향 없이 자연스러운 행동을 파악할 수 있다는 장점이 있습니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>참여 관찰:</strong> 조사자가 소비 현장에 직접 참여하여 관찰</li>
              <li><strong>비참여 관찰:</strong> 외부에서 소비 행동을 관찰 (CCTV, 아이트래킹)</li>
              <li><strong>미스터리 쇼핑:</strong> 고객을 가장하여 서비스 품질 평가</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (3) 실험조사 (Experiment)
            </h3>
            <p data-aos="fade-up">
              독립변수를 조작하여 종속변수에 미치는 영향을 측정하는 방법입니다.
              인과관계를 파악할 수 있다는 점에서 가장 과학적인 조사 방법입니다.
            </p>
            <ul data-aos="fade-up">
              <li><strong>A/B 테스트:</strong> 두 가지 버전을 비교하여 효과적인 안을 선택</li>
              <li><strong>테스트 마켓:</strong> 특정 지역에서 신제품을 시험 출시</li>
              <li><strong>실험실 실험:</strong> 통제된 환경에서 변수의 영향 측정</li>
            </ul>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              (4) FGI (Focus Group Interview)
            </h3>
            <p data-aos="fade-up">
              6~10명의 소규모 그룹을 대상으로 특정 주제에 대해 심층적인 토론을 진행하는 정성적 조사 방법입니다.
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
                  <td>참가자 수</td>
                  <td>6~10명 (동질적 집단 구성)</td>
                </tr>
                <tr>
                  <td>진행 시간</td>
                  <td>1.5~2시간</td>
                </tr>
                <tr>
                  <td>진행자 역할</td>
                  <td>토론 유도, 주제 관리, 심층 탐색</td>
                </tr>
                <tr>
                  <td>장점</td>
                  <td>심층적 인사이트, 그룹 시너지 효과</td>
                </tr>
                <tr>
                  <td>단점</td>
                  <td>일반화 어려움, 진행자 편향 가능성</td>
                </tr>
                <tr>
                  <td>활용 분야</td>
                  <td>신제품 콘셉트 테스트, 광고 반응 조사, 브랜드 인식 탐색</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">4. 데이터 분석 기초</h2>
            <p data-aos="fade-up">
              수집된 데이터를 의미 있는 정보로 전환하기 위해서는 체계적인 분석이 필요합니다.
              마케팅 조사에서 주로 활용되는 기초 분석 기법을 살펴보겠습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>분석 기법</th>
                  <th>목적</th>
                  <th>활용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>빈도 분석</td>
                  <td>각 응답의 빈도와 비율 파악</td>
                  <td>브랜드 인지도 조사 결과 정리</td>
                </tr>
                <tr>
                  <td>기술통계</td>
                  <td>평균, 표준편차 등 데이터 특성 요약</td>
                  <td>만족도 점수 평균 산출</td>
                </tr>
                <tr>
                  <td>교차분석</td>
                  <td>두 변수 간 관계 파악</td>
                  <td>성별에 따른 브랜드 선호도 차이</td>
                </tr>
                <tr>
                  <td>상관분석</td>
                  <td>변수 간 상관관계 강도 측정</td>
                  <td>광고비와 매출의 상관관계</td>
                </tr>
                <tr>
                  <td>회귀분석</td>
                  <td>독립변수가 종속변수에 미치는 영향 분석</td>
                  <td>가격이 수요에 미치는 영향 예측</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>주요 데이터 분석 도구:</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>Excel / Google Sheets:</strong> 기본적인 통계 분석과 시각화</li>
                <li><strong>SPSS:</strong> 사회과학 분야의 전문 통계 소프트웨어</li>
                <li><strong>R / Python:</strong> 고급 통계 분석과 머신러닝 활용</li>
                <li><strong>Tableau / Power BI:</strong> 데이터 시각화 전문 도구</li>
                <li><strong>Google Analytics:</strong> 웹/앱 데이터 분석 플랫폼</li>
              </ul>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week3" className="lesson-nav-btn prev">
                &#8592; 이전: 소비자 행동
              </Link>
              <Link to="/lessons/week5" className="lesson-nav-btn next">
                다음: STP 전략 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek4;
