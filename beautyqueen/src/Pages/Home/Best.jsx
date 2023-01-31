import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { dataUrl } from "../../share";
import { ToastContainer, toast } from "react-toastify";

const Best = () => {
  const [pro, setPro] = useState([]);

  console.log("pro");

  useEffect(() => {
    axios
      .get(`${dataUrl}/products/`)
      .then((res) => setPro(res.data))
      .catch((er) => console.log(er));
  }, []);
  const addcart=(payload)=>{
    axios.post(`${dataUrl}/order/add`,payload)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  const handleCart = (id) => {
    console.log(id)
    axios
      .get(`${dataUrl}/products/${id}`)
      .then((res) =>addcart(res.data))
      .catch((er) => console.log(er));
  };
  return (
    <div>
      {pro &&
        pro.map((el, i) => (
          <Box pt="5px" display="flex">
            <Box w="40%">
              <Image w="100%" src={el.image}></Image>
            </Box>
            <Box w="60%" paddingTop="21px">
              <Box
                fontSize={["15px", "16px", "16px"]}
                fontWeight="black"
                h={["auto", "auto", "41px"]}
                overflow="hidden"
              >
                <Text>{el.name}</Text>
              </Box>

              <Image
                w="40%"
                src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"
              ></Image>
              <Text fontWeight="semibold" fontSize={["15px", "16px", "16px"]}>
                {el.price} /-
              </Text>
              <Stack mt="5px" spacing={2} direction="row" align="center">
                <Button
                  onClick={() => handleCart(el._id)}
                  colorScheme="pink"
                  size="sm"
                >
                  Add to Cart
                </Button>
                <Button colorScheme="pink" size="sm">
                  <IoIosHeart size="23px"></IoIosHeart>
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
export default Best;
