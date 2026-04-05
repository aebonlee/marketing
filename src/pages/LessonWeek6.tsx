import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek6 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 6 - 제품 전략"
        description="제품의 개념과 분류, 제품 수명 주기(PLC), 신제품 개발 프로세스, 브랜딩 전략을 학습합니다."
        path="/lessons/week6"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 6: 제품 전략</h1>
          <p>제품의 개념부터 수명 주기, 신제품 개발, 브랜딩까지 전략적 제품 관리를 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 제품의 개념과 분류</h2>
            <p data-aos="fade-up">
              제품(Product)이란 고객의 필요와 욕구를 충족시키기 위해 시장에 제공되는 모든 것을 의미합니다.
              유형의 재화뿐만 아니라 서비스, 경험, 아이디어 등도 포함됩니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              제품의 3가지 수준
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>수준</th>
                  <th>설명</th>
                  <th>예시 (스마트폰)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>핵심 제품 (Core Product)</td>
                  <td>소비자가 실제로 구매하는 핵심 편익</td>
                  <td>커뮤니케이션, 정보 접근</td>
                </tr>
                <tr>
                  <td>실체 제품 (Actual Product)</td>
                  <td>품질, 디자인, 브랜드, 패키징</td>
                  <td>디스플레이, 카메라, OS, 브랜드</td>
                </tr>
                <tr>
                  <td>확장 제품 (Augmented Product)</td>
                  <td>부가 서비스, AS, 보증</td>
                  <td>보증 기간, 클라우드 저장소, 고객센터</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              제품 분류
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>분류</th>
                  <th>유형</th>
                  <th>특징</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={4}><strong>소비재</strong></td>
                  <td>편의품</td>
                  <td>저관여, 빈번 구매, 저가</td>
                  <td>음료, 과자, 세제</td>
                </tr>
                <tr>
                  <td>선매품</td>
                  <td>비교 구매, 중간 가격</td>
                  <td>의류, 가전, 가구</td>
                </tr>
                <tr>
                  <td>전문품</td>
                  <td>높은 브랜드 충성도, 고가</td>
                  <td>명품, 고급 자동차</td>
                </tr>
                <tr>
                  <td>비탐색품</td>
                  <td>소비자가 잘 모르거나 구매 의사 낮음</td>
                  <td>보험, 장례 서비스</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">2. 제품 수명 주기 (PLC)</h2>
            <p data-aos="fade-up">
              제품 수명 주기(Product Life Cycle)는 제품이 시장에 출시된 후 쇠퇴할 때까지의 과정을 나타냅니다.
              각 단계에 따라 적절한 마케팅 전략을 수립해야 합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>특징</th>
                  <th>마케팅 전략</th>
                  <th>목표</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>도입기</strong></td>
                  <td>매출 낮음, 높은 마케팅 비용, 적자 가능</td>
                  <td>인지도 구축, 초기 사용자 확보, 시험 사용 유도</td>
                  <td>제품 인지도 확산</td>
                </tr>
                <tr>
                  <td><strong>성장기</strong></td>
                  <td>매출 급증, 경쟁자 진입 시작, 이익 증가</td>
                  <td>시장 점유율 확대, 제품 개선, 유통 확대</td>
                  <td>시장 점유율 극대화</td>
                </tr>
                <tr>
                  <td><strong>성숙기</strong></td>
                  <td>매출 정체, 경쟁 심화, 이익 감소 시작</td>
                  <td>차별화, 시장 다변화, 판촉 강화</td>
                  <td>이익 극대화, 점유율 방어</td>
                </tr>
                <tr>
                  <td><strong>쇠퇴기</strong></td>
                  <td>매출 감소, 이익 급감, 경쟁자 퇴출</td>
                  <td>비용 절감, 수확 전략, 철수 검토</td>
                  <td>비용 최소화, 잔여 수익 확보</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>PLC 활용 시 주의점:</strong> 모든 제품이 동일한 PLC 패턴을 따르지는 않습니다. 패드(Fad) 제품은 빠르게 성장 후 급락하고, 패션 제품은 주기적으로 순환하며, 클래식 제품은 장기간 성숙기를 유지합니다.</p>
            </div>

            <h2 data-aos="fade-up">3. 신제품 개발 프로세스</h2>
            <p data-aos="fade-up">
              시장 변화에 대응하고 지속적인 성장을 위해 신제품 개발은 필수적입니다.
              체계적인 프로세스를 통해 실패 위험을 최소화할 수 있습니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>주요 활동</th>
                  <th>핵심 포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. 아이디어 창출</td>
                  <td>내부/외부 원천에서 아이디어 수집</td>
                  <td>브레인스토밍, 고객 피드백, 경쟁사 분석</td>
                </tr>
                <tr>
                  <td>2. 아이디어 선별</td>
                  <td>실현 가능성과 시장성 평가</td>
                  <td>Drop Error와 Go Error 최소화</td>
                </tr>
                <tr>
                  <td>3. 콘셉트 개발/테스트</td>
                  <td>제품 콘셉트 구체화 및 소비자 반응 조사</td>
                  <td>타겟 소비자 대상 콘셉트 테스트</td>
                </tr>
                <tr>
                  <td>4. 마케팅 전략 수립</td>
                  <td>목표시장, 포지셔닝, 마케팅 믹스 계획</td>
                  <td>매출 목표, 예산, 장기 계획</td>
                </tr>
                <tr>
                  <td>5. 사업성 분석</td>
                  <td>매출, 비용, 수익성 예측</td>
                  <td>BEP 분석, ROI 계산</td>
                </tr>
                <tr>
                  <td>6. 제품 개발</td>
                  <td>시제품(프로토타입) 제작</td>
                  <td>기능 테스트, 사용성 검증</td>
                </tr>
                <tr>
                  <td>7. 시장 테스트</td>
                  <td>제한된 지역에서 시험 판매</td>
                  <td>실제 시장 반응 확인, 전략 수정</td>
                </tr>
                <tr>
                  <td>8. 상업화</td>
                  <td>전면 출시 및 대규모 마케팅</td>
                  <td>출시 시기, 지역, 유통 채널 결정</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">4. 브랜딩 전략</h2>
            <p data-aos="fade-up">
              브랜드(Brand)는 제품이나 서비스를 경쟁자와 구별하기 위한 이름, 용어, 디자인, 심볼 또는 이들의 조합입니다.
              강력한 브랜드는 고객 충성도, 프리미엄 가격, 신제품 출시의 성공률을 높입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>브랜딩 전략</th>
                  <th>설명</th>
                  <th>사례</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>개별 브랜드</td>
                  <td>제품마다 독립적인 브랜드명 사용</td>
                  <td>P&G (타이드, 질레트, 팬틴)</td>
                </tr>
                <tr>
                  <td>기업 브랜드</td>
                  <td>모든 제품에 기업 브랜드명 사용</td>
                  <td>삼성 (삼성 갤럭시, 삼성 TV)</td>
                </tr>
                <tr>
                  <td>혼합 브랜드</td>
                  <td>기업 브랜드 + 개별 브랜드 결합</td>
                  <td>네슬레 킷캣, 현대 소나타</td>
                </tr>
                <tr>
                  <td>유통업체 브랜드 (PB)</td>
                  <td>유통업체가 자체 브랜드로 제품 판매</td>
                  <td>이마트 노브랜드, 코스트코 커클랜드</td>
                </tr>
                <tr>
                  <td>브랜드 확장</td>
                  <td>기존 브랜드명으로 새로운 제품 카테고리 진입</td>
                  <td>애플 (아이폰 → 애플워치 → 애플TV+)</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>브랜드 자산(Brand Equity)의 구성 요소:</strong></p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>브랜드 인지도:</strong> 소비자가 브랜드를 인식하고 기억하는 정도</li>
                <li><strong>브랜드 연상:</strong> 브랜드와 관련된 이미지, 감정, 경험</li>
                <li><strong>지각된 품질:</strong> 소비자가 인식하는 전반적 품질 수준</li>
                <li><strong>브랜드 충성도:</strong> 반복 구매와 추천 의향의 강도</li>
              </ul>
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week5" className="lesson-nav-btn prev">
                &#8592; 이전: STP 전략
              </Link>
              <Link to="/lessons/week7" className="lesson-nav-btn next">
                다음: 가격 전략 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek6;
