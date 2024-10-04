import  { FC, ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import styles from './button.module.scss';

interface MainButtonProps {
  variant: 'primary' | 'secondary' | 'disable';
  children: ReactNode;
}

const MainButton: FC<MainButtonProps> = ({ variant, children }) => {
    return (
      <Button className={`${styles.button} ${styles[variant]}`}>
        <div className='btn-data-content'>
        <i className="bi bi-search"></i> 
        <div className='truncated-text'>{children}</div>
        </div>
      </Button>
    );
  };
  
export default MainButton
