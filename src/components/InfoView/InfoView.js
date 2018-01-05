import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion, AccordionItem } from 'react-sanfona';
import './InfoView.css';
import data from './data.json';

var urlData = 'https://andell.eu/resume/oscarData.json';

export default class InfoView extends React.Component {

  constructor(props){
		super(props)
    this.state = {data : data}
    this.getDataFromUrl(urlData);
	 }

  getIndexes(array){
    var indexes = [];
    for (var i = 0; i < array.length; i++) {
       indexes.push(i);
    }
    return indexes;
	}

  getDataFromUrl(url){
		fetch(url, {mode: 'cors'})
			.then(res => res.json())
			.then(function(data) {
				this.setState({data : data});
			}.bind(this))
		.catch(function(data) {
				console.log("error fetching resume");
				console.log(data);
		}.bind(this));
	}

  render() {
    return(
			<div className="resumeHolder">
				<Accordion allowMultiple={true}>
					{this.getIndexes(data.sections).map(item => {
            return (
              <AccordionItem title={<div className="title" dangerouslySetInnerHTML={{__html: this.state.data.sections[item].title}}/>}>
                  <div dangerouslySetInnerHTML={{__html: this.state.data.sections[item].body}}/>
              </AccordionItem>
            );
          })}
			 </Accordion>
			</div>
		);
  }
}
