import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalAutomation = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="마케팅 자동화"
        description="마케팅 프로세스 자동화와 효율화 - HubSpot, Mailchimp, Zapier, 워크플로우, 리드 스코어링, 챗봇"
        path="/digital/automation"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>마케팅 자동화</h1>
          <p>마케팅 프로세스를 자동화하여 효율성을 극대화하는 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. 마케팅 자동화 개념 ─── */}
            <h2 data-aos="fade-up">1. 마케팅 자동화 개념</h2>

            <p data-aos="fade-up">
              <strong>마케팅 자동화(Marketing Automation)</strong>는 소프트웨어와 기술을 활용하여
              반복적인 마케팅 작업을 자동화하고, 개인화된 고객 경험을 대규모로 제공하며,
              마케팅 효율성과 성과를 동시에 높이는 전략입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>마케팅 자동화의 핵심 영역</h3>
              <ul>
                <li><strong>이메일 자동화</strong>: 트리거 기반 이메일 시퀀스, 세그멘테이션, 개인화 발송</li>
                <li><strong>리드 관리</strong>: 리드 캡처, 스코어링, 너처링 프로세스 자동화</li>
                <li><strong>소셜 미디어</strong>: 게시물 예약, 자동 응답, 소셜 리스닝</li>
                <li><strong>광고 자동화</strong>: 입찰 자동화, 오디언스 자동 최적화, 다이나믹 광고</li>
                <li><strong>분석/리포팅</strong>: 자동 대시보드, 정기 리포트 생성, 알림 설정</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도입 장점</th><th>설명</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>시간 절약</strong></td>
                  <td>반복 업무 자동화로 전략적 업무에 집중할 수 있습니다.</td>
                </tr>
                <tr>
                  <td><strong>일관성</strong></td>
                  <td>자동화된 프로세스로 고객 경험의 일관성을 유지합니다.</td>
                </tr>
                <tr>
                  <td><strong>확장성</strong></td>
                  <td>인력 증원 없이 더 많은 리드와 고객을 관리할 수 있습니다.</td>
                </tr>
                <tr>
                  <td><strong>개인화</strong></td>
                  <td>대규모 개인화 메시지 전달이 가능합니다.</td>
                </tr>
                <tr>
                  <td><strong>데이터 통합</strong></td>
                  <td>여러 채널의 데이터를 통합하여 인사이트를 도출합니다.</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 주요 도구 ─── */}
            <h2 data-aos="fade-up">2. 주요 도구 (HubSpot / Mailchimp / Zapier)</h2>

            <p data-aos="fade-up">
              마케팅 자동화를 위한 다양한 도구가 있으며, 비즈니스 규모와 목적에 따라
              적합한 도구를 선택해야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>핵심 기능</th><th>적합한 대상</th><th>가격</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HubSpot</strong></td>
                  <td>CRM, 이메일, 랜딩 페이지, 워크플로우, 소셜, 분석을 통합 제공</td>
                  <td>중소~대기업, B2B 마케팅</td>
                  <td>무료 ~ 월 $3,600+</td>
                </tr>
                <tr>
                  <td><strong>Mailchimp</strong></td>
                  <td>이메일 마케팅, 자동화, 랜딩 페이지, 기본 CRM</td>
                  <td>소규모 비즈니스, 이메일 중심</td>
                  <td>무료 ~ 월 $350+</td>
                </tr>
                <tr>
                  <td><strong>Zapier</strong></td>
                  <td>5,000+ 앱 간 자동 연동, 워크플로우(Zap) 생성</td>
                  <td>다양한 도구를 사용하는 모든 팀</td>
                  <td>무료 ~ 월 $599+</td>
                </tr>
                <tr>
                  <td><strong>ActiveCampaign</strong></td>
                  <td>이메일 자동화, CRM, 세일즈 자동화, 사이트 추적</td>
                  <td>중소기업, 이커머스</td>
                  <td>월 $29~</td>
                </tr>
                <tr>
                  <td><strong>Marketo</strong></td>
                  <td>엔터프라이즈급 마케팅 자동화, ABM, 리드 관리</td>
                  <td>대기업, B2B 엔터프라이즈</td>
                  <td>맞춤 견적</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>Zapier 활용 예시</h3>
              <ul>
                <li>Google Form 응답 &rarr; Slack 알림 + Google Sheets 기록 + 이메일 발송</li>
                <li>Instagram 새 게시물 &rarr; Twitter에 자동 공유</li>
                <li>Shopify 주문 &rarr; CRM 고객 정보 업데이트 + 감사 이메일 발송</li>
                <li>캘린더 이벤트 &rarr; Zoom 미팅 자동 생성 + 참석자에게 이메일 안내</li>
              </ul>
            </div>

            {/* ─── 3. 워크플로우 설계 ─── */}
            <h2 data-aos="fade-up">3. 워크플로우 설계</h2>

            <p data-aos="fade-up">
              마케팅 자동화 워크플로우는 특정 트리거(조건)가 발생했을 때
              미리 설정된 일련의 작업이 순차적으로 실행되는 자동화된 프로세스입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구성 요소</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>트리거 (Trigger)</strong></td>
                  <td>워크플로우를 시작하는 조건/이벤트</td>
                  <td>양식 제출, 페이지 방문, 구매 완료, 날짜 도달</td>
                </tr>
                <tr>
                  <td><strong>조건 (Condition)</strong></td>
                  <td>분기를 결정하는 조건문 (if/else)</td>
                  <td>리드 점수 50점 이상이면 A, 미만이면 B 경로</td>
                </tr>
                <tr>
                  <td><strong>액션 (Action)</strong></td>
                  <td>실행되는 작업</td>
                  <td>이메일 발송, 태그 추가, 담당자 변경, 알림 전송</td>
                </tr>
                <tr>
                  <td><strong>대기 (Delay)</strong></td>
                  <td>다음 액션까지의 대기 시간</td>
                  <td>3일 대기 후 팔로업 이메일 발송</td>
                </tr>
                <tr>
                  <td><strong>종료 조건</strong></td>
                  <td>워크플로우를 종료하는 조건</td>
                  <td>구매 완료, 수신거부, 목표 달성</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>워크플로우 설계 모범 사례</h3>
              <ul>
                <li><strong>단순하게 시작</strong>: 처음에는 간단한 워크플로우로 시작하고 점진적으로 복잡도를 높입니다.</li>
                <li><strong>명확한 목표</strong>: 각 워크플로우의 목표와 성공 지표를 명확히 정의합니다.</li>
                <li><strong>테스트</strong>: 라이브 전에 반드시 테스트하여 오류를 방지합니다.</li>
                <li><strong>모니터링</strong>: 정기적으로 성과를 확인하고 최적화합니다.</li>
                <li><strong>문서화</strong>: 워크플로우 로직과 목적을 문서화하여 팀원과 공유합니다.</li>
              </ul>
            </div>

            {/* ─── 4. 리드 스코어링 ─── */}
            <h2 data-aos="fade-up">4. 리드 스코어링</h2>

            <p data-aos="fade-up">
              <strong>리드 스코어링</strong>은 잠재고객(리드)의 행동, 특성, 참여도 등을 점수화하여
              구매 가능성이 높은 리드를 식별하고 우선순위를 결정하는 방법론입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>스코어링 기준</th><th>항목 예시</th><th>점수 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인구통계 (Demographic)</strong></td>
                  <td>직책, 기업 규모, 업종</td>
                  <td>C-level: +20점, 관련 업종: +15점</td>
                </tr>
                <tr>
                  <td><strong>행동 (Behavioral)</strong></td>
                  <td>웹사이트 방문, 콘텐츠 다운로드</td>
                  <td>가격 페이지 방문: +30점, 이북 다운로드: +15점</td>
                </tr>
                <tr>
                  <td><strong>이메일 참여</strong></td>
                  <td>오픈, 클릭, 회신</td>
                  <td>이메일 클릭: +10점, 회신: +25점</td>
                </tr>
                <tr>
                  <td><strong>소셜 참여</strong></td>
                  <td>소셜 팔로우, 댓글, 공유</td>
                  <td>소셜 팔로우: +5점, 댓글: +10점</td>
                </tr>
                <tr>
                  <td><strong>감점 요인</strong></td>
                  <td>장기 미활동, 수신거부</td>
                  <td>30일 미활동: -10점, 수신거부: -50점</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>리드 등급 분류</h3>
              <ul>
                <li><strong>MQL (Marketing Qualified Lead)</strong>: 마케팅 기준을 충족한 리드 (예: 70점 이상)</li>
                <li><strong>SQL (Sales Qualified Lead)</strong>: 영업 팀에 전달 가능한 수준의 리드 (예: 100점 이상)</li>
                <li><strong>Cold Lead</strong>: 초기 단계의 리드, 너처링이 필요 (예: 30점 미만)</li>
              </ul>
            </div>

            {/* ─── 5. 고객 여정 자동화 ─── */}
            <h2 data-aos="fade-up">5. 고객 여정 자동화</h2>

            <p data-aos="fade-up">
              고객 여정의 각 단계에 맞는 자동화된 소통을 설계하여
              개인화된 경험을 제공하고 전환율을 높입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>여정 단계</th><th>자동화 시나리오</th><th>핵심 콘텐츠</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지</strong></td>
                  <td>첫 방문자에게 관련 콘텐츠 추천</td>
                  <td>블로그, 인포그래픽, SNS 콘텐츠</td>
                </tr>
                <tr>
                  <td><strong>관심</strong></td>
                  <td>리드 마그넷 다운로드 후 교육 시퀀스 발송</td>
                  <td>이북, 가이드, 웨비나 초대</td>
                </tr>
                <tr>
                  <td><strong>고려</strong></td>
                  <td>제품 페이지 방문자에게 케이스 스터디 전달</td>
                  <td>고객 사례, 비교 자료, 데모 안내</td>
                </tr>
                <tr>
                  <td><strong>구매</strong></td>
                  <td>장바구니 이탈 리마인드, 구매 완료 후 감사 이메일</td>
                  <td>리마인드, 리뷰 요청, 크로스셀 추천</td>
                </tr>
                <tr>
                  <td><strong>충성</strong></td>
                  <td>VIP 고객 특별 혜택, 재구매 유도</td>
                  <td>로열티 프로그램, 멤버십 혜택, 추천 이벤트</td>
                </tr>
                <tr>
                  <td><strong>옹호</strong></td>
                  <td>리뷰 요청, 추천인 프로그램 안내</td>
                  <td>리뷰 작성 유도, 추천 리워드</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 6. 챗봇 활용 ─── */}
            <h2 data-aos="fade-up">6. 챗봇 활용</h2>

            <p data-aos="fade-up">
              <strong>마케팅 챗봇</strong>은 웹사이트, 메신저, SNS에서 고객과 자동으로 대화하며
              리드 수집, 고객 지원, 판매 안내 등을 수행하는 자동화 도구입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>활용 영역</th><th>설명</th><th>효과</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>리드 수집</strong></td>
                  <td>대화를 통해 자연스럽게 연락처와 니즈를 파악</td>
                  <td>양식 대비 높은 완료율</td>
                </tr>
                <tr>
                  <td><strong>FAQ 자동 응답</strong></td>
                  <td>자주 묻는 질문에 대한 즉각적 응답 제공</td>
                  <td>CS 업무 부하 감소, 24/7 대응</td>
                </tr>
                <tr>
                  <td><strong>제품 추천</strong></td>
                  <td>고객 선호도 파악 후 맞춤 제품 추천</td>
                  <td>구매 전환율 향상</td>
                </tr>
                <tr>
                  <td><strong>예약/상담 안내</strong></td>
                  <td>미팅 예약, 상담 일정 자동 조율</td>
                  <td>예약 프로세스 간소화</td>
                </tr>
                <tr>
                  <td><strong>주문 상태 안내</strong></td>
                  <td>주문/배송 상태 실시간 조회</td>
                  <td>고객 만족도 향상</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>챗봇 구축 도구</h3>
              <ul>
                <li><strong>ManyChat</strong>: Instagram DM, Facebook Messenger, WhatsApp 챗봇</li>
                <li><strong>Drift</strong>: B2B 대화형 마케팅, 실시간 채팅, 미팅 예약</li>
                <li><strong>Intercom</strong>: 고객 지원 및 마케팅 통합 메시징 플랫폼</li>
                <li><strong>ChatGPT API</strong>: AI 기반 자연어 처리 챗봇 구축</li>
                <li><strong>카카오 챗봇</strong>: 카카오톡 기반 비즈니스 챗봇 (국내)</li>
              </ul>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>마케팅 자동화</strong>는 반복 업무를 자동화하여 효율성과 개인화를 동시에 달성한다.</li>
                <li>HubSpot, Mailchimp, Zapier 등 <strong>비즈니스에 맞는 도구</strong>를 선택하여 활용한다.</li>
                <li><strong>워크플로우</strong>는 트리거-조건-액션 구조로 설계하며, 단순하게 시작한다.</li>
                <li><strong>리드 스코어링</strong>으로 구매 가능성이 높은 리드를 식별하고 우선순위를 정한다.</li>
                <li><strong>고객 여정 자동화</strong>로 각 단계에 맞는 개인화된 경험을 제공한다.</li>
                <li><strong>챗봇</strong>은 리드 수집, FAQ 응답, 제품 추천 등 24/7 고객 대응을 가능하게 한다.</li>
              </ul>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link
                to="/digital"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  background: 'var(--primary-blue)',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'opacity 0.2s',
                }}
              >
                디지털마케팅 실무 목록으로 돌아가기
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAutomation;
