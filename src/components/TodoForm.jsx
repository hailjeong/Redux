import { useEffect, useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  const click = () => {
    add(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const onkeypress = (e) => {
    if (e.key === "Enter") {
      return click();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} onKeyPress={onkeypress} />
      <button onClick={click}>추가</button>
    </div>
  );
}
