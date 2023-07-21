import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.box}>
      <div>
        {/* <h1 className={styles.fraseBienvenida}>Welcome</h1> */}
        <span className={styles.frase}>"COOK, CREATE, ENJOY!"</span>
        
        <button className={styles.button}>
          <Link to="/home">GO!</Link>
          </button>
      </div>
    </div>
  );
};

export default Landing;

