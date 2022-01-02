import React from 'react'
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/system';

type TAside = {
    isAuthorized: boolean;
    authorize: () => void
}

const useStyles = makeStyles((theme:Theme)=>({
    aside: {
        width: "40%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column'
    },
    circle: {
        borderRadius: "50%",
        backgroundColor: 'rgba(179, 188, 208, 0.4)',
        width: "96px",
        height: "96px",
    },
    hintSection: {
        width: "75%",
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        textAlign: 'center'
    },
    h2: {
        marginTop: "32px",
        marginBottom: "16px",
        fontSize: "20px",
        fontWeight: "bold"
    },
    p: {

        marginTop: 0,
        fontSize: "16px",
        display: 'inline-block'
    },
    span: {
        display: 'inline-block',
    },
    blueText: {
        color: "rgba(31, 109, 201, 1)",
        display: 'inline-block',
        marginTop: "40px",
        all: 'unset',
        cursor: 'pointer',
    },

}))


export default function Aside({isAuthorized, authorize}: TAside) {
    const styles = useStyles()
    return (
        <aside className={styles.aside}>
            <div className={styles.circle}/>
            <section className={styles.hintSection}>

                <h2 className={styles.h2}>{isAuthorized ? "hint" : "Connect your wallet"}</h2>

                {isAuthorized ?
                    <p className={styles.p}>
                        You can choose any token on the list, if there is some missing you can try adding it by the
                        <strong> contract address</strong>.</p>
                    :
                    <p className={styles.p}>                            <span
                        className={styles.span}>To start using the app, your wallet needs to be connected :)</span>
                        <button onClick={authorize} className={styles.blueText}>
                            Connect wallet
                        </button>
                    </p>
                }
        </section>
</aside>
)
}
