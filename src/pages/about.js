import React from 'react';
import PinchedFingers from "../assets/pinchedFingers.inline.svg";
import CallMe from "../assets/callme.inline.svg";
import Gesture from "../assets/gesture.inline.svg";

const elements = [
  {
    id: 1,
    subtitle: "Meeting",
    emoji: <CallMe></CallMe>,
    description: "Understanding your needs and your project through an initial videoconference, by researching I try to recognize the problem and learn as mush as I can."
  },
  {
    id: 2,
    subtitle: "Developing",
    emoji: <PinchedFingers />,
    description: "Developing few design directions and from there on designing and prototyping an initial concept."
  },
  {
    id: 3,
    subtitle: "Integrating",
    emoji: <Gesture></Gesture>,
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