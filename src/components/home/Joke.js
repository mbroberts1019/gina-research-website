import React, { useEffect, useState } from 'react'
import getJokes from "../../dad_jokes/dadJokes"

const defaultJoke = {
    setup: "Do you like Dad jokes?",
    punchline: "Too bad, they're coming"
}

const Joke = () => {
    const [joke, setJoke] = useState(defaultJoke)

    useEffect( () => {
        const newjoke = getJokes()
        setJoke({...newjoke})
    } ,[])

    return (
        <div className="dad-joke-container">
            <div className="dad-joke-question">
                {joke.setup}
            </div>
            <div className="dad-joke-answer">
                {joke.punchline}
            </div>
        </div>
    )

}

export default Joke
