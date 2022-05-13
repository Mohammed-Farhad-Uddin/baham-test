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
    Button,
    Select
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const COLOR = 'teal';


const CustomerFrom = () => {
    const [district, setDistrict] = useState("")
    const [customerForm, setCustomerForm] = useState({
        name: "",
        age: "",
        address: "",
        phone: "",
    });


    const handleBlur = (e) => {
        let valid;

        if (e.target.name === "name") {
            valid = e.target.value.length > 3 && e.target.value.length < 30 && /^[A-Za-z ]+$/.test(e.target.value);
            if (!valid) {
                alert("correct the input");
            }
        }

        if (e.target.name === "age") {
            valid = Number(e.target.value) > 1 && Number(e.target.value) < 100;
            if (!valid) {
                alert("correct the input");
            }
        }

        if (e.target.name === "address") {
            valid = /^[#.0-9a-zA-Z\s,-]+$/.test(e.target.value);
            if (!valid) {
                alert("correct the input");
            }
        }

        if (e.target.name === "phone") {
            valid = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(e.target.value);
            if (!valid) {
                alert("correct the input");
            }
        }

        if (valid) {
            let customer = { ...customerForm }
            customer[e.target.name] = e.target.value;
            setCustomerForm(customer);
        }
    };

    const handleCustomerForm = (e) => {
        e.preventDefault();
        customerForm.district = district;
        alert("Submitted")
        // console.log(customerForm);
        axios.post('https://jsonplaceholder.typicode.com/posts', customerForm)
            .then((response) => { console.log(response) })
            .catch((err) => { console.log(err) })
    };

    return (
        <>
            <Link to="/loginForm">   <Button align="center" variantColor={COLOR} width='full' mb={4} >Switch to Login Form</Button> </Link>

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
                            <Heading>Customer Form</Heading>
                        </Box>
                        <Box my={8} textAlign='left'>
                            <form onSubmit={handleCustomerForm}>
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input onBlur={handleBlur} name="name" type='text' placeholder='Enter your Name' required />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Age</FormLabel>
                                    <Input onBlur={handleBlur} name="age" type='number' placeholder='Enter your Age' required />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Phone</FormLabel>
                                    <Input onBlur={handleBlur} name="phone" type='tel' placeholder='Enter your Number' required />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Address</FormLabel>
                                    <Input onBlur={handleBlur} name="address" type='text' placeholder='Enter your Address' required />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>District</FormLabel>
                                    <Select value={district} onChange={(e) => setDistrict(e.target.value)} color={COLOR} placeholder='Select District' required>
                                        <option>Dhaka</option>
                                        <option>Chittagong</option>
                                        <option>Sylhet</option>
                                        <option>Barisal</option>
                                        <option>Khulna</option>
                                        <option>Rajshahi</option>
                                        <option>Rangpur</option>
                                        <option>Mymensingh</option>
                                    </Select>
                                </FormControl>

                                <Stack isInline justifyContent='space-between' mt={4}>
                                    <Box>
                                        <Checkbox required>Click to Save</Checkbox>
                                    </Box>
                                    <Box>
                                        <Link to='/'> <p>Back</p></Link>
                                    </Box>
                                </Stack>

                                <Button type="submit" variantColor={COLOR} width='full' mt={4}>Submit</Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default CustomerFrom;