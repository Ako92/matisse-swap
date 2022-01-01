import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent, selectClasses} from '@mui/material/Select';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';
import {FormControl, InputLabel} from '@mui/material';

interface IDropDown {
    onChange: (value: string) => void;
    id: string;
    currentSelected: string;
    items: { name: string, icon: string, index: string }[]
}


const useStyles = makeStyles((theme: Theme) => ({
    container:{
        height: "64px",
        minWidth: "261px",
    },
    select: {
        borderColor: theme.palette.primary.main,
        height: "64px",
        width: "261px",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 0,
        [`&.${selectClasses.disabled}`]: {
            backgroundColor: theme.palette.primary.main
        },
        '& #name': {
            display: "flex",
            alignItems: "center",
            '& img': {
                paddingRight: "16px",
                paddingLeft: "24px",
            }
        },
    },
    icon: {
        display: "flex",
        alignItems: "center",
        paddingRight: "16px",
        paddingLeft: "24px",
    },
    inputLabel:{
        fontSize:"20px",
    }
}));


export default function DropDown({items, onChange, id, currentSelected}: IDropDown) {
    const styles = useStyles()

    const handleChange = (event: SelectChangeEvent) => {
        const {
            target: {value},
        } = event;
        onChange(value.toString());
    };
    return (
        <FormControl className={styles.container}>
            <InputLabel className={styles.inputLabel} id="Select-item" htmlFor={id} shrink={false}>{currentSelected === '' && 'Select'}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={currentSelected}
                onChange={handleChange}
                className={styles.select}
            >
                {items.map((item) => (
                    <MenuItem
                        key={item.name}
                        value={item.index}
                    >
                        <img className={styles.icon} src={`/icons/${item.icon}.png`} alt={item.icon}/>

                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
