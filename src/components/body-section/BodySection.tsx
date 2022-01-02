import * as React from 'react';
import {makeStyles} from '@mui/styles';

type THeader = {
    isAuthorized: boolean
}
const useStyles = makeStyles({
    body: {
        width: "60vw",
        height: "70vh",
        display: 'flex',
        margin: '0 auto',
        boxShadow: `0px 0px 25px rgba(0, 0, 0, 0.25)`,
    }
})
const BodySection: React.FunctionComponent<THeader> = (props) => {

    const styles = useStyles()
    return (
        <section className={styles.body}>
            {props.children}
        </section>
    );
};

export default BodySection;
