import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import './InfoView.css';
import Paper from 'material-ui/Paper';



export default class InfoView extends React.Component {

  getIndexes(array){
    var indexes = [];
    for (var i = 0; i < array.length; i++) {
       indexes.push(i);
    }
    return indexes;
	}

  render() {
    const style = {
      textAlign: 'center',
      display: 'inline-block',
    };
    return(
      <Paper style={style} zDepth={1}>
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
      </Paper>
		);
  }
}
