import ButtonStyled from "./components/button/button";
import Heading from "./components/heading/heading";
import Select from "./components/select/select"
import Input from "./components/textfield/textfield";
import Toggle from "./components/toggle/toggle";
import Multi from "./components/multi/multi";
import Sector from "./components/sector/sector";
import Stepper from "./components/stepper/stepper";
import { useState } from "react";
import questions from "./questions.json";
import './App.css';
import { ReactComponent as Cape } from './assets/cape.svg';

function App() {
    //radioSelect value
    const [selectedValue, setSelectedValue] = useState();

    const [channels, setChannels] = useState([false, false, false]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formats, setFormats] = useState();
    const [inputs, setInputs] = useState([]);
    const [contact, setContact] = useState([])
    const [sector, setSector] = useState([])
    const [inputsFilled, setInputsFilled] = useState([false, false, true, false])
    const [emailValidated, setEmailValidated] = useState(true);
    const [highest, setHighest] = useState(0);
    const [illustration, setIllustration] = useState("unknown")

    const [email, setEmail] = useState();

    const onChangeEmail = (e) => {
        setEmail({ email: e.target.value })
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email.email || regex.test(email.email) === false) {
            setEmail({ error: "Email is not valid" })
            return (setEmailValidated(false), console.log("false"))
        }
        return (setEmailValidated(true), console.log("true"))
    }

    const question = questions.questionList[currentQuestion];

    //Submit answer
    const [answers, setAnswers] = useState([]);

    const submitAnswer = () => {
        const newAnswers = [...answers];

        if (currentQuestion === 3) {
            newAnswers[currentQuestion] = channels;
        } else if (currentQuestion === 2) {
            newAnswers[currentQuestion] = sector;
        } else if (currentQuestion === 4) {
            newAnswers[currentQuestion] = contact;
        } else if (currentQuestion === 1) {
            newAnswers[currentQuestion] = formats;
        } else if (currentQuestion === 5) {
            newAnswers[currentQuestion] = inputs;
        } else newAnswers[currentQuestion] = selectedValue;

        setAnswers(newAnswers);
        if (currentQuestion > highest) {
            setHighest(currentQuestion)
        }
        console.log(answers);

        setCurrentQuestion(currentQuestion + 1);
        if (highest > currentQuestion) {
            if (questions.questionList[currentQuestion + 1].type == 'select') {
                setIllustration(answers[currentQuestion + 1])
            } else setIllustration(questions.questionList[currentQuestion + 1].illustration)
        } else setIllustration(questions.questionList[currentQuestion + 1].illustration)

    }

    //Previous question
    const previousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)

        if (currentQuestion == 2) {
            setIllustration('paint')
        } else if (questions.questionList[currentQuestion - 1].type === 'select') {
            setIllustration(answers[currentQuestion - 1])
        } else setIllustration(questions.questionList[currentQuestion - 1].illustration)

    }

    //Select single answer
    const handleChange = (e) => {
        const newValue = e.target && e.target.value ? e.target.value : e;
        if (newValue === selectedValue) {
            setSelectedValue(null);
            setIllustration(questions.questionList[currentQuestion].illustration);
        } else {
            setSelectedValue(newValue);
            setIllustration(newValue);
        }
    };

    //Select multiple answers
    const channelCheckbox = (e) => {
        const newItem = [...channels];
        newItem[e] = channels[e] ? false : true;
        setChannels(newItem);
        console.log(channels);
    }

    //Toggle multiple answers
    const handleContact = (event) => {
        if (!contact.includes(event.target.value)) {
            setContact((contact) => [...contact, event.target.value])
        } else setContact(contact.filter(newContacts => event.target.value !== newContacts))
        console.log(contact)
    };

    // Toggle answer sectors
    const handleSector = (event) => {
        if (!sector.includes(event)) {
            setSector((sector) => [...sector, event])
            setIllustration(event);
        } else {
            setSector(sector.filter(selectedSector => event !== selectedSector))
            if (illustration == event) {
                sector.length == 1 ? setIllustration("question") : setIllustration(sector[0])
            }
        }
    };

    //Check if answer picked
    const nextQuestion = (channels, selectedValue,) => {
        switch (question.type) {
            case 'multi':
                return channels.includes(true)
            case 'input':
                return question.quantity == "multiple" ? !inputsFilled.includes(false) && emailValidated : formats
            case 'toggle':
                return contact.length > 0 ? true : false
            case 'select':
                return selectedValue == null ? false : true
            case 'sector':
                return sector.length > 0 ? true : false
        }
    }

    //Multiple inputProps
    const handleInputs = (e, index) => {
        const newItem = [...inputsFilled];

        if (question.quantity == "multiple") {
            const newInputs = [...inputs];
            newInputs[index] = e.target.value;
            if (!e.target.value == "") {
                console.log(e.target.value)
                newItem[index] = true
                setInputsFilled(newItem)
            } else if (!index == 2) {
                newItem[index] = false
                setInputsFilled(newItem)
            }

            setInputs(newInputs)
        } else setFormats(e.target.value)

    };

    //Click previous stepper
    const navigateBack = (e) => {
        if (currentQuestion > e) {
            console.log(answers[e])
            setCurrentQuestion(e)
            if (questions.questionList[e].type == 'select') {
                setIllustration(answers[e])
            } else setIllustration(questions.questionList[e].illustration)
        } else setIllustration(questions.questionList[e].illustration)
    }


    // rendering the current question
    const renderQuestion = () => {
        switch (question.type) {
            case 'select':
                return <div className={question.size == 'small' ? 'radio-grid' : ''}>
                    {question.answers.map(item => {
                        return (
                            <Select
                                key={item.key}
                                onChange={handleChange}
                                selectedValue={selectedValue}
                                answerSize={question.size}
                                givenAnswer={answers[currentQuestion]}
                                setSelected={setSelectedValue}
                                questionTitle={item.title}
                                questionDescription={item.description}
                                icon={item.icon}
                                id={item.key}
                            />
                        )
                    })
                    }</div>
            case 'input':
                return question.answers.map((item, index) => {
                    return (
                        <Input
                            title={item.label}
                            onChange={handleInputs}
                            type={item.type}
                            list={question.quantity == "multiple" ? inputs[index] : formats}
                            width={item.width}
                            id={item.key}
                            emailValidated={emailValidated}
                            onChangeEmail={onChangeEmail}
                            emailValidation={emailValidation}
                            index={index}
                        />)

                })
            case 'multi':
                return question.answers.map(item => {
                    return (
                        <Multi
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            onChange={channelCheckbox}
                            tag={item.tag}
                            id={item.id}
                            visible={channels}
                            sector={sector}
                            answerSize={item.size}
                        />
                    )
                })
            case 'sector':
                return <div className="sector-flexbox">{question.answers.map(item => {
                    return (
                        <Sector
                            title={item.title}
                            icon={item.icon}
                            onChange={handleSector}
                            value={item.key}
                            sector={sector}
                        />
                    )
                })}</div>
            case 'toggle':
                const toggleQuestions = answers[3]
                if (toggleQuestions[1]) { // socials selected
                    if (toggleQuestions[0] || toggleQuestions[2]) { // display or video selected
                        return <>
                            <Toggle
                                onClick={handleContact}
                                contact={contact}
                                label={"Social channels"}
                                list={question.socialAnswers}
                            />
                            <Toggle
                                onClick={handleContact}
                                contact={contact}
                                label={"Display channels"}
                                list={question.managementAnswers}
                            />
                        </>

                    } else {
                        return <Toggle onClick={handleContact} contact={contact} label={"Social Media Platforms"} list={question.socialAnswers} />
                    }
                } else {
                    return <Toggle onClick={handleContact} contact={contact} label={"Management platforms"} list={question.managementAnswers} />
                }


            default:
                break;
        }
    }

    return (<>
        <a href="https://www.bycape.io"><Cape style={{ position: "absolute", margin: "24" }} href="bycape.io" /></a>
        <div className="box">
            <div className="question-container">
                <Heading title={question.title} subtext={question.description} brandName={answers[1]} personInfo={answers[5]}></Heading>
                <div className="margin-question" />
                {renderQuestion()}
                <ButtonStyled
                    onClick={submitAnswer}
                    disabled={nextQuestion(channels, selectedValue, contact)}
                    previous={previousQuestion}
                    previousText={question.previous}
                    currentQuestion={currentQuestion}
                />
            </div>
            <div className="stepper-container">
                <Stepper
                    currentQuestion={question.step}
                    highest={highest}
                    navigateQuestion={navigateBack}
                    illustration={illustration}
                />
            </div>
        </div>
    </>
    );
}

export default App;