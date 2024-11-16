import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Events from './components/events'
function App()
{
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path : "/",
        element : <><Home/></>
      },
      {
        path : "/Events",
        element : <><Events/></>
      },

    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
