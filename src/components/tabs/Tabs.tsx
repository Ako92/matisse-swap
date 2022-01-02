import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab, {tabClasses} from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

interface TabProps {
    children: React.ReactNode;
    tabChangeCallback: (index: number) => void;
    current_tab: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        display: 'block',
        margin: '0 auto',
        fontSize: "20px",
        width: "60vw",
        position: "relative",
        [theme.breakpoints.down('md')]: {
            width: "100vw",
            fontSize: "18px"
        },
    },
    tabs: {
        position:'relative'
    },
    tab: {
        [`&.${tabClasses.selected}`]: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            border: "0",
        },
        backgroundColor: 'rgba(179, 188, 208, 0.2)',
        color: theme.palette.primary.main,
        width: "50%",

    },
    children: {
        backgroundColor: "#FFF"
    }

}));


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsComponent({children, tabChangeCallback, current_tab}: TabProps) {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        tabChangeCallback(newValue)
    };
    const styles = useStyles()
    return (
        <Box className={styles.box}>
                <Tabs className={styles.tabs} value={current_tab} onChange={handleChange} aria-label="main tab">
                    <Tab className={styles.tab} label="Swap" {...a11yProps(0)} />
                    <Tab className={styles.tab} label="Pool" {...a11yProps(1)} />
                </Tabs>

            <div className={styles.children}>
                {children}
            </div>
        </Box>
    );
}
