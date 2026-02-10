const getUser= async()=>{
    const response =await axios.get("https://ums12.runasp.net/api/users");
    if(response.status==200)
        return response;
}
const displayUser =async()=>{
    const response=await getUser();
    console.log(response);
    const display=response.data.users.map(data=>{
        return`
            <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>    <a href="./detail.html?id=${data.id}" class="btn btn-primary">Detail</a>
      <button type="button" class="btn btn-danger" onclick= "deleteUser(${data.id})" >Delete</button>
      </td>

    </tr>
        `

    }).join(' ');
    document.querySelector(" .tbody ").innerHTML=display;

}
displayUser();

const deleteUser=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
        const response = await  axios.delete(`http://ums12.runasp.net/api/users/${id}`);
        if(response.status==200){
              Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    displayUser();


        }

  
  }
});
}