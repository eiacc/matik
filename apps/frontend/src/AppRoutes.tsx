import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router';

const Home = lazy(() => import('./pages/Home.tsx'));
const Signin = lazy(() => import('./pages/Signin.tsx'));
const Signup = lazy(() => import('./pages/Signup.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={
        <Suspense fallback={<div>Homepage loader</div>}>
          <Home/>
        </Suspense>
      }/>

      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />

      {/* Catch-all Route for non-existing page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;