import React from 'react'
import img3 from '../../Assets/images/image3.jfif'
import Select from 'react-select';
import ErrorText from '../ErrorText/ErrorText';

// if website has more forms then we can make form component where we will pass array of objects (like formArray) and form will automatically generated (it will take time to make like such type of component but its worth)

// form validation can be improved

// const formArray = [
//   {type: 'input', required: true, placeholder: 'Enter quantity', ...},
//   {type: 'select', required: true, placeholder: 'Select Factory', ...},
// ]

export default function ModalForm({formData, setFormData}) {
    
    const options1 = [
        {value: 'Ananya Creations', label: 'Ananya Creations'},
        {value: 'Raj Creations', label: 'Raj Creations'},
        {value: 'Saurabh Creations', label: 'Saurabh Creations'},
        {value: 'Bansal Creations', label: 'Bansal Creations'},
      ]
      const options2 = [
        {value: 'Design name 1', label: 'Design name 1', subText: 'DM-8 '},
        {value: 'Design name 2', label: 'Design name 2', subText: 'DM-2 '},
        {value: 'Design name 3', label: 'Design name 3', subText: 'DM-8 '},
        {value: 'Design name 4', label: 'Design name 4', subText: 'DM-23 '},
        {value: 'Design name 5', label: 'Design name 5', subText: 'DM-52 '},
        {value: 'Design name 6', label: 'Design name 6', subText: 'DM-18 '},
      ]
    
      const MyOption = props => {
        const {innerRef, innerProps} = props;
        // debugger
        return (
          <div ref={innerRef} {...innerProps} className={`custom-option ${props.isSelected ? 'selected' : '' }  ${props.isFocused ? 'focused' : ''}`}>
            {/* <h4>{props.data.value}</h4>
            <div className="sub">{props.data.label} </div> */}
            <div className="custom-option">
              <img src={img3} className="image" alt=""/>
              <div className="details">
                <p className='text'>{props.data.value}</p>
                <p className='sub-text'>{props.data.subText}</p>
              </div>
            </div>
          </div>
        );
      };
    
    return (
        
            <div className="form">
            <div className="custom-form-group mt-4">
                <label htmlFor="cars">Factory</label>
                <Select
                    className={`basic-single ${formData.factoryError ? 'error-border': ''}`}
                    classNamePrefix="select"
                    // defaultValue={options1[0]}
                    name="color"
                    // menuIsOpen={true}
                    placeholder="Select Factory"
                    options={options1}
                    value={formData.factory ? {value: formData.factory, label: formData.factory } : null}
                    onChange={(val ) => setFormData({factory: val.value, factoryError: false })}
                    />
                <ErrorText isError={formData.factoryError} text="required" />
            </div>
            <div className="custom-form-group mt-4">
                <label htmlFor="cars">Assign for design*</label>
                <Select
                    className={`basic-single-custom ${formData.designNameError ? 'error-border' : ''}`}
                    classNamePrefix="select"
                    // defaultValue={options2[0]}
                    name="color"
                    // menuIsOpen={true}
                    placeholder="Search by Name or Design ID"
                    options={options2}
                    components={{Option: MyOption}}
                    value={formData.designName ? {value: formData.designName, label: formData.designName } : null}
                    onChange={(val ) => setFormData({designName: val.value, designNameError: false })}
                    />
                <ErrorText isError={formData.designNameError} text="required" />
            </div>
            <div className="row">
                <div className="custom-form-group mt-4 col-sm-6">
                    <label htmlFor="quantity">Assign quantity*</label>
                    <input value={formData.quantity ? formData.quantity : ''} onChange={(e) => setFormData({quantity: e.target.value, quantityError: false})} id="quantity" type="number" className={`form-control ${formData.quantityError ? 'error-border' : ''}`} placeholder="Enter Quantity"></input>
                    <ErrorText isError={formData.quantityError} text={formData.quantity > formData.avaliableQuantity ? "can't excced avaliable inventory" : 'required'}  />
                </div>
                <div className="custom-form-group mt-4 col-sm-6">
                    <label>Available Inventory</label>
                    <div className="mt-2">{formData.avaliableQuantity} meter</div>
                </div>
            </div>
            <div className="row">
                <div className="custom-form-group mt-4 col-sm-6">
                    <label>Attach Challan*</label>
                    {formData.challan ? 
                    <div className="file-uploaded">
                      {/* {formData.challan.filename} */}
                      <span>file_name.pdf</span>
                      <i className="fa fa-eye"></i>
                    </div> :
                    <div className="custom-file custom-file-upload">
                        <input onChange={(e) => setFormData({challan: e.target.files[0], challanError: false})} type="file" className="custom-file-input" id="file" />
                        <label className={`custom-file-label ${formData.challanError ? 'error-border' : ''}`} htmlFor="file">Select File</label>
                        <ErrorText isError={formData.challanError} text="required"  />
                    </div>}
                </div>
            </div>
            </div>
        
    )
}
