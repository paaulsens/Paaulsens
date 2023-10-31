import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Quiz, Search, Edit } from './Pages/'
import Quiz_Play from './Pages/Quiz_Play';

import './Css/App.css';
import './Css/stylesheet.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/quiz/play' element={<Quiz_Play />} />
          <Route path='/search' element={<Search />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
