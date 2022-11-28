import axios from "axios";

export const GameOptions = {
    method: 'GET',

    headers: {
      'X-RapidAPI-Key': '4eb60ccce0msh9422e2902346130p1849cfjsnb8cab4cc95a1',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  
 export const fetchData= async(url,options)=>{
    let {data}=await axios.get(url,options);
    return data;
  }