// import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Pagination from './component/pagination';
import { queryClient } from './component/pagination/client';
// import ListUsers from './component/List';
// import LoginForm from './component/form';
// import Input from './component/debounce';
// import ProgressBarContainer from './component/progress';
// import Users from './component/users';
// import { store } from './store';

function App() {
  return (
    <div>
      {/* <ProgressBarContainer /> */}
      {/* <Provider store={store}>
        <Users />
      </Provider> */}
      {/* <Input /> */}
      {/* <LoginForm /> */}
      {/* <ListUsers /> */}
      <QueryClientProvider client={queryClient}>
        <Pagination />
      </QueryClientProvider>
    </div>
  );
}

export default App;
