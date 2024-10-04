import { Modal } from 'react-bootstrap';
import './modal.scss'
import MainButton from '../button/button';
import './../button/button.module.scss';

function ModalComponent() {
    
    return (
        <Modal.Dialog className='custom-modal-container'>
          <Modal.Header closeButton>
            <Modal.Title><h3>Firm Facts</h3></Modal.Title>
            <button type="button" className="custom-close-btn" aria-label="Close"><i className="bi bi-x-lg"></i></button>
          </Modal.Header>
          <Modal.Body>
          <div className="grid-container">
            <div className="grid-item grid-item-tall  btn-content white"><MainButton variant="primary">This is a two lines button that terminates with </MainButton></div>
            <div className="grid-item btn-content green"> <MainButton variant="secondary">This is a two lines button that terminates with </MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="primary">This is a one line button</MainButton></div>
            <div className="grid-item btn-content display-icon white"> <MainButton variant="primary">This is a two lines button that terminates with  </MainButton></div>
            <div className="grid-item-no-flex  btn-content white pt-5"> <MainButton variant="primary">This is a two lines button that terminates with </MainButton></div>
            <div className="grid-item-no-flex  btn-content white pt-5"> <MainButton variant="disable">This is a two lines button that terminates with </MainButton></div>
            <div className="grid-item-no-flex  btn-content white pt-5"> <MainButton variant="primary">This is a two lines button that terminates with </MainButton></div>
        </div>
          </Modal.Body>
        </Modal.Dialog>
    );
  }
  
export default ModalComponent
