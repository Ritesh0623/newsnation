import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            articales : this.articals,
            loading  : false
        }
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h3>News Nation - Top Headlines</h3>
                    <div className='row'>
                        <div className='col-md-4'>
                            <NewsItem title='My News Nation' description='This is my first News' imageUrl='https://assets3.cbsnewsstatic.com/hub/i/r/2023/10/11/1df8a41e-c6da-4ff4-af93-4296aa811267/thumbnail/1200x630/ceefbf365a21e71fa1a83c453ca705d9/israel-kafr-azah-1728299508.jpg?v=69042d5753ca4b526d6a54f60ee177ca' />
                        </div>
                        <div className='col-md-4'>
                            <NewsItem title='My News Nation' description='This is my first News' />
                        </div>
                        <div className='col-md-4'>
                            <NewsItem title='My News Nation' description='This is my first News' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default News
