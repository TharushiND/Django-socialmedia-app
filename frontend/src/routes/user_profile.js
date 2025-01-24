import { Box, Flex,Heading,HStack,Text,Image, VStack, Button } from "@chakra-ui/react"

const UserProfile = () => {
    return (
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%'>
                <Box w='100%' mt='40px'>
                    <UserDetails />
                </Box>
            </VStack>
        </Flex>
    )
}

const UserDetails = () => {
    return(
        <VStack w='100%' alignItems='start' gap ='40px'>
            <Heading>@tharushidharmarathna</Heading>
            <HStack gap='30px'>
                <Box boxSize='150px' border='2px solid' borderColor='gray.700' bg='white' borderRadius='full' overflow='hidden'>
                    <Image src = 'http://127.0.0.1:8000/api/media/profile_image/tharushi.jpg' boxSize='100%' objectFit='cover' />
                </Box>
                <VStack gap='20px'>
                    <HStack gap='20px' fontSize='18px'>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>0</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>0</Text>
                        </VStack>
                    </HStack>
                    <Button w='100%'>Edit Profile</Button>
                </VStack>
            </HStack>
            <Text>Hi I'm Tharushi</Text>
        </VStack>
    )
}

export default UserProfile