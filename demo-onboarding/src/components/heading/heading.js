
import React, { Component } from "react";
import './headingStyle.css';

function Heading(props) {


    const brandName = props.brandName;
    const personInfo = props.personInfo;

    const checkBrandname = (sentence) => {
        if(brandName && sentence.includes("{brand}")) {
            return sentence.replace("{brand}", brandName);
        } else if(personInfo && sentence.includes("{name}")) {
            return sentence.replace("{name}", personInfo[0].split(' ').shift());
        }  else if(personInfo && sentence.includes("{Email}")) {
            return sentence.replace("{Email}", personInfo[1]);
        }else return sentence;
    }

    return<>
        <h1>{checkBrandname(props.title)}</h1>
        <p>{checkBrandname(props.subtext)}</p>
    </>
    
}

export default Heading;