import React from 'react';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import {Button} from '@mui/material';

interface TabProps {
    topLabel: string;
    bottomLabel: string | undefined;
    hasError: boolean;
    onChange: (value: string) => void;
    id: string;
    isDisabled: boolean;
    innerInputButton: {
        text: string;
        action: () => void;
    };
    topRightLabel: string | undefined;
    hasInnerButton: boolean;
    value: string;
}

type TStyles = {
    isDisabled: boolean;
    hasInnerButton: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {},
    input: {

        paddingLeft: (Props: TStyles) => Props.hasInnerButton ? "24px" : "10px",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: (Props: TStyles) => Props.hasInnerButton ? "5px" : "10px",
        },
        margin: "8px 0px",
    },
    topLabelsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    label: {
        display: 'flex',
        alignSelf: "flex-start ",
        fontSize: "14px"
    },
    topRightLabel: {
        alignSelf: "flex-end ",
        fontSize: "14px"
    },
    inputContainer: {
        border: `1px solid ${theme.palette.primary.main}`,
        height: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        margin: "8px 0"
    },
    innerInput: {
        backgroundColor: 'rgba(31, 109, 201, 0.2)',
        borderRadius: 0,
        height: '40px',
        margin: "20px",
        [theme.breakpoints.down('sm')]: {
            margin: "0px",
        },
        boxShadow: 'none',

        '&:hover': {
            backgroundColor: 'rgba(31, 109, 201, 0.2)',
            borderColor: 'none',
            boxShadow: 'none',
        },
    },
}));


export default function TextInput({
                                      topLabel,
                                      bottomLabel,
                                      hasError,
                                      onChange,
                                      id,
                                      isDisabled,
                                      innerInputButton,
                                      topRightLabel,
                                      hasInnerButton,
                                      value
                                  }: TabProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event?.target?.value)
    };
    const styles = useStyles({hasInnerButton, isDisabled})
    return (
        <div className={styles.wrapper}>
            <div className={styles.topLabelsContainer}>
                {topLabel && <InputLabel className={styles.label} htmlFor={id}>
                    {topLabel}
                </InputLabel>
                }
                {topRightLabel && <InputLabel className={styles.topRightLabel}>
                    {topRightLabel}
                </InputLabel>
                }
            </div>
            <div className={styles.inputContainer}>
                <InputBase
                    onChange={handleChange}
                    className={styles.input}
                    error={hasError}
                    id={id}
                    disabled={isDisabled}
                    value={value}
                />
                {hasInnerButton &&
                <Button className={styles.innerInput} variant="contained" onClick={innerInputButton.action}>
                    {innerInputButton.text}
                </Button>
                }
            </div>
            {bottomLabel && <InputLabel className={styles.label} htmlFor={id}>
                {bottomLabel}
            </InputLabel>
            }
        </div>
    );
}
