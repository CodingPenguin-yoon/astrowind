import type { Item } from '~/types';

export const portfolioProfile = {
  name: '조윤호',
  nameEn: 'Yunho Cho',
  role: '운영 자동화 · 플랫폼 엔지니어',
  intro:
    '자연어 기반 운영 제어, 인프라 자동화 워크플로우, 금융 데이터 분석·가공 서비스를 설계하고 구현하며 복잡한 운영과 판단 과정을 제어 가능한 시스템으로 정리합니다.',
  summary:
    'K-Le-PaaS는 자연어 기반 Kubernetes 제어와 자동 도메인 연결을, Heimdall은 VM 배포 자동화 워크플로우를, Argus는 금융 데이터 분석·가공 서비스를 다룹니다.',
  email: '',
  resumeHref: '',
  socials: {
    github: 'https://github.com/CodingPenguin-yoon',
    linkedin: '',
    instagram: '',
    blog: '/blog',
  },
};

export const heroTags = ['운영 자동화 백엔드', 'IaC · VM 배포 자동화', '금융 데이터 분석·가공'];

export const snapshotItems: Item[] = [
  {
    title: 'K-Le-PaaS',
    description: '자연어로 Kubernetes를 제어하고 도메인을 자동으로 연결하는 자체 구축 PaaS입니다.',
  },
  {
    title: 'Heimdall',
    description: 'Proxmox 템플릿 클론과 Terraform·Ansible, Task·SSE 추적을 하나의 배포 워크플로우로 연결합니다.',
  },
  {
    title: 'Argus',
    description: '뉴스·파생·매크로 데이터를 수집·가공해 대시보드와 인사이트 형태로 제공합니다.',
  },
];

export const profilePoints: Item[] = [
  {
    title: 'K-Le-PaaS',
    description:
      '자연어 명령 해석, 자동 도메인 연결, Kubernetes 인프라 구축을 직접 구현해 배포 경험을 하나의 흐름으로 묶었습니다.',
  },
  {
    title: 'Heimdall',
    description:
      'VM 배포, 후처리, 상태 추적을 Terraform·Ansible 기반 워크플로우로 연결하는 인프라 자동화 기반을 만들었습니다.',
  },
  {
    title: 'Argus',
    description:
      '뉴스·파생·매크로 데이터를 수집·가공·구조화해 사용자의 판단 비용을 낮추는 금융 데이터 서비스를 설계했습니다.',
  },
];

export const focusAreas: Item[] = [
  {
    title: '운영 제어 백엔드 설계',
    description: '배포, 롤백, 모니터링, 자연어 명령을 하나의 운영 제어 흐름으로 통합합니다.',
  },
  {
    title: '인프라 자동화 워크플로우',
    description: 'VM 배포, 후처리, 상태 추적을 코드와 실행 흐름으로 연결합니다.',
  },
  {
    title: '상태 추적과 피드백',
    description: 'Task, SSE, 알림, 실행 이력으로 운영 상태를 추적하고 가시성을 높입니다.',
  },
  {
    title: 'IaC 및 환경 바인딩',
    description: 'Terraform·Ansible 기반으로 반복 작업을 줄이고 환경 간 차이를 낮춥니다.',
  },
  {
    title: '금융 데이터 분석·가공 설계',
    description: '분산된 금융 데이터를 수집·가공·구조화해 서비스 가능한 형태로 정리합니다.',
  },
  {
    title: '사용 가능한 서비스 설계',
    description: '기술 요소를 실제 사용 흐름과 UI 경험으로 연결합니다.',
  },
];

export const experienceTimeline: Item[] = [
  {
    title: '1. 흐름을 먼저 설계한다',
    description:
      '<span class="mb-3 inline-flex flex-wrap gap-2"><span class="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-mono tracking-[0.08em] text-cyan-300">K-Le-PaaS</span><span class="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-mono tracking-[0.08em] text-cyan-300">Heimdall</span></span><br />단일 명령보다 실행 순서와 연결 관계를 먼저 정리합니다. 운영 자동화는 언제든 되돌리고 추적할 수 있는 흐름이어야 한다고 봅니다.',
    icon: 'tabler:route-square',
  },
  {
    title: '2. 자동화는 추적 가능해야 한다',
    description:
      '<span class="mb-3 inline-flex flex-wrap gap-2"><span class="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-mono tracking-[0.08em] text-cyan-300">K-Le-PaaS</span><span class="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-mono tracking-[0.08em] text-cyan-300">Heimdall</span></span><br />실행만 자동화하면 운영은 보이지 않습니다. Task, SSE, 알림, 헬스 상태처럼 결과를 확인하는 경로까지 함께 설계합니다.',
    icon: 'tabler:activity-heartbeat',
  },
  {
    title: '3. 데이터는 끝까지 연결한다',
    description:
      '<span class="mb-3 inline-flex flex-wrap gap-2"><span class="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-mono tracking-[0.08em] text-cyan-300">Argus</span></span><br />데이터 수집에서 끝내지 않고 분석, 가공, 제공까지 이어지는 흐름으로 설계합니다. 서비스 구조는 사용자의 해석과 판단 비용을 줄이는 방향으로 정리합니다.',
    icon: 'tabler:help-square-rounded',
  },
];

export interface ProjectPanelPoint {
  label: string;
  value: string;
  tone?: 'default' | 'roadmap';
}

export interface PortfolioProjectVisual {
  src?: string;
  alt: string;
  label: string;
  caption: string;
}

export interface PortfolioProject {
  sectionId: string;
  kicker: string;
  title: string;
  meta: string;
  repoHref: string;
  visual: PortfolioProjectVisual;
  summary: string;
  implementationLabel: string;
  implementation: string;
  designPoint: string;
  significanceLabel: string;
  significance: string;
  highlightNote?: string;
  panelPoints: ProjectPanelPoint[];
  stack: string[];
}

export const selectedProjects: PortfolioProject[] = [
  {
    sectionId: 'klepaas',
    kicker: '프로젝트 01 · 자연어 기반 Kubernetes PaaS',
    title: 'K-Le-PaaS',
    meta: '자체 구축 PaaS 운영 플랫폼',
    repoHref: 'https://github.com/K-Le-PaaS/backend-hybrid',
    visual: {
      src: '/projects/klepaas-dashboard.png',
      alt: 'K-Le-PaaS console dashboard screenshot',
      label: '대표 화면',
      caption: '운영 대시보드, 최근 명령, 배포 상태, 리소스 사용량이 한 화면에 들어오는 K-Le-PaaS 대표 화면입니다.',
    },
    summary:
      '자연어로 Kubernetes를 제어하고 배포 직후 도메인을 연결할 수 있도록 만든 자체 구축 PaaS 운영 플랫폼입니다.',
    implementationLabel: '구현한 내용',
    implementation:
      '자연어 입력을 kubectl 명령으로 변환하는 파이프라인 / 배포 시 서브도메인 자동 생성 및 Ingress·DNS 연동 / Kubernetes 클러스터와 배포 인프라 구축',
    designPoint:
      '복잡한 kubectl·Ingress 설정을 감추고, 자연어 입력만으로 배포와 접속까지 이어지는 흐름을 설계했습니다.',
    significanceLabel: '프로젝트 의미',
    significance:
      '인프라 구축부터 자연어 제어, 자동 도메인 연결까지 직접 구현해 자체 PaaS의 핵심 사용자 경험을 만들었습니다.',
    panelPoints: [
      { label: '통합 대상', value: '자연어 처리 / Kubernetes / DNS·네트워크' },
      { label: '핵심 기능', value: '명령 변환 / 자동 배포 / 도메인 연결' },
      { label: '운영 가시성', value: '배포 상태 추적 / 할당 도메인 관리' },
    ],
    stack: ['FastAPI', 'Kubernetes', 'NLP', 'Infrastructure', 'Vercel-like'],
  },
  {
    sectionId: 'heimdall',
    kicker: '프로젝트 02 · 인프라 자동화 제어면',
    title: 'Heimdall',
    meta: 'VM 배포와 후처리 워크플로우 기반',
    repoHref: 'https://github.com/CodingPenguin-yoon/Heimdall',
    visual: {
      alt: 'Heimdall workflow deployment screenshot',
      label: '워크플로우 화면',
      caption: 'VM 배포 진행 상태와 후처리 단계를 함께 보여주는 대표 화면을 이 위치에 배치할 예정입니다.',
    },
    summary:
      'Proxmox 템플릿 클론, Terraform, Ansible, Task·SSE를 연결해 VM 배포와 후처리를 제어하는 인프라 자동화 워크플로우입니다.',
    implementationLabel: '구현한 내용',
    implementation: '템플릿 클론 기반 VM 배포 엔진 / Terraform·Ansible 연동 / Task·SSE 기반 상태 추적 UI',
    designPoint: '흩어진 인프라 준비 작업을 배포, 후처리, 상태 확인의 일관된 흐름으로 정리했습니다.',
    significanceLabel: '프로젝트 의미',
    significance:
      'VM 배포와 후처리를 워크플로우로 제어하는 기반을 구현했고, 다음 단계로 GitLab 중심의 개발자 셀프서비스 환경 플랫폼으로 확장할 계획입니다.',
    highlightNote: '현재 구현 / 다음 단계 분리',
    panelPoints: [
      { label: '현재 구현', value: '템플릿 클론 기반 VM 배포 엔진' },
      { label: '상태 추적', value: 'Task·SSE 기반 상태 추적 UI' },
      { label: '로드맵', value: 'GitLab 중심 개발자 셀프서비스 환경 플랫폼', tone: 'roadmap' },
    ],
    stack: ['Proxmox', 'Terraform', 'Ansible', 'Task', 'SSE'],
  },
  {
    sectionId: 'argus',
    kicker: '프로젝트 03 · 금융 데이터 분석·가공 서비스',
    title: 'Argus',
    meta: '금융 데이터 분석·가공 서비스',
    repoHref: 'https://github.com/CodingPenguin-yoon/argus-renewal',
    visual: {
      alt: 'Argus market intelligence dashboard screenshot',
      label: '대시보드 화면',
      caption: '시장 데이터와 인사이트를 한 번에 읽을 수 있는 대표 화면을 이 위치에 배치할 예정입니다.',
    },
    summary: '뉴스·파생·매크로 데이터를 수집·가공해 대시보드와 인사이트 형태로 제공하는 금융 데이터 서비스입니다.',
    implementationLabel: '구현한 내용',
    implementation:
      '데이터 수집·가공 파이프라인 설계 / 대시보드·AI 인사이트·수급·뉴스·매크로 캘린더 구성 / Provider·Adapter·Mock 기반 실행 구조',
    designPoint: '수집된 금융 데이터를 분석과 해석에 바로 활용할 수 있는 서비스 흐름으로 재구성했습니다.',
    significanceLabel: '프로젝트 의미',
    significance: '데이터 수집에서 끝나지 않고, 가공과 제공 단계까지 하나의 서비스 흐름으로 연결한 프로젝트입니다.',
    panelPoints: [
      { label: '데이터 구성', value: '뉴스 / 파생 / 매크로 / 대시보드 / AI 인사이트' },
      { label: '실행 구조', value: 'Provider / Adapter / Mock / File Execution' },
      { label: '중심 역할', value: '데이터 분석·가공 서비스 설계' },
    ],
    stack: ['Provider', 'Adapter', 'Mock', 'File Execution', 'Dashboard'],
  },
];

export const toolkit: Item[] = [
  {
    title: 'K-Le-PaaS 운영 자동화 백엔드',
    description: 'FastAPI / Kubernetes / NLP / DNS / Infrastructure',
    icon: 'tabler:cpu',
  },
  {
    title: 'Heimdall 인프라 자동화 기반',
    description: 'Proxmox / Terraform / Ansible / Task / SSE',
    icon: 'tabler:server-cog',
  },
  {
    title: 'Argus 정보 구조와 실행 기반',
    description: '금융 데이터 분석·가공 / Provider / Adapter / Mock',
    icon: 'tabler:layout-board-split',
  },
];
