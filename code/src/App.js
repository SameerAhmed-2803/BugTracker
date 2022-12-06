import React from 'react'
import {useSelector} from 'react-redux'
import Login from './Views/Web Pages/Login/login'
import ViewBugPage from './Views/Web Pages/viewBugs'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "./Views/Sidebar/sidebar"
import CreateBug from './Views/Components/Bug Create & edit/bugForm'
import Dashboard from './Views/Web Pages/Dashboard/dashboard'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> :
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Dashboard />}></Route>
        <Route path='/viewbugs' element={<ViewBugPage />}></Route>
        <Route path='/create' element={<div className='page-container'><CreateBug title="Create Bug" /></div>}></Route>
      </Routes>
    </>
    }
    </Router>
  );
}

export default App;
