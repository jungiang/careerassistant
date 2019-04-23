import React, { Component } from 'react';
import Input from '../general/input';
import { Field, reduxForm } from 'redux-form';
import NoteList from '../view_card/note_list';
import ContactList from '../view_card/contact_list';
import { formatTime } from '../helpers';
import './edit_form_card.scss';
import DropDown from '../prospect/progress';
import AddNote from '../cards/add_note_card';



class EditFormCard extends Component {

    render() {
        const { title, company, contact = [], created, link, note = [], progress, handleChange } = this.props;
        return (
            <div className="details-container">
                <form>
                    <DropDown col="s10 offset-s1 col edit-progress" />
                    <div className="row">
                        <Field id="title" col="s10 offset-s1" name="title" component={Input} onChange={handleChange} currentValue={title} label={!title && "Job Title"} />
                    </div>
                    <div className="row">
                        <Field id="company" col="s10 offset-s1" name="company" onChange={handleChange} label={!company && "Company Name"} currentValue={company} component={Input} />
                    </div>
                    <div className="row">
                        <Field id="link" col="s10 offset-s1" name="link" component={Input} onChange={handleChange} currentValue={link} name="link" label={!link && "Posting Link"} />
                    </div>
                    <NoteList note={note}/>
                    <AddNote/>
                </form>
            </div>
                )
            }
        }
        
export default reduxForm({
                    form: 'edit-job-card',
                // validate: validate
})(EditFormCard);