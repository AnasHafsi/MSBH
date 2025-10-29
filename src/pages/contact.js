import React from 'react'
import Emojis from './components/emojis';

const CONTACT_REPEAT_WIDTH = 580;

function Contact() {
    const [repeats, setRepeats] = React.useState(3);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const calculateRepeats = () => {
                setRepeats(Math.ceil(window.innerWidth / CONTACT_REPEAT_WIDTH) + 1);
            };

            calculateRepeats();
            window.addEventListener('resize', calculateRepeats);

            return () => window.removeEventListener('resize', calculateRepeats);
        }
    }, []);

    const textRow = [];
    for (let i = 1; i < repeats * 2; i += 2) {
        textRow.push(<div className="talk" key={i}>Let's chat</div>);
        textRow.push(<div className="emojis" key={i+1}><Emojis value="speech-balloon" size="35"></Emojis></div>);
    }

    return (
        <div className="contact" id="Contact">
            <div className="text">
                <div className="scroll-content">
                    {textRow}
                </div>
                <div className="scroll-content" aria-hidden="true">
                    {textRow}
                </div>
            </div>
        </div>
    )
}

export default Contact