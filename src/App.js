import { Container } from '@mui/material'
import {Switch, Route} from 'react-router-dom'
import HomePage from './HomePage';
import About from './About'
import NotFound from './NotFound'

function App() {

  return (
    <Container sx={{ marginTop: 5 }} maxWidth="md">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;