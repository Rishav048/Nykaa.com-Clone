import { Card, CardBody , Text , Heading , Stack , Image , Divider, Box } from '@chakra-ui/react'

const Cards = ({img,headig,text})=>{
    return (
       
  <Card maxW='500px' hieght="200px" >
  <CardBody  >
    <Image
      src={img}
      alt='Image1'
      borderRadius='lg'
    />
    <Box mt='6' spacing='3'  >
      <Heading size='md'>{headig}</Heading>
      <Text>
        {text}
      </Text>
    </Box>
  </CardBody>
</Card>   
    )
}


const ShortCards = ({img,heading})=>{
    return(
        <Card maxW='400px' height="250px" marginBottom="20px" >
  <CardBody  >
    <Image
      src={img}
      style={{height:"100%" , width:"100%", border:"0px solid green"}}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Box mt='-7'  style={{background:"grey" , textallign:"center", background:"grey", fontWeight:"600"}} spacing='3'>
      <h3 >{heading}</h3>
    </Box>
  </CardBody>
  <Divider />
</Card>
    )
}


const ShortCards1 = ({img,heading})=>{
    return(
        <Card maxW='400px' height="250px" marginBottom="20px" >
  <CardBody  >
    <Image
      src={img}
      style={{height:"100%" , width:"100%", border:"0px solid green"}}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Box mt='0'  style={{background:"grey" , textallign:"center", background:"white", border:"0px solid black", fontWeight:"600"}} spacing='3'>
      <h3 >{heading}</h3>
    </Box>
  </CardBody>
  <Divider />
</Card>
    )
}




export {Cards,ShortCards,ShortCards1};