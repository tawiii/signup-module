import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ErrorField from './common/error-field';
import validate from './common/validateForm';

class SignUpForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="wrap-form">
          <Field label="Email" name="email" component={ErrorField} />
          <Field
            label="Password"
            name="password"
            component={ErrorField}
            type="password"
          />
          <Field
            label="confirm password"
            name="confirmpassword"
            component={ErrorField}
            type="password"
          />
        </div>
        <footer>
          <button type="submit" className="footer-btn">
            Next <i className="fas fa-arrow-right" />
          </button>
        </footer>
      </form>
    );
  }
}

export default reduxForm({
  form: 'auth',
  validate,
})(SignUpForm);
