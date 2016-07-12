import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/modules/user.module'
import FirstName from './FirstName'
import LastName from './LastName'
import Title from './Title'
import PhoneNumber from './PhoneNumber'

class AboutYou extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: {
      firstName: '',
      lastName: '',
      title: '',
      phoneNumber: '',
    },
  }

  handleInputChange = (props) => {
    this.props.update({ ...props })
    this.props.save()
  }

  render() {
    const { user } = this.props
    return (
      <div id="client-section" className="section">
        <h4>About You</h4>
        <div className="form-group row">
          <div className="col-xs-6">
            <FirstName value={user.firstName} onChange={this.handleInputChange} />
          </div>
          <div className="col-xs-6">
            <LastName value={user.lastName} onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-xs-6">
            <Title value={user.title} onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-xs-6">
            <PhoneNumber value={user.phoneNumber} onChange={this.handleInputChange} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutYou)