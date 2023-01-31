import { Badge, Box, Button, ButtonGroup, Divider, Flex, HStack, IconButton, Image, Input, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dataUrl } from '../../share';
import { Navigate,useNavigate } from "react-router-dom"
import CartSingleCard from "./CartSingleCard"
import "../../Components/SignUp/SignUp.css"
import { ToastContainer, toast } from 'react-toastify';
const PaymentPage = () => {
    const [cartData, setPro] = useState([]);
    const [total,setTotal]=useState(0);
    const [dis,setDis]=useState(10);
    const [sub,setSub]=useState(20);
    const [changeone,setchangeone] = useState(0)
    const {token}=JSON.parse(localStorage.getItem("UserToken"))||false
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
  console.log(cartData)
    const getPro = () => {

        axios.get(`${dataUrl}/order`)
            .then((res) => setPro(res.data))
            .catch((er) => console.log(er))
    }
    const delPro = (id) => {
        axios.delete(`${dataUrl}/order/delete/${id}`)
            .then((res)=>{
                toast.success("Remove successfully")
                setchangeone((pre)=>pre+1)
            })
            .catch((er) => console.log(er))
    }
    const cheakout = () => {

        if(firstname==="" || lastname==="" || email==="" || password==="" || phone==="" || confirmpass===""){
            toast.error("Fill all details")
        }
        else{
            axios.delete(`${dataUrl}/order/delete`)
            .then((res) => {
                toast.success("Order Suceccesfull")
                navigate("/")
                setchangeone((pre)=>pre+1)
            })
            .catch((er) => console.log(er))
        }
    }

    useEffect(() => {
        getPro()

    }, [changeone])
    useEffect(()=>{
        setTotal(0)
        cartData && cartData.map((el,i)=>{
            setTotal((prev)=>prev+el.price)
        })

    },[cartData])
    console.log(token)
    if(!token){
        return <Navigate to="/login"/>
    }
    return (
        
        <div>

            <VStack marginTop={{ base: "220px", md: "180px" }} justify="center" >

                <Text fontSize="2xl" fontWeight="extrabold" >My Bag {cartData.length} item(S)</Text>

                <Stack direction={{ base: "column", sm: "row" }} padding={10} spacing={50} >

                    <VStack spacing={5}   >

                      
                       <div className="input_div_main">
        <div >
          <div className="input_heading">PERSONAL INFORMATION</div>
          <form>
            <div className="name_div">
              <div className="name">
                <label>
                  First Name<span> *</span>
                </label>
                <br />
                <input
                  type="text"
                  style={{ paddingLeft: "10px" }}
                  name="name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="name">
                <label>
                  Last Name<span> *</span>
                </label>
                <br />
                <input
                  type="text"
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="input_details">
              <label>
                Email<span> *</span>
              </label>
              <br />
              <input
                type="email"
                style={{ paddingLeft: "10px" }}
                name="name"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input_details">
              <label>
                Address<span> *</span>
              </label>
              <br />
              <input
                type="text"
                style={{ paddingLeft: "10px" }}
                name="number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input_details">
              <label>
                Phone<span> *</span>
              </label>
              <br />
              <input
                type="number"
                style={{ paddingLeft: "10px" }}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="input_details">
              <label>
                Pin Code<span> *</span>
              </label>
              <br />
              <input
                type="number"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>
            
          </form>
        </div>
      </div>
                      


                    </VStack>


                    <VStack spacing={5} >

                        


                        <Stack bg="gray.200" w={{ base: 300, sm: 600 }} spacing={3} borderWidth='1px' overflow='hidden' padding="5" textAlign="center" >
                            <Text fontWeight="bold" fontSize="20px">PRICE SUMMARY</Text> </Stack>

                        <VStack fontSize="16px" padding="5" w={{ base: 300, sm: 600 }} spacing={5} borderWidth='1px' overflow='hidden'  >

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Total MRP  (Incl. of taxes) </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > ₹ {total}</Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Shipping Charges </Text>
                                <Spacer />
                                <Text fontWeight="bold" color="green.500" fontSize={{ base: "15px", md: "18px" }} > + ₹ 0 </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Bag Discount  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} > - ₹ {Math.floor(total/100*10)} </Text>
                            </HStack>

                            <HStack w="full" >
                                <Text fontSize={{ base: "15px", md: "18px" }} >Subtotal  </Text>
                                <Spacer />
                                <Text fontWeight="bold" fontSize={{ base: "15px", md: "18px" }} >  ₹ {Math.floor(total-(total/100*10))} </Text>
                            </HStack>

                            <Badge overflow="hidden" borderRadius="2xl" fontSize={{ base: "15px", md: "xl" }} padding="5px 20px" w="full" variant='subtle' color="gray.800" colorScheme='green'>
                                You are saving ₹{Math.floor(total/100*10)} on this order
                            </Badge>

                        </VStack>

                        <Stack direction={{ base: "column", md: "row" }} w="full" padding="5" >


                            <Text w={{ base: "full", md: "50%" }} fontSize="2xl" fontWeight="bold" >Total  ₹ {Math.floor(total-(total/100*10))}</Text>

                            <Divider w="10%" orientation='vertical' />

                            <Button w="full" colorScheme='pink' color="white" size='lg' onClick={()=>cheakout()}>
                                Pay
                            </Button>

                        </Stack>

                        <Divider as="bold" />
                        <Divider as="bold" />
                        <Divider as="bold" />
                    </VStack>






                </Stack>


            </VStack>
            <ToastContainer position="top-center"
            autoClose={3000}/>
        </div>
    )
}
export default PaymentPage