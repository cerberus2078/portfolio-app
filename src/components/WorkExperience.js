import React from 'react';

const WorkExperience = () => {
    const educations = [
        {
            id: 1,
            job: "Daycare assistant",
            description: "This was my TET work place. I helped with entertaining the kids and supervising them.",
            year: "2016"
        },
        {
            id: 2,
            job: "Kotipizza",
            description: "A pizza chain which I worked for as a cleaner, made pizza and delivered pizza by car.",
            year: "2018-2020"
        },
        {
            id: 3,
            job: "Alibaba Pub & Restaurant",
            description: "A small restaurant/pub where I served customers drinks, made food and cleaned.",
            year: "2020"
        },
        {
            id: 4,
            job: "Posti",
            description: "Drove a car to deliver mail.",
            year: "2021-2025"
        }
    ];

    return(
        <div className="workExperience container mt-5">
            <h2 className="mb-4">WorkExperience</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.job}</h5>
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

export default WorkExperience;