import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek9 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="9주차: 촉진 전략"
        description="촉진 믹스, 광고 전략, PR과 홍보, 판매촉진 기법, IMC(통합 마케팅 커뮤니케이션)를 학습합니다."
        path="/lessons/week9"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>9주차: 촉진 전략</h1>
          <p>광고, PR, 판매촉진, 인적판매, 직접마케팅 등 촉진 믹스와 IMC 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>촉진 믹스의 5가지 구성요소를 설명할 수 있다.</li>
                <li>광고 전략의 수립 과정과 유형을 이해한다.</li>
                <li>PR과 홍보의 차이점과 활용 방법을 구분할 수 있다.</li>
                <li>주요 판매촉진 기법을 사례와 함께 설명할 수 있다.</li>
                <li>IMC(통합 마케팅 커뮤니케이션)의 개념과 중요성을 이해한다.</li>
              </ul>
            </div>

            {/* ─── 1. 촉진 믹스 ─── */}
            <h2 data-aos="fade-up">1. 촉진 믹스 (Promotion Mix)</h2>

            <p>
              <strong>촉진(Promotion)</strong>은 마케팅 믹스 4P 중 하나로, 기업이 목표 고객에게
              제품이나 서비스의 가치를 알리고 구매를 유도하는 모든 커뮤니케이션 활동을 말합니다.
              촉진 믹스는 다음 5가지 요소로 구성됩니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>촉진 도구</th><th>설명</th><th>특징</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>광고 (Advertising)</strong></td>
                  <td>유료 매체를 통한 비인적 커뮤니케이션</td>
                  <td>대규모 도달, 반복 노출, 브랜드 인지도 구축</td>
                </tr>
                <tr>
                  <td><strong>PR (Public Relations)</strong></td>
                  <td>기업 이미지 및 관계 관리 활동</td>
                  <td>신뢰도 높음, 비용 효율적, 통제 어려움</td>
                </tr>
                <tr>
                  <td><strong>판매촉진 (Sales Promotion)</strong></td>
                  <td>단기적 구매 자극을 위한 인센티브</td>
                  <td>즉각적 효과, 단기적, 할인/쿠폰/경품 등</td>
                </tr>
                <tr>
                  <td><strong>인적판매 (Personal Selling)</strong></td>
                  <td>영업사원의 직접적 대면 판매 활동</td>
                  <td>쌍방향 소통, 관계 구축, 높은 비용</td>
                </tr>
                <tr>
                  <td><strong>직접마케팅 (Direct Marketing)</strong></td>
                  <td>특정 고객과의 직접 커뮤니케이션</td>
                  <td>개인화, 즉각적 반응 측정, 이메일/DM/텔레마케팅</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>촉진 믹스 선택 기준</h3>
              <ul>
                <li><strong>제품 유형:</strong> B2B는 인적판매 중심, B2C는 광고 중심</li>
                <li><strong>제품 수명주기 단계:</strong> 도입기(광고), 성장기(광고+PR), 성숙기(판매촉진), 쇠퇴기(판매촉진 축소)</li>
                <li><strong>푸시 vs 풀 전략:</strong> 푸시(유통채널 대상 인적판매), 풀(소비자 대상 광고)</li>
              </ul>
            </div>

            {/* ─── 2. 광고 전략 ─── */}
            <h2 data-aos="fade-up">2. 광고 전략</h2>

            <p>
              <strong>광고(Advertising)</strong>는 기업이 비용을 지불하고 매체를 통해 제품이나
              서비스를 알리는 비인적 촉진 수단입니다. 효과적인 광고 전략 수립을 위해 다음 프로세스를 따릅니다.
            </p>

            <h3>2.1 광고 전략 수립 프로세스</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>내용</th><th>핵심 질문</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 목표 설정</strong></td>
                  <td>인지, 태도 변화, 행동 유도 등 광고 목표 수립</td>
                  <td>왜 광고하는가?</td>
                </tr>
                <tr>
                  <td><strong>2. 예산 결정</strong></td>
                  <td>매출비율법, 경쟁자 대등법, 목표과업법 등</td>
                  <td>얼마를 투자할 것인가?</td>
                </tr>
                <tr>
                  <td><strong>3. 메시지 개발</strong></td>
                  <td>크리에이티브 전략, 소구 방법 결정</td>
                  <td>무엇을 전달할 것인가?</td>
                </tr>
                <tr>
                  <td><strong>4. 매체 선택</strong></td>
                  <td>TV, 라디오, 인쇄, 디지털 등 매체 믹스 결정</td>
                  <td>어디에 노출할 것인가?</td>
                </tr>
                <tr>
                  <td><strong>5. 효과 측정</strong></td>
                  <td>도달률, 빈도, GRP, 광고 회상률 등 평가</td>
                  <td>효과가 있었는가?</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 광고 소구 유형</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>소구 유형</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>이성적 소구</strong></td>
                  <td>제품의 기능, 품질, 가격 등 논리적 정보 제공</td>
                  <td>자동차 연비 비교 광고</td>
                </tr>
                <tr>
                  <td><strong>감성적 소구</strong></td>
                  <td>감정, 공감, 스토리텔링으로 소비자 마음을 움직임</td>
                  <td>보험회사 가족 사랑 광고</td>
                </tr>
                <tr>
                  <td><strong>공포 소구</strong></td>
                  <td>위협이나 위험을 강조하여 행동 변화 유도</td>
                  <td>금연 캠페인, 보안 소프트웨어</td>
                </tr>
                <tr>
                  <td><strong>유머 소구</strong></td>
                  <td>재미와 유머로 호감도와 기억률 향상</td>
                  <td>배달앱, 식음료 광고</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. PR과 홍보 ─── */}
            <h2 data-aos="fade-up">3. PR과 홍보</h2>

            <p>
              <strong>PR(Public Relations)</strong>은 기업이 다양한 공중(Public)과의 관계를 관리하여
              호의적인 기업 이미지를 구축하고 유지하는 활동입니다.
            </p>

            <h3>3.1 PR vs 광고</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구분</th><th>PR</th><th>광고</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>비용</strong></td>
                  <td>매체 비용 없음 (Earned Media)</td>
                  <td>매체 비용 지불 (Paid Media)</td>
                </tr>
                <tr>
                  <td><strong>통제력</strong></td>
                  <td>메시지 통제 어려움</td>
                  <td>메시지 완전 통제</td>
                </tr>
                <tr>
                  <td><strong>신뢰도</strong></td>
                  <td>제3자를 통해 전달되어 신뢰도 높음</td>
                  <td>기업이 직접 전달하여 상대적으로 낮음</td>
                </tr>
                <tr>
                  <td><strong>목표</strong></td>
                  <td>기업 이미지, 관계 관리</td>
                  <td>제품/서비스 판매 촉진</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 주요 PR 도구</h3>

            <ul>
              <li data-aos="fade-up"><strong>보도자료(Press Release):</strong> 언론에 뉴스 형태로 기업 소식을 전달</li>
              <li data-aos="fade-up"><strong>기자회견/미디어 이벤트:</strong> 신제품 런칭, 기업 발표 등을 위한 행사</li>
              <li data-aos="fade-up"><strong>스폰서십:</strong> 스포츠, 문화 행사 등을 후원하여 브랜드 노출</li>
              <li data-aos="fade-up"><strong>CSR(사회공헌활동):</strong> 사회적 가치 창출을 통한 기업 이미지 제고</li>
              <li data-aos="fade-up"><strong>위기관리(Crisis Management):</strong> 부정적 이슈 발생 시 대응 전략</li>
            </ul>

            <div className="callout-box" data-aos="fade-up">
              <h3>PR 사례: 삼성전자 갤럭시 언팩</h3>
              <p>
                삼성전자는 신제품 발표 이벤트인 <strong>Galaxy Unpacked</strong>를 통해 글로벌 미디어와
                인플루언서를 초청하고, 실시간 스트리밍으로 전 세계에 동시 노출하여 강력한 PR 효과를 얻고 있습니다.
                이는 광고비 없이 수십억 원 이상의 미디어 노출 효과(Media Value)를 창출합니다.
              </p>
            </div>

            {/* ─── 4. 판매촉진 기법 ─── */}
            <h2 data-aos="fade-up">4. 판매촉진 기법</h2>

            <p>
              <strong>판매촉진(Sales Promotion)</strong>은 소비자 또는 유통업체에게 단기적인 구매 인센티브를
              제공하여 즉각적인 매출 증대를 목표로 하는 촉진 활동입니다.
            </p>

            <h3>4.1 소비자 대상 판매촉진</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>기법</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>쿠폰 (Coupon)</strong></td>
                  <td>할인 혜택을 제공하는 증서</td>
                  <td>카카오톡 쿠폰, 앱 내 할인 쿠폰</td>
                </tr>
                <tr>
                  <td><strong>샘플링 (Sampling)</strong></td>
                  <td>무료 샘플 제공으로 체험 기회 부여</td>
                  <td>화장품 샘플, 식품 시식회</td>
                </tr>
                <tr>
                  <td><strong>리베이트 (Rebate)</strong></td>
                  <td>구매 후 일정 금액 환불</td>
                  <td>가전제품 캐시백 이벤트</td>
                </tr>
                <tr>
                  <td><strong>경품/추첨 (Contest/Sweepstakes)</strong></td>
                  <td>참여자 중 상품 제공</td>
                  <td>SNS 이벤트, 래플 추첨</td>
                </tr>
                <tr>
                  <td><strong>포인트/마일리지</strong></td>
                  <td>구매 시 포인트 적립 후 혜택 제공</td>
                  <td>CJ ONE 포인트, 항공 마일리지</td>
                </tr>
                <tr>
                  <td><strong>묶음판매 (Bundle)</strong></td>
                  <td>여러 제품을 함께 할인된 가격에 판매</td>
                  <td>1+1 행사, 세트 상품</td>
                </tr>
              </tbody>
            </table>

            <h3>4.2 유통업체 대상 판매촉진 (Trade Promotion)</h3>

            <ul>
              <li data-aos="fade-up"><strong>거래 할인(Trade Discount):</strong> 대량 구매 시 가격 할인</li>
              <li data-aos="fade-up"><strong>POP 디스플레이:</strong> 매장 내 제품 진열대 및 홍보물 제공</li>
              <li data-aos="fade-up"><strong>판매 콘테스트:</strong> 판매 목표 달성 시 리워드 제공</li>
              <li data-aos="fade-up"><strong>협동 광고(Co-op Advertising):</strong> 제조업체와 유통업체가 광고비 공동 부담</li>
            </ul>

            {/* ─── 5. IMC(통합 마케팅 커뮤니케이션) ─── */}
            <h2 data-aos="fade-up">5. IMC (통합 마케팅 커뮤니케이션)</h2>

            <p>
              <strong>IMC(Integrated Marketing Communications)</strong>는 기업의 모든 커뮤니케이션 도구와
              채널을 전략적으로 통합하여, 일관되고 강력한 메시지를 전달하는 접근 방식입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>IMC의 핵심 원칙</h3>
              <p>
                <em>"고객이 접하는 모든 접점(Touchpoint)에서 하나의 목소리(One Voice)로 소통하라."</em>
              </p>
            </div>

            <h3>5.1 IMC가 중요한 이유</h3>

            <ul>
              <li data-aos="fade-up"><strong>미디어 파편화:</strong> TV, 모바일, SNS, 옥외광고 등 채널이 다양해져 일관된 메시지 전달이 어려움</li>
              <li data-aos="fade-up"><strong>소비자 접점 증가:</strong> 온/오프라인 다양한 접점에서 브랜드를 경험</li>
              <li data-aos="fade-up"><strong>시너지 효과:</strong> 개별 도구의 단순 합 이상의 효과를 창출</li>
              <li data-aos="fade-up"><strong>비용 효율성:</strong> 중복 투자를 줄이고 통합적 예산 운용이 가능</li>
            </ul>

            <h3>5.2 IMC 프레임워크</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>내용</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 목표 고객 파악</strong></td>
                  <td>타깃 오디언스 분석 및 인사이트 도출</td>
                  <td>20-30대 여성, 건강에 관심 많은 소비자</td>
                </tr>
                <tr>
                  <td><strong>2. 커뮤니케이션 목표 설정</strong></td>
                  <td>인지도, 호감도, 구매 의향 등 단계별 목표</td>
                  <td>브랜드 인지도 60% 달성</td>
                </tr>
                <tr>
                  <td><strong>3. 메시지 전략 수립</strong></td>
                  <td>일관된 핵심 메시지와 크리에이티브 컨셉</td>
                  <td>"건강한 아름다움" 통합 메시지</td>
                </tr>
                <tr>
                  <td><strong>4. 채널 믹스 결정</strong></td>
                  <td>각 채널의 역할과 예산 배분</td>
                  <td>TV(인지) + SNS(참여) + 매장(구매)</td>
                </tr>
                <tr>
                  <td><strong>5. 실행 및 통합 관리</strong></td>
                  <td>일정, 예산, 메시지 일관성 관리</td>
                  <td>캠페인 타임라인 및 KPI 모니터링</td>
                </tr>
                <tr>
                  <td><strong>6. 성과 측정 및 피드백</strong></td>
                  <td>통합 ROI 분석과 개선점 도출</td>
                  <td>채널별 기여도 분석, 매출 상관관계</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>IMC 사례: 나이키 "Just Do It"</h3>
              <p>
                나이키는 "Just Do It"이라는 하나의 핵심 메시지를 TV 광고, SNS, 앱, 매장, 이벤트,
                스포츠 스폰서십 등 모든 접점에서 일관되게 전달합니다. 각 채널의 특성에 맞게 콘텐츠는
                다르지만, 핵심 메시지와 브랜드 톤앤매너는 동일하게 유지하여 강력한 브랜드 이미지를 구축했습니다.
              </p>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>촉진 믹스</strong>는 광고, PR, 판매촉진, 인적판매, 직접마케팅의 5가지 도구로 구성된다.</li>
                <li><strong>광고 전략</strong>은 목표 설정 → 예산 → 메시지 → 매체 → 효과 측정 순으로 수립한다.</li>
                <li><strong>PR</strong>은 광고보다 신뢰도가 높지만 메시지 통제가 어렵다.</li>
                <li><strong>판매촉진</strong>은 단기적 매출 증대에 효과적이며, 소비자/유통업체 대상으로 구분된다.</li>
                <li><strong>IMC</strong>는 모든 커뮤니케이션 도구를 통합하여 일관된 메시지를 전달하는 전략이다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week8" className="lesson-nav-btn prev">
                ← 8주차: 유통 전략
              </Link>
              <Link to="/lessons/week10" className="lesson-nav-btn next">
                10주차: 디지털마케팅 기초 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek9;
