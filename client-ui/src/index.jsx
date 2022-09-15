import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AuthContextProvider from "./Contexts/auth.context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App/>
    </AuthContextProvider>
);


