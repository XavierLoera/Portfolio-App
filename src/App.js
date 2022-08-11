import {Flex, VStack, Heading, Spacer, IconButton, useColorMode} from "@chakra-ui/react"
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import Profile from "./components/Profile"
import Header from "./components/Header"
import Social from "./components/Social"

function App() {
const {colorMode, toggleColorMode} = useColorMode()
const isDark = colorMode === "dark"

  return (
   <VStack p={5}>
    <Flex w="100%">
      <Heading
      ml="8" size="md" fontWeight='semibold' color="cyan.400">Porfolio App</Heading>
    <Spacer></Spacer>
    <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => {window.open('https://www.linkedin.com/in/xavier-loera-4443441a3/')}}></IconButton>
    <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={() => {window.open('https://www.instagram.com/javiebhop/')}}></IconButton>
    <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => {window.open('https://github.com/XavierLoera')}}></IconButton>
    <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon /> } isRound="true" onClick={toggleColorMode}></IconButton>
    </Flex>
    <Header></Header>
    <Social></Social>
    <Profile></Profile>
   </VStack>
  )
}

export default App;
