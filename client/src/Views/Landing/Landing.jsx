import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1 className={styles.fraseBienvenida}>Hello, welcome to my Project</h1>
        <span className={styles.frase}>What you want cooking today?</span>
        <button className={styles.homeButton}><Link to="/home">Go!</Link></button>
      </div>
    </div>
  );
};

export default Landing;

