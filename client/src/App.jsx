
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import GRN from "./pages/GRN";
import Invoice from "./pages/Invoice";

export default function App(){
return(
<BrowserRouter>
<Layout>
<Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/purchase" element={<Purchase/>}/>
<Route path="/grn" element={<GRN/>}/>
<Route path="/invoice" element={<Invoice/>}/>
</Routes>
</Layout>
</BrowserRouter>
)}
