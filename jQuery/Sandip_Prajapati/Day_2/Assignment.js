function jsondata()
    {
        fetch("https://gorest.co.in/public-api/users")
        .then(res=>res.json())
        .then(data=>{
            for(x of data.data)
            {
                element(x)
            }
        })
    }

function element(data)
{
   var td1= document.createElement('td');
   var td2= document.createElement('td');
   var td3= document.createElement('td');
   var td4= document.createElement('td');
   var td5= document.createElement('td');
   var tr = document.createElement('tr');
   var table = document.getElementById('table');
   var Id = document.createTextNode(data.id);
   var Name = document.createTextNode(data.name);
   var Email = document.createTextNode(data.email);
   var Gender = document.createTextNode(data.gender);
   var Status = document.createTextNode(data.status);
   td1.appendChild(Id)
   td2.appendChild(Name)
   td3.appendChild(Email)
   td4.appendChild(Gender)
   td5.appendChild(Status)
   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)
   tr.appendChild(td5)
   table.appendChild(tr)


}