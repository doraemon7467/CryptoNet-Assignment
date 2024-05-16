import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './Card';

export default function App() {
  const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc"
  const [response,setResponse] = useState([]);
  useEffect(() => {
    axios.get(API_URL)
    .then((res) => setResponse(res.data));
  }, [])
  
  return (
    <div>
      {response && response.results && response.results.map((item, index) => (
        <Card key={index} gender={JSON.stringify(item.gender)}
        firstname = {JSON.stringify(item.name.first)}
        lastname = {JSON.stringify(item.name.last)}
        phone = {JSON.stringify(item.phone)}
        src = {item.picture.large}/>
      ))}
    </div>
  );
}
