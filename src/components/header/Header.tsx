import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';
import Button from '../button/Button';
import IconButton from '../icon-button/IconButton';

type THeader = {
    isAuthorized: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100vw",


    },
    background: {
        backgroundImage: 'url("/BG.svg")',
        height: "100vh",
        width: "100vw",
        maxHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        opacity: ".3",
        position: 'absolute',
        justifyContent: 'center'
    },
    logo: {
        margin: "40px 48px",
        [theme.breakpoints.down('md')]: {
            margin: "30px 16px"
        },
        justifySelf: 'center'
    },
    wallet: {
        margin: "24px 48px",
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "300px",
        [theme.breakpoints.down('md')]: {
            margin: "0 16px",

        },
        "& button:first-child": {
            margin: "0 20px",
            [theme.breakpoints.down('md')]: {

                height: "48px",
            },
        },
        "& button:nth-child(2)": {
            [theme.breakpoints.down('md')]: {
                minWidth: "48px",
                maxWidth: "48px",
                width: "48px",
                height: "48px",
            },

            width: "18px",
            height: "18px",
            minWidth: "18px",
            maxWidth: "18px",
            '& img':{
                width: "17px",
                height: "17px",

            }
        }
    },
    btn: {
        display: 'flex',
        flexDirection: "row",

    }
}))
const Header = (props: THeader) => {

    const styles = useStyles()
    return (
        <header className={styles.header}>
            <div className={styles.background}/>
            <img className={styles.logo} src={"/matisse.png"} height={32} alt={"logo"}/>
            <div className={styles.wallet}>
                {props.isAuthorized ?
                    <>
                        <Button isFullWidth={true} isDisabled={false}
                                onClick={() => console.log("something")}
                                text={"text"}
                                color={"grey"}/>
                        <IconButton isSmall={true} onClick={() => {
                            console.log("Power BTN Clicked")
                        }} icon="Power"/>
                    </>
                    :
                    <Button isFullWidth={false} isDisabled={false}
                            onClick={() => console.log("something")}
                            text={"Connect wallet"}
                            color={"blue"}/>
                }
            </div>
        </header>
    );
};

export default Header;
