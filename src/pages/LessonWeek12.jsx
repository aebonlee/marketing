import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek12 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="12주차: SEO & SEM"
        description="SEO 기초, 키워드 리서치, Google Ads, 랜딩페이지 최적화, SEO 도구 활용을 학습합니다."
        path="/lessons/week12"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>12주차: SEO & SEM</h1>
          <p>검색엔진 최적화(SEO)와 검색엔진 마케팅(SEM)의 핵심 전략과 실무 기법을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>SEO의 3가지 영역(온페이지/오프페이지/테크니컬)을 구분하고 설명할 수 있다.</li>
                <li>효과적인 키워드 리서치 방법을 실행할 수 있다.</li>
                <li>Google Ads의 구조와 검색광고 운영 방법을 이해한다.</li>
                <li>랜딩페이지 최적화의 핵심 원칙을 적용할 수 있다.</li>
                <li>주요 SEO 도구의 기능과 활용 방법을 이해한다.</li>
              </ul>
            </div>

            {/* ─── 1. SEO 기초 ─── */}
            <h2 data-aos="fade-up">1. SEO 기초 (온페이지 / 오프페이지 / 테크니컬)</h2>

            <p>
              <strong>SEO(Search Engine Optimization, 검색엔진 최적화)</strong>는 검색엔진의 자연(오가닉)
              검색 결과에서 웹사이트의 노출 순위를 높이기 위한 일련의 최적화 활동입니다.
              SEO는 크게 3가지 영역으로 나뉩니다.
            </p>

            <h3>1.1 온페이지 SEO (On-Page SEO)</h3>

            <p>
              웹사이트 내부에서 직접 제어할 수 있는 최적화 요소입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>최적화 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>타이틀 태그</strong></td>
                  <td>검색 결과에 표시되는 페이지 제목</td>
                  <td>핵심 키워드 포함, 60자 이내, 고유한 제목</td>
                </tr>
                <tr>
                  <td><strong>메타 디스크립션</strong></td>
                  <td>검색 결과의 페이지 설명문</td>
                  <td>150자 이내, 키워드 포함, 클릭 유도 문구</td>
                </tr>
                <tr>
                  <td><strong>헤딩 태그 (H1~H6)</strong></td>
                  <td>콘텐츠의 구조화된 제목 체계</td>
                  <td>H1은 1개, 계층적 구조, 키워드 포함</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 품질</strong></td>
                  <td>사용자에게 가치 있는 고품질 콘텐츠</td>
                  <td>E-E-A-T 원칙 (경험, 전문성, 권위, 신뢰)</td>
                </tr>
                <tr>
                  <td><strong>이미지 최적화</strong></td>
                  <td>이미지의 검색엔진 인식 최적화</td>
                  <td>alt 속성, 파일명, WebP 포맷, 압축</td>
                </tr>
                <tr>
                  <td><strong>내부 링크</strong></td>
                  <td>사이트 내 페이지 간 연결</td>
                  <td>관련 콘텐츠 링크, 앵커 텍스트 최적화</td>
                </tr>
                <tr>
                  <td><strong>URL 구조</strong></td>
                  <td>페이지 주소의 구조</td>
                  <td>짧고 명확하게, 키워드 포함, 하이픈 사용</td>
                </tr>
              </tbody>
            </table>

            <h3>1.2 오프페이지 SEO (Off-Page SEO)</h3>

            <p>
              웹사이트 외부에서 이루어지는 최적화 활동으로, 주로 신뢰도와 권위를 높이는 데 초점을 맞춥니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>전략</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>백링크 (Backlinks)</strong></td>
                  <td>다른 사이트에서 내 사이트로의 링크</td>
                  <td>고품질 콘텐츠, 게스트 포스팅, PR</td>
                </tr>
                <tr>
                  <td><strong>소셜 시그널</strong></td>
                  <td>SNS에서의 공유, 좋아요, 댓글</td>
                  <td>공유 가능한 콘텐츠 제작, SNS 활성화</td>
                </tr>
                <tr>
                  <td><strong>브랜드 멘션</strong></td>
                  <td>다른 사이트에서 브랜드가 언급되는 것</td>
                  <td>PR 활동, 업계 참여, 파트너십</td>
                </tr>
                <tr>
                  <td><strong>로컬 SEO</strong></td>
                  <td>지역 검색 결과 최적화</td>
                  <td>Google 비즈니스 프로필, 지역 디렉토리 등록</td>
                </tr>
              </tbody>
            </table>

            <h3>1.3 테크니컬 SEO (Technical SEO)</h3>

            <p>
              검색엔진 크롤러가 사이트를 효과적으로 크롤링하고 인덱싱할 수 있도록 기술적 환경을 최적화하는 활동입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>확인/개선 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사이트 속도</strong></td>
                  <td>페이지 로딩 속도</td>
                  <td>PageSpeed Insights, 이미지 압축, CDN</td>
                </tr>
                <tr>
                  <td><strong>모바일 친화성</strong></td>
                  <td>모바일 기기에서의 사용성</td>
                  <td>반응형 디자인, 모바일 테스트 도구</td>
                </tr>
                <tr>
                  <td><strong>크롤링/인덱싱</strong></td>
                  <td>검색엔진 봇의 사이트 접근성</td>
                  <td>robots.txt, sitemap.xml, Search Console</td>
                </tr>
                <tr>
                  <td><strong>HTTPS</strong></td>
                  <td>SSL 인증서를 통한 보안 연결</td>
                  <td>SSL 인증서 설치, HTTP→HTTPS 리다이렉트</td>
                </tr>
                <tr>
                  <td><strong>구조화 데이터</strong></td>
                  <td>검색엔진이 콘텐츠를 이해하도록 돕는 마크업</td>
                  <td>Schema.org, JSON-LD, 리치 스니펫</td>
                </tr>
                <tr>
                  <td><strong>Core Web Vitals</strong></td>
                  <td>구글의 사용자 경험 핵심 지표</td>
                  <td>LCP, FID(INP), CLS 최적화</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 키워드 리서치 ─── */}
            <h2 data-aos="fade-up">2. 키워드 리서치</h2>

            <p>
              <strong>키워드 리서치(Keyword Research)</strong>는 타겟 고객이 검색엔진에서 실제로 사용하는
              검색어를 조사하고 분석하는 과정입니다. 효과적인 SEO와 SEM의 출발점이 됩니다.
            </p>

            <h3>2.1 키워드 유형</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>키워드 유형</th><th>특성</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>헤드 키워드</strong></td>
                  <td>검색량 높음, 경쟁 치열, 전환율 낮음</td>
                  <td>"마케팅", "노트북"</td>
                </tr>
                <tr>
                  <td><strong>미드테일 키워드</strong></td>
                  <td>중간 수준의 검색량과 경쟁</td>
                  <td>"디지털 마케팅 강의", "가성비 노트북"</td>
                </tr>
                <tr>
                  <td><strong>롱테일 키워드</strong></td>
                  <td>검색량 낮음, 경쟁 적음, 전환율 높음</td>
                  <td>"2024 디지털마케팅 무료 온라인 강의", "대학생 가성비 노트북 추천"</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 키워드 리서치 프로세스</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>활동</th><th>도구</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 시드 키워드 도출</strong></td>
                  <td>브레인스토밍으로 핵심 키워드 목록 작성</td>
                  <td>팀 회의, 고객 인터뷰</td>
                </tr>
                <tr>
                  <td><strong>2. 키워드 확장</strong></td>
                  <td>연관 키워드, 유사 키워드 탐색</td>
                  <td>Google Keyword Planner, 네이버 키워드 도구</td>
                </tr>
                <tr>
                  <td><strong>3. 검색량 분석</strong></td>
                  <td>월간 검색량 및 트렌드 확인</td>
                  <td>Google Trends, SEMrush, Ahrefs</td>
                </tr>
                <tr>
                  <td><strong>4. 경쟁 분석</strong></td>
                  <td>키워드 난이도 및 경쟁 수준 평가</td>
                  <td>Ahrefs KD, Moz DA, SERP 분석</td>
                </tr>
                <tr>
                  <td><strong>5. 키워드 선정</strong></td>
                  <td>비즈니스 관련성, 검색량, 경쟁도 기반 최종 선정</td>
                  <td>키워드 매트릭스, 우선순위 평가</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>검색 의도(Search Intent) 파악</h3>
              <p>키워드 리서치에서 가장 중요한 것은 검색 의도를 파악하는 것입니다:</p>
              <ul>
                <li><strong>정보성 (Informational):</strong> "마케팅이란" - 정보를 찾는 의도</li>
                <li><strong>탐색성 (Navigational):</strong> "네이버 블로그 로그인" - 특정 사이트 탐색</li>
                <li><strong>상업성 (Commercial):</strong> "마케팅 강의 추천" - 구매 전 비교/조사</li>
                <li><strong>거래성 (Transactional):</strong> "마케팅 책 구매" - 즉시 구매 의도</li>
              </ul>
            </div>

            {/* ─── 3. Google Ads와 검색광고 ─── */}
            <h2 data-aos="fade-up">3. Google Ads와 검색광고</h2>

            <p>
              <strong>SEM(Search Engine Marketing)</strong>은 검색엔진에서 유료 광고를 통해
              웹사이트 트래픽을 확보하는 마케팅 활동입니다.
              대표적인 플랫폼으로 <strong>Google Ads</strong>와 <strong>네이버 검색광고</strong>가 있습니다.
            </p>

            <h3>3.1 Google Ads 계정 구조</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>레벨</th><th>설명</th><th>설정 항목</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>계정 (Account)</strong></td>
                  <td>최상위 단위, 결제 정보 관리</td>
                  <td>이메일, 결제 수단, 시간대</td>
                </tr>
                <tr>
                  <td><strong>캠페인 (Campaign)</strong></td>
                  <td>광고 목표와 예산 단위</td>
                  <td>일 예산, 타겟 지역, 네트워크, 입찰 전략</td>
                </tr>
                <tr>
                  <td><strong>광고그룹 (Ad Group)</strong></td>
                  <td>관련 키워드와 광고의 묶음</td>
                  <td>키워드 세트, 입찰가, 광고 소재</td>
                </tr>
                <tr>
                  <td><strong>키워드/광고 (Keywords/Ads)</strong></td>
                  <td>실제 타겟 키워드와 광고 소재</td>
                  <td>검색어, 매치 타입, 광고 문구</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 키워드 매치 타입</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>매치 타입</th><th>기호</th><th>설명</th><th>예시 (키워드: 마케팅 강의)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>확장 검색</strong></td>
                  <td>마케팅 강의</td>
                  <td>관련된 다양한 검색어에 노출</td>
                  <td>"마케팅 수업", "광고 교육" 등에도 노출</td>
                </tr>
                <tr>
                  <td><strong>구문 검색</strong></td>
                  <td>"마케팅 강의"</td>
                  <td>키워드가 포함된 검색어에 노출</td>
                  <td>"온라인 마케팅 강의 추천"에 노출</td>
                </tr>
                <tr>
                  <td><strong>일치 검색</strong></td>
                  <td>[마케팅 강의]</td>
                  <td>키워드와 동일하거나 매우 유사한 검색어에만 노출</td>
                  <td>"마케팅 강의", "마케팅 강좌"에 노출</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>품질점수 (Quality Score)</h3>
              <p>
                Google Ads에서 광고 순위와 클릭 비용에 영향을 미치는 핵심 지표입니다.
                1~10점으로 평가되며, 높을수록 낮은 비용으로 높은 순위를 얻을 수 있습니다.
              </p>
              <ul>
                <li><strong>예상 CTR:</strong> 광고가 클릭될 확률</li>
                <li><strong>광고 관련성:</strong> 키워드와 광고 문구의 관련성</li>
                <li><strong>랜딩페이지 경험:</strong> 광고 클릭 후 도달하는 페이지의 품질</li>
              </ul>
            </div>

            {/* ─── 4. 랜딩페이지 최적화 ─── */}
            <h2 data-aos="fade-up">4. 랜딩페이지 최적화</h2>

            <p>
              <strong>랜딩페이지(Landing Page)</strong>는 광고나 검색을 통해 사용자가 처음 도달하는 페이지입니다.
              전환율을 극대화하기 위해 체계적인 최적화가 필요합니다.
            </p>

            <h3>4.1 효과적인 랜딩페이지의 핵심 요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>최적화 팁</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>헤드라인</strong></td>
                  <td>방문자의 주의를 끄는 첫 문구</td>
                  <td>혜택 중심, 명확하고 간결하게, 키워드 포함</td>
                </tr>
                <tr>
                  <td><strong>서브 헤드라인</strong></td>
                  <td>헤드라인을 보충하는 설명</td>
                  <td>구체적인 가치 제안, 차별화 포인트</td>
                </tr>
                <tr>
                  <td><strong>히어로 이미지/동영상</strong></td>
                  <td>제품이나 서비스를 시각적으로 표현</td>
                  <td>고품질 이미지, 사용 장면, 인물 포함</td>
                </tr>
                <tr>
                  <td><strong>CTA (Call-to-Action)</strong></td>
                  <td>전환을 유도하는 버튼/링크</td>
                  <td>눈에 띄는 색상, 행동 동사, 긴급성 부여</td>
                </tr>
                <tr>
                  <td><strong>사회적 증거</strong></td>
                  <td>다른 사람들의 긍정적 경험</td>
                  <td>후기, 별점, 사용자 수, 기업 로고</td>
                </tr>
                <tr>
                  <td><strong>신뢰 요소</strong></td>
                  <td>안전성과 신뢰를 보여주는 요소</td>
                  <td>인증 마크, 환불 보장, 보안 인증</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>랜딩페이지 최적화 체크리스트</h3>
              <ul>
                <li>하나의 페이지에 하나의 목표 (Single Goal)</li>
                <li>네비게이션 메뉴 제거 또는 최소화 (이탈 방지)</li>
                <li>Above the Fold에 핵심 메시지와 CTA 배치</li>
                <li>모바일 반응형 디자인 필수</li>
                <li>페이지 로딩 속도 3초 이내</li>
                <li>A/B 테스트로 지속적 개선</li>
              </ul>
            </div>

            {/* ─── 5. SEO 도구 활용 ─── */}
            <h2 data-aos="fade-up">5. SEO 도구 활용</h2>

            <p>
              효과적인 SEO 실행을 위해서는 다양한 도구를 활용한 데이터 기반 분석이 필수적입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>주요 기능</th><th>가격</th><th>활용 장면</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google Search Console</strong></td>
                  <td>검색 성과 분석, 인덱싱 상태, 크롤링 오류</td>
                  <td>무료</td>
                  <td>자사 사이트 검색 성과 모니터링</td>
                </tr>
                <tr>
                  <td><strong>Google Analytics</strong></td>
                  <td>웹사이트 트래픽, 사용자 행동, 전환 추적</td>
                  <td>무료</td>
                  <td>유입 경로, 전환율, 사용자 분석</td>
                </tr>
                <tr>
                  <td><strong>Ahrefs</strong></td>
                  <td>백링크 분석, 키워드 리서치, 경쟁 분석</td>
                  <td>유료 ($99~/월)</td>
                  <td>경쟁사 분석, 키워드 전략 수립</td>
                </tr>
                <tr>
                  <td><strong>SEMrush</strong></td>
                  <td>종합 SEO/SEM 분석, 사이트 감사</td>
                  <td>유료 ($129~/월)</td>
                  <td>종합 디지털 마케팅 분석</td>
                </tr>
                <tr>
                  <td><strong>네이버 서치어드바이저</strong></td>
                  <td>네이버 검색 노출 분석, 사이트 진단</td>
                  <td>무료</td>
                  <td>네이버 SEO 최적화</td>
                </tr>
                <tr>
                  <td><strong>Screaming Frog</strong></td>
                  <td>사이트 크롤링, 테크니컬 SEO 분석</td>
                  <td>무료(500 URL) / 유료</td>
                  <td>기술적 문제 발견 및 사이트 감사</td>
                </tr>
                <tr>
                  <td><strong>Google PageSpeed Insights</strong></td>
                  <td>페이지 속도 분석, Core Web Vitals</td>
                  <td>무료</td>
                  <td>사이트 속도 최적화</td>
                </tr>
              </tbody>
            </table>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">
                <span>robots.txt 기본 설정 예시</span>
              </div>
              <pre><code>{`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml`}</code></pre>
            </div>

            <div className="code-block" data-aos="fade-up">
              <div className="code-header">
                <span>구조화 데이터 (JSON-LD) 예시</span>
              </div>
              <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO 초보자 가이드",
  "author": {
    "@type": "Person",
    "name": "마케팅 전문가"
  },
  "datePublished": "2024-01-15",
  "description": "검색엔진 최적화의 기초부터 실무까지"
}
</script>`}</code></pre>
            </div>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>SEO</strong>는 온페이지(콘텐츠/태그), 오프페이지(백링크/신뢰), 테크니컬(속도/크롤링)로 구분된다.</li>
                <li><strong>키워드 리서치</strong>는 검색량, 경쟁도, 검색 의도를 종합적으로 분석해야 한다.</li>
                <li><strong>Google Ads</strong>는 계정-캠페인-광고그룹-키워드/광고 구조로 운영되며, 품질점수가 핵심이다.</li>
                <li><strong>랜딩페이지</strong>는 하나의 목표에 집중하고, CTA와 사회적 증거를 효과적으로 배치해야 한다.</li>
                <li>Google Search Console, Ahrefs 등 <strong>SEO 도구</strong>를 활용하여 데이터 기반으로 최적화한다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week11" className="lesson-nav-btn prev">
                ← 11주차: 콘텐츠 & SNS 마케팅
              </Link>
              <Link to="/lessons/week13" className="lesson-nav-btn next">
                13주차: 데이터 기반 마케팅 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek12;
