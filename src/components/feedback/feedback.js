import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import './feedback.css';

class Feedback extends Component {
  state = {
    isClicked: false
  };

  renderLike() {
    const { width } = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}>
        <path fill="currentColor"
              d="M13 4.8l2.92 6.8a1 1 0 0 1 .08.4v8a2 2 0 0 1-2 2H8a4.28 4.28 0 0 1-3.7-2.45L2.07 14.4A1 1 0 0 1 2 14v-2a3 3 0 0 1 3-3h4V5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v1.8z"/>
        <rect fill="currentColor" width="4" height="11" x="18" y="11" className="secondary" rx="1"/>
      </svg>
    );
  }

  renderDislike() {
    const { width } = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width}>
        <path fill="currentColor"
              d="M11 19.2l-2.92-6.8A1 1 0 0 1 8 12V4c0-1.1.9-2 2-2h6c1.5 0 3.11 1.06 3.7 2.45l2.22 5.16A1 1 0 0 1 22 10v2a3 3 0 0 1-3 3h-4v4a3 3 0 0 1-3 3 1 1 0 0 1-1-1v-1.8z"/>
        <rect fill="currentColor" width="4" height="11" x="2" y="2" className="secondary" rx="1"
              transform="rotate(180 4 7.5)"/>
      </svg>
    );
  }

  handleClick = (event) => {
    const type = event.currentTarget.dataset.type;

    if (typeof window.ga === 'function') {
      ga('send', 'event', 'feedback', type);
    } else {
      console.log('feedback', type);
    }

    this.setState({
      isClicked: true
    })
  };

  renderIcon(type) {
    return (
      <section
        className={`feedback__icon feedback__icon--type-${type}`}
        title={`${type[0].toUpperCase()}${type.substr(1)}`}
        data-type={type}
        onClick={this.handleClick}
      >
        {
          type === 'like' &&
            this.renderLike()
        }
        {
          type === 'dislike' &&
            this.renderDislike()
        }
      </section>
    );
  }

  render() {
    const { isClicked } = this.state;

    return (
      <section
        className="feedback"
      >
        {
          isClicked ?
            'Thanks for your feedback!' :
            <React.Fragment>
              {this.renderIcon('like')}
              {this.renderIcon('dislike')}
            </React.Fragment>
        }
      </section>
    );
  }
}

Feedback.propTypes = {
  width: PropTypes.string.isRequired
};

export default Feedback;
