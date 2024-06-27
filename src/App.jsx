import routes from './router/routes'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />)}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
