import * as React from "react";
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from '../utils/emoji-data.json';
import Header from "./header";
import "../styles/app.scss";
import Banner from "./banner";
import Navigation from "./navigation";
import Projects from "./projects";
import Resume from "./resume";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

function App() {
    return (
        <EmojiProvider data={emojiData}>
            <div className="app">
                <Header></Header>
                <Banner></Banner>
                <Navigation></Navigation>
                <Projects></Projects>
                <Resume></Resume>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </EmojiProvider>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
