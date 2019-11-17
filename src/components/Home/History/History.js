import React, { Component } from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Record from "./Record"

// components

class History extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const startTime = new Date(0, 0, 0, 10, 25, 0);
    const endTime = new Date(0, 0, 0, 11, 0, 0);

    return (
      <div className="history">
        <div style={{ borderStyle: "none none solid none", borderWidth: "1px" }}>
          <h2 style={{ padding: "10px 10px" }}> History </h2>
        </div>

        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '331px',
          overflow: 'scroll',
          marginBottom: '100px',
        }}>

          <Element>
            <Record desc="Studying Computer Systems" startTime={startTime} endTime={endTime} />
          </Element>

          <Element>
            <Record desc="Pooping" startTime={startTime} endTime={endTime} />
          </Element>
        </Element>
      </div>
    );
  }
}

export default History