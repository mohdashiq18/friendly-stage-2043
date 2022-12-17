import { Box, SimpleGrid, Wrap, Text, Image } from "@chakra-ui/react";
import Hotdeals from "./Hotdeals";
import { Images } from "./Data"
import { useEffect, useState } from "react";
import BestSeller from "./BestSeller";
import axios from "axios";
import { IoIosMenu } from "react-icons/io"
import React from "react"
import { dataUrl } from "../../share";
const Home = () => {
    const [data, setData] = useState([]);

    const [slide, setSlider] = useState(0)

    const [next, setNext] = useState(slide + 1);

    const getData = () => {
        axios.get(`${dataUrl}/products/skin?limit=8`, { withCredentials: true })
            .then((res) => setData(res.data))
            .catch((er) => console.log(er))
    }

    useEffect(() => {
        getData()

    }, [])

    if (next === Images.length - 1) {
        setSlider(0)

        setNext(slide + 1)
    }



    useEffect(() => {

        const intervalId = setInterval(() => {

            if (slide >= Images.length - 1) {


                setSlider(0)
                setNext(next + 1)
            }
            setSlider((prev) => prev + 1)

        }, 1500);

        return () => clearInterval(intervalId);


    }, [slide])
    useEffect(() => {
        console.log("data------", data)

    }, [data])

    return (
        <>
            <br />
            <br />

            <Box w="90%" m="auto" display={["inline", "flex", "flex"]} p={["0px", "1px", "3px"]} justifyContent="space-between"  border="0.1px solid #92928F" >
                <Box m={["auto", "1px", "1px"]} width={["80%", "37%", "30%"]} >
                    <Box display="flex" p={["2px 5px", "3px 4px", "5px 11px"]}  >
                        <Box><IoIosMenu size="27px"></IoIosMenu></Box>
                        <Box >
                            <Text marginLeft="3px" fontWeight="semibold" fontSize={["15px", "13px", "18px"]}>ALL CATEGORIES</Text></Box>
                    </Box>


                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]} >
                        <Box> <Image marginRight="5px" src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" /></Box>
                        <Box>
                            <Text fontSize={["14px", "13px", "16px"]}>Make Up</Text></Box>
                    </Box>

                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]} >
                        <Box><Image marginRight="5px" src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" /></Box>
                        <Box> <Text fontSize={["14px", "13px", "16px"]}>Hair</Text></Box></Box>

                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]} >
                        <Box> <Image marginRight="5px" src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" /></Box>
                        <Box><Text fontSize={["14px", "13px", "16px"]}>Skin Care</Text></Box></Box>

                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]}>
                        <Box><Image marginRight="5px" src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" /></Box>
                        <Box><Text fontSize={["14px", "13px", "16px"]}>Personal Care</Text></Box></Box>
                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]}>
                        <Box><Image marginRight="5px" src="https://www.beautybebo.com/pub/media/fragrance.png" /></Box>
                        <Box> <Text fontSize={["14px", "13px", "16px"]}>Fragnance</Text></Box>
                    </Box>
                    <Box display="flex" p={["2px 5px", "3px 7px", "5px 11px"]}>
                        <Box> <Image marginRight="5px" src="https://www.beautybebo.com/pub/media/ayurveda.png" /></Box>
                        <Box><Text fontSize={["14px", "13px", "16px"]}>Ayurveda</Text></Box>
                    </Box>
                </Box>
                <Box p="0.5px" margin="auto" width={["89%", "77%", "74%"]}  >
                    <Image width="100%" src={Images[slide]}></Image>
                </Box>
            </Box>
            <br />
            <Box w="90%" m="auto">
                <Image width="100%" src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg"></Image>

            </Box>
            <Hotdeals dt={data} />
            <br />
            <Box w="90%" m="auto">
                <Image width="100%" src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"></Image>

            </Box>
            <br />
            <Box w="91%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between"  >
                <Box margin="auto" width={["91%", "49%", "49%"]} >
                    <Image width="100%" src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"></Image>
                </Box>
                <Box margin="auto" width={["91%", "49%", "49%"]} >
                    <Image width="100%" src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"></Image>
                </Box>
            </Box>
            <br />
            <BestSeller />


           

            <br />
            <Box w="90%" m="auto">
                <Image width="100%" src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"></Image>

            </Box>


        </>
    )
}
export default React.memo(Home)
