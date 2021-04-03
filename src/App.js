import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "./Hooks";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState([]);

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json));
  }

  const axiosTodos = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.data);
    console.log(result)
  }

  useEffect(() => {
    fetchTodos()
    // axiosTodos()
  },[])

  useFetch('https://jsonplaceholder.typicode.com/todos', setVal)
  console.log(val.splice(0,10))
  return (
    <div className="App">
    </div>
  );
}
