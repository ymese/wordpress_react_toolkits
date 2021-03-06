import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '20%',
    left: '200px',
    right: '40px',
    bottom: '15%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'

  }
}

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
  }

  render() {
    const { label, insideElement, closeBtn } = this.props;
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel={label}
          style={style}>
          {closeBtn}
          { insideElement }
        </ReactModal>
      </div>
    )
  }

  handleClosePopup() {
    this.setState({ showModal: false });
  }

  handleOpenPopup() {
    this.setState({ showModal: true });
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillMount() {
    this.props.onRef(undefined);
  }
}

Popup.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  closeTitle: PropTypes.string,
  insideElement: PropTypes.element.isRequired,
  closeBtn: PropTypes.element.isRequired,
  onRef: PropTypes.func.isRequired
}
