import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./App.css";
 import Navimag from "./Components/NavBar/beautybebo_logo.png"
import Drop from "./Components/Dropcde/Drop";
import Footer from "./Components/Footer/Footer";
import Navdar from "./Components/MyAccount/Navdar";
import Topnavbar from "./Components/MyAccount/Topnavbar";

import { Navbar } from "./Components/NavBar/NavBar";
import { useMedia } from "./MediaQuery/UseMedia";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { smallScreen, mediumScreen } = useMedia();
  return (
    <div className="App">
      <Topnavbar />
      {mediumScreen && <Navdar />}

      {mediumScreen && <Navbar />}
      {!mediumScreen && (
        <Flex
          style={{ position: "sticky", top: "0px", zIndex: 12 }}
          bgColor={"pink.500"}
          w="100%"
          justifyContent={"space-between"}
          p={"5px 5%"}
        ><div style={{ width: "35%", paddingLeft: "5%", marginTop: "-18px" }}>
        <Link to={"/"}>
          <img style={{ width: "100%",borderRadius:"5px" }} src="http://localhost:3000/static/media/beautybebo_logo.d62a355dd09d371e83e2.png" />{" "}
        </Link>
      </div>
          <Flex gap={5}>
          <Box>
            <Button
              colorScheme="#dd0285"
              border={"1px solid white"}
              color="black"
            >
              <Link to="/cart">
                <Text>My Cart</Text>{" "}
              </Link>
            </Button>
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link to={"/"}>
                {" "}
                <MenuItem /* onClick={()=>toggleClick("home")} */>
                  {" "}
                  Home
                </MenuItem>{" "}
              </Link>
              <Link to={"/login"}>
                {" "}
                <MenuItem /* onClick={()=>toggleClick("about")} */ /* bgColor={yellow} */
                >
                  Login
                </MenuItem>{" "}
              </Link>
              <Link to={"/signup"}>
                <MenuItem /* onClick={()=>toggleClick("skills")} */>
                  Signup
                </MenuItem>{" "}
              </Link>
              <Link to={"/admin"}>
                {" "}
                <MenuItem /* onClick={()=>toggleClick("projects")} */ /* bgColor={yellow} */
                >
                  Admin
                </MenuItem>{" "}
              </Link>
              <Link to={"/cart"}>
                {" "}
                <MenuItem /* onClick={()=>toggleClick("contact")} */>
                  {" "}
                  Cart
                </MenuItem>{" "}
              </Link>
            </MenuList>
          </Menu>
          
          
          </Flex>
        </Flex>
      )}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
