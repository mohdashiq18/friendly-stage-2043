import { Box, Button, Flex, Image, Select, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const ProductComp = ({deletePro,name,image,_id,price,quantity,category}) => {
    
  return (
    <Box textAlign={"center"}  mb="20px" border={"1px solid #9130c2"} >
      <Text>Name - {name} </Text>
      <Flex flexDirection={["column","row","row","row"]} alignItems='center' >
        <Box w="35%" >
            <Image w="100%" src={image} />
        </Box>
        <Spacer/>
        <SimpleGrid w="60%" mt={"15px"}  columns={[1,2,2,2,2]} spacing={10} >
            <Text>Price - {price} </Text>
            <Text>Quantity - {quantity} </Text>
            <Text>Category - {category} </Text>
            <Button colorScheme={"blue"} onClick={()=>deletePro(_id)} > Delete </Button>
        </SimpleGrid>
        </Flex>

    </Box>
  )
}

export default ProductComp