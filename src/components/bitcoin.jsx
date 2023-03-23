import { useEffect,useState } from "react";
import '../styles/bitcoin.css'


const Bitcoin = () => {

        //  for fetching data from api
        let [coin,setCoin]=useState([])
    
                
        useEffect(()=>{
            let fetchData= async() =>{
            let response =await fetch(`https://api.coinranking.com/v2/coins/`)
            let coindata=await response.json()
            setCoin(coindata.data.coins)
        }
        fetchData()
        },[coin])



        let [coin1,setCoin1]=useState(0)
        let submit=()=>{
            setCoin1(coin1 +1)


        }

    return ( 
        <div className="bitcoin">
            <h1 id="h1">CRYPTOCURRANCY LIVE PRICE TABLE</h1>
            <p id="h2">Minimum purchase is 50 Coins tokens.Get abonus from 5% to <br /> 25% <br />
                on every token purchase</p>
                <h1 id="h3">CART:{coin1} </h1>
                <div className="coinsec">
                    {coin.map( (item)=>(
                            
                        
                        <div className="hh">
                        <div className="design">
                            <img src={item.iconUrl} alt=""  style={{width:"95px",height:"95px"}}/>
                        <div className="cont">
                        <h1>{item.name}</h1>
                        <h4><span  style={{color:"black"}}>USD:</span> {Math.trunc (item.price)} <span style={{color:"black"}}>INR :</span> {Math.trunc (item.price*82)} <span style={{color:"black"}}>GBP :</span> {Math.trunc (item.price*21)}</h4>
                        {/* <p>INR : {Math.trunc (item.price*82)}</p>
                        <p>GBP : {Math.trunc (item.price*21)}</p> */}
                        <button className="btn" onClick={submit}>CLick</button>
                        </div>
                        </div>
                        </div>
                    ))}
                    

                </div>
        </div>
        
    );
}

export default Bitcoin; 