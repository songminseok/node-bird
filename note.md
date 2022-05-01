# 강의 노트

이 노트는 모든 강의를 요약하는 것이 아닌 수강 중에 내가 새로 알게 된 내용들을 중심으로 정리를 한다. 


## 2022-04-27

learn 폴더를 만들고 수강 시작

인프런의 노드 강좌는 node 14, next 9, ant 4 버전으로 작업했으나, 나는 node 16, next 12 으로 따라갈 계획이다. 그리고, typescript를 사용한다.

```
npm init
npm i next
npm install --save-dev typescript @types/react @types/node
npm run dev
```

어랏 react를 설치 안 해도 실행이 되는 것을 확인할 수 있다. 재밌는 건 위에서 보면 @types는 설치했다는 거다. 일단 진행하면서 어떤 에러가 나는지 봐야겠다.

pages 폴더 아래 다른 tsx 파일을 만들고 테스트를 해 보니 라우팅이 잘 된다. :-)

FC 타입으로 functional component를 설정하면 children을 바로 사용할 수 있었다.(React 18 이전..)
(Remove React.FC from Typescript template)[https://github.com/facebook/create-react-app/pull/8177]
React 18 이후에는 제거되었으므로 사용할 필요가 없다.

## 2022-04-27 2차

ant design, ant design icon, @emotion/react, @emotion/styled 를 사용한다. (강좌에서는 ant design과 styled-component를 사용하였다.)

ant design이 4.20으로 넘어오면서 Menu 사용법이 조금 바뀌었다.

## 2022-05-02 3차

jsx-ally 로 typo 낸 것을 a11y 로 수정

lerna로 설정하지 않고 루트에서 시작하여 eslint 가 정상동작하지 않음. 이에 intellij를 learn 폴더에서 직접 열어서 사용하고, git에 intellij 프로젝트 설정을 푸시함.



