import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek15 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="15주차: 마케팅 트렌드"
        description="AI 마케팅, 지속가능한 마케팅(ESG), 개인화 마케팅, 메타버스 마케팅, 마케팅의 미래를 학습합니다."
        path="/lessons/week15"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>15주차: 마케팅 트렌드</h1>
          <p>AI, ESG, 개인화, 메타버스 등 최신 마케팅 트렌드와 마케팅의 미래를 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>AI가 마케팅에 미치는 영향과 활용 사례를 설명할 수 있다.</li>
                <li>ESG와 지속가능한 마케팅의 개념과 전략을 이해한다.</li>
                <li>개인화 마케팅의 기술과 전략을 설명할 수 있다.</li>
                <li>메타버스 마케팅의 가능성과 사례를 분석할 수 있다.</li>
                <li>마케팅의 미래 방향성을 전망할 수 있다.</li>
              </ul>
            </div>

            {/* ─── 1. AI와 마케팅 ─── */}
            <h2 data-aos="fade-up">1. AI와 마케팅 (ChatGPT / AI 광고)</h2>

            <p>
              <strong>AI(인공지능)</strong>는 마케팅의 거의 모든 영역에 혁신적인 변화를 가져오고 있습니다.
              데이터 분석, 콘텐츠 생성, 고객 서비스, 광고 최적화 등 다양한 분야에서 AI가 활용되며,
              마케터의 역할과 필요 역량도 빠르게 변화하고 있습니다.
            </p>

            <h3>1.1 마케팅에서의 AI 활용 분야</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>활용 분야</th><th>AI 기술</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>콘텐츠 생성</strong></td>
                  <td>생성형 AI (ChatGPT, Claude, Gemini)</td>
                  <td>블로그 글 작성, 광고 카피, SNS 콘텐츠, 이메일 초안</td>
                </tr>
                <tr>
                  <td><strong>이미지/동영상 생성</strong></td>
                  <td>Midjourney, DALL-E, Sora</td>
                  <td>광고 비주얼, 제품 이미지, 홍보 영상 제작</td>
                </tr>
                <tr>
                  <td><strong>고객 서비스</strong></td>
                  <td>AI 챗봇, 대화형 AI</td>
                  <td>24시간 고객 상담, FAQ 자동 응답, 상품 추천</td>
                </tr>
                <tr>
                  <td><strong>광고 최적화</strong></td>
                  <td>머신러닝, 자동 입찰</td>
                  <td>Google Ads 스마트 입찰, Meta AI 타겟팅</td>
                </tr>
                <tr>
                  <td><strong>예측 분석</strong></td>
                  <td>머신러닝, 딥러닝</td>
                  <td>이탈 예측, 수요 예측, LTV 예측</td>
                </tr>
                <tr>
                  <td><strong>개인화</strong></td>
                  <td>추천 알고리즘, NLP</td>
                  <td>넷플릭스 콘텐츠 추천, 이커머스 상품 추천</td>
                </tr>
              </tbody>
            </table>

            <h3>1.2 ChatGPT를 활용한 마케팅 실무</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>업무</th><th>활용 방법</th><th>프롬프트 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>마케팅 기획</strong></td>
                  <td>아이디어 브레인스토밍, 전략 초안</td>
                  <td>"20대 여성 타겟 화장품 런칭 마케팅 전략을 수립해줘"</td>
                </tr>
                <tr>
                  <td><strong>카피라이팅</strong></td>
                  <td>광고 문구, CTA, 이메일 제목 생성</td>
                  <td>"이 제품의 USP를 강조한 5가지 광고 헤드라인을 작성해줘"</td>
                </tr>
                <tr>
                  <td><strong>데이터 분석</strong></td>
                  <td>데이터 해석, 인사이트 도출</td>
                  <td>"이 GA4 데이터를 분석하고 개선 포인트를 제안해줘"</td>
                </tr>
                <tr>
                  <td><strong>고객 리서치</strong></td>
                  <td>페르소나 작성, 고객 니즈 분석</td>
                  <td>"건강식품 구매 고객의 페르소나 3가지를 작성해줘"</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>AI 마케팅 활용 시 주의점</h3>
              <ul>
                <li><strong>팩트체크 필수:</strong> AI가 생성한 정보의 정확성을 반드시 검증</li>
                <li><strong>저작권 이슈:</strong> AI 생성 콘텐츠의 저작권 관련 법적 검토</li>
                <li><strong>브랜드 톤 유지:</strong> AI 결과물을 브랜드 가이드에 맞게 수정/편집</li>
                <li><strong>인간의 판단:</strong> AI는 도구일 뿐, 최종 의사결정은 마케터의 몫</li>
                <li><strong>윤리적 사용:</strong> 허위 리뷰, 딥페이크 광고 등 비윤리적 활용 금지</li>
              </ul>
            </div>

            {/* ─── 2. 지속가능한 마케팅 (ESG) ─── */}
            <h2 data-aos="fade-up">2. 지속가능한 마케팅 (ESG)</h2>

            <p>
              <strong>지속가능한 마케팅(Sustainable Marketing)</strong>은 환경적, 사회적, 경제적 지속가능성을
              고려하면서 마케팅 활동을 수행하는 접근 방식입니다. ESG(환경/사회/거버넌스) 경영이
              기업 평가의 핵심 기준이 되면서, 마케팅에서도 필수 전략이 되고 있습니다.
            </p>

            <h3>2.1 ESG와 마케팅의 연결</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>ESG 영역</th><th>마케팅 적용</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>E (Environmental)</strong></td>
                  <td>친환경 제품, 탄소중립, 패키징 혁신</td>
                  <td>파타고니아 환경 캠페인, 아모레퍼시픽 리필 스테이션</td>
                </tr>
                <tr>
                  <td><strong>S (Social)</strong></td>
                  <td>사회공헌, 다양성 존중, 공정무역</td>
                  <td>탐스 슈즈 One for One, 도브 Real Beauty 캠페인</td>
                </tr>
                <tr>
                  <td><strong>G (Governance)</strong></td>
                  <td>윤리적 마케팅, 투명한 커뮤니케이션</td>
                  <td>광고 투명성, 개인정보 보호, 공정 가격</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 그린워싱(Greenwashing) 주의</h3>

            <div className="callout-box" data-aos="fade-up">
              <h3>그린워싱이란?</h3>
              <p>
                <strong>그린워싱(Greenwashing)</strong>은 실제로는 친환경적이지 않으면서 친환경적인 것처럼
                마케팅하는 기만적 행위입니다. 소비자의 환경 의식을 악용하면 브랜드 신뢰에 치명적 타격을 줍니다.
              </p>
              <ul>
                <li>모호한 용어 사용: "자연 유래", "에코" 등 근거 없는 표현</li>
                <li>부분적 사실 강조: 한 가지 친환경 요소만 과대 포장</li>
                <li>인증 없는 마크: 공인되지 않은 친환경 인증 마크 사용</li>
                <li>대안 제시: 구체적 데이터, 제3자 인증, 투명한 정보 공개</li>
              </ul>
            </div>

            {/* ─── 3. 개인화 마케팅 ─── */}
            <h2 data-aos="fade-up">3. 개인화 마케팅</h2>

            <p>
              <strong>개인화 마케팅(Personalization Marketing)</strong>은 고객 개개인의 선호, 행동,
              니즈에 맞춰 맞춤형 경험을 제공하는 마케팅 전략입니다. "모든 고객을 같은 메시지로"에서
              "각 고객에게 최적화된 메시지로" 진화하고 있습니다.
            </p>

            <h3>3.1 개인화의 수준</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>수준</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>기본 개인화</strong></td>
                  <td>이름, 위치 등 기본 정보 활용</td>
                  <td>"김마케팅님, 안녕하세요!" 이메일</td>
                </tr>
                <tr>
                  <td><strong>세그먼트 기반</strong></td>
                  <td>고객 그룹별 차별화된 콘텐츠</td>
                  <td>20대 여성에게 화장품 추천, 30대 남성에게 전자기기 추천</td>
                </tr>
                <tr>
                  <td><strong>행동 기반</strong></td>
                  <td>실시간 행동 데이터를 활용한 맞춤 경험</td>
                  <td>장바구니 이탈 시 리타겟팅 광고, 최근 본 상품 기반 추천</td>
                </tr>
                <tr>
                  <td><strong>예측 기반</strong></td>
                  <td>AI로 미래 행동을 예측하여 선제적 제안</td>
                  <td>다음 구매 제품 예측, 이탈 가능성 높은 고객 선별</td>
                </tr>
                <tr>
                  <td><strong>초개인화 (Hyper-Personalization)</strong></td>
                  <td>실시간 데이터와 AI를 결합한 1:1 맞춤 경험</td>
                  <td>넷플릭스 개인별 썸네일, Spotify 맞춤 플레이리스트</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 개인화 마케팅 기술 스택</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>기술</th><th>역할</th><th>대표 솔루션</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CDP (Customer Data Platform)</strong></td>
                  <td>고객 데이터 통합 및 단일 프로필 구축</td>
                  <td>Segment, mParticle, Treasure Data</td>
                </tr>
                <tr>
                  <td><strong>마케팅 자동화</strong></td>
                  <td>트리거 기반 자동 캠페인 실행</td>
                  <td>HubSpot, Braze, Mailchimp</td>
                </tr>
                <tr>
                  <td><strong>추천 엔진</strong></td>
                  <td>개인 맞춤 상품/콘텐츠 추천</td>
                  <td>Amazon Personalize, Recombee</td>
                </tr>
                <tr>
                  <td><strong>동적 콘텐츠</strong></td>
                  <td>사용자에 따라 웹사이트 콘텐츠 변경</td>
                  <td>Optimizely, Dynamic Yield</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>개인화와 프라이버시의 균형</h3>
              <p>
                개인화 마케팅은 고객 데이터를 기반으로 하기 때문에, <strong>개인정보 보호</strong>와의
                균형이 매우 중요합니다. GDPR(EU), 개인정보보호법(한국) 등 규정을 준수하면서
                투명한 데이터 수집과 명확한 동의 절차를 통해 고객의 신뢰를 확보해야 합니다.
              </p>
            </div>

            {/* ─── 4. 메타버스 마케팅 ─── */}
            <h2 data-aos="fade-up">4. 메타버스 마케팅</h2>

            <p>
              <strong>메타버스(Metaverse)</strong>는 현실 세계와 가상 세계가 융합된 3차원 디지털 공간입니다.
              브랜드들은 메타버스를 새로운 마케팅 채널로 활용하여 MZ세대와 소통하고,
              몰입형 브랜드 경험을 제공하고 있습니다.
            </p>

            <h3>4.1 메타버스 마케팅 유형</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>유형</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>가상 매장/공간</strong></td>
                  <td>메타버스 내 브랜드 전용 공간 구축</td>
                  <td>나이키 로블록스 Nikeland, 현대차 제페토 월드</td>
                </tr>
                <tr>
                  <td><strong>디지털 아이템/NFT</strong></td>
                  <td>가상 의류, 액세서리 등 디지털 굿즈 판매</td>
                  <td>구찌 가상 가방, 나이키 .SWOOSH NFT</td>
                </tr>
                <tr>
                  <td><strong>가상 이벤트</strong></td>
                  <td>콘서트, 전시회 등 가상 체험 이벤트</td>
                  <td>포트나이트 트래비스 스콧 콘서트, BTS 포트나이트 공연</td>
                </tr>
                <tr>
                  <td><strong>버추얼 인플루언서</strong></td>
                  <td>AI 기반 가상 인물을 활용한 마케팅</td>
                  <td>로지(Rozy), 릴 미켈라(Lil Miquela)</td>
                </tr>
                <tr>
                  <td><strong>AR/VR 경험</strong></td>
                  <td>증강현실/가상현실을 활용한 브랜드 체험</td>
                  <td>이케아 AR 가구 배치, 세포라 AR 메이크업 체험</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>메타버스 마케팅 전략 수립 시 고려사항</h3>
              <ul>
                <li><strong>타겟 적합성:</strong> MZ세대 중심으로 타겟이 실제로 활동하는 플랫폼 선택</li>
                <li><strong>몰입형 경험:</strong> 단순 광고가 아닌, 참여하고 즐길 수 있는 경험 설계</li>
                <li><strong>현실과의 연계:</strong> 가상 경험이 현실 구매로 이어지는 O2O 전략</li>
                <li><strong>지속적 콘텐츠:</strong> 일회성 이벤트가 아닌 지속적인 콘텐츠 업데이트</li>
                <li><strong>ROI 측정:</strong> 메타버스 활동의 효과를 측정할 수 있는 KPI 설정</li>
              </ul>
            </div>

            {/* ─── 5. 마케팅의 미래 ─── */}
            <h2 data-aos="fade-up">5. 마케팅의 미래</h2>

            <p>
              기술의 발전과 소비자 행동의 변화에 따라 마케팅은 계속 진화하고 있습니다.
              앞으로의 마케팅 환경을 전망하고, 미래 마케터에게 필요한 역량을 살펴봅니다.
            </p>

            <h3>5.1 마케팅의 미래 트렌드</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>트렌드</th><th>설명</th><th>영향</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AI 네이티브 마케팅</strong></td>
                  <td>AI가 마케팅 전 과정에 내재화</td>
                  <td>자동화된 캠페인 실행, AI 에이전트 활용</td>
                </tr>
                <tr>
                  <td><strong>프라이버시 퍼스트</strong></td>
                  <td>개인정보 보호 중심의 마케팅 전환</td>
                  <td>1st Party Data 전략, 동의 기반 마케팅</td>
                </tr>
                <tr>
                  <td><strong>음성 검색 / 대화형 커머스</strong></td>
                  <td>음성 AI, 챗봇을 통한 쇼핑 경험</td>
                  <td>음성 SEO, 대화형 광고</td>
                </tr>
                <tr>
                  <td><strong>커뮤니티 기반 성장</strong></td>
                  <td>브랜드 중심 커뮤니티의 중요성 증가</td>
                  <td>D2C 커뮤니티, 크리에이터 이코노미</td>
                </tr>
                <tr>
                  <td><strong>지속가능성 필수화</strong></td>
                  <td>ESG가 마케팅의 필수 요소로 자리잡음</td>
                  <td>탄소발자국 라벨링, 순환경제 마케팅</td>
                </tr>
                <tr>
                  <td><strong>초연결 경험</strong></td>
                  <td>온오프라인, 디바이스 간 끊김 없는 경험</td>
                  <td>옴니채널 통합, IoT 마케팅</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 미래 마케터에게 필요한 역량</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>역량</th><th>설명</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>데이터 리터러시</strong></td>
                  <td>데이터를 읽고, 분석하고, 의사결정에 활용하는 능력</td>
                </tr>
                <tr>
                  <td><strong>AI 활용 능력</strong></td>
                  <td>AI 도구를 효과적으로 활용하고 결과를 판단하는 능력</td>
                </tr>
                <tr>
                  <td><strong>스토리텔링</strong></td>
                  <td>데이터와 인사이트를 설득력 있는 이야기로 전달하는 능력</td>
                </tr>
                <tr>
                  <td><strong>적응력</strong></td>
                  <td>빠르게 변화하는 기술과 트렌드에 유연하게 대응하는 능력</td>
                </tr>
                <tr>
                  <td><strong>고객 공감 능력</strong></td>
                  <td>기술 시대에도 고객의 감정과 니즈를 깊이 이해하는 능력</td>
                </tr>
                <tr>
                  <td><strong>윤리적 판단력</strong></td>
                  <td>AI, 데이터 활용에서 윤리적 기준을 지키는 능력</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>마무리 메시지</h3>
              <p>
                15주간의 마케팅 학습 여정을 마치며, 가장 중요한 것은 <strong>고객 중심의 사고</strong>입니다.
                기술과 채널은 계속 변하지만, "고객에게 진정한 가치를 제공한다"는 마케팅의 본질은 변하지 않습니다.
                이론적 지식을 바탕으로 실무에서 지속적으로 실험하고, 데이터로 검증하며,
                끊임없이 학습하는 마케터가 되시길 바랍니다.
              </p>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>AI 마케팅</strong>은 콘텐츠 생성, 광고 최적화, 예측 분석 등 전 분야에 활용되고 있다.</li>
                <li><strong>지속가능한 마케팅</strong>은 ESG 경영과 연계되며, 그린워싱을 주의해야 한다.</li>
                <li><strong>개인화 마케팅</strong>은 CDP, AI 추천 등 기술을 활용하되 프라이버시와 균형을 맞춰야 한다.</li>
                <li><strong>메타버스 마케팅</strong>은 몰입형 경험을 통한 새로운 브랜드 소통 채널이다.</li>
                <li>미래 마케터에게는 <strong>데이터 리터러시, AI 활용, 고객 공감, 윤리적 판단력</strong>이 핵심이다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week14" className="lesson-nav-btn prev">
                ← 14주차: 브랜드 & CRM
              </Link>
              <Link to="/lessons" className="lesson-nav-btn next">
                전체 학습 목록 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek15;
