import { useEffect, useState } from 'react'
import './index.css'
import RoutePage from './Routes'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer />
        <RoutePage />
    </div>
  )
}

export default App
