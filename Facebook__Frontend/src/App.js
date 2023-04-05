import * as React from 'react'

//import router from react-router-dom
import { Routes, Route } from 'react-router-dom'

//import pages from copoonents
import { Home, Protector } from './Pages'

//import theme checker from function & run check when app renders
import { themeCheck } from './Functions/darkTheme'

//import absolute components
import ABS from './ABS'

//import routes from './Routes'
import layoutRoute from './routes'

const App = () => {
  React.useEffect(() => {
    themeCheck()
  }, [])

  return (
    <>
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
    </>
  )
}

export default App
