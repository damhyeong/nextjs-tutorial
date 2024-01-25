---
title : "Getting Started"
date : "24-01-25"

---

## Next.js는 뭐지?

`Next.js`는 풀 스택 웹 어플리케이션을 만들기 위한 **`React framework`**입니다.

`React` 컴포넌트는 유저 인터페이스를 만들고, `Next.js`는 최적화 지원 뿐만 아니라 추가적인 특징을 가지고 있습니다.

> 요약 : `React` 라이브러리를 이용한 `Next.js` 프레임워크는 편리하고, 추가적인 기능을 갖추고 있습니다.

<br>

내부적으로, `Next.js`는 리액트에 필요한 도구를 추상화 하고, 자동으로 구성합니다.

예를 들면, `bundling`, `compiling` 등등이 있습니다.

이러한 것은 구성에 시간을 소비하는 대신, 어플리케이션을 제작하는 것에 더 초점을 두게 해 줍니다.

당신이 단독 개발자 이거나, 큰 팀의 일부 중 하나 더라도, `Next.js`는 반응적, 동적이며, 빠른 `React` 어플리케이션을 만들 수 있게 돕습니다.

---

## 주요 기능들 : (`Main Features`)

몇몇 주요 `Next.js`의 기능은 이런 것들을 포함합니다. : 

<br>

| Feature           | Description                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------|
| **Routing**       | 파일 시스템에 기반을 둔 `router`는 서버 컴포넌트의 최 상단에 내장되어 있습니다.<br/> 서버 컴포넌트는 레이아웃, 중첩 라우팅, 로딩 상태, 에러 핸들링 등등이 지원됩니다.    |
| **Rendering**     | `Client-side` 그리고 `Server-side` 에서 클라이언트와 서버 컴포넌트는 렌더링합니다.<br/> 더 나아가 정적, 동적 렌더링이 `Next.js` 서버에서 최적화 됩니다. |
| **Data Fetching** | 서버 컴포넌트에서 `async/await`를 사용하여 단순화 된 데이터를 요청합니다. <br/>                                                     |
| **Styling**       | `CSS Modules`, `Tailwind CSS`, `CSS-in-JS`와 같이 많이 선호되는 스타일링 메서드들이 지원됩니다.                                  |
| **Optimizations** | 이미지, 폰트, 스크립트 최적화는 어플리케이션의 핵심 웹 진단, 사용자 경험을 향상시킵니다.                                                       |
| **TypeScript**    | 더 나은 타입 확인과 더 효율적인 컴파일을 통해 타입스크립트의 지원이 향상되었습니다. <br/> 게다가 커스텀 타입스크립트 플러그인과 타입 체커도 포함됩니다.                  |

<br>

---

### App Router vs Pages Router

`Next.js`는 두 가지 다른 라우터를 가집니다 : `App Router` and `Pages Router`.

`App Router`는 `React`의 `Server Component`, `Streaming`과 같은 가장 최신 기능을 허용하는 새로운 라우터입니다.

`Page Router`는 `Next.js`의 원본 라우터입니다.

해당 라우터는 서버에서 렌더링 된 리액트 어플리케이션을 만들수 있게 허용하며, 오래된 `Next.js`의 어플리케이션을 계속 지원 할 수 있게 해 줍니다.

저의 경우, 새롭고 편한 `App Router`를 사용할 예정이기에, `Page Router`에 관한 내용을 넣지 않습니다.

`Page Router` 에 관한 자세한 정보를 얻고 싶으시다면, [공식 사이트](https://nextjs.org/docs) 에 방문하시기 바랍니다.

<br>

---

<br>

### ~~배우기 전 필요한~~ 사전 지식

공식 문서가 입문자들에게 친화적으로 디자인됐음에도 불구하고,

`Next.js`의 공식문서에 계속 집중 할 수 있는 **기준선** 을 설립 해 놓았습니다.

`HTML`, `CSS`, `React`에 대한 기초적인 이해를 가지고 있는 것이 권장됩니다.

만약 `React` 스킬을 배워야 하는 경우, [React Foundation Course](https://nextjs.org/learn/react-foundations) 를 확인하기 바랍니다.

