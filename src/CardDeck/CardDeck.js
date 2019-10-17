import React,{ Component } from "react";
import axios from "axios";
import Card from "../Card/Card";
import '../CardDeck/deck.css'


class CardDeck extends Component{

    state={deck:null, cards:[]}


    async handleClick(){

        //make request using deck id
        let id = this.state.deck.deck_id
        try {
            let rep = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`)
            let data = rep.data.cards[0]
            if(this.state.deck.remaining === 0 ){
                throw new Error('No Card Remaining');   
            }

            console.log(rep)
        //set state with new card info
        this.setState(st=>({
            cards:[
                ...st.cards,
                {id:data.code,
                img:data.image
                }

            ]
        }))

    }catch (err){
        alert('No Card Remaining')
    }
    
    }


    async componentDidMount(){
        const api_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
        let response = await axios.get(api_url)
        this.setState({deck:response.data})
    }


    render(){

        const cards = this.state.cards.map(card=>{
           return  <Card key={card.id} image={card.img}/>
        })


        return(
            <div className=''>
                <button className='deck-btn' onClick={this.handleClick.bind(this)}>Get A Card</button>
                <div className='decklist'>{cards}</div>
            </div>
            
        )
    }
}

export default CardDeck;