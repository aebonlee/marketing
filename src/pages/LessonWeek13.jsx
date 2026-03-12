import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek13 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="13주차: 데이터 기반 마케팅"
        description="마케팅 데이터의 종류, Google Analytics 활용, A/B 테스트, 고객 여정 분석, 마케팅 대시보드 구축을 학습합니다."
        path="/lessons/week13"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>13주차: 데이터 기반 마케팅</h1>
          <p>마케팅 데이터 분석, Google Analytics, A/B 테스트, 고객 여정 분석을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>마케팅에서 활용되는 데이터의 종류를 구분할 수 있다.</li>
                <li>Google Analytics의 주요 기능과 활용 방법을 이해한다.</li>
                <li>A/B 테스트의 설계와 실행 방법을 설명할 수 있다.</li>
                <li>고객 여정 분석의 개념과 방법론을 이해한다.</li>
                <li>마케팅 대시보드의 구성 요소와 구축 방법을 이해한다.</li>
              </ul>
            </div>

            {/* ─── 1. 마케팅 데이터의 종류 ─── */}
            <h2 data-aos="fade-up">1. 마케팅 데이터의 종류</h2>

            <p>
              <strong>데이터 기반 마케팅(Data-Driven Marketing)</strong>은 직관이 아닌 데이터에 근거하여
              마케팅 의사결정을 내리는 접근 방식입니다. 효과적인 데이터 활용을 위해 먼저 다양한 데이터
              유형을 이해해야 합니다.
            </p>

            <h3>1.1 데이터 소스별 분류</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>데이터 유형</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1st Party Data</strong></td>
                  <td>기업이 직접 수집한 자사 데이터</td>
                  <td>웹사이트 행동 데이터, CRM 데이터, 구매 이력, 앱 사용 데이터</td>
                </tr>
                <tr>
                  <td><strong>2nd Party Data</strong></td>
                  <td>파트너사의 1st Party 데이터를 공유받은 것</td>
                  <td>파트너 기업의 고객 데이터, 공동 마케팅 데이터</td>
                </tr>
                <tr>
                  <td><strong>3rd Party Data</strong></td>
                  <td>외부 데이터 제공업체에서 구매한 데이터</td>
                  <td>DMP 데이터, 시장 조사 데이터, 인구통계 데이터</td>
                </tr>
                <tr>
                  <td><strong>Zero Party Data</strong></td>
                  <td>고객이 자발적으로 제공한 선호도 데이터</td>
                  <td>설문조사, 선호도 설정, 위시리스트</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>쿠키리스(Cookieless) 시대의 도래</h3>
              <p>
                개인정보 보호 강화로 3rd Party Cookie가 단계적으로 폐지되고 있습니다.
                이에 따라 <strong>1st Party Data</strong>와 <strong>Zero Party Data</strong>의 중요성이
                크게 증가하고 있으며, 동의 기반 데이터 수집 전략이 필수가 되었습니다.
              </p>
            </div>

            <h3>1.2 데이터 활용 영역별 분류</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>영역</th><th>수집 데이터</th><th>분석 목적</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>웹 분석</strong></td>
                  <td>페이지뷰, 세션, 이탈률, 체류 시간</td>
                  <td>사이트 성과 및 사용자 경험 개선</td>
                </tr>
                <tr>
                  <td><strong>광고 분석</strong></td>
                  <td>노출, 클릭, 전환, CPC, ROAS</td>
                  <td>광고 효율 최적화, 예산 배분</td>
                </tr>
                <tr>
                  <td><strong>고객 분석</strong></td>
                  <td>구매 이력, 행동 패턴, 세그먼트</td>
                  <td>고객 이해, 개인화, LTV 예측</td>
                </tr>
                <tr>
                  <td><strong>소셜 분석</strong></td>
                  <td>팔로워, 참여율, 도달, 감성</td>
                  <td>SNS 전략 수립, 브랜드 감성 파악</td>
                </tr>
                <tr>
                  <td><strong>경쟁 분석</strong></td>
                  <td>경쟁사 트래픽, 키워드, 광고 전략</td>
                  <td>시장 포지셔닝, 차별화 전략</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. Google Analytics 활용 ─── */}
            <h2 data-aos="fade-up">2. Google Analytics 활용</h2>

            <p>
              <strong>Google Analytics 4(GA4)</strong>는 구글이 제공하는 무료 웹/앱 분석 도구로,
              사용자의 행동 데이터를 수집하고 분석하여 마케팅 의사결정에 활용할 수 있습니다.
            </p>

            <h3>2.1 GA4의 핵심 개념</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>개념</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>이벤트 (Event)</strong></td>
                  <td>사용자의 모든 상호작용을 이벤트로 추적</td>
                  <td>page_view, click, scroll, purchase</td>
                </tr>
                <tr>
                  <td><strong>매개변수 (Parameter)</strong></td>
                  <td>이벤트에 대한 추가 정보</td>
                  <td>page_title, link_url, value</td>
                </tr>
                <tr>
                  <td><strong>사용자 속성</strong></td>
                  <td>사용자를 설명하는 특성</td>
                  <td>연령, 관심사, 기기, 위치</td>
                </tr>
                <tr>
                  <td><strong>전환 (Conversion)</strong></td>
                  <td>비즈니스 목표 달성을 의미하는 이벤트</td>
                  <td>구매 완료, 회원가입, 양식 제출</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 GA4 주요 보고서</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>보고서</th><th>내용</th><th>주요 지표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>실시간</strong></td>
                  <td>현재 사이트의 실시간 사용자 활동</td>
                  <td>활성 사용자, 이벤트, 페이지</td>
                </tr>
                <tr>
                  <td><strong>획득 (Acquisition)</strong></td>
                  <td>사용자 유입 경로 분석</td>
                  <td>채널, 소스/매체, 캠페인별 유입</td>
                </tr>
                <tr>
                  <td><strong>참여 (Engagement)</strong></td>
                  <td>사용자의 사이트 내 활동 분석</td>
                  <td>페이지뷰, 이벤트, 참여 시간</td>
                </tr>
                <tr>
                  <td><strong>수익화 (Monetization)</strong></td>
                  <td>매출 및 전자상거래 데이터</td>
                  <td>총 수익, 구매 수, 아이템별 매출</td>
                </tr>
                <tr>
                  <td><strong>유지 (Retention)</strong></td>
                  <td>사용자 재방문 및 유지율</td>
                  <td>신규/재방문, 유지율, 생애가치</td>
                </tr>
              </tbody>
            </table>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">
                <span>GA4 이벤트 추적 코드 예시 (gtag.js)</span>
              </div>
              <pre><code>{`// 페이지 뷰 이벤트 (자동 수집)
gtag('event', 'page_view', {
  page_title: 'SEO & SEM 강의',
  page_location: 'https://example.com/lessons/week12'
});

// 커스텀 이벤트: 버튼 클릭 추적
gtag('event', 'cta_click', {
  button_text: '무료 체험 신청',
  page_section: 'hero'
});

// 전자상거래: 구매 완료 이벤트
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 29900,
  currency: 'KRW',
  items: [{
    item_name: '마케팅 강의 패키지',
    price: 29900,
    quantity: 1
  }]
});`}</code></pre>
            </div>

            {/* ─── 3. A/B 테스트 ─── */}
            <h2 data-aos="fade-up">3. A/B 테스트</h2>

            <p>
              <strong>A/B 테스트(Split Testing)</strong>는 두 가지 이상의 변형(Variant)을 동시에 실행하여
              어떤 것이 더 나은 성과를 내는지 데이터로 검증하는 실험 방법입니다.
            </p>

            <h3>3.1 A/B 테스트 프로세스</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>활동</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 가설 수립</strong></td>
                  <td>개선하려는 요소와 예상 결과를 정의</td>
                  <td>"CTA 버튼을 빨간색으로 바꾸면 전환율이 10% 증가할 것이다"</td>
                </tr>
                <tr>
                  <td><strong>2. 변수 설정</strong></td>
                  <td>테스트할 변수 1개를 선정 (통제된 실험)</td>
                  <td>버튼 색상만 변경 (A: 파란색, B: 빨간색)</td>
                </tr>
                <tr>
                  <td><strong>3. 트래픽 분배</strong></td>
                  <td>방문자를 무작위로 A/B 그룹에 배분</td>
                  <td>50:50 비율로 랜덤 분배</td>
                </tr>
                <tr>
                  <td><strong>4. 데이터 수집</strong></td>
                  <td>충분한 기간 동안 데이터 수집</td>
                  <td>최소 1-2주, 통계적 유의미한 샘플 확보</td>
                </tr>
                <tr>
                  <td><strong>5. 결과 분석</strong></td>
                  <td>통계적 유의성 검정 (p-value, 신뢰도)</td>
                  <td>95% 신뢰 수준에서 B안이 15% 더 높은 전환율</td>
                </tr>
                <tr>
                  <td><strong>6. 적용 및 반복</strong></td>
                  <td>우승 안 적용 후 다음 테스트 설계</td>
                  <td>B안 적용 후 CTA 문구 테스트 진행</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 A/B 테스트 대상 요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>테스트 영역</th><th>테스트 가능 요소</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>이메일 마케팅</strong></td>
                  <td>제목, 발송 시간, CTA 버튼, 레이아웃, 개인화 여부</td>
                </tr>
                <tr>
                  <td><strong>랜딩페이지</strong></td>
                  <td>헤드라인, 이미지, CTA 문구/색상/위치, 폼 길이</td>
                </tr>
                <tr>
                  <td><strong>광고</strong></td>
                  <td>광고 문구, 이미지/동영상, 타겟 오디언스, 입찰 전략</td>
                </tr>
                <tr>
                  <td><strong>웹사이트</strong></td>
                  <td>네비게이션, 제품 페이지 레이아웃, 가격 표시 방법</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>A/B 테스트 주의사항</h3>
              <ul>
                <li>한 번에 하나의 변수만 테스트 (다변량 테스트는 별도 방법론)</li>
                <li>충분한 샘플 크기 확보 (너무 일찍 결론 내리지 않기)</li>
                <li>테스트 기간 동안 다른 변수를 변경하지 않기</li>
                <li>시즌, 요일 등 외부 요인 고려</li>
                <li>통계적 유의성을 반드시 확인 (p &lt; 0.05)</li>
              </ul>
            </div>

            {/* ─── 4. 고객 여정 분석 ─── */}
            <h2 data-aos="fade-up">4. 고객 여정 분석</h2>

            <p>
              <strong>고객 여정(Customer Journey)</strong>이란 고객이 브랜드를 인지하는 순간부터
              구매, 재구매, 추천에 이르기까지의 전체 경험 과정을 말합니다.
              데이터를 통해 각 단계의 고객 행동을 분석하면 마케팅 효과를 극대화할 수 있습니다.
            </p>

            <h3>4.1 고객 여정 맵 (Customer Journey Map)</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>여정 단계</th><th>고객 행동</th><th>접점(Touchpoint)</th><th>핵심 KPI</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지 (Awareness)</strong></td>
                  <td>브랜드/제품 존재를 처음 인식</td>
                  <td>SNS 광고, 검색, 블로그</td>
                  <td>노출 수, 도달률, 브랜드 인지도</td>
                </tr>
                <tr>
                  <td><strong>관심 (Interest)</strong></td>
                  <td>제품에 대해 적극적으로 정보 탐색</td>
                  <td>웹사이트, 리뷰, 비교 사이트</td>
                  <td>페이지뷰, 체류 시간, 이탈률</td>
                </tr>
                <tr>
                  <td><strong>고려 (Consideration)</strong></td>
                  <td>대안 비교, 구매 여부 고민</td>
                  <td>제품 상세 페이지, 장바구니</td>
                  <td>장바구니 담기율, 위시리스트</td>
                </tr>
                <tr>
                  <td><strong>구매 (Purchase)</strong></td>
                  <td>실제 구매 행위 완료</td>
                  <td>결제 페이지, 오프라인 매장</td>
                  <td>전환율, 객단가, 매출</td>
                </tr>
                <tr>
                  <td><strong>유지 (Retention)</strong></td>
                  <td>재구매, 지속적 이용</td>
                  <td>이메일, 앱 푸시, 로열티 프로그램</td>
                  <td>재구매율, 유지율, LTV</td>
                </tr>
                <tr>
                  <td><strong>옹호 (Advocacy)</strong></td>
                  <td>다른 사람에게 추천, 리뷰 작성</td>
                  <td>SNS, 리뷰 사이트, 구전</td>
                  <td>NPS, 리뷰 수, 추천율</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 퍼널 분석 (Funnel Analysis)</h3>

            <p>
              퍼널 분석은 고객 여정의 각 단계에서 이탈하는 사용자를 파악하고,
              전환율을 개선하기 위한 분석 방법입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>퍼널 분석 예시: 이커머스</h3>
              <ul>
                <li><strong>1단계:</strong> 사이트 방문 (10,000명) - 100%</li>
                <li><strong>2단계:</strong> 상품 조회 (6,000명) - 60% (40% 이탈)</li>
                <li><strong>3단계:</strong> 장바구니 담기 (1,500명) - 15% (75% 이탈)</li>
                <li><strong>4단계:</strong> 결제 시작 (600명) - 6% (60% 이탈)</li>
                <li><strong>5단계:</strong> 구매 완료 (300명) - 3% (50% 이탈)</li>
              </ul>
              <p>
                이 분석을 통해 <strong>"상품 조회 → 장바구니"</strong> 단계에서 가장 큰 이탈(75%)이
                발생하고 있음을 파악하고, 이 구간에 대한 개선 전략을 집중할 수 있습니다.
              </p>
            </div>

            {/* ─── 5. 마케팅 대시보드 구축 ─── */}
            <h2 data-aos="fade-up">5. 마케팅 대시보드 구축</h2>

            <p>
              <strong>마케팅 대시보드</strong>는 핵심 마케팅 지표를 한눈에 볼 수 있도록
              시각화한 모니터링 화면입니다. 신속한 의사결정과 성과 관리에 필수적인 도구입니다.
            </p>

            <h3>5.1 효과적인 대시보드 구성 원칙</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>원칙</th><th>설명</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>목적 중심</strong></td>
                  <td>대시보드의 사용자와 의사결정 목적을 먼저 정의</td>
                </tr>
                <tr>
                  <td><strong>핵심 지표 선별</strong></td>
                  <td>너무 많은 지표보다 5-10개의 핵심 KPI에 집중</td>
                </tr>
                <tr>
                  <td><strong>시각적 계층</strong></td>
                  <td>가장 중요한 지표를 가장 눈에 띄는 위치에 배치</td>
                </tr>
                <tr>
                  <td><strong>시계열 포함</strong></td>
                  <td>추세를 파악할 수 있도록 시간에 따른 변화 표시</td>
                </tr>
                <tr>
                  <td><strong>실행 가능한 인사이트</strong></td>
                  <td>데이터를 보고 즉시 행동으로 연결할 수 있어야 함</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 대시보드 구축 도구</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>특징</th><th>적합한 상황</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google Looker Studio</strong></td>
                  <td>무료, GA4/Google Ads 연동 용이</td>
                  <td>구글 생태계 중심의 마케팅 팀</td>
                </tr>
                <tr>
                  <td><strong>Tableau</strong></td>
                  <td>강력한 시각화, 다양한 데이터 소스 연결</td>
                  <td>대규모 데이터 분석, 고급 시각화</td>
                </tr>
                <tr>
                  <td><strong>Notion / Google Sheets</strong></td>
                  <td>간단한 설정, 팀 협업 용이</td>
                  <td>스타트업, 소규모 팀, 빠른 세팅</td>
                </tr>
                <tr>
                  <td><strong>Power BI</strong></td>
                  <td>Microsoft 생태계 연동, 기업용</td>
                  <td>Microsoft 환경 사용 기업</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>마케팅 대시보드 권장 구성</h3>
              <ul>
                <li><strong>요약 섹션:</strong> 핵심 KPI 스코어카드 (매출, 트래픽, 전환율, CAC)</li>
                <li><strong>트래픽 섹션:</strong> 채널별 유입, 시계열 추이, 신규/재방문 비율</li>
                <li><strong>전환 섹션:</strong> 퍼널 시각화, 전환율 추이, 채널별 전환 기여</li>
                <li><strong>캠페인 섹션:</strong> 캠페인별 ROAS, 비용, 전환, 클릭률</li>
                <li><strong>고객 섹션:</strong> 세그먼트별 행동, LTV, 유지율</li>
              </ul>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li>마케팅 데이터는 <strong>1st/2nd/3rd/Zero Party</strong>로 분류되며, 1st Party Data의 중요성이 증가하고 있다.</li>
                <li><strong>Google Analytics 4</strong>는 이벤트 기반 추적 모델로, 사용자 행동을 정밀하게 분석한다.</li>
                <li><strong>A/B 테스트</strong>는 가설 → 실험 → 분석의 과학적 방법으로 마케팅 효과를 검증한다.</li>
                <li><strong>고객 여정 분석</strong>과 퍼널 분석을 통해 이탈 구간을 파악하고 전환율을 개선한다.</li>
                <li><strong>마케팅 대시보드</strong>는 핵심 KPI를 시각화하여 신속한 의사결정을 지원한다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week12" className="lesson-nav-btn prev">
                ← 12주차: SEO & SEM
              </Link>
              <Link to="/lessons/week14" className="lesson-nav-btn next">
                14주차: 브랜드 & CRM →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek13;
