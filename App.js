import React,{useState,useEffect} from 'react';
import './App.css';



function App() {


    var app6= localStorage.getItem("app6") || "";
    if(app6 !== "yes") {
      if(window.confirm("You really want to confirm this popup")){
        window.localStorage.href = "https://localhost:3000/";
      }
      localStorage.setItem("app6","yes");
    }









return (
        <div className='App'>
        </div>
  );
}

export default App;