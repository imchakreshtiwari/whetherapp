import React, { Component } from 'react';
class Form extends Component {
    state = {  }
    render() { 
        return (
          <form onSubmit={this.props.loadWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Whether</button>
          </form>
        );
    }
}
 
export default Form;