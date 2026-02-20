
import jsPDF from "jspdf";
export default function Invoice(){
const generatePDF=()=>{
const doc=new jsPDF();
doc.text("Invoice Generated - SmartERP",20,20);
doc.save("invoice.pdf");
}
return(
<div>
<h2>Invoice Module</h2>
<button onClick={generatePDF}>Download PDF</button>
</div>
)}
