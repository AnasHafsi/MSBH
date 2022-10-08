import * as React from "react";
import Header from "./header";
import "../styles/app.scss";
import Banner from "./banner";
import Navigation from "./navigation";
import Projects from "./projects";
import Resume from "./resume";
import About from "./about";
import Chat from "./chat";
import Footer from "./footer";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Banner></Banner>
            <Navigation></Navigation>
            <Projects></Projects>
            <Resume></Resume>
            <About></About>
            <Chat></Chat>
            <Footer></Footer>
        </div>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
