import { Box, SimpleGrid, Wrap, Text, Image } from "@chakra-ui/react";
import Hotdeals from "./Hotdeals";
import { NavLink } from "react-router-dom";

import { Images } from "./Data";
import { useEffect, useState } from "react";
import BestSeller from "./BestSeller";
import axios from "axios";
import { IoIosMenu } from "react-icons/io";
import React from "react";
import { dataUrl } from "../../share";

const Home = () => {
  const [data, setData] = useState([]);

  const [slide, setSlider] = useState(0);

  const [next, setNext] = useState(slide + 1);

  useEffect(() => {
    axios
      .get(`${dataUrl}/products/`)
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
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
      <Box
        w="90%"
        m="auto"
        mt="40px"
        display={["inline", "flex", "flex"]}
        p="2px"
        justifyContent="space-between"
        border="0.3px solid grey"
      >
        <Box
          ml={["16px", "16px", "16px"]}
          display={["none", "block", null, null, null]}
          width={["80%", "35%", "27%"]}
        >
          <Box display="flex" p={["5px 10px", "2px 2px", "2px 9px"]}>
            <Box>
              <IoIosMenu size="24px"></IoIosMenu>
            </Box>
            <Box>
              <Text
                marginLeft="3px"
                pt={["2px", "3px", "0px"]}
                fontWeight="bold"
                fontSize={["13px", "12px", "16px"]}
              >
                ALL CATEGORIES
              </Text>
            </Box>
          </Box>
          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Make Up</Text>
              </Box>
            </NavLink>
          </Box>
          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Hair</Text>
              </Box>
            </NavLink>
          </Box>
          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Skin Care</Text>
              </Box>
            </NavLink>
          </Box>
          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Personal Care</Text>
              </Box>
            </NavLink>
          </Box>

          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/fragrance.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Fragnance</Text>
              </Box>
            </NavLink>
          </Box>
          <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
            <Box>
              <Image
                width={["69%", "68%", "78%"]}
                marginRight="5px"
                src="https://www.beautybebo.com/pub/media/ayurveda.png"
              />
            </Box>
            <NavLink to="/skin">
              <Box>
                <Text fontSize={["12px", "12px", "15px"]}>Ayurveda</Text>
              </Box>
            </NavLink>
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
