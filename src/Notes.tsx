import * as React from 'react'
import {Card} from 'antd'
import INotesProps from './typings/INotesProps'
class Notes extends React.Component<INotesProps,any>{
    public render(){
        return(
            <div>
                <Card title={this.props.title}>
                    <p>{this.props.content}</p>
                </Card>
            </div>
        )
    }
}

export default Notes