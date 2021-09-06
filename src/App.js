import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'
import HomePage from './Pages/HomePage/HomePage'
import PageNotFound from './Pages/PageNotFound'
import styled from 'styled-components'

const StyledApp = styled.div`
  padding-right: 6.25rem;
  @media (max-width: 1680px) {
    padding-right: 4.25rem;
  }
  @media (max-width: 1024px) {
    padding-right: 0;
  }
`

function App() {
  return (
    <div className="App">
      <Router>
        <StyledApp>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </main>
        </StyledApp>
        <Footer />
      </Router>
    </div>
  )
}

export default App
