import React from 'react';
import FriendsList from './FriendsList'
import AddFriend from './AddFriend'

var FriendsContainer = React.createClass({
    getInitialState: function () {
        alert('get initial state!');
        return {
            name: "Patrick Anderson",
            friends: ["Kristen Stewart", "Michael Bobb", "Ross Moss", "Anna Banana"]
        }
    },
    // Invoked once before first render
     componentWillMount: function(){
         // Calling setState here does not cause a re-render
         alert('In Component Will Mount');
     },
         // Invoked once after the first render
    componentDidMount: function(){
        // You now have access to this.getDOMNode()
        alert('In Component Did Mount');
    },
    // Invoked whenever there is a prop change
    // Called BEFORE render
    componentWillReceiveProps: function(nextProps){
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an additional re-render
        alert('In Component Will Receive Props');
    },
    // Called IMMEDIATELY before a component is unmounted
    componentWillUnmount: function(){},
    addFriend: function (friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        })
    },
    render: function () {
        alert('RENDERING');
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <FriendsList names={this.state.friends} />
            </div>
        );
    }
});

export default FriendsContainer;
