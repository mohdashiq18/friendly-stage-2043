import { Box, Text, Image, Button,Stack } from "@chakra-ui/react";

import {IoIosHeartEmpty,IoIosHeart} from "react-icons/io";

const BestSeller = () => {
    return (
        <div >
            <Box fontFamily="monospace" w="91%" m="auto" justifyContent="space-between" display={["inline", "flex", "flex"]}>
                <Box w="32%" m="auto" h="510px" border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>BEST SELLER</Text>
                    <Box h="161px"  display="flex">
                        <Box w="40%" >
                            <Image src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/c/7c1a8e9o3xxx00000057_new1.jpg"></Image>
                        </Box>
                        <Box w="60%" paddingTop="21px" >
                            <Text>O3+ Derma Cult Vitamin-C Tonic Solution</Text>
                            <Image w="40%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                            <Text>Rs- 301/-</Text>
                            <Stack mt="5px" spacing={2} direction='row' align='center'>
                                <Button colorScheme='pink' size='sm'>
                                    Add to Cart
                                </Button>
                                <Button w="40px" colorScheme='pink' size='sm'>
                                    <  IoIosHeartEmpty></IoIosHeartEmpty>
                                </Button>
                                
                            </Stack>
                        </Box>

                    </Box>
                    <Box h="161px" >
                    <Box h="161px"  display="flex">
                        <Box w="40%" >
                            <Image src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/c/7c1a8e9o3xxx00000057_new1.jpg"></Image>
                        </Box>
                        <Box w="60%" paddingTop="21px" >
                            <Text>O3+ Derma Cult Vitamin-C Tonic Solution</Text>
                            <Image w="40%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                            <Text>Rs- 301/-</Text>
                            <Stack mt="5px" spacing={2} direction='row' align='center'>
                                <Button colorScheme='pink' size='sm'>
                                    Add to Cart
                                </Button>
                                <Button w="40px" colorScheme='pink' size='sm'>
                                <IoIosHeart></IoIosHeart>
                                </Button>
                                
                            </Stack>
                        </Box>

                    </Box>
                    </Box>
                    <Box h="161px" >
                    <Box h="161px"  display="flex">
                        <Box w="40%" >
                            <Image src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/c/7c1a8e9o3xxx00000057_new1.jpg"></Image>
                        </Box>
                        <Box w="60%" paddingTop="21px" >
                            <Text>O3+ Derma Cult Vitamin-C Tonic Solution</Text>
                            <Image w="40%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                            <Text>Rs- 301/-</Text>
                            <Stack mt="5px" spacing={2} direction='row' align='center'>
                                <Button colorScheme='pink' size='sm'>
                                    Add to Cart
                                </Button>
                                <Button w="40px" colorScheme='pink' size='sm'>
                                    <Image  src="https://spng.pngfind.com/pngs/s/52-526635_heart-icon-black-heart-icon-png-transparent-png.png"></Image>
                                </Button>
                                
                            </Stack>
                        </Box>

                    </Box>
                    </Box>
                </Box>
                <Box w="32%" m="auto" h="510px"  border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>LATEST PRODUCTS</Text>
                </Box>
                <Box w="32%" m="auto" h="510px"  border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>MOST VIEWED</Text>
                </Box>

            </Box>
        </div>
    )
}
export default BestSeller;