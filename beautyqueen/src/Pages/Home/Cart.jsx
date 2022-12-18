import { Badge, Box, Button, ButtonGroup, Divider, Flex, HStack, IconButton, Image, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dataUrl } from '../../share';
import CartSingleCard from "./CartSingleCard"

const Cart = () => {
    const [cartData, setPro] = useState([]);
    const [total,setTotal]=useState(0);
    const [dis,setDis]=useState(10);
    const [sub,setSub]=useState(20);
    const [changeone,setchangeone] = useState(0)


    const getPro = () => {

        axios.get(`${dataUrl}/carts`, { withCredentials: true })
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }
    const delPro = (id) => {
        axios.delete(`${dataUrl}/carts/${id}`, { withCredentials: true })
            .then((res) => {console.log(res.data)
                setchangeone((pre)=>pre+1)
            })
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getPro()

    }, [changeone])
    useEffect(()=>{
        cartData && cartData.map((el,i)=>{
            setTotal((prev)=>prev+el.product.price)
        })

    },[cartData])
    return (
        <div>

            <VStack marginTop={{ base: "220px", md: "180px" }} justify="center" >

                <Text fontSize="2xl" fontWeight="extrabold" >My Bag {cartData.length} item(S)</Text>

                <Stack direction={{ base: "column", sm: "row" }} padding={10} spacing={50} >

                    <VStack spacing={5}   >

                        <HStack spacing={5} w="full" padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Yay! You get FREE delivery on this order</Text></HStack>
                        {
                            cartData.map((el, i) => (
                                <CartSingleCard key={i} el={el} del={delPro} />
                            ))
                        }


                    </VStack>


                    <VStack spacing={5} >

                        <HStack spacing={5} w="full" padding={3} bg="#EB046D" >  <Text fontWeight="bold" color="white" >Save extra ₹140 with TriBe</Text> <Spacer /> <ArrowRightIcon /> </HStack>

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
                                <Text fontSize={{ base: "15px", md: "18px" }} >Total MRP  (Incl. of taxes) </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > ₹ {total}</Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Shipping Charges </Text>
                                <Spacer />
                                <Text fontWeight="bold" color="green.500" fontSize={{ base: "15px", md: "18px" }} > + ₹ 50 </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Bag Discount  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > - ₹ {Math.floor(total/100*10)} </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Subtotal  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} >  ₹ {Math.floor(total-(total/100*10))+50} </Text>
                            </HStack>

                            <Badge overflow="hidden" borderRadius="2xl" fontSize={{ base: "15px", md: "xl" }} padding="5px 20px" w="full" variant='subtle' color="gray.800" colorScheme='green'>
                                You are saving ₹{Math.floor(total/100*10)} on this order
                            </Badge>

                        </VStack>

                        <Stack direction={{ base: "column", md: "row" }} w="full" padding="5" >


                            <Text w={{ base: "full", md: "50%" }} fontSize="2xl" fontWeight="bold" >Total  ₹ {Math.floor(total-(total/100*10))+50}</Text>

                            <Divider w="10%" orientation='vertical' />

                            <Button w="full" colorScheme='pink' color="white" size='lg'>
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