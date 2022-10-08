import React from 'react'
import Emojis from './components/emojis';

function Contact() {
    const textRow = [];
    for (let i = 1; i < numberOfRepeats()*2; i+=2) {
        textRow.push(<div className="talk" key={i}>Let's chat</div>);
        textRow.push(<div className="emojis" key={i+1}><Emojis value="speech-balloon" size="35"></Emojis></div>);
    }
    return (
        <div className="contact" id="Contact">
            <div className="text">
                {textRow}
            </div>
        </div>
    )
}

function numberOfRepeats() {
    if (typeof window !== "undefined") {
        const a = window.innerWidth;
        console.log(Math.ceil(a / 580))
        return Math.ceil(a / 580) + 1;
    } else {
        return 3;
    }

}

export default Contact