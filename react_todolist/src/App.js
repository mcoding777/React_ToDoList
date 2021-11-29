import { useImperativeHandle, useState } from "react";

function App() {

  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (todo === "") {
      return ;
    }
    setTodo("");
  }

  return (
    <div>
      <h1>오늘의 할일</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="해야할 일을 여기에 적어주세요"
          onChange={(event) => {setTodo(event.target.value);}} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default App;
