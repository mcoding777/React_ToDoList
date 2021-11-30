import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{
    isCompleted: false,
    value: ""
  }]);

  function handleSubmit(event) {
    event.preventDefault();
    if (todo === "") {
      return ;
    }
    setTodos(current => {
      return (
        [...current, 
        {
          isCompleted: false,
          value: todo
        }]
        )
      });
    setTodo("");
  }
  
  function Complete() {
    return (
      <button type="button">완료</button>
    )
  }

  function Update() {
    return (
      <button type="button">수정</button>
    )
  }

  function Delete() {
    return (
      <button type="button">삭제</button>
    )
  }

  return (
    <div>
      <h1>오늘의 할일 ({todos.length}개)</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="해야할 일을 여기에 적어주세요"
          onChange={(event) => {setTodo(event.target.value);}} />
        <button type="submit">저장</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, key) => (
          <li key={key}>{item}
            <Complete />
            <Update />
            <Delete />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
