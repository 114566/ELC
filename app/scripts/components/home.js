/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="home">
                <div className="content">

                    {
                        this.props.SearchedData.length > 0 ? this.props.SearchedData.map((data, index) => {
                            return <div key={index} className="card">
                                <div className='card-img'>
                                    <img src={data.picture} alt={data.picture} />
                                </div>
                                <div className='card-title'>
                                    <h1>
                                        {data.name}
                                    </h1>
                                </div>
                                <div className='card-tags'>
                                    {data.tags.map((tagValue, index) => {
                                        return <div className='card-tags-value'>{tagValue}</div>
                                    })}
                                </div>
                                <div className='card-descrition'>
                                    {data.about}
                                </div>
                                <div className='card-price'>
                                    <span className='price'>{data.price}$</span> {data.isActive == 'true' ? <span className='activity' title='Active'></span> : <span className='inactivity' title='Inactive'></span>}
                                </div>
                            </div> 
                        })  : <div className='noData' style={{display : this.props.isSearched == true ? 'block' : 'none' }}>No Data</div>
                    }
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;