import { useState } from "react";
import "./App.css";

function App() {

  const localTodos = JSON.parse(localStorage.getItem('todos'))
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(localTodos ? localTodos : [])

  function handleSubmit(event) {
    event.preventDefault();
    if (todo === "") {
      return ;
    }
    setTodos(current => {
      const newCurrent = [...current, 
        {
          isCompleted: false,
          value: todo
        }]
      localStorage.setItem('todos', JSON.stringify(newCurrent));
      return newCurrent
      });
    setTodo("");
  }

  function handleComplete(index) {
    setTodos((current) => {
      const newCurrent = [...current];
      newCurrent[index].isCompleted = true;
      localStorage.setItem('todos', JSON.stringify(newCurrent));
      return newCurrent;
    })
  }

  function handleRemove(index) {
    setTodos((current) => {
      const newCurrent = [...current];
      newCurrent.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(newCurrent));
      return newCurrent;
    })
  }

  return (
    <>
      <header>
        <h1>오늘의 할일 ({todos.length}개)</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
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
          {localTodos?.map((item, index) => (
            <li key={index}><span className={item.isCompleted && "completed"}>{item.value}</span>
              <button type="button" 
                onClick={() => handleComplete(index)}>완료</button>
              <button type="button">수정</button>
              <button type="button"
                onClick={() => handleRemove(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
