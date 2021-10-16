import { Switch, Route } from 'react-router-dom';
import {
  DashboardPage,
  ContactListPage,
  CreateContactPage,
  CreateMessagePage,
  MessagesPage,
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
      <Route exact path='/users/new' component={Register} />
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route exact path='/contact/new' component={CreateContactPage} />
      <Route exact path='/contacts' component={ContactListPage} />
      <Route exact path='/messages' component={MessagesPage} />
      <Route exact path='/message/new' component={CreateMessagePage} />
      <Route exact path='/groups' component={GroupPage} />
      <Route exact path='/sender-ids' component={SenderIDsPage} />
      <Route exact path='/group/message' component={GroupMessagePage} />
      <Route exact path='/quick-message' component={QuickMessagePage} />
    </Switch>
  );
};

export default App;
