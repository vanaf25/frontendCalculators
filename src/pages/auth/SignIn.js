// SignIn.js
import { useDispatch, useSelector } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { signIn } from '../../redux/actions/authAction';
import styles from './Auth.module.scss';
import {validateForm} from "../../utils/authValidation";
import useForm from "../../hooks/useForm";
import InputField from "../../components/global/InputField/InputField";
const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (input) => {
    const { isValid, errors } = validateForm(input);
    if (isValid) {
      dispatch(signIn(input));
    }
    return { isValid, errors };
  };

  const { input, errors, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    onSubmit,
  );

  if (auth.user?.id) return <Redirect to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <InputField
              label="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <div className={styles.signInSection}>
            Don&lsquo;t have an account? &nbsp;
            <Link to="/sign-up" className={styles.signIn}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
