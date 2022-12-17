import { Box, SimpleGrid, Wrap, Text, Image } from "@chakra-ui/react";
import Hotdeals from "./Hotdeals";
import { Images } from "./Data";
import { useEffect, useState } from "react";
import BestSeller from "./BestSeller";
import axios from "axios";
import { IoIosMenu } from "react-icons/io";
import React from "react";
const Home = () => {
  const [data, setData] = useState([]);

  const [slide, setSlider] = useState(0);

  const [next, setNext] = useState(slide + 1);

  const getData = () => {
    axios
      .get("/products/?page=2&limit=1&category=skin", { withCredentials: true })
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    getData();
  }, []);

  if (next === Images.length - 1) {
    setSlider(0);

    setNext(slide + 1);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (slide >= Images.length - 1) {
        setSlider(0);
        setNext(next + 1);
      }
      setSlider((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [slide]);
  useEffect(() => {
    console.log("data------", data);
  }, [data]);

  return (
    <>
      <br />
      <br />

      <Box
        w="90%"
        m="auto"
        display={["inline", "flex", "flex"]}
        p="3px"
        justifyContent="space-between"
        border="0.3px solid grey"
      >
        <Box width={["80%", "27%", "27%"]}>
          <Box display="flex" p="5px 11px">
            <IoIosMenu size="29px"></IoIosMenu>
            <Text marginLeft="5px" fontWeight="bold" fontSize="19px">
              ALL CATEGORIES
            </Text>
          </Box>
          <Box display="flex" p="5px 11px">
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png"
            />
            <Text fontSize="17px">Make Up</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png"
            />
            <Text fontSize="17px">Hair</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png"
            />
            <Text fontSize="17px">Skin Care</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            {" "}
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png"
            />
            <Text fontSize="17px">Personal Care</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            {" "}
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png"
            />
            <Text fontSize="17px">Mom & Baby Care</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            {" "}
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/fragrance.png"
            />
            <Text fontSize="17px">Fragnance</Text>
          </Box>
          <Box display="flex" p="5px 11px" paddingLeft="10px">
            {" "}
            <Image
              marginRight="5px"
              src="https://www.beautybebo.com/pub/media/ayurveda.png"
            />
            <Text fontSize="17px">Ayurveda</Text>
          </Box>
        </Box>
        <Box p="0.5px" margin="auto" width={["89%", "73%", "73%"]}>
          <Image w="100%" src={Images[slide]}></Image>
        </Box>
      </Box>
      <Hotdeals dt={data} />
      <br />
      <Box w="90%" m="auto">
        <Image
          w="100%"
          src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"
        ></Image>
      </Box>
      <br />
      <Box
        w="91%"
        m="auto"
        display={["inline", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Box margin="auto" width={["91%", "49%", "49%"]}>
          <Image
            w="100%"
            src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif"
          ></Image>
        </Box>
        <Box margin="auto" width={["91%", "49%", "49%"]}>
          <Image
            w="100%"
            src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif"
          ></Image>
        </Box>
      </Box>
      <br />
      <BestSeller />

      <br />
      <Box w="90%" m="auto">
        <Image
          w="100%"
          src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg"
        ></Image>
      </Box>

      <br />
      <Box w="90%" m="auto">
        <Image
          w="100%"
          src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"
        ></Image>
      </Box>
    </>
  );
};
export default React.memo(Home);
