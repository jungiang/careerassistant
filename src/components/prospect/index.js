import React, { Component } from 'react';
import AddJobProspect from './add_job_prospect';
import axios from 'axios';
import { SubmissionError } from 'redux-form';
import Modal from '../general/modals/modal';

class Prospect extends Component {
    state={
        errorMsg: '',
        error: false
    }
    componentDidMount(){
        this.props.handlePageRender('Job Tracker');
    }
    goToTracker = () => {
        this.props.history.push('/tracker');
    }

    handleAdd = async values => {
        let newContact = [];
            for (let object in values) {
                if (typeof values[object] === 'object')
                    newContact.push(values[object]);
            }
            values = {
                progress: values.progress,
                company: values.company,
                title: values.title,
                link: values.link,
                contact: newContact,
                note: values.note
            }
            let resp = null;
            if(localStorage.getItem('guest_id') && localStorage.getItem('guestSignedIn')){
                const guestValues = {...values, guest: true};
                resp = await axios.post('/api/add_tracker_item.php', guestValues)
            }else{
                debugger;
                resp = await axios.post('/api/add_tracker_item.php', values);
            }
            if(!resp.data.success){
                this.setState({
                    errorMsg: resp.data.error,
                    error: false
                })
                this.props.history.push('/account/sign-up');
            }else{
                this.goToTracker();
            }
    }
    closeErrorModal = ()=>{
        this.setState({
            error: false
        })
    }
    render() {
        const required = values => (values || values ? undefined : 'Required Field');
        return (
            <div className="add-form-progress">
            {this.state.error && <ErrorHandler errorMsg={this.state.errorMsg} closeError={this.closeErrorModal}/>}
                <div className="form">
                    <AddJobProspect add={this.handleAdd} goToTracker={this.goToTracker} required={required} />
                        
                </div>
            </div>
        )
    }
}


export default Prospect

