import React from 'react'
import Header from "./Header"

import { Box, Container, Stack, Typography } from '@mui/material'
import Products from '../Pages/Products/Products'

export default function Home() {
    return (
        <>
            <Container>
                <Box>
                    <Header />
                    <Stack m='30px 0 30px 0' >
                        <Typography fontSize={{ lg: '30px', sm: '25px', xs: '20px' }} lineHeight='130%' fontWeight='bold' textAlign='center'>Каталог товаров</Typography>
                    </Stack>
                </Box>
                <Products />
            </Container>
        </>
    )
}
