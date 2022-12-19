import { useState, useEffect,useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginCheck = {
    email: "",
    password: ""
}


const LogInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [ myDetails , setmyDetails] = useState(LoginCheck);
  const [ logincheckdetails , setlogincheckdetails] = useState([]);


  const {changeAuth,ChangeMyname } = useContext(AuthContext)





 const Navigate = useNavigate()

 useEffect(()=>{
    CheckLoginDetails();
 },[])



   const handleMyInput = (e)=>{
    setmyDetails({...myDetails,[e.target.name]:e.target.value})
   }

   const hangleSubmitlogin = (e)=>{
       e.preventDefault();

       var flag = false;
     
       logincheckdetails.filter((el)=>{
         if(el.email === myDetails.email  &&  el.password === myDetails.password){
            flag = true;
            ChangeMyname(el.name)
         }
        
       })

       if(flag){
         console.log("done");
         changeAuth();
         return  Navigate("/") 
       }
       else{
        setmyDetails(LoginCheck)
        alert ("Wrong Credentials")
       }

       console.log(myDetails);
       
   }


  const CheckLoginDetails = async()=>{
    try{
        let res = await fetch(`https://rishavbacked.onrender.com/LogIn`);
          let data = await res.json();
          console.log("Fetch Login Data" , data);
          setlogincheckdetails(data)   
    }
    catch(e){
        console.log(e)
    }
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="70vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="black" />
        <Heading color="red.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form  onSubmit={hangleSubmitlogin}  >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
                
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="pink" />}
                  />
                  <Input name="email"  value={myDetails.email}  onChange={handleMyInput}    type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="pink" />}
                  />
                  <Input
                    name="password"  value={myDetails.password}  onChange={handleMyInput} 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LogInComponent;