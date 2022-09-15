import './App.css';
import HeaderComponent from "../Header/header.component";
import routes from "../../Routes/routes";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ApolloClient, {InMemoryCache} from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// https://stackoverflow.com/questions/56232820/how-to-update-apolloclient-authorization-header-after-successful-login

const getToken = () => {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
};

const client = new ApolloClient({
    uri: 'http://127.0.0.1:4000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        credentials: 'include'
    },
    request: (operation) => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: getToken()
            }
        })
    }
})

function App() {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
