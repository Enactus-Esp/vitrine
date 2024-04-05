import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Activity from "./pages/Activity.jsx";
import './App.css'
import {PostOnActivity} from "./pages/PostOnActivity.jsx";
import {Header} from "./components/share/Header.jsx";
import {Footer} from "./components/share/Footer.jsx";
import {MenNen} from "./pages/Men-nen.jsx";
import {Dimbali} from "./pages/Dimbali.jsx";
import {Shery} from "./pages/Shery.jsx";
import {Aquatus} from "./pages/aquatus.jsx";
import {Terrasen} from "./pages/terrasen.jsx";
import {Home} from "./pages/Home.jsx";

function App() {

    return (<>

        <BrowserRouter>

            <Header />

            <Routes>

                {/**/}
                <Route path={`/`} exact element={ <Home /> } />

                {/**/}
                <Route path={`/activity`} exact element={ <Activity /> } />

                {/**/}
                <Route path={`/activity/:`} exact element={ <PostOnActivity /> } />

                {/**/}
                <Route path={`/mennen`} exact element={ <MenNen /> } />

                {/**/}
                <Route path={`/dimbali`} exact element={ <Dimbali /> } />

                {/**/}
                <Route path={`/shery`} exact element={ <Shery /> } />

                {/**/}
                <Route path={`/terrasen`} exact element={ <Terrasen /> } />

                {/**/}
                <Route path={`/aquatus`} exact element={ <Aquatus /> } />

            </Routes>

            <Footer />

        </BrowserRouter>

    </>)
}

export default App
