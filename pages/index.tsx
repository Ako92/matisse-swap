import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';
import Header from '../src/components/header/Header';
import BodySection from '../src/components/body-section/BodySection';
import TabsComponent from '../src/components/tabs/Tabs';
import IconButton from '../src/components/icon-button/IconButton';
import Button from '../src/components/button/Button';
import InputSection from '../src/components/input-section/InputSection';
import Aside from '../src/components/aside/Aside';
import {Theme} from '@mui/system';


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxHeight: "100vh",
        maxWidth: "100vw",
        height: "100vh",
        width: "100vw",
        padding: 0,
        fontSize: 0,  /* parent value */
        position: 'relative',
        "& :after": {
            content: " ",
            display: 'block',
            clear: 'both',
            visibility: 'hidden',
            height: 0
        }
    },
    title: {
        margin: "48px 0",
        fontSize: "24px"
    },
    main: {
        width: "60%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        padding: "32px"
    },

    firstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& div:first-child': {
            margin: '0 10px'
        }
    },
    swapEntries: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "32px 0",
        maxHeight: "64px",
        '& button': {
            maxWidth: "64px",
        }
    },
    swapButton: {
        margin: "48px 0",
        [theme.breakpoints.down('md')]: {
            position: 'fixed',
            bottom: "-50px",
            width: '100%',
            left: 0
        },
    }
}));

const FIRST_ROW_INPUT_VALUES = {
    dropdown_title: "From",
    input_title: "Amount",
    input_right_text: "Balance 1 ETH",
    footer_text: "Max to use all your funds",
    error_text: "Minimun amount for conversion is 0.1",
    has_max: true
}
const SECOND_ROW_INPUT_VALUES = {
    dropdown_title: "To",
    input_title: "Amount",
    has_max: false
}
const INIT_VALUES = {
    amount: "0.0", coin: {
        name: "",
        icon: "",
        index: ""
    }
}
const Home: NextPage = () => {
    const styles = useStyles()
    const [tabState, setTabState] = React.useState(0)
    const [authorized, setAuthorized] = React.useState(false);
    const toggleAuthorize = () => {
        setAuthorized(!authorized)
        // this can replace with authorization methods
    }
    const [sectionFromValues, setSectionFromValues] = React.useState(INIT_VALUES)
    const [sectionToValues, setSectionToValues] = React.useState(INIT_VALUES)

    const swapEntries = () => {
        setSectionFromValues(sectionToValues);
        setSectionToValues(sectionFromValues);
    }
    const EmptySection = () => <BodySection isAuthorized={authorized}>
        <p>Empty</p>
    </BodySection>
    return (
        <Container className={styles.container}>
            <Header isAuthorized={authorized} toggleAuthorize={toggleAuthorize}/>
            <TabsComponent
                tabChangeCallback={(index) => {
                    setTabState(index)
                }}
                current_tab={tabState}>
                {tabState === 0 ?
                    <BodySection isAuthorized={authorized}>
                        <div className={styles.main}>
                            <h1 className={styles.title}>
                                Select a token to start swapping
                            </h1>
                            <InputSection isAuthorized={authorized} values={sectionFromValues}
                                          valuesCallback={setSectionFromValues}
                                          config={FIRST_ROW_INPUT_VALUES}
                            />
                            <div className={styles.swapEntries}>
                                <IconButton onClick={swapEntries} icon="SwitchAltRoundedBlue"/>
                            </div>
                            <InputSection isAuthorized={authorized} values={sectionToValues}
                                          valuesCallback={setSectionToValues}
                                          config={SECOND_ROW_INPUT_VALUES}

                            />
                            <div className={styles.swapButton}>
                                <Button isFullWidth={true} isDisabled={false}
                                        onClick={() => console.log("something")}
                                        text={"Swap"}
                                        color={"grey"}/>
                            </div>
                        </div>
                        <Aside authorize={toggleAuthorize} isAuthorized={authorized}/>
                    </BodySection>
                    : <EmptySection/>}


            </TabsComponent>

        </Container>
    );
};

export default Home;
