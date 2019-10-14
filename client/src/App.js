import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              appear={true}
              key={location.key}
              timeout={1000}
              classNames="fade"
            >
              <Switch location={location}>
                <ErrorBoundary>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/shop" component={ShopPage} />
                  <Route exact path="/checkout" component={CheckoutPage} />
                  <Route
                    exact
                    path="/signin"
                    render={() =>
                      currentUser ? (
                        <Redirect to="/" />
                      ) : (
                        <SignInAndSignUpPage />
                      )
                    }
                  />
                </ErrorBoundary>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
