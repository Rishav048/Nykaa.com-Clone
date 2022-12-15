import {Box,HStack,} from "@chakra-ui/react"
import styled from "@emotion/styled"
const SubNavbar = ()=>{
    const Styles = {fontWeight:"600"  }
    return (
        <Box w="100%" border="0px solid red"   >
        <HStack  className={styled.SubNavbar} paddingLeft="60px"  paddingRight="60px" spacing='20px' justify="space-around" alignItems="center" display="flex" boxShadow="dark-lg" >
          <Box style={Styles} w='100%' h='30px' bg='#ffffff' >Makeup</Box>
           <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Skin</Box>
            <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Hair</Box>
             <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Appliances</Box>
              <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Bath & Body</Box>
               <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Natural</Box>
                <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Mom & Baby</Box>
                 <Box style={Styles} w='100%' h="30px" bg='#ffffff' >Health</Box>
                  <Box style={Styles} w='100%' h='30px' bg='#ffffff' >Fragrance</Box>
                    <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Pop Ups</Box>
                    
        </HStack>
      </Box>
    )
}

export default SubNavbar;