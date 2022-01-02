import * as React from 'react';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/system';

type THeader = {
    isAuthorized: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
    body: {
        width: "60vw",
        height: "70vh",
        display: 'flex',
        position:'sticky',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            width: "100vw",
            height: "100%",
            flexDirection:'column'
        },
        margin: '0 auto',
        boxShadow: `0px 0px 25px rgba(0, 0, 0, 0.25)`,
    }
}))
const BodySection: React.FunctionComponent<THeader> = (props) => {

    const styles = useStyles()
    return (
        <section className={styles.body}>
            {props.children}
        </section>
    );
};

export default BodySection;
