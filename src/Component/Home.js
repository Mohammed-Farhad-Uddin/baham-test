import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Button
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
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
                            <Heading>Switch</Heading>
                        </Box>
                        <Box my={8} textAlign='left'>

                            <Link to='/loginForm'> <Button width='full' mt={4}>Login Form</Button> </Link>
                            <Link to='/customerForm'> <Button width='full' mt={4}>Customer Form</Button> </Link>
                            
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default Home;