import * as React from "react";
import Header from "./header";
import "../styles/App.scss";
import Banner from "./banner";

function App() {
    return (
        <div className="app">
            <Header></Header>
            <Banner></Banner>
        </div>
    );
}
export default App;
export const Head = () => <title>MSBH</title>;
