const getUser= async()=>{
    const response =await axios.get("https://ums12.runasp.net/api/users");
    if(response.status==200)
        return response;
}
const displayUser =async()=>{
    const response=await getUser();
    const display=response.data.users.map(data=>{
        return`
            <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
    </tr>
        `

    }).join(' ');
    document.querySelector(" .tbody ").innerHTML=display;

}
displayUser();