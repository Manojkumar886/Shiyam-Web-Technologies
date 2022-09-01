let arrayvalues=["Manoj","Shiyam","Razak","Annamalai"]

let list=()=>
{
    arrayvalues.map((data)=>
    {
        document.writeln(data+"<br>")
    })
}

var creating=()=>
{
    const tmp=document.getElementById("users");
    arrayvalues.push(tmp.value)
    alert("your value is added"+tmp.value)
    list()
}

let updating=()=>
{
    let tmp=document.getElementById("users").value
    const newvalue=prompt("Tell us what is update/replace"+arrayvalues[tmp])
    arrayvalues[tmp]=newvalue;
    list()
}

var deleting=()=>
{
    let tmp=document.getElementById("users").value

    arrayvalues=arrayvalues.filter((data)=>
    {
    return data!==tmp
    })
    list()
}