import { Suspense, lazy } from 'react'
import { Routes as Paths, Route, BrowserRouter as Router } from 'react-router-dom'
import Wrapper from 'src/Layout/Wrapper'

const StartQuote = lazy(() => import('pages/StartQuote'))
const Quote = lazy(() => import('pages/Quote'))
const Summary = lazy(() => import('pages/Summary'))
const NotFound = lazy(() => import('pages/NotFound'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Wrapper>
          <Paths>
            <Route path="/quote" element={<Quote />} />
            <Route path="/sumary" element={<Summary />} />
            <Route path="/" element={<StartQuote />} />
            <Route element={<NotFound />} />
          </Paths>
        </Wrapper>
      </Suspense>
    </Router>
  )
}

export default Routes
