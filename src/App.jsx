import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Navigate,
} from 'react-router-dom'
import FooterBottom from './components/home/Footer/FooterBottom'
import Header from './components/home/Header/Header'
import HeaderBottom from './components/home/Header/HeaderBottom'
import SpecialCase from './components/SpecialCase/SpecialCase'
import SignIn from './pages/Account/SignIn'
import SignUp from './pages/Account/SignUp'

import Home from './pages/Home/Home'
import Showcase from './pages/Showcase/Showcase'
import Profile from './pages/Profile/Profile'
import Donate from './pages/Donate/Donate'
import { useAuth } from './hook/useAuth'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import NotFound from './pages/404/404'

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <FooterBottom />
    </div>
  )
}

function Routes() {
  const { currentUser } = useAuth()
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* ==================== Header Navlink Start here =================== */}
          <Route index element={<Home />}></Route>
          <Route path="/showcase" element={<Showcase />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>,
    ),
  )

  return router
}

function App() {
  return (
    <ThemeProvider>
      <div className="font-bodyFont bg-white dark:bg-slate-900">
        <RouterProvider router={Routes()} />
      </div>
    </ThemeProvider>
  )
}

export default App
