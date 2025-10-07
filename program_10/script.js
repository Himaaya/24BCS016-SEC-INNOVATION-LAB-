function loaduser(){
    const result = document.getElementById("res")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(!response){
            throw new Error("INTERNET ISSUE")
        }
        return response.json()
    }).then((data)=>{
        data.map((value)=>{
            console.log(value.username,value.email,value.address.city)
            result.innerHTML+=`<li><b>${value.username}</b> - ${value.email} - ${value.address.city}</li>`

        })
    }).catch((err)=>{
        throw new Error("no data found",err)

    })

}