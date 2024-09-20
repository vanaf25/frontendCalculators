import styles from './InputField.module.scss';

const InputField = ({ label, name, type = 'text', value, onChange, error }) => (
  <>
  <div className={styles.authList}>
    <label htmlFor={name} className={styles.title}>
      {label} <span className={styles.required}>*</span>
    </label>
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
    {error && <p className={styles.alertTxt}>{error}</p>}
  </>
);

export default InputField;

