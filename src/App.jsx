import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {

  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={ <Home /> }/>
            <Route exact path='/company' element={ <Company /> }/>
            <Route exact path='/contact' element={ <Contact /> }/>
            <Route exact path='/projects' element={ <Projects /> }/>
            <Route exact path='/newproject' element={ <NewProject/> } />
        </Routes>
      </Container>
      <Footer />
    </Router>
    
  )
}

export default App
