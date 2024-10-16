import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App(){

  const [user,setuser]=useState([
    {
    username:"ragul",
    password:"r4gu1",
    }]
)

  return(
<BrowserRouter>

<Routes>
<Route path='/' element={<Login user={user} setuser={setuser} />}> </Route>
<Route path='/signup' element={<Signup user={user} setuser={setuser} />}> </Route>
<Route path='/Landing' element={<Landing />}> </Route>
</Routes>
</BrowserRouter>
  )
}

export default App;
