function hamchuyendoi (){
    let nhaptien = document.getElementById("nhaptien").value
    let tutien = document.getElementById("tutien").value
    let sangtien = document.getElementById("sangtien").value
    let kq;

    if(tutien == "USD" && sangtien == "VND"){
        kq = nhaptien*23000;
    }
    else if(tutien == "VND" && sangtien == "USD"){
        kq = nhaptien/23000
    }
    else{
        kq = nhaptien;
    } 
    document.getElementById("kq").innerHTML =kq ;
}