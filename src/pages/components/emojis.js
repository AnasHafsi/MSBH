import React from "react";
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from '../../utils/emoji-data.json'

const Emojis = (props) => (
    <EmojiProvider data={emojiData}>
      <Emoji name={props.value} width={props.size}/>
    </EmojiProvider>
);
export default Emojis;
