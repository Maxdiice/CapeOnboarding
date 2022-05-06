
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import React, { useState } from "react";
import "./stepperStyle.css"
import GetSVG from '../../util/util';
import SvgIcon from '@mui/material/SvgIcon';


function Stepper(props) {

    const checkStatus = (e) => {
        if (props.currentQuestion > e) {
                if (props.currentQuestion == e + 0.5) {
                return " current-step"
                }
            return " completed-step"
        } else if (props.currentQuestion == e) {
            return " current-step"
        } else return " "
    }

    return <>
        <div style={{ positon: 'relative',transform: 'rotate(30deg)' , width: 350, height: 350 }}>
            <CircularProgressbarWithChildren circleRatio={0.6666} maxValue={240} value={props.currentQuestion * 60} styles={{path: {stroke: '#ED39D3'}, trailColor: '#EBEBEB', trail: {stroke:'#EBEBEB', strokeWidth:'1.5', dashArray: '20'}}} strokeWidth={2}  counterClockwise={true}>
                <div style={{ transform: 'rotate(-30deg)'}} className={"stepper-background"}>
                    <SvgIcon component={GetSVG(props.illustration)} style={{width: "190px", height: "190px"}} inheritViewBox />
                    <div className="stepper-placement" style={{ transform: 'rotate(30deg)', width:350, height: 350}}>
                        <div className={"offset-step " + checkStatus(0)} onClick={() => props.navigateQuestion(0)} />
                    </div>
                    <span className="stepper-placement" style={{ transform: 'rotate(-30deg)', width:350, height: 350}}>
                        <div className={"offset-step" + checkStatus(1)} onClick={() => props.navigateQuestion(1)}/>
                    </span>
                    <div className="stepper-placement" style={{ transform: 'rotate(-90deg)', width:350, height: 350}}>
                        <div className={"offset-step" + checkStatus(2)} onClick={() => props.navigateQuestion(3)}/>
                    </div>
                    <span className="stepper-placement" style={{ transform: 'rotate(-150deg)', width:350, height: 350}}>
                        <div className={"offset-step" + checkStatus(3)} onClick={() => props.navigateQuestion(5)}/>
                    </span>
                    <span className="stepper-placement" style={{ transform: 'rotate(-210deg)', width:350, height: 350}}>
                        <div className={"offset-step" + checkStatus(4)}/>
                    </span>
                </div>
            </ CircularProgressbarWithChildren>
        </div>
</>
}
export default Stepper;