import React from 'react';

const EducationalBackground = () => {
    const educations = [
        {
            id: 1,
            institution: "Sawnee Elementary",
            degree: "Elementary School",
            year: "2007-2013"
        },
        {
            id: 2,
            institution: "Finnish International School of Tampere",
            degree: "Middle School",
            year: "2013-2018"
        },
        {
            id: 3,
            institution: "Valkeakosken Tietotien Lukio",
            degree: "High School",
            year: "2018-2022"
        },
        {
            id: 4,
            institution: "Hämeen University of Applied Sciences",
            degree: "Bachelors of Business Administration",
            year: "2022-2025"
        }
    ];

    return(
        <div className="educational-background container mt-5">
            <h2 className="mb-4">EducationalBackground</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {education.degree}    
                                </h6>   
                                <p className="card-text">{education.description}</p>

                            </div> 
                            <div className="card-footer text-muted">
                                <small>{education.year}</small>
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationalBackground;