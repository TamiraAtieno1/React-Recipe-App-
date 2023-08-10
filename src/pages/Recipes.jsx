import React from "react";

const Recipes = () => {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biryani', 'salad', 'icecream', 'lasagna', 'pudding', 'soup']
    return(
        <div>
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map(search => (<div className="search-item">
                        {search}
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Recipes;