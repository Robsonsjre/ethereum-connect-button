import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import AddressButton from './AddressButton'

const redirectEtherscan = currentAddress => {
  if (!currentAddress) return
  window.open('https://etherscan.io/address/' + currentAddress, '_blank')
}
export default class EthereumButton extends Component {
  static propTypes = {
    account: PropTypes.string,
    diameter: PropTypes.number
  }

  render() {
    const { account, diameter } = this.props

    return (
      <div className={styles.test}>
        <button
          onClick={() => redirectEtherscan(account)}
          className={styles.wallet}
        >
          {account ? <AddressButton account={account} diameter={diameter} /> : 'Connect'}
        </button>
      </div>
    )
  }
}
