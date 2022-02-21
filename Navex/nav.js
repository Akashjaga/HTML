let Employees= [{"id":1,"name":"Kingston","email":"kfatharly0@amazon.co.uk","salary":"Krona"},
{"id":2,"name":"Sharia","email":"sbullin1@cyberchimps.com","salary":"Euro"},
{"id":3,"name":"Jeannine","email":"jpenzer2@mac.com","salary":"Franc"},
{"id":4,"name":"Rourke","email":"rleestut3@europa.eu","salary":"Rupiah"},
{"id":5,"name":"Devin","email":"dsibthorpe4@discovery.com","salary":"Som"},
{"id":6,"name":"Mireille","email":"mtoe5@wsj.com","salary":"Peso"},
{"id":7,"name":"Kirstin","email":"kmogridge6@cbslocal.com","salary":"Euro"},
{"id":8,"name":"Hasty","email":"hbendan7@oaic.gov.au","salary":"Euro"},
{"id":9,"name":"Neel","email":"nthynne8@printfriendly.com","salary":"Zloty"},
{"id":10,"name":"Marley","email":"maddenbrooke9@pcworld.com","salary":"Rupiah"},
{"id":11,"name":"Chelsy","email":"cjanewaya@dailymotion.com","salary":"Koruna"},
{"id":12,"name":"Merralee","email":"mjasperb@google.pl","salary":"Krona"},
{"id":13,"name":"Xenia","email":"xturtonc@squarespace.com","salary":"Ruble"},
{"id":14,"name":"Sammie","email":"skarpmand@example.com","salary":"Quetzal"},
{"id":15,"name":"Burr","email":"bbrotherheade@abc.net.au","salary":"Euro"},
{"id":16,"name":"Rachelle","email":"rrozyckif@mac.com","salary":"Yuan Renminbi"},
{"id":17,"name":"Shelton","email":"sstapleyg@bloglovin.com","salary":"Euro"},
{"id":18,"name":"Elvina","email":"eoshielsh@npr.org","salary":"Euro"},
{"id":19,"name":"Roselle","email":"ryoskowitzi@vinaora.com","salary":"Hryvnia"},
{"id":20,"name":"Felicia","email":"fabernethyj@posterous.com","salary":"Yuan Renminbi"}]
function Sonu (){
    let rows = " "
    for (emp of Employees) {
      rows = rows +
      `<tr>
          <td> ${emp.id}</td>
          <td> ${emp.name}</td>
          <td> ${emp.email}</td>
      </tr>`
    } 
    document.getElementById("abc").innerHTML=rows
}