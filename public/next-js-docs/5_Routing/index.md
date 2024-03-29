---
title : "Routing"
date : "2024-01-26"
---

# 라우팅 기초

모든 어플리케이션의 뼈대는 라우팅입니다.

이 페이지에서는 웹에 대한 라우팅의 기초 개념과, Next.js에서 라우팅을 어떻게 다루는지 설명합니다.

---

<br>

**먼저, 문서 전체에서 사용되는 용어를 보겠습니다.** :

```mermaid
---
title : Tree
---
graph TD;
    A(app)-->C(blog);
    C-->D["[slug]"];
    A-->B("dashboard::Root");
    subgraph Subtree
        B-->E("anlytics::Leaf");
        B-->F(settings);
        F-->G("password::Leaf");
        F-->H("profile::Leaf")
    end
    
```
- **Tree** : 계층적 구조를 보여주는 규칙입니다. 예를 들어, 위와 같이 부모, 자식 컴포넌트는 폴더 구조를 보여줍니다.
- **Subtree** : **Tree**의 일부이며, 새로운 *Root(first)* 에서 시작하며, *Leaf(last)* 에서 끝납니다.
- **Root** : **Tree** 혹은 **Subtree**의 첫 번째 노드입니다.
- **Leaf** : **Subtree**에서 자식 노드가 없는 마지막 노드를 의미합니다.

> acme.com / `dashboard` / `settings`
> 
> `Domain` /  `Segment` / `Segment`
> 
> `Segment` / `Segment` => `Path`

- **URL Segment** : `/`에 의해 분리 된 URL path의 일부.
- **URL Path** : `domain(도메인 : ex - localhost:3000)` 이후 따라오는 URL의 일부. 혹은 `Segment`로 이루어진다는 의미.

---

<br>

### `app` 라우터 에 관하여

버전 13에서, Next.js는 `React Server Components` 기반으로 구축된 새로운 `App Router`를 발표했습니다.

`App Router`는 `shared layouts`, `nested routing`, `loading states`, `error handling` 등등이 지원됩니다.

<br>

`App Router`는 `app`으로 명명된 새로운 디렉토리에서 작동합니다.

`app` 디렉토리는 점진적인 채택을 허용하기 위해 `pages` 디렉토리와 함께 동작합니다.
> 새로운 `App Router` 사용량을 늘리기 위해, 이전 라우터 사용 방식인 `Pages Router`도 같이 운용되게 만들어, 
> 
> `Page Router` 이용자들에게 새로운 방식인 `App Router`로 유입 될 수 있도록 배려하는 모습으로 보입니다.

```
app
    /...

pages
    /...    
```

기본적으로, `app` 디렉토리 내부의 컴포넌트들은 `React Server Components`입니다.

이러한 것은 성능 최적화 면에서나, 쉽게 이들을 애택할 수 있게 허용합니다. 

또한,  `Client Components`도 사용 할 수 있습니다.

> `React Server Components` : 서버에서 렌더링 되어 사용자에게 제공 => 사용자 최적화 중심
> 
> `React Client Components` : 사용자 환경에서 렌더링 되어 `React` 기반의 `useState`와 같은 변동성 기능들을 유연하게 사용.

---

<br>

## 폴더와 파일의 규칙

<br>

**Next.js는 `파일 시스템` 기반의 라우터를 사용합니다. `:`**

* **폴더**는 주로 라우티를 결정하는 데 쓰입니다.

[이어서 작성 할 페이지](https://nextjs.org/docs/app/building-your-application/routing)