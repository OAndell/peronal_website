import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import './InfoView.css';
import Paper from 'material-ui/Paper';



export default class InfoView extends React.Component {

  render() {
    const style = {
      textAlign: 'center',
      display: 'inline-block',
    };
    console.log(this.props.data)
    return(
      <Paper style={style} zDepth={2}>
  			<div className="resumeHolder">
  				<Accordion allowMultiple={true}>
  					{this.props.data.map((item, index) => {
              return (
                <AccordionItem expanded={index === 0} title={<div className="title" dangerouslySetInnerHTML={{__html: item.title}}/>}>
                    <div style={{color: this.props.colorTheme.textColor2}} dangerouslySetInnerHTML={{__html: item.body}}/>
                </AccordionItem>
              );
            })}
  			 </Accordion>
  			</div>
      </Paper>
		);
  }
}
