import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../nav";
import "./index.css"

class MainLayout extends React.Component {
    constructor(){
        super()
        this.state = {
            menu: [
              {
                text : 'Главная страница',
                link : '/'
              },
              {
                text: 'Товары',
                link: '/products'
              }
            ]
          }
    }
    render() {
        return (
            <div className="wrapper">
                <header><Nav menu={this.state.menu}/></header>
                <main><Outlet /></main>
            </div>
        )
    }
}

export default MainLayout;