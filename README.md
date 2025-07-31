# React + shadcn/ui + TypeScript Template

## 기술 스택

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **UI Library**: shadcn/ui (Radix UI 기반)
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.525.0
- **Package Manager**: pnpm

## 설치된 UI 컴포넌트

- ✅ **Button** - 기본 버튼 컴포넌트
- ✅ **Input** - 입력 필드 컴포넌트
- ✅ **Checkbox** - 체크박스 컴포넌트
- ✅ **Label** - 라벨 컴포넌트
- ✅ **Dialog** - 모달 다이얼로그 컴포넌트
- ✅ **Separator** - 구분선 컴포넌트
- ✅ **Tabs** - 탭 컴포넌트



## 개발 환경

- **Node.js**: 18+
- **pnpm**: 권장 패키지 매니저
- **ESLint**: 코드 품질 관리
- **TypeScript**: 엄격한 타입 검사 활성화

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 빌드
pnpm build

# 빌드 미리보기
pnpm preview

# 린팅
pnpm lint
```

## 프로젝트 구조

```
src/
├── components/
│   └── ui/              # shadcn/ui 컴포넌트들
├── lib/
│   └── utils.ts         # 유틸리티 함수
├── App.tsx
├── index.css
└── main.tsx
```

## 설정 파일

- **Tailwind CSS**: 커스텀 테마 및 다크 모드 지원
- **TypeScript**: 엄격한 설정 및 path alias (`@/*`)
- **Vite**: React 플러그인 및 path resolver
- **ESLint**: React Hooks 및 React Refresh 플러그인