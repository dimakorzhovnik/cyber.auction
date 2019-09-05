import React, { Component } from 'react';
import Plotly from 'react-plotly.js';
import { x, y, z } from './list';

export class Dinamics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activebtn: 'general',
      data: {
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
      },
      center: {
        x: 0,
        y: 0,
        z: 0
      },
      eye: {
        x: 1,
        y: 0,
        z: -5
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
      activebtn: 'general',
      data: {
        type: 'scatter3d',
        mode: 'lines',
        x,
        y,
        z,
        line: {
          width: 4,
          color: '#36d6ae'
        },
        hovertemplate:
          'TCYB allocated: %{x: .2f}%<br>' +
          'ATOMs contributed: %{y}<br>' +
          'Personal discount: %{z:.2f%}%<br>' +
          '<extra></extra>'
      }
    });

  state2 = () =>
    this.setState({
      activebtn: 'share',
      data: {
        type: 'scatter',
        mode: 'lines+points',
        x,
        y: z,
        line: {
          width: 4,
          color: '#36d6ae'
        },
        hovertemplate:
          'TCYB allocated: %{x: .2f}%' + '<br>Personal discount: %{y: .2f%}%'+
          '<extra></extra>'
      }
    });

  state3 = () =>
    this.setState({
      activebtn: 'discount',
      data: {
        type: 'scatter',
        x: y,
        y: z,
        line: {
          width: 6,
          color: '#36d6ae'
        },
        hovertemplate:
          'ATOMs contributed: %{x}<br>' +
          'Personal discount: %{y:.2f%}%<br>'+
          '<extra></extra>'
      }
    });

  render() {
    const { center, eye, up, activebtn, data } = this.state;

    // const data = {
    //   type: 'scatter',
    //   mode: 'lines',
    //   // x,
    //   y,
    //   z,
    //   line: {
    //     width: 6,
    //     color: '#36d6ae'
    //   },
    //   hovertemplate:
    //     'TCYB allocated: %{x: .2f}%<br>' +
    //     'ATOMs contributed: %{y}<br>' +
    //     'Personal discount: %{z:.2f%}%<br>' +
    //     '<extra></extra>'
    //   //   marker: {
    //   //     size: 5,
    //   //     color: '#fff',
    //   //     colorscale: "#fff",
    //   //     // cmin: -20,
    //   //     // cmax: 50
    //   //   }
    // };

    const layout = {
      paper_bgcolor: '#000',
      plot_bgcolor: '#000',
      hoverlabel: {
        bgcolor: '#000',
        font: {
          color: '#fff'
        }
      },
      yaxis: {
        title: {
          text: 'ATOM'
        },
        gridcolor: '#000',
        color: '#fff',
        zerolinecolor: '#dedede'
      },
      xaxis: {
        autotick: false,
        title: {
          text: '%'
        },
        gridcolor: '#000',
        color: '#fff',
        tickfont: {
          color: '#36d6ae'
        },
        zerolinecolor: '#dedede'
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
      width: 850,
      height: 400,
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
      // responsive: true
    };

    const Btn = () => (
      <div className="cont-btn">
        <button
          className={`btn-view margin ${
            activebtn === 'general' ? 'activebtn' : ''
          }`}
          onClick={this.state1}
        >
          General
        </button>
        <button
          className={`btn-view margin ${
            activebtn === 'share' ? 'activebtn' : ''
          }`}
          onClick={this.state2}
        >
          Share
        </button>
        <button
          className={`btn-view margin ${
            activebtn === 'discount' ? 'activebtn' : ''
          }`}
          onClick={this.state3}
        >
          Discount
        </button>
      </div>
    );

    return (
      <div className="container-dinamics">
        <Plotly data={[data]} layout={layout} config={config} />
        <Btn />
      </div>
    );
  }
}
