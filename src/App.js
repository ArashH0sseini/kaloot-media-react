import { Suspense, useState, lazy, useEffect } from 'react'
import Loading from './components/Loading';
const Main = lazy(() => import("./components/Main"));
const App = () => {
  const [minLoadingTime, setMinLoadingTime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingTime(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (minLoadingTime) {
    return <Loading />;
  }

  return (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
  )
};

export default App;
