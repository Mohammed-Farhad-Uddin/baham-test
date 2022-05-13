import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const COLOR = 'teal';


const LoginForm = () => {
    const [show, setShow] = useState(false);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const isValid = login.email === "" || login.password === "";

    const handelLogIn = (e) => {
        e.preventDefault();
        alert("Submitted")
        // console.log(login);
        axios.post('https://jsonplaceholder.typicode.com/posts', login)
            .then((response) => { console.log(response) })
            .catch((err) => { console.log(err) })
    };


    const handleBlur = (e) => {
        let valid;

        if (e.target.name === "email") {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            valid = emailRegex.test(String(e.target.value).toLowerCase())
            if (!valid) {
                alert("correct the input");
            }
        }
        if (e.target.name === "password") {
            valid = e.target.value.length > 5 && /\d{1}/.test(e.target.value)
            if (!valid) {
                alert("correct the input");
            }
        }
        if (valid) {
            let user = { ...login }
            user[e.target.name] = e.target.value
            setLogin(user);
        }
    };


    return (

        <>
            <Link to="/customerForm"> <Button align="center" variantColor={COLOR} width='full' mb={4} >Switch to Customer Form</Button> </Link>

            <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
                <Box
                    borderWidth={1}
                    px={4}
                    width='full'
                    maxWidth='500px'
                    borderRadius={4}
                    textAlign='center'
                    boxShadow='lg'
                >
                    <Box p={4}>
                        <Box textAlign='center'>
                            <Heading>Login</Heading>
                        </Box>
                        <Box my={8} textAlign='left'>
                            <form onSubmit={handelLogIn}>

                                <FormControl>
                                    <FormLabel>Email Address</FormLabel>
                                    <Input name="email" type='email' placeholder='Enter your email address' onBlur={handleBlur} required />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input name="password" type={show ? "text" : 'password'} onFocus={() => setShow(!show)} placeholder='Enter your password' onBlur={handleBlur} required />
                                </FormControl>

                                <Stack isInline justifyContent='space-between' mt={4}>
                                    <Box>
                                        <Checkbox required>Remember Me</Checkbox>
                                    </Box>
                                    <Box>
                                        <Link color={`${COLOR}.500`}>Forgot your password?</Link>
                                    </Box>
                                </Stack>
                                <Button type="submit" variantColor={COLOR} width='full' mt={4} disabled={isValid ? true : false} >Sign In</Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default LoginForm;