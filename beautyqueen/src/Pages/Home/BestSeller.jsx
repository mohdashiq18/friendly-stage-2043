import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { dataUrl } from "../../share";
import Best from "./Best";
import Latest from "./Latest";
import Most from "./Most";

const BestSeller = () => {

    const [pro, setPro] = useState([]);


    useEffect(() => {
        axios.get(`${dataUrl}/products/`)
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))

    }, [])
    return (
        <div >
            <Box fontFamily="monospace" w="91%" m="auto" justifyContent="space-between" display={["inline", "inline", "flex"]}>
                <Box w={["80%","80%","32%"]} m="auto" h="auto" p={5}  border=".1px solid gray">
                    <Text textDecoration="underline 2px #EB046D" fontWeight="black" fontSize={["16px", "19px", "19px"]}>BEST SELLER</Text>
                    <Box marginBottom="20px" >
                       
                        <Best></Best>
                        

                    </Box>


                </Box>
                <Box w={["80%","80%","32%"]} m="auto" h="auto" p={5}  border=".1px solid gray">
                    <Text textDecoration="underline 2px #EB046D" fontWeight="black" fontSize={["16px", "19px", "19px"]}>LATEST PRODUCTS</Text>
                    <Box marginBottom="20px" >
                       
                        <Latest></Latest>
                        

                    </Box>
                </Box>
                <Box w={["80%","80%","32%"]} m="auto"  h="auto" p={5}  border=".1px solid gray">
                    <Text textDecoration="underline 2px #EB046D"  fontWeight="black" fontSize={["16px", "19px", "19px"]}>MOST VIEWED</Text>
                    <Box marginBottom="20px">
                       
                        <Most></Most>
                        

                    </Box>
                </Box>

            </Box>
        </div>
    )
}
export default BestSeller;