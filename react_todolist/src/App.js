import { useState } from "react";
import "./App.css";

function App() {

  const localTodos = JSON.parse(localStorage.getItem('todos'))
  const [todo, setTodo] = useState("");
  const [create, setCreate] = useState("");
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
          value: todo,
          created: false
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

  function handleCreate(index) {
    if (!todos[index].isCompleted) {
      setTodos((current) => {
        const newCurrent = [...current];
        newCurrent[index].created = true;
        localStorage.setItem('todos', JSON.stringify(newCurrent));
        return newCurrent;
      })
    }
  }

  function handleRemove(index) {
    setTodos((current) => {
      const newCurrent = [...current];
      newCurrent.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(newCurrent));
      return newCurrent;
    })
  }

  function handleCreateComplete(index) {
    setTodos((current) => {
      const newCurrent = [...current];
      newCurrent[index].value = create ? create : newCurrent[index].value;
      newCurrent[index].created = false;
      localStorage.setItem('todos', JSON.stringify(newCurrent));
      return newCurrent;
    })
    setCreate("");
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
      </header>
      <main>
        <ul>
          {todos?.map((item, index) => (
            <li key={index}><span className={item.isCompleted ? "completed" : ""}>
              {item.created ? 
                <input defaultValue={item.value} 
                type="text" 
                onChange={(event) => {setCreate(event.target.value);}} />
              : item.value}</span>
              {item.created ? 
                <button type="button" 
                onClick={() => handleCreateComplete(index)}>수정하기</button>
              : 
              <>
              <button type="button" 
              onClick={() => handleComplete(index)}>완료</button>
              <button type="button"
                onClick={() => handleCreate(index)}>수정</button>
              <button type="button"
                onClick={() => handleRemove(index)}>삭제</button>
              </>}
              
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
