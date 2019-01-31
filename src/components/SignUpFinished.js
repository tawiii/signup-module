import React, { Component } from 'react';

class SignUpFinished extends Component {
  render() {
    const { handleInfoDataForm } = this.props;
    return (
      <div className="finish">
        <div className="badge">&#10004;</div>
        <button className="finish-btn" onClick={handleInfoDataForm}>
          Go to Dashboard <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }
}

export default SignUpFinished;
