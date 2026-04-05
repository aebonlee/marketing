import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalSEM = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="SEM (검색광고)"
        description="Google Ads와 네이버 검색광고 운영 실전 - 키워드 매칭, 입찰 전략, 품질점수, 캠페인 최적화"
        path="/digital/sem"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>SEM (검색광고)</h1>
          <p>Google Ads, 네이버 검색광고 등 유료 검색광고의 실전 운영 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. SEM의 개념 ─── */}
            <h2 data-aos="fade-up">1. SEM의 개념</h2>

            <p data-aos="fade-up">
              <strong>SEM(Search Engine Marketing, 검색엔진마케팅)</strong>은 검색엔진의 유료 광고 플랫폼을
              활용하여 검색 결과 페이지 상단에 광고를 노출하는 마케팅 기법입니다.
              PPC(Pay-Per-Click) 방식으로 사용자가 광고를 클릭할 때만 비용이 발생합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>SEM의 핵심 장점</h3>
              <ul>
                <li><strong>즉각적인 노출</strong>: 광고 세팅 즉시 검색 결과에 노출됩니다.</li>
                <li><strong>정확한 타겟팅</strong>: 검색 키워드 기반으로 구매 의도가 높은 사용자에게 도달합니다.</li>
                <li><strong>측정 가능성</strong>: 클릭수, 전환율, ROAS 등을 정확하게 측정할 수 있습니다.</li>
                <li><strong>예산 통제</strong>: 일일 예산, 입찰가 등을 세밀하게 조절할 수 있습니다.</li>
              </ul>
            </div>

            {/* ─── 2. Google Ads 구조 ─── */}
            <h2 data-aos="fade-up">2. Google Ads 구조</h2>

            <p data-aos="fade-up">
              Google Ads는 계층적 구조로 되어 있어, 체계적으로 광고를 관리할 수 있습니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>계층</th><th>구성 요소</th><th>설정 항목</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>계정 (Account)</strong></td>
                  <td>최상위 관리 단위</td>
                  <td>결제 정보, 사용자 권한</td>
                </tr>
                <tr>
                  <td><strong>캠페인 (Campaign)</strong></td>
                  <td>광고 목표별 그룹</td>
                  <td>예산, 타겟 지역, 네트워크, 입찰 전략</td>
                </tr>
                <tr>
                  <td><strong>광고그룹 (Ad Group)</strong></td>
                  <td>키워드 및 광고 묶음</td>
                  <td>키워드, 입찰가, 타겟 URL</td>
                </tr>
                <tr>
                  <td><strong>광고 (Ad)</strong></td>
                  <td>실제 노출되는 광고 소재</td>
                  <td>제목, 설명, 표시 URL, 확장</td>
                </tr>
                <tr>
                  <td><strong>키워드 (Keyword)</strong></td>
                  <td>검색어 타겟팅 기준</td>
                  <td>키워드, 매칭 유형, 제외 키워드</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 키워드 매칭 유형 ─── */}
            <h2 data-aos="fade-up">3. 키워드 매칭 유형</h2>

            <p data-aos="fade-up">
              키워드 매칭 유형은 사용자의 검색어와 광고 키워드가 얼마나 일치해야
              광고가 노출되는지를 결정합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>매칭 유형</th><th>표기법</th><th>설명</th><th>예시 (키워드: 마케팅 강의)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>확장 검색 (Broad Match)</strong></td>
                  <td>마케팅 강의</td>
                  <td>관련 검색어까지 폭넓게 매칭</td>
                  <td>"온라인 마케팅 수업", "디지털 마케팅 교육"</td>
                </tr>
                <tr>
                  <td><strong>구문 검색 (Phrase Match)</strong></td>
                  <td>"마케팅 강의"</td>
                  <td>키워드 구문이 포함된 검색어에 매칭</td>
                  <td>"서울 마케팅 강의 추천", "마케팅 강의 온라인"</td>
                </tr>
                <tr>
                  <td><strong>정확히 일치 (Exact Match)</strong></td>
                  <td>[마케팅 강의]</td>
                  <td>키워드와 의미가 동일한 검색어에만 매칭</td>
                  <td>"마케팅 강의", "마케팅 수업"</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>제외 키워드 (Negative Keywords)</h3>
              <p>
                불필요한 검색어에 광고가 노출되는 것을 방지합니다.
                예를 들어 "무료"를 제외 키워드로 설정하면
                "마케팅 강의 무료"라는 검색에는 광고가 노출되지 않습니다.
              </p>
            </div>

            {/* ─── 4. 광고 작성 전략 ─── */}
            <h2 data-aos="fade-up">4. 광고 작성 전략</h2>

            <p data-aos="fade-up">
              효과적인 검색 광고 문구는 사용자의 검색 의도에 정확히 부합하면서,
              클릭을 유도하는 매력적인 메시지를 전달해야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>작성 가이드</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>제목 (Headline)</strong></td>
                  <td>핵심 키워드 포함, 최대 30자, 3개까지 작성 가능</td>
                </tr>
                <tr>
                  <td><strong>설명 (Description)</strong></td>
                  <td>USP(독자적 강점) 강조, CTA 포함, 최대 90자</td>
                </tr>
                <tr>
                  <td><strong>표시 URL</strong></td>
                  <td>키워드가 포함된 깔끔한 경로 표시</td>
                </tr>
                <tr>
                  <td><strong>광고 확장</strong></td>
                  <td>사이트링크, 콜아웃, 전화번호, 위치 정보 등 추가</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>반응형 검색 광고 (RSA) 팁</h3>
              <ul>
                <li>제목을 최소 8~10개 이상 작성하여 다양한 조합을 테스트합니다.</li>
                <li>각 제목은 독립적으로 의미가 통하도록 작성합니다.</li>
                <li>키워드 삽입 기능을 활용하여 검색어 관련성을 높입니다.</li>
                <li>숫자, 특수문자, 할인율 등으로 시선을 사로잡습니다.</li>
              </ul>
            </div>

            {/* ─── 5. 입찰 전략 ─── */}
            <h2 data-aos="fade-up">5. 입찰 전략</h2>

            <p data-aos="fade-up">
              입찰 전략은 광고 비용과 성과를 직접적으로 결정하는 핵심 요소입니다.
              캠페인 목표에 맞는 적절한 입찰 전략을 선택해야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>입찰 전략</th><th>목표</th><th>적합한 상황</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>수동 CPC</strong></td>
                  <td>직접 입찰가 설정</td>
                  <td>세밀한 비용 관리가 필요한 초기 단계</td>
                </tr>
                <tr>
                  <td><strong>향상된 CPC</strong></td>
                  <td>전환 가능성에 따라 자동 조절</td>
                  <td>전환 데이터가 어느 정도 확보된 단계</td>
                </tr>
                <tr>
                  <td><strong>타겟 CPA</strong></td>
                  <td>목표 전환당 비용 달성</td>
                  <td>전환 최적화가 목표인 경우</td>
                </tr>
                <tr>
                  <td><strong>타겟 ROAS</strong></td>
                  <td>목표 광고 수익률 달성</td>
                  <td>이커머스 등 매출 최적화가 목표인 경우</td>
                </tr>
                <tr>
                  <td><strong>클릭수 최대화</strong></td>
                  <td>예산 내 최대 클릭 확보</td>
                  <td>트래픽 확보가 우선인 초기 단계</td>
                </tr>
                <tr>
                  <td><strong>전환수 최대화</strong></td>
                  <td>예산 내 최대 전환 확보</td>
                  <td>충분한 전환 데이터가 있는 경우</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 6. 품질점수 ─── */}
            <h2 data-aos="fade-up">6. 품질점수 (Quality Score)</h2>

            <p data-aos="fade-up">
              품질점수는 Google이 광고의 품질과 관련성을 1~10점으로 평가한 지표입니다.
              높은 품질점수는 낮은 CPC와 높은 광고 순위로 이어집니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구성 요소</th><th>비중</th><th>개선 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>예상 클릭률 (CTR)</strong></td>
                  <td>높음</td>
                  <td>매력적인 광고 문구, 키워드 관련성 강화</td>
                </tr>
                <tr>
                  <td><strong>광고 관련성</strong></td>
                  <td>중간</td>
                  <td>키워드와 광고 문구의 일치도 높이기</td>
                </tr>
                <tr>
                  <td><strong>방문 페이지 경험</strong></td>
                  <td>높음</td>
                  <td>페이지 속도, 관련성, 사용자 경험 개선</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>광고 순위 공식</h3>
              <p>
                <strong>Ad Rank = 입찰가 x 품질점수 + 광고 확장 효과</strong>
              </p>
              <p>
                품질점수가 높으면 낮은 입찰가로도 높은 광고 순위를 확보할 수 있어
                비용 효율성이 크게 향상됩니다.
              </p>
            </div>

            {/* ─── 7. 네이버 검색광고 ─── */}
            <h2 data-aos="fade-up">7. 네이버 검색광고</h2>

            <p data-aos="fade-up">
              한국 시장에서는 네이버 검색광고가 매우 중요합니다.
              네이버 검색광고는 네이버 검색 결과 페이지에 노출되는 유료 광고입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>광고 유형</th><th>노출 위치</th><th>특징</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>파워링크</strong></td>
                  <td>검색 결과 상단/하단</td>
                  <td>텍스트 기반 CPC 광고, 가장 기본적인 형태</td>
                </tr>
                <tr>
                  <td><strong>쇼핑검색</strong></td>
                  <td>쇼핑 탭, 검색 결과 내</td>
                  <td>상품 이미지, 가격, 리뷰 등 노출</td>
                </tr>
                <tr>
                  <td><strong>브랜드검색</strong></td>
                  <td>검색 결과 최상단</td>
                  <td>브랜드 키워드 독점 노출, 이미지/동영상 포함</td>
                </tr>
                <tr>
                  <td><strong>플레이스 광고</strong></td>
                  <td>지도/플레이스 영역</td>
                  <td>지역 기반 비즈니스에 적합</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 8. 캠페인 최적화 ─── */}
            <h2 data-aos="fade-up">8. 캠페인 최적화</h2>

            <p data-aos="fade-up">
              검색광고 캠페인은 지속적인 모니터링과 최적화가 필수입니다.
              데이터를 기반으로 꾸준히 성과를 개선해야 합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>캠페인 최적화 체크리스트</h3>
              <ul>
                <li><strong>검색어 보고서 분석</strong>: 실제 유입 검색어를 확인하고 제외 키워드를 추가합니다.</li>
                <li><strong>A/B 테스트</strong>: 광고 문구, 랜딩 페이지를 지속적으로 테스트합니다.</li>
                <li><strong>입찰가 조정</strong>: 성과가 좋은 키워드의 입찰가를 올리고, 비효율 키워드는 낮춥니다.</li>
                <li><strong>시간대/요일 분석</strong>: 전환률이 높은 시간대에 예산을 집중합니다.</li>
                <li><strong>디바이스별 분석</strong>: 모바일/PC별 성과 차이를 분석하여 입찰 조정합니다.</li>
                <li><strong>전환 추적 점검</strong>: 전환 태그가 정상 작동하는지 주기적으로 확인합니다.</li>
              </ul>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>SEM</strong>은 유료 검색광고를 활용한 즉각적이고 측정 가능한 마케팅 기법이다.</li>
                <li>Google Ads는 계정 &gt; 캠페인 &gt; 광고그룹 &gt; 광고/키워드 계층 구조로 관리한다.</li>
                <li>키워드 매칭 유형(확장/구문/정확히 일치)을 전략적으로 활용한다.</li>
                <li><strong>품질점수</strong>가 높을수록 낮은 비용으로 좋은 순위를 확보할 수 있다.</li>
                <li>네이버 검색광고(파워링크, 쇼핑검색 등)는 한국 시장에서 필수이다.</li>
                <li>지속적인 데이터 기반 최적화가 캠페인 성공의 핵심이다.</li>
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

export default DigitalSEM;
