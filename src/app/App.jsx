import { Routes , Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.jsx'
import LoginPage from '../pages/HomePage/HomePage.jsx'
import ActionPage from '../pages/AddCar/AddCar.jsx'
import Main from '../component/Main/Main.jsx'
import { useEffect, useState } from 'react'

export default function App(){

  const [login,setLogin] = useState(false);

  useEffect(()=>{
    const key =localStorage.getItem('admToken')
    console.log(key)

    if(key!==null){
      setLogin(true)
      
    }else{
      setLogin(false);
    }

  },[])



  return(

      <div>
        {
        login ?
        <Main/>
        :
        <div>
      <Routes>
        <Route path={'*'} element={<Navigate to={'/homePage'}/>}/>
        {/* <Route path={"/loginPage"} element={<LoginPage/>}/> */}
        <Route path={"/homePage"} element={<HomePage/>}/>
        <Route path={'/actionPage'} element={<ActionPage/>}/>
        <Route path={'/main'} element={<Main/>}/>
      </Routes>
      </div>
}

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
