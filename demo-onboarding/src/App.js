import ButtonStyled from "./components/button/button";
import Heading from "./components/heading/heading";
import RadioSelect from "./components/radioselect/radioSelect"
import TextFieldStyled from "./components/textfield/textfield";
import { useState } from "react";

import './App.css';

function App() {
    
    //radioSelect
    const [selectedValue, setSelectedValue] = useState()

    const handleChange = (e) => {
        if (e.target.value === selectedValue) {
            setSelectedValue(null)
        } else (
            setSelectedValue(e.target.value)
        )
        console.log(e.target.value)
    };




    return ( <div>
                <Heading title="Hier komt de hoofdvraag te staan" subtext="Hier komt een stuk text wat context geeft bij de vraag die hierboven is gesteld"></Heading>
                {/* <TextFieldStyled/> */}
                {/* <RadioSelect
                    onChange={handleChange}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    questionTitle={"Unieke titel van een vraag"}
                    questionDescription={"Unieke beschrijving bij de vraag"}
                /> */}
                <ButtonStyled />
            </div>
    );
}

export default App;