import { useEffect,useState } from "react";
import '../styles/bitcoin.css'

const New = () => {

    let[item,setItem]=useState([])
    useEffect( ()=>{
        let fetchData= async()=>{
            let response=await fetch(`https://api.coinranking.com/v2/coins/`)
            let dataitem=await response.json()
            setItem(dataitem.data.stats)
        }
        fetchData()
    })

    return (  
        <div className="new">
    {
    <div className="hhh">
        <div className="hel">
            <h1>Total coins</h1>
              <h3>{item.totalCoins}</h3> 
        </div>
        <div className="hel">
            <h1>Total Markets</h1>
              <h3> {item.totalMarkets}</h3>
        </div>
        <div className="hel">
            <h1>Total Exchange</h1>
               <h3>{item.totalExchanges}</h3>
        </div>
    </div>
    }
        </div>
    );
}

export default New;