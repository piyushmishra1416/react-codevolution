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
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

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
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      <ErrorBoundary>
      <Hero heroName ="Batman" ></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Superman" ></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Joker" ></Hero></ErrorBoundary>

      </>
      
   
  );
}

export default App;
