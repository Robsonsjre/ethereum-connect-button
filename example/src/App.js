import React, { Component } from 'react'

import ExampleComponent from 'ethereum-connect-button'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent account='0x56CfFCc576BFd864e62d0533C7466f381757FFC0' diameter={100} />
      </div>
    )
  }
}
