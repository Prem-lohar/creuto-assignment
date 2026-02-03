import SignupPage from './components/SignupPage'
import Footdown from './components/Footdown'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import AuthLayout from './components/AuthLayout'

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <div className='flex-1'>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path='/' element={<SignupPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Route>
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </div>
        <Footdown />
      </div>
    </BrowserRouter>
  )
}

export default App
