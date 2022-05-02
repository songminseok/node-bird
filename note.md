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

nextjs 에서 _app.tsx 의 Props를 받을 때는 AppProps를 받으면 편하다.

```tsx
const NodeBird = ({Component, pageProps}: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}
```

a tag에서 `rel="noopener noreferer"`의 사용 관련하여
(rel 속성 - noreferrer, noopener, nofollow)[https://3rabbitz.com/blog_ko/08d34c69855fbcad]
(Everything You Need to Know About rel=”noopener noreferrer”)[https://clever-solution.com/everything-you-need-to-know-about-rel-noopener-noreferrer-tags-purpose-benefits-and-seo-impact/]

## 2022-05-02 4차

react-hook-form을 도입하여 Form 작업을 한다.

인라인 스타일에 object를 사용하면 rerendering이 발생한다. 왜냐하면 object를 function이 실행될 때마다 새로 만들어지기 때문이다.
하지만 인라인 스타일이 rerendering에 심각한 영향을 미치지 않을 수 있으므로 너무 과도하지만 않으면 크게 문제는 없다.

@emotion css 스타일을 사용하려면 `tsconfig.json`의 `compilterOptions`부분에 다음을 추가한다.

```json lines
"jsx": "react-jsx",
"jsxImportSource": "@emotion/react"
```