// 액션 타입 정의
export const ADD_TODO = "redux-start/todos/ADD_TODO";
export const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO ";

// 액셤 생성 함수
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  // 액션 만들기
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 2}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

// 초기값
const initialState = [];

// 리듀서
export default function reducer(previousState = initialState, action) {
  // 초기값을 설정해주는 부분, 위에서 initalState를 설정해주지 않았을 때는 아래 코드처럼 이용하면 된다.
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
}
