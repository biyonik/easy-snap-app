import './App.css';
import HeaderComponent from "../Header/header.component";
import routes from "../../Routes/routes";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <div className="container">
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        {
                            routes && routes.map(({id, path, element}) => (
                                <Route key={id} path={path} element={element}/>
                            ))
                        }
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
