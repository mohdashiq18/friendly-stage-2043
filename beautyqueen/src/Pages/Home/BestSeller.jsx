import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Best from "./Best";
import Latest from "./Latest";
import Most from "./Most";

const BestSeller = () => {

    const [pro, setPro] = useState([]);


    const getPro = () => {
        axios.get("http://localhost:8080/products/Ayurveda", { withCredentials: true })
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getPro()

    }, [])
    return (
        <div >
            <Box fontFamily="monospace" w="91%" m="auto" justifyContent="space-between" display={["inline", "flex", "flex"]}>
                <Box w="32%" m="auto" h="510px" overflow="hidden" border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>BEST SELLER</Text>
                    <Box h="161px" >
                       
                        <Best></Best>
                        

                    </Box>


                </Box>
                <Box w="32%" m="auto" h="510px" overflow="hidden" border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>LATEST PRODUCTS</Text>
                    <Box h="161px" >
                       
                        <Latest></Latest>
                        

                    </Box>
                </Box>
                <Box w="32%" m="auto" h="510px" overflow="hidden" border=".1px solid gray">
                    <Text fontSize={["16px", "19px", "19px"]}>MOST VIEWED</Text>
                    <Box h="161px" >
                       
                        <Most></Most>
                        

                    </Box>
                </Box>

            </Box>
        </div>
    )
}
export default BestSeller;