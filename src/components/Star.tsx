import React from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"
import { Box, Link, Typography } from "@mui/material";

const Star = ({ stars }: { stars: number }) => {
    const ratingStar = Array.from({ length: 5 }, (v, i) => {
        let number = i + 0.5; // 0.5,1.5,2.5...
        return (<>
            <Box component="span" m="{1}" key={i}>{stars >= i + 1 ? <FaStar className="icons" /> : stars >= number ? <FaStarHalfAlt  className="icons"/> : <AiOutlineStar className="icons"/>}</Box>
        </>)
    });
    return(<Box key={stars}>{ratingStar}</Box>)
}

export default Star