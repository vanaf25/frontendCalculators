// SignUp.js
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../redux/actions/authAction';
import Select from 'react-select';
import styles from './Auth.module.scss';
import {validateForm} from "../../utils/authValidation";
import useForm from "../../hooks/useForm";
import {useState} from "react";
import InputField from "../../components/global/InputField/InputField";
const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '60%',
  }),
  control: () => ({
    width: 292,
    display: 'flex',
    background: '#0d0e16',
    border: 'none',
    fontFamily: 'Gilroy-Medium',
    fontSize: '14px !important',
    padding: '0px 4px !important',
    height: '50px',
    borderRadius: '8px',
    color: '#fff',
  }),
  menu: (provided) => ({
    ...provided,
    color: '#000',
    padding: 10,
    marginTop: '-10px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'var(--red)' : '#000',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#fff';
    return { ...provided, opacity, transition, color };
  },
};

const options = [
  { value: 'office', label: 'Office Manager' },
  { value: 'production', label: 'Production Manager' },
  { value: 'sales', label: 'Sales Manager' },
  { value: 'corporate', label: 'Corporate Manager' },
];

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (input) => {
    const { isValid, errors } = validateForm(input);
    if (isValid) {
      dispatch(signUp({ email: input.email,
        password: input.password, role: selectedRole, status: 'pending' }));
      history.push('/sign-in');
    }
    return { isValid, errors };
  };

  const { input, errors, handleChange, handleSubmit } = useForm(
    { email: '', password: '', confirmPw: '' },
    onSubmit,
  );

  const [selectedRole, setSelectedRole] = useState(options[0].value);

  if (auth.user?.status === 'approved') return <Redirect to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <div className={styles.authList}>
              <label htmlFor="role" className={styles.title}>
                Select a role
              </label>
              <Select
                styles={customStyles}
                options={options}
                name="role"
                defaultValue={options[0]}
                components={{
                  IndicatorSeparator: () => null,
                }}
                onChange={(selected) => setSelectedRole(selected.value)}
              />
            </div>

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
            <InputField
              label="Confirm Password"
              name="confirmPw"
              type="password"
              value={input.confirmPw}
              onChange={handleChange}
              error={errors.match || errors.confirmPw}
            />
          </div>
          <button type="submit" className={styles.button}>
            Create an account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
