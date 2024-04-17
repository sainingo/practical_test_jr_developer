import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Task from './pages/Task'

function App() {

  return (
   <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Task />} />
    </Routes>
   </>
  )
}

export default App
