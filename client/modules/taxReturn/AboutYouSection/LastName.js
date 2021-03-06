import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class LastName extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defualtProps = {
    value: '',
    onChange: () => {},
  }

  state = {
    value: '',
    isValid: true,
    error: null,
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps
    this.setState({ value })
  }

  handleChange = (e) => {
    const value = e.target.value.trim().substring(0, 30)
    this.setState({ value, error: null })
  }

  handleBlur = () => {
    const { value } = this.state

    // required
    if (value.length === 0) {
      this.setState({
        isValid: false,
        error: 'This field is required',
      })
      return
    }

    this.setState({ isValid: true, error: null })
    this.props.onChange(value)
  }

  render() {
    const { isValid, error } = this.state
    const className = classNames('form-group', { 'has-danger': !this.state.isValid })

    return (
      <div className={className}>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          value={this.state.value}
          maxLength="30"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {!isValid ? <small className="text-help">{error}</small> : null}
      </div>
   )
  }
}

export default LastName
