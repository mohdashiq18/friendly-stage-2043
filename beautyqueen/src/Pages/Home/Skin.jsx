import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text, Image, Button, Stack ,Wrap,SimpleGrid} from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { dataUrl } from "../../share";
import { ToastContainer, toast } from 'react-toastify';
const Skin=()=>{
    const [pro, setPro] = useState([]);


    const getPro = () => {
        axios.get(`${dataUrl}/products/Fragrance`, { withCredentials: true })
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getPro()

    }, [])

    const handleCart=(id)=>{
        axios.post(`${dataUrl}/carts`,{product:id},{withCredentials:true})
        .then((res)=>(
            toast.success("Item added to your Cart")
    
       )
      
        
        ) 
        .catch((er)=>(
            toast.error("something went wrong!")
        ))
    
        
       }
    return (
        <div>
            <Text textAlign="center" fontSize="21px" textDecoration="underline 2px #EB046D" fontWeight="semibold" margin="15px">Skin Products</Text>
            
            <Wrap justify="center">
            

                <SimpleGrid w="90%" spacing={3} columns={[2, 4]} >
                    {
                        pro && pro.map((el,i)=>(
                            <Box  w="100%" textAlign="center">
                                <Box w="70%" m="auto">
                                <Image w="100%" src={el.image}></Image>
                                </Box>
                                
                                <Box  fontSize={["15px","16px","16px"]}  fontWeight="semibold" h={["41px","46px","48px"]} overflow="hidden">
                                <Text p="0px 7px" >{el.name}</Text>
                                </Box>
                                <Box w="39%" margin="auto">
                                    <Image w="100%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                    <Text color="#EB046D"  fontSize="17px">  ₹ {el.price} /-</Text>
                                    <Text as="s" m="3px 4px" fontSize="14px"> ₹ {el.ofPrice}/-</Text>
                                    </Box>
                                

                                
                                
                                <Box display="flex" m="auto" alignItems="center" justifyContent="center">
                                
                                <Button onClick={()=>handleCart(el._id)} colorScheme='pink' mr="5px"  size='sm'>
                                    Add to Cart
                                </Button>
                                <Button  colorScheme='pink' size='sm'>
                                    <IoIosHeart size="24px" ></IoIosHeart>
                                </Button>
                                </Box>

                          
                                
                            </Box>
                           

                        ))
                    }
                   
                </SimpleGrid>
            </Wrap>
            <ToastContainer position="top-center"
            autoClose={3000}/>
            

        </div>
    )
}
export default Skin