import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(err) {
    return { hasErrored: true };
  }

  componentDidCatch(err, info) {
    console.log(err);
  }

  render() {
    const { PAGE_NOT_FOUND } = this.props;
    if (this.state.hasErrored || PAGE_NOT_FOUND) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png"></ErrorImageContainer>
          <ErrorImageText>
            <h1>This Page is Lost in Space</h1>
            <p>Sorry, something went wrong.</p>
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
