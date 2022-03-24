import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from '../Homepage/index';
import TeamChoose from '../TeamChoose/TeamChoose';
import WebTeam from '../WebTeam/WebTeam';
import './App.css';

function App() {
    return (
      <main className='main'>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/team" element={<TeamChoose />} />
            <Route path="/our_team:team" element={<WebTeam />} />
        </Routes>
      </main>
    );
}

export default App;
