import React from 'react';
import image from '../assets/IMG_20231031_204103_727.jpg'


const PersonalInfo = () => {
    return(
        <div classname="personal-info container mt-5">
            <div className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                        src={image}
                        alt='Sara-Sofia Paananen'
                        className="img-fluid rounded-start"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Personal Information</h2>
                            <p className="cars-text">
                                <strong>Name:</strong> Sara-Sofia Paananen
                            </p>
                            <p className="card-text">
                                <strong>Email:</strong> sara-sofia.paananen@student.hamk.fi
                            </p>
                            <p className="card-text">
                                <strong>Number:</strong> +35800223344
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;