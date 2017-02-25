import React from 'react';

var HelloUser = React.createClass({
    getInitialState: function () {
        return {
            username: ""
        }
    },
    handleChange: function (e) {
        console.log(e);
        this.setState({
            username: e.target.value
        })
    },
    render: function () {
        return (<div> <label htmlFor="hello"> Hello {this.state.username} </label> <br />
                <input id="hello" type="text" value={this.state.username} onChange={this.handleChange}/></div> );
    }
});

export default HelloUser;
