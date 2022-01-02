import React from 'react'
import DropDown from '../drop-down/DropDown';
import TextInput from '../text-input/TextInput';
import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material/styles';

type TInputSection = {
    valuesCallback: (values:object) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    firstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& div:first-child': {
            margin: '0 10px'
        }
    },
}))

const coins = [
    {name: "ETH", icon: "Eth-mainnet", index: "0"},
    {
        name: "Avax",
        icon: "Avalanche",
        index: "1"
    },
    {
        name: "Matic",
        icon: "polygon-matic", index: "2"
    }]
export default function InputSection(props: TInputSection) {
    const [selectedItem, setSelectedItem] = React.useState("")
    const styles = useStyles()
    return (
        <section className={styles.firstSection}>
            <DropDown onChange={(item) => {
                setSelectedItem(item)
            }} id={"name"} currentSelected={selectedItem}
                      items={coins}/>
            <TextInput topLabel={"topLabel"} bottomLabel={"bottomLabel"}
                       topRightLabel={"toopRightLabel"}
                       isDisabled={false}
                       innerInputButton={{action: () => console.log("clicked"), text: "MAX"}}
                       id="something" defaultValue={"default"} helperText={"help me"}
                       hasError={false}
                       onChange={(value) => {
                           console.log("value", value)
                       }}/>
        </section>
    )
}
