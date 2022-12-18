import { Box, Button, Checkbox, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
/* import {AuthContext} from "../../context/AppContext" */



const Messages = () => {
    const [userMessage,setUserMesssage] = useState("")
    const user = {
      email:"sujeet@gmail.com",
      exercise_name:"sk",
      photoURL:"adsadf",
      uid:"sdfsdf"
    }
    const [newData,setNewData]=useState([])

   async function saveMessage(mess){
      console.log(userMessage)
      await sentReport2(mess)
    }

    const sentReport2 = async (x) => {
      let userone1 = await axios.get(
        `https://backendmusclefit.onrender.com/users/${user.email}`
      );
      userone1 = userone1.data;
      let newUser = { ...userone1, message: [...userone1.message, x] };
  
      let updatedUser = await axios.patch(
        `https://backendmusclefit.onrender.com/users`,
        newUser
      );
      console.log("updatedUser:", updatedUser);
    };

    useEffect(()=>{
      axios.get(`https://backendmusclefit.onrender.com/users/${user.email}`)
      .then(res=>setNewData(res.data.message))
    },[newData])

  return (
    <Box>
      

    </Box>
  )
}

export default Messages