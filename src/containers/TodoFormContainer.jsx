import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../\bstore/actions";
import TodoForm from "../components/TodoForm";

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
