import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          
          <Routes>
            {/* //http://localhost:3000 */}
              <Route path='/' element = {<ListEmployeeComponent/>} ></Route>

              {/* //http://localhost:3000/employees */}
              <Route path='/employees' element={<ListEmployeeComponent/>} ></Route>

              {/* //http://localhost:3000/add-employee */}
             <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

             {/* //http://localhost:3000/update-emmployee/1 */}
             <Route path='/update-employee/:id' element = {<EmployeeComponent/>} ></Route>
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
