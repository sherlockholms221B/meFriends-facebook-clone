import * as React from 'react'

//import router from react-router-dom
import { Routes, Route } from 'react-router-dom'

//import pages from copoonents
import { Home, Protector } from './Pages'

//import theme checker from function & run check when app renders
import { themeCheck } from './Functions/utilities/darkTheme'

//import absolute components
import ABS from './ABS'

//import routes from './Routes'
import layoutRoute from './routes'


const App = () => {
  //check theme every time app renders
  React.useEffect(() => {
    themeCheck()
  }, [])

  return (
    <React.Fragment>
      <Routes>
        <Route
          path='/'
          element={
            <Protector>
              <Home />
            </Protector>
          }
        />
        {layoutRoute.map((route, index) => {
          return (
            <Route
              path={`${route.route}`}
              key={index + route.route}
              element={route.component}
            />
          )
        })}
      </Routes>
      <ABS />
    </React.Fragment>
  )
}

export default App
