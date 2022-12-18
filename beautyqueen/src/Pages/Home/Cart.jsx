import { Badge, Box, Button, ButtonGroup, Divider, Flex, HStack, IconButton, Image, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dataUrl } from '../../share';
import CartSingleCard from "./CartSingleCard"

const Cart = () => {
    const [cartData, setPro] = useState([]);


    const getPro = () => {
        axios.get(`${dataUrl}/products/Fragrance?limit=3`, { withCredentials: true })
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getPro()

    }, [])
    return (
        <div>
            {/* <Box m="auto" w="90%" h="250px">
                <Box marginBottom="20px">
                    <Text>SHOPPING CART</Text>
                </Box>
                <Box display="flex">
                    <Box display="flex" m="auto" w="65%" border="1px solid gray">
                        <Box w="25%" border="1px solid gray">
                            <Image w="100%" src="https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/1/_/1_210_4.jpg"></Image>
                        </Box>
                        <Box p="12px 11px">
                            <Text>CLINIC PLUS STRONG & LONG HEALTH SHAMPOO</Text>
                        </Box>
                        <Box p="5px 9px" display="flex">
                            <Box p="9px"  >
                                <Text>473.00</Text>
                            </Box>
                            <Box h="40px" border="1px solid gray">
                                <Text p="9px">1</Text>
                            </Box>
                            <Box p="9px" >
                                <Text>473.00</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box m="auto" w="35%" h="350px" border="1px solid black" ></Box>
                </Box>
            </Box>
            */}
            <VStack marginTop={{ base: "220px", md: "180px" }} justify="center" >

                <Text fontSize="2xl" fontWeight="extrabold" >My Bag 1 item(S)</Text>

                <Stack direction={{ base: "column", sm: "row" }} padding={10} spacing={50} >

                    <VStack spacing={5}   >

                        <HStack spacing={5} w="full" padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Yay! You get FREE delivery on this order</Text></HStack>
                        {/* {
                            cartData.map((el) => (
                                <CartSingleCard el={el} />
                            ))
                        } */}
                        <CartSingleCard></CartSingleCard>

                    </VStack>


                    <VStack spacing={5} >

                        <HStack spacing={5} w="full" padding={3} bg="yellow.300" >  <Text fontWeight="bold" >Save extra ₹140 with TriBe</Text> <Spacer /> <ArrowRightIcon /> </HStack>

                        <Box fontSize="16px" w={{ base: 300, sm: 600 }} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5" >Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200
                        </Box>

                        <Box fontSize="16px" w={{ base: 300, sm: 600 }} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5" >Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
                        </Box>

                        <Box bg="#ecf6f5" fontWeight="bold" fontSize="16px" w={{ base: 300, sm: 600 }} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="10px 20px" >Have a Coupon / Referral / Gift Card ?
                        </Box>


                        <Stack bg="gray.200" w={{ base: 300, sm: 600 }} spacing={3} borderWidth='1px' overflow='hidden' padding="5" textAlign="center" >
                            <Text fontWeight="bold" fontSize="20px">PRICE SUMMARY</Text> </Stack>

                        <VStack fontSize="16px" padding="5" w={{ base: 300, sm: 600 }} spacing={5} borderWidth='1px' overflow='hidden'  >

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Total MRP (Incl. of taxes) </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > ₹ 13 </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Shipping Charges </Text>
                                <Spacer />
                                <Text fontWeight="bold" color="green.500" fontSize={{ base: "15px", md: "18px" }} > FREE </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Bag Discount  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > - ₹ 13 </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Subtotal  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} >  ₹ 2  </Text>
                            </HStack>

                            <Badge overflow="hidden" borderRadius="2xl" fontSize={{ base: "15px", md: "xl" }} padding="5px 20px" w="full" variant='subtle' color="gray.800" colorScheme='green'>
                                You are saving ₹ 2 on this order
                            </Badge>

                        </VStack>

                        <Stack direction={{ base: "column", md: "row" }} w="full" padding="5" >


                            <Text w={{ base: "full", md: "50%" }} fontSize="2xl" fontWeight="bold" >Total  ₹ 2</Text>

                            <Divider w="10%" orientation='vertical' />

                            <Button w="full" colorScheme='teal' color="white" size='lg'>
                                CheckOut
                            </Button>

                        </Stack>

                        <Divider as="bold" />
                        <Divider as="bold" />
                        <Divider as="bold" />
                    </VStack>






                </Stack>


            </VStack>

        </div>
    )
}
export default Cart