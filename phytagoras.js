function phytagoras(a,b){
    return Math.sqrt(a * a + b * b);
}

function calc_hypothenusan(){
    document.getElementById("result").innerHTML = phytagoras(parseInt(document.getElementById("a").value),parseInt(document.getElementById("b").value));
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
}

//document.write(phytagoras(3,4));