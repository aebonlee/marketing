import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek14 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="14주차: 브랜드 & CRM"
        description="브랜드 자산, 브랜드 아이덴티티, CRM의 개념, 고객 세그멘테이션, 로열티 프로그램을 학습합니다."
        path="/lessons/week14"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>14주차: 브랜드 & CRM</h1>
          <p>브랜드 자산 관리와 고객관계관리(CRM)의 핵심 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>브랜드 자산(Brand Equity)의 개념과 구성요소를 설명할 수 있다.</li>
                <li>브랜드 아이덴티티의 핵심 요소를 이해하고 구축 방법을 설명할 수 있다.</li>
                <li>CRM의 개념과 중요성을 설명할 수 있다.</li>
                <li>고객 세그멘테이션의 기준과 방법을 이해한다.</li>
                <li>효과적인 로열티 프로그램을 설계할 수 있다.</li>
              </ul>
            </div>

            {/* ─── 1. 브랜드 자산 (Brand Equity) ─── */}
            <h2 data-aos="fade-up">1. 브랜드 자산 (Brand Equity)</h2>

            <p>
              <strong>브랜드 자산(Brand Equity)</strong>이란 브랜드가 가진 이름, 상징, 연상 등이
              제품이나 서비스에 부여하는 추가적인 가치를 의미합니다. 동일한 제품이라도 브랜드에 따라
              소비자가 인식하는 가치와 지불 의사가 달라집니다.
            </p>

            <h3>1.1 케빈 켈러(Kevin Keller)의 CBBE 모델</h3>

            <p>
              <strong>CBBE(Customer-Based Brand Equity)</strong> 모델은 브랜드 자산을 고객 관점에서
              4단계 피라미드로 설명합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>블록</th><th>설명</th><th>핵심 질문</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1단계</strong></td>
                  <td>브랜드 현저성 (Salience)</td>
                  <td>브랜드의 인지도와 떠오르는 정도</td>
                  <td>"이 브랜드를 알고 있는가?"</td>
                </tr>
                <tr>
                  <td><strong>2단계</strong></td>
                  <td>성과 (Performance) / 이미지 (Imagery)</td>
                  <td>브랜드의 기능적 가치와 감성적 이미지</td>
                  <td>"이 브랜드는 어떤 브랜드인가?"</td>
                </tr>
                <tr>
                  <td><strong>3단계</strong></td>
                  <td>판단 (Judgement) / 감정 (Feelings)</td>
                  <td>브랜드에 대한 평가와 감정적 반응</td>
                  <td>"이 브랜드에 대해 어떻게 생각하는가?"</td>
                </tr>
                <tr>
                  <td><strong>4단계</strong></td>
                  <td>공명 (Resonance)</td>
                  <td>브랜드와의 깊은 유대감과 충성도</td>
                  <td>"이 브랜드와 어떤 관계를 맺고 있는가?"</td>
                </tr>
              </tbody>
            </table>

            <h3>1.2 데이비드 아커(David Aaker)의 브랜드 자산 5요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 인지도</strong></td>
                  <td>소비자가 브랜드를 알아보고 떠올리는 능력</td>
                  <td>코카콜라: "콜라" 하면 가장 먼저 떠오름</td>
                </tr>
                <tr>
                  <td><strong>브랜드 연상</strong></td>
                  <td>브랜드와 관련하여 떠오르는 이미지, 감정, 속성</td>
                  <td>나이키: 도전, 운동, "Just Do It"</td>
                </tr>
                <tr>
                  <td><strong>지각된 품질</strong></td>
                  <td>소비자가 인식하는 전반적인 품질 수준</td>
                  <td>삼성 갤럭시: 프리미엄 기술, 혁신</td>
                </tr>
                <tr>
                  <td><strong>브랜드 충성도</strong></td>
                  <td>브랜드에 대한 반복 구매 의지와 애착</td>
                  <td>애플: iPhone 사용자의 높은 재구매율</td>
                </tr>
                <tr>
                  <td><strong>기타 독점적 자산</strong></td>
                  <td>특허, 상표권, 유통 관계 등</td>
                  <td>디즈니: 캐릭터 라이선스, 테마파크</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 브랜드 아이덴티티 구축 ─── */}
            <h2 data-aos="fade-up">2. 브랜드 아이덴티티 구축</h2>

            <p>
              <strong>브랜드 아이덴티티(Brand Identity)</strong>는 기업이 고객에게 전달하고자 하는
              브랜드의 본질적 이미지와 가치입니다. 즉, "우리 브랜드가 무엇인지"를 정의하는 것입니다.
            </p>

            <h3>2.1 브랜드 아이덴티티의 구성 요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>예시 (스타벅스)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 미션</strong></td>
                  <td>브랜드의 존재 이유와 목적</td>
                  <td>"인간의 정신에 영감을 주고 육성하는 것"</td>
                </tr>
                <tr>
                  <td><strong>브랜드 비전</strong></td>
                  <td>브랜드가 지향하는 미래 모습</td>
                  <td>"제3의 공간(Third Place)" 제공</td>
                </tr>
                <tr>
                  <td><strong>브랜드 가치</strong></td>
                  <td>브랜드의 핵심 가치관과 원칙</td>
                  <td>커뮤니티, 지속가능성, 품질</td>
                </tr>
                <tr>
                  <td><strong>브랜드 퍼스낼리티</strong></td>
                  <td>브랜드를 사람으로 표현했을 때의 성격</td>
                  <td>따뜻한, 세련된, 친근한</td>
                </tr>
                <tr>
                  <td><strong>톤앤매너(Tone & Manner)</strong></td>
                  <td>커뮤니케이션 시 사용하는 목소리와 스타일</td>
                  <td>친근하면서도 전문적인 어조</td>
                </tr>
                <tr>
                  <td><strong>비주얼 아이덴티티</strong></td>
                  <td>로고, 색상, 타이포그래피, 이미지 스타일</td>
                  <td>초록색 사이렌 로고, 녹색/갈색 팔레트</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 브랜드 포지셔닝 문장 (Brand Positioning Statement)</h3>

            <div className="callout-box" data-aos="fade-up">
              <h3>브랜드 포지셔닝 템플릿</h3>
              <p>
                <em>
                  "[타겟 고객]을 위한 [브랜드]는 [카테고리]로서,
                  [핵심 혜택]을 제공합니다. 왜냐하면 [차별화 근거]이기 때문입니다."
                </em>
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>예시:</strong> "건강을 중시하는 20-30대를 위한 [브랜드A]는 건강 음료로서,
                100% 천연 재료만으로 만든 프리미엄 맛과 영양을 제공합니다.
                왜냐하면 자체 유기농 농장에서 직접 재배한 원료만 사용하기 때문입니다."
              </p>
            </div>

            {/* ─── 3. CRM의 개념과 중요성 ─── */}
            <h2 data-aos="fade-up">3. CRM의 개념과 중요성</h2>

            <p>
              <strong>CRM(Customer Relationship Management, 고객관계관리)</strong>은 기업이 고객과의
              관계를 체계적으로 관리하고 개선하여, 고객 만족도와 충성도를 높이며 궁극적으로 수익을
              극대화하는 경영 전략 및 기술입니다.
            </p>

            <h3>3.1 CRM이 중요한 이유</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>관점</th><th>중요성</th><th>수치/근거</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>비용 효율</strong></td>
                  <td>기존 고객 유지가 신규 고객 획득보다 비용 효율적</td>
                  <td>신규 고객 획득 비용은 기존 고객 유지 비용의 5~7배</td>
                </tr>
                <tr>
                  <td><strong>매출 증대</strong></td>
                  <td>충성 고객의 높은 구매 빈도와 객단가</td>
                  <td>고객 유지율 5% 증가 시 수익 25~95% 증가</td>
                </tr>
                <tr>
                  <td><strong>구전 효과</strong></td>
                  <td>만족한 고객의 자발적 추천</td>
                  <td>만족 고객은 평균 3명에게 추천, 불만 고객은 11명에게 불만 전파</td>
                </tr>
                <tr>
                  <td><strong>데이터 자산</strong></td>
                  <td>고객 데이터 축적을 통한 인사이트 도출</td>
                  <td>개인화, 예측 분석, 제품 개선에 활용</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 CRM의 구성 요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구성 요소</th><th>설명</th><th>대표 도구</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>운영적 CRM</strong></td>
                  <td>영업, 마케팅, 서비스 자동화</td>
                  <td>Salesforce, HubSpot, 채널톡</td>
                </tr>
                <tr>
                  <td><strong>분석적 CRM</strong></td>
                  <td>고객 데이터 분석, 인사이트 도출</td>
                  <td>Google Analytics, Tableau, CDP</td>
                </tr>
                <tr>
                  <td><strong>협업적 CRM</strong></td>
                  <td>부서 간 고객 정보 공유 및 협업</td>
                  <td>Slack 연동, 통합 CRM 플랫폼</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 4. 고객 세그멘테이션 ─── */}
            <h2 data-aos="fade-up">4. 고객 세그멘테이션</h2>

            <p>
              <strong>고객 세그멘테이션(Customer Segmentation)</strong>은 전체 고객을 공통된 특성에
              따라 동질적인 그룹으로 나누는 과정입니다. CRM의 핵심 활동으로, 각 세그먼트에 맞는
              차별화된 전략을 수립하는 데 활용됩니다.
            </p>

            <h3>4.1 세그멘테이션 기준</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>기준</th><th>변수</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인구통계적</strong></td>
                  <td>연령, 성별, 소득, 직업, 학력</td>
                  <td>20-30대 직장인 여성</td>
                </tr>
                <tr>
                  <td><strong>지리적</strong></td>
                  <td>국가, 지역, 도시, 기후</td>
                  <td>수도권 거주, 대도시 중심</td>
                </tr>
                <tr>
                  <td><strong>심리적</strong></td>
                  <td>라이프스타일, 가치관, 성격, 관심사</td>
                  <td>환경 의식 높은 소비자, 미니멀리스트</td>
                </tr>
                <tr>
                  <td><strong>행동적</strong></td>
                  <td>구매 빈도, 사용량, 구매 시점, 브랜드 충성도</td>
                  <td>월 3회 이상 구매하는 헤비 유저</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 RFM 분석</h3>

            <p>
              <strong>RFM 분석</strong>은 고객의 구매 행동을 3가지 기준으로 점수화하여
              고객 가치를 평가하는 대표적인 세그멘테이션 방법입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>기준</th><th>영문</th><th>설명</th><th>높은 점수 = </th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>R</strong></td>
                  <td>Recency (최근성)</td>
                  <td>가장 최근에 구매한 시점</td>
                  <td>최근에 구매한 고객</td>
                </tr>
                <tr>
                  <td><strong>F</strong></td>
                  <td>Frequency (빈도)</td>
                  <td>일정 기간 내 구매 횟수</td>
                  <td>자주 구매하는 고객</td>
                </tr>
                <tr>
                  <td><strong>M</strong></td>
                  <td>Monetary (금액)</td>
                  <td>일정 기간 내 총 구매 금액</td>
                  <td>많이 구매하는 고객</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>RFM 기반 고객 세그먼트 예시</h3>
              <ul>
                <li><strong>VIP 고객 (R높, F높, M높):</strong> 프리미엄 혜택, 전담 매니저, 신제품 우선 안내</li>
                <li><strong>충성 고객 (R중, F높, M중):</strong> 감사 이벤트, 리워드 강화, 업셀링</li>
                <li><strong>신규 고객 (R높, F낮, M낮):</strong> 환영 혜택, 온보딩 안내, 재구매 유도</li>
                <li><strong>이탈 위험 (R낮, F중, M중):</strong> 재활성화 캠페인, 특별 할인, 피드백 요청</li>
                <li><strong>이탈 고객 (R낮, F낮, M낮):</strong> 재참여 캠페인, 설문조사, 비용 대비 효과 분석</li>
              </ul>
            </div>

            {/* ─── 5. 로열티 프로그램 ─── */}
            <h2 data-aos="fade-up">5. 로열티 프로그램</h2>

            <p>
              <strong>로열티 프로그램(Loyalty Program)</strong>은 반복 구매 고객에게 보상을 제공하여
              고객 충성도를 높이고 장기적인 관계를 구축하기 위한 마케팅 프로그램입니다.
            </p>

            <h3>5.1 로열티 프로그램 유형</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>유형</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>포인트 적립형</strong></td>
                  <td>구매 시 포인트 적립, 일정 포인트 달성 시 보상</td>
                  <td>CJ ONE, OK캐쉬백, 항공 마일리지</td>
                </tr>
                <tr>
                  <td><strong>등급형 (Tiered)</strong></td>
                  <td>구매 실적에 따라 등급 부여, 등급별 차별 혜택</td>
                  <td>쿠팡 로켓와우, 네이버 플러스 멤버십</td>
                </tr>
                <tr>
                  <td><strong>유료 멤버십</strong></td>
                  <td>연회비를 내고 프리미엄 혜택 이용</td>
                  <td>Amazon Prime, 코스트코 회원</td>
                </tr>
                <tr>
                  <td><strong>스탬프형</strong></td>
                  <td>일정 횟수 구매 후 무료 제공</td>
                  <td>커피 10잔 구매 시 1잔 무료</td>
                </tr>
                <tr>
                  <td><strong>가치 기반형</strong></td>
                  <td>고객의 가치관에 맞는 사회공헌 연계</td>
                  <td>구매 시 환경 단체 기부, 탄소 상쇄</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 효과적인 로열티 프로그램 설계 원칙</h3>

            <ul>
              <li data-aos="fade-up"><strong>단순성:</strong> 가입과 사용이 쉽고, 혜택이 명확해야 함</li>
              <li data-aos="fade-up"><strong>가치 제공:</strong> 고객이 진정으로 원하는 보상을 제공 (금전적 + 경험적)</li>
              <li data-aos="fade-up"><strong>개인화:</strong> 고객의 구매 패턴과 선호에 맞는 맞춤형 혜택</li>
              <li data-aos="fade-up"><strong>즉시성:</strong> 보상을 빠르게 받을 수 있어야 동기 부여 효과 증가</li>
              <li data-aos="fade-up"><strong>게이미피케이션:</strong> 목표 달성, 등급 승격 등 게임 요소를 활용하여 참여 유도</li>
              <li data-aos="fade-up"><strong>데이터 활용:</strong> 프로그램을 통해 수집된 데이터로 마케팅 전략 개선</li>
            </ul>

            <div className="callout-box" data-aos="fade-up">
              <h3>로열티 프로그램 성과 측정 지표</h3>
              <ul>
                <li><strong>가입률:</strong> 전체 고객 중 프로그램 가입 비율</li>
                <li><strong>활성 회원율:</strong> 가입 회원 중 실제 활동 회원 비율</li>
                <li><strong>포인트 사용률:</strong> 적립된 포인트의 실제 사용 비율</li>
                <li><strong>회원 vs 비회원:</strong> 구매 빈도, 객단가, LTV 비교</li>
                <li><strong>NPS (Net Promoter Score):</strong> 추천 의향 점수</li>
              </ul>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>브랜드 자산</strong>은 인지도, 연상, 품질, 충성도로 구성되며 기업의 핵심 무형 자산이다.</li>
                <li><strong>브랜드 아이덴티티</strong>는 미션, 비전, 가치, 퍼스낼리티, 비주얼로 체계적으로 구축한다.</li>
                <li><strong>CRM</strong>은 고객과의 장기적 관계를 통해 비용 효율과 매출을 동시에 개선한다.</li>
                <li><strong>RFM 분석</strong>은 최근성, 빈도, 금액으로 고객을 세그멘테이션하는 대표적 기법이다.</li>
                <li><strong>로열티 프로그램</strong>은 단순하고 가치 있는 보상으로 고객 충성도를 강화해야 한다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week13" className="lesson-nav-btn prev">
                ← 13주차: 데이터 기반 마케팅
              </Link>
              <Link to="/lessons/week15" className="lesson-nav-btn next">
                15주차: 마케팅 트렌드 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek14;
