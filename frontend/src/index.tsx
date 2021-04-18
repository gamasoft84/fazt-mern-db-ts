import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DealerForm from './components/dealers/DealerForm';
import DealerList from './components/dealers/DealerList';
import Navbar from './components/Navbar/Navbar';
import {ToastContainer} from 'react-toastify'

import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Navbar/>
     <div className="container p-4">
      <Switch>
          <Route path="/" component={DealerList} exact/>
          <Route path="/new-dealer" component={DealerForm}/>
          <Route path="/update/:id" component={DealerForm}/>
        </Switch>
        <ToastContainer/>
     </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
