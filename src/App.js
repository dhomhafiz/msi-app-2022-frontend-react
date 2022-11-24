import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './pages/Home'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple, blue } from '@material-ui/core/colors'
import Home from './pages/Home'
import Guest from './pages/Guest'
import TableLocation from './pages/TableLocation'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: blue
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeighMedium: 600,
    fontWeightBold: 700

  }
})

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/guest/:id"> 
            <Guest />
          </Route>
          <Route path="/tableLocation"> 
            <TableLocation />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
