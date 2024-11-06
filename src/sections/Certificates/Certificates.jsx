import styles from './CertificateStyles.module.css'
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
import CertificatesList from '../../common/CertificatesList';
// import { useTheme } from '../../common/ThemeContext';

function Certificates() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="role" className={styles.container}>
      <h1 className="sectionTitle">CERTIFICATES</h1>

        <div className={styles.RoleListList}>
        <CertificatesList skill="● Robot Framework with Python- Selenium/API Automation Testing." />
        <CertificatesList skill="● Agile Methodologies." />
        <CertificatesList skill="● End-to-end JavaScript Testing with Cypress.io" />
      </div>
    </section>
  );
}

export default Certificates;


// src={checkMarkIcon} 