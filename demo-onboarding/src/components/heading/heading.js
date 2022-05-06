
import React, { Component } from "react";
import './headingStyle.css';

function Heading(props) {


    const brandName = props.brandName;

    const checkBrandname = (sentence) => {
        if(brandName && sentence.includes("{brand}")) {
            return sentence.replace("{brand}", brandName);
        } else return sentence;
    }

    return<>
        <h1>{checkBrandname(props.title)}</h1>
        <p>{checkBrandname(props.subtext)}</p>
    </>
    
}

export default Heading;