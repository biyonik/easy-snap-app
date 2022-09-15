import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
    uri: 'http://127.0.0.1:4000/graphql',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);


