    import React, { useEffect, useState } from 'react'
    import { fetchData, GameOptions } from './fetchData';

function useFetch(url,number) {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true)

    async function get() {
        return await fetchData(url, GameOptions);
    }


      useEffect(() => {
        get().then(data=>{
            let popularity = data.slice(0, number)
            setGame(popularity)
            setInterval(() => {
              setLoading(false)
            }, 2000);
          }).catch(err=>{
            setInterval(() => {
              setLoading(false)
            }, 2000);
          })
      }, [number])
      
  return {
    game,
    loading
  }
}

export default useFetch