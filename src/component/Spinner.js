import React, { Component } from 'react'
import {spinner} from '../consants/assets';

export class Spinner extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                    <img src={spinner} alt='loading' />
                </div>
            </>
        )
    }
}

export default Spinner
