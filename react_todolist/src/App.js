import { useState } from "react";
import "./App.css";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

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
          }
        ])
      });
    setTodo("");
  }

  function handleComplete(index) {
    setTodos((current) => {
      const newCurrent = [...current];
      newCurrent[index].isCompleted = true;
      return newCurrent;
    })
  }

  return (
    <>
      <header>
        <h1>오늘의 할일 ({todos.length}개)</h1>
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <input
              value={todo}
              type="text"
              placeholder="해야할 일을 여기에 적어주세요"
              onChange={(event) => {setTodo(event.target.value);}} />
            <button type="submit">저장</button>
          </form>
        </div>
        <hr />
      </header>
      <main>
        <ul>
          {todos.map((item, index) => (
            <li><span className={item.isCompleted && "completed"}>{item.value}</span>
              <button type="button" 
                onClick={() => handleComplete(index)}>완료</button>
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
