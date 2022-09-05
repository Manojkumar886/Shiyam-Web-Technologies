const Active=()=>
{
    const a=document.forms['irctc'].fno.value
    const b=document.forms['irctc'].pin1.value
    const c=document.forms['irctc'].Svalue.value
    let acting=true

    if(c.length<=0)
    {
        document.getElementById("sdetails").innerHTML="StreetName should't empty"
        acting=false;
    }
    else if(!((/^[A-Za-z]+$/).test(c)))
    {
        document.getElementById("sdetails").innerHTML="StreetName should't any numbers"
        acting=false;
    }

    if(a.length<=0)
    {
        document.getElementById("Fdetails").innerHTML="Flat/Door/BlockNO should't empty"
        acting=false;
    }
    if(b.length<=0)
    {
        document.getElementById("pin").innerHTML="Pincode should't empty"
        acting=false;
    }
    else if(!((/^[0-9]+$/).test(b)))
    {
        document.getElementById("pin").innerHTML="Pincode should't any alphabets"
        acting=false;
    }

}
