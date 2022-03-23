import React from 'react';
import Homepage from '../Homepage/index';
import TeamChoose from '../TeamChoose/TeamChoose';
import WebTeam from '../WebTeam/WebTeam';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
    // const handlePage = (page) => {
    //     setPage(page)
    // }
    //
    // const [page, setPage] = useState();

    return (
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/team" element={<TeamChoose />} />
          <Route path="/our_team:team" element={<WebTeam />} />
      </Routes>
        // <main className='main'>
        //     {page}
        // </main>
    );
}

export default App;
