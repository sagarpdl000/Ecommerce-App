import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import RouteLayout from './layouts/RouteLayout';

function App() {
  return (

    <BrowserRouter>





    <Routes>
    {/* Public pages */}
    <Route path="/" element={ <Home/>} />
    <Route path="/authentication" element={<Authentication/>}/>
    <Route path= '*' element = {<Error/>} />


    {/* private pages */}
    <Route element = {<RouteLayout/>} >
    <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
