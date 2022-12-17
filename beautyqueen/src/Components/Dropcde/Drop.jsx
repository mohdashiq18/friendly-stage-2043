import { Box, Button, Grid, Menu, MenuButton, MenuItem, MenuList,Image } from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Drop.css"

const Drop = () => {
  const{isOpen ,onOpen,onClose}=useDisclosure() 
  return (

    <Grid templateColumns='repeat(8, 1fr)' gap={6} textAlign={"center"}  w="100%"  bg="#DD0285" h={"60px"}>
    <Menu isOpen={isOpen} >
  <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} className='btn' color={"white"} bg="#DD0285" as={Button} rightIcon={<ChevronDownIcon />}>
    MAKEUP
  </MenuButton>
  <MenuList className='list'>
    <MenuItem>
    
    <ul className="ul"> 
    <h1>Face</h1>
        <li><a href="#">BB Creams</a></li>
        <li><a href="#">Blush</a></li>
        <li><a href="#">Bronzer</a></li>
        <li><a href="#">CC Cream</a></li>
        <li><a href="#">Contour</a></li>
        <li><a href="#">Concleaner</a></li>
        <li><a href="#">Compact & Powder</a></li>
        <li><a href="#">Face Primer</a></li>
        <li><a href="#">Foundation</a></li>
        <li><a href="#"></a>Highlighter</li>
        <li><a href="#"></a>Loose Powder</li>
        <li><a href="#"></a>Makeup Kits</li>
        <li><a href="#"></a>Makeup Remover</li>
    </ul>
    
    
    </MenuItem>
    
    <MenuItem>
    <ul className="ul"> 
    <h1>EYE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem> <ul className="ul"> 
    <h1>LIPS</h1>
        
        <li><a href="#">Eenhases</a></li>
        <li><a href="#">Palettes</a></li>
        <li><a href="#">False </a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem>
    <ul className="ul"> 
    <h1>NAILS</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem>
    <ul className="ul"> 
    <h1>TOOL BRUSHES</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    
  </MenuList>
</Menu>
<Menu >
  <MenuButton color={"white"} bg="#DD0285" as={Button} className='btn' rightIcon={<ChevronDownIcon />}>
    SKIN
  </MenuButton>
  <MenuList className='list2'>
    <MenuItem>
    <ul className="ul"> 
    <h1>EYE CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem><ul className="ul"> 
    <h1>FACE CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem>
    <ul className='ul' >
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem><Image h={"250px"} w={"250px"} src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"/></MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color={"white"} bg="#DD0285" as={Button}  className='btn' rightIcon={<ChevronDownIcon />}>
    HAIR
  </MenuButton>
  <MenuList className='list3'>
    <MenuItem><ul className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem>
    <ul className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem>
    <Image w={"250px"} h={"250px"} src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg" />
    </MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color={"white"} bg="#DD0285" as={Button}  className='btn' rightIcon={<ChevronDownIcon />}>
  PERSONAL CARE
  </MenuButton>
  <MenuList className='list2'>
    <MenuItem>
    <ul className='ul' >
    <h1>EYE CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem><ul className='ul' >
    <h1>FACE CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem>
    <ul  className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul></MenuItem>
    <MenuItem><Image h={"250px"} w={"250px"} src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"/></MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton color={"white"} bg="#DD0285" as={Button} className='btn' rightIcon={<ChevronDownIcon />}>
  MOM & BABYCARE
  </MenuButton>
  <MenuList className='list3'>
    <MenuItem>
    <ul  className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem>
    <ul className='ul' >
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem>
    <Image w={"250px"} h={"250px"} src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg" />
    </MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton color={"white"} bg="#DD0285" as={Button} className='btn' rightIcon={<ChevronDownIcon />}>
    FRAGRANCE
  </MenuButton>
  <MenuList>
    <MenuItem>Perfumes</MenuItem>
    <MenuItem>Deodrants</MenuItem>
    <MenuItem>Body Spray</MenuItem>
 
  </MenuList>
</Menu>
<Menu>
  <MenuButton color={"white"} bg="#DD0285" as={Button} className='btn' rightIcon={<ChevronDownIcon />}>
    AYURVEDA
  </MenuButton>
  <MenuList className='list3'>
    <MenuItem><ul className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    <MenuItem>
    <ul className='ul'>
    <h1>BODY CARE</h1>
        <li><a href="#">Contact Lenses</a></li>
        <li><a href="#">Eye kit</a></li>
        <li><a href="#">Eye shadow</a></li>
        <li><a href="#">Eye liner</a></li>
        <li><a href="#">Eye primer</a></li>
        <li><a href="#">Eyebrow enhases</a></li>
        <li><a href="#">Eye Palettes</a></li>
        <li><a href="#">False Eyelashes</a></li>
        <li><a href="#">Kajal</a></li>
        <li><a href="#"></a>Mascara</li>
        <li><a href="#"></a>Under Eye Conclear</li>
      
       
    </ul>
    </MenuItem>
    
  </MenuList>
</Menu>

    </Grid>
  )
}

export default Drop