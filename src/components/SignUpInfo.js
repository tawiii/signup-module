import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ErrorField from './common/error-field';
import validate from './common/validateInfo';

class SignUpInfo extends Component {
  state = {
    gender: 'male',
  };

  onRadioBtnChanged = e => {
    this.setState({
      gender: e.currentTarget.value,
    });
  };

  componentDidMount() {
    this.props.initialize({ gender: 'male', aboutUs: null });
  }

  render() {
    const { onBackSignUpInfoHandler, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="wrap-info">
          <div className="wrap-date">
            <p className="wrap-info-name">date of birth</p>
            <Field
              type="text"
              name="day"
              placeholder="DD"
              component={ErrorField}
            />
            <Field
              type="text"
              name="month"
              placeholder="MM"
              component={ErrorField}
            />
            <Field
              type="text"
              name="year"
              placeholder="YYYY"
              component={ErrorField}
            />
          </div>

          <div className="gender">
            <p className="wrap-info-name">gender</p>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.onRadioBtnChanged}
              />
              <span>Male</span>
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.onRadioBtnChanged}
              />
              <span>Female</span>
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="unspecified"
                checked={this.state.gender === 'unspecified'}
                onChange={this.onRadioBtnChanged}
              />
              <span>unspecified</span>
            </label>
          </div>
          <div>
            <p className="wrap-info-name">Where did you hear about us?</p>
            <div className="wrap-select">
              <Field name="aboutUs" component="select">
                <option value="nothing" />
                <option value="newspaper">Newspaper</option>
                <option value="Internet">Internet</option>
                <option value="Facebook">Facebook</option>
              </Field>
            </div>
          </div>
        </div>
        <footer>
          <button className="footer-btn back" onClick={onBackSignUpInfoHandler}>
            Back
          </button>
          <button type="submit" className="footer-btn">
            Next <i className="fas fa-arrow-right" />
          </button>
        </footer>
      </form>
    );
  }
}

export default reduxForm({
  form: 'info',
  validate,
})(SignUpInfo);
