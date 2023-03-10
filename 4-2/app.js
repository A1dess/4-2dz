const uly = document.getElementById("ulist")
const getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await users.json();
    const gama = data.map((el)=> {
        return`<div class = "nav"><p>userId: ${el.userId}</p><p>id: ${el.id} </p><p> ${el.title} </p><p> ${el.body}</p></div>`
    })
    uly.innerHTML=gama.join("")

  }

  
  getUsers();