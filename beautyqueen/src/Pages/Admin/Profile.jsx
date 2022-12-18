import {
  Box,
  Divider,
  Flex,
  Image,
  Spacer,
  Text
} from "@chakra-ui/react";
import { useMedia } from "../../MediaQuery/UseMedia";
import { useEffect, useState } from "react";
import MyRoutine from "./MyRoutine";
import Loading from "../../Components/Loading";
import LogsPage from "./LogsPage";
import Reports from "./Reports";
import Photos from "./Photos";
import Exercises from "./Exercises";
import Messages from "./Messages";
import { Link } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";
import "./profile.css"





const init1 = {
  routines: false,
  logs: false,
  reports: false,
  photos: false,
  exercises: false,
  messages: false,
};




export const Profile = () => {
  const [change, setChange] = useState(0)
  const { smallScreen, mediumScreen } = useMedia();
  const [section, setSection] = useState({ ...init1, routines: true });
  const { routines, logs, reports, photos, exercises, messages } = section; 
  const [loading, setLoading] = useState(false);
 
  

  const changePages = (value) => {
    setSection({ ...init1 });
    setLoading(true);

    setTimeout(() => {
      setSection({ ...init1, [value]: true });
      setLoading(false);
    }, 3500);
  };

  function changeIt(){
    setChange((prev)=>prev+1)
  }

  /* dashboard */
  const [users, setUsers] = useState([])
  const [admins, setAdmins] = useState([])
  const [products, setProducts] = useState([])

  const getUser = async () => {
    axios.get(`http://localhost:8080/users`,{withCredentials:true}).then((res)=>{
      setUsers(res.data)
      /* setChange(change++) */
    }).catch((e)=>console.log(e?.response?.data || e.message))
  }
  const getProducts = async () => {
    axios.get(`http://localhost:8080/products`,{withCredentials:true}).then((res)=>{
      setProducts(res.data)
      /* setChange(change++) */
    }).catch((e)=>console.log(e?.response?.data || e.message))
  }

  const deleteFun = async (email) => {
    axios.delete(`http://localhost:8080/users/${email}`,{withCredentials:true}).then((res)=>{
        console.log(res.data)
        changeIt()
    }).catch((e)=>console.log(e?.response?.data || e.message))
  }

  const changeRole = async (email,role) => {
    axios.post(`http://localhost:8080/users/changerole`,{email:email,role:role},{withCredentials:true}).then((res)=>{
        console.log(res.data)
        changeIt()
    }).catch((e)=>console.log(e?.response?.data || e.message))
  }

  const userBan = async (email,status) => {
    axios.post(`http://localhost:8080/users/ban/${email}/${status}`,{withCredentials:true}).then((res)=>{
        console.log(res.data)
        changeIt()
    }).catch((e)=>console.log(e?.response?.data || e.message))
  }

useEffect(()=>{
  let newId = setTimeout(()=>{
    getUser()
    getProducts()
  },1000)
},[change]) 

useEffect(()=>{
    let admin = users.filter((el)=>{
      return el.role != "user"
    })
    setAdmins(admin)
  },[users])
 

  return (
    <>
      <Box className="main_room" fontWeight="500" m="auto" w={mediumScreen ? "95%" : "90%"}>
      <Text mt="100px" fontSize={"5xl"} color="#00ff2a" >Admin Management Page</Text>
        <Flex mt="10px" direction={!mediumScreen ? "column" : "row"}>
          {/* first */}
          <Box m="auto" w={["96%","96%" ,"20%", "17%"]} mt="50px">
            <Flex mb="7px" onClick={() => changePages("routines")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/routine_icon_64_64.png"
              />
              <Text fontSize="sm"> All Users </Text>
            </Flex>
            <Divider
              mt="3px"
              mb="3px"
              orientation="horizontal"
              style={{ color: "red", size: "20" }}
            />

            <Flex mb="7px" onClick={() => changePages("logs")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/main_menu_logs_70_70.png"
              />
              <Text fontSize="sm"> All Products </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex mb="7px" onClick={() => changePages("reports")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/training_reports_icon_70_70.png"
              />
              <Text fontSize="sm"> All Orders </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
              <Flex mb="7px" onClick={() => changePages("photos")} >
                <Image
                  w="20px"
                  mr="5px"
                  src="https://www.jefit.com/images/pictureicon.png"
                />
                <Text fontSize="sm"> Add Product </Text>
              </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex mb="7px" onClick={() => changePages("exercises")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/exercise_icon3_64_64.png"
              />
              <Text fontSize="sm"> Add User </Text>
            </Flex>
            <Divider mt="3px" mb="3px" orientation="horizontal" />
            <Flex mb="7px" onClick={() => changePages("messages")}>
              <Image
                w="20px"
                mr="5px"
                src="https://www.jefit.com/images/message_icon.png"
              />
              <Text fontSize="sm"> My Details </Text>
            </Flex>
          </Box>
          {/* second */}
          <Spacer />
          <Box
            m="auto"
            w={["96%", "95%","55%", "55%"]}
            style={{ lineHeight: "40px" }}
            textAlign="left"
            mt="50px"
            fontSize="xl"
          >
            {loading && <Loading />}
            {routines && <MyRoutine deleteFun={deleteFun} users={users} changeRole={changeRole} userBan={userBan} />}
            {logs && <LogsPage />}
            {reports && <Reports />}
            {photos && <Photos />}
            {exercises && <Exercises />}
            {messages && <Messages />}
          </Box>

          {/* third */}
              <Spacer />
              <Box textAlign="center"  w={["95%","95%","20%","20%"]} mt="50px">
                <Dashboard users={users} admins={admins} products={products} />
              </Box>
  
        </Flex>
      </Box>
      {/* <BoxCrouser/>  */}
    </>
  );
};

//ghfghgf
