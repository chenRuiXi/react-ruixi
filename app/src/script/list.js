/**
 * Created by ruixi on 2017/4/11.
 */

import React from 'react';


console.log(process.env.NODE_ENV);

class List extends React.Component{
    constructor(props, context) {//构造器
        super(props, context);
        
        this.state={
            data: null,
            title: null,
            contentType: null,
            connectError: false,
            showIndex: false
        }
    }

    componentWillMount() { //组件第一次加载时
        
    }

    

    componentDidMount () {
        
    }
    
    render(){
        return (
            <div className='list-body'>
               
            </div>
        )
    }
}
export default List;