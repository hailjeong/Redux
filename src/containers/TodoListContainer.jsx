import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// // connect 함수를 실행한 결과가 함수가 그 함수를 실행한 결과가 컨테이너 이기 때문에 함수를 두 번 적어줘야 한다.
// const TodoListContainer = connect(
//   // config 영역 크게 보면 두 가지가 들어간다.
//   // 어떤 props로 넣어줄 것인가를 mapStateProps라고 한다.
//   // state에 dispatch를 할 수 있는 함수를 props로 넣어주는 함수이다.
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos}></TodoList>;
}

export default TodoListContainer;
