import React, { useReducer, useEffect } from "react";

import { Container, Col, Row } from "reactstrap";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ViewContact from "./pages/ViewContact";
import PageNotFound from "./pages/PageNotFound";


const initialState = {
  contacts: [],
  contact: {},
  contactToUpdate: null,
  contactToUpdateKey: null,
  isLoading: false
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // will get contacts from firebase and set it on state contacts array
  const getContacts = async () => {
    // TODO: load existing data
  };

  // getting contact  when component did mount
  useEffect(() => {
    //FIXME: call methods if needed
  }, []);

  return (
    <Router>
      {/* FIXME: Provider is not configured */}
      <ContactContext.Provider>
        <ToastContainer />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/view" component={ViewContact} />
            <Route exact path="/" component={Contacts} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Container>

        <Footer />
      </ContactContext.Provider>
    </Router>
  );
};

export default App;
