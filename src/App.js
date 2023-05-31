import './App.css';
import React, { Component } from "react";
import Usergreetings from './components/usergreetings';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <>
      {/* <Usergreetings /> */}
      {/* <NameList />
      <Form />
      <LifecycleA/> */}
      {/* <FragmentDemo /> 
      <Table /> */}
      <ParentComp/>
      </>
      
   
  );
}

export default App;
