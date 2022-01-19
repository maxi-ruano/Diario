import react from "react";
import Navbar from "./components/Navbar"
import Contenido from "./components/Contenido";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Deporte from "./components/Deporte";
import Politica from "./components/Politica";


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="Deporte" element={
 <div >
 <Navbar/>
 
<Deporte/>
</div>
}           />
<Route path="Politica" element={
 <div >
 <Navbar/>
 
<Politica/>
</div>
}           />
<Route path="/" element={
 <div >
 <Navbar/>
 
<Contenido/>
</div>
}           />

</Routes>



</BrowserRouter>






   
  );
}

export default App;
