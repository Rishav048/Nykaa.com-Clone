import {useToast} from "@chakra-ui/react"


function DeleteToast() {
    const toast = useToast()
    return (
      <img
      style={{height:"50px", width:"50px", marginLeft:"0",marginTop:"0"   }} 
      src="https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg" alt="Hello Pic"
      
      onClick={() =>
          toast({
            title: 'Item Deleted',
            description: "Your Item Is DELETED",
            status: 'error',
            duration: 1000,
            isClosable: true,
          })
        }
      
      />
    )
  }
  export default DeleteToast;

 // <img style={{height:"50px", width:"50px", marginLeft:"190px",marginTop:"30px"   }}   src="https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg" alt="Hello Pic" />