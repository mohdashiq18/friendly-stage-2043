import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Best = () => {
    const [pro, setPro] = useState([]);


    const getPro = () => {
        axios.get("/products/Ayurveda", { withCredentials: true })
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getPro()

    }, [])
    return (
        <div>
            {
                pro.map((el, i) => (
                    <Box display="flex">
                        <Box w="40%">
                            <Image src={el.image}></Image>
                        </Box>
                        <Box w="60%" paddingTop="21px">
                            <Text>{el.name}</Text>
                            <Image w="40%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                            <Text>{el.price} /-</Text>
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
                ))
            }
        </div>
    )
}
export default Best;