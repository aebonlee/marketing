import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const Syllabus = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title={t('site.basics.syllabus.title')} path="/basics/syllabus" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.basics.syllabus.title')}</h1>
          <p>{t('site.basics.syllabus.subtitle')}</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="syllabus-info-card" data-aos="fade-up">
              <h2>교과목 정보</h2>
              <table className="lesson-table">
                <tbody>
                  <tr><th>교과목명</th><td>마케팅 원론 (Principles of Marketing)</td></tr>
                  <tr><th>학점/시수</th><td>3학점 / 이론 2시간 + 실습 2시간</td></tr>
                  <tr><th>이수구분</th><td>전공 선택</td></tr>
                  <tr><th>수강대상</th><td>경영학과 및 관련 학과 학생</td></tr>
                  <tr><th>선수과목</th><td>없음</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">교과목 개요</h2>
            <p>
              본 교과목은 마케팅의 기본 개념과 원리를 체계적으로 학습하고,
              디지털마케팅 실무 역량을 기르는 것을 목표로 합니다.
              마케팅 환경분석, 소비자 행동, STP 전략, 마케팅 믹스(4P) 등
              이론 학습과 함께 실제 마케팅 도구를 활용한 실습을 병행합니다.
            </p>

            <h2 data-aos="fade-up">수업 목표</h2>
            <ul>
              <li>마케팅의 기본 개념과 프레임워크를 이해하고 설명할 수 있다.</li>
              <li>시장 환경을 분석하고 SWOT, PEST, 3C 분석을 수행할 수 있다.</li>
              <li>STP 전략을 수립하고 마케팅 믹스(4P)를 설계할 수 있다.</li>
              <li>디지털마케팅 채널(SEO, SEM, SNS)의 특성을 이해하고 활용할 수 있다.</li>
              <li>Google Analytics, Google Ads 등 마케팅 도구를 실무에 적용할 수 있다.</li>
              <li>데이터를 기반으로 마케팅 성과를 분석하고 의사결정할 수 있다.</li>
            </ul>

            <h2 data-aos="fade-up">교재 및 참고자료</h2>
            <ul>
              <li><strong>주교재:</strong> 강의 슬라이드 및 온라인 학습 자료 (본 사이트 제공)</li>
              <li><strong>참고서:</strong> 마케팅 원리 (Philip Kotler, Gary Armstrong 저)</li>
              <li><strong>참고서:</strong> 디지털 마케팅 개론 (최신판)</li>
              <li><strong>온라인:</strong> Google Skillshop, HubSpot Academy, Meta Blueprint</li>
            </ul>

            <h2 data-aos="fade-up">평가 방법</h2>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>평가 항목</th><th>비율</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td>중간고사</td><td>30%</td><td>필기 (이론 + 사례 분석)</td></tr>
                <tr><td>기말고사</td><td>30%</td><td>필기 + 마케팅 전략 보고서</td></tr>
                <tr><td>과제</td><td>20%</td><td>주차별 실습 과제 및 프로젝트</td></tr>
                <tr><td>참여도</td><td>20%</td><td>출석, 수업 참여, 토론, 발표</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">수업 운영 방식</h2>
            <ul>
              <li><strong>이론 (2시간):</strong> 마케팅 개념 설명, 사례 분석, 질의응답</li>
              <li><strong>실습 (2시간):</strong> 마케팅 도구 활용, 팀 프로젝트, 전략 수립 워크숍</li>
              <li>매주 실습 과제가 부여되며, 다음 주 수업 전까지 제출</li>
              <li>팀 프로젝트는 4~5명으로 구성하여 학기 중 진행</li>
            </ul>

            <h2 data-aos="fade-up">수강 시 유의사항</h2>
            <ul>
              <li>개인 노트북 지참 권장 (실습 수업)</li>
              <li>Google 계정 사전 준비 (Google Analytics, Google Ads 실습용)</li>
              <li>출석은 매 수업 시작 시 확인하며, 지각 3회 = 결석 1회</li>
              <li>결석 4회 이상 시 F 학점 처리</li>
              <li>과제 표절 적발 시 해당 과제 0점 처리</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;
