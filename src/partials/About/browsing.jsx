import React, {useState, useEffect} from 'react';
import axios from "axios";

function Browsing() {
    const [history, setHistory]=useState([]);
    useEffect (() => {
        axios.get(`http://127.0.0.1:3000/history/getHistory`)
        .then(res => {
            console.log("res", res.data);
            setHistory(res.data.history);
        })
    },[]);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th>Title</th>
                <th>Time Active</th>
                <th>URL</th>
                <th>Number of Clicks</th>
                <th>Hash</th>
                
              </tr>
              </thead>
              <tbody>
        {history.map((his,index) => (
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td>{his.title.toString().substring(0, 12)} </td>
            <td>00:{Math.floor(Math.random() * 60)}:{Math.floor(Math.random() * 10)}</td>
            <td>{his.url.toString().substring(0, 30)}{"..."}</td>
            <td>{Math.floor(Math.random() * 20)}</td>
           
            <td></td>
          </tr>
        ))}
        </tbody>
        </table>
      {/*  Page content */}
      <main className="grow">
       

      </main>

    </div>
  );
}

export default Browsing;