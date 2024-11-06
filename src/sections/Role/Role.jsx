import styles from './RoleStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import RoleList from '../../common/RoleList';
import { useTheme } from '../../common/ThemeContext';

function Role() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="role" className={styles.container}>
      <h1 className="sectionTitle">Role & Responbility</h1>

        <div className={styles.RoleListList}>
        <RoleList src={checkMarkIcon} skill="Investigating software bugs and interfacing with developers to resolve bugs." />
        <RoleList src={checkMarkIcon} skill="Execute manual testing & verify actual results with expected results." />
        <RoleList src={checkMarkIcon} skill="Prepare test data to cover various test scenarios." />
        <RoleList src={checkMarkIcon} skill="Develop and maintain automated test scripts to improve efficiency and test coverage." />
        <RoleList src={checkMarkIcon} skill="Reporting and tracking a bug." />
        <RoleList src={checkMarkIcon} skill="Identify, document, and prioritize defects." />
        <RoleList src={checkMarkIcon} skill="Work closely with developers and product managers." />
      </div>      
    </section>
  );
}

export default Role;
