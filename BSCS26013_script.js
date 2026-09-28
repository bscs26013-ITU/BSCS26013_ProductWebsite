function welcome(){
    alert("Welcome");
}
function showavail(num){
    if (num==1)
    {
        document.getElementById("product1").innerHTML ="available";
    }
    else if(num==2)
    {
        document.getElementById("product2").innerHTML ="not available";
    }
    else if(num==3)
    {
        document.getElementById("product3").innerHTML ="available";
    }
    else if(num==4)
    {
        document.getElementById("product4").innerHTML ="not available";
    }
    else if(num==5)
    {
        document.getElementById("product5").innerHTML ="available";
    }
}
window.onload=welcome();
document.getElementById("date").innerHTML =new Date().getFullYear();
