import React, { useState } from 'react';
import {
  Box, TextField, Typography, Stack, Button, FormControl, styled, Modal
} from '@mui/material';
import * as yup from 'yup';
import "yup-phone-lite";
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

export default function FormCart() {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { lg: 400, sm: 300, xs: 200 },
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const userSchema = yup.object().shape({
    name: yup.string().required('Please type name'),
    email: yup.string().email('Please type valid email').required('Please type email'),
    phone: yup.string().phone('RU', 'Please enter a valid phone number').required('required phone number'),

  })
  const onSubmit = async (values, actions) => {
    sendEmail()
    console.log(values);
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    validationSchema: userSchema,
    onSubmit,
  });

  const randomOrderNumb = Math.floor((Math.random() * 100000) + 1)
  const sendEmail = () => {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: "guwancikramow@gmail.com",
      Password: '0DF91DA7C6CC917CE2207F5207E5EF658519',
      To: `${values.email}`,
      From: 'guwancikramow@gmail.com',
      Subject: `Тестовое задание, заказ N${randomOrderNumb}`,
      Body: `${values.name}, заказ N ${randomOrderNumb} сформирован. В ближайшее время наш специалист свяжется с вами по телефону ${values.phone}.`,
    }).then(
      message => alert(message),
    );
  }
  const handleClose = () => setOpen(false);







  return (
    <>
      <Typography fontSize={{ lg: '30px', sm: '25px', xs: '20px' }} textAlign={{ lg: 'left', sm: 'left', xs: 'center' }} mt='20px' fontWeight='600'>Форма</Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          '& > :not(style)': {
            m: 1, width: '100%'
          },
        }
        }
      >
        <Stack direction='column'
          alignItems='center'
          justifyContent='center' width='100%' spacing={{ lg: 4, sm: 3, xs: 1 }} backgroundColor='#F2F5F9' p='50px 0 50px 0'>
          <TextField

            label="Имя"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.name && Boolean(errors.name)
            }
            helperText={touched.name && errors.name}
            type="text"
            sx={{
              backgroundColor: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              color: '#000',
              width: { lg: '500px', sm: '300px', xs: '200px' },
            }}
          />
          <TextField
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            label='Phone'
            type='number'
            id='phone'
            placeholder='+7'
            error={
              touched.phone && Boolean(errors.phone)
            }
            helperText={touched.phone && errors.phone}
            sx={{
              backgroundColor: '#fff',
              border: 'none',
              fontSize: '16px',
              fontWeight: '500',
              color: '#000',
              width: { lg: '500px', sm: '300px', xs: '200px' },

            }}
            variant="outlined"
          />
          <TextField
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.email && Boolean(errors.email)
            }
            helperText={touched.email && errors.email}
            label='E-mail'
            id='email'
            type='e-mail'
            placeholder="@gmail.com"
            InputProps={{
              sx: {
                backgroundColor: '#fff',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000',
                width: { lg: '500px', sm: '300px', xs: '200px' },

              }
            }}
            variant="outlined"
          />
          <Button
            onClick={touched.name ? handleOpen : undefined}
            type='submit'
            disabled={
              touched.phone && Boolean(errors.phone) && Boolean(values.phone == '') ||
              touched.name && Boolean(errors.name) && Boolean(values.name == '') ||
              touched.email && Boolean(errors.email) && Boolean(values.email == '')
            }
            sx={{
              backgroundColor: '#296DC1', color: '#fff', '&:hover': { backgroundColor: 'black', color: '#fff' }, width: { lg: '500px', sm: '300px', xs: '200px' }, height: '55px'
            }}>
            оформить заказ
          </Button>

          <Modal
            open={open}
            onClose={handleClose}

            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Спасибо {values.name}, ваш заказ №{randomOrderNumb} оформлен.
              </Typography>
              <Typography id="modal-modal-description" fontSize={{ lg: '20px', sm: '17px', xs: '15px' }} fontWeight='600' sx={{ mt: 2, mb: 2 }}>
                В ближайшее время мы свяжемся с вами по телефону +{values.phone} для его подтверждения.
              </Typography>
              <Stack direction='row' alignItems='center' justifyContent='center'
              >

                <NavLink to='/'>
                  <Button sx={{
                    backgroundColor: '#296DC1', color: '#fff', '&:hover': { backgroundColor: '#fff', color: '#000' }
                  }}  >
                    ok
                  </Button>
                </NavLink>
              </Stack>
            </Box>
          </Modal>
        </Stack>

      </form >

    </>
  )
}
