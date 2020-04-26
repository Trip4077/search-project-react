import React from 'react';
import Modal from './Modal';

const Preview = props => {
    const { employee } = props;
    const id_config = `${employee.id}-${employee.name.last}`

    return(
        <div className="employee-preview">
            <div className="employee-field column">
                <img src={employee.headshot.medium} alt={employee.name.first} />
                <button type="button" className="button" data-toggle="modal" data-target={`#${id_config}`}>
                    Full Info
                </button>
            </div>
            

            <div className="flex-container employee-fields--mobile">
                <div className="employee-field">
                    <h4>Name:</h4>
                    <p>{employee.name.last}, {employee.name.first}</p>
                </div>

                <div className="employee-field">
                    <h4>Title:</h4>
                    <p>{employee.job_title}</p>
                </div>

                <div className="employee-field">
                    <h4>Department:</h4>
                    <p>{employee.department}</p>
                </div>
                
                <div>
                    <Modal key={`${id_config}`} id={ id_config } employee={employee}/>
                </div>
            </div>
        </div>
    )
}

export default Preview;