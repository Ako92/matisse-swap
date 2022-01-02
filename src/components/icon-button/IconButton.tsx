import React from 'react'
import Button, {ButtonProps} from '@mui/material/Button';
import {makeStyles} from '@mui/styles';


type Props = {
    icon: string;
    onClick: () => void;
    isSmall?: boolean;
}
type TStyles = {
    isSmall: boolean
}

const useStyles = makeStyles({
    root: {
        color: '#FFFFFF',
        boxShadow: 'none',
        backgroundColor: 'rgba(31, 109, 201, 0.2)',
        display: "flex",
        height: "64px",
        width: "64px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        padding: (props: TStyles) => props.isSmall ? "1px" : "20px",
        '&:hover': {
            backgroundColor: 'rgba(31, 109, 201, 0.2)',
            borderColor: 'none',
            boxShadow: 'none',
        },
    },
});

export default function (props: Props & Omit<ButtonProps, keyof Props>) {
    const classes = useStyles({isSmall: !!props.isSmall});
    return (
        <Button className={classes.root} variant='contained' onClick={props.onClick}>
            <img src={`/icons/${props.icon}.png`} alt={props.icon}/>
        </Button>
    )
}
