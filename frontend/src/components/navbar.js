import { Text, Flex, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {

    const nav = useNavigate();

    const handleNavigate = (route) => {
        nav(`/${route}`)
    }


    return(
        <Flex w='100vw' h='90px' bg='blue.600' justifyContent='center' alignItems='center'>
            <HStack w='95%' justifyContent='space-between' color='white'>
                <Text fontSize='24px' fontWeight='bold'>HiWave</Text>
                <HStack>
                    <Text onClick={(route) => handleNavigate('tharushidharmarathna')}><IoPersonOutline size='22px' /></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar