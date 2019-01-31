import React, { Component } from 'react';
import '../index.css';
import SignUpForm from './SignUpForm';
import SignUpInfo from './SignUpInfo';
import SignUpFinished from './SignUpFinished';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    step: 0,
  };

  dataForm = {};

  submit = values => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
    this.dataForm = { ...this.dataForm, ...values };
  };

  onBackSignUpInfoHandler = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleInfoDataForm = () => {
    console.log('dataForm', this.dataForm);
  };

  render() {
    const { step } = this.state;
    return (
      <div className="wrap">
        <p className="title">{step === 2 ? 'Thank you!' : 'Signup'}</p>
        <div className="steps">
          <span className={`steps-line steps-line-${step}`} />
        </div>
        {step === 0 && <SignUpForm onSubmit={this.submit} />}
        {step === 1 && (
          <SignUpInfo
            onSubmit={this.submit}
            onBackSignUpInfoHandler={this.onBackSignUpInfoHandler}
          />
        )}
        {step === 2 && (
          <SignUpFinished handleInfoDataForm={this.handleInfoDataForm} />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  form: state.form,
}))(Signup);
