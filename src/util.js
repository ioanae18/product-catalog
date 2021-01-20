export default function formatCurrency(num){
    // return '$$$$';
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}