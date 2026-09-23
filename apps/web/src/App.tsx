import { Route, Router } from 'wouter'
import HomePage from './routes/HomePage'

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  )
}

export default App
