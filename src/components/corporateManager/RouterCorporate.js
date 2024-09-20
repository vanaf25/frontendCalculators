import { memo, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { InlineLoading } from '../global/loading/Loading';

const CustomerArchives = lazy(() => import(/* webpackChunkName: "CustomerArchives" */ '../../pages/corporateManager/CustomerArchives'));
const Training = lazy(() => import(/* webpackChunkName: "Training" */ '../../pages/corporateManager/Training'));
const Accounting = lazy(() => import(/* webpackChunkName: "Accounting" */ '../../pages/corporateManager/Accounting'));
const Legal = lazy(() => import(/* webpackChunkName: "Legal" */ '../../pages/corporateManager/Legal'));
const IrsComponent = lazy(() => import(/* webpackChunkName: "IrsComponent" */ '../../pages/corporateManager/GovernmentDocuments/FedralGov/Irs'));
const EpaComponent = lazy(() => import(/* webpackChunkName: "EpaComponent" */ '../../pages/corporateManager/GovernmentDocuments/FedralGov/Epa'));
const FbiComponent = lazy(() => import(/* webpackChunkName: "FbiComponent" */ '../../pages/corporateManager/GovernmentDocuments/FedralGov/Fbi'));
const SecretaryComponent = lazy(() => import(/* webpackChunkName: "SecretaryComponent" */ '../../pages/corporateManager/GovernmentDocuments/StateGov/Secretary'));
const ComptrollerComponent = lazy(() => import(/* webpackChunkName: "ComptrollerComponent" */ '../../pages/corporateManager/GovernmentDocuments/StateGov/Comptroller'));
const PropertyTaxComponent = lazy(() => import(/* webpackChunkName: "PropertyTaxComponent" */ '../../pages/corporateManager/GovernmentDocuments/CountyGov/PropertyTax'));
const VehiclesTaxComponent = lazy(() => import(/* webpackChunkName: "VehiclesTaxComponent" */ '../../pages/corporateManager/GovernmentDocuments/CountyGov/VehiclesTax'));
const PermitsComponent = lazy(() => import(/* webpackChunkName: "PermitsComponent" */ '../../pages/corporateManager/GovernmentDocuments/LocalGov/Permits'));
const LiabilityComponent = lazy(() => import(/* webpackChunkName: "LiabilityComponent" */ '../../pages/corporateManager/InsureanceDocuments/Liability'));
const HealthComponent = lazy(() => import(/* webpackChunkName: "HealthComponent" */ '../../pages/corporateManager/InsureanceDocuments/Health'));
const AutoComponent = lazy(() => import(/* webpackChunkName: "AutoComponent" */ '../../pages/corporateManager/InsureanceDocuments/Auto'));
const BusinessComponent = lazy(() => import(/* webpackChunkName: "BusinessComponent" */ '../../pages/corporateManager/InsureanceDocuments/Business'));

const routes = [
  { path: '/corporate/customer-archives', component: CustomerArchives },
  { path: '/corporate/manager-training', component: Training },
  { path: '/corporate/accounting', component: Accounting },
  { path: '/corporate/legal', component: Legal },
  { path: '/corporate/gov-docs/fedral-gov/irs', component: IrsComponent },
  { path: '/corporate/gov-docs/fedral-gov/epa', component: EpaComponent },
  { path: '/corporate/gov-docs/fedral-gov/fbi', component: FbiComponent },
  { path: '/corporate/gov-docs/state-gov/secretary', component: SecretaryComponent },
  { path: '/corporate/gov-docs/state-gov/comptroller', component: ComptrollerComponent },
  { path: '/corporate/gov-docs/county-gov/property', component: PropertyTaxComponent },
  { path: '/corporate/gov-docs/county-gov/vehicle', component: VehiclesTaxComponent },
  { path: '/corporate/gov-docs/local-gov/permits', component: PermitsComponent },
  { path: '/corporate/insurance-docs/liability', component: LiabilityComponent },
  { path: '/corporate/insurance-docs/health', component: HealthComponent },
  { path: '/corporate/insurance-docs/auto', component: AutoComponent },
  { path: '/corporate/insurance-docs/business', component: BusinessComponent },
];

const RouterCorporate = ({ user }) => (
  <Suspense fallback={<InlineLoading />}>
    <Switch>
      {routes.map(({ path, component }) => (
        <PrivateRoute
          key={path}
          user={user}
          allowedRole="sales"
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </Suspense>
);

export default memo(RouterCorporate);
