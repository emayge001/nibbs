import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './assets/components/Navbar';
import Dashboard from './assets/components/Dashboard';
import Settings from './assets/components/Settings';
import Billers from './assets/components/Billers';
import Mandates from './assets/components/Mandates';
import Transactions from './assets/components/Transactions';
import Features from './assets/components/Features';
import Reports from './assets/components/Reports';


function App() {
  return (
    <>
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/billers' element={<Billers />} />
        <Route path='/mandates' element={<Mandates />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/features' element={<Features />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </>
  )
}

export default App
