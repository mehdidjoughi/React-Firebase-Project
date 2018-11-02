import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware , compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'
import { reduxFirestore , getFirestore } from 'redux-firestore'
import fireConfig from './config/fireConfig'
 
const store = createStore(rootReducer , 

    compose(

    applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore } )),
    reactReduxFirebase(fireConfig ,  { userProfile : 'users' , useFirestoreForProfile : true ,  attachAuthIsReady : true}),
    reduxFirestore(fireConfig ,)
    
    )
    
)

store.firebaseAuthIsReady.then( ()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
})

