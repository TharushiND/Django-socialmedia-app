import { Flex, VStack ,FormControl,Input,Button,FormLabel, Heading,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { login } from '../api/endpoints'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'
const Login=()=>{

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate();
    const {auth_login} =useAuth();

    const handleLogin=()=>{
      auth_login(username,password)
    }

    const handleNav=()=>{
      navigate('/register')
    }

    return(
        <Flex w='100%' h='calc(100vh-90px)' justifyContent='center' alignItems='center'>
            <VStack alignItems='start' w='95%' maxW='400PX' gap='30px'>
                <Heading>Login</Heading>
            <FormControl>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input onChange={(e)=>setUsername(e.target.value)} bg='white' type='text' /> 
            </FormControl>
            <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} bg="white" type="password" />

            </FormControl>
           
           <VStack w="100%" alignItems="start">
                       <Button onClick={handleLogin} w='100%' colorScheme='green'fontSize='10px'>Login</Button>
                       <Text onClick={handleNav}  fontSize='14px' color="gray.500">Don't have an account?sign up</Text>
             </VStack>
            </VStack>
        </Flex>
    )
}

export default Login