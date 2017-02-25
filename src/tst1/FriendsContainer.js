import React from 'react';
import FriendsList from './FriendsList'

var FriendsContainer = React.createClass({
    getInitialState: function () {
        return {
            name: "Patrick Anderson",
            friends: ["Kristen Stewart", "Michael Bobb", "Ross Moss", "Anna Banana"]
        }
    },

    render: function () {
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <FriendsList names={this.state.friends} />
            </div>
        );
    }
});

export default FriendsContainer;
