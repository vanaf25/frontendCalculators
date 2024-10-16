import { lazy, memo, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import Home from './pages/Home';
import InvalidRole from './pages/InvalidRole';
import InvalidStatus from './pages/InvalidStatus';

import Header from './components/global/Header';
import { InlineLoading } from './components/global/loading/Loading';
import { loadUser } from './redux/actions/authAction';
import PrivateRoute from './components/PrivateRoute';
import Calculations from './pages/calculations/Calculations';
import Products from './pages/products/Products';
import AddProduct from './components/products/AddProduct/AddProduct';
import Gutters from "./pages/calculations/Gutters";
import Walls from "./pages/calculations/Walls";
import HotTubPad from "./pages/calculations/HotTubPad";
import LaticalPanel from "./pages/calculations/LaticalPanel";
import HomeWrap from "./pages/calculations/HomeWrap";
import VinylSiding from "./pages/calculations/VinylSiding";
import Corners from "./pages/calculations/Corners";
import SheetSiding from "./pages/calculations/SheetSiding";
import Soffit from "./pages/calculations/Soffit";
import PergolaShade from "./pages/calculations/PergolaShade";
import FriezeBoard from "./pages/calculations/FriezeBoard";
import PlankSiding from "./pages/calculations/PlankSiding";
import Fascia from "./pages/calculations/Fascia";
import StuccoWallCovering from "./pages/calculations/StuccoWallCovering";
import BrickWallCovering from "./pages/calculations/BrickWallCovering";
import PorchCeiling from "./pages/calculations/PorchCeiling";
import StairFraming from "./pages/calculations/StairFraming";
import Fencing from "./pages/calculations/Fencing";
import FormLetters from './pages/formLetters/FormLetters';
import ReleaseAgreement from './pages/formLetters/legal/releaseAgreement';
import NonDisclosureAgreement from './pages/formLetters/legal/NonDisclureAgreegment';
import DrugTestNotice from './pages/formLetters/legal/DrugTestConsent';
import DrugTestConsent from './pages/formLetters/legal/DrugTestConsent';
import ClaimOfLien from './pages/formLetters/legal/ClaimOfLien';
import BreachOfNonDisclosure from './pages/formLetters/legal/BreachOfNonDisclosure';
import BreachOfContract from './pages/formLetters/legal/BreachOfContract';
import Termination from './pages/formLetters/ProductionPaperWork/Termination';
import SiteRules from './pages/formLetters/ProductionPaperWork/SiteRules';
import Notice3 from './pages/formLetters/ProductionPaperWork/Notice3';
import Notice2 from './pages/formLetters/ProductionPaperWork/Notice2';
import Notice1 from './pages/formLetters/ProductionPaperWork/Notice1';
import NewWorkerExpectations from './pages/formLetters/ProductionPaperWork/NewWorkerExpectations';
import MutualTermination from './pages/formLetters/ProductionPaperWork/MutualTermination';
import HarshTermination from './pages/formLetters/ProductionPaperWork/HarshTermination';
import SubContractTermination  from './pages/formLetters/subcontractPaperWork/Termination'
import GoldenRules from './pages/formLetters/ProductionPaperWork/GoldenRules';
import Expectations from './pages/formLetters/ProductionPaperWork/Expectations';
import OfficeManager from './pages/formLetters/OfficeManager/OfficeManager';
import ProductionPaperWork from './pages/formLetters/ProductionPaperWork/ProductionPaperWork';
import BackChargeNotice from './pages/formLetters/salesManager/BackChargeNotice';
import CommissionStructure from './pages/formLetters/salesManager/ComissionStructure';
import MissedLead from './pages/formLetters/salesManager/MissedLead';
import NewClientQuestions from './pages/formLetters/salesManager/newClientQuestions';
import AdvanceApproval from './pages/formLetters/ProductionPaperWork/AdvanceApproval';
import AdvanceFormRequest from './pages/formLetters/ProductionPaperWork/AdvanceApproval';
import Agreement from './pages/formLetters/ProductionPaperWork/Agreement';
import Ethics from './pages/formLetters/ProductionPaperWork/Ethics';
import Application from './pages/formLetters/ProductionPaperWork/Application';
import MissedSalesGoal from './pages/formLetters/salesManager/MissedSalesGoal';
import AccountingLetter from "./pages/formLetters/accounting/Accounting"
import LegalLetter from "./pages/formLetters/legal/Legal"
import SalesLetter from './pages/formLetters/salesManager/SalesManager'
import Invoice from './pages/formLetters/accounting/Invoice';
import JobCost from './pages/formLetters/accounting/JobCost';
import SupplierPurchcaseOrder from './pages/formLetters/accounting/SupplierPurchcaseOrder';
import Box from '@mui/material/Box';
import AdditionalWorkOrder from './pages/formLetters/OfficeManager/AdditionalWorkOrder';
import CompletionCert from './pages/formLetters/OfficeManager/CompletionCert';
import HighTrafficArea from './pages/formLetters/OfficeManager/HighTrafficArea';
import LearnWaver from './pages/formLetters/OfficeManager/LearnWaver';
import PunchOutOf15 from './pages/formLetters/OfficeManager/PunchOutOf15';
import PunchOutOf60 from './pages/formLetters/OfficeManager/PunchOutOf60';
import ThankYouLetter from './pages/formLetters/OfficeManager/ThankYouLetter';
import Waranty from './pages/formLetters/OfficeManager/Waranty';
import SafetyPaperWork from './pages/formLetters/safetyPaperWork/SafetyPaperWork';
import IncidentReport from './pages/formLetters/safetyPaperWork/IncidentReport';
import SafetyViolation from './pages/formLetters/safetyPaperWork/safetyViolation';
import SafetyInspiration from './pages/formLetters/safetyPaperWork/SafetyInspiration';
import SubContractPaperWork from './pages/formLetters/subcontractPaperWork/SubContractPaperWork';
import SubContract from './pages/formLetters/subcontractPaperWork/SubContract';
import SubContractJobCost from './pages/formLetters/subcontractPaperWork/JobCost';
import PointOfContact from './pages/formLetters/subcontractPaperWork/PointOfContact';
import System99Calculator from "./pages/formLetters/System99Calculator/System99Calculator";
import Pricing from "./pages/formLetters/System99Calculator/Pricing";
import Material from "./pages/formLetters/System99Calculator/Material/Material";
import Mesurments from "./pages/formLetters/System99Calculator/Messurments/Mesurments";
import ComissionSheet from "./pages/formLetters/System99Calculator/ComissionSheet/ComissionSheet";

const AdminPage = lazy(() => import(/* webpackChunkName: "AdminPage" */ './pages/AdminPage'));

const OfficePaper = lazy(() =>
  import(/* webpackChunkName: "OfficePaper" */ './pages/officeManager/OfficePaper'),
);
const OfficeSafety = lazy(() =>
  import(/* webpackChunkName: "OfficeSafety" */ './pages/officeManager/OfficeSafety'),
);
const OfficeSupplier = lazy(() =>
  import(/* webpackChunkName: "OfficeSupplier" */ './pages/officeManager/OfficeSupplier'),
);
const OfficeEquipment = lazy(() =>
  import(/* webpackChunkName: "OfficeEquipment" */ './pages/officeManager/OfficeEquipment'),
);

const ProductionSubContractor = lazy(() =>
  import(
    /* webpackChunkName: "ProductionSubContractor" */ './pages/productionManager/ProductionSubContractor'
  ),
);
const ProductionEmployee = lazy(() =>
  import(
    /* webpackChunkName: "ProductionEmployee" */ './pages/productionManager/ProductionEmployee'
  ),
);
const ProductionService = lazy(() =>
  import(/* webpackChunkName: "ProductionService" */ './pages/productionManager/ProductionService'),
);
const ProductionTraining = lazy(() =>
  import(
    /* webpackChunkName: "ProductionTraining" */ './pages/productionManager/ProductionTraining'
  ),
);
const ProductionPictures = lazy(() =>
  import(
    /* webpackChunkName: "ProductionPictures" */ './pages/productionManager/ProductionPictures'
  ),
);

const SalesSystem = lazy(() =>
  import(/* webpackChunkName: "SalesSystem" */ './pages/salesManager/SalesSystem'),
);
const SalesQuotes = lazy(() =>
  import(/* webpackChunkName: "SalesQuotes" */ './pages/salesManager/SalesQuotes'),
);
const SalesMaterials = lazy(() =>
  import(/* webpackChunkName: "SalesMaterials" */ './pages/salesManager/SalesMaterial'),
);
const SalesPresentations = lazy(() =>
  import(/* webpackChunkName: "SalesPresentations" */ './pages/salesManager/SalesPresentations'),
);
const SalesConstruction = lazy(() =>
  import(
    /* webpackChunkName: "SalesConstruction" */ './pages/salesManager/SalesPreConstructionPictures'
  ),
);
const SalesCommunications = lazy(() =>
  import(
    /* webpackChunkName: "SalesCommunications" */ './pages/salesManager/SalesCommunicationsManager'
  ),
);

const CustomerArchives = lazy(() =>
  import(/* webpackChunkName: "CustomerArchives" */ './pages/corporateManager/CustomerArchives'),
);
const Training = lazy(() =>
  import(/* webpackChunkName: "Training" */ './pages/corporateManager/Training'),
);
const Accounting = lazy(() =>
  import(/* webpackChunkName: "Accounting" */ './pages/corporateManager/Accounting'),
);
const Legal = lazy(() => import(/* webpackChunkName: "Legal" */ './pages/corporateManager/Legal'));
const IrsComponent = lazy(() =>
  import(
    /* webpackChunkName: "IrsComponent" */ './pages/corporateManager/GovernmentDocuments/FedralGov/Irs'
  ),
);
const EpaComponent = lazy(() =>
  import(
    /* webpackChunkName: "EpaComponent" */ './pages/corporateManager/GovernmentDocuments/FedralGov/Epa'
  ),
);
const FbiComponent = lazy(() =>
  import(
    /* webpackChunkName: "FbiComponent" */ './pages/corporateManager/GovernmentDocuments/FedralGov/Fbi'
  ),
);
const SecretaryComponent = lazy(() =>
  import(
    /* webpackChunkName: "SecretaryComponent" */ './pages/corporateManager/GovernmentDocuments/StateGov/Secretary'
  ),
);
const ComptrollerComponent = lazy(() =>
  import(
    /* webpackChunkName: "ComptrollerComponent" */ './pages/corporateManager/GovernmentDocuments/StateGov/Comptroller'
  ),
);
const PropertyTaxComponent = lazy(() =>
  import(
    /* webpackChunkName: "PropertyTaxComponent" */ './pages/corporateManager/GovernmentDocuments/CountyGov/PropertyTax'
  ),
);
const VehiclesTaxComponent = lazy(() =>
  import(
    /* webpackChunkName: "VehiclesTaxComponent" */ './pages/corporateManager/GovernmentDocuments/CountyGov/VehiclesTax'
  ),
);
const PermitsComponent = lazy(() =>
  import(
    /* webpackChunkName: "PermitsComponent" */ './pages/corporateManager/GovernmentDocuments/LocalGov/Permits'
  ),
);

const LiabilityComponent = lazy(() =>
  import(
    /* webpackChunkName: "LiabilityComponent" */ './pages/corporateManager/InsureanceDocuments/Liability'
  ),
);
const HealthComponent = lazy(() =>
  import(
    /* webpackChunkName: "HealthComponent" */ './pages/corporateManager/InsureanceDocuments/Health'
  ),
);
const AutoComponent = lazy(() =>
  import(
    /* webpackChunkName: "AutoComponent" */ './pages/corporateManager/InsureanceDocuments/Auto'
  ),
);
const BusinessComponent = lazy(() =>
  import(
    /* webpackChunkName: "BusinessComponent" */ './pages/corporateManager/InsureanceDocuments/Business'
  ),
);
/*const formLetters=[
  {
  main:"accounting",
  children:["accounting","legal","officeManager","productionPaperWork","salesManager"]
},
  {main:"salesManager",children:['BackChargeNotice',
      'CommissionStructure',
      'MissedLead',
      'MissedSalesGoal',
      'NewClientQuestions']},
  {main:"productionPaperWork",children:[ 'AdvanceApproval',
      'AdvanceFormRequest',
      'Agreement',
      'Application',
      'Ethics',
      'Expectations',
      'GoldenRules',
      'HarshTermination',
      'MutualTermination',
      'NewWorkerExpectations',
      'Notice1',
      'Notice2',
      'Notice3',
      'SiteRules',
      'Termination']},
  {main:"legal",children: [ 'BreachOfContract',
      'BreachOfNonDisclosure',
      'ClaimOfLien',
      'DrugTestConsent',
      'DrugTestNotice',
      'NonDisclosureAgreement',
      'ReleaseAgreement']}
]*/
let routes = [
  { path: "/accounting", component: AccountingLetter },
  {path:'/accounting/Invoice',component:Invoice},
  {path:'/accounting/JobCost',component:JobCost},
  {path:'/accounting/SupplierPurchaseOrder',component:SupplierPurchcaseOrder},
  { path: "/legal", component: LegalLetter },
  {path:"/subContractPaperWork",component:SubContractPaperWork},
  {path:"/subContractPaperWork/subContract",component:SubContract},
  {path:"/subContractPaperWork/JobCost",component:SubContractJobCost},
  {path:"/subContractPaperWork/PointOfContact",component:PointOfContact},
  {path:"/subContractPaperWork/Termination",component:SubContractTermination},
  {path:"/system99Calculator",component:System99Calculator},
  {path:"/system99Calculator/Mesurments",component:Mesurments},
  {path:"/system99Calculator/ComissionSheet",component:ComissionSheet},
  {path:"/system99Calculator/Material",component:Material},
  {path:"/system99Calculator/Pricing",component:Pricing},
  {path:"/safetyPaperWork",component:SafetyPaperWork},
  {path:"/safetyPaperWork/incidentReport",component:IncidentReport},
  {path:"/safetyPaperWork/safetyViolation",component:SafetyViolation},
  {path:"/safetyPaperWork/safetyInspiration",component:SafetyInspiration},

  {path:"/safetyPaperWork/incidentReport",component:IncidentReport},

  { path: "/officeManager", component: OfficeManager },
  { path: "/officeManager/AdditionalWorkOrder", component: AdditionalWorkOrder },
  { path: "/officeManager/CompletionCert", component: CompletionCert },
  { path: "/officeManager/HighTrafficArea", component: HighTrafficArea },
  { path: "/officeManager/LearnWaver", component: LearnWaver },
  { path: "/officeManager/PunchOutOf15", component: PunchOutOf15 },
  { path: "/officeManager/PunchOutOf60", component: PunchOutOf60 },
  { path: "/officeManager/ThankYouLetter", component: ThankYouLetter },
  { path: "/officeManager/Warranty", component: Waranty },
  { path: "/productionPaperWork", component: ProductionPaperWork },
  { path: "/salesManager", component: SalesLetter },
  { path: "/salesManager/BackChargeNotice", component: BackChargeNotice },
  { path: "/salesManager/CommissionStructure", component: CommissionStructure },
  { path: "/salesManager/MissedLead", component: MissedLead },
  { path: "/salesManager/MissedSalesGoal", component: MissedSalesGoal },
  { path: "/salesManager/NewClientQuestions", component: NewClientQuestions },
  { path: "/productionPaperWork/AdvanceApproval", component: AdvanceApproval },
  { path: "/productionPaperWork/AdvanceFormRequest", component: AdvanceFormRequest },
  { path: "/productionPaperWork/Agreement", component: Agreement },
  { path: "/productionPaperWork/Application", component: Application },
  { path: "/productionPaperWork/Ethics", component: Ethics },
  { path: "/productionPaperWork/Expectations", component: Expectations },
  { path: "/productionPaperWork/GoldenRules", component: GoldenRules },
  { path: "/productionPaperWork/HarshTermination", component: HarshTermination },
  { path: "/productionPaperWork/MutualTermination", component: MutualTermination },
  { path: "/productionPaperWork/NewWorkerExpectations", component: NewWorkerExpectations },
  { path: "/productionPaperWork/Notice1", component: Notice1 },
  { path: "/productionPaperWork/Notice2", component: Notice2 },
  { path: "/productionPaperWork/Notice3", component: Notice3 },
  { path: "/productionPaperWork/SiteRules", component: SiteRules },
  { path: "/productionPaperWork/Termination", component: Termination },
  { path: "/legal/BreachOfContract", component: BreachOfContract },
  { path: "/legal/BreachOfNonDisclosure", component: BreachOfNonDisclosure },
  { path: "/legal/ClaimOfLien", component: ClaimOfLien },
  { path: "/legal/DrugTestConsent", component: DrugTestConsent },
  { path: "/legal/DrugTestNotice", component: DrugTestNotice },
  { path: "/legal/NonDisclosureAgreement", component: NonDisclosureAgreement },
  { path: "/legal/ReleaseAgreement", component: ReleaseAgreement },
]
 routes = routes.map(route => ({
  ...route,
  path: `/formLetters${route.path}`, // Append "formLetters" to the path
}));
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const user = useSelector((state) => state.auth);

  return (
    <Router>
      <Header />

      <Suspense fallback={<InlineLoading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/check-status" component={InvalidStatus} />
          <Route exact path="/check-role" component={InvalidRole} />
          <Route exact path="/calculators/gutters" component={Gutters} />
          <Route exact path="/calculators/walls" component={Walls} />
          <Route exact path="/calculators/hotTubPad" component={HotTubPad} />
          <Route exact path="/calculators/laticalPanel" component={LaticalPanel} />
          <Route exact path="/calculators/homeWrap" component={HomeWrap} />
          <Route exact path="/calculators/vinylSiding" component={VinylSiding} />
          <Route exact path="/calculators/corners" component={Corners} />
          <Route exact path="/calculators/sheetSiding" component={SheetSiding} />
          <Route exact path="/calculators/soffit" component={Soffit} />
          <Route exact path="/calculators/pergolaShade" component={PergolaShade} />
          <Route exact path="/calculators/friezeBoard" component={FriezeBoard} />
          <Route exact path="/calculators/plankSiding" component={PlankSiding} />
          <Route exact path="/calculators/fascia" component={Fascia}/>
          <Route exact path="/calculators/stuccoWallCovering" component={StuccoWallCovering}/>
          <Route exact path="/calculators/brickWallCovering" component={BrickWallCovering}/>
          <Route exact path="/calculators/porchCeiling" component={PorchCeiling}/>
          <Route exact path="/calculators/starFraming" component={StairFraming}/>
          <Route exact path="/calculators/fencing" component={Fencing}/>
          <Route exact path="/calculators" component={Calculations} />
          <Route exact path={"/products"} component={Products}/>
          <Route exact path={'/products/edit/:id'} component={AddProduct}/>
          <Route exact path={'/products/create'} component={AddProduct}/>
          <Route exact path="/formLetters" component={FormLetters}/>
          {routes.map((route,index)=><Route key={index}
                                            path={route.path} exact
                                            render={()=><Box sx={{maxWidth:900,margin:"10px auto"}}>
                                              <route.component/></Box>}
                                             />
          )}
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />

          {user.user?.role === 'admin' && user.user?.status === 'approved' && (
            <Route exact path="/admin" component={AdminPage} />
          )}

          {/* Office Manager Router */}
          <PrivateRoute user={user} allowedRole="office" exact path="/office/paper">
            <OfficePaper />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="office" exact path="/office/safety">
            <OfficeSafety />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="office" exact path="/office/supplier">
            <OfficeSupplier />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="office" exact path="/office/equipment-inventory">
            <OfficeEquipment />
          </PrivateRoute>

          {/* Production Manager Router */}
          <PrivateRoute user={user} allowedRole="production" path="/production/subcontractor">
            <ProductionSubContractor />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="production" path="/production/employee">
            <ProductionEmployee />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="production" path="/production/service">
            <ProductionService />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="production" path="/production/training">
            <ProductionTraining />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="production" path="/production/pictures">
            <ProductionPictures />
          </PrivateRoute>

          {/* Sales Manager Router */}
          <PrivateRoute user={user} allowedRole="sales" path="/sales/system">
            <SalesSystem />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="sales" path="/sales/quotes">
            <SalesQuotes />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="sales" path="/sales/materials">
            <SalesMaterials />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="sales" path="/sales/presentations">
            <SalesPresentations />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="sales" path="/sales/constructions">
            <SalesConstruction />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="sales" path="/sales/communications">
            <SalesCommunications />
          </PrivateRoute>

          {/* Corporate Manager Router */}
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/customer-archives">
            <CustomerArchives />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/manager-training">
            <Training />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/accounting">
            <Accounting />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/legal">
            <Legal />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/fedral-gov/irs"
          >
            <IrsComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/fedral-gov/epa"
          >
            <EpaComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/fedral-gov/fbi"
          >
            <FbiComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/state-gov/secretary"
          >
            <SecretaryComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/state-gov/comptroller"
          >
            <ComptrollerComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/county-gov/property"
          >
            <PropertyTaxComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/county-gov/vehicle"
          >
            <VehiclesTaxComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/gov-docs/local-gov/permits"
          >
            <PermitsComponent />
          </PrivateRoute>

          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/insurance-docs/liability"
          >
            <LiabilityComponent />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/insurance-docs/health">
            <HealthComponent />
          </PrivateRoute>
          <PrivateRoute user={user} allowedRole="corporate" path="/corporate/insurance-docs/auto">
            <AutoComponent />
          </PrivateRoute>
          <PrivateRoute
            user={user}
            allowedRole="corporate"
            path="/corporate/insurance-docs/business"
          >
            <BusinessComponent />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default memo(App);
