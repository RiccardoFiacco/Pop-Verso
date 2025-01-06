import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout/DefaultLayout'
import { Home } from './pages/Home'
import { Pgs } from './pages/Pgs'
import { Teams } from './pages/Teams'
import { Details } from './pages/Details'
import { Add } from './pages/Add'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={Home}/> 
          <Route path='/pgs' Component={Pgs}/> 
          <Route path='/teams' Component={Teams}/> 
          <Route path="/:type/:id" Component={Details}/>
          <Route path="/:type/add" Component={Add}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
