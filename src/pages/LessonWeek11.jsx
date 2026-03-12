import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek11 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="11주차: 콘텐츠 & SNS 마케팅"
        description="콘텐츠 마케팅 전략, SNS 플랫폼별 특성, 콘텐츠 제작 프로세스, 바이럴 마케팅, 커뮤니티 관리를 학습합니다."
        path="/lessons/week11"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>11주차: 콘텐츠 & SNS 마케팅</h1>
          <p>콘텐츠 마케팅 전략과 SNS 플랫폼별 마케팅 기법, 바이럴 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box" data-aos="fade-up">
              <h3>학습 목표</h3>
              <ul>
                <li>콘텐츠 마케팅의 개념과 전략 수립 방법을 설명할 수 있다.</li>
                <li>주요 SNS 플랫폼별 특성과 활용 전략을 구분할 수 있다.</li>
                <li>효과적인 콘텐츠 제작 프로세스를 이해한다.</li>
                <li>바이럴 마케팅의 원리와 성공 요인을 분석할 수 있다.</li>
                <li>온라인 커뮤니티 관리 전략을 수립할 수 있다.</li>
              </ul>
            </div>

            {/* ─── 1. 콘텐츠 마케팅 전략 ─── */}
            <h2 data-aos="fade-up">1. 콘텐츠 마케팅 전략</h2>

            <p>
              <strong>콘텐츠 마케팅(Content Marketing)</strong>은 타겟 오디언스에게 가치 있고 관련성 높은
              콘텐츠를 지속적으로 제작하고 배포하여, 궁극적으로 수익성 있는 고객 행동을 유도하는 전략적
              마케팅 접근법입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>콘텐츠 마케팅 vs 전통 광고</h3>
              <p>
                전통 광고가 <em>"우리 제품을 사세요"</em>라고 말하는 반면,
                콘텐츠 마케팅은 <em>"이 정보가 당신에게 도움이 될 것입니다"</em>라고 접근합니다.
                고객에게 먼저 가치를 제공함으로써 신뢰를 구축하고, 자연스럽게 구매로 이어지게 합니다.
              </p>
            </div>

            <h3>1.1 콘텐츠 유형</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>콘텐츠 유형</th><th>설명</th><th>적합한 플랫폼</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>블로그 포스트</strong></td>
                  <td>심층적인 정보, 가이드, 노하우 공유</td>
                  <td>자사 블로그, 네이버 블로그, 브런치</td>
                </tr>
                <tr>
                  <td><strong>동영상</strong></td>
                  <td>튜토리얼, 리뷰, 브이로그, 숏폼</td>
                  <td>유튜브, 틱톡, 인스타 릴스</td>
                </tr>
                <tr>
                  <td><strong>인포그래픽</strong></td>
                  <td>데이터를 시각적으로 정리한 이미지</td>
                  <td>인스타그램, 핀터레스트, 블로그</td>
                </tr>
                <tr>
                  <td><strong>팟캐스트</strong></td>
                  <td>오디오 콘텐츠, 인터뷰, 토론</td>
                  <td>Apple Podcast, Spotify, 유튜브</td>
                </tr>
                <tr>
                  <td><strong>이북/백서</strong></td>
                  <td>전문적 보고서, 심층 자료</td>
                  <td>자사 웹사이트 (리드 생성용)</td>
                </tr>
                <tr>
                  <td><strong>뉴스레터</strong></td>
                  <td>정기적인 이메일 콘텐츠</td>
                  <td>이메일 (스티비, Mailchimp)</td>
                </tr>
              </tbody>
            </table>

            <h3>1.2 콘텐츠 전략 프레임워크</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>구매 여정 단계</th><th>콘텐츠 목표</th><th>콘텐츠 유형</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지 (Awareness)</strong></td>
                  <td>브랜드 노출, 관심 유도</td>
                  <td>블로그, SNS 포스트, 동영상, 인포그래픽</td>
                </tr>
                <tr>
                  <td><strong>고려 (Consideration)</strong></td>
                  <td>신뢰 구축, 전문성 증명</td>
                  <td>사례 연구, 비교 가이드, 웨비나, 백서</td>
                </tr>
                <tr>
                  <td><strong>결정 (Decision)</strong></td>
                  <td>구매 전환, 행동 유도</td>
                  <td>고객 후기, 무료 체험, 데모, 할인 쿠폰</td>
                </tr>
                <tr>
                  <td><strong>유지 (Retention)</strong></td>
                  <td>재구매, 충성도 강화</td>
                  <td>뉴스레터, 사용 가이드, 커뮤니티</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. SNS 플랫폼별 특성 ─── */}
            <h2 data-aos="fade-up">2. SNS 플랫폼별 특성</h2>

            <p>
              각 SNS 플랫폼은 고유한 특성과 사용자층을 가지고 있으므로,
              플랫폼에 맞는 차별화된 콘텐츠 전략이 필요합니다.
            </p>

            <h3>2.1 인스타그램 (Instagram)</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>항목</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>주요 사용자</strong></td>
                  <td>20-30대, 여성 비중 높음</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 형태</strong></td>
                  <td>이미지, 릴스(숏폼 동영상), 스토리, 카루셀</td>
                </tr>
                <tr>
                  <td><strong>강점</strong></td>
                  <td>비주얼 중심, 해시태그 검색, 쇼핑 기능, 인플루언서 협업</td>
                </tr>
                <tr>
                  <td><strong>마케팅 팁</strong></td>
                  <td>릴스 알고리즘 활용, 일관된 피드 톤, 스토리로 실시간 소통</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 유튜브 (YouTube)</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>항목</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>주요 사용자</strong></td>
                  <td>전 연령대, 국내 최대 동영상 플랫폼</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 형태</strong></td>
                  <td>롱폼 동영상, 숏츠, 라이브 방송</td>
                </tr>
                <tr>
                  <td><strong>강점</strong></td>
                  <td>검색엔진 기능, 장기적 콘텐츠 노출, 수익화 가능, 높은 신뢰도</td>
                </tr>
                <tr>
                  <td><strong>마케팅 팁</strong></td>
                  <td>SEO 최적화된 제목/설명, 썸네일 최적화, 구독자 커뮤니티 구축</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 틱톡 (TikTok)</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>항목</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>주요 사용자</strong></td>
                  <td>10-20대, MZ세대 중심</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 형태</strong></td>
                  <td>15초~3분 숏폼 동영상</td>
                </tr>
                <tr>
                  <td><strong>강점</strong></td>
                  <td>알고리즘 기반 추천, 바이럴 확산력, 챌린지/트렌드 참여</td>
                </tr>
                <tr>
                  <td><strong>마케팅 팁</strong></td>
                  <td>트렌드 빠르게 반영, 자연스러운 콘텐츠, 해시태그 챌린지 활용</td>
                </tr>
              </tbody>
            </table>

            <h3>2.4 블로그</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>항목</th><th>내용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>주요 플랫폼</strong></td>
                  <td>네이버 블로그, 티스토리, 브런치, 워드프레스</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 형태</strong></td>
                  <td>텍스트 중심의 심층 콘텐츠, 리뷰, 가이드</td>
                </tr>
                <tr>
                  <td><strong>강점</strong></td>
                  <td>SEO 효과, 전문성 어필, 장기적 트래픽 확보, 검색 유입</td>
                </tr>
                <tr>
                  <td><strong>마케팅 팁</strong></td>
                  <td>키워드 최적화, 정기적 발행, 양질의 정보 제공, 내부 링크 구조</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 콘텐츠 제작 프로세스 ─── */}
            <h2 data-aos="fade-up">3. 콘텐츠 제작 프로세스</h2>

            <p>
              효과적인 콘텐츠를 지속적으로 생산하기 위해서는 체계적인 제작 프로세스가 필요합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>단계</th><th>활동</th><th>도구/방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. 기획</strong></td>
                  <td>타겟 분석, 키워드 리서치, 콘텐츠 캘린더 수립</td>
                  <td>Google Trends, 네이버 키워드, Notion</td>
                </tr>
                <tr>
                  <td><strong>2. 제작</strong></td>
                  <td>콘텐츠 작성/촬영/디자인</td>
                  <td>Canva, Adobe, CapCut, ChatGPT</td>
                </tr>
                <tr>
                  <td><strong>3. 검수</strong></td>
                  <td>품질 검토, 팩트체크, 브랜드 가이드 준수 확인</td>
                  <td>체크리스트, 팀 리뷰</td>
                </tr>
                <tr>
                  <td><strong>4. 배포</strong></td>
                  <td>플랫폼별 최적화 후 발행</td>
                  <td>예약 발행 도구, 크로스 포스팅</td>
                </tr>
                <tr>
                  <td><strong>5. 분석</strong></td>
                  <td>성과 측정, 인사이트 도출</td>
                  <td>플랫폼 인사이트, Google Analytics</td>
                </tr>
                <tr>
                  <td><strong>6. 최적화</strong></td>
                  <td>데이터 기반 콘텐츠 개선, 리퍼포징</td>
                  <td>A/B 테스트, 콘텐츠 리사이클링</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>콘텐츠 리퍼포징 (Repurposing)</h3>
              <p>
                하나의 콘텐츠를 다양한 포맷으로 재활용하는 전략입니다.
                예를 들어, 블로그 글 하나를 인스타그램 카루셀, 유튜브 숏츠, 뉴스레터, 인포그래픽 등으로
                변환하면 콘텐츠 생산 효율이 크게 향상됩니다.
              </p>
            </div>

            {/* ─── 4. 바이럴 마케팅 ─── */}
            <h2 data-aos="fade-up">4. 바이럴 마케팅</h2>

            <p>
              <strong>바이럴 마케팅(Viral Marketing)</strong>은 콘텐츠가 소비자들 사이에서 자발적으로
              공유되며 빠르게 확산되는 마케팅 기법입니다. 바이러스처럼 퍼져나간다는 의미에서
              "바이럴"이라는 이름이 붙었습니다.
            </p>

            <h3>4.1 바이럴 콘텐츠의 6가지 원칙 (STEPPS)</h3>

            <p>
              와튼 스쿨의 조나 버거(Jonah Berger) 교수가 제시한 바이럴의 6가지 원칙입니다:
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>원칙</th><th>영문</th><th>설명</th><th>사례</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>S</strong></td>
                  <td>Social Currency</td>
                  <td>공유하면 나를 멋지게/똑똑하게 보이게 하는 콘텐츠</td>
                  <td>성격 테스트, MBTI 밈</td>
                </tr>
                <tr>
                  <td><strong>T</strong></td>
                  <td>Triggers</td>
                  <td>일상에서 자연스럽게 떠오르게 하는 연결고리</td>
                  <td>"금요일은 치킨" (BBQ)</td>
                </tr>
                <tr>
                  <td><strong>E</strong></td>
                  <td>Emotion</td>
                  <td>강한 감정(경외, 분노, 유머 등)을 자극하는 콘텐츠</td>
                  <td>감동적인 브랜드 필름</td>
                </tr>
                <tr>
                  <td><strong>P</strong></td>
                  <td>Public</td>
                  <td>다른 사람이 하는 것을 볼 수 있어 따라하게 되는 것</td>
                  <td>아이스 버킷 챌린지</td>
                </tr>
                <tr>
                  <td><strong>P</strong></td>
                  <td>Practical Value</td>
                  <td>실용적으로 도움이 되는 유용한 콘텐츠</td>
                  <td>요리 레시피, 꿀팁 영상</td>
                </tr>
                <tr>
                  <td><strong>S</strong></td>
                  <td>Stories</td>
                  <td>이야기 속에 브랜드 메시지를 자연스럽게 녹이는 것</td>
                  <td>창업 스토리, 고객 성공 사례</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>바이럴 마케팅 주의점</h3>
              <ul>
                <li>바이럴은 "의도"할 수 있지만 "보장"할 수 없다 - 확률을 높이는 전략이 중요</li>
                <li>부정적 바이럴(역효과)에 대한 위기관리 계획 필수</li>
                <li>뒷광고 논란 등 윤리적 이슈에 주의 (광고 표시 의무)</li>
                <li>일시적 화제보다 브랜드 가치와 연결된 바이럴이 효과적</li>
              </ul>
            </div>

            {/* ─── 5. 커뮤니티 관리 ─── */}
            <h2 data-aos="fade-up">5. 커뮤니티 관리</h2>

            <p>
              <strong>커뮤니티 관리(Community Management)</strong>는 브랜드를 중심으로 형성된
              온라인 커뮤니티를 운영하고, 고객과의 관계를 강화하는 활동입니다.
            </p>

            <h3>5.1 커뮤니티 관리의 핵심 요소</h3>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>요소</th><th>설명</th><th>실행 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>모니터링</strong></td>
                  <td>브랜드 관련 대화와 멘션 추적</td>
                  <td>소셜 리스닝 도구 활용, 알림 설정</td>
                </tr>
                <tr>
                  <td><strong>참여(Engagement)</strong></td>
                  <td>댓글, 메시지에 적극적으로 응답</td>
                  <td>24시간 내 응답, 개인화된 답변</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 큐레이션</strong></td>
                  <td>커뮤니티에 가치 있는 콘텐츠 공유</td>
                  <td>UGC(사용자 생성 콘텐츠) 활용</td>
                </tr>
                <tr>
                  <td><strong>위기 대응</strong></td>
                  <td>부정적 피드백이나 위기 상황 관리</td>
                  <td>신속한 대응, 투명한 소통, 해결 방안 제시</td>
                </tr>
                <tr>
                  <td><strong>성과 분석</strong></td>
                  <td>커뮤니티 성장과 참여도 측정</td>
                  <td>팔로워 증가율, 참여율, 감성 분석</td>
                </tr>
              </tbody>
            </table>

            <h3>5.2 효과적인 커뮤니티 운영 전략</h3>

            <ul>
              <li data-aos="fade-up"><strong>브랜드 페르소나 설정:</strong> 일관된 톤앤매너로 소통 (친근한 친구? 전문가?)</li>
              <li data-aos="fade-up"><strong>UGC 장려:</strong> 해시태그 캠페인, 리그램/리포스트로 고객 콘텐츠 활용</li>
              <li data-aos="fade-up"><strong>커뮤니티 가이드라인:</strong> 건전한 커뮤니티 문화를 위한 규칙 수립</li>
              <li data-aos="fade-up"><strong>앰배서더 프로그램:</strong> 열성 팬을 브랜드 앰배서더로 육성</li>
              <li data-aos="fade-up"><strong>정기 이벤트:</strong> Q&A, 라이브 방송, 챌린지 등으로 참여 유도</li>
            </ul>

            {/* ─── 핵심 정리 ─── */}
            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>콘텐츠 마케팅</strong>은 가치 있는 콘텐츠로 고객의 신뢰를 먼저 구축하는 전략이다.</li>
                <li>SNS 플랫폼(인스타그램/유튜브/틱톡/블로그)마다 <strong>고유한 특성과 사용자층</strong>이 있다.</li>
                <li>콘텐츠 제작은 기획 → 제작 → 검수 → 배포 → 분석 → 최적화의 <strong>체계적 프로세스</strong>를 따른다.</li>
                <li><strong>바이럴 마케팅</strong>은 STEPPS 원칙을 활용하되, 윤리적 이슈에 주의해야 한다.</li>
                <li><strong>커뮤니티 관리</strong>는 브랜드 충성도를 높이는 핵심 활동이다.</li>
              </ul>
            </div>

            {/* ─── Navigation ─── */}
            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week10" className="lesson-nav-btn prev">
                ← 10주차: 디지털마케팅 기초
              </Link>
              <Link to="/lessons/week12" className="lesson-nav-btn next">
                12주차: SEO & SEM →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek11;
