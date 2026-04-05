import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const DigitalInfluencer = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="인플루언서 마케팅"
        description="인플루언서 협업과 캠페인 관리 - 유형별 전략, 캠페인 기획, 성과 측정, 법적 고려사항"
        path="/digital/influencer"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>인플루언서 마케팅</h1>
          <p>인플루언서와의 효과적인 협업 전략과 캠페인 관리를 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {/* ─── 1. 인플루언서 마케팅 개요 ─── */}
            <h2 data-aos="fade-up">1. 인플루언서 마케팅 개요</h2>

            <p data-aos="fade-up">
              <strong>인플루언서 마케팅</strong>은 소셜 미디어에서 영향력을 가진 개인(인플루언서)과
              협업하여 브랜드 메시지를 전달하고, 타겟 오디언스의 인지도, 신뢰도, 구매 행동에
              영향을 미치는 마케팅 전략입니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>인플루언서 마케팅이 효과적인 이유</h3>
              <ul>
                <li><strong>신뢰 기반</strong>: 인플루언서의 추천은 브랜드 광고보다 높은 신뢰를 받습니다.</li>
                <li><strong>정확한 타겟팅</strong>: 니치 오디언스에 직접 도달할 수 있습니다.</li>
                <li><strong>콘텐츠 확보</strong>: 인플루언서가 제작한 양질의 브랜디드 콘텐츠를 확보합니다.</li>
                <li><strong>소셜 증거</strong>: 인플루언서의 사용/추천이 소셜 프루프로 작용합니다.</li>
                <li><strong>높은 참여율</strong>: 전통 광고 대비 높은 참여율과 공유율을 보입니다.</li>
              </ul>
            </div>

            {/* ─── 2. 인플루언서 유형 ─── */}
            <h2 data-aos="fade-up">2. 인플루언서 유형 (메가/매크로/마이크로/나노)</h2>

            <p data-aos="fade-up">
              인플루언서는 팔로워 규모와 영향력 범위에 따라 구분되며,
              각 유형별로 장단점과 적합한 캠페인 목표가 다릅니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>유형</th><th>팔로워 규모</th><th>특징</th><th>비용</th><th>적합한 목표</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>메가 인플루언서</strong></td>
                  <td>100만 이상</td>
                  <td>높은 인지도, 넓은 도달 범위, 낮은 참여율</td>
                  <td>매우 높음</td>
                  <td>대규모 인지도 캠페인</td>
                </tr>
                <tr>
                  <td><strong>매크로 인플루언서</strong></td>
                  <td>10만~100만</td>
                  <td>전문 분야 영향력, 양질의 콘텐츠 제작</td>
                  <td>높음</td>
                  <td>브랜드 인지도, 콘텐츠 확보</td>
                </tr>
                <tr>
                  <td><strong>마이크로 인플루언서</strong></td>
                  <td>1만~10만</td>
                  <td>높은 참여율, 니치 오디언스, 진정성 있는 콘텐츠</td>
                  <td>중간</td>
                  <td>참여율 향상, 전환</td>
                </tr>
                <tr>
                  <td><strong>나노 인플루언서</strong></td>
                  <td>1,000~1만</td>
                  <td>매우 높은 참여율, 지역/커뮤니티 영향력</td>
                  <td>낮음</td>
                  <td>지역 마케팅, 진정성 있는 리뷰</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>인플루언서 선정 기준</h3>
              <ul>
                <li><strong>브랜드 적합성</strong>: 브랜드 가치와 톤앤매너가 일치하는지 확인합니다.</li>
                <li><strong>오디언스 분석</strong>: 팔로워의 인구통계, 관심사가 타겟과 일치하는지 확인합니다.</li>
                <li><strong>참여율</strong>: 팔로워 대비 좋아요, 댓글 등 실제 참여율을 확인합니다.</li>
                <li><strong>콘텐츠 품질</strong>: 과거 콘텐츠의 품질과 일관성을 평가합니다.</li>
                <li><strong>진정성</strong>: 가짜 팔로워, 봇 비율이 낮은지 검증합니다.</li>
              </ul>
            </div>

            {/* ─── 3. 협업 전략 ─── */}
            <h2 data-aos="fade-up">3. 협업 전략</h2>

            <p data-aos="fade-up">
              인플루언서와의 협업 방식은 다양하며, 캠페인 목표와 예산에 따라
              최적의 협업 형태를 선택해야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>협업 유형</th><th>설명</th><th>장점</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>스폰서드 포스트</strong></td>
                  <td>브랜드 제품/서비스를 소개하는 유료 게시물</td>
                  <td>명확한 메시지 전달, 통제 가능</td>
                </tr>
                <tr>
                  <td><strong>제품 시딩</strong></td>
                  <td>제품을 무료 제공하고 솔직한 리뷰 유도</td>
                  <td>낮은 비용, 진정성 있는 후기</td>
                </tr>
                <tr>
                  <td><strong>앰배서더 프로그램</strong></td>
                  <td>장기적 브랜드 대사 계약</td>
                  <td>일관된 브랜딩, 깊은 관계 구축</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 콜라보</strong></td>
                  <td>인플루언서와 함께 콘텐츠 공동 제작</td>
                  <td>창의적 콘텐츠, 양쪽 오디언스 공유</td>
                </tr>
                <tr>
                  <td><strong>어필리에이트</strong></td>
                  <td>전용 할인코드/링크로 성과 기반 수수료 지급</td>
                  <td>성과 측정 용이, 리스크 낮음</td>
                </tr>
                <tr>
                  <td><strong>이벤트 참여</strong></td>
                  <td>브랜드 이벤트에 인플루언서 초대</td>
                  <td>실시간 콘텐츠, 체험 공유</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 4. 캠페인 기획 ─── */}
            <h2 data-aos="fade-up">4. 캠페인 기획</h2>

            <p data-aos="fade-up">
              성공적인 인플루언서 마케팅 캠페인을 위해서는 체계적인 기획과 실행 프로세스가 필요합니다.
            </p>

            <div className="callout-box" data-aos="fade-up">
              <h3>캠페인 기획 프로세스</h3>
              <ul>
                <li><strong>1단계 - 목표 설정</strong>: 인지도, 참여, 트래픽, 전환 등 명확한 KPI를 설정합니다.</li>
                <li><strong>2단계 - 예산 책정</strong>: 인플루언서 비용, 제품 비용, 광고 부스팅 비용 등을 산정합니다.</li>
                <li><strong>3단계 - 인플루언서 선정</strong>: 리서치, 컨택, 조건 협상을 진행합니다.</li>
                <li><strong>4단계 - 브리프 작성</strong>: 핵심 메시지, 가이드라인, 일정, 해시태그 등을 명시합니다.</li>
                <li><strong>5단계 - 콘텐츠 검수</strong>: 게시 전 콘텐츠를 검토하고 피드백을 제공합니다.</li>
                <li><strong>6단계 - 라이브 및 모니터링</strong>: 콘텐츠 게시 후 실시간 성과를 모니터링합니다.</li>
                <li><strong>7단계 - 성과 분석</strong>: 캠페인 종료 후 KPI 달성 여부를 평가합니다.</li>
              </ul>
            </div>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>브리프 포함 항목</th><th>설명</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>캠페인 개요</strong></td>
                  <td>브랜드 소개, 캠페인 목적, 타겟 오디언스</td>
                </tr>
                <tr>
                  <td><strong>핵심 메시지</strong></td>
                  <td>반드시 전달해야 할 메시지, 키워드</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 가이드</strong></td>
                  <td>포맷, 톤, DO&DON'T, 필수 포함 요소</td>
                </tr>
                <tr>
                  <td><strong>일정</strong></td>
                  <td>콘텐츠 제출 기한, 게시 일정, 수정 기한</td>
                </tr>
                <tr>
                  <td><strong>법적 요구사항</strong></td>
                  <td>광고 표시 의무, 저작권, 사용 권한</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 5. 성과 측정 ─── */}
            <h2 data-aos="fade-up">5. 성과 측정</h2>

            <p data-aos="fade-up">
              인플루언서 마케팅의 성과를 정량적/정성적으로 측정하여
              투자 효율성을 평가하고 향후 캠페인을 개선합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>측정 지표</th><th>계산 방법</th><th>의미</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>도달 (Reach)</strong></td>
                  <td>콘텐츠를 본 고유 사용자 수</td>
                  <td>메시지의 확산 범위</td>
                </tr>
                <tr>
                  <td><strong>참여율 (Engagement Rate)</strong></td>
                  <td>(좋아요+댓글+공유) / 팔로워 x 100</td>
                  <td>오디언스의 관심도와 반응</td>
                </tr>
                <tr>
                  <td><strong>EMV (Earned Media Value)</strong></td>
                  <td>동일 도달을 유료 광고로 달성 시 예상 비용</td>
                  <td>캠페인의 미디어 가치</td>
                </tr>
                <tr>
                  <td><strong>CPE (Cost Per Engagement)</strong></td>
                  <td>총 비용 / 참여 수</td>
                  <td>참여 1건당 비용 효율</td>
                </tr>
                <tr>
                  <td><strong>전환/매출</strong></td>
                  <td>전용 링크/코드를 통한 전환 추적</td>
                  <td>직접적인 비즈니스 성과</td>
                </tr>
                <tr>
                  <td><strong>브랜드 감성</strong></td>
                  <td>댓글/멘션의 감성 분석</td>
                  <td>브랜드에 대한 오디언스 감정</td>
                </tr>
              </tbody>
            </table>

            {/* ─── 6. 법적 고려사항 ─── */}
            <h2 data-aos="fade-up">6. 법적 고려사항</h2>

            <p data-aos="fade-up">
              인플루언서 마케팅은 관련 법규와 가이드라인을 준수해야 합니다.
              특히 광고 표시 의무와 공정거래 관련 규정을 반드시 지켜야 합니다.
            </p>

            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr><th>법적 영역</th><th>주요 내용</th><th>실행 방법</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>광고 표시 의무</strong></td>
                  <td>유료 협찬/광고 사실을 명확히 표시해야 함</td>
                  <td>"광고", "유료광고포함", "#ad" 등 표시, 콘텐츠 초반에 배치</td>
                </tr>
                <tr>
                  <td><strong>공정거래법</strong></td>
                  <td>경제적 대가 관계 공개 의무 (한국 공정거래위원회)</td>
                  <td>"대가를 받고 작성한 글입니다" 등 명시</td>
                </tr>
                <tr>
                  <td><strong>허위/과장 광고</strong></td>
                  <td>사실에 기반하지 않은 과장 표현 금지</td>
                  <td>효과/성능 관련 근거 자료 확보, 사실에 기반한 표현 사용</td>
                </tr>
                <tr>
                  <td><strong>저작권</strong></td>
                  <td>콘텐츠 소유권과 사용 권한 명확히</td>
                  <td>계약서에 콘텐츠 사용 범위, 기간, 2차 활용 권한 명시</td>
                </tr>
                <tr>
                  <td><strong>개인정보보호</strong></td>
                  <td>이벤트 참여자 개인정보 처리</td>
                  <td>개인정보 수집 동의, 처리 방침 안내</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box" data-aos="fade-up">
              <h3>핵심 정리</h3>
              <ul>
                <li><strong>인플루언서 마케팅</strong>은 신뢰 기반의 타겟 도달과 콘텐츠 확보에 효과적이다.</li>
                <li>메가/매크로/마이크로/나노 <strong>유형별 특성</strong>을 이해하고 목표에 맞게 선정한다.</li>
                <li>스폰서드 포스트, 앰배서더, 어필리에이트 등 다양한 <strong>협업 형태</strong>를 활용한다.</li>
                <li>체계적인 <strong>캠페인 기획</strong>과 상세한 브리프가 성공의 기초이다.</li>
                <li>도달, 참여율, EMV, 전환 등 <strong>다각적 성과 측정</strong>으로 ROI를 평가한다.</li>
                <li><strong>광고 표시 의무</strong>, 공정거래법 등 법적 규정을 반드시 준수한다.</li>
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

export default DigitalInfluencer;
