
import { Card,CardContent,Typography,Grid } from "@mui/material";

export default function Dashboard(){
return(
<div>
<Typography variant="h4">Dashboard Analytics</Typography>
<Grid container spacing={2} sx={{marginTop:2}}>
{["Total Sales","Revenue","Purchases","Invoices"].map((t,i)=>(
<Grid item xs={3} key={i}>
<Card><CardContent><Typography>{t}</Typography><Typography variant="h6">₹10000</Typography></CardContent></Card>
</Grid>
))}
</Grid>
</div>
)}
