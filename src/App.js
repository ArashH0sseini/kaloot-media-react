import { Suspense, useState, lazy, useEffect } from 'react'
import Loading from './components/Loading';
const LazyComponent = lazy(() => import('./components/LazyComponent'));
const App = () => {
  const [minLoadingTime, setMinLoadingTime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadingTime(false);
    }, 3000); // 3 ثانیه

    return () => clearTimeout(timer); // تمیز کردن تایمر
  }, []);

  if (minLoadingTime) {
    return <Loading />;
  }

  return <Suspense fallback={<Loading />}><LazyComponent /></Suspense>;
};

export default App;
