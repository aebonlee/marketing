import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalContent = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="콘텐츠 마케팅"
        description="가치 있는 콘텐츠로 고객을 끌어오는 전략 - 콘텐츠 유형, 캘린더, 스토리텔링, 배포 전략, ROI 측정"
        path="/digital/content"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>콘텐츠 마케팅</h1>
          <p>가치 있는 콘텐츠로 고객을 끌어오고, 신뢰를 구축하는 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. 콘텐츠 마케팅 전략 ─── */}
            <h2 data-aos="fade-up">1. 콘텐츠 마케팅 전략</h2>

            <p data-aos="fade-up">
              <strong>콘텐츠 마케팅</strong>은 타겟 오디언스에게 가치 있고 관련성 높은 콘텐츠를
              지속적으로 제공하여 고객을 유치하고, 관계를 구축하며, 궁극적으로 수익성 있는
              행동을 이끌어내는 전략적 마케팅 접근법입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>콘텐츠 마케팅 전략 프레임워크</h3>
              <ul>
                <li><strong>목표 정의</strong>: 브랜드 인지도, 리드 생성, 고객 교육, SEO 트래픽 등 명확한 목표를 설정합니다.</li>
                <li><strong>페르소나 설정</strong>: 이상적인 고객의 특성, 관심사, 고민을 구체적으로 정의합니다.</li>
                <li><strong>콘텐츠 감사</strong>: 기존 콘텐츠를 분석하여 강점과 개선점을 파악합니다.</li>
                <li><strong>콘텐츠 맵 작성</strong>: 고객 여정 단계별로 필요한 콘텐츠를 매핑합니다.</li>
                <li><strong>채널 전략</strong>: 콘텐츠를 배포할 최적의 채널을 선정합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>고객 여정 단계</th><th>콘텐츠 목적</th><th>콘텐츠 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지 (Awareness)</strong></td>
                  <td>문제 인식, 브랜드 발견</td>
                  <td>블로그 포스트, 인포그래픽, 소셜 콘텐츠</td>
                </tr>
                <tr>
                  <td><strong>고려 (Consideration)</strong></td>
                  <td>솔루션 탐색, 비교</td>
                  <td>백서, 가이드, 웨비나, 케이스 스터디</td>
                </tr>
                <tr>
                  <td><strong>결정 (Decision)</strong></td>
                  <td>구매 결정 촉진</td>
                  <td>고객 후기, 데모, 무료 체험, 비교표</td>
                </tr>
                <tr>
                  <td><strong>유지 (Retention)</strong></td>
                  <td>재구매, 충성도 강화</td>
                  <td>뉴스레터, 활용 가이드, 커뮤니티</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 콘텐츠 유형 ─── */}
            <h2 data-aos="fade-up">2. 콘텐츠 유형</h2>

            <p data-aos="fade-up">
              다양한 콘텐츠 유형을 전략적으로 활용하면 더 넓은 오디언스에게 도달하고,
              다양한 학습 스타일을 가진 사용자를 만족시킬 수 있습니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>유형</th><th>장점</th><th>활용 전략</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>블로그 포스트</strong></td>
                  <td>SEO 효과, 전문성 구축, 비용 효율적</td>
                  <td>키워드 기반 주제 선정, 심층적 콘텐츠 작성, CTA 포함</td>
                </tr>
                <tr>
                  <td><strong>영상 콘텐츠</strong></td>
                  <td>높은 참여율, 감성 전달, 공유 용이</td>
                  <td>유튜브/틱톡 배포, 숏폼과 롱폼 병행, 자막 포함</td>
                </tr>
                <tr>
                  <td><strong>인포그래픽</strong></td>
                  <td>복잡한 정보 시각화, 공유성 높음</td>
                  <td>데이터 기반 스토리, 브랜드 색상 활용, 임베드 코드 제공</td>
                </tr>
                <tr>
                  <td><strong>팟캐스트</strong></td>
                  <td>이동 중 소비, 친밀감 형성, 전문가 네트워크</td>
                  <td>정기 에피소드, 게스트 출연, 멀티 플랫폼 배포</td>
                </tr>
                <tr>
                  <td><strong>이북/백서</strong></td>
                  <td>심층 정보 전달, 리드 생성</td>
                  <td>게이티드 콘텐츠로 이메일 수집, 랜딩 페이지 활용</td>
                </tr>
                <tr>
                  <td><strong>웨비나/라이브</strong></td>
                  <td>실시간 상호작용, 전문성 어필</td>
                  <td>사전 등록으로 리드 확보, 녹화본 재활용</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 콘텐츠 캘린더 ─── */}
            <h2 data-aos="fade-up">3. 콘텐츠 캘린더</h2>

            <p data-aos="fade-up">
              콘텐츠 캘린더는 콘텐츠를 체계적으로 기획하고 관리하기 위한 핵심 도구입니다.
              일관된 콘텐츠 발행과 팀 협업을 가능하게 합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>콘텐츠 캘린더 구성 요소</h3>
              <ul>
                <li><strong>발행 일자</strong>: 콘텐츠 발행 날짜와 시간을 지정합니다.</li>
                <li><strong>콘텐츠 유형</strong>: 블로그, 영상, 인포그래픽 등 형식을 지정합니다.</li>
                <li><strong>주제/제목</strong>: 콘텐츠의 주제와 가제목을 기록합니다.</li>
                <li><strong>타겟 키워드</strong>: SEO 타겟 키워드를 명시합니다.</li>
                <li><strong>배포 채널</strong>: 블로그, SNS, 이메일 등 배포 경로를 지정합니다.</li>
                <li><strong>담당자</strong>: 콘텐츠 제작 및 발행 담당자를 지정합니다.</li>
                <li><strong>진행 상태</strong>: 기획, 작성 중, 검수, 완료 등 상태를 추적합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>도구</th><th>특징</th><th>적합한 팀</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Notion</strong></td>
                  <td>유연한 데이터베이스, 협업 기능</td>
                  <td>소규모 팀, 스타트업</td>
                </tr>
                <tr>
                  <td><strong>Trello</strong></td>
                  <td>칸반 보드 방식, 직관적 UI</td>
                  <td>프로젝트 관리 중심 팀</td>
                </tr>
                <tr>
                  <td><strong>Google Sheets</strong></td>
                  <td>무료, 쉬운 공유, 커스터마이징</td>
                  <td>예산이 제한적인 팀</td>
                </tr>
                <tr>
                  <td><strong>CoSchedule</strong></td>
                  <td>마케팅 전용, 소셜 예약 통합</td>
                  <td>콘텐츠 마케팅 전문 팀</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 4. 스토리텔링 ─── */}
            <h2 data-aos="fade-up">4. 스토리텔링</h2>

            <p data-aos="fade-up">
              스토리텔링은 브랜드의 메시지를 감성적으로 전달하여 고객의 공감과 기억에 남는
              경험을 만드는 핵심 기법입니다. 데이터와 사실만으로는 전달할 수 없는
              감정적 연결을 만들어냅니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>효과적인 스토리텔링 구조</h3>
              <ul>
                <li><strong>주인공 설정</strong>: 타겟 고객이 공감할 수 있는 주인공(고객 페르소나)을 설정합니다.</li>
                <li><strong>갈등/문제 제시</strong>: 주인공이 겪는 문제나 도전을 생생하게 묘사합니다.</li>
                <li><strong>해결 과정</strong>: 브랜드/제품이 어떻게 문제를 해결하는지 보여줍니다.</li>
                <li><strong>변화/결과</strong>: 문제 해결 후의 긍정적 변화와 성과를 제시합니다.</li>
                <li><strong>행동 촉구</strong>: 독자가 다음 행동을 취하도록 유도합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>스토리텔링 유형</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>브랜드 스토리</strong></td>
                  <td>브랜드의 탄생 배경, 미션, 가치관</td>
                  <td>창업자의 여정, 브랜드 철학</td>
                </tr>
                <tr>
                  <td><strong>고객 성공 사례</strong></td>
                  <td>실제 고객의 문제 해결 경험</td>
                  <td>비포/애프터, 인터뷰, 후기</td>
                </tr>
                <tr>
                  <td><strong>데이터 스토리</strong></td>
                  <td>데이터를 내러티브로 전환</td>
                  <td>인포그래픽, 리서치 리포트</td>
                </tr>
                <tr>
                  <td><strong>비하인드 스토리</strong></td>
                  <td>제품/서비스의 제작 과정</td>
                  <td>팀 소개, 제작 과정 공개</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. 콘텐츠 배포 전략 ─── */}
            <h2 data-aos="fade-up">5. 콘텐츠 배포 전략</h2>

            <p data-aos="fade-up">
              아무리 좋은 콘텐츠도 적절한 배포 전략 없이는 효과를 발휘하기 어렵습니다.
              체계적인 배포 전략으로 콘텐츠의 도달 범위와 임팩트를 극대화합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>채널 유형</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>자사 미디어 (Owned)</strong></td>
                  <td>브랜드가 직접 운영하는 채널</td>
                  <td>블로그, 웹사이트, 뉴스레터, SNS 계정</td>
                </tr>
                <tr>
                  <td><strong>유료 미디어 (Paid)</strong></td>
                  <td>비용을 지불하고 노출하는 채널</td>
                  <td>소셜 광고, 네이티브 광고, 스폰서드 콘텐츠</td>
                </tr>
                <tr>
                  <td><strong>획득 미디어 (Earned)</strong></td>
                  <td>자연스럽게 얻은 노출</td>
                  <td>언론 보도, 바이럴 공유, 고객 후기, 게스트 포스팅</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>콘텐츠 리퍼포징 (Repurposing) 전략</h3>
              <ul>
                <li>블로그 포스트를 인포그래픽으로 변환합니다.</li>
                <li>웨비나 녹화본을 짧은 영상 클립으로 편집합니다.</li>
                <li>긴 가이드를 시리즈 이메일로 분할합니다.</li>
                <li>팟캐스트 에피소드를 블로그 포스트로 정리합니다.</li>
                <li>데이터 리서치를 소셜 미디어 카드 뉴스로 제작합니다.</li>
              </ul>
            </div>

            {/* ─── 6. ROI 측정 ─── */}
            <h2 data-aos="fade-up">6. ROI 측정</h2>

            <p data-aos="fade-up">
              콘텐츠 마케팅의 성과를 정량적으로 측정하여 전략을 지속적으로 개선합니다.
              단계별 KPI를 설정하고 정기적으로 모니터링하는 것이 중요합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>측정 영역</th><th>주요 지표</th><th>측정 도구</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>트래픽</strong></td>
                  <td>페이지뷰, 유니크 방문자, 세션 수</td>
                  <td>Google Analytics</td>
                </tr>
                <tr>
                  <td><strong>참여도</strong></td>
                  <td>체류 시간, 이탈률, 스크롤 깊이, 소셜 공유</td>
                  <td>GA, 소셜 분석 도구</td>
                </tr>
                <tr>
                  <td><strong>리드 생성</strong></td>
                  <td>양식 제출, 이메일 구독, 다운로드 수</td>
                  <td>CRM, 마케팅 자동화 도구</td>
                </tr>
                <tr>
                  <td><strong>전환</strong></td>
                  <td>구매, 가입, 상담 신청</td>
                  <td>GA 전환 추적, 어트리뷰션 모델</td>
                </tr>
                <tr>
                  <td><strong>SEO 성과</strong></td>
                  <td>검색 순위, 오가닉 트래픽, 백링크 수</td>
                  <td>Google Search Console, Ahrefs</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>콘텐츠 마케팅</strong>은 고객 여정 단계별로 가치 있는 콘텐츠를 제공하는 전략이다.</li>
                <li>블로그, 영상, 인포그래픽, 팟캐스트 등 <strong>다양한 유형</strong>을 전략적으로 활용한다.</li>
                <li><strong>콘텐츠 캘린더</strong>로 일관된 콘텐츠 발행과 팀 협업을 관리한다.</li>
                <li><strong>스토리텔링</strong>으로 고객과 감성적 연결을 만들어 브랜드 가치를 전달한다.</li>
                <li>자사/유료/획득 미디어를 활용한 <strong>배포 전략</strong>과 리퍼포징이 중요하다.</li>
                <li>트래픽, 참여도, 리드, 전환 등 <strong>KPI 기반 ROI 측정</strong>으로 성과를 개선한다.</li>
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

export default DigitalContent;
