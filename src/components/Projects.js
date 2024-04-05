import React from 'react';

const Projects = () => {
    const educations = [
        {
            id: 1,
            project: "Website project",
            description: "In groups we created a layout of a website we wanted to create. From there we started to design it with css and html.",
            year: "1st year of Univeristy fall 2022"
        },
        {
            id: 2,
            project: "Applied Application Project",
            description: "In groups we used object oriented programming to be able to programme a Lego/Lejos robot to be able to follow a line, detect objects and avoid objects.",
            year: "1st year of Univeristy spring 2023"
        },
        {
            id: 3,
            project: "Customer Projects",
            description: "In groups we worked for a client in Hotel Waltikka which is situated in Valkeakoski. They wanted us to better their alert systems for their rooms about temperature and humidity.",
            year: "2nd year of University fall 2023"
        },
        {
            id: 4,
            project: "Web Framework Project",
            description: "In groups we're making a website using Node.js and CRUD API methods.",
            year: "2nd year of University spring 2023"
        }
    ];

    return(
        <div className="projects container mt-5">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.project}</h5>
                            </div>
                            <div className="card-body">
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

export default Projects;