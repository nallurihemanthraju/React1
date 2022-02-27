import React from 'react'
import Navbar from './Navbar/Navbar'
import Industry from './Router/Industry'
import Platform from './Router/Platform'
import Services from './Router/Services'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
 const App = () => {
  return (
    <React.Fragment>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/my-app/src/Router/Industry.js' element={<Industry/>}/>
        <Route path='/my-app/src/Router/Platform.js' element={<Platform/>}/>
        <Route path='/my-app/src/Router/Services.js' element={<Services/>}/>
      </Routes>
      </Router>
      </React.Fragment>
  
  )
}
export default App