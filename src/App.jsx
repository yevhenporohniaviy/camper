import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Loader = lazy(() => import("./utils/Loader"));
const Layout = lazy(() => import("./layout"));
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
