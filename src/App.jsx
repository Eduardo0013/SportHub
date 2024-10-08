import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./modules/admin/components/dashboard/Dashboard"
import adminRoutes from './modules/admin/routes/routes'
import userRoutes from './modules/user/routes/routes'
import { v4 } from 'uuid'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path='/admin'>
            {adminRoutes.map(({ path, element }) => <Route key={v4()} path={path} element={element} />)}
          </Route>
          <Route path='/'>
            {userRoutes.map(({ path, element }) => <Route key={v4()} path={path} element={element} />)}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App