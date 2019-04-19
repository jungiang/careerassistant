import React, {Component,Fragment} from 'react';
import './tracker.scss';
import SmallCard from '../job_card/small-card';
import axios from 'axios';
import Header from '../general/header';
import AddButton from '../general/button';

class Status extends Component{
    state={
        modalOpen:false,
        cards:[]
    }
    componentDidMount(){
        this.getDetails();
    }
    async getDetails(){
        const resp = await axios.get('/api/get_jobcard_display.php');
        this.setState({
            cards:resp.data.data
        })
    }
    handleAdd(){
        console.log('add form here')
    }
    render(){
        const {progress, id}=this.props;
        const cards = this.state.cards.filter((card)=>{
            return card.progress === progress
        }).map((card)=>{
            return (
                <SmallCard key={card.id} {...card}/>
            )
        })
        
        return(
            <Fragment>
                <div className="job-container show-on-medium-and-up" id={id}>
                    <Header title={progress}/>
                    <AddButton icon={'add'}/>
                    <div className="card-container row col s12">
                        {cards}
                        {cards}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Status