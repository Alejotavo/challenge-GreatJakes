import  { FC, ReactNode } from 'react';
import styles from './button.module.scss';

interface MainButtonProps {
  variant: 'primary' | 'disable';
  children: ReactNode;
}

const MainButton: FC<MainButtonProps> = ({ variant, children }) => {
    return (
      <button className={`${styles.button} ${styles[variant]}`}>
        <div className={styles['main-btn-content']}>
            <div className={styles['btn-data-content']}>
              <i className="bi bi-search"></i> 
              <div className={styles['text']}>{children}</div>
            </div>
          </div>
      </button>
    );
  };
  
export default MainButton
