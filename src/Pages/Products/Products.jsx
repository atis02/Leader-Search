import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Divider,
    Stack,
    Typography, useMediaQuery
} from "@mui/material";
import Image from "mui-image";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles/";



export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [age, setAge] = useState("");
    const [error, setError] = useState(false)

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));



    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const BaseUrl = `https://simpleapistore.vercel.app/api/products`;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get(BaseUrl).then((response) => {
                setData(response.data);
                setFilter(response.data);
                setLoading(false);
                console.log(response.data);
            })
                .catch(error => {
                    return setError(error.message);
                })
        };
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const Updatedlist = data.filter((x) => x.category === cat);
        setFilter(Updatedlist);
    };

    return (
        <>
            <Box mb={5}>
                <Stack direction="row" justifyContent="flex-end" mb={3}>
                    <Box sx={{ width: "120px" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Category"
                                onChange={handleChange}
                            >
                                <MenuItem onClick={() => setFilter(data)} value="All">
                                    All
                                </MenuItem>
                                <MenuItem
                                    onClick={() => filterProduct("keyboard")}
                                    value="keyboard"
                                >
                                    keyboard
                                </MenuItem>
                                <MenuItem onClick={() => filterProduct("mouse")} value="mouse">
                                    mouse
                                </MenuItem>
                                <MenuItem
                                    onClick={() => filterProduct("monitor")}
                                    value="monitor"
                                >
                                    monitor
                                </MenuItem>
                                <MenuItem
                                    onClick={() => filterProduct("webcam")}
                                    value="webcam"
                                >
                                    webcam
                                </MenuItem>
                                <MenuItem
                                    onClick={() => filterProduct("microphone")}
                                    value="microphone"
                                >
                                    microphone
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                {error ? (<Typography textAlign='center' variant='h3' mt={10}>{error}</Typography>) :
                    loading ? (
                        <Stack alignItems='center' sx={{ gap: '10px' }}><CircularProgress />Loading...</Stack>
                    ) : (
                        <Box
                            sx={{ display: "flex", gap: "10px" }}
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {filter?.map((item, index) => {
                                if (item.image != undefined) {
                                    return (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-evenly"
                                            flexDirection="column"
                                            flexWrap="wrap"
                                            width="250px"
                                            height="250px"
                                            border="1px solid black"
                                            sx={{ ...isLargeScreen ? { '.link-btn': { display: 'block' } } : { '&:hover .link-btn': { display: 'block' } } }}

                                        >
                                            <Stack
                                                alignItems="center"
                                                direction="row"
                                                flexDirection="column"
                                            >
                                                <Image
                                                    src={item.image}
                                                    width="70px"
                                                    maxHeight="100%"
                                                    alt=""
                                                />
                                            </Stack>
                                            <Stack>
                                                <Typography textAlign="center" fontSize="14px">
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    textAlign="center"
                                                    fontSize="14px"
                                                    fontWeight="bold"
                                                >
                                                    {item.price} ₽
                                                </Typography>
                                            </Stack>
                                            <NavLink className="link" to={`/products/${item.id}`}>
                                                <Button
                                                    sx={{
                                                        width: "200px",
                                                        height: "50px",
                                                        backgroundColor: "blue",
                                                        color: "white",
                                                        display: 'none',
                                                        "&:hover": { backgroundColor: "black !important" },
                                                        alignItems: "center",
                                                        m: "10px 0 10px 0",
                                                        justifyContent: "center",
                                                    }}
                                                    className='link-btn'
                                                >
                                                    Подробно...
                                                </Button>
                                            </NavLink>
                                        </Stack>
                                    );
                                }
                            })}
                        </Box>
                    )}
            </Box >
            <Divider sx={{ border: "1px solid black", mb: '30px' }} />

        </>
    );
}
