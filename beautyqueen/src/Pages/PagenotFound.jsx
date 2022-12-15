import { Box, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import axios from "axios"

const PagenotFound = () => {
    
    return (
        <Box w="full" h={"800px"} >
            <Text style={{ textAlign:"center",color:"red", fontSize:"200%"  }} mt="10%" >404 Page Not Found</Text>
            <Text  style={{ textAlign:"center",color:"green"}}  >Click here for homepage<span> <Link to={"/"}>  <Button fontSize="xl" backgroundColor="red" color="blue.900"  >Homepage</Button></Link> </span> </Text>
           
        </Box>
    )
}

export default PagenotFound;