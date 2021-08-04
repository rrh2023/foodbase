import React, {Fragment} from 'react'
import loader from './loader.gif'

const Spinner = () => {
    return (
        <div className="spinner">
            <Fragment>
                <img src={loader} alt="Loading..." 
                style={{width: '200px', margin: 'auto', display: 'block'}} />
            </Fragment>
        </div>
    )
}

export default Spinner
