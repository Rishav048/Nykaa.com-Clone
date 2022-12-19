import { useState, useContext } from "react";
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
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginObj = {
    name:"",
    email: "",
    password: ""
}


const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [postLogin , setPostlogin] = useState(LoginObj);

 const {NameChange,loginName} = useContext(AuthContext)



   const handleMyInput = (e)=>{
    setPostlogin({...postLogin,[e.target.name]:e.target.value})
   }

   const hangleSubmitlogin = (e)=>{
       e.preventDefault();
       console.log(postLogin)
       PostLoginDetails(postLogin);
       NameChange(postLogin.name)
       setPostlogin(LoginObj)
   }

  const PostLoginDetails = async(postLogin)=>{
    try{
        let res = await fetch(`http://localhost:3000/LogIn`,{
            method:"POST",
            body:JSON.stringify(postLogin),
            headers: {
              "content-type":"application/json"
            },
          });
          let data = await res.json();
          console.log("Login Data" , data)
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
                  <Input name="name"  value={postLogin.name}  onChange={handleMyInput}    type="text" placeholder="Full Name" />
                </InputGroup>
              </FormControl>




              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="pink" />}
                  />
                  <Input name="email"  value={postLogin.email}  onChange={handleMyInput}    type="email" placeholder="email address" />
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
                    name="password"  value={postLogin.password}  onChange={handleMyInput} 
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
      <Box>
        New to us?{" "}
        <Link color="blue" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default SignInForm;