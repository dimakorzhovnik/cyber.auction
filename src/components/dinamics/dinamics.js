import React, { Component } from 'react';
import Plotly from 'react-plotly.js';
import { x, y, z } from './list';

export class Dinamics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        x: 0,
        y: 0,
        z: 0
      },
      eye: {
        x: 0.57,
        y: 0,
        z: -5.53
      },
      up: {
        x: 0,
        y: 0,
        z: 1
      }
    };
  }

  state1 = () =>
    this.setState({
      center: {
        x: 0,
        y: 0,
        z: 0
      },
      eye: {
        x: 0.57,
        y: 0,
        z: -5.53
      },
      up: {
        x: 0,
        y: 0,
        z: 1
      }
    });

  state2 = () =>
    this.setState({
      center: {
        x: 0,
        y: 0,
        z: 0
      },
      eye: {
        x: 0,
        y: 3,
        z: 0
      },
      up: {
        x: 0,
        y: 0,
        z: -5
      }
    });

  state3 = () =>
    this.setState({
      center: {
        x: 0,
        y: 0,
        z: 0
      },
      eye: {
        x: 3,
        y: 0,
        z: 0
      },
      up: {
        x: 0,
        y: 0,
        z: -5
      }
    });

  render() {
    const { center, eye, up } = this.state;

    const data = {
      type: 'scatter3d',
      mode: 'lines',
      x,
      y,
      z,
      line: {
        width: 6,
        color: '#36d6ae'
      },
      hovertemplate:
        'TCYB allocated: %{x: .2f}%<br>' +
        'ATOMs contributed: %{y}<br>' +
        'Personal discount: %{z:.2f%}%<br>' +
        '<extra></extra>'
      //   marker: {
      //     size: 5,
      //     color: '#fff',
      //     colorscale: "#fff",
      //     // cmin: -20,
      //     // cmax: 50
      //   }
    };

    const layout = {
      paper_bgcolor: '#000',
      plot_bgcolor: '#000',
      hoverlabel: {
        bgcolor: '#000',
        font: {
          color: '#fff'
        }
      },
      scene: {
        yaxis: {
          title: {
            text: 'ATOM'
          },
          gridcolor: '#dedede',
          color: '#fff',
          tickfont: {
            color: '#36d6ae'
          },
          zerolinecolor: '#000'
        },
        xaxis: {
          title: {
            text: '%'
          },
          gridcolor: '#dedede',
          color: '#fff',
          tickfont: {
            color: '#36d6ae'
          },
          zerolinecolor: '#000'
        },
        zaxis: {
          title: {
            text: 'Discont'
          },
          gridcolor: '#dedede',
          color: '#fff',
          tickfont: {
            color: '#36d6ae'
          },
          zerolinecolor: '#000'
        },
        aspectratio: {
          x: 2,
          y: 6,
          z: 2
        },
        camera: {
          center,
          up,
          eye
        }
      },
      width: 1000,
      height: 500,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
        pad: 4
      }
    };
    const config = {
      displayModeBar: false,
      scrollZoom: false,
      responsive: true
    };
    
    const Btn = () => (
      <div className='cont-btn'>
        <button className='btn margin' onClick={this.state1}>General view</button>
        <button className='btn margin' onClick={this.state2}>ATOMs / %</button>
        <button className='btn margin' onClick={this.state3}>ATOMs / discount</button>
    </div>
    )

    return (
<div>
  <Btn />
        <Plotly data={[data]} layout={layout} config={config} />
        </div>
    );
  }
}
