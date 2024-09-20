import { memo, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import { InlineLoading } from '../global/loading/Loading';

const OfficePaper = lazy(() =>
  import(/* webpackChunkName: "OfficePaper" */ '../../pages/officeManager/OfficePaper'),
);
const OfficeSafety = lazy(() =>
  import(/* webpackChunkName: "OfficeSafety" */ '../../pages/officeManager/OfficeSafety'),
);
const OfficeSupplier = lazy(() =>
  import(/* webpackChunkName: "OfficeSupplier" */ '../../pages/officeManager/OfficeSupplier'),
);
const OfficeEquipment = lazy(() =>
  import(/* webpackChunkName: "OfficeEquipment" */ '../../pages/officeManager/OfficeEquipment'),
);

const RouterOffice = ({ user }) => {
  console.log(user);
  return (
    <Suspense fallback={<InlineLoading />}>
      <Switch>
        <PrivateRoute
          user={user}
          allowedRole="office"
          path="/office/paper"
          component={OfficePaper}
        />
        <PrivateRoute
          user={user}
          allowedRole="office"
          path="/office/safety"
          component={OfficeSafety}
        />
        <PrivateRoute
          user={user}
          allowedRole="office"
          path="/office/supplier"
          component={OfficeSupplier}
        />
        <PrivateRoute
          user={user}
          allowedRole="office"
          path="/office/equipment-inventory"
          component={OfficeEquipment}
        />
      </Switch>
    </Suspense>
  );
};

export default memo(RouterOffice);
