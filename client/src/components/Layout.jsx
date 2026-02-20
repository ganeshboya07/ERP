
import { Drawer,List,ListItem,Toolbar,AppBar,Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Layout({children}){
return(
<div style={{display:"flex"}}>
<AppBar position="fixed"><Toolbar><Typography>SmartERP Ultimate</Typography></Toolbar></AppBar>
<Drawer variant="permanent" sx={{width:220}}>
<Toolbar/>
<List>
<ListItem><Link to="/">Dashboard</Link></ListItem>
<ListItem><Link to="/products">Products</Link></ListItem>
<ListItem><Link to="/purchase">Purchase</Link></ListItem>
<ListItem><Link to="/grn">GRN</Link></ListItem>
<ListItem><Link to="/invoice">Invoice</Link></ListItem>
</List>
</Drawer>
<main style={{marginLeft:240,marginTop:80,padding:20}}>
{children}
</main>
</div>
)}
