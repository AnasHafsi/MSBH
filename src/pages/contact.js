import React from 'react'
import Chat from '../assets/chat.inline.svg'

function Contact() {
    const textRow = [];
    for (let i = 1; i < numberOfRepeats(); i++) {
        textRow.push(<div className="talk" key={i}>Let's chat</div>);
        textRow.push(<div className="emojis" key={i}><Chat></Chat></div>);
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