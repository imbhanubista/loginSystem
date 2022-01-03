import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './Details';
import Login from './Login';
import Registration from './Registration';
const Router =()=>{
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registration-form" element={<Registration/>}/>
    <Route path="/details" element={<Details/>}/>
</Routes>
</BrowserRouter>
    )
}
export default Router;