import React from 'react'
import './CompletedForm.scss'

export default function CompletedForm({formData}) {
    const {factory, designName, quantity,  } = formData
    return (
        <div className="completed-form">
            <div className="custom-alert w-100 my-4 text-center text-md-left"><i className="fa fa-info-circle bg-white text-black mx-2 color-blue"></i>You won’t be able to change the details later.</div>
            <div className="item">
                <p className="field-name">Factory</p>
                <p className="field-value mb-0">{factory}</p>

            </div>
            <div className="item">
                <p className="field-name">Assign for design</p>
                <p className="field-value">{designName}</p>

            </div>
            <div className="item">
                <p className="field-name">Assign quantity</p>
                <p className="field-value">{quantity} meter</p>
            </div>

            <div className="file-uploaded w-50">
                <span>file_name.pdf</span>
                <i className="fa fa-eye"></i>
            </div> 
        </div>
    )
}
