export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeProject {
  id: 'heimdall' | 'gjallar' | 'klepaas';
  period: string;
  type: string;
  role: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  evidence?: {
    label: string;
    href: string;
  }[];
}

export const resumeProfile = {
  name: '조윤호',
  nameEn: 'Yunho Cho',
  role: 'Platform Engineer',
  secondaryRole: 'Deployment Automation / Infrastructure Operations',
  statement: '배포와 인프라 운영을 자동화하고, 실행 후 실제 상태까지 확인합니다.',
  summary:
    'Heimdall에서 저장소와 서비스 구성을 한 번 등록한 뒤 commit 선택과 요청만으로 Docker 빌드부터 Preview URL·public hostname 연결까지 이어지는 흐름을 구현했습니다. K-Le-PaaS에서는 자연어 요청을 Kubernetes 운영 API와 Prometheus 조회로 연결했고, Gjallar에서는 Proxmox 변경을 승인·중복 방지·사후 확인 절차로 통제했습니다. 두 개인 프로젝트는 직접 운영하는 3노드 Proxmox 환경에서 검증합니다.',
  location: 'Seoul, Korea',
  updated: 'Updated 2026.08',
} as const;

export const resumeInfrastructure = {
  title: '3노드 Proxmox 환경에서 정상·실패 경로를 확인했습니다.',
  summary:
    'Proxmox 노드 3대와 IPFire로 분리한 RED·GREEN·ORANGE 네트워크, NAS/NFS, WireGuard·OCI 리버스 프록시를 운영합니다. 이 환경에 Heimdall과 Gjallar를 배포하고, 라우팅 실패와 Proxmox 작업 상태를 확인했습니다.',
  items: ['Proxmox VE 3-node', 'IPFire network segmentation', 'NAS / NFS storage', 'WireGuard / OCI reverse proxy'],
} as const;

export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    label: 'Platform / Runtime',
    items: ['Linux', 'Docker', 'Kubernetes', 'Proxmox VE', 'NCP'],
  },
  {
    label: 'Backend / Data',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'REST API', 'WebSocket'],
  },
  {
    label: 'Delivery / Observability',
    items: ['Git', 'NGINX', 'Prometheus', 'GitHub Actions'],
  },
  {
    label: 'Network / Storage',
    items: ['IPFire', 'WireGuard', 'NFS', 'NAS'],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    id: 'heimdall',
    period: '2026.08 - 현재',
    type: '개인 프로젝트',
    role: '개인 개발 / 배포 Control Plane·Worker / React UI',
    title: '저장소 등록부터 공개 Preview URL 연결까지 자동화하는 배포 도구',
    summary:
      '새 서비스를 공개할 때마다 반복하던 작업을 줄이기 위해, 공개 GitHub 저장소의 main commit을 Docker로 빌드하고 Preview URL·project hostname까지 연결하는 과정을 하나의 배포 요청으로 묶었습니다.',
    highlights: [
      '저장소와 서비스 구성을 한 번 등록하면 exact SHA checkout부터 이미지 빌드·환경변수 주입·candidate 실행까지 자동으로 이어지도록 구현했습니다.',
      '모든 서비스의 health check 후 Gateway를 전환해 Preview URL과 public hostname을 유지하고, 실패하면 기존 Preview를 계속 제공하도록 테스트했습니다.',
    ],
    stack: ['Git', 'Docker', 'NGINX', 'FastAPI', 'React', 'PostgreSQL'],
    evidence: [
      {
        label: 'Failure-path test',
        href: 'https://github.com/CodingPenguin-yoon/heimdall_final/blob/main/backend/tests/test_nginx_gateway.py',
      },
      {
        label: 'Integration test',
        href: 'https://github.com/CodingPenguin-yoon/heimdall_final/blob/main/backend/tests/integration/test_worker_runtime_smoke.py',
      },
    ],
  },
  {
    id: 'klepaas',
    period: '2025.09 - 2025.12',
    type: '팀 프로젝트',
    role: '담당 기여 / 자연어 명령·Kubernetes API / NKS 모니터링 / URL 데이터',
    title: '자연어 기반 Kubernetes 운영 플랫폼',
    summary: '웹과 Slack의 자연어 요청을 해석하고 Kubernetes·NCP에서 실행한 결과를 전달하는 팀 프로젝트입니다.',
    highlights: [
      'Gemini 해석 결과를 Kubernetes 상태·로그·URL 조회와 재시작·스케일링·버전 롤백 API에 연결했습니다.',
      'NKS 4종 지표 조회 API·WebSocket과 Ingress·SourceDeploy URL 저장·조회를 구현해 PR #28·#42·#63으로 병합했습니다.',
    ],
    stack: ['Kubernetes', 'Gemini', 'FastAPI', 'Prometheus', 'NCP'],
    evidence: [
      {
        label: 'PR #28',
        href: 'https://github.com/K-Le-PaaS/backend-hybrid/pull/28',
      },
      {
        label: 'PR #42',
        href: 'https://github.com/K-Le-PaaS/backend-hybrid/pull/42',
      },
      {
        label: 'PR #63',
        href: 'https://github.com/K-Le-PaaS/backend-hybrid/pull/63',
      },
    ],
  },
  {
    id: 'gjallar',
    period: '2026.05 - 현재',
    type: '개인 프로젝트',
    role: '개인 개발 / FastAPI API / React UI / Proxmox 연동',
    title: 'VM 변경을 통제하고 실제 상태를 확인하는 Proxmox 운영 도구',
    summary: 'Proxmox의 현재 상태를 조회하고, VM 변경을 승인·중복 방지·사후 확인 절차로 통제하는 운영 콘솔입니다.',
    highlights: [
      'Proxmox 연결을 unconfigured·live·degraded로 구분하고, live가 아니면 inventory 의존 화면을 닫도록 했습니다.',
      'VM 변경에 승인·idempotency·target lock을 적용하고, 저장된 UPID와 VM 상태 GET으로 실행 결과를 재확인했습니다.',
    ],
    stack: ['Proxmox API', 'FastAPI', 'React', 'PostgreSQL'],
  },
];

export const resumeEducation = {
  school: '광운대학교',
  major: '전자통신공학과',
  status: '졸업',
  date: '2026.02',
} as const;

export const resumeCertifications = ['정보처리기사', '리눅스마스터 2급'] as const;
