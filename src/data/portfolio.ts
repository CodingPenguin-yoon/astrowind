import type { Item } from '~/types';

export const portfolioProfile = {
  name: '조윤호',
  nameEn: 'Yunho Cho',
  role: '운영 자동화 · 플랫폼 엔지니어',
  intro:
    '자연어 기반 운영 제어면, 인프라 자동화 워크플로우, 질문 중심 정보 서비스를 설계하며 복잡한 운영과 판단 과정을 자동화 가능한 시스템으로 바꿉니다.',
  summary: 'K-Le-PaaS는 운영 흐름, Heimdall은 VM 배포 워크플로우, Argus는 질문 중심 정보 구조를 다룹니다.',
  email: '',
  resumeHref: '',
  socials: {
    github: 'https://github.com/CodingPenguin-yoon',
    linkedin: '',
    instagram: '',
    blog: '/blog',
  },
};

export const heroTags = ['운영 자동화 백엔드', 'IaC · VM 배포 자동화', '질문 중심 정보 구조'];

export const snapshotItems: Item[] = [
  {
    title: 'K-Le-PaaS',
    description: 'GitHub, Kubernetes, Slack, 클라우드 배포 흐름을 FastAPI 백엔드로 연결합니다.',
  },
  {
    title: 'Heimdall',
    description: 'Proxmox 템플릿 클론과 Terraform·Ansible, Task/SSE 추적을 워크플로우로 묶습니다.',
  },
  {
    title: 'Argus',
    description: '뉴스, 파생, 매크로 데이터를 질문 중심 정보 구조로 재정렬합니다.',
  },
];

export const profilePoints: Item[] = [
  {
    title: 'K-Le-PaaS',
    description:
      'GitHub·Kubernetes·Slack·클라우드 배포 흐름을 FastAPI 백엔드로 연결해 배포·롤백·모니터링·자연어 명령을 하나의 운영 흐름으로 통합했습니다.',
  },
  {
    title: 'Heimdall',
    description:
      'Proxmox 템플릿 클론, Terraform·Ansible, Task/SSE 추적을 통해 VM 배포와 후처리를 워크플로우로 제어하는 기반을 구현했습니다.',
  },
  {
    title: 'Argus',
    description:
      '뉴스·파생·매크로 데이터를 질문 중심 정보 구조로 재구성해 사용자의 판단 비용을 줄이는 해석형 금융 정보 서비스를 설계했습니다.',
  },
];

export const focusAreas: Item[] = [
  {
    title: '운영 제어 백엔드 설계',
    description: '배포, 롤백, 모니터링, 자연어 명령을 하나의 운영 흐름으로 통합합니다.',
  },
  {
    title: '인프라 자동화 워크플로우',
    description: 'VM 배포, 후처리, 상태 추적을 코드와 작업 흐름으로 연결합니다.',
  },
  {
    title: '상태 추적과 피드백',
    description: 'Task, SSE, 알림, 실행 이력으로 운영 가시성을 확보합니다.',
  },
  {
    title: 'IaC 및 환경 바인딩',
    description: 'Terraform·Ansible 기반으로 반복 작업과 환경 불일치를 줄입니다.',
  },
  {
    title: '질문 중심 정보 구조 설계',
    description: '복잡한 데이터를 사용자의 질문에 답하는 구조로 재배열합니다.',
  },
  {
    title: '사용 가능한 서비스 설계',
    description: '기술을 실제로 사용할 수 있는 UI와 서비스 경험으로 전환합니다.',
  },
];

export const experienceTimeline: Item[] = [
  {
    title: '1. 실행보다 제어 흐름을 설계한다',
    description:
      '<span class="mb-3 inline-flex gap-2"><span class="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-cyan-300">K-Le-PaaS</span><span class="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-cyan-300">Heimdall</span></span><br />단일 명령보다 실행 순서와 연결 관계를 먼저 정의합니다. 운영 자동화는 되돌릴 수 있고 추적 가능한 흐름이어야 한다고 봅니다.',
    icon: 'tabler:route-square',
  },
  {
    title: '2. 자동화는 상태 추적까지 포함한다',
    description:
      '<span class="mb-3 inline-flex gap-2"><span class="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-cyan-300">K-Le-PaaS</span><span class="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-cyan-300">Heimdall</span></span><br />실행만 자동화하면 운영이 보이지 않습니다. Task, SSE, 알림, 헬스 상태처럼 결과를 확인하는 경로를 같이 설계합니다.',
    icon: 'tabler:activity-heartbeat',
  },
  {
    title: '3. 데이터는 질문 중심으로 재구성한다',
    description:
      '<span class="mb-3 inline-flex gap-2"><span class="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-mono text-cyan-300">Argus</span></span><br />데이터를 나열하는 대신 사용자가 먼저 던지는 질문을 기준으로 구조를 다시 잡습니다. 정보 구조는 해석과 판단 흐름을 줄이는 방향으로 설계합니다.',
    icon: 'tabler:help-square-rounded',
  },
];

export interface ProjectPanelPoint {
  label: string;
  value: string;
  tone?: 'default' | 'roadmap';
}

export interface PortfolioProject {
  kicker: string;
  title: string;
  meta: string;
  repoHref: string;
  summary: string;
  implementationLabel: string;
  implementation: string;
  designPoint: string;
  significanceLabel: string;
  significance: string;
  panelPoints: ProjectPanelPoint[];
  stack: string[];
}

export const selectedProjects: PortfolioProject[] = [
  {
    kicker: '프로젝트 01 · 자연어 기반 운영 제어면',
    title: 'K-Le-PaaS',
    meta: '운영 자동화 백엔드',
    repoHref: 'https://github.com/K-Le-PaaS/backend-hybrid',
    summary:
      'GitHub·Kubernetes·Slack·클라우드 배포 흐름을 FastAPI 백엔드로 통합해 배포·롤백·모니터링·자연어 명령을 하나의 운영 흐름으로 묶은 프로젝트입니다.',
    implementationLabel: '직접 구현한 범위',
    implementation:
      'GitHub Webhook, Kubernetes API, Slack, NCP 연동 / 자연어 명령의 의도·엔티티 해석 / 실행 이력·헬스 상태·알림 관리',
    designPoint: '운영 자동화의 핵심을 단순 실행이 아니라 안전하고 재현 가능한 제어 흐름으로 정의했습니다.',
    significanceLabel: '프로젝트 의의',
    significance: 'kubectl/YAML 중심 운영을 사용 가능한 운영 제어 경험으로 전환한 프로젝트로 정리합니다.',
    panelPoints: [
      { label: '통합 대상', value: 'GitHub / Kubernetes / Slack / NCP' },
      { label: '백엔드', value: 'FastAPI 기반 운영 자동화 흐름' },
      { label: '운영 가시성', value: '실행 이력 / 헬스 상태 / 알림 관리' },
    ],
    stack: ['FastAPI', 'GitHub', 'Kubernetes', 'Slack', 'NCP'],
  },
  {
    kicker: '프로젝트 02 · 인프라 자동화 제어면',
    title: 'Heimdall',
    meta: 'VM 배포와 후처리 워크플로우 기반',
    repoHref: 'https://github.com/CodingPenguin-yoon/Heimdall',
    summary:
      'Proxmox 템플릿 클론, Terraform, Ansible, Task/SSE를 연결해 VM 배포와 후처리를 워크플로우로 제어하는 인프라 자동화 기반입니다.',
    implementationLabel: '현재 구현한 기반',
    implementation: '템플릿 클론 기반 VM 배포 엔진 / Terraform·Ansible 연동 기반 / Task·SSE 상태 추적 UI',
    designPoint: '수동으로 분산된 인프라 준비 작업을 배포 → 후처리 → 상태 확인 흐름으로 통합했습니다.',
    significanceLabel: '로드맵',
    significance: 'GitLab 중심 개발자 셀프서비스 환경 플랫폼으로 확장',
    panelPoints: [
      { label: '현재 구현', value: '템플릿 클론 기반 VM 배포 엔진' },
      { label: '상태 추적', value: 'Task / SSE 상태 추적 UI' },
      { label: '로드맵', value: 'GitLab 중심 개발자 셀프서비스 환경 플랫폼', tone: 'roadmap' },
    ],
    stack: ['Proxmox', 'Terraform', 'Ansible', 'Task', 'SSE'],
  },
  {
    kicker: '프로젝트 03 · 질문 중심 정보 서비스',
    title: 'Argus',
    meta: '해석형 금융 정보 서비스',
    repoHref: 'https://github.com/CodingPenguin-yoon/argus-renewal',
    summary:
      '뉴스·파생·매크로 데이터를 질문 중심 정보 구조로 재구성해 사용자의 판단 비용을 줄이는 해석형 금융 정보 서비스입니다.',
    implementationLabel: '직접 구현한 범위',
    implementation:
      '대시보드·AI 인사이트·수급·뉴스·매크로 캘린더 정보 구조 설계 / provider·adapter 패턴 / mock·file 기반 실행 구조',
    designPoint: '서로 다른 데이터 소스가 같은 질문에 답하도록 정보 구조를 재배열했습니다.',
    significanceLabel: '프로젝트 의의',
    significance: '데이터를 나열하는 대신 사용자의 판단 흐름을 먼저 설계한 경험으로 표현합니다.',
    panelPoints: [
      { label: '정보 구조', value: '대시보드 / AI 인사이트 / 수급 / 뉴스 / 매크로 캘린더' },
      { label: '실행 구조', value: 'Provider / Adapter / Mock / File Execution' },
      { label: '중심 역할', value: '질문 중심 정보 서비스 설계' },
    ],
    stack: ['Provider', 'Adapter', 'Mock', 'File Execution', 'Dashboard'],
  },
];

export const toolkit: Item[] = [
  {
    title: 'K-Le-PaaS 운영 자동화 백엔드',
    description: 'FastAPI / GitHub / Kubernetes / Slack / NCP',
    icon: 'tabler:cpu',
  },
  {
    title: 'Heimdall 인프라 자동화 기반',
    description: 'Proxmox / Terraform / Ansible / Task / SSE',
    icon: 'tabler:server-cog',
  },
  {
    title: 'Argus 정보 구조와 실행 기반',
    description: 'Provider / Adapter / Mock / File Execution',
    icon: 'tabler:layout-board-split',
  },
];
