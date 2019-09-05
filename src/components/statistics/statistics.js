import React, { Component } from 'react';
import { Indicators, Card, Container } from './item';

export class Statistics extends Component {
  render() {
    return (
      <Container>
        <Indicators title='70 days' value='Funding ends (?)' />
        <Indicators title='15.01%' value='Current discount' />
        <Card title='600 000' value='ATOMs left' />
        <Indicators title='12 TCYB' value='Won' />
        <Indicators title='0.01 ETH/GCYB' value='Current price' />
      </Container>
    );
  }
}
