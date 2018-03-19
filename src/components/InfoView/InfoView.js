import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion, AccordionItem } from 'react-sanfona';
import './InfoView.css';
import data from './data.json';


export default class InfoView extends React.Component {

  constructor(props){
		super(props)
	 }

  getIndexes(array){
    var indexes = [];
    for (var i = 0; i < array.length; i++) {
       indexes.push(i);
    }
    return indexes;
	}

  render() {
    return(
			<div className="resumeHolder">
				<Accordion allowMultiple={true}>
					{this.getIndexes(this.props.data).map(item => {
            return (
              <AccordionItem title={<div className="title" dangerouslySetInnerHTML={{__html: this.props.data[item].title}}/>}>
                  <div dangerouslySetInnerHTML={{__html: this.props.data[item].body}}/>
              </AccordionItem>
            );
          })}
			 </Accordion>
			</div>
		);
  }
}
