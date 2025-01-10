const inputbox= document.getElementById("bill")

const submit_button =  document.querySelector("button")

const output= document.getElementsByClassName("output")[0]

submit_button.addEventListener("click" , calculateTip)

function calculateTip(){
let bill_amt = inputbox.value
if (bill_amt === ""){
    alert("Please enter a value")
 return
} 
let tip =bill_amt*2/100

output.innerText= `Tip is ${tip}`
}


// const input_box = document.getElementById("bill")
// const submit_button = document.querySelector("button")
// const output = document.getElementsByClassName("output")[0]

// submit_button.addEventListener("click", calculateTip)
// function calculateTip(){
//     let bill_amount = input_box.value
//     if(bill_amount === ""){
//         alert("Please enter a value")
//         return
//     }
//     let tip = bill_amount*2/100 
//     output.innerText = `Tip is ${tip}`
// }