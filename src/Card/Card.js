import React, {Component} from "react";
import '../CardDeck/deck.css'

       


class Card extends Component{
    constructor(props){
        super(props);
        let angle = Math.random()*90 - 45;
        let xPos = Math.random() *40 - 20
        let yPos = Math.random() *40 - 20;
        this._transform =`translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }
    
    render(){
        
        return(
            <div style={{transform:this._transform}} className='deckcard'>
                <img src={this.props.image}/>
            </div>
            

        )
    }
}

export default Card