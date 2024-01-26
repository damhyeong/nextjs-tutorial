---
title : "Defining Routes"
date : "2024-01-26"

---

# 라우트 정의하기

이 페이지에서는 Next.js 어플리케이션에서 조직적인 라우트를 정의하는 법을 알려 줍니다.

---

<br>

### 라우트 만들기

Next.js는 라우터 기반의 파일 시스템을 이용합니다.

각 폴더는 **라우트 세그먼트** 를 의미하며, URL 세그먼트를 표현합니다.

중첩 라우트를 만들기 위해, 각각 내부에 폴더를 중첩 할 수 있습니다.

```
app                 => Root Segment ("/")
    /dashboard      => Segment ("/dashboard")
        /settings   => Leaf Segment ("/dashboard/settings")
```
> acme.com / `dashboard` / `settings`

`page.js` 파일은 공개적으로 접근 가능한 라우트 세그먼트를 만듭니다.

```
app                     => URL(/)
    /page.js
    
    /dashboard          => URL(/dashboard)
        /page.js
        
        /settings       => URL(/dashboard/settings)
            /page.js
        
        /analytics      => URL( 주소 없음 )
```

이 예시에서, `/dashboard/analytics` URL 경로는 접근 가능하지 않습니다.

해당 디렉토리에서 URL에 반응하는 `page.js` 파일이 없기 때문입니다.

이 디렉토리에서는, `component`, `stylesheet`, `image`, 외 다른 파일을 저장하는 용도로 쓸 수 있습니다.

---

<br>

### UI 만들기

특수 파일 규칙은 각 라우트 세그먼트의 UI를 만들기 위해 사용됩니다.

보통 `page` 파일이 해당되는 라우트의 UI를 표현하며, 

`layout`파일은 여러 라우트를 통틀어 공유되는 UI를 보여주기 위해 사용됩니다.

<br>

예시로, 첫 번째 페이지를 만들기 위해, `page.js`파일을 `app` 디렉토리에 추가하고 밑의 코드를 추가합니다.

> 저는 `TypeScript`를 사용하기에, 예시는 `tsx`파일로 보여주겠습니다.
```tsx
// URL( app/page.tsx )

export default function Page() {
    return <h1>Hello, Next.js!</h1>
}

// -> es6 버전

const Page = () : React.ReactNode => {
    return <h1>Hello, Next.js!</h1>
}
export default Page;
```