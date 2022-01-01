import React from 'react'
import Button, {ButtonProps} from '@mui/material/Button';
import {makeStyles} from '@mui/styles';


type TColor = 'grey' | 'blue';

interface TStyles {
    color: TColor;
    isFullWidth: boolean;
}

interface Props extends TStyles {
    isDisabled: boolean;
    text?: string;
    preIcon?: string;
    postIcon?: string;

}


const useStyles = makeStyles({
    root: {
        width: (Props: TStyles) => Props.isFullWidth ? "100%" : "200px",
        color: (props: TStyles) =>
            props.color === 'grey' ? '#525F7B' : '#FFFFFF',
        backgroundColor: (props: TStyles) =>
            props.color === 'grey' ? '#B3BCD0' : '#1F6DC9',
        display: "flex",
        height: "64px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        '&:hover': {
            backgroundColor: (props: TStyles) =>
                props.color === 'grey' ? '#B3BCD0' : '#1F6DC9',
            borderColor: 'none',
            boxShadow: 'none',
        },

    },
    span: {
        margin: "0px 16px"
    }
});

export default function ({color, isFullWidth, ...props}: Props & Omit<ButtonProps, keyof Props>) {
    const classes = useStyles({color, isFullWidth});
    return (
        <Button className={classes.root} variant={props.variant} disabled={props.isDisabled}>
            {props.preIcon &&
            <img src={`/icons/${props.preIcon}.png`} alt={props.preIcon}/>}
            {props.text && <span className={classes.span}>
                {props.text}
            </span>}
            {props.postIcon && <img src={`/icons/${props.postIcon}.png`} alt={props.postIcon}/>}
        </Button>
    )
}
