import { useEffect, Suspense } from 'react';
import axios from 'axios';
import PrivateRoute from './routes/PrivateRoute';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAuth } from './context/auth/authContext';
import Loader from './components/Loader';
import {
  DashboardPage,
  ContactListPage,
  CreateContactPage,
  PresetMessagesPage,
  CreatePresetMessagePage,
  EditPresetMessagePage,
  Login,
  Register,
  Profile,
  GroupPage,
  SenderIDsPage,
  GroupMessagePage,
  QuickMessagePage,
  NotFoundPage,
} from './pages';

axios.defaults.withCredentials = true;

const App = () => {
  const { isLoggedIn, user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (user || history.pathname === '/') {
      return false;
    } else {
      isLoggedIn();
    }

    //eslint-disable-next-line
  }, [user, isLoggedIn, history]);

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PrivateRoute exact path='/users/new' component={Register} />
        <PrivateRoute exact path='/users/profile' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        <PrivateRoute exact path='/contact/new' component={CreateContactPage} />
        <PrivateRoute exact path='/contacts' component={ContactListPage} />
        <PrivateRoute
          exact
          path='/preset-messages'
          component={PresetMessagesPage}
        />
        <PrivateRoute
          exact
          path='/update-preset-message/:id'
          component={EditPresetMessagePage}
        />
        <PrivateRoute
          exact
          path='/create-preset-message'
          component={CreatePresetMessagePage}
        />
        <PrivateRoute exact path='/groups' component={GroupPage} />
        <PrivateRoute exact path='/sender-ids' component={SenderIDsPage} />
        <PrivateRoute
          exact
          path='/group/message'
          component={GroupMessagePage}
        />
        <PrivateRoute
          exact
          path='/quick-message'
          component={QuickMessagePage}
        />

        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='*' component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default App;
