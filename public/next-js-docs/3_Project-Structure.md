---
title : "Project Structure"
date : "2024-01-25"

---

# Next.js의 프로젝트 구조

이 페이지에서는 Next.js의 프로젝트 파일과 폴더 구조에 대한 개요를 제공합니다.

최상위 파일과 폴더, 구성 파일, `app`, `pages` 라우팅 규칙에 대해서 다루고 있습니다.

---

### 최상위 폴더들

||          |
| -- |----------|
| `app` | `App` 라우터 |
| `pages` | `Pages` 라우터 |
| `public` | 제공될 정적 자산 보관 : `images`, `png` 등등 |
| `src` | 선택적인 어플리케이션 소스 폴더 |

---

### 최상위 파일들

| Next.js |                                          |
|---------|------------------------------------------|
| `next.config.js` | Next.js를 위한 구성 파일                        |
| `package.json` | 프로젝트 의존성, 그리고 실행 스크립트들                   |
| `instrumentation.ts` | `OpenTelemetry` 그리고 `Instrumentation` 파일 |
| `middleware.ts` | Next.js의 요청 미들웨어                         |
| `.env` | 환경 변수들                                   | 
| `.env.local` | 지역 환경 변수 : 개인 환경 변수                      |
| `.env.production` | 실사용 프로덕션 환경 변수들                          |
| `.env.development` | 개발 환경 변수들                                |
| `.eslintrc.json` | ESLint를 위한 구성 파일                         |
| `.gitignore` | Git에 넣지 않을 파일과 폴더들                       |
| `next-env.d.ts` | Next.js를 위한 Typescript 선언                |
| `tsconfig.json` | Typescript를 위한 구성 파일                     |
| `jsconfig.json` | JavaScript를 위한 구성 파일                     |

---

### `app` 라우팅 규칙들

<br>

**라우팅 관련 파일들**

|                | |                              |
|----------------| - |------------------------------|
| `layout`       | `.js` `.jsx`, `.tsx` | 레이아웃                         |
| `page`         | `.js` `.jsx`, `.tsx` | 페이지                          |
| `loading`      | `.js` `.jsx`, `.tsx` | 로딩 UI                        |
| `not-found`    | `.js` `.jsx`, `.tsx` | Not Found UI                 |
| `error`        | `.js` `.jsx`, `.tsx` | 에러 UI                        |
| `global-error` | `.js` `.jsx`, `.tsx` | 전역 에러 UI                     |
| `route`        | `.js` `.jsx` | API endpoint                 |
| `template`     | `.js` `.jsx`, `.tsx` | 리렌더링 된 레이아웃                  |
| `default`      | `.js` `.jsx`, `.tsx` | Parallel route fallback page |


<br>

**중첩된 라우트**

| | |
| - | - |
|`folder`| 라우트 표시 |
| `folder/folder` | 중첩된 라우트 표시 |

> 폴더 명으로 url 진입 시 해당 폴더 내부의 layout, page 컴포넌트가 렌더링 됩니다.

> `Example` : `localhost:3000/folder`, `localhost:3000/folder/folder`

<br>

**동적 라우트**

| |           |
| - |-----------|
|`[folder]`| 동적 라우트 표시 |
|`[...folder]`| 모든 경로를 붙잡는다는 라우트 표시 |
|`[[...folder]]`| 선택적으로 모든 경로를 붙잡는다는 라우트 표시 |

<br>

**라우트 그룹과 보안 폴더들**

| | |
| - | - |
|`(folder)`| 그룹 표시 된 라우트는 라우팅에서 제외된다 |
|`_folder`| Opt folder and all child segments out of routing |

<br>

**Parallel and Intercepted Routes**

| | |
| - | - |
|`@folder`| Named slot |
|`(.)folder`| 같은 단계에서 가로챈다 |
|`(..)folder` | 한 단계 위에서 가로챈다 |
|`(..)(..)folder`| 두 단계 위에서 가로챈다 |
|`(...)folder`| 최상위 단계에서 가로챈다 |

<br>

### Metadata File Conventions

**App Icons**

| |                                     |                     |
| - |-------------------------------------|---------------------|
|`favicon`| `.ico`                              | Favicon 파일          |
|`icon`| `.ico` `.jpg` `.jpeg` `.png` `.svg` | 앱 아이콘 파일            |
|`icon`| `.js` `.ts` `.tsx`                  | 생성된 앱 아이콘 : 코드로 생성됨 |
|`apple-icon`| `.jpg` `.jpeg` `.png`               |애플 앱 아이콘 파일|
|`apple-icon`| `.js` `.ts` `.tsx`                  | 생성된 애플 앱 아이콘 : 코드로 생성됨 |

<br>

**`Open Graph`와 `Twitter` 이미지들**

|                   |                     |                           |
|-------------------|---------------------|---------------------------|
| `opengraph-image` | `.jpg` `.jpeg` `.png` `.gif`| Open Graph 이미지 파일         |
| `opengraph-image` | `.js` `.ts` `.tsx` | 코드로 생성된 Open Graph 이미지 파일 |
| `twitter-image`   | `.jpg` `.jpeg` `.png` `.gif`| Twitter 이미지 파일            |
| `twitter-image`   | `.js` `.ts` `.tsx`  | 코드로 생성된 Twitter 이미지 파일    |

<br>

**SEO** : 검색 최적화

| |             |                   |
| - |-------------|-------------------|
|`sitemap`| `.xml`      | 사이트 맵 파일          |
|`sitemap`| `.js` `.ts` | 코드로 생성된 사이트 맵 파일  |
|`robots`|`.txt`| Robots 파일         |
|`robots`|`.js` `.ts`| 코드로 생성된 Robots 파일 |
