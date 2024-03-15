import { Routes , Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ActionPage from '../pages/ActionPage/ActionPage.jsx'

export default function App(){

  return(

      <div>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/homePage'}/>}/>
        <Route path={"/loginPage"} element={<LoginPage/>}/>
        <Route path={"/homePage"} element={<HomePage/>}/>
        <Route path={'/actionPage'} element={<ActionPage/>}/>
      </Routes>

      </div>
    

    

    // <div>

    // <section className='hero'>
    //   <div className='content'>
    //     <h1>Riyapola Car..</h1>
    //     <p>
    //       "Get ready to go your jurney with different kind of Vehicals..""
    //     </p>
    //     <a href='#'>Login</a>
        
    //   </div>

    // </section>
    // </div>
      
  )
}
