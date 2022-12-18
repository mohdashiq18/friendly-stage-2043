import { Box, Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const UserComp = ({name,email,phone,status,role,deleteFun,changeRole,userBan}) => {
    
  return (
    <Box textAlign={"center"}  mb="20px" border={"1px solid #9130c2"} >
        <SimpleGrid  columns={[1,2,2,3,3]} spacing={10} >
            <Text> {name} </Text>
            <Text> {email} </Text>
            <Text> {phone} </Text>
            <Select onChange={(e)=>changeRole(email,e.target.value)} defaultValue={role}>
            <option value={"user"}>user</option>
            <option value={"admin"} >admin</option>
            </Select>
            <Select onChange={(e)=>userBan(email,e.target.value)} defaultValue={status}>
            <option value={"active"}>active</option>
            <option value={"ban"} >ban</option>
            </Select>
            <Button colorScheme={"blue"} onClick={()=>deleteFun(email)} > Delete </Button>
        </SimpleGrid>

    </Box>
  )
}

export default UserComp