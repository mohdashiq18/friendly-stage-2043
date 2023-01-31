import {
  Wrap,
  HStack,
  VStack,
  Text,
  Badge,
  ButtonGroup,
  IconButton,
  Button,
  Spacer,
  Stack,
  Divider,
  Image,
  Box,


} from '@chakra-ui/react'

import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from 'react-icons/ai';

import React, { useContext, useEffect, useState } from 'react'
import { dataUrl } from '../../share';
import axios from 'axios';


const CartSingleCard = ({ el, del }) => {







  const handleChange = () => {

  }
  const handleRemove = () => {
        
  }


  return (


    <Wrap w={{ base: 320, md: 600 }} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5">

      <VStack w="full" >

        <Box  w={["230px","350px","420px"]}>


          <VStack align="revert-layer" spacing={4} >


            <Text fontSize={{ base: "15px", md: "xl" }} color="gray.500" >{el.name}</Text>



            <Stack>

              <HStack alignContent="center">
                <Text fontWeight="bold" fontSize="2xl" >₹{el.price}</Text>

                <Text as="s" marginLeft={4} fontSize="l" >₹{el.ofPrice}</Text>
              </HStack>

              <Stack direction={{ base: "column", md: "row" }} spacing={35} >


                {/* <ButtonGroup size='sm' isAttached variant='outline'>

                  <Button fontWeight="bold" fontSize="xl" onClick={() => handleChange(el.quantity, -1)} >-</Button>

                  <Button>{el.quantity * el.price}</Button>

                  <IconButton
                    onClick={() => handleChange(el.quantity, 1)}
                    aria-label='Add to friends' icon={<AddIcon w={3} h={3} />} />
                </ButtonGroup> */}


              </Stack>

            </Stack>





          </VStack>

          <Spacer />

          <Stack w={150}>
            <Image src={el.image} style={{ borderRadius: "5px" }} />

          </Stack>
        </Box>



      </VStack>

      <Divider />


      <HStack w="full" spacing={5} >
        <Button onClick={() => del(el._id)} w="40%" size='md'  colorScheme='teal' color="white" >REMOVE</Button>
        <Divider orientation='vertical' />
        <Button w="full" size='md'   colorScheme='pink' color="white" >

          <HStack spac ><AiOutlineHeart fontSize="25px" /> <Text>ADD TO WISHLIST</Text></HStack>

        </Button>
      </HStack>
      
    </Wrap>
  )
}

export default CartSingleCard
