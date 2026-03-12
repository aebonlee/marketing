import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalPerformance = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="퍼포먼스 마케팅"
        description="데이터 기반 성과 최적화 마케팅 - ROAS, ROI, 전환 퍼널, 리타겟팅, 미디어 믹스, Google Analytics"
        path="/digital/performance"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>퍼포먼스 마케팅</h1>
          <p>데이터 기반으로 성과를 측정하고 최적화하는 퍼포먼스 마케팅을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. 퍼포먼스 마케팅 개념 ─── */}
            <h2 data-aos="fade-up">1. 퍼포먼스 마케팅 개념</h2>

            <p data-aos="fade-up">
              <strong>퍼포먼스 마케팅</strong>은 클릭, 전환, 매출 등 구체적이고 측정 가능한 성과 지표를
              기반으로 마케팅 활동을 운영하고 최적화하는 접근법입니다.
              모든 마케팅 비용을 성과와 직접 연결하여 효율성을 극대화합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>퍼포먼스 마케팅의 핵심 원칙</h3>
              <ul>
                <li><strong>데이터 기반 의사결정</strong>: 직감이 아닌 데이터에 기반하여 전략을 수립합니다.</li>
                <li><strong>성과 측정</strong>: 모든 활동의 성과를 정량적으로 측정합니다.</li>
                <li><strong>지속적 최적화</strong>: 테스트와 분석을 통해 끊임없이 성과를 개선합니다.</li>
                <li><strong>ROI 중심</strong>: 투자 대비 수익을 극대화하는 것이 궁극적 목표입니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구분</th><th>퍼포먼스 마케팅</th><th>브랜드 마케팅</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>목표</strong></td>
                  <td>전환, 매출 등 직접 성과</td>
                  <td>인지도, 선호도, 이미지</td>
                </tr>
                <tr>
                  <td><strong>측정</strong></td>
                  <td>정량적 (CPA, ROAS, 전환율)</td>
                  <td>정성적 (인지도 조사, 브랜드 리프트)</td>
                </tr>
                <tr>
                  <td><strong>시간 프레임</strong></td>
                  <td>단기~중기</td>
                  <td>중기~장기</td>
                </tr>
                <tr>
                  <td><strong>최적화 주기</strong></td>
                  <td>실시간~일간</td>
                  <td>월간~분기</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. ROAS와 ROI ─── */}
            <h2 data-aos="fade-up">2. ROAS와 ROI</h2>

            <p data-aos="fade-up">
              퍼포먼스 마케팅에서 가장 중요한 수익성 지표인 ROAS와 ROI를 이해하고,
              캠페인의 효율성을 정확하게 평가할 수 있어야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>지표</th><th>계산 공식</th><th>의미</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ROAS</strong></td>
                  <td>광고 매출 / 광고 비용 x 100%</td>
                  <td>광고비 대비 매출 비율</td>
                  <td>광고비 100만원으로 500만원 매출 = ROAS 500%</td>
                </tr>
                <tr>
                  <td><strong>ROI</strong></td>
                  <td>(수익 - 비용) / 비용 x 100%</td>
                  <td>총 투자 대비 순이익 비율</td>
                  <td>비용 100만원, 순이익 200만원 = ROI 200%</td>
                </tr>
                <tr>
                  <td><strong>CPA</strong></td>
                  <td>총 광고비 / 전환 수</td>
                  <td>전환 1건당 비용</td>
                  <td>광고비 100만원, 전환 50건 = CPA 2만원</td>
                </tr>
                <tr>
                  <td><strong>CPC</strong></td>
                  <td>총 광고비 / 클릭 수</td>
                  <td>클릭 1회당 비용</td>
                  <td>광고비 100만원, 클릭 2,000건 = CPC 500원</td>
                </tr>
                <tr>
                  <td><strong>CPM</strong></td>
                  <td>총 광고비 / 노출 수 x 1,000</td>
                  <td>1,000회 노출당 비용</td>
                  <td>광고비 100만원, 노출 50만회 = CPM 2,000원</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>ROAS vs ROI 비교</h3>
              <p>
                <strong>ROAS</strong>는 광고비 대비 매출만을 측정하여 광고 효율을 평가하는 반면,
                <strong> ROI</strong>는 모든 비용(인건비, 제작비, 운영비 포함)을 고려한 순수익을 평가합니다.
                실무에서는 ROAS로 광고 효율을 관리하고, ROI로 전체 사업 수익성을 판단합니다.
              </p>
            </div>

            {/* ─── 3. 전환 퍼널 분석 ─── */}
            <h2 data-aos="fade-up">3. 전환 퍼널 분석</h2>

            <p data-aos="fade-up">
              전환 퍼널은 사용자가 최초 접점부터 최종 전환까지 거치는 단계를 시각화한 것입니다.
              각 단계의 이탈률을 분석하여 병목 지점을 찾고 개선합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>퍼널 단계</th><th>설명</th><th>핵심 지표</th><th>최적화 포인트</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>노출 (Impression)</strong></td>
                  <td>광고/콘텐츠가 사용자에게 보임</td>
                  <td>노출수, 도달수</td>
                  <td>타겟팅 정확도, 크리에이티브 품질</td>
                </tr>
                <tr>
                  <td><strong>클릭 (Click)</strong></td>
                  <td>광고/링크를 클릭하여 유입</td>
                  <td>CTR, 클릭수</td>
                  <td>광고 문구, CTA, 타겟팅 개선</td>
                </tr>
                <tr>
                  <td><strong>참여 (Engagement)</strong></td>
                  <td>랜딩 페이지에서 정보 탐색</td>
                  <td>체류 시간, 이탈률, 페이지뷰</td>
                  <td>랜딩 페이지 UX, 콘텐츠 관련성</td>
                </tr>
                <tr>
                  <td><strong>전환 (Conversion)</strong></td>
                  <td>구매, 가입 등 목표 행동 완료</td>
                  <td>전환율, 전환수</td>
                  <td>전환 프로세스 간소화, 신뢰 요소</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>마이크로 전환 추적</h3>
              <p>
                최종 전환(매크로 전환) 외에도 중간 단계의 작은 행동(마이크로 전환)을 추적하면
                퍼널 최적화에 큰 도움이 됩니다. 예를 들어 제품 페이지 조회, 장바구니 담기,
                회원가입, 뉴스레터 구독 등이 마이크로 전환에 해당합니다.
              </p>
            </div>

            {/* ─── 4. 리타겟팅 ─── */}
            <h2 data-aos="fade-up">4. 리타겟팅</h2>

            <p data-aos="fade-up">
              <strong>리타겟팅(Retargeting)</strong>은 이전에 웹사이트를 방문했거나 특정 행동을 취한
              사용자에게 다시 광고를 노출하는 전략으로, 전환율 향상에 매우 효과적입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>리타겟팅 유형</th><th>대상</th><th>전략</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사이트 방문자</strong></td>
                  <td>웹사이트 방문 후 이탈한 사용자</td>
                  <td>브랜드 리마인드, 특별 혜택 제공</td>
                </tr>
                <tr>
                  <td><strong>장바구니 이탈</strong></td>
                  <td>상품을 담았지만 구매하지 않은 사용자</td>
                  <td>할인 쿠폰, 무료 배송, 리마인드</td>
                </tr>
                <tr>
                  <td><strong>제품 조회자</strong></td>
                  <td>특정 제품 페이지를 본 사용자</td>
                  <td>해당 제품 또는 유사 제품 광고</td>
                </tr>
                <tr>
                  <td><strong>기존 고객</strong></td>
                  <td>이미 구매한 고객</td>
                  <td>업셀/크로스셀, 신제품 안내</td>
                </tr>
                <tr>
                  <td><strong>앱 사용자</strong></td>
                  <td>앱 설치 후 미사용 또는 이탈 사용자</td>
                  <td>앱 재방문 유도, 기능 안내</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>리타겟팅 실행 팁</h3>
              <ul>
                <li><strong>빈도 제한(Frequency Cap)</strong>: 광고 피로도를 방지하기 위해 노출 빈도를 제한합니다.</li>
                <li><strong>쿠키 기간 설정</strong>: 비즈니스 특성에 맞는 리타겟팅 기간을 설정합니다.</li>
                <li><strong>시퀀셜 메시징</strong>: 단계별로 다른 메시지를 전달하여 설득력을 높입니다.</li>
                <li><strong>제외 타겟 설정</strong>: 이미 전환한 사용자는 해당 캠페인에서 제외합니다.</li>
              </ul>
            </div>

            {/* ─── 5. 미디어 믹스 최적화 ─── */}
            <h2 data-aos="fade-up">5. 미디어 믹스 최적화</h2>

            <p data-aos="fade-up">
              미디어 믹스 최적화는 다양한 광고 채널에 예산을 효율적으로 배분하여
              전체 마케팅 성과를 극대화하는 전략입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>채널</th><th>강점</th><th>적합한 목표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google 검색광고</strong></td>
                  <td>높은 구매 의도, 정확한 타겟팅</td>
                  <td>전환, 리드 생성</td>
                </tr>
                <tr>
                  <td><strong>Meta 광고</strong></td>
                  <td>정교한 타겟팅, 비주얼 광고</td>
                  <td>인지도, 참여, 전환</td>
                </tr>
                <tr>
                  <td><strong>네이버 검색광고</strong></td>
                  <td>국내 검색 점유율 1위</td>
                  <td>국내 시장 전환</td>
                </tr>
                <tr>
                  <td><strong>카카오 광고</strong></td>
                  <td>국내 메신저 플랫폼 1위</td>
                  <td>인지도, 지역 타겟팅</td>
                </tr>
                <tr>
                  <td><strong>유튜브 광고</strong></td>
                  <td>높은 도달률, 영상 기반</td>
                  <td>브랜드 인지도, 교육</td>
                </tr>
                <tr>
                  <td><strong>디스플레이/프로그래매틱</strong></td>
                  <td>넓은 도달 범위, 리타겟팅</td>
                  <td>인지도, 리타겟팅</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>어트리뷰션 모델</h3>
              <ul>
                <li><strong>라스트 클릭</strong>: 마지막 접점에 100% 기여 부여 (가장 단순)</li>
                <li><strong>퍼스트 클릭</strong>: 최초 접점에 100% 기여 부여</li>
                <li><strong>선형 모델</strong>: 모든 접점에 동일한 기여 부여</li>
                <li><strong>시간 감소</strong>: 전환에 가까운 접점에 높은 기여 부여</li>
                <li><strong>데이터 기반</strong>: 머신러닝으로 실제 기여도를 분석 (권장)</li>
              </ul>
            </div>

            {/* ─── 6. Google Analytics 실습 ─── */}
            <h2 data-aos="fade-up">6. Google Analytics 실습</h2>

            <p data-aos="fade-up">
              Google Analytics 4(GA4)는 웹사이트와 앱의 사용자 행동을 분석하는 핵심 도구입니다.
              퍼포먼스 마케팅에서 데이터 분석과 의사결정의 기반이 됩니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>보고서</th><th>분석 내용</th><th>활용 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>획득 보고서</strong></td>
                  <td>유입 채널, 소스/매체별 트래픽</td>
                  <td>채널별 성과 비교, 예산 배분 의사결정</td>
                </tr>
                <tr>
                  <td><strong>참여 보고서</strong></td>
                  <td>이벤트, 페이지뷰, 체류 시간</td>
                  <td>콘텐츠 성과 분석, UX 개선 포인트 발굴</td>
                </tr>
                <tr>
                  <td><strong>전환 보고서</strong></td>
                  <td>목표 달성, 전자상거래 데이터</td>
                  <td>전환 경로 분석, 퍼널 병목 파악</td>
                </tr>
                <tr>
                  <td><strong>탐색 보고서</strong></td>
                  <td>맞춤 분석, 세그먼트 비교</td>
                  <td>심층 분석, 가설 검증</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>GA4 필수 설정</h3>
              <ul>
                <li><strong>전환 이벤트 설정</strong>: 구매, 가입 등 핵심 이벤트를 전환으로 마킹합니다.</li>
                <li><strong>UTM 파라미터</strong>: 모든 캠페인 URL에 UTM 태그를 붙여 유입 경로를 추적합니다.</li>
                <li><strong>Google Ads 연동</strong>: 광고 데이터와 사이트 데이터를 통합 분석합니다.</li>
                <li><strong>맞춤 대시보드</strong>: 핵심 KPI를 한눈에 볼 수 있는 대시보드를 구성합니다.</li>
              </ul>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>퍼포먼스 마케팅</strong>은 측정 가능한 성과 지표 기반의 데이터 중심 마케팅이다.</li>
                <li><strong>ROAS</strong>는 광고 효율을, <strong>ROI</strong>는 전체 수익성을 평가하는 핵심 지표이다.</li>
                <li><strong>전환 퍼널</strong> 각 단계의 이탈률을 분석하여 병목 지점을 개선한다.</li>
                <li><strong>리타겟팅</strong>은 이탈 사용자를 재유입시켜 전환율을 높이는 핵심 전략이다.</li>
                <li><strong>미디어 믹스</strong>와 어트리뷰션 모델로 채널별 예산을 최적 배분한다.</li>
                <li><strong>Google Analytics</strong>는 데이터 분석과 의사결정의 필수 도구이다.</li>
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

export default DigitalPerformance;
