import React from "react";

const ImproveSkills=()=>{
    const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked"
    ]
    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/images/gallery/img_10.jpg" alt="" />
            </div>
        <div className="col typography">
            <h1 className="title">Improve Your Culinary Skills </h1>
            { list.map((item, index)=>(
                <p className="skill-item" key={index}>{item}</p>
            )) }
            <button className="btn">signup now</button>
        </div>
    </div>
    )
}

export default ImproveSkills;