import { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const user = rest.user.user;
  const allowedRole = rest.allowedRole;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.id ? (
          allowedRole === user?.role || user?.role === 'admin' ? (
            user.status === 'approved' ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/check-status',
                  state: { from: location },
                }}
              />
            )
          ) : (
            <Redirect
              to={{
                pathname: '/check-role',
                state: { from: location },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// const PrivateRoute = ({ allowedRole, ...routeProps }) => {
//   console.log(allowedRole);

//   const user = useSelector((state) => state.auth);
//   console.log(user);

//   // if (!user?.id) {
//   //   console.log(111);
//   //   return <Redirect to="/sign-in" />;
//   // } else if (
//   //   (allowedRole === user?.role || user?.role === 'admin') &&
//   //   user?.status === 'approved'
//   // ) {
//   //   console.log(222);
//   //   return <Route {...routeProps} />;
//   // } else {
//   //   console.log(333);
//   //   return <Redirect to="/check-role" />;
//   // }

// !user?.id ? (
//   <Redirect to="/sign-in" />
// ) : allowedRole === user?.role || user?.role === 'admin' ? (
//   user.status === 'approved' ? (
//     <Route {...routeProps} />
//   ) : (
//     <Redirect to="/check-status" />
//   )
// ) : (
//   <Redirect to="/check-role" />
// );
// };

export default memo(PrivateRoute);
