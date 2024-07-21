
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderComp from './components/headercomp/headercomp'
import HomePage from './sites/HomePage/HomePage'
import Events from './sites/events/event'
import AboutPage from './sites/AboutPage/AboutPage'
import Departments from './sites/departments/department'


function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <HeaderComp/>
     <Routes>
           <Route path ='/' element={<HomePage/>}>HomePage</Route>
           <Route path='/Departments' element={<Departments/>}>ContactPage</Route>
           <Route path='/AboutPage' element={<AboutPage/>}>ContactPage</Route>
           <Route path='/Events' element={<Events/>}>ContactPage</Route>
        </Routes>
        
     </BrowserRouter>


     <footer className="footer ">
        <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App