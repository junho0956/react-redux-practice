#####react-redux를 사용한 간단한 예제입니다.

```
src
- commom
    - createReducer => reducer를 알맞는 action에 handler해주는 역할을 합니다
    - mockData => 서버에서 데이터를 받아올 수 없어 임의로 만든 데이터셋 입니다
    - store => combineReducers를 사용해서 모든 reducer를 종합하고, 이를 사용하는 redux store 입니다
- friend
    - component
        - friend => presentation component
    - container
        - friend => container component, 상태값을 컨트롤 하는 부분
    - state => friend 컴포넌트에 사용할 액션, 액션생성함수를 선언한 리듀서
- timeline => friend 와 같은 구조입니다.
- App => react-redux Provider 컴포넌트를 사용한 구조입니다
```

21.01.09
