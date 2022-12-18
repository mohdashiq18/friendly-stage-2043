import { Box, Button, Input, SimpleGrid, Text, useStatStyles } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
/* import { AuthContext } from '../../context/AppContext' */

const Exercises = () => {
 
  return (
    <Box textAlign={"center"}>
    <Text>Add Products</Text>
    <Box>
      <SimpleGrid columns={[1,2,2,2]} spacing={10}>
        <Input variant='outline' placeholder='name'/>
        <Input variant='outline' placeholder='email'/>
        <Input variant='outline' placeholder='phone'/>
        <Input variant='outline' placeholder='password'/>

      </SimpleGrid>
      <Box margin={"auto"}>
      <Button colorScheme='pink' >Add</Button>
      </Box>
    </Box>
  </Box>
  )
}

export default Exercises