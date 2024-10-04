import { Modal } from 'react-bootstrap';
import './modal.scss'
import MainButton from '../button/button';
import './../button/button.module.scss';

function ModalComponent() {
    return (
        <Modal.Dialog className='custom-modal-container'>
          <Modal.Header closeButton>
            <Modal.Title><h3>Firm Facts</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="grid-container">
            <div className="grid-item grid-item-tall  btn-content white"><MainButton variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
            <div className="grid-item btn-content green"> <MainButton variant="secondary">LoreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante r</MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="disable">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
            <div className="grid-item btn-content white"> <MainButton variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante leo. Nulla nec lectus accumsan ante </MainButton></div>
        </div>
          </Modal.Body>
        </Modal.Dialog>
    );
  }
export default ModalComponent
