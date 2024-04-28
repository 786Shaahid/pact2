import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [message,setMessage]=useState({message:'abhi nhi aaya hai bhai'});

  useEffect(()=>{
   fetchData()
  },[]);

  const fetchData=async()=>{
    const res=await axios.get('/mydata');
    console.log(res.data);
    setMessage(res.data)
 }
  return (
    <div className="App">
     <h1>hii,my name is khan </h1>
     <p>{message.message}</p>
    </div>
  );
}

export default App;
