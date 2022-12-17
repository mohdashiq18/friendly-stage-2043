import { Box, Text, Image } from "@chakra-ui/react"

const Cart = () => {
    return (
        <div>
            <Box m="auto" w="90%" h="250px">
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
        </div>
    )
}
export default Cart