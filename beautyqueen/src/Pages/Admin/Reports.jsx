import { Box, Button, Container, Flex,Image ,Text} from '@chakra-ui/react'
import React, {  useEffect, useState } from 'react'

import axios from 'axios'
import CartComp from './Comp/CartComp'
/* import { AuthContext } from '../../context/AppContext' */

const Reports = ({carts,cartChange}) => {
  console.log(carts)

  return (
    <Container  >
      {carts && carts.map((el,i)=>(
        <CartComp key={i} {...el} cartChange={cartChange} />
      ))}
      
    </Container>
  )
}

export default Reports