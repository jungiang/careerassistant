import React, {Component} from 'react';
import {formatTime} from '../helpers';
import './note_card.scss'

class NoteCard extends Component{
    render(){
        const {id,created,input,edit} = this.props
    return(
        <div className="row" >
            <div className="col s10 offset-s1">
                <div className="card white">
                <div className="card-content blue-grey-text">
                    <p>{input}</p>
                    <span className="card-date created right"><em>{formatTime(created)}</em></span>
                </div>
                </div>
            </div>
            
        </div>
    )
    }
}

export default NoteCard;

//{edit && <DeleteButton icon="close" classes="deletebutton"/>}