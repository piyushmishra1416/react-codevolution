import "./App.css";
import React, { Component } from "react";
import Usergreetings from "./components/usergreetings";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
// import HoverCounter from './components/HoverCounter';
import ClickCountertwo from "./components/ClickCountertwo";
import HoverCountertwo from "./components/HoverCountertwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from './components/userContext'

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
      {/* <ErrorBoundary>
      <Hero heroName ="Batman" ></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Superman" ></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Joker" ></Hero></ErrorBoundary> */}
      {/* <ClickCounter />
       <HoverCounter /> */}
      {/* <ClickCountertwo /> 
       <HoverCountertwo />
       <User render = {(isLoggedIn) => isLoggedIn ? "Vishwas" : 'Guest'} /> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCountertwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCountertwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <UserProvider value="Vishwas">
        <ComponentC />
      </UserProvider>
    </>
  );
}

export default App;
