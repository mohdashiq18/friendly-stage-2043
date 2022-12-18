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
            <Divider mt="3px" mb="3px"  orientation='horizontal' style={{color:"red",size:"20"}} />
            <hr color="black" size="50px" />
            <Box>
              {users && users.map((el,index)=>(
                <UserComp key={index} {...el} deleteFun={deleteFun} changeRole={changeRole} userBan={userBan} />
              ))}
            </Box>
            
            <Button onClick={saveData} ml={["30%","110px","125px"]} size="sm" bgColor="blue" >Save Settings</Button>
        </Box>
  )
}

export default MyRoutine