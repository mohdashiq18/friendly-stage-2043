import { Box, Button, Flex, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const CartComp = ({product,quantity,cartChange,_id,approve}) => {
    
  return (
    <Box textAlign={"center"}  mb="20px" border={"1px solid #9130c2"} >
        <Text>Name - {product?.name} </Text>
      <Flex flexDirection={["column","row","row","row"]} alignItems='center' >
        <Box w="35%" >
            <Image w="100%" src={product?.image} />
        </Box>
        <Spacer/>
        <SimpleGrid w="60%" mt={"15px"}  columns={[1,2,2,2,2]} spacing={10} >
            <Text>Price - { product?.price} </Text>
            <Text>Quantity - {quantity} </Text>
            <Text>Category - {product?.category} </Text>
            <Button disabled={approve==="true"} colorScheme={"blue"} onClick={(e)=>{
                cartChange(_id)
            }} > {approve==="true"?"Approved":"Approve"} </Button>
        </SimpleGrid>
        </Flex>
    </Box>
  )
}

export default CartComp