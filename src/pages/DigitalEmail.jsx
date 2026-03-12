import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalEmail = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="이메일 마케팅"
        description="효과적인 이메일 캠페인 설계와 자동화 - 리스트 구축, 이메일 디자인, A/B 테스트, 성과 지표 분석"
        path="/digital/email"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>이메일 마케팅</h1>
          <p>효과적인 이메일 캠페인 설계부터 자동화까지 체계적으로 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. 이메일 마케팅 기초 ─── */}
            <h2 data-aos="fade-up">1. 이메일 마케팅 기초</h2>

            <p data-aos="fade-up">
              <strong>이메일 마케팅</strong>은 가장 높은 ROI를 자랑하는 디지털 마케팅 채널 중 하나입니다.
              평균적으로 1달러 투자당 42달러의 수익을 창출하며, 고객과의 직접적인 소통 채널로서
              충성도 구축과 전환에 매우 효과적입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>이메일 마케팅의 장점</h3>
              <ul>
                <li><strong>높은 ROI</strong>: 다른 채널 대비 가장 높은 투자 수익률을 보입니다.</li>
                <li><strong>개인화</strong>: 수신자별 맞춤 메시지 전달이 가능합니다.</li>
                <li><strong>측정 가능성</strong>: 오픈율, 클릭률, 전환율 등 정확한 성과 측정이 가능합니다.</li>
                <li><strong>자산 소유</strong>: SNS와 달리 이메일 리스트는 자사가 소유하는 자산입니다.</li>
                <li><strong>자동화</strong>: 트리거 기반 자동 이메일로 효율적 운영이 가능합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>이메일 유형</th><th>목적</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>프로모션 이메일</strong></td>
                  <td>제품/서비스 홍보, 할인 안내</td>
                  <td>세일 안내, 신제품 출시, 쿠폰 발송</td>
                </tr>
                <tr>
                  <td><strong>뉴스레터</strong></td>
                  <td>정기적 정보 제공, 관계 유지</td>
                  <td>주간/월간 뉴스레터, 업계 소식</td>
                </tr>
                <tr>
                  <td><strong>트랜잭션 이메일</strong></td>
                  <td>거래 관련 정보 전달</td>
                  <td>주문 확인, 배송 안내, 비밀번호 재설정</td>
                </tr>
                <tr>
                  <td><strong>라이프사이클 이메일</strong></td>
                  <td>고객 여정 단계별 소통</td>
                  <td>환영 이메일, 온보딩, 재참여 이메일</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 2. 이메일 리스트 구축 ─── */}
            <h2 data-aos="fade-up">2. 이메일 리스트 구축</h2>

            <p data-aos="fade-up">
              이메일 마케팅의 성패는 양질의 구독자 리스트에 달려 있습니다.
              구매한 리스트가 아닌, 직접 동의를 받은(옵트인) 리스트가 핵심입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>리스트 구축 전략</h3>
              <ul>
                <li><strong>리드 마그넷</strong>: 이북, 체크리스트, 템플릿 등 가치 있는 무료 자료를 이메일 구독과 교환합니다.</li>
                <li><strong>팝업/슬라이드인</strong>: 웹사이트에서 적절한 타이밍에 구독 폼을 노출합니다.</li>
                <li><strong>콘텐츠 업그레이드</strong>: 블로그 포스트의 심화 자료를 구독자에게만 제공합니다.</li>
                <li><strong>소셜 미디어 활용</strong>: SNS에서 뉴스레터 구독을 유도합니다.</li>
                <li><strong>이벤트/웨비나</strong>: 사전 등록 과정에서 이메일을 수집합니다.</li>
                <li><strong>체크아웃 과정</strong>: 구매 과정에서 마케팅 이메일 동의를 받습니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>세그멘테이션 기준</th><th>설명</th><th>활용 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>인구통계</strong></td>
                  <td>나이, 성별, 위치</td>
                  <td>지역별 이벤트 안내, 연령대별 추천</td>
                </tr>
                <tr>
                  <td><strong>행동 기반</strong></td>
                  <td>구매 이력, 사이트 활동</td>
                  <td>장바구니 이탈자에게 리마인드 이메일</td>
                </tr>
                <tr>
                  <td><strong>참여 수준</strong></td>
                  <td>오픈율, 클릭 빈도</td>
                  <td>비활성 구독자 재참여 캠페인</td>
                </tr>
                <tr>
                  <td><strong>관심사</strong></td>
                  <td>구독 시 선택한 관심 분야</td>
                  <td>관심 분야별 맞춤 콘텐츠 발송</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 3. 이메일 디자인 ─── */}
            <h2 data-aos="fade-up">3. 이메일 디자인</h2>

            <p data-aos="fade-up">
              효과적인 이메일 디자인은 수신자의 관심을 끌고, 핵심 메시지를 전달하며,
              원하는 행동을 유도합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>디자인 요소</th><th>가이드라인</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>제목 (Subject Line)</strong></td>
                  <td>40자 이내, 호기심 유발, 개인화 요소 포함, 스팸 단어 회피</td>
                </tr>
                <tr>
                  <td><strong>프리헤더</strong></td>
                  <td>제목을 보완하는 부가 설명, 90자 이내</td>
                </tr>
                <tr>
                  <td><strong>레이아웃</strong></td>
                  <td>단일 컬럼 권장, 모바일 반응형, 600px 이내 너비</td>
                </tr>
                <tr>
                  <td><strong>이미지</strong></td>
                  <td>텍스트:이미지 = 6:4, alt 텍스트 필수, 적절한 파일 크기</td>
                </tr>
                <tr>
                  <td><strong>CTA 버튼</strong></td>
                  <td>명확한 액션 텍스트, 대비 색상, 44px 이상 터치 영역</td>
                </tr>
                <tr>
                  <td><strong>푸터</strong></td>
                  <td>수신거부 링크, 발신자 정보, 개인정보 처리 방침</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>효과적인 제목 작성 공식</h3>
              <ul>
                <li><strong>숫자 활용</strong>: "매출을 2배로 올리는 5가지 이메일 전략"</li>
                <li><strong>긴급성</strong>: "오늘 자정까지! 30% 할인 마감 임박"</li>
                <li><strong>개인화</strong>: "[이름]님, 맞춤 추천 상품이 도착했습니다"</li>
                <li><strong>질문형</strong>: "이메일 마케팅, 아직도 안 하고 계시나요?"</li>
                <li><strong>호기심</strong>: "마케터들이 절대 말해주지 않는 비밀"</li>
              </ul>
            </div>

            {/* ─── 4. 자동화 시퀀스 ─── */}
            <h2 data-aos="fade-up">4. 자동화 시퀀스</h2>

            <p data-aos="fade-up">
              이메일 자동화 시퀀스는 특정 트리거(행동, 시간)를 기반으로 미리 설정된
              이메일이 자동으로 발송되는 워크플로우입니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>시퀀스 유형</th><th>트리거</th><th>구성 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>환영 시퀀스</strong></td>
                  <td>뉴스레터 구독</td>
                  <td>Day 0: 환영 + 리드 마그넷 &rarr; Day 2: 브랜드 소개 &rarr; Day 5: 인기 콘텐츠 안내</td>
                </tr>
                <tr>
                  <td><strong>온보딩 시퀀스</strong></td>
                  <td>회원가입/제품 구매</td>
                  <td>Day 0: 시작 가이드 &rarr; Day 3: 핵심 기능 안내 &rarr; Day 7: 활용 팁</td>
                </tr>
                <tr>
                  <td><strong>장바구니 이탈</strong></td>
                  <td>장바구니에 상품 담고 이탈</td>
                  <td>1시간 후: 리마인드 &rarr; 24시간 후: 혜택 제공 &rarr; 72시간 후: 최종 안내</td>
                </tr>
                <tr>
                  <td><strong>재참여 시퀀스</strong></td>
                  <td>30일 이상 미활동</td>
                  <td>Day 0: "돌아와 주세요" &rarr; Day 7: 특별 혜택 &rarr; Day 14: 최종 안내</td>
                </tr>
                <tr>
                  <td><strong>교육 시퀀스</strong></td>
                  <td>리드 마그넷 다운로드</td>
                  <td>Day 0: 자료 전달 &rarr; Day 3: 관련 팁 &rarr; Day 7: 서비스 소개</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. A/B 테스트 ─── */}
            <h2 data-aos="fade-up">5. A/B 테스트</h2>

            <p data-aos="fade-up">
              A/B 테스트는 이메일의 두 가지 버전을 비교하여 더 효과적인 요소를 찾아내는 방법입니다.
              데이터 기반의 의사결정으로 이메일 성과를 지속적으로 개선합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>테스트 요소</th><th>테스트 예시</th><th>측정 지표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>제목</strong></td>
                  <td>질문형 vs 선언형, 이모지 포함 vs 미포함</td>
                  <td>오픈율</td>
                </tr>
                <tr>
                  <td><strong>발송 시간</strong></td>
                  <td>오전 9시 vs 오후 2시, 화요일 vs 목요일</td>
                  <td>오픈율, 클릭률</td>
                </tr>
                <tr>
                  <td><strong>CTA</strong></td>
                  <td>버튼 색상, 텍스트, 위치, 개수</td>
                  <td>클릭률</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠</strong></td>
                  <td>짧은 본문 vs 긴 본문, 이미지 중심 vs 텍스트 중심</td>
                  <td>클릭률, 전환율</td>
                </tr>
                <tr>
                  <td><strong>발신자 이름</strong></td>
                  <td>회사명 vs 담당자 이름</td>
                  <td>오픈율</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>A/B 테스트 실행 팁</h3>
              <ul>
                <li>한 번에 하나의 변수만 테스트합니다.</li>
                <li>통계적으로 유의미한 결과를 얻을 수 있는 충분한 샘플 크기를 확보합니다.</li>
                <li>최소 24~48시간의 테스트 기간을 유지합니다.</li>
                <li>테스트 결과를 문서화하고 향후 캠페인에 반영합니다.</li>
              </ul>
            </div>

            {/* ─── 6. 성과 지표 ─── */}
            <h2 data-aos="fade-up">6. 성과 지표 (오픈율/클릭률/전환율)</h2>

            <p data-aos="fade-up">
              이메일 마케팅의 핵심 성과 지표를 이해하고, 업계 벤치마크와 비교하여
              캠페인 성과를 평가하고 개선합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>지표</th><th>계산 방법</th><th>업계 평균</th><th>개선 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>오픈율 (Open Rate)</strong></td>
                  <td>오픈 수 / 발송 수 x 100</td>
                  <td>20~25%</td>
                  <td>제목 최적화, 발송 시간 조정, 발신자 인지도 강화</td>
                </tr>
                <tr>
                  <td><strong>클릭률 (CTR)</strong></td>
                  <td>클릭 수 / 발송 수 x 100</td>
                  <td>2.5~3.5%</td>
                  <td>CTA 개선, 콘텐츠 관련성 향상, 개인화</td>
                </tr>
                <tr>
                  <td><strong>전환율</strong></td>
                  <td>전환 수 / 클릭 수 x 100</td>
                  <td>1~5%</td>
                  <td>랜딩 페이지 최적화, 오퍼 개선, 세그멘테이션</td>
                </tr>
                <tr>
                  <td><strong>이탈률 (Bounce Rate)</strong></td>
                  <td>반송 수 / 발송 수 x 100</td>
                  <td>2% 미만</td>
                  <td>리스트 정리, 더블 옵트인 적용</td>
                </tr>
                <tr>
                  <td><strong>수신거부율</strong></td>
                  <td>수신거부 수 / 발송 수 x 100</td>
                  <td>0.5% 미만</td>
                  <td>발송 빈도 조절, 콘텐츠 관련성 향상</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>이메일 마케팅</strong>은 가장 높은 ROI를 자랑하는 디지털 마케팅 채널이다.</li>
                <li>옵트인 기반의 <strong>양질의 리스트 구축</strong>과 세그멘테이션이 성공의 기초이다.</li>
                <li>모바일 반응형 <strong>이메일 디자인</strong>과 매력적인 제목이 오픈율을 좌우한다.</li>
                <li><strong>자동화 시퀀스</strong>로 환영, 온보딩, 장바구니 이탈 등을 효율적으로 관리한다.</li>
                <li><strong>A/B 테스트</strong>를 통해 데이터 기반으로 지속적인 성과 개선을 추구한다.</li>
                <li>오픈율, 클릭률, 전환율 등 <strong>핵심 지표</strong>를 모니터링하고 최적화한다.</li>
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

export default DigitalEmail;
