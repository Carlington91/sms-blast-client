import { Switch, Route } from 'react-router-dom';
import {
  DashboardPage,
  ContactListPage,
  CreateContactPage,
  PresetMessagesPage,
  CreatePresetMessagePage,
  EditPresetMessagePage,
  Login,
  Register,
  GroupPage,
  SenderIDsPage,
  GroupMessagePage,
  QuickMessagePage,
} from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/users/new' component={Register} />
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route exact path='/contact/new' component={CreateContactPage} />
      <Route exact path='/contacts' component={ContactListPage} />
      <Route exact path='/preset-messages' component={PresetMessagesPage} />
      <Route
        exact
        path='/update-preset-message/:id'
        component={EditPresetMessagePage}
      />
      <Route
        exact
        path='/create-preset-message'
        component={CreatePresetMessagePage}
      />
      <Route exact path='/groups' component={GroupPage} />
      <Route exact path='/sender-ids' component={SenderIDsPage} />
      <Route exact path='/group/message' component={GroupMessagePage} />
      <Route exact path='/quick-message' component={QuickMessagePage} />
    </Switch>
  );
};

export default App;
