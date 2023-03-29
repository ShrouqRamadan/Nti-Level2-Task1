const userName=document.querySelector("#userName");
const userAge=document.querySelector("#userAge");
const userStatus=document.querySelector("#userStatus");
const formData=document.querySelector("#formData");

let  userEData=[];

if(localStorage.getItem('AllData')!=null){
    userEData=userEData=JSON.parse(localStorage.getItem("AllData"))
    display()
}

document.querySelector("#send").addEventListener('click',(e)=>{
e.preventDefault();

const users={
    name:userName.value,
    age:userAge.value,
    state:userStatus.value,
}
userEData.push(users);

localStorage.setItem('AllData',JSON.stringify(userEData));
display()

})


// display()


function display(){
    let cartona =``
    for (let i = 0; i < userEData.length; i++) {
        cartona+=`
        <tr>
 <td>${userEData[i].name}</td>
 <td>${userEData[i].age}</td>
 <td class="text-success fw-bolder">${userEData[i].state}</td>
 <td><Button class="btn btn-info text-white" onclick="editUser(${i})">Edit</Button></td>
 <td><Button class="btn btn-danger" onclick="deleteUser(${i})">Delete</Button></td>
 <td><Button class="btn btn-warning text-white" onclick="changeStatus(${i})">Change Statue</Button></td>
</tr> `
        
}
    document.querySelector('.table-users').innerHTML=cartona;  
}


function deleteUser(id){
    userEData.splice(id,1);
    localStorage.setItem('AllData',JSON.stringify(userEData));
    display();
    }
    
    
    function changeStatus(id){
    userEData[id].state="inactive";
    localStorage.setItem('AllData',JSON.stringify(userEData));
    display();
    }
    

    let globalIndex
    function editUser(index){
        globalIndex=index
        userName.value=userEData[index].name;
        userAge.value=userEData[index].age;
        userStatus.value=userEData[index].state;
        document.querySelector("#send").classList.add("d-none")
        document.querySelector("#update").classList.remove("d-none")
    }


    function updateData(){
        userEData[globalIndex].name=userName.value;
        userEData[globalIndex].age=userAge.value;
        userEData[globalIndex].state=userStatus.value;
        localStorage.setItem('AllData',JSON.stringify(userEData));
        display();
    }


    document.querySelector("#update").addEventListener('click',updateData)










