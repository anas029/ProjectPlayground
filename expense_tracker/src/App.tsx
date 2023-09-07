import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Auth from './pages/auth/page'
import ExpenseTracker from './pages/expense-tracker/page'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
