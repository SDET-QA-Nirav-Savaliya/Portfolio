import styles from './AwardsStyles.module.css'
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
import AwardsList from '../../common/AwardsList';
// import { useTheme } from '../../common/ThemeContext';

function Awards() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="role" className={styles.container}>
      <h1 className="sectionTitle">AWARDS</h1>

        <div className={styles.RoleListList}>
        <AwardsList skill="● Employee of the month September (2024) TechAbbot Technology Pvt Ltd" />
        <AwardsList skill="● Star Employee Of The Year Award (2023) TechAbbot Technology Pvt Ltd" />
        <AwardsList skill="● Appreciation Award (2021) Raj Barcode Systems Pvt Ltd" />
      </div>
    </section>
  );
}

export default Awards;


// src={checkMarkIcon} 