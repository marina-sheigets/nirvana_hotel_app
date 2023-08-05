import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/MainPage/MainPage'
import AboutPage from './components/pages/AboutPage/AboutPage'
import ContactsPage from './components/pages/ContactsPage/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
      </Routes>
    </BrowserRouter>
  )}
export default App
