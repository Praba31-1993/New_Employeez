import Image from 'next/image';
import * as React from 'react';
import Button from '@mui/material/Button';
export default function Outlinebutton({ text,color,border,fontSize,background }: any) {
    return (
        <Button variant="outlined"  sx={{color:{color}, border:{border},fontFamily:"Inter, sans-serif",fontSize:{fontSize},textTransform:"unset" ,backgroundColor:{background}}}>{text}</Button>
    );
}