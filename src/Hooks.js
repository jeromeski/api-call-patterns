import axios from "axios"
import { useEffect} from "react"


export const useFetch = (url, setVal ) => {
  
  const fetchTodos = async () => {
    const result = await fetch(url)
    .then(res => res.json())
    .then(json => json);
    setVal(result)
  }

  useEffect(() => {
    fetchTodos()
  },[])

}