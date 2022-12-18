import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import ProductComp from './Comp/ProductComp'

const LogsPage = ({products, deletePro}) => {

  return (
    <Box>
      <Text fontSize="xl">All Products</Text>
      {products && products.map((el,i)=>(
        <ProductComp {...el} deletePro={deletePro} />
      ))}
      
    </Box>
  )
}

export default LogsPage