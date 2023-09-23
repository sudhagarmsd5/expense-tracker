import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp.tsx';
import SignIn from '../pages/Auth/SignIn.tsx';
import Loader from '../common/loader';
import DefaultLayout from '../pages/Layout/DefaultLayout.tsx';

const Transactions = lazy(() => import('../pages/Transactions/Transactions'));

const routeList = [
  {
    id: '1',
    path: '/transactions',
    title: 'Transactions',
    component: Transactions
  }
];

const Routing = () => {
  return (
    <Routes>
      <Route path="/auth/signup" element={<SignUp />}></Route>
      <Route path="/auth/signin" element={<SignIn />}></Route>
      <Route path="/" element={<DefaultLayout />}>
        {routeList.map(({ id, path, component: Component }) => (
          <Route
            key={id}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Routing;
