import React from 'react';

var FriendsList = React.createClass({
    getDefaultProps: function () {
        return {
            names: []
        }
    },
    render: function() {
        var friends = this.props.names.map(function (friend, index) {
            return <li key={index}>{friend}</li>
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {friends}
                </ul>
            </div>
        );
    }
});

export default FriendsList;
