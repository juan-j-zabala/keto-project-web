import Mainpage from "./pages/Mainpage";
import {RouterProvider} from 'react-router-dom'
import {router} from "./router/Index";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <Mainpage /> */}
    </>
  );
}

export default App;
