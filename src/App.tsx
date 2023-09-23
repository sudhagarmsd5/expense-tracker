import './App.css';
import { useEffect, useState } from 'react';
import Loader from './common/loader';
import Routing from './router/Routing.tsx';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader /> : <Routing />;
}

export default App;
