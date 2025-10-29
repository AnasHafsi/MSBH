import React from 'react';
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from './src/utils/emoji-data.json';

export const wrapRootElement = ({ element }) => (
    <EmojiProvider data={emojiData}>
        {element}
    </EmojiProvider>
);
