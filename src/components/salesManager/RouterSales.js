import { memo, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import { InlineLoading } from '../global/loading/Loading';

const SalesSystem = lazy(() =>
  import(/* webpackChunkName: "SalesSystem" */ '../../pages/salesManager/SalesSystem'),
);
const SalesQuotes = lazy(() =>
  import(/* webpackChunkName: "SalesQuotes" */ '../../pages/salesManager/SalesQuotes'),
);
const SalesMaterials = lazy(() =>
  import(/* webpackChunkName: "SalesMaterials" */ '../../pages/salesManager/SalesMaterial'),
);
const SalesPresentations = lazy(() =>
  import(
    /* webpackChunkName: "SalesPresentations" */ '../../pages/salesManager/SalesPresentations'
  ),
);
const SalesConstruction = lazy(() =>
  import(
    /* webpackChunkName: "SalesConstruction" */ '../../pages/salesManager/SalesPreConstructionPictures'
  ),
);
const SalesCommunications = lazy(() =>
  import(
    /* webpackChunkName: "SalesCommunications" */ '../../pages/salesManager/SalesCommunicationsManager'
  ),
);

const RouterSales = ({ user }) => (
  <Suspense fallback={<InlineLoading />}>
    <Switch>
      <PrivateRoute user={user} allowedRole="sales" path="/sales/system" component={SalesSystem} />
      <PrivateRoute user={user} allowedRole="sales" path="/sales/quotes" component={SalesQuotes} />
      <PrivateRoute
        user={user}
        allowedRole="sales"
        path="/sales/materials"
        component={SalesMaterials}
      />
      <PrivateRoute
        user={user}
        allowedRole="sales"
        path="/sales/presentations"
        component={SalesPresentations}
      />
      <PrivateRoute
        user={user}
        allowedRole="sales"
        path="/sales/constructions"
        component={SalesConstruction}
      />
      <PrivateRoute
        user={user}
        allowedRole="sales"
        path="/sales/communications"
        component={SalesCommunications}
      />
    </Switch>
  </Suspense>
);

export default memo(RouterSales);
