import * as React from 'react'

//import router from react-router-dom
import { Routes, Route } from 'react-router-dom'

//import pages from components
import{ MainScreen } from './Pages/Welcome-Page/index'
import { Protector } from './Pages'

//import theme checker from function & run check when app renders
import { themeCheck } from './Functions/utilities/darkTheme'

//import absolute components
import ABS from './ABS'

//import routes from './Routes'
import layoutRoute from './routes'

//import global context from context
import { useGlobalContext } from './Hooks/context/UseContext'

const App = () => {
  //check theme every time app renders
  React.useEffect(() => {
    themeCheck()
  }, [])

  //context pathname.
  const { pathname } = useGlobalContext()
  
  //scrolling the individual page to last section
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])
  
  return (
    <React.Fragment>
      <Routes>
        <Route
          path='/'
          element={
            <Protector>
              <MainScreen />
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
          );
        })}
      </Routes>
      <ABS />
    </React.Fragment>
  );
}

export default App
