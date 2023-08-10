import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearches = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    const searches = ['chilli', 'chicken', 'cookies', 'fish', 'cake', 'salad', 'beef', 'pudding', 'soup'];
    return(
        <div>
            <div className="previous-searches section">
                <h2>Popular Searches</h2>
                <div className="previous-searches-container">
                    {searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                        {search}
                    </div>))}
                </div>
                <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <input 
                        value={query}
                        placeholder="Search ..."
                        name="query"
                        disabled={isLoading}
                        onChange={(event) => setQuery(event.target.value)}
                    />   
                    <button className="btn" disabled={isLoading || !query}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                    {/* <input type="text" placeholder="Search ..." />
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default PreviousSearches;