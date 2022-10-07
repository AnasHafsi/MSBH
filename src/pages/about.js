import React from 'react';
import Emoji from "./components/emoji";

const elements = [
  {
    id: 1,
    subtitle: "Meeting",
    emoji: <Emoji
      symbol="🤙🏼"
      label="Call Me Hand Medium Light Skin Tone"
      alt="Call Me Hand Medium Light Skin Tone"
    />,
    description: "Understanding your needs and your project through an initial videoconference, by researching I try to recognize the problem and learn as mush as I can."
  },
  {
    id: 2,
    subtitle: "Developing",
    emoji: <Emoji
      symbol="🤌🏼"
      useFont="false"
      label="Pinched Fingers Medium Light Skin Tone"
      alt="Pinched Fingers Medium Light Skin Tone"
    />,
    description: "Developing few design directions and from there on designing and prototyping an initial concept."
  },
  {
    id: 3,
    subtitle: "Integrating",
    emoji: <Emoji
      symbol="🤟🏼"
      label="Love You Gesture Medium Light Skin Tone"
      alt="Love You Gesture Medium Light Skin Tone"
    />,
    description: "Working closely with developers to insure the best design integration, and making sure to have the best possible solutions."
  },
]
function About() {
  return (
    <div className="about">
      <div className="texts">
        <div className="title">
          <span>About</span>
        </div>
        <div className="content">
          {elements.map((item) => (
            <div className="element" key={item.id}>
              <div className="subtitle">{item.subtitle} {item.emoji}</div>
              <div className="description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About