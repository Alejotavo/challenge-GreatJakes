import  { FC, ReactNode } from 'react'; // Asegúrate de importar FC y ReactNode
import { Button } from 'react-bootstrap';
import styles from './button.module.scss';

interface MainButtonProps {
  variant: 'primary' | 'secondary' | 'disable'; // Especifica los posibles valores para la variante
  children: ReactNode; // Define el tipo para children
}



const MainButton: FC<MainButtonProps> = ({ variant, children }) => {
    return (
      <Button className={`${styles.button} ${styles[variant]}`}>
        <div className='truncated-text'>{children}</div>
      </Button>
    );
  };
export default MainButton
