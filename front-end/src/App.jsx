import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout/DefaultLayout'
import { Home } from './pages/Home'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
         <Route index Component={Home}/> 
        </Route>   
      </Routes>
    </BrowserRouter>
  )
}

export default App
