import React, { useContext } from 'react'
import { Box, Button, Divider, Flex, Image, Input, position, Radio, RadioGroup, Select, SimpleGrid, Spacer, Stack, Text, useToast } from "@chakra-ui/react"
import { useState } from "react"
import axios from 'axios'
/* import { AuthContext } from '../../context/AppContext' */
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import UserComp from './Comp/UserComp'

const MyRoutine = ({users=[],deleteFun,changeRole,userBan}) => {
  
  const toast = useToast()


   
    





/* save profile button */
    const saveData = async () => {
      
      toast({
        title: "Data save successfully",
        description: "Your all information updated successfully",
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    }


  

  return (
        <Box>
            <Text>All Users</Text>
            
        </Box>
  )
}

export default MyRoutine