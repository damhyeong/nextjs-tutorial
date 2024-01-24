# 1. Getting Started

---

### 새로운 프로젝트 생성하기

Next.js 어플리케이션을 생성하기 위해서, 명령어 `cd` 로 프로젝트를 만들고자 하는 위치로 이동 한 후, 밑의 명령어를 입력합니다.

```
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

* <b>React</b> 와는 약간 달리, `create-next-app` 이라는 명령어를 통해 기본적인 Next.js 어플리케이션을 생성합니다.
* 위의 명령어 중 `--example` 표시는 `Github` Repository 중 튜토리얼 코스의 예시 샘플을 가져옵니다.

<br>

---

<br>

### 프로젝트 탐색하기


튜토리얼 답지 않게 코드를 복사 붙여넣기(`Scratch`) 했으며, 많은 양의 코드가 이 `Next.js` 코스를 위해 이미 쓰여졌습니다. <br/>
하지만, 이 방식이 오히려 기존 코드 저장소가 존재하는 곳에서 일하는 <b><i>실제 개발 환경</i></b>을 반영합니다.


~~모든 어플리케이션 코드를 작성하는 것을 제외하고,~~ 우리의 목표는 `Next.js`의 주요 기능 학습에 초점을 맞춥니다.

다운로드가 끝난 후 코드 에디터를 연 후, `nextjs-dashboard` 프로젝트를 오픈합니다.

```
cd nextjs-dashboard
```
이제 프로젝트를 탐색하러 가봅시다.

<br>

### 폴더 구조

프로젝트가 밑의 폴더 구조를 따르는 것을 알 수 있습니다.

```text
app
    /lib
    /ui
    
public

scripts

next.config.js

...
```

* `/app` : 어플리케이션의 모든 **routes**, **Components**, **logic** 을 담고 있습니다. 이 곳은 가장 많은 작업을 수행 할 곳 입니다.


* `/app/lib` : 재사용 가능한 유틸리티 함수들, 그리고 데이터 요청 함수들과 같은 함수들을 담는 곳 입니다.


* `/app/ui` : **cards**, **tables**, **forms** 와 같은 모든 UI 컴포넌트를 담습니다. 시간을 아끼기 위해, 미리 스타일링 된 컴포넌트가 존재합니다.


* `/public` : 이미지와 같은 정적 자산들을 보관합니다.


* `/scripts` : 추후 다룰 챕터에서 데이터베이스를 채울 **seeding**::초기 스크립트를 담습니다.


* **Config Files** : 어플리케이션의 최상단 파일에 `next.config.js`와 같은 옵션 구성 파일이 있습니다. 대부분 이런 파일들은 `create-next-app`을 통해 생성된 프로젝트가 시작되기 전 미리 생성됩니다.<br>
이 교육 코스에서는 수정 할 필요가 없습니다.


### Placeholder data

미리 지정 된 데이터를 가지고 있는 것은 유저 인터페이스를 제작 할 때 도움이 됩니다.
> `.js` 파일 내부에 데이터베이스로부터 받을 데이터를 미리 정의한다는 것

만약, 데이터베이스 or API가 사용 가능하지 않다면, 두 가지 방법으로 위의 지정 된 데이터를 정의 할 수 있습니다.

* JavaScript objects에 `JSON` 형태의 지정된 데이터를 사용합니다.
* [mockAPI](https://mockapi.io/)  와 같은 서드파티 서비스를 사용합니다.

이 프로젝트를 위해서, `app/lib/placeholder-data.js`에 미리 지정된 데이터를 제공합니다.

파일 내부의 각 JavaScript object는 데이터베이스의 `table`을 표현합니다.

예를 들어, `invoices` 테이블은 이런 식으로 표현됩니다.
> `invoice` : 송장 = 고객이 주문 한 내역, 정보를 의미

<br>

**/app/lib/placeholder-data.js**
```js
const invoices = [
    {
        customer_id : customers[0].id,
        amount : 15795,
        status : 'pending',
        date : '2022-12-06',
    },
    {
        customer_id: customers[1].id,
        amount: 20348,
        status: 'pending',
        date: '2022-11-14',
    },
    // ...
]
```
`setting up your database` 챕터에서, 초기 데이터베이스 데이터로 사용할 예정입니다.

### TypeScript

거의 모든 파일의 접미사, 즉 파일 확장자에 `.ts` or `.tsx`를 가지고 있다는 것을 알 수 있습니다.

이유는 이 프로젝트가 `TypeScript`로 쓰였기 때문입니다.

현대적인 웹 배경을 반영하여 이러한 학습 코스를 제작했습니다.

`TypeScript`를 몰라도 괜찮습니다. - `TypeScript` 코드가 필요 할 때 제공할 예정입니다.

현재로 돌아와서, `/app/lib/definitions.ts` 파일을 보겠습니다.

여기, 데이터베이스로부터 받을 타입을 수동으로 정의 해 놓았습니다.

<br>

**`/app/lib/definitions.ts`**

```ts
export type Invoice = {
    id : string;
    customer_id : string;
    amount : number;
    date : string;
    
    // 타입스크립트에서, 밑의 타입 정의는 string union 타입으로 불려집니다.
    // "status" 변수는 오직 두 가지 string 변수가 될 수 있다는 것을 의미합니다. : 'pending' or 'paid'.
    status : 'pending' | 'paid';
};
```

`TypeScript`를 사용하면, 실수로 잘못된 데이터를 컴포넌트나 데이터베이스에 통과시키지 않도록 보장 할 수 있습니다.

예를 들어, `number` 타입 대신 `string` 타입이 통과되는 것을 예방합니다.
> amount 즉, 숫자 대신 문자열이 들어가는 것을 방지함으로서 오류를 예방할 수 있습니다.

<br>

### 개발 서버를 구동시키기

`npm i`명령을 실행시켜 프로젝트 패키지를 다운로드 받습니다.

```sch
npm i
```

개발 서버를 실행하기 위해 `npm run dev`명령을 실행합니다.

```
npm run dev
```

`npm run dev` 명령은 `Next.js`의 개벌 서버를 포트 번호 **3000**에서 실행시킵니다.

`https://localhost:3000`을 브라우저에 입력해서 홈페이지를 볼 수 있습니다.