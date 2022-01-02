import React from 'react';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import {Button} from '@mui/material';

interface TabProps {
    topLabel: string;
    bottomLabel: string | undefined;
    defaultValue: string;
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

const useStyles = makeStyles((theme: Theme) => ({
    textField: {},
    input: {

        paddingInline: (Props: { hasInnerButton: boolean }) => Props.hasInnerButton ? "24px" : "0px",
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
        width: "324px",
        margin: "8px 0"
    },
    innerInput: {
        backgroundColor: 'rgba(31, 109, 201, 0.2)',
        borderRadius: 0,
        height: '40px',
        width: '70px',
        margin: "20px",
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
                                      defaultValue,
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
    const styles = useStyles({hasInnerButton})
    return (
        <div>
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
                    defaultValue={defaultValue}
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
