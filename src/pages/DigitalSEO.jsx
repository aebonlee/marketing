import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalSEO = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="SEO (검색엔진최적화)"
        description="검색 결과 상위 노출을 위한 SEO 전략 - 온페이지, 오프페이지, 테크니컬 SEO와 키워드 리서치 실습"
        path="/digital/seo"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>SEO (검색엔진최적화)</h1>
          <p>검색 결과 상위 노출을 위한 체계적인 최적화 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. SEO의 개념과 중요성 ─── */}
            <h2 data-aos="fade-up">1. SEO의 개념과 중요성</h2>

            <p data-aos="fade-up">
              <strong>SEO(Search Engine Optimization, 검색엔진최적화)</strong>란 검색엔진의 자연(오가닉) 검색 결과에서
              웹사이트의 가시성을 높이기 위한 일련의 전략과 기법입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>SEO가 중요한 이유</h3>
              <ul>
                <li><strong>오가닉 트래픽</strong>: 전체 웹 트래픽의 50% 이상이 검색엔진을 통해 유입됩니다.</li>
                <li><strong>비용 효율성</strong>: 유료 광고와 달리 지속적으로 무료 트래픽을 확보할 수 있습니다.</li>
                <li><strong>신뢰도 구축</strong>: 검색 결과 상위 노출은 브랜드 신뢰도를 높여줍니다.</li>
                <li><strong>장기적 효과</strong>: 한번 구축된 SEO 기반은 장기적으로 안정적인 트래픽을 제공합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구분</th><th>SEO (자연검색)</th><th>SEM (유료검색)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>비용</strong></td>
                  <td>무료 (시간과 노력 투자)</td>
                  <td>클릭당 비용(CPC) 발생</td>
                </tr>
                <tr>
                  <td><strong>효과 시점</strong></td>
                  <td>3~6개월 이상 소요</td>
                  <td>즉시 효과</td>
                </tr>
                <tr>
                  <td><strong>지속성</strong></td>
                  <td>장기적으로 지속</td>
                  <td>예산 중단 시 노출 중단</td>
                </tr>
                <tr>
                  <td><strong>신뢰도</strong></td>
                  <td>높음 (사용자 신뢰)</td>
                  <td>광고로 인식될 수 있음</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 온페이지 SEO ─── */}
            <h2 data-aos="fade-up">2. 온페이지 SEO (On-Page SEO)</h2>

            <p data-aos="fade-up">
              온페이지 SEO는 웹사이트 내부 요소를 최적화하여 검색엔진과 사용자 모두에게
              콘텐츠의 가치를 전달하는 작업입니다.
            </p>

            <h3 data-aos="fade-up">2.1 타이틀 태그 (Title Tag)</h3>
            <div className="callout-box" data-aos="fade-up">
              <ul>
                <li>검색 결과에서 가장 먼저 보이는 요소로, 60자 이내로 작성합니다.</li>
                <li>핵심 키워드를 앞쪽에 배치합니다.</li>
                <li>각 페이지마다 고유한 타이틀을 설정합니다.</li>
                <li>브랜드명은 타이틀 뒤쪽에 포함합니다.</li>
              </ul>
            </div>

            <h3 data-aos="fade-up">2.2 메타 디스크립션 (Meta Description)</h3>
            <div className="callout-box" data-aos="fade-up">
              <ul>
                <li>검색 결과 타이틀 아래에 표시되는 설명문으로, 155자 이내로 작성합니다.</li>
                <li>핵심 키워드를 자연스럽게 포함합니다.</li>
                <li>클릭을 유도하는 CTA(Call to Action)를 포함합니다.</li>
                <li>직접적인 순위 요인은 아니지만 CTR(클릭률)에 영향을 줍니다.</li>
              </ul>
            </div>

            <h3 data-aos="fade-up">2.3 헤딩 태그 (Heading Tags)</h3>
            <p data-aos="fade-up">
              H1~H6 태그를 활용하여 콘텐츠의 구조를 체계적으로 구성합니다.
              H1은 페이지당 하나만 사용하고, H2~H3로 세부 섹션을 나눕니다.
              각 헤딩에 관련 키워드를 자연스럽게 포함시킵니다.
            </p>

            <h3 data-aos="fade-up">2.4 콘텐츠 최적화</h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>최적화 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>키워드 밀도</strong></td>
                  <td>자연스러운 키워드 사용 (1~2% 권장)</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 길이</strong></td>
                  <td>심층적이고 포괄적인 콘텐츠 (2,000자 이상 권장)</td>
                </tr>
                <tr>
                  <td><strong>이미지 최적화</strong></td>
                  <td>alt 태그 작성, 파일 크기 최적화, 서술적 파일명 사용</td>
                </tr>
                <tr>
                  <td><strong>내부 링크</strong></td>
                  <td>관련 페이지 간 연결로 사이트 구조 강화</td>
                </tr>
                <tr>
                  <td><strong>URL 구조</strong></td>
                  <td>짧고 의미 있는 URL, 키워드 포함</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 오프페이지 SEO ─── */}
            <h2 data-aos="fade-up">3. 오프페이지 SEO (Off-Page SEO)</h2>

            <p data-aos="fade-up">
              오프페이지 SEO는 웹사이트 외부에서 이루어지는 최적화 활동으로,
              사이트의 권위성과 신뢰도를 높이는 데 초점을 맞춥니다.
            </p>

            <h3 data-aos="fade-up">3.1 백링크 (Backlinks)</h3>
            <div className="callout-box" data-aos="fade-up">
              <h3>양질의 백링크 확보 전략</h3>
              <ul>
                <li><strong>게스트 포스팅</strong>: 관련 업계 블로그에 양질의 콘텐츠를 기고합니다.</li>
                <li><strong>브로큰 링크 빌딩</strong>: 깨진 링크를 찾아 대체 콘텐츠를 제안합니다.</li>
                <li><strong>인포그래픽 배포</strong>: 공유 가능한 인포그래픽을 제작하여 자연 링크를 유도합니다.</li>
                <li><strong>PR 및 언론 보도</strong>: 뉴스 가치 있는 콘텐츠로 미디어 노출을 확보합니다.</li>
              </ul>
            </div>

            <h3 data-aos="fade-up">3.2 소셜 시그널 (Social Signals)</h3>
            <p data-aos="fade-up">
              소셜 미디어에서의 공유, 좋아요, 댓글 등은 직접적인 순위 요인은 아니지만,
              콘텐츠 노출을 늘리고 간접적으로 백링크 획득에 기여합니다.
              브랜드 인지도 향상과 트래픽 증가를 통해 SEO 성과를 보완합니다.
            </p>

            {/* ─── 4. 테크니컬 SEO ─── */}
            <h2 data-aos="fade-up">4. 테크니컬 SEO (Technical SEO)</h2>

            <p data-aos="fade-up">
              테크니컬 SEO는 검색엔진이 웹사이트를 효과적으로 크롤링하고 인덱싱할 수 있도록
              기술적 기반을 최적화하는 작업입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>영역</th><th>주요 항목</th><th>최적화 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사이트 속도</strong></td>
                  <td>페이지 로딩 시간, Core Web Vitals</td>
                  <td>이미지 압축, 캐싱, CDN 활용, 코드 최소화</td>
                </tr>
                <tr>
                  <td><strong>모바일 최적화</strong></td>
                  <td>반응형 디자인, 모바일 사용성</td>
                  <td>모바일 퍼스트 디자인, 터치 친화적 UI, 뷰포트 설정</td>
                </tr>
                <tr>
                  <td><strong>구조화 데이터</strong></td>
                  <td>Schema.org 마크업, 리치 스니펫</td>
                  <td>JSON-LD 형식의 구조화 데이터 구현</td>
                </tr>
                <tr>
                  <td><strong>크롤링 최적화</strong></td>
                  <td>robots.txt, 사이트맵, 캐노니컬 태그</td>
                  <td>XML 사이트맵 제출, 중복 페이지 정리</td>
                </tr>
                <tr>
                  <td><strong>보안</strong></td>
                  <td>HTTPS, SSL 인증서</td>
                  <td>전체 사이트 HTTPS 적용</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. 키워드 리서치 실습 ─── */}
            <h2 data-aos="fade-up">5. 키워드 리서치 실습</h2>

            <p data-aos="fade-up">
              키워드 리서치는 SEO의 출발점입니다. 사용자가 실제로 검색하는 키워드를 파악하고,
              전략적으로 타겟팅할 키워드를 선정하는 과정입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>키워드 리서치 프로세스</h3>
              <ul>
                <li><strong>시드 키워드 도출</strong>: 비즈니스와 관련된 핵심 주제를 나열합니다.</li>
                <li><strong>키워드 확장</strong>: 도구를 활용해 관련 키워드, 롱테일 키워드를 발굴합니다.</li>
                <li><strong>검색량 분석</strong>: 월간 검색량, 계절성, 트렌드를 확인합니다.</li>
                <li><strong>경쟁도 분석</strong>: 키워드 난이도(KD)와 상위 노출 페이지를 분석합니다.</li>
                <li><strong>검색 의도 파악</strong>: 정보형, 탐색형, 거래형, 상업적 조사형을 구분합니다.</li>
                <li><strong>키워드 우선순위 선정</strong>: 검색량, 경쟁도, 비즈니스 관련성을 종합하여 결정합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>검색 의도</th><th>설명</th><th>키워드 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>정보형 (Informational)</strong></td>
                  <td>정보를 얻기 위한 검색</td>
                  <td>"SEO란", "마케팅 뜻"</td>
                </tr>
                <tr>
                  <td><strong>탐색형 (Navigational)</strong></td>
                  <td>특정 사이트를 찾기 위한 검색</td>
                  <td>"네이버 블로그", "구글 서치 콘솔"</td>
                </tr>
                <tr>
                  <td><strong>거래형 (Transactional)</strong></td>
                  <td>구매/행동을 위한 검색</td>
                  <td>"SEO 도구 구매", "마케팅 강의 등록"</td>
                </tr>
                <tr>
                  <td><strong>상업적 조사형</strong></td>
                  <td>구매 전 비교/조사 검색</td>
                  <td>"Ahrefs vs SEMrush", "SEO 업체 추천"</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 6. SEO 도구 ─── */}
            <h2 data-aos="fade-up">6. SEO 도구</h2>

            <p data-aos="fade-up">
              효과적인 SEO 실행을 위해서는 전문 도구의 활용이 필수적입니다.
              주요 SEO 도구와 그 활용법을 알아봅니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>주요 기능</th><th>비용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google Search Console</strong></td>
                  <td>검색 성과 모니터링, 색인 상태 확인, 사이트맵 제출, 크롤링 오류 진단</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td><strong>Google Analytics</strong></td>
                  <td>트래픽 분석, 사용자 행동 추적, 전환 측정, 유입 경로 분석</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td><strong>Ahrefs</strong></td>
                  <td>백링크 분석, 키워드 리서치, 경쟁사 분석, 사이트 감사</td>
                  <td>유료 (월 $99~)</td>
                </tr>
                <tr>
                  <td><strong>SEMrush</strong></td>
                  <td>키워드 분석, 포지션 트래킹, 사이트 감사, 콘텐츠 최적화</td>
                  <td>유료 (월 $129.95~)</td>
                </tr>
                <tr>
                  <td><strong>네이버 서치어드바이저</strong></td>
                  <td>네이버 검색 최적화, 사이트 등록, 크롤링 현황 확인</td>
                  <td>무료</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>SEO</strong>는 검색엔진 자연 검색 결과에서 웹사이트 가시성을 높이는 전략이다.</li>
                <li><strong>온페이지 SEO</strong>: 타이틀, 메타 디스크립션, 헤딩, 콘텐츠 최적화가 핵심이다.</li>
                <li><strong>오프페이지 SEO</strong>: 양질의 백링크 확보가 사이트 권위를 높인다.</li>
                <li><strong>테크니컬 SEO</strong>: 사이트 속도, 모바일 최적화, 구조화 데이터가 기반이 된다.</li>
                <li><strong>키워드 리서치</strong>: 검색 의도를 파악하고 전략적으로 키워드를 선정한다.</li>
                <li>Google Search Console, Ahrefs, SEMrush 등 도구를 적극 활용한다.</li>
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

export default DigitalSEO;
