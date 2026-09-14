// 학원 콘텐츠 데이터. 실제 운영 데이터로 교체하는 지점입니다.
// news, teachers 등은 더미(placeholder) 데이터이며 isDummy: true 로 표시합니다.

export type SubjectSlug = "korean" | "english" | "math" | "science";

export interface Subject {
  slug: SubjectSlug;
  no: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  grades: string;
  curriculum: string[];
  focusAreas: string[];
  features: string[];
}

export const subjects: Subject[] = [
  {
    slug: "korean",
    no: "01",
    name: "국어",
    nameEn: "Korean",
    tagline: "읽고 이해하고 생각하는 힘",
    description:
      "글을 정확하게 읽어내고, 스스로 근거를 찾아 생각을 정리하는 힘을 기릅니다.",
    grades: "초등 고학년 · 중등 · 고등",
    curriculum: [
      "지문 독해 및 어휘력 강화",
      "비문학·문학 갈래별 분석",
      "서술형·논술형 답안 작성 훈련",
      "내신 기출 및 학교별 유형 대비",
    ],
    focusAreas: ["독해력", "어휘·개념어", "글쓰기 논리력", "내신 서술형"],
    features: [
      "학생 스스로 근거를 찾아 설명하게 하는 수업 방식",
      "학교별 시험 범위와 출제 경향에 맞춘 학습 자료",
      "정기적인 첨삭을 통한 서술형 답안 완성도 향상",
    ],
  },
  {
    slug: "english",
    no: "02",
    name: "영어",
    nameEn: "English",
    tagline: "기초부터 내신까지 탄탄하게",
    description:
      "문법과 어휘의 기본기를 다지고, 내신과 수행평가에 실질적으로 도움이 되는 실력을 만듭니다.",
    grades: "초등 · 중등 · 고등",
    curriculum: [
      "문법 체계 학습 및 반복 훈련",
      "어휘·독해 학년별 단계 학습",
      "듣기·말하기 수행평가 대비",
      "내신 서술형 및 시험 대비 훈련",
    ],
    focusAreas: ["문법", "독해", "어휘", "내신 대비"],
    features: [
      "학생 수준에 맞춘 단계별 커리큘럼",
      "학교 시험 일정에 맞춘 내신 집중 대비 기간 운영",
      "꾸준한 어휘·문법 점검으로 기본기 관리",
    ],
  },
  {
    slug: "math",
    no: "03",
    name: "수학",
    nameEn: "Mathematics",
    tagline: "개념을 이해하고 문제를 해결하는 힘",
    description:
      "공식을 암기하는 것이 아니라 개념의 원리를 이해하고, 스스로 문제를 풀어내는 힘을 키웁니다.",
    grades: "초등 · 중등 · 고등",
    curriculum: [
      "단원별 개념 학습 및 원리 이해",
      "유형별 문제 풀이 및 응용",
      "오답 노트를 활용한 취약 부분 보완",
      "학교 내신 및 단원평가 대비",
    ],
    focusAreas: ["개념 이해", "문제 해결력", "연산 정확도", "내신 대비"],
    features: [
      "개념 설명 후 충분한 문제 풀이로 이해를 확인하는 수업",
      "학생별 진도와 오답을 관리하는 개별 학습 관리",
      "학교별 시험 범위에 맞춘 맞춤 대비",
    ],
  },
  {
    slug: "science",
    no: "04",
    name: "과학",
    nameEn: "Science",
    tagline: "개념을 이해하고 적용하는 힘",
    description:
      "과학적 원리를 이해하고, 이를 다양한 문제 상황에 적용할 수 있는 사고력을 기릅니다.",
    grades: "초등 · 중등 · 고등",
    curriculum: [
      "물리·화학·생명·지구과학 영역별 개념 학습",
      "실험 및 탐구 활동 기반 이해",
      "단원별 문제 적용 훈련",
      "학교 내신 및 수행평가 대비",
    ],
    focusAreas: ["개념 이해", "탐구 사고력", "적용력", "내신 대비"],
    features: [
      "원리 중심의 설명으로 암기 대신 이해를 돕는 수업",
      "학년별·영역별로 체계적으로 구성된 커리큘럼",
      "학교 시험 유형에 맞춘 기출 및 예상 문제 훈련",
    ],
  },
];

export interface Teacher {
  id: string;
  subject: string;
  name: string;
  role: string;
  bio: string;
  isDummy: true;
}

// 아래 선생님 정보는 예시(placeholder)입니다. 실제 프로필로 교체해 주세요.
export const teachers: Teacher[] = [
  {
    id: "korean",
    subject: "국어",
    name: "선생님 성함",
    role: "국어 담당",
    bio: "선생님 소개 문구가 이 영역에 들어갑니다.",
    isDummy: true,
  },
  {
    id: "english",
    subject: "영어",
    name: "선생님 성함",
    role: "영어 담당",
    bio: "선생님 소개 문구가 이 영역에 들어갑니다.",
    isDummy: true,
  },
  {
    id: "math",
    subject: "수학",
    name: "선생님 성함",
    role: "수학 담당",
    bio: "선생님 소개 문구가 이 영역에 들어갑니다.",
    isDummy: true,
  },
  {
    id: "science",
    subject: "과학",
    name: "선생님 성함",
    role: "과학 담당",
    bio: "선생님 소개 문구가 이 영역에 들어갑니다.",
    isDummy: true,
  },
];

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  isDummy: true;
}

// 아래 학원소식은 예시(더미) 데이터입니다. 실제 공지사항으로 교체해 주세요.
export const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "수업 안내",
    title: "2026학년도 2학기 수업 안내",
    date: "2026.08.20",
    isDummy: true,
  },
  {
    id: "2",
    category: "공지사항",
    title: "중등 내신 대비 수업 안내",
    date: "2026.08.05",
    isDummy: true,
  },
  {
    id: "3",
    category: "학원 소식",
    title: "메타인지학원 신규 수업 안내",
    date: "2026.07.22",
    isDummy: true,
  },
];

export const navLinks = [
  { href: "/about", label: "학원소개" },
  { href: "/subjects", label: "과목소개" },
  { href: "/teachers", label: "선생님" },
  { href: "/news", label: "학원소식" },
  { href: "/contact", label: "상담문의" },
];
