import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './pages/Aboutpage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {
  
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={ 
          <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        </>
          }
          />
          <Route path='/about' element={<AboutPages />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App