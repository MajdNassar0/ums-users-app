const getUser= async()=>{
    const parm= new URLSearchParams(window.location.search);
    const id=parm.get("id");
     const display = `
    <p class="id-user">Age : <span class="id">${id}</span></p>
`;
    document.querySelector(".id").innerHTML=display;

    const response =await axios.get(`https://ums12.runasp.net/api/users/${id}`);
    if(response.status==200)
        return response.data;
}
const detailUser =async()=>{
    const response=await getUser();
    console.log(response);
    const data =response.data;

    const display = `
    <p class="id-user">Age : <span class="id">${data.age}</span></p>
    <p class="name-user">Name: <span class="name">${data.name}</span></p>
    <p class="email-user">Email : <span class="email">${data.email}</span></p>
`;
    document.querySelector(".detail").innerHTML=display;

}
detailUser();