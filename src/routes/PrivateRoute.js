import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isAuth, isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if ((user && isAuth) || history.pathname === '/') {
      setLoading(true);
      return;
    } else {
      isLoggedIn();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [user, isAuth, history, isLoggedIn]);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && isAuth ? (
          <Component {...props} />
        ) : loading ? (
          ''
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
