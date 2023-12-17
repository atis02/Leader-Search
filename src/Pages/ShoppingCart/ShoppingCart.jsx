import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Stack, Typography, Divider } from "@mui/material";
import Image from "mui-image";
import { addCart, decCart, delCart } from "../../Components/Redux/action/Action";
import FormCart from "./FormCart";
import { useLocation, Navigate } from 'react-router-dom'

export default function ShoppingCard() {
    let location = useLocation();


    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleDel = (item) => {
        dispatch(delCart(item));
    };
    const handleAdd = (item) => {
        dispatch(addCart(item));
    };
    const handleDec = (item) => {
        dispatch(decCart(item));
    };
    const emptyShoppingCart = () => {

        return <Typography textAlign='center' mt='100px' fontSize='35PX' >Your cart is Empty</Typography>;
    };

    const initialVal = 0
    const totalPrice = state.reduce((accumulate, current) => accumulate + Math.round(current.price) * current.quantity, initialVal);
    const cartProducts = (product) => {

        const PriceItem = Math.round(product.price * product.quantity)
        return (
            <>

                <Container>

                    <Stack
                        direction={{ lg: 'row', sm: 'row', xs: 'column' }}
                        alignItems="center"
                        gap={{ lg: "30px", sm: "20px", xs: "10px" }}
                        m="40px 0 40px 0 "
                        key={product.id}
                        justifyContent='space-between'
                    >
                        <Stack>
                            <Image src={product.image} alt="" width="200px" maxHeight="100%" />
                        </Stack>
                        <Stack textAlign='center' width='300px'>
                            <Typography fontSize={{ lg: '25px', sm: '20px', xs: '15px' }} fontWeight="bolder">
                                {product.title}
                            </Typography>
                            {/* <Stack ml='10px' direction="row" alignItems="center" gap="10px" fontSize={{ lg: '25px', sm: '20px', xs: '15px' }}>
                                {product.quantity} X {product.price} TMT ={" "}
                                <Typography fontSize={{ lg: '25px', sm: '20px', xs: '15px' }} color="#5959b3" fontWeight="bold">
                                    {Math.round(product.quantity * product.price)} TMT
                                </Typography>
                            </Stack> */}
                        </Stack>
                        <Stack direction="row" >
                            <Button onClick={() => handleAdd(product)}
                                sx={{
                                    minWidth: '45px',
                                    height: '45px',
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    "&:hover": { backgroundColor: "#296DC1", color: "#fff" },
                                    borderRadius: '0px',
                                    border: '1px solid #A8AFBB'

                                }}
                            >
                                +
                            </Button>
                            <Stack direction='row' justifyContent='center' alignItems='center' border='1px solid #A8AFBB' width='80px' >


                                <Typography >{product.quantity}</Typography>
                            </Stack>

                            <Button
                                onClick={() => handleDec(product)}
                                sx={{
                                    backgroundColor: "#fff",
                                    minWidth: '45px',
                                    height: '45px',
                                    color: "#000",
                                    "&:hover": { backgroundColor: "#296DC1", color: "#fff" },
                                    borderRadius: '0px',
                                    border: '1px solid #A8AFBB'
                                }}
                            >
                                -
                            </Button>
                        </Stack>
                        <Typography fontSize={{ lg: '25px', sm: '20px', xs: '15px' }} color="#000" fontWeight="bold">
                            {PriceItem} ₽
                        </Typography>
                        <Button onClick={() => handleDel(product)}
                            sx={{
                                minWidth: '45px',
                                height: '45px',
                                backgroundColor: "#fff",
                                color: "#000",
                                "&:hover": { backgroundColor: "#296DC1", color: "#fff" },
                                borderRadius: '0px',
                                border: '1px solid #A8AFBB',
                                gap: '10px'
                            }}
                        >
                            X
                            <Typography sx={{ display: { lg: 'none', sm: 'none', xs: 'block' }, "&:hover": { backgroundColor: "#296DC1", color: "#fff" }, }}>
                                Удалить
                            </Typography>
                        </Button>

                    </Stack>

                </Container>
            </>
        );
    };

    return (
        <Box mb="30px">
            <Typography textAlign="center" fontSize={{ lg: '35px', sm: '30px', xs: '25px' }}>
                Shopping card
            </Typography>
            <Stack>
                {state.length === 0 && emptyShoppingCart() ? <Navigate to="/" state={{ from: location }} replace /> : ''}
                {state.length !== 0 && state.map(cartProducts)}
            </Stack>
            <Container mb='30px'>
                {state.length > 0 ?
                    (
                        <><Divider sx={{ border: "1px solid black", mb: '30px' }} />
                            <Typography fontSize={{ lg: '35px', sm: '30px', xs: '25px' }} color="#000" fontWeight="700" textAlign={{ lg: 'right', sm: 'right', xs: 'center' }}>
                                Сумма: {totalPrice}₽
                            </Typography>
                            <FormCart />
                        </>) : ''}

            </Container>
        </Box>
    );
}
