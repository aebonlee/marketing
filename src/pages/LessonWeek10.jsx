import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek10 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="10주차: 디지털마케팅 기초"
        description="디지털마케팅의 개념, 전통 마케팅과의 차이, 디지털 채널, 전략 수립, KPI와 성과 측정을 학습합니다."
        path="/lessons/week10"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>10주차: 디지털마케팅 기초</h1>
          <p>디지털마케팅의 개념과 주요 채널, 전략 수립 방법 및 성과 측정 방법을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>디지털마케팅의 개념과 특성을 설명할 수 있다.</li>
                <li>전통 마케팅과 디지털마케팅의 차이를 비교할 수 있다.</li>
                <li>주요 디지털 마케팅 채널의 특성을 이해한다.</li>
                <li>디지털 마케팅 전략 수립 프로세스를 설명할 수 있다.</li>
                <li>KPI 설정과 성과 측정 방법을 이해한다.</li>
              </ul>
            </div>

            {/* ─── 1. 디지털마케팅의 개념 ─── */}
            <h2 data-aos="fade-up">1. 디지털마케팅의 개념</h2>

            <p>
              <strong>디지털마케팅(Digital Marketing)</strong>이란 인터넷, 모바일, 소셜미디어, 검색엔진 등
              디지털 채널과 기술을 활용하여 제품이나 서비스를 홍보하고, 고객과 소통하며,
              비즈니스 목표를 달성하는 마케팅 활동을 의미합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>디지털마케팅의 핵심 특성</h3>
              <ul>
                <li><strong>양방향 소통:</strong> 고객과 실시간 상호작용이 가능</li>
                <li><strong>정밀한 타겟팅:</strong> 인구통계, 관심사, 행동 기반 세밀한 타겟 설정</li>
                <li><strong>측정 가능성:</strong> 모든 활동의 데이터를 실시간으로 추적 및 분석</li>
                <li><strong>비용 효율성:</strong> 전통 매체 대비 낮은 비용으로 높은 효과 달성 가능</li>
                <li><strong>유연성:</strong> 실시간 캠페인 수정 및 최적화 가능</li>
              </ul>
            </div>

            {/* ─── 2. 전통 마케팅 vs 디지털마케팅 ─── */}
            <h2 data-aos="fade-up">2. 전통 마케팅 vs 디지털마케팅</h2>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구분</th><th>전통 마케팅</th><th>디지털마케팅</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>매체</strong></td>
                  <td>TV, 라디오, 신문, 잡지, 옥외광고</td>
                  <td>검색엔진, SNS, 이메일, 웹사이트, 앱</td>
                </tr>
                <tr>
                  <td><strong>소통 방식</strong></td>
                  <td>일방향 (기업 → 소비자)</td>
                  <td>양방향 (기업 ↔ 소비자)</td>
                </tr>
                <tr>
                  <td><strong>타겟팅</strong></td>
                  <td>대중적, 광범위한 타겟</td>
                  <td>정밀한 세그먼트 타겟팅</td>
                </tr>
                <tr>
                  <td><strong>비용</strong></td>
                  <td>높은 초기 비용 (TV 광고 등)</td>
                  <td>상대적으로 낮은 진입 비용</td>
                </tr>
                <tr>
                  <td><strong>측정</strong></td>
                  <td>효과 측정 어려움 (시청률, 구독자 수)</td>
                  <td>정확한 데이터 기반 측정 (클릭, 전환 등)</td>
                </tr>
                <tr>
                  <td><strong>수정</strong></td>
                  <td>캠페인 중간 수정 어려움</td>
                  <td>실시간 수정 및 A/B 테스트 가능</td>
                </tr>
                <tr>
                  <td><strong>도달 범위</strong></td>
                  <td>지역적 제한</td>
                  <td>글로벌 도달 가능</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 수명</strong></td>
                  <td>짧음 (방영 시간 한정)</td>
                  <td>길음 (검색 통해 지속 노출)</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 포인트</h3>
              <p>
                전통 마케팅과 디지털마케팅은 대체 관계가 아닌 <strong>보완 관계</strong>입니다.
                최적의 마케팅 전략은 두 가지를 통합하는 <strong>옴니채널(Omnichannel)</strong> 접근법입니다.
              </p>
            </div>

            {/* ─── 3. 디지털 마케팅 채널 개요 ─── */}
            <h2 data-aos="fade-up">3. 디지털 마케팅 채널 개요</h2>

            <p>
              디지털 마케팅은 다양한 채널을 활용하며, 각 채널의 특성과 목적에 맞게
              전략적으로 운영해야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>채널</th><th>설명</th><th>주요 도구/플랫폼</th><th>적합한 목표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>검색엔진 마케팅 (SEM)</strong></td>
                  <td>검색광고와 SEO를 통한 검색 노출</td>
                  <td>Google Ads, 네이버 키워드광고</td>
                  <td>트래픽 확보, 전환</td>
                </tr>
                <tr>
                  <td><strong>소셜미디어 마케팅</strong></td>
                  <td>SNS 플랫폼을 통한 콘텐츠 마케팅</td>
                  <td>인스타그램, 유튜브, 페이스북, 틱톡</td>
                  <td>인지도, 참여, 커뮤니티</td>
                </tr>
                <tr>
                  <td><strong>이메일 마케팅</strong></td>
                  <td>구독자 대상 개인화된 이메일 발송</td>
                  <td>Mailchimp, 스티비, SendGrid</td>
                  <td>리텐션, 전환, CRM</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 마케팅</strong></td>
                  <td>가치 있는 콘텐츠 제작 및 배포</td>
                  <td>블로그, 유튜브, 팟캐스트</td>
                  <td>신뢰 구축, SEO, 리드 생성</td>
                </tr>
                <tr>
                  <td><strong>디스플레이 광고</strong></td>
                  <td>배너, 동영상 광고 노출</td>
                  <td>Google Display Network, 카카오모먼트</td>
                  <td>브랜드 인지도, 리타겟팅</td>
                </tr>
                <tr>
                  <td><strong>인플루언서 마케팅</strong></td>
                  <td>영향력 있는 개인을 통한 브랜드 홍보</td>
                  <td>유튜버, 인스타그래머, 블로거</td>
                  <td>신뢰도, 인지도, 전환</td>
                </tr>
              </tbody>
            </table>

            <h3>3.1 Owned / Earned / Paid 미디어</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>미디어 유형</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Owned Media</strong></td>
                  <td>기업이 소유하고 통제하는 채널</td>
                  <td>자사 웹사이트, 블로그, 앱, 이메일 리스트</td>
                </tr>
                <tr>
                  <td><strong>Earned Media</strong></td>
                  <td>제3자에 의해 자발적으로 생성되는 노출</td>
                  <td>언론 보도, 구전, 리뷰, SNS 공유</td>
                </tr>
                <tr>
                  <td><strong>Paid Media</strong></td>
                  <td>비용을 지불하고 얻는 노출</td>
                  <td>검색광고, 디스플레이 광고, 스폰서 콘텐츠</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 4. 디지털 마케팅 전략 수립 ─── */}
            <h2 data-aos="fade-up">4. 디지털 마케팅 전략 수립</h2>

            <p>
              효과적인 디지털 마케팅 전략은 체계적인 프로세스를 통해 수립됩니다.
            </p>

            <h3>4.1 SOSTAC 프레임워크</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>영문</th><th>내용</th><th>핵심 질문</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>S</strong></td>
                  <td>Situation Analysis</td>
                  <td>현재 상황 분석 (시장, 경쟁, 자사)</td>
                  <td>지금 우리는 어디에 있는가?</td>
                </tr>
                <tr>
                  <td><strong>O</strong></td>
                  <td>Objectives</td>
                  <td>구체적인 마케팅 목표 설정</td>
                  <td>어디로 가고 싶은가?</td>
                </tr>
                <tr>
                  <td><strong>S</strong></td>
                  <td>Strategy</td>
                  <td>목표 달성을 위한 전략 방향</td>
                  <td>어떻게 갈 것인가?</td>
                </tr>
                <tr>
                  <td><strong>T</strong></td>
                  <td>Tactics</td>
                  <td>전략 실행을 위한 구체적 전술</td>
                  <td>무엇을 할 것인가?</td>
                </tr>
                <tr>
                  <td><strong>A</strong></td>
                  <td>Action</td>
                  <td>실행 계획, 일정, 역할 분담</td>
                  <td>누가, 언제, 어떻게?</td>
                </tr>
                <tr>
                  <td><strong>C</strong></td>
                  <td>Control</td>
                  <td>KPI 모니터링, 성과 분석, 최적화</td>
                  <td>성과를 어떻게 측정할 것인가?</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 디지털 마케팅 퍼널 (AARRR)</h3>

            <div className="callout-box" data-aos="fade-up">
              <h3>AARRR (해적 지표) 프레임워크</h3>
              <ul>
                <li><strong>Acquisition (획득):</strong> 사용자가 서비스를 처음 방문하는 단계 - SEO, 광고, SNS</li>
                <li><strong>Activation (활성화):</strong> 첫 방문에서 핵심 가치를 경험하는 단계 - 회원가입, 첫 구매</li>
                <li><strong>Retention (유지):</strong> 사용자가 반복 방문/이용하는 단계 - 이메일, 푸시 알림</li>
                <li><strong>Revenue (수익):</strong> 사용자가 비용을 지불하는 단계 - 결제, 구독</li>
                <li><strong>Referral (추천):</strong> 사용자가 다른 사람에게 추천하는 단계 - 공유, 리뷰</li>
              </ul>
            </div>

            {/* ─── 5. KPI와 성과 측정 ─── */}
            <h2 data-aos="fade-up">5. KPI와 성과 측정</h2>

            <p>
              디지털마케팅의 가장 큰 장점 중 하나는 <strong>정확한 성과 측정</strong>이 가능하다는 것입니다.
              효과적인 성과 관리를 위해 적절한 KPI(핵심성과지표)를 설정해야 합니다.
            </p>

            <h3>5.1 주요 디지털 마케팅 KPI</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>KPI</th><th>설명</th><th>계산 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CTR (클릭률)</strong></td>
                  <td>광고 노출 대비 클릭 비율</td>
                  <td>(클릭 수 / 노출 수) x 100</td>
                </tr>
                <tr>
                  <td><strong>CVR (전환율)</strong></td>
                  <td>방문자 대비 전환(구매/가입) 비율</td>
                  <td>(전환 수 / 방문자 수) x 100</td>
                </tr>
                <tr>
                  <td><strong>CPC (클릭당 비용)</strong></td>
                  <td>한 번의 클릭에 드는 비용</td>
                  <td>총 광고비 / 총 클릭 수</td>
                </tr>
                <tr>
                  <td><strong>CPA (전환당 비용)</strong></td>
                  <td>한 번의 전환에 드는 비용</td>
                  <td>총 광고비 / 총 전환 수</td>
                </tr>
                <tr>
                  <td><strong>ROAS (광고수익률)</strong></td>
                  <td>광고비 대비 발생 매출</td>
                  <td>(광고로 인한 매출 / 광고비) x 100</td>
                </tr>
                <tr>
                  <td><strong>CAC (고객획득비용)</strong></td>
                  <td>신규 고객 1명 획득에 드는 비용</td>
                  <td>총 마케팅 비용 / 신규 고객 수</td>
                </tr>
                <tr>
                  <td><strong>LTV (고객생애가치)</strong></td>
                  <td>한 고객이 생애 동안 창출하는 총 가치</td>
                  <td>평균 구매액 x 구매 빈도 x 고객 유지 기간</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 성과 측정 도구</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>용도</th><th>주요 기능</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google Analytics</strong></td>
                  <td>웹사이트 트래픽 분석</td>
                  <td>방문자 수, 유입 경로, 전환 추적, 사용자 행동</td>
                </tr>
                <tr>
                  <td><strong>Google Search Console</strong></td>
                  <td>검색 성과 분석</td>
                  <td>검색 노출, 클릭, 순위, 인덱싱 상태</td>
                </tr>
                <tr>
                  <td><strong>Meta Business Suite</strong></td>
                  <td>Meta 플랫폼 광고 분석</td>
                  <td>광고 성과, 오디언스 인사이트, 전환 추적</td>
                </tr>
                <tr>
                  <td><strong>네이버 서치어드바이저</strong></td>
                  <td>네이버 검색 성과</td>
                  <td>검색 노출, 클릭, 사이트 진단</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>SMART 목표 설정</h3>
              <p>
                KPI를 설정할 때는 <strong>SMART</strong> 원칙을 따르세요:
              </p>
              <ul>
                <li><strong>Specific (구체적):</strong> "웹사이트 트래픽 증가"가 아닌 "월간 UV 30% 증가"</li>
                <li><strong>Measurable (측정 가능):</strong> 정량적으로 측정할 수 있는 지표</li>
                <li><strong>Achievable (달성 가능):</strong> 현실적으로 달성 가능한 목표</li>
                <li><strong>Relevant (관련성):</strong> 비즈니스 목표와 연결된 지표</li>
                <li><strong>Time-bound (기한):</strong> 달성 기한이 명확한 목표</li>
              </ul>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>디지털마케팅</strong>은 디지털 채널을 활용한 양방향, 데이터 기반 마케팅이다.</li>
                <li><strong>전통 마케팅</strong>과 디지털마케팅은 대체가 아닌 보완 관계이다.</li>
                <li>디지털 채널은 <strong>Owned/Earned/Paid</strong> 미디어로 분류할 수 있다.</li>
                <li>전략 수립에는 <strong>SOSTAC</strong> 프레임워크와 <strong>AARRR</strong> 퍼널을 활용한다.</li>
                <li>KPI(CTR, CVR, ROAS 등)를 <strong>SMART</strong> 원칙에 따라 설정하고 측정한다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week9" className="lesson-nav-btn prev">
                ← 9주차: 촉진 전략
              </Link>
              <Link to="/lessons/week11" className="lesson-nav-btn next">
                11주차: 콘텐츠 & SNS 마케팅 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek10;
