# 3기_직업심리검사_이호준

> 211116 day-1

React 개발환경 완성
- react-route-dom @5 버전 다운그레이드

React router를 이용한 페이지 간 이동 구현

Home, QuestionPage, ResultPage 주제별 컴포넌트 분할

> 211117 day-2

home.js/ name, gender 입력 시 btn 활성화 구현

> 211118 day-3

하드코딩으로 exPage 구현

styled-components 설치
//yarn add styled-components

yarn add react-paginate 설치


> 211119 day-4

app.js엔 쿼리 호출에 관한 코드나 데이터 관리 state는 안넣는게 좋음. 
쿼리 호출할 때마다 앱 전체가 리렌더링되기 때문
쿼리 호출하는 부분은 QuestionPage.js로 이동