import React from 'react';
import Emojis from '../components/Emojis';

const elements = [
  {
    id: 1,
    subtitle: "Meeting",
    emoji: <Emojis value="call-me-hand-medium-light-skin-tone" size="27"></Emojis>,
    description: "Understanding your needs and your project through an initial videoconference, by researching I try to recognize the problem and learn as mush as I can."
  },
  {
    id: 2,
    subtitle: "Developing",
    emoji: <Emojis value="pinched-fingers-medium-light-skin-tone" size="27"></Emojis>,
    description: "Developing few design directions and from there on designing and prototyping an initial concept."
  },
  {
    id: 3,
    subtitle: "Integrating",
    emoji: <Emojis value="love-you-gesture-medium-light-skin-tone" size="27"></Emojis>,
    description: "Working closely with developers to insure the best design integration, and making sure to have the best possible solutions."
  },
]
function About() {
  return (
    <div className="about" id='About'>
      
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