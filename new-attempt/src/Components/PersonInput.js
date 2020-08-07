import React from 'react';
import axios from 'axios';
import PersonInput from './components/PersonInput'

export default class PersonInput extends React.Component {
    state = {
        id: []
    };

handleChange = event => {this.setState({id: event.target.value})};
};


    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }}
    
    axios.post('https://jsonplaceholder.typicode.com/users', );
    }

    const user = {
        name: this.state.name,
    };
axious.delete('https://jsonplaceholder.typicode.com/users${this.state.id',{user}.then(res => {console.log(res); console.log(res.data)});
 )

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Person ID</label>
                <input type="text" name="name" onChange={this.handleChange}/>
                <button type="submit"> add</button>
                </form>
        )
        


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {console.log(res); this.setState({ persons: res.data});
        });
      }
    }


}