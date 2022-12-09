import React, {Component} from 'react'
import CardGift from './CardGift'


class Home extends Component {
    
    constructor(){
        super();
        this.state = {
            gif: ""
        }
    }    
    
    apiCall(url){
        fetch(url)
            .then (response => response.json())
            .then (data => console.log(data))
    }    
    
    componentDidMount() {
        console.log("El componente fue renderizado")
        this.apiCall("https://api.giphy.com/v1/gifs/trending?api_key=aIfxklgxHlgGRU3K4gr28KOoRP0G8ohq&limit=1&rating=g")
    }

    componentDidUpdate() {
        console.log("El componente se ha actualizado ")
        
    }
    
    render (){
        return (
            <div className="container">

                <CardGift/>
            </div>
    )}



}
export default Home
