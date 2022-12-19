import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';
  import SignInForm from './SignInForm';



const SignIn =()=>{
    
            const { isOpen, onOpen, onClose } = useDisclosure()  
            const {loginName} = useContext(AuthContext)
            return(
                <>
                <Button colorScheme='pink'  onClick={onOpen}>{loginName}</Button>
                <Modal size="xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                     <SignInForm />
                    </ModalBody>
          
                    <ModalFooter>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                </>
            )
          }
   
   
    

export default SignIn;