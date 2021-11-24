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


> 211120 day-5

28개 버튼 클릭 시 프로그레스 바 100% 가 되게 만듬

> 211122 day-6

1. 5개 버튼 클릭 시 Next btn 활성화
2. saveData 갯수가 28개 일 때 마지막 장 btn 활성화


> 211124 day-7

1. page1 클릭한 버튼 저장됨
2. page2 부터 버튼이 초기화 되기는 하나 버튼이 클릭되지 않음
3. input에서 입력된 데이터 저장형식 변경
