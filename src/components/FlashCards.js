import React from 'react';

const FlashCards = () => {
    return(
        <div>
            <div className = "head mx-5 mt-5">
                <div><h4>Flash Cards</h4></div>
                <div><button className = "btn">More</button></div>
            </div>
            <div className = "mx-5">
                <div className = "row mt-3" id = "roww">
                    <div className = "col my-3 flash-card bg-white ml-3">
                        <div className = "my-4 py-5 px-1 text-center" id = "inner-card"><h5>Chemistry</h5></div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3">
                        <div className = "my-4 py-5 px-1 text-center" id = "inner-card"><h5>Physics</h5></div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3">
                        <div className = "my-4 py-5 px-1 text-center" id = "inner-card"><h5>Biology</h5></div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 mr-3">
                        <div className = "my-4 py-5 px-1 text-center" id = "inner-card"><h5>Mathematics</h5></div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default FlashCards;