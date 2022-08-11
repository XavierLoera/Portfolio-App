import React from 'react'
import {useColorMode} from '@chakra-ui/color-mode';
import {Stack, Flex, Box, Text, Button, Image, useMediaQuery} from '@chakra-ui/react'
function Header() {

  const {colorMode} = useColorMode()
  const isDark = colorMode === "dark"

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (
<Stack>
    <Flex direction={isNotSmallerScreen ? "row" : "column"}
    spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
        <Box mt={isNotSmallerScreen ? 0 : 16} align='flex-start'>
            <Text fontSize="5xl" fontWeight="semibold">Hello, I am</Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400,blue.500,purple.600)" bgClip='text'>Xavier Loera</Text>
            <Text color={isDark ? "gray.200" : "gray.500:"}>An inspiring web developer</Text>
            <Button mt={8} colorScheme="blue" onClick={() => {
            window.open('https://krunker.io/social.html?p=profile&q=JavieBhop')
        }}>Games</Button>
        </Box>
        <Image mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' 
        backGroundColor='transparent' boxShadow="lg" ml={isNotSmallerScreen ? "8" : "0"}
        boxSize="300px" src='https://avatars.githubusercontent.com/u/87840541?v=4' />
    </Flex>
</Stack>
    
  )
}

export default Header
