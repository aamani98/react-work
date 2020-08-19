import React from 'react';

const Modules = () => {
    return(
        <div>
            <div className = "head mx-5 mt-5">
                <div><h4>Modules</h4></div>
                <div><button className = "btn">More</button></div>
            </div>
            <div className = "mx-5">
                <div className = "row mt-3" id = "roww">
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <h5 className = "my-5 py-1 mx-2 px-3">Computer Graphics</h5>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <h5 className = "my-5 py-1 mx-2 px-3">Communication Systems</h5>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <h5 className = "my-5 py-1 mx-2 px-3">Database Management System</h5>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 mr-3 text-center">
                        <h5 className = "my-5 py-1 mx-2 px-3">Computer Architecture</h5>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Modules;