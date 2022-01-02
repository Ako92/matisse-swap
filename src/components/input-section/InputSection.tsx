import React from 'react'
import DropDown from '../drop-down/DropDown';
import TextInput from '../text-input/TextInput';
import {makeStyles} from '@mui/styles';

type TInputSection = {
    valuesCallback: (element: any) => void;
    config: {
        dropdown_title: string;
        input_title: string;
        input_right_text?: string;
        footer_text?: string;
        error_text?: string;
        has_max: boolean;
    }
    values: TValues,
    isAuthorized: boolean
}
type TValues = {
    amount: string;
    coin: TCoin | undefined
}
type TCoin = {
    name: string;
    icon: string;
    index: string
}

const useStyles = makeStyles({
    firstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '& > div': {
            fontSize:"16px",
            margin: '0 10px',
            display:'inline-block',
            width:"45%"
        }
    },
})

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
export default function InputSection({config, values, valuesCallback, isAuthorized}: TInputSection) {

    const styles = useStyles()
    return (
        <section className={styles.firstSection}>
            <div>
                <DropDown onChange={(item) => {
                    valuesCallback({...values, coin: coins.find(coin => coin.index === item)})
                }} id={config.dropdown_title} currentSelected={values?.coin?.index || ""}
                          items={coins}/>
            </div>
            <div>
                <TextInput
                    topLabel={config.input_title}
                           bottomLabel={config.footer_text}
                           topRightLabel={config.input_right_text}
                           isDisabled={!isAuthorized}
                           innerInputButton={{
                               action: () => {
                                   valuesCallback({...values, amount: "1"})
                               }, text: "MAX"
                           }}
                           hasInnerButton={config.has_max}
                           id={config.input_title} defaultValue={"0.0"}
                           hasError={false}
                           value={values.amount}
                           onChange={(value) => {
                               valuesCallback({
                                   amount: value,
                                   coin: values?.coin?.index && coins.find(coin => coin.index === values?.coin?.index)
                               })
                           }}/>
            </div>
        </section>
    )
}
