import { Box, Image, SimpleGrid, Stack, Wrap,Text } from '@chakra-ui/react'
const Hotdeals = () => {
    return (
        <div>
            <Text textAlign="center" fontSize="21px" margin="15px">Hot Deals</Text>
            
            <Wrap justify="center">
            

                <SimpleGrid w="90%" spacing={3} columns={[2, 4]}   >
                    <Box border="1px solid red" w="100%" h="270px"></Box>
                    <Box border="1px solid red" w="100%" h="270px"></Box>
                    <Box border="1px solid red" w="100%" h="270px"></Box>
                    <Box border="1px solid red" w="100%" h="270px"></Box>
                </SimpleGrid>
            </Wrap>

        </div>
    )
}
export default Hotdeals