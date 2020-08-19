import React from 'react';

const SuggestedTopics = () => {
    return(
        <div>
            <div className = "head mx-5 mt-5">
                <div><h4>Suggested Topics</h4></div>
                <div><button className = "btn">More</button></div>
            </div>
            <div className = "mx-5">
                <div className = "row mt-3" id = "roww">
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <div className = "my-2"><img src = "images/index.jpg" height = "60px" width = "100%"/></div>
                        <div className = "text-center"><h5>Geography</h5></div>
                        <div className = "head mt-4 mb-3">
                            <div><h5>10 Questions</h5></div>
                            <div><h5>2 Hr 30 Min</h5></div>
                        </div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <div className = "my-2"><img src = "images/index.jpg" height = "60px" width = "100%"/></div>
                        <div className = "text-center"><h5>Economics</h5></div>
                        <div className = "head mt-4 mb-3">
                            <div><h5>10 Questions</h5></div>
                            <div><h5>2 Hr</h5></div>
                        </div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 text-center">
                        <div className = "my-2"><img src = "images/index.jpg" height = "60px" width = "100%"/></div>
                        <div className = "text-center"><h5>History</h5></div>
                        <div className = "head mt-4 mb-3">
                            <div><h5>10 Questions</h5></div>
                            <div><h5>2 Hr</h5></div>
                        </div>
                    </div>
                    <div className = "col my-3 flash-card bg-white ml-3 mr-3 text-center">
                        <div className = "my-2"><img src = "images/index.jpg" height = "60px" width = "100%"/></div>
                        <div className = "text-center"><h5>Politics</h5></div>
                        <div className = "head mt-4 mb-3">
                            <div><h5>10 Questions</h5></div>
                            <div><h5>2 Hr 30 Min</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedTopics;