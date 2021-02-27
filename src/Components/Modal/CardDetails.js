import React from 'react'
import { Modal } from 'react-bootstrap'
import './CardDetails.scss'
import Button from '../Button/Button'
import img3 from '../../Assets/images/image3.jfif'
import Arrow from '../Arrow/Arrow'
import ModalForm from './ModalForm'
import CompletedForm from '../CompletedForm/CompletedForm'

export default class  CardDetails extends React.Component{

  state = {
    factory: '',
    factoryError: false,
    designName: '',
    designNameError: false,
    quantity: 0,
    quantityError: false,
    challan: null,
    challanError: false,

    avaliableQuantity: 1650,

    formCompleted: false
  }


   validateForm = () => {
    const {factory, designName, quantity, challan, avaliableQuantity} = this.state
    let isValid = true;
    if(!factory.length){
      this.setState({factoryError: true})
      isValid = false;
    }
    if(!designName.length){
      this.setState({designNameError: true})
      isValid = false;
    }
    if(!quantity.length || parseInt(quantity) > avaliableQuantity){
      this.setState({quantityError: true})
      isValid = false;
    }
    if(!challan){
      this.setState({challanError: true})
      isValid = false;
    }

    return isValid

  }

   submitForm = () => {
    if(this.validateForm()){
      this.setState({formCompleted: true})
    }
  }

  finalSubmission = () => {
    alert('form has been submitted')
    this.props.closeModal()
  }

  render(){
    const {formCompleted} = this.state
    return (
        <Modal
          size="lg"
          show={this.props.show}
          onHide={this.props.closeModal}
          backdrop="static"
          keyboard={false}
          dialogClassName="card-details-modal"
        >
        <Modal.Header closeButton>
          <Modal.Title>Material Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 col-lg-4 image">
              <img className="img-fluid" src={img3} alt=""/>
            </div>
            <div className="col-12 col-lg-8 left-content pl-lg-5">
              <h3 className="d-flex align-items-center">
                <Arrow />
                <span className="ml-3">Assign to factory</span>
              </h3>
              {!formCompleted ? 
                <ModalForm formData={this.state} setFormData={(obj) => this.setState(obj)} /> :
                <CompletedForm formData={this.state} />}
            </div>
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button className={'btn-white'} onClick={() => this.setState({formCompleted: false})} > Back</Button>
          {formCompleted ?  
           <Button onClick={this.finalSubmission} className={'btn-primary'}>ASSIGN TO FACTORY</Button> :
          <Button onClick={this.submitForm} className={'btn-grey'}>Next</Button>
          }
        </Modal.Footer>
      </Modal>
    )
  }

}
