import React from 'react'
import PropTypes from 'prop-types'
import Jazzicon from 'react-jazzicon'
import styles from './styles.css'
import jsNumberForAddress from 'react-jazzicon/lib/jsNumberForAddress'
import beautyAddress from './beautyAddress.js'

const AddressButton = props => (
  <div className={styles.addressButton}>
    <Jazzicon
      diameter={props.diameter}
      seed={jsNumberForAddress(props.account)}
    />
    <div style={{ paddingLeft: '6px' }}>{beautyAddress(props.account)}</div>
  </div>
)

AddressButton.propTypes = {
  diameter: PropTypes.number,
  account: PropTypes.string
}

AddressButton.defaultProps = {
  diameter: 30
}

export default AddressButton
