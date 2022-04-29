import ButtonStyled from "./components/button/button";
import Heading from "./components/heading/heading";
import Select from "./components/select/select"
import Input from "./components/textfield/textfield";
import Toggle from "./components/toggle/toggle";
import FormGroup from '@mui/material/FormGroup';
import Multi from "./components/multi/multi";
import { useState } from "react";
import questions from "./questions.json"
import './App.css';



function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    
    //radioSelect value
    const [selectedValue, setSelectedValue] = useState();

    //multipleSelect value
    const [channels, setChannels] = useState([false, false, false]);

    const channelCheckbox = (e) => {
         const newItem = [...channels];
        newItem[e.target.value] = channels[e.target.value]? false : true;
        setChannels(newItem);

        console.log(channels);
    }

    const question = questions.questionList[currentQuestion];

    const handleChange = (e) => {
        if (e.target.value === selectedValue) {
            setSelectedValue(null)
        } else (
            setSelectedValue(e.target.value)
        )
        console.log(e.target.value);

    };

    //Submit answer
    const showInput = () => {
        console.log(selectedValue);

        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedValue;

        setAnswers(newAnswers);
        console.log(answers);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedValue(null);
    }

    const previousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    //toggle selected values
    const [formats, setFormats] = useState();

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        console.log(newFormats);
    };

    // rendering the current question
    const renderQuestion = () => {
        switch (question.Type) {

            case 'select':
                return <div className={question.Size == 'small' ? 'radio-grid' : ''}>
                    {question.Answers.map(item => {
                        return (
                            <Select
                                onChange={handleChange}
                                selectedValue={selectedValue}
                                answerSize={question.Size}
                                questionTitle={item.Title}
                                questionDescription={item.Description}
                                icon={item.Icon}
                            />
                        )
                    })
                    }</div>

            case 'input':
                return question.Answers.map(item => {
                    return (
                        <Input title={item.Label} onChange={handleChange} type={item.type} />
                    )
                })

            case 'multi':
                return question.Answers.map(item => {
                    return (
                        <Multi 
                            title={item.Title}
                            description={item.Description}
                            icon={item.Icon}
                            onChange={channelCheckbox}
                            tag={item.tag}
                            id={item.id}
                            visible={channels}
                        />

                    )
                })

            default:
                break;
        }



        if (question.Type == 'select') {

        } else if (question.AnswerType == 'input') {

        }
    }


    return (<div>
        <Heading title={question.Title} subtext={question.Description}></Heading>
        {/* <TextFieldStyled/> */}
        <div className="margin-question" />
        {renderQuestion()}

        <Toggle formats={formats} onChange={handleFormat} />
        <ButtonStyled
            onClick={showInput}
            disabled={selectedValue}
            previous={previousQuestion}
            currentQuestion={currentQuestion}
        />
    </div>
    );
}

export default App;