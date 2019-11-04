import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { handleLogout } = this.props;
        return (
            <div>
                <h1>Welocome To ivolve</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
}

export default Welcome;