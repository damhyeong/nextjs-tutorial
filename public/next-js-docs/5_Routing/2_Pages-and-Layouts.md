---
title : "Pages and Layouts"
date : "2024-01-26"

---

# Pages

`page` 파일은 하나의 라우트에 특수한 UI입니다.

`page.js` 파일로부터 `export` 할 컴포넌트를 정할 수 있습니다.

중첩 폴더를 사용하며 라우트를 정의할 수 있고, 공개적으로 접근 가능한 `page.js`파일을 만들 수 있습니다.

`page.js` 파일을 `app` 디렉토리 내부에 추가하여 첫 번째 페이지를 만듭니다.

```
app                 => URL (/)
    /page.js
    
    /dashboard      => URL (/dashboard)
        /page.js
```

<br>

```tsx
// app/page.tsx -> URL ( / )

const Page = () : JSX.Element => {
    return <h1>Hello, Home page!</h1>
}
export default Page;
```
```tsx
// app/dashboard/page.tsx -> URL ( /dashboard )

const Page = () : JSX.Element => {
    return <h1>Hello, Dashboard Page!</h1>
}
export default Page;
```

<br>

**알면 좋은 지식들**

* 페이지가 될 수 있는 파일은 언제나 라우트의 마지막 `Leaf` 파일입니다.
* `.js`, `.jsx`, `.tsx` 파일 확장자가 Page 로 사용됩니다.
* `page.js` 파일은 공개적으로 접근 가능한 라우트를 만들기 위해 필요합니다.
* Page는 기본적으로 `Server Component`이지만, `Client Component`가 될 수 있습니다.
* Page는 데이터 요청이 가능합니다.

---

<br>

### Layouts

`layout` 은 여러 페이지 사이에서 공유되는 UI 입니다. `ex - Header, Side Menu`

