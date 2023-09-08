import { RouterProvider } from 'react-router-dom'
import routes from "./Routes/Routers"

function App() {
 
  return (
   <div>
   <RouterProvider router={routes}/>
   </div>
  )
}

export default App
