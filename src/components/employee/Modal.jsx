import React from 'react';

const Modal = props => {
    const { employee } = props;

    return(
        /*
            Basic Bootstrap Modal for quick implemenation
            Minor modifications for use case
        */
       
        <>
            <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLongTitle">{employee.name.title} {employee.name.first} {employee.name.last}</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="flex-container">
                            <img src={employee.headshot.large} alt={employee.name.first}/>

                            <div className="flex-column modal-contents">
                                <p> <strong>Date Start:</strong>  {employee.date_started}</p>
                                <p> <strong>Department:</strong>  {employee.department}</p>
                                <p> <strong>Title:</strong> {employee.job_title}</p>
                                <p> <strong>Address:</strong> {employee.location.street} {employee.location.city}, {employee.location.state}. {employee.location.postcode} </p>
                                <p> <strong>Phone</strong> {employee.phone}</p>
                            </div>
                        </div>

                        <ul className="flex-container">
                            <p><strong>Skill Set:</strong></p>
                            {employee.skills.map(skill => <li key={`${props.id}-${Math.random()}`}>{skill.id}</li>)}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;