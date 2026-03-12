import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const LessonWeek8 = () => {
  useAOS();

  return (
    <>
      <SEOHead
        title="Week 8 - 유통 전략"
        description="유통 채널의 종류, 유통 경로 설계, 옴니채널 전략, 물류와 공급사슬 관리를 학습합니다."
        path="/lessons/week8"
      />

      <section className="page-header hero-bg">
        <div className="container">
          <h1>Week 8: 유통 전략</h1>
          <p>유통 채널 설계부터 옴니채널 전략, 물류와 공급사슬 관리까지 체계적으로 학습합니다.</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <h2 data-aos="fade-up">1. 유통 채널의 종류</h2>
            <p data-aos="fade-up">
              유통 채널(Distribution Channel)은 제품이 생산자에서 최종 소비자에게 전달되는 경로를 의미합니다.
              유통 채널의 설계는 제품의 시장 접근성과 고객 편의성에 직접적인 영향을 미칩니다.
            </p>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              유통 채널의 수준별 분류
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>채널 수준</th>
                  <th>경로</th>
                  <th>특징</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0단계 (직접 채널)</td>
                  <td>생산자 → 소비자</td>
                  <td>중간상 없음, 높은 통제력, 고비용</td>
                  <td>자사 온라인몰, 직영점, D2C 브랜드</td>
                </tr>
                <tr>
                  <td>1단계</td>
                  <td>생산자 → 소매상 → 소비자</td>
                  <td>소매상 활용, 접근성 확대</td>
                  <td>대형마트, 백화점 입점</td>
                </tr>
                <tr>
                  <td>2단계</td>
                  <td>생산자 → 도매상 → 소매상 → 소비자</td>
                  <td>가장 일반적, 넓은 커버리지</td>
                  <td>일반 소비재, 식품</td>
                </tr>
                <tr>
                  <td>3단계</td>
                  <td>생산자 → 대리점 → 도매상 → 소매상 → 소비자</td>
                  <td>복잡한 구조, 넓은 지역 커버</td>
                  <td>글로벌 브랜드의 해외 유통</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              유통 커버리지 전략
            </h3>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>전략</th>
                  <th>설명</th>
                  <th>적합한 제품</th>
                  <th>사례</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>개방적 유통<br />(Intensive)</td>
                  <td>가능한 많은 매장에 유통</td>
                  <td>편의품, 일상용품</td>
                  <td>코카콜라, 껌, 배터리</td>
                </tr>
                <tr>
                  <td>선택적 유통<br />(Selective)</td>
                  <td>일정 기준을 충족하는 매장만 선택</td>
                  <td>선매품, 가전제품</td>
                  <td>삼성 가전, 나이키</td>
                </tr>
                <tr>
                  <td>전속적 유통<br />(Exclusive)</td>
                  <td>소수의 유통업자에게만 독점 판매권 부여</td>
                  <td>전문품, 고급 브랜드</td>
                  <td>롤렉스, 페라리</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">2. 유통 경로 설계</h2>
            <p data-aos="fade-up">
              효과적인 유통 경로를 설계하기 위해서는 고객의 필요, 채널 목표, 채널 대안을 체계적으로 분석해야 합니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>설계 단계</th>
                  <th>주요 활동</th>
                  <th>고려 사항</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. 고객 분석</td>
                  <td>고객이 원하는 서비스 수준 파악</td>
                  <td>구매 편의성, 배송 속도, 제품 다양성, 부가 서비스</td>
                </tr>
                <tr>
                  <td>2. 채널 목표 설정</td>
                  <td>목표 고객 도달률, 비용 효율성 설정</td>
                  <td>제품 특성, 기업 역량, 경쟁 환경</td>
                </tr>
                <tr>
                  <td>3. 채널 대안 식별</td>
                  <td>가능한 유통 채널 대안 도출</td>
                  <td>중간상 유형, 수, 조건</td>
                </tr>
                <tr>
                  <td>4. 채널 대안 평가</td>
                  <td>경제성, 통제성, 적응성 기준 평가</td>
                  <td>비용 대비 효과, 관리 용이성</td>
                </tr>
                <tr>
                  <td>5. 채널 관리</td>
                  <td>채널 구성원 선발, 교육, 동기부여, 성과 평가</td>
                  <td>채널 갈등 관리, 파트너 관계 유지</td>
                </tr>
              </tbody>
            </table>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>채널 갈등(Channel Conflict):</strong> 동일 유통 시스템 내에서 채널 구성원 간 목표, 역할, 보상 등에 대한 갈등이 발생할 수 있습니다.</p>
              <ul style={{ paddingLeft: '1.5rem', margin: '8px 0 0' }}>
                <li><strong>수직적 갈등:</strong> 제조업자와 유통업자 간 갈등 (예: 가격 정책 불일치)</li>
                <li><strong>수평적 갈등:</strong> 같은 수준의 유통업자 간 갈등 (예: 영역 침범)</li>
                <li><strong>다채널 갈등:</strong> 온라인/오프라인 채널 간 갈등 (가격 차이, 고객 빼앗기)</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">3. 옴니채널 전략</h2>
            <p data-aos="fade-up">
              옴니채널(Omni-Channel)은 온라인과 오프라인의 모든 채널을 통합하여 소비자에게 일관된 경험을 제공하는 전략입니다.
              소비자가 어떤 채널을 이용하든 끊김 없는(Seamless) 구매 경험을 제공하는 것이 핵심입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>유통 전략 진화</th>
                  <th>설명</th>
                  <th>특징</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>싱글채널</td>
                  <td>하나의 판매 채널만 운영</td>
                  <td>오프라인 매장만, 또는 온라인만</td>
                </tr>
                <tr>
                  <td>멀티채널</td>
                  <td>여러 채널을 독립적으로 운영</td>
                  <td>채널 간 연계 부족, 별도 관리</td>
                </tr>
                <tr>
                  <td>크로스채널</td>
                  <td>채널 간 부분적 연계</td>
                  <td>온라인 주문-매장 픽업 등 일부 연계</td>
                </tr>
                <tr>
                  <td>옴니채널</td>
                  <td>모든 채널의 완전한 통합</td>
                  <td>일관된 고객 경험, 통합 데이터 관리</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              옴니채널 주요 서비스
            </h3>
            <ul data-aos="fade-up">
              <li><strong>BOPIS (Buy Online Pick-up In Store):</strong> 온라인 구매 후 매장에서 수령</li>
              <li><strong>BORIS (Buy Online Return In Store):</strong> 온라인 구매 제품을 매장에서 반품</li>
              <li><strong>Ship-from-Store:</strong> 가까운 매장에서 직접 배송하여 배송 시간 단축</li>
              <li><strong>통합 재고 관리:</strong> 온/오프라인 재고를 실시간으로 통합 관리</li>
              <li><strong>통합 고객 데이터:</strong> 모든 채널의 구매 이력과 행동 데이터를 통합 분석</li>
            </ul>
            <div className="info-box" data-aos="fade-up" style={{ background: 'var(--bg-light-gray)', borderRadius: '8px', padding: '24px', margin: '1.5rem 0' }}>
              <p><strong>옴니채널 성공 사례:</strong> 스타벅스의 사이렌오더는 모바일 앱에서 주문과 결제를 완료한 후 매장에서 바로 수령하는 서비스입니다. 앱, 매장, 드라이브스루 등 모든 채널에서 동일한 리워드 프로그램을 운영하며, 통합 고객 데이터를 기반으로 개인화된 추천을 제공합니다.</p>
            </div>

            <h2 data-aos="fade-up">4. 물류와 공급사슬 관리</h2>
            <p data-aos="fade-up">
              물류(Logistics)는 제품의 물리적 이동과 보관을 관리하는 활동이며,
              공급사슬 관리(SCM: Supply Chain Management)는 원재료 조달부터 최종 소비자 전달까지의 전체 흐름을 최적화하는 것입니다.
            </p>
            <table className="lesson-table" data-aos="fade-up">
              <thead>
                <tr>
                  <th>물류 활동</th>
                  <th>설명</th>
                  <th>핵심 과제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>운송 (Transportation)</td>
                  <td>제품을 목적지까지 이동</td>
                  <td>운송 수단 선택, 경로 최적화, 비용 절감</td>
                </tr>
                <tr>
                  <td>보관 (Warehousing)</td>
                  <td>제품의 저장 및 관리</td>
                  <td>창고 위치, 자동화, 재고 회전율 관리</td>
                </tr>
                <tr>
                  <td>재고 관리 (Inventory)</td>
                  <td>적정 재고 수준 유지</td>
                  <td>품절 방지와 과잉 재고 최소화 균형</td>
                </tr>
                <tr>
                  <td>주문 처리 (Order Processing)</td>
                  <td>주문 접수부터 배송까지의 프로세스</td>
                  <td>처리 속도, 정확성, 고객 커뮤니케이션</td>
                </tr>
                <tr>
                  <td>정보 시스템 (Information)</td>
                  <td>물류 전체를 연결하는 정보 흐름</td>
                  <td>ERP, WMS, TMS 등 시스템 구축</td>
                </tr>
              </tbody>
            </table>

            <h3 data-aos="fade-up" style={{ fontSize: '1.15rem', fontWeight: '600', margin: '1.5rem 0 0.5rem', color: 'var(--text-primary)' }}>
              최신 물류 트렌드
            </h3>
            <ul data-aos="fade-up">
              <li><strong>풀필먼트 서비스:</strong> 주문 처리, 포장, 배송을 전문 업체에 위탁 (쿠팡 로켓배송, 아마존 FBA)</li>
              <li><strong>라스트마일 배송:</strong> 최종 배송 단계의 효율화 (당일/새벽 배송, 무인 배송함)</li>
              <li><strong>스마트 물류:</strong> AI, IoT, 로봇을 활용한 자동화 (물류 로봇, 드론 배송)</li>
              <li><strong>그린 물류:</strong> 친환경 포장, 전기 배송 차량, 탄소 발자국 저감</li>
              <li><strong>역물류(Reverse Logistics):</strong> 반품, 리사이클링, 폐기물 관리 최적화</li>
            </ul>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/lessons/week7" className="lesson-nav-btn prev">
                &#8592; 이전: 가격 전략
              </Link>
              <Link to="/lessons" className="lesson-nav-btn next">
                목록으로 &#8594;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LessonWeek8;
