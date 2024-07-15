
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ProtectedRouteWrapper from './components/AuthWrapper/ProtectedRouteWrapper'

function App() {
  return (
    <ProtectedRouteWrapper>
      <>
        <NavBar/>
        <div className='content'>
          <Outlet/>
        </div>
      </>
    </ProtectedRouteWrapper>
  )
}

export default App
