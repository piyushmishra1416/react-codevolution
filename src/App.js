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
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

function App() {
  return (
    <>
      {/* <Usergreetings /> */}
      {/* <NameList />
      <Form />
      <LifecycleA/> */}
      {/* <FragmentDemo /> 
      <Table /> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
      </>
      
   
  );
}

export default App;
