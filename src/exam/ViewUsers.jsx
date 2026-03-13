import React, { useEffect, useState } from 'react'

export default function ViewUsers() {

const [users, setUsers] = useState([])

useEffect(() => {
const storedUsers = JSON.parse(localStorage.getItem("users")) || []
setUsers(storedUsers)
}, [])

const styles = {
container: {
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg, #4facfe, #00f2fe)",
fontFamily: "Arial, sans-serif"
},
card: {
background: "white",
padding: "40px",
borderRadius: "10px",
boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
textAlign: "center",
width: "700px"
},
heading: {
marginBottom: "20px"
},
table: {
width: "100%",
borderCollapse: "collapse"
},
th: {
background: "#4facfe",
color: "white",
padding: "10px",
border: "1px solid #ddd"
},
td: {
padding: "10px",
border: "1px solid #ddd"
},
empty: {
fontSize: "18px",
color: "#555"
}
}

return ( <div style={styles.container}> <div style={styles.card}>

    <h2 style={styles.heading}>Registered Users</h2>

    {users.length === 0 ? (
      <p style={styles.empty}>No users registered yet</p>
    ) : (

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.password}</td>
            </tr>
          ))}
        </tbody>

      </table>

    )}

  </div>
</div>

)
}
