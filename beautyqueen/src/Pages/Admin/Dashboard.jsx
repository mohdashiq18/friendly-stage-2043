import { Box, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = ({users=[],admins=[],products=[],carts=[]}) => {




  return (
    <Box textAlign={"center"} margin="auto" >
        <Box style={{backgroundColor:"red",height:"100px",textAlign:"center",}} mb="15px" >
            <Text>Total Products</Text>
            <Text>{products && products.length} </Text>
        </Box>

        <Box style={{backgroundColor:"blue",height:"100px",textAlign:"center"}} mb="15px">
        <Text>Total Users</Text>
            <Text>{users && users.length} </Text>
        </Box>

        <Box style={{backgroundColor:"green",height:"100px",textAlign:"center",}} mb="15px">
        <Text>Total Admins</Text>
            <Text>{admins && admins.length} </Text>
        </Box>

        <Box style={{backgroundColor:"#9130c2",height:"100px",textAlign:"center",}} mb="15px">
        <Text>Total Orders</Text>
            <Text>{carts.length} </Text>
        </Box>
    </Box>
  )
}

export default Dashboard