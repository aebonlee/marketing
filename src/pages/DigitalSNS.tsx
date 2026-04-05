import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalSNS = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="SNS 마케팅"
        description="인스타그램, 유튜브, 틱톡, 블로그 마케팅 전략과 소셜 광고 운영 실무"
        path="/digital/sns"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>SNS 마케팅</h1>
          <p>인스타그램, 유튜브, 틱톡 등 주요 소셜미디어 채널별 마케팅 전략을 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. SNS 마케팅 전략 ─── */}
            <h2 data-aos="fade-up">1. SNS 마케팅 전략</h2>

            <p data-aos="fade-up">
              <strong>SNS 마케팅</strong>은 소셜 네트워크 서비스를 활용하여 브랜드 인지도를 높이고,
              고객과 직접 소통하며, 궁극적으로 비즈니스 성과를 창출하는 마케팅 활동입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>SNS 마케팅 전략 수립 프로세스</h3>
              <ul>
                <li><strong>목표 설정</strong>: 브랜드 인지도, 리드 생성, 매출 증대 등 명확한 목표를 수립합니다.</li>
                <li><strong>타겟 오디언스 분석</strong>: 인구통계, 관심사, 소셜 미디어 사용 패턴을 파악합니다.</li>
                <li><strong>채널 선택</strong>: 타겟에 맞는 최적의 플랫폼을 선정합니다.</li>
                <li><strong>콘텐츠 전략</strong>: 채널별 콘텐츠 유형, 톤앤매너, 발행 주기를 결정합니다.</li>
                <li><strong>KPI 설정</strong>: 팔로워 수, 참여율, 도달 범위, 전환율 등 핵심 지표를 설정합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>플랫폼</th><th>주요 사용자</th><th>콘텐츠 유형</th><th>마케팅 강점</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인스타그램</strong></td>
                  <td>20~30대 중심</td>
                  <td>이미지, 릴스, 스토리</td>
                  <td>비주얼 브랜딩, 인플루언서 협업</td>
                </tr>
                <tr>
                  <td><strong>유튜브</strong></td>
                  <td>전 연령대</td>
                  <td>롱폼/숏폼 영상</td>
                  <td>교육 콘텐츠, 브랜드 스토리텔링</td>
                </tr>
                <tr>
                  <td><strong>틱톡</strong></td>
                  <td>10~20대 중심</td>
                  <td>숏폼 영상, 챌린지</td>
                  <td>바이럴, MZ세대 공략</td>
                </tr>
                <tr>
                  <td><strong>블로그</strong></td>
                  <td>전 연령대</td>
                  <td>텍스트, 이미지 리뷰</td>
                  <td>SEO, 상세 정보 전달</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 인스타그램 마케팅 ─── */}
            <h2 data-aos="fade-up">2. 인스타그램 마케팅</h2>

            <p data-aos="fade-up">
              인스타그램은 비주얼 중심의 소셜 플랫폼으로, 브랜딩과 커뮤니티 구축에 매우 효과적입니다.
              알고리즘 이해와 콘텐츠 최적화가 성공의 열쇠입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>콘텐츠 유형</th><th>특징</th><th>활용 전략</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>피드 게시물</strong></td>
                  <td>정사각형/세로형 이미지, 캐러셀</td>
                  <td>브랜드 일관성 유지, 해시태그 활용</td>
                </tr>
                <tr>
                  <td><strong>릴스 (Reels)</strong></td>
                  <td>최대 90초 숏폼 영상</td>
                  <td>트렌드 활용, 높은 도달률 확보</td>
                </tr>
                <tr>
                  <td><strong>스토리</strong></td>
                  <td>24시간 후 사라지는 콘텐츠</td>
                  <td>일상 공유, 설문/퀴즈로 참여 유도</td>
                </tr>
                <tr>
                  <td><strong>라이브</strong></td>
                  <td>실시간 방송</td>
                  <td>Q&A, 제품 출시, 이벤트 생중계</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>인스타그램 알고리즘 핵심 요소</h3>
              <ul>
                <li><strong>관계 (Relationship)</strong>: 자주 상호작용하는 계정의 콘텐츠가 우선 노출됩니다.</li>
                <li><strong>관심사 (Interest)</strong>: 사용자가 자주 보는 콘텐츠 유형이 더 많이 노출됩니다.</li>
                <li><strong>적시성 (Timeliness)</strong>: 최근 게시된 콘텐츠가 우선순위를 가집니다.</li>
                <li><strong>참여도 (Engagement)</strong>: 좋아요, 댓글, 저장, 공유 등 반응이 높은 콘텐츠가 확산됩니다.</li>
              </ul>
            </div>

            {/* ─── 3. 유튜브 마케팅 ─── */}
            <h2 data-aos="fade-up">3. 유튜브 마케팅</h2>

            <p data-aos="fade-up">
              유튜브는 세계 2위 검색엔진이자 최대 동영상 플랫폼입니다.
              장기적으로 콘텐츠 자산을 쌓아가며 지속적인 트래픽과 브랜드 신뢰를 구축할 수 있습니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>유튜브 채널 운영 전략</h3>
              <ul>
                <li><strong>채널 컨셉 설정</strong>: 명확한 주제와 타겟 오디언스를 정합니다.</li>
                <li><strong>썸네일 최적화</strong>: 높은 CTR을 위해 눈에 띄는 썸네일을 디자인합니다.</li>
                <li><strong>제목과 설명 최적화</strong>: 검색 키워드를 포함한 매력적인 제목을 작성합니다.</li>
                <li><strong>일정한 업로드 주기</strong>: 구독자 기대에 맞는 정기적 콘텐츠를 발행합니다.</li>
                <li><strong>커뮤니티 관리</strong>: 댓글 응답, 커뮤니티 탭 활용으로 팬 소통을 강화합니다.</li>
                <li><strong>쇼츠(Shorts) 활용</strong>: 숏폼 영상으로 신규 시청자 유입을 확대합니다.</li>
              </ul>
            </div>

            {/* ─── 4. 틱톡 마케팅 ─── */}
            <h2 data-aos="fade-up">4. 틱톡 마케팅</h2>

            <p data-aos="fade-up">
              틱톡은 숏폼 영상 기반의 플랫폼으로, MZ세대를 중심으로 폭발적인 성장을 보이고 있습니다.
              바이럴 콘텐츠 제작과 트렌드 활용이 핵심입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>전략</th><th>설명</th><th>팁</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>트렌드 참여</strong></td>
                  <td>유행하는 챌린지, 음원, 효과 활용</td>
                  <td>트렌드에 브랜드 메시지를 자연스럽게 녹여냅니다.</td>
                </tr>
                <tr>
                  <td><strong>해시태그 챌린지</strong></td>
                  <td>브랜드 고유 챌린지 기획</td>
                  <td>참여 장벽을 낮추고 재미 요소를 극대화합니다.</td>
                </tr>
                <tr>
                  <td><strong>크리에이터 협업</strong></td>
                  <td>틱톡 크리에이터와 콜라보</td>
                  <td>크리에이터 스타일에 맞는 자연스러운 광고를 제작합니다.</td>
                </tr>
                <tr>
                  <td><strong>틱톡 광고</strong></td>
                  <td>인피드 광고, 탑뷰 등 유료 광고</td>
                  <td>네이티브 느낌의 광고 소재가 효과적입니다.</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. 블로그 마케팅 ─── */}
            <h2 data-aos="fade-up">5. 블로그 마케팅</h2>

            <p data-aos="fade-up">
              블로그 마케팅은 검색 트래픽 확보와 전문성 구축에 매우 효과적인 채널입니다.
              특히 네이버 블로그는 한국 시장에서 검색 노출에 큰 영향을 미칩니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>블로그 마케팅 핵심 전략</h3>
              <ul>
                <li><strong>키워드 기반 콘텐츠</strong>: 검색량이 있는 키워드를 중심으로 콘텐츠를 기획합니다.</li>
                <li><strong>꾸준한 발행</strong>: 정기적인 콘텐츠 발행으로 블로그 지수를 높입니다.</li>
                <li><strong>양질의 콘텐츠</strong>: 독자에게 실질적 가치를 제공하는 깊이 있는 콘텐츠를 작성합니다.</li>
                <li><strong>이미지/영상 활용</strong>: 시각적 요소를 풍부하게 포함하여 체류 시간을 늘립니다.</li>
                <li><strong>CTA 배치</strong>: 적절한 위치에 행동 유도 버튼/링크를 배치합니다.</li>
              </ul>
            </div>

            {/* ─── 6. 소셜 광고 ─── */}
            <h2 data-aos="fade-up">6. 소셜 광고 (Facebook/Instagram Ads)</h2>

            <p data-aos="fade-up">
              Meta(Facebook/Instagram) 광고 플랫폼은 정교한 타겟팅과 다양한 광고 형식을 제공하여
              효과적인 소셜 광고 캠페인을 운영할 수 있습니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>캠페인 목표</th><th>설명</th><th>적합한 상황</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인지도</strong></td>
                  <td>브랜드 도달 범위 극대화</td>
                  <td>신규 브랜드 론칭, 브랜드 리브랜딩</td>
                </tr>
                <tr>
                  <td><strong>트래픽</strong></td>
                  <td>웹사이트/앱 방문 유도</td>
                  <td>콘텐츠 배포, 이벤트 페이지 방문</td>
                </tr>
                <tr>
                  <td><strong>참여</strong></td>
                  <td>좋아요, 댓글, 공유 증대</td>
                  <td>커뮤니티 활성화, 콘텐츠 바이럴</td>
                </tr>
                <tr>
                  <td><strong>리드 생성</strong></td>
                  <td>잠재고객 정보 수집</td>
                  <td>뉴스레터 구독, 상담 신청</td>
                </tr>
                <tr>
                  <td><strong>전환</strong></td>
                  <td>구매, 가입 등 직접 성과</td>
                  <td>이커머스 매출, 서비스 가입</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>Meta 광고 타겟팅 유형</h3>
              <ul>
                <li><strong>핵심 타겟</strong>: 인구통계, 관심사, 행동 기반 타겟팅</li>
                <li><strong>맞춤 타겟</strong>: 기존 고객 데이터(이메일, 웹사이트 방문자 등) 기반 타겟팅</li>
                <li><strong>유사 타겟</strong>: 기존 고객과 유사한 특성을 가진 신규 잠재고객 타겟팅</li>
              </ul>
            </div>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>SNS 마케팅</strong>은 타겟 오디언스와 채널 특성에 맞는 전략 수립이 핵심이다.</li>
                <li><strong>인스타그램</strong>: 비주얼 브랜딩과 릴스/스토리를 활용한 참여율 극대화가 중요하다.</li>
                <li><strong>유튜브</strong>: 장기적 콘텐츠 자산 구축과 검색 최적화가 핵심이다.</li>
                <li><strong>틱톡</strong>: 트렌드 참여와 바이럴 콘텐츠 제작이 성공의 열쇠이다.</li>
                <li><strong>블로그</strong>: 키워드 기반 콘텐츠로 검색 트래픽을 확보한다.</li>
                <li><strong>소셜 광고</strong>: 정교한 타겟팅과 캠페인 목표에 맞는 최적화가 필수이다.</li>
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

export default DigitalSNS;
