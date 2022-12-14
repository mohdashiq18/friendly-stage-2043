import {Box, SimpleGrid, Wrap,Text,Image} from "@chakra-ui/react";
import Hotdeals from "./Hotdeals";
const Home=()=>{
    return (
        <>
        <br />
        <br />
        
        <Box w="90%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between"  border="1px solid gray" >
            <Box border="1px solid teal" margin="auto"  width={["80%","27%","27%"]} >
                <Box h="31px"  paddingLeft="10px"><Text fontSize="17px">Make Up</Text></Box>
                <Box h="31px"   paddingLeft="10px"><Text fontSize="17px">Hair</Text></Box>
                <Box h="31px"  paddingLeft="10px"><Text fontSize="17px">Skin</Text></Box>
                <Box h="31px" paddingLeft="10px"><Text fontSize="17px">Personal Care</Text></Box>
                <Box h="31px" paddingLeft="10px"><Text fontSize="17px">Mom & Baby Care</Text></Box>
                <Box h="31px" paddingLeft="10px"><Text fontSize="17px">Fragnance</Text></Box>
                <Box h="31px" paddingLeft="10px"><Text fontSize="17px">Ayurveda</Text></Box>
            </Box>
            <Box p="0.5px" margin="auto" width={["89%","73%","73%"]}  >
                <Image src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"></Image>
            </Box>
        </Box>
        <Hotdeals/>
        <br />  
        <Box w="91%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between"  >
            <Box  margin="auto" width={["91%","49%","49%"]} >
                <Image src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"></Image>
            </Box>
            <Box  margin="auto" width={["91%","49%","49%"]} >
                <Image src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"></Image>
            </Box>
        </Box> 
        <br />
        <Box w="90%" m="auto">
            <Image src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg"></Image>

        </Box>
     
        
        </>
    )
}
export default Home