---
title : "Installation"
date : "2024-01-25"

---

# Installation 

밑의 시스템 요구사항이 필요합니다.

- `Node.js 18.17` 이후.
- macOS, Windows and Linux

---

<br>

### 자동 설치

`create-next-app`을 이용하여 새로운 Next.js 앱을 시작하는 것을 추천합니다.

위 명령어는 모든것을 자동화 시킵니다.

새로운 프로젝트를 생성하기 위해서는 : 

```
npx create-next-app@latest
```

설치 과정에서, 프롬프트에 이러한 문구가 뜰 것입니다.

```terminal
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

프롬프트 문구에 응답 한 후, `create-next-app` 명령어는 프로젝트 이름으로 폴더를 생성하며, 

필요한 **Dependencie** 들에 대해서 설치합니다.

<br>

---

<br>

### 수동 설치

수동으로 새로운 `Next.js` 앱을 만들기 위해서는, 필요한 패키지들을 설치해야 합니다.

```bash
npm install next@latest react@latest react-dom@latest
```

`package.json`파일을 연 후, 밑의 `scripts`를 따라 적으세요.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

이 스크립트들은 **어플리케이션의 개발** 의 다른 단계를 나타냅니다.

- `dev` : `next dev`를 입력하여 Next.js의 개발 모드를 실행합니다.
- `build` : `next build`를 입력하여 제품 용도를 위한 어플리케이션을 구축합니다.
- `start` : `next start` 를 입력하여 Next.js의 프로덕션 서버를 시작합니다.
- `lint` : `next link`를 입력하여 Next.js의 내장 ESLint 구성을 세팅합니다.

### 디렉토리 만들기

`Next.js`는 파일 시스템 라우팅을 사용합니다.
> 어떤 형식으로 파일과 디렉토리가 구성되었는지에 라우터가 결정됩니다.

**The `app` directory**

새로운 어플리케이션을 위해서, `App Router`를 사용하는 것을 권장합니다.

어플리케이션 `src/` 디렉토리에 `app` 폴더를 만든 후, `layout.tsx`와 `page.tsx` 파일을 추가합니다.

이 파일들은 유저가 최상위 어플리케이션 라우트(`/`)에 방문했을 때, 렌더링됩니다.
> `src/app/` 부터 최상위 라우트 `/`가 시작되는 형식입니다.

```
app             -> URL / 시작
    /layout.tsx
    /page.tsx
```

> app/내부의 파일 및 디렉토리에 의해 어플리케이션의 Routing 형식이 결정됩니다.

`app/layout.tsx`내부에 최상위 `layout`을 만듭니다.

```tsx
export default function RootLayout({
    children,
                                   } : {
    children : React.ReactNode
}) {
    return (
        <html lang={"en"}>
            <body>{children}</body>
        </html>
    )
}
```

마지막으로, `app/page.tsx`에 기초적인 콘텐츠와 함께 홈 페이지를 제작합니다.

```tsx
export default function page() {
    return <h1>Hello, Next.js!</h1>
}
```

---

### ~~자동, 수동 설치 통합~~ 개발 서버 시작

1. 프롬프트에 `npm run dev`를 입력하여 개발 서버를 시작합니다.
2. `http://localhost:3000`을 브라우저에서 방문하여 어플리케이션을 볼 수 있습니다.
3. `app/page.tsx`을 수정하고 저장하면 브라우저에서 업데이트 된 결과를 볼 수 있습니다.

