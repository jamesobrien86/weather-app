import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    constructor(props){
        super(props);
    
        this.state =  {
            lat:null
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat:position.coords.latitude})
                console.log(position)
            },
            (err) => console.log(err, "failed")
        );
    }

    render(){
        return(
            <div>Lat: {this.state.lat}</div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));