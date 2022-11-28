import React from 'react'

function DetailsFooter({ game }) {
    let { title, developer, release_date, publisher, platform, genre } = game;
    let data = [
        { title: "Title", dec: `${title}` },
        { title: "Developer", dec: `${developer}` },
        { title: "Publisher", dec: `${publisher}` },
        { title: "Release Date", dec: `${release_date}` },
        { title: "Genre", dec: `${genre}` },
        { title: "Platform", dec: `${platform}` },
    ]
    return (
        <div class="row mb-3">
             {
                data?.map((item, i) => (
                    <div key={i} class="col-6 col-md-4">
                        <span class="text-muted">{item.title}<br /></span>
                        <p>{item.dec}</p>
                    </div>
                ))
            } 
        </div>
    )
}

export default DetailsFooter