# 1. Getting Started

---

### 새로운 프로젝트 생성하기

Next.js 어플리케이션을 생성하기 위해서, 명령어 `cd` 로 프로젝트를 만들고자 하는 위치로 이동 한 후, 밑의 명령어를 입력합니다.

```bash
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

```bash
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


* `/app/ui` : 


* `/public` : 


* `/scripts` : 


* **Config Files** : 