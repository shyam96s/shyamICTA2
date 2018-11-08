function read(){
    var name=document.getElementById("getname").value;
    console.log(name)
    var Rollno=document.getElementById("getRollno").value;
    console.log(Rollno)
    var Admno=document.getElementById("getAdmno").value;
    console.log(Admno)
    var Age=document.getElementById("getAge").value;
    if(Age>18)
    {
    console.log("Eligible");
    alert(" u r Elligible");
    }
    else{
        console.log("Not Eligible");
        alert("u r not Eligible");
    }
    }