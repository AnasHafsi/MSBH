import * as React from "react";
import Header from "./header";
import "../styles/app.scss";
import Banner from "./banner";
import Navigation from "./navigation";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Banner></Banner>
            <Navigation></Navigation>
        </div>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
