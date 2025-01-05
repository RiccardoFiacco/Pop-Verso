import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes Component={DefaultLayout}>
        <Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
