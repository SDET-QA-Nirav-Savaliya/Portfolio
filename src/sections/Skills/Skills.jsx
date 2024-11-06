import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Selenium" />
        <SkillList src={checkMarkIcon} skill="Appium" />
        <SkillList src={checkMarkIcon} skill="Cypress" />
        <SkillList src={checkMarkIcon} skill="TestNG" />
        <SkillList src={checkMarkIcon} skill="DevOps[CI/CD]" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Apache JMeter" />
        <SkillList src={checkMarkIcon} skill="Postmen" />
        <SkillList src={checkMarkIcon} skill="SoapUI" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="DSA" />
      </div>
      <hr />
      <div className={styles.skillList}> 
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="GIT" />
        <SkillList src={checkMarkIcon} skill="Bitbucket" />
        <SkillList src={checkMarkIcon} skill="YouTrack" />
        <SkillList src={checkMarkIcon} skill="Asana" />
        <SkillList src={checkMarkIcon} skill="Jira" />
        <SkillList src={checkMarkIcon} skill="Bugzilla" />
      </div>
    </section>
  );
}

export default Skills;
