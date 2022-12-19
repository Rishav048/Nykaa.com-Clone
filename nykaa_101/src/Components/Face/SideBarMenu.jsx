import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    CheckboxGroup,
    Stack,
    Checkbox
  } from '@chakra-ui/react'
import { useState } from 'react';




const SideBar = ({handlePriceSorting,handleRatingSorting})=>{
    const [checkedstatus , setcheckedstatus] = useState(false);

     const handlePriceStatus1 =(e)=>{
      if(e.target.name === "Low To High"  && e.target.checked === true){
        //console.log("low PRICE")
        handlePriceSorting("asc")
      }
       else{
        handlePriceSorting("desc")
       }
     }


     const handleratingStatus =(e)=>{
        if(e.target.name === "0-5"  && e.target.checked === true){
          console.log("low rating")
          handleRatingSorting("asc")
        }
         else{
          handleRatingSorting("desc")
         }
       }



    return (
        <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"   as="span" flex='1' textAlign='left'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox  onChange={handlePriceStatus1}   name='Low To High'>Low To High</Checkbox>
    <Checkbox  onChange={handlePriceStatus1}   name='High To Low'>High To Low</Checkbox>
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
          Discount
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value='10%'>10%</Checkbox>
    <Checkbox value='20%'>20%</Checkbox>
    <Checkbox value='50%'>50%</Checkbox>
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Avg Customer Rating
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox onChange={handleratingStatus} name="0-5" >Low To High</Checkbox>
    <Checkbox onChange={handleratingStatus} name="5-0"  >High To Low</Checkbox>
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Preference
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Cruelty-Free</Checkbox>
    <Checkbox value=''>Paraben Free</Checkbox>
    <Checkbox value=''>Vegan</Checkbox>
    <Checkbox value=''>Dermatologically Tested</Checkbox>
    <Checkbox value=''>Vitamin E</Checkbox>
    <Checkbox value=''>Natural</Checkbox>
    <Checkbox value=''>Sulphate Free</Checkbox>
    <Checkbox value=''>Oil-Free</Checkbox>
    <Checkbox value=''>Herbal</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Blush</Checkbox>
    <Checkbox value=''>Foundation</Checkbox>
    <Checkbox value=''>Highlighters</Checkbox>
    <Checkbox value=''>Concealer</Checkbox>
    <Checkbox value=''>Face Primer</Checkbox>
    <Checkbox value=''>Compact</Checkbox>
    <Checkbox value=''>Makeup Remover</Checkbox>
    <Checkbox value=''>Bronzer</Checkbox>
    <Checkbox value=''>Contour</Checkbox>
    <Checkbox value=''>Sindoor</Checkbox>
    <Checkbox value=''>Tinted Moisturizer</Checkbox>
    <Checkbox value=''>BB & CC Cream</Checkbox>
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
          Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Concern
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Dark Spots/Pigmentation</Checkbox>
    <Checkbox value=''>Acne & Blemishes</Checkbox>
    <Checkbox value=''>Pores/Blackheads/Whiteheads</Checkbox>
    <Checkbox value=''>Dryness</Checkbox>
    <Checkbox value=''>Brightening</Checkbox>
    <Checkbox value=''>Oil Control</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>Sun Protection</Checkbox>
    <Checkbox value=''>Dryness</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Nude</Checkbox>
    <Checkbox value=''>Blue</Checkbox>
    <Checkbox value=''>Pink</Checkbox>
    <Checkbox value=''>Swiss</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Green</Checkbox>
    <Checkbox value=''>Red</Checkbox>
    <Checkbox value=''>Pink</Checkbox>
    <Checkbox value=''>Gold</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Skin Type
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Formulation
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Pressed Powder</Checkbox>
    <Checkbox value=''>Liquid</Checkbox>
    <Checkbox value=''>Cream</Checkbox>
    <Checkbox value=''>Stick</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Female</Checkbox>
    <Checkbox value=''>Unisex</Checkbox>
    <Checkbox value=''>Male</Checkbox>
    
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Coverage
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Pack Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        SPF
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Finish
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Skin Tone
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box fontSize="20px" fontWeight="600"  as="span" flex='1' textAlign='left'>
        Concern
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='pink' >
  <Stack spacing={[1, 5]} >
    <Checkbox value=''>Miss Claire</Checkbox>
    <Checkbox value=''>Makeup Revolution</Checkbox>
    <Checkbox value=''>Nykaa Cosmetics</Checkbox>
    <Checkbox value=''>Swiss Beauty</Checkbox>
    <Checkbox value=''>MyGlamm</Checkbox>
    <Checkbox value=''>Lakme</Checkbox>
    <Checkbox value=''>Kay Beauty</Checkbox>
    <Checkbox value=''>SUGAR</Checkbox>
    <Checkbox value=''>Maybelline New York</Checkbox>
    
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>


</Accordion>
    )
}

export default SideBar;