import React from 'react';

var AddFriend = React.createClass({
    getInitialState: function(){
        return {
            newFriend: ''
        }
    },
    propTypes: {
        addNew: React.PropTypes.func.isRequired
    },
    updateNewFriend: function (e) {
        this.setState({
            newFriend: e.target.value
        });
    },
    handleAddNew: function () {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    },
    render: function () {
        return (
            <div>
                <input
                    type = "text"
                    value = { this.state.newFriend }
                    onChange = { this.updateNewFriend } />
                <button style = {{width: '50px', height: '20px'}} onClick = { this.handleAddNew }>Add </button>
            </div>
        );
    }
});

export default AddFriend;
