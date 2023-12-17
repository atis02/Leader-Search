import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Header() {
    const state1 = useSelector((state) => state.handleCart);

    return (
        <>
            <Box mt='30px'>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Box

                        alt="Logo"
                    >

                        <Image alt='logo' src='/public/images/Logo.jpg' sx={{
                            width: {
                                lg: '215px',
                                md: '115px',
                                xs: '60px',
                            }
                        }} />
                    </Box>
                    <Link to='/shopping-cart' className='cart'>
                        <Stack className='cart-title' direction='row' alignItems='center' spacing={1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width='28' height='23' viewBox="0 0 28 23" className='cart2'>
                                <path d="M21.8699 7.07692L20.4234 2.00808C20.2588 1.43436 19.8798 0.925163 19.3465 0.561352C18.8132 0.197541 18.1562 -3.38738e-05 17.4798 4.3561e-09H10.5202C9.84385 -3.38738e-05 9.18684 0.197541 8.65353 0.561352C8.12022 0.925163 7.74118 1.43436 7.57659 2.00808L6.13006 7.07692H0L3.97543 20.9919C4.14002 21.5656 4.51906 22.0748 5.05237 22.4386C5.58568 22.8025 6.24269 23 6.91908 23H21.0809C21.7573 23 22.4143 22.8025 22.9476 22.4386C23.4809 22.0748 23.86 21.5656 24.0246 20.9919L28 7.07692H21.8699ZM12.9884 15.9231V21.2308H10.7934L9.65029 15.9231H12.9884ZM9.27601 14.1538L8.13295 8.84615H12.9884V14.1538H9.27601ZM15.0116 15.9231H18.3497L17.2066 21.2308H15.0116V15.9231ZM15.0116 14.1538V8.84615H19.8671L18.724 14.1538H15.0116ZM21.9205 8.84615H25.4104L23.8931 14.1538H20.7775L21.9205 8.84615ZM9.53902 2.44154C9.5944 2.24526 9.72499 2.0715 9.90904 1.94917C10.0931 1.82685 10.3195 1.76334 10.5506 1.76923H17.5101C17.7412 1.76334 17.9676 1.82685 18.1517 1.94917C18.3357 2.0715 18.4663 2.24526 18.5217 2.44154L19.7861 7.07692H8.21387L9.53902 2.44154ZM6.07948 8.84615L7.22254 14.1538H4.10694L2.5896 8.84615H6.07948ZM5.90751 20.5585L4.61272 15.9231H7.6474L8.78035 21.2308H6.91908C6.688 21.2367 6.46159 21.1732 6.27754 21.0508C6.09349 20.9285 5.9629 20.7547 5.90751 20.5585ZM22.0318 20.5585C21.9789 20.7459 21.8574 20.9131 21.6857 21.0345C21.514 21.1559 21.3016 21.2248 21.0809 21.2308H19.2702L20.4032 15.9231H23.4379L22.0318 20.5585Z" />
                            </svg>
                            <Stack sx={{ display: { lg: 'block', xs: 'none' } }}>
                                Kорзина
                            </Stack>
                            {state1.length > 0 ?
                                <Typography ml={1} borderRadius="100%" width='25px' height='25px' textAlign='center' color='#fff' backgroundColor='#00A82D' >{state1.length}</Typography>
                                : ''}
                        </Stack>
                    </Link>
                </Stack >
            </Box >
        </>
    )
}
