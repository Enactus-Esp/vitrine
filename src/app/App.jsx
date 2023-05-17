import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Activity from "./pages/Activity.jsx";
import './App.css'
import {PostOnActivity} from "./pages/PostOnActivity.jsx";
import {Header} from "./components/share/Header.jsx";
import {Footer} from "./components/share/Footer.jsx";
import Home from './pages/Home.jsx';

function App() {

    return (<>

        <BrowserRouter>

            <Header />

            <Routes>
                {/**/}
                <Route path={`/`} exact element={ <Activity />} />

                {/**/}
                <Route path={`/:post`} exact element={ <PostOnActivity /> } />

                {/**/}
                <Route path={`*`} exact element={ <Activity /> } />

                {/**/}
                <Route path={`home`} exact element={ <Home /> } />
            </Routes>

            <Footer />

        </BrowserRouter>

    </>)
}

export default App
