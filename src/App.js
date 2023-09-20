
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress= (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="blue"
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"general"}
                  pageSize={12}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="general"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"general"}
                  pageSize={12}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="sports"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"sports"}
                  pageSize={12}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="business"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"business"}
                  pageSize={12}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="entertainment"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"entertainment"}
                  pageSize={12}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="health"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"health"}
                  pageSize={12}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="science"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"science"}
                  pageSize={12}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="technology"
              element={
                <NewsComponent
                  setProgress={this.setProgress} key={"techonology"}
                  pageSize={12}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
