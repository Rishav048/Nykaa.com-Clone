import { useToast } from '@chakra-ui/react'
import {Button} from "@chakra-ui/react"



const Toastadded=()=> {

    const toast = useToast()
    return (
      <Button
      style={{background:"rgb(252,40,122)"}}
        onClick={() =>
          toast({
            title: 'Item Added To Cart',
            description: "We've added your item to cart.",
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
        }
      >
        Add to Cart
      </Button>
    )
  }

  export {Toastadded};