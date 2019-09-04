import React, { Component } from 'react';

export class Table extends Component {
    render() {
        return (
            <div className='table'>
                <div className='table-header-rows'>
                    <div>TX id</div>
                    <div>ATOMs</div>
                    <div>GCYB estimation</div>
                    <div>Price</div>
                </div>
                <div className='table-body'>
                <div className='table-rows'>
                    <div>DA6F26DNDFJN</div>
                    <div>20</div>
                    <div>5</div>
                    <div>2</div>
                </div>
                <div className='table-rows'>
                    <div>DA6F26DNDFJN</div>
                    <div>20</div>
                    <div>5</div>
                    <div>2</div>
                </div>
                <div className='table-rows'>
                    <div>DA6F26DNDFJN</div>
                    <div>20</div>
                    <div>5</div>
                    <div>2</div>
                </div>
                <div className='table-rows'>
                    <div>DA6F26DNDFJN</div>
                    <div>20</div>
                    <div>5</div>
                    <div>2</div>
                </div>
             
                </div>
                
            </div>
        )
    }
}