import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class AppHeader extends Component {

    render() {
        return <div style={{'fontSize' : '20px'}}>
            <p>Account: {this.props.userAccount}</p>
            <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
            <Button color='red'   onClick={() => this.props.logOut()}>
             LOG OUT
            </Button></h2>
        </div>
    }
}

export default AppHeader;