import React from 'react';
import { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';


class WelcomePage extends Component {

    constructor() {
        super();
        this.state = { isPlaying: true };
    }
    render() {
        // let divStyle = {color: 'red'};
        return (
      <section>
        <div  styleName="welcome">Welcome</div>
      </section>
    );
    }
}
export default CSSModules(WelcomePage, styles);
