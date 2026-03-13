/**
 * 사이트 설정 파일
 * 하위 사이트의 브랜드, 메뉴, 푸터 등을 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer가 자동으로 반영됩니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'DreamIT Marketing',
  nameKo: '드림아이티 마케팅 학습',
  description: '마케팅 기초부터 디지털마케팅 실무까지 - 15주 체계적 학습 과정',
  url: 'https://marketing.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: ' Marketing', className: 'brand-biz' }
    ]
  },

  // 테마 컬러 (meta theme-color)
  themeColor: '#0046C8',

  // 네비게이션 메뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.basics',
      path: '/basics/what-is-marketing',
      activePath: '/basics',
      dropdown: [
        { path: '/basics/what-is-marketing', labelKey: 'site.nav.whatIsMarketing' },
        { path: '/basics/weekly-plan', labelKey: 'site.nav.weeklyPlan' },
        { path: '/basics/syllabus', labelKey: 'site.nav.syllabus' },
        { path: '/basics/practice-guide', labelKey: 'site.nav.practiceGuide' },
      ]
    },
    {
      labelKey: 'site.nav.lessons',
      path: '/lessons',
      activePath: '/lessons',
      dropdown: [
        { path: '/lessons/week1', labelKey: 'site.nav.week1' },
        { path: '/lessons/week2', labelKey: 'site.nav.week2' },
        { path: '/lessons/week3', labelKey: 'site.nav.week3' },
        { path: '/lessons/week4', labelKey: 'site.nav.week4' },
        { path: '/lessons/week5', labelKey: 'site.nav.week5' },
        { path: '/lessons/week6', labelKey: 'site.nav.week6' },
        { path: '/lessons/week7', labelKey: 'site.nav.week7' },
        { path: '/lessons/week8', labelKey: 'site.nav.week8' },
        { path: '/lessons/week9', labelKey: 'site.nav.week9' },
        { path: '/lessons/week10', labelKey: 'site.nav.week10' },
        { path: '/lessons/week11', labelKey: 'site.nav.week11' },
        { path: '/lessons/week12', labelKey: 'site.nav.week12' },
        { path: '/lessons/week13', labelKey: 'site.nav.week13' },
        { path: '/lessons/week14', labelKey: 'site.nav.week14' },
        { path: '/lessons/week15', labelKey: 'site.nav.week15' },
      ]
    },
    {
      labelKey: 'site.nav.digital',
      path: '/digital',
      activePath: '/digital',
      dropdown: [
        { path: '/digital/seo', labelKey: 'site.nav.seo' },
        { path: '/digital/sem', labelKey: 'site.nav.sem' },
        { path: '/digital/sns', labelKey: 'site.nav.sns' },
        { path: '/digital/content', labelKey: 'site.nav.content' },
        { path: '/digital/email', labelKey: 'site.nav.email' },
        { path: '/digital/performance', labelKey: 'site.nav.performance' },
        { path: '/digital/influencer', labelKey: 'site.nav.influencer' },
        { path: '/digital/automation', labelKey: 'site.nav.automation' },
      ]
    },
    { path: '/lectures', labelKey: 'site.nav.lectures', activePath: '/lectures' },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
    {
      labelKey: 'site.nav.community',
      path: '/community/board',
      activePath: '/community',
      dropdown: [
        { path: '/community/board', labelKey: 'site.nav.board' },
        { path: '/community/gallery', labelKey: 'site.nav.gallery' },
        { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
        { path: '/community/websites', labelKey: 'site.nav.websites' },
      ]
    }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/basics/what-is-marketing', labelKey: 'site.nav.basics' },
    { path: '/lessons', labelKey: 'site.nav.lessons' },
    { path: '/digital', labelKey: 'site.nav.digital' },
    { path: '/lectures', labelKey: 'site.nav.lectures' },
    { path: '/references', labelKey: 'site.nav.references' },
    { path: '/community/board', labelKey: 'site.nav.board' },
    { path: '/community/gallery', labelKey: 'site.nav.gallery' },
    { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
    { path: '/community/websites', labelKey: 'site.nav.websites' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT Books', url: 'https://books.dreamitbiz.com' },
    { name: 'KoreaTech CT', url: 'https://koreatech.dreamitbiz.com' }
  ]
};

export default site;
