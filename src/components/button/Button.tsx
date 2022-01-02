import React from 'react'
import Button, {ButtonProps} from '@mui/material/Button';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';


type TColor = 'grey' | 'dark-blue' | "blue";

interface TStyles {
    color: TColor;
    isFullWidth: boolean;
    preIcon?: string;
    postIcon?: string;
}

interface Props extends TStyles {
    isDisabled: boolean;
    text?: string;
    onClick: () => void;
}


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: (Props: TStyles) => Props.isFullWidth ? "100%" : "200px",
        color: (props: TStyles) =>
            props.color === 'grey' ? '#525F7B' : '#FFFFFF',
        backgroundColor: (props: TStyles) => {
            if (props.color === 'grey') return theme.palette.primary.main;
            if (props.color === "blue") return "rgba(31, 109, 201, 1)";
            if (props.color === "dark-blue") return theme.palette.primary.main;
        },
        display: "flex",
        height: "64px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        '&:hover': {
            backgroundColor: (props: TStyles) =>
                props.color === 'grey' ? theme.palette.secondary.main : theme.palette.primary.main,
            borderColor: 'none',
            boxShadow: 'none',
        },

    },
    span: {
        margin: "0px 16px",
        [theme.breakpoints.down('md')]: {
            margin: (props: TStyles) =>
                props.preIcon && props.postIcon ? "0 2px" : "0px 16px"

        },
    }
}));

export default function ({color, isFullWidth, preIcon, postIcon, ...props}: Props & Omit<ButtonProps, keyof Props>) {
    const classes = useStyles({color, isFullWidth, preIcon, postIcon});
    return (
        <Button className={classes.root} variant={props.variant} disabled={props.isDisabled} onClick={props.onClick}>
            {preIcon &&
            <img src={`/icons/${preIcon}.png`} alt={preIcon}/>}
            {props.text && <span className={classes.span}>
                {props.text}
            </span>}
            {postIcon && <img src={`/icons/${postIcon}.png`} alt={postIcon}/>}
        </Button>
    )
}
