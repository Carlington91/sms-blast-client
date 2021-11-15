import { Suspense } from 'react';
import axios from 'axios';
import PrivateRoute from './routes/PrivateRoute';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/Loader';
import {
  DashboardPage,
  ContactListPage,
  CreateContactPage,
  EditContactPage,
  PresetMessagesPage,
  CreatePresetMessagePage,
  EditPresetMessagePage,
  SentMessagesPage,
  SentMessagePage,
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
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PrivateRoute exact path='/users/new' component={Register} />
        <PrivateRoute exact path='/users/profile' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        <PrivateRoute exact path='/contact/new' component={CreateContactPage} />
        <PrivateRoute exact path='/contact/edit' component={EditContactPage} />
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
          path='/sent-messages'
          component={SentMessagesPage}
        />
        <PrivateRoute
          exact
          path='/sent-messages/:id'
          component={SentMessagePage}
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
