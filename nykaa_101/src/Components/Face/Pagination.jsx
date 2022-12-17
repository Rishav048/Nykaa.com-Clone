import {Text,Stack,Button,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper} from "@chakra-ui/react"


const Pagination=({totalpage,page,changePage,handleLimit,Limit})=>{
    return(
        
  <Stack style={{marginBottom:"30px"}}  direction='row' display="flex" justifyContent="space-around" >
  <Button  onClick={()=>changePage(-1)}   disabled={page === 0} background="#ff7db0" color='black' variant='solid'>
    {"<<"} PREV
  </Button>
  <Button style={{borderRadius:"150%"}}  background="#ff7db0" color='black' variant='solid'>
    {page} of {totalpage}
  </Button>
  <Button onClick={()=>changePage(1)} disabled={page === totalpage} background="#ff7db0" color='black' variant='solid'>
    NEXT {">>"}
  </Button>
  <Stack shouldWrapChildren direction='row'>
    <Text style={{fontSize:"17px", fontWeight:"600", color:"#ed0995", marginTop:"10px"}}  >Products Per Page</Text>
  <NumberInput style={{width:"15vh", fontWeight:"bolder"}} size='lg' value={(Limit<3 || Limit > 12)? null:Limit} onChange={handleLimit}  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</Stack>
  </Stack>
    )
}

export default Pagination;