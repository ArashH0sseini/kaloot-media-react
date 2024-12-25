import { Suspense, useState, lazy, useEffect } from 'react'
import Loading from './components/Loading';
const LazyComponent = lazy(() => import('./components/LazyComponent'));
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
      <Suspense>
                {isLoading ? <Loading /> : <LazyComponent />}
      </Suspense>
  );
}

export default App;
