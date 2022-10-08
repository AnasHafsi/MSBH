import React from 'react'
import Emoji from './components/emoji'

function Chat() {
    const textRow = [];
    const emojiRow = [];
    for (let i = 1; i < numberOfRepeats(); i++) {
        textRow.push(<div className="talk" key={i}>Let's chat</div>);
        textRow.push(<div className="emojis" key={i}><Emoji symbol="💬"></Emoji></div>);
    }
    return (
        <div className="chat">
            <div className="text">
                {textRow}{emojiRow}
            </div>
        </div>
    )
}

function numberOfRepeats() {
    const a = window.innerWidth;
    console.log(Math.ceil(a / 580))
    return Math.ceil(a / 580) + 1;
}

export default Chat