# WELCOME, Uwon

어서오세요, Uwon!  
이 레포지토리는 `React`, `React Router Dom`, `MUI`에 대해서 소개하기 위해 개설했어요 :)

## How to start

### Git

먼저, 이 레포지토릴 Clone 해야 해요:  

1. Git bash 실행

1. 레포지토리가 저장될 폴더로 이동 : `C:\Documents\Workspaces\` 를 추천해요

    - Documents 까지는 기본이지만, Workspaces 폴더는 기본이 아니에요

    - `C:\Documents` 에서 다음의 명령을 통해 Workspaces 폴더를 만들 수 있어요:

        ```bash
        $ mkdir Workspaces
        ```

    - 이제 만들어진 폴더로 Change Directory 해요

        ```bash
        $ cd Workspaces
        ```

1. 클론하세요!

    ```bash
    git clone https://github.com/hajun-myoung/hello-uwon.git
    ```

    윈도우 기준, 터미널에서 복붙은 `Shift + Ins` 키로 가능해요

### Yarn start

`yarn start` 명령어로 웹 서버를 시작해요  

웹 서버가 시작되면, http://localhost:3000/ 으로 사이트에 접근할 수 있어요

### 같이 보기

`yarn start` 후 제 터미널에는

```bash
Compiled successfully!

You can now view guide-project in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.20.10.4:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

라고 출력됐어요  

여기서, **On Your Network** 부분에 있는 IP 주소 및 포트 번호가 보이나요?  
같은 Wifi를 쓰는 사람이 이 주소를 치면, 내가 호스팅하고 있는 사이트를 핸드폰이나 다른 컴퓨터로 접근할 수 있어요 (대박!)

**프로젝트 진행 중에, 이 방법으로 모바일 뷰를 테스트**해도 좋아요
