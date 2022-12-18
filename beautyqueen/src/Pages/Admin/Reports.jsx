import { Box, Button, Container, Flex,Image ,Text} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {TiPencil} from "react-icons/ti"
import {MdOutlineTrackChanges} from "react-icons/md"
import axios from 'axios'
/* import { AuthContext } from '../../context/AppContext' */

const Reports = () => {
  const [newData,setNewData]=useState([])
  const user = {
    email:"sujeet@gmail.com",
    exercise_name:"sk",
    photoURL:"adsadf",
    uid:"sdfsdf"
  }

  const data=[
    {"muscle":"Biceps","ex":"Barbell Bicep Drag Curl","timer":"60 sec","reps":"8","sets":"3"},
    {"muscle":"Biceps","ex":"Barbell Bicep Drag Curl","timer":"60 sec","reps":"8","sets":"3"},
    {"muscle":"Biceps","ex":"Barbell Bicep Drag Curl","timer":"60 sec","reps":"8","sets":"3"},
    {"muscle":"Biceps","ex":"Barbell Bicep Drag Curl","timer":"60 sec","reps":"8","sets":"3"}

  ]

  
    // AMAN
    useEffect(()=>{
      axios.get(`https://backendmusclefit.onrender.com/users/${user.email}`)
      .then(res=>setNewData(res.data.report))
    },[newData])

  return (
    <Container  >
      
    </Container>
  )
}

export default Reports