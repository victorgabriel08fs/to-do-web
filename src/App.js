/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
