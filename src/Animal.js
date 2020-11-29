import React, {Component} from 'react';
import './Animals.css';
//import './Count/Counter.css';

class Animal extends Component {

    constructor(){
        super();
    
    this.state = {
        value : ["cat", "dog" ],
        colors : ['white','black'],

    

       // run = () => 'running',
       //eat = () => 'eating',
    };
    }
    
    render() {
        return(
            

            <div>
                {this.state.value.map((animal,key) => {
                    return(
                        <div key={key}>
                            {`${this.state.colors[key]} ${animal}`}
                
                     </div>
                    );
                    })}

                </div>
        );
        
      }
    }

export default Animal;