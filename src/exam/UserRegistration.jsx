import React from 'react'

export default function UserRegistration() {
    const [user, setUser] = useState({
name: "",
email: "",
password: "",
event:"",
location:"",
})

const handleChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
e.preventDefault()


let users = JSON.parse(localStorage.getItem("users")) || []
users.push(user)

localStorage.setItem("users", JSON.stringify(users))

alert("User Registered Successfully")
setUser({ name: "", email: "", password: "", event:"", location:"" })


}

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
