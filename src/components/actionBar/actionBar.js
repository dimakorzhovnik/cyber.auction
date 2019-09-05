import React, { Component } from 'react';


export class ActionBar extends Component {
    render(){
        return(
           <div className='container-action'>
               <div className='container-action-content'>
                   <div className='action-text'>
                        <span className='actionBar-text'>Contribute ATOMs using</span>
                        <select>
                            <option>Any cosmos wallet</option>
                            <option>Ledger</option>
                        </select>
                    </div>
                    <button className='btn'>Fuck Google</button>
               </div>
           </div>
        );
    }
}

