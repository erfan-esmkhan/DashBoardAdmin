import route from './routes'
import { useRoutes } from "react-router";
import Topbar from './component/topbar/topbar';
import Sidebar from './component/sidebar/Sidebar'

import './App.css'

function App() {

  let routes = useRoutes(route)

  return (
    <>
    <Topbar />
     <div className='container'>
     <Sidebar/>
     {routes}
     </div>
    </>
  );
}

export default App;
