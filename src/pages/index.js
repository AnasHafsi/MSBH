import * as React from "react";
import Header from "./header";
import "../styles/app.scss";
import Banner from "./banner";
import Navigation from "./navigation";
import Projects from "./projects";
import Resume from "./resume";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Banner></Banner>
            <Navigation></Navigation>
            <Projects></Projects>
            <Resume></Resume>
        </div>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
