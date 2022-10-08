import * as React from "react";
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
        <div className="app">
            <React.StrictMode>
                <Header></Header>
                <Banner></Banner>
                <Navigation></Navigation>
                <Projects></Projects>
                <Resume></Resume>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
            </React.StrictMode>
        </div>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
