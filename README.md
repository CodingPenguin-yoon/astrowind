# 조윤호 포트폴리오

운영 자동화, 플랫폼 설계, 질문 중심 정보 구조를 중심으로 정리한 개인 포트폴리오 사이트입니다.

현재 메인 메시지는 아래 기준으로 정리되어 있습니다.

- 복잡한 운영과 판단 과정을 자동화 가능한 시스템으로 바꾸는 엔지니어
- 자연어 기반 운영 제어면
- 인프라 자동화 워크플로우
- 질문 중심 정보 서비스

## 대표 프로젝트

### K-Le-PaaS

자연어 기반 운영 제어면 / 운영 자동화 백엔드

- GitHub, Kubernetes, Slack, NCP 흐름을 FastAPI 백엔드로 연결
- 배포, 롤백, 모니터링, 자연어 명령을 하나의 운영 흐름으로 구성
- 실행 이력, 헬스 상태, 알림 관리 포함

### Heimdall

인프라 자동화 제어면 / VM 배포와 후처리 워크플로우 기반

- Proxmox 템플릿 클론 기반 VM 배포 엔진
- Terraform, Ansible 연동 기반
- Task, SSE 상태 추적 UI
- 로드맵: GitLab 중심 개발자 셀프서비스 환경 플랫폼

### Argus

질문 중심 정보 서비스 / 해석형 금융 정보 서비스

- 뉴스, 파생, 매크로 데이터를 질문 중심 정보 구조로 재구성
- 대시보드, AI 인사이트, 수급, 뉴스, 매크로 캘린더 정보 구조 설계
- provider, adapter, mock, file execution 구조 사용

## 기술 구성

- Astro 5
- Tailwind CSS
- TypeScript
- AstroWind 기반 커스텀 테마

포트폴리오 내부 카피와 UI는 아래 방향으로 커스텀했습니다.

- 다크 테마 유지
- 터미널 모티프 기반 히어로
- 프로젝트 카드 중심 레이아웃
- 레트로 게임 감성의 픽셀 타이틀 폰트

## 로컬 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npx astro check
```

## 빌드

```bash
npm run build
```

일부 템플릿 샘플 페이지는 원격 이미지에 의존할 수 있어 네트워크 환경에 따라 빌드가 실패할 수 있습니다.

## 주요 파일

- `src/pages/index.astro`: 메인 포트폴리오 페이지
- `src/data/portfolio.ts`: 카피와 프로젝트 데이터
- `src/components/CustomStyles.astro`: 폰트와 전역 스타일
- `src/assets/styles/tailwind.css`: 버튼과 공통 UI 스타일
- `src/navigation.ts`: 헤더와 푸터 네비게이션
