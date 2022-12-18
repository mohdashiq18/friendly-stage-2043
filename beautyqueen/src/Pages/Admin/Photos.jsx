import { Box, Button, Divider, Flex, Image, Input, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Photos = () => {
  return (
    <Box textAlign={"center"}>
      <Text>Add Products</Text>
      <Box>
        <SimpleGrid columns={[1,2,2,2]} spacing={10}>
          <Input variant='outline' placeholder='name'/>
          <Input variant='outline' placeholder='category'/>
          <Input variant='outline' placeholder='description'/>
          <Input variant='outline' placeholder='sell price'/>
          <Input variant='outline' placeholder='original prize'/>
          <Input variant='outline' placeholder='image'/>
          <Input variant='outline' placeholder='Quantity'/>

        </SimpleGrid>
        <Box margin={"auto"}>
        <Button colorScheme='pink' >Add</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Photos