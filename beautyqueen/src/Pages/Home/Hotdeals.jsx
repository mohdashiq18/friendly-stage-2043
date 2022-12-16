import { Box, Image, SimpleGrid, Stack, Wrap,Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import React from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
const Hotdeals = ({dt}) => {
   // console.log("hotdeals",dt)

    


    //console.log("hotdeal",data)
    return (
        <div>
            <Text textAlign="center" fontSize="21px" margin="15px">Hot Deals</Text>
            
            <Wrap justify="center">
            

                <SimpleGrid w="90%" spacing={3} columns={[2, 4]} >
                    {
                        dt.map((el,i)=>(
                            <Box  w="100%" textAlign="center">
                                <Box w="70%" m="auto">
                                <Image w="100%" src={el.image}></Image>
                                </Box>
                                
                                <Box  h="59px">
                                <Text p="0px 7px" fontSize="14px">{el.name}</Text>
                                </Box>
                                <Text color="gray"  fontSize="17px">{el.price} /-</Text>

                                
                                
                                <Box display="flex" m="auto" alignItems="center" justifyContent="center">
                                
                                <Button colorScheme='pink' mr="5px"  size='sm'>
                                    Add to Cart
                                </Button>
                                <Button  colorScheme='pink' size='sm'>
                                    <IoIosHeart size="25px" ></IoIosHeart>
                                </Button>
                                </Box>

                          
                                
                            </Box>

                        ))
                    }
                   
                </SimpleGrid>
            </Wrap>

        </div>
    )
}
export default React.memo(Hotdeals)