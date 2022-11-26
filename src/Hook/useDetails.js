

import React, { useEffect, useState } from 'react'
import { fetchData, GameOptions } from './fetchData';

function useDetails(id) {
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(false)

    async function get() {
        return await fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, GameOptions);
    }

    useEffect(() => {
        get().then(data => {
            setGame(data)
            setInterval(() => {
                setLoading(false)
            }, 2000);
        }).catch(err => {
            setInterval(() => {
                setLoading(false)
            }, 2000);
        })
    }, [id])

    return {
        game,
        loading
    }
}

export default useDetails