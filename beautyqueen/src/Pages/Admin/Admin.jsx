import axios from 'axios'
import React from 'react'

const Admin = () => {
  console.log("xxx")
  // document.cookie = "firstName=Christopher";
  // console.log(document.cookie)
  axios.get("/users",{withCredentials: true}).then((res)=>console.log(res)).catch((e)=>console.log(e))
  return (
    <div>Admin</div>
  )
}

export default Admin