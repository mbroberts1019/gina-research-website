import {jokes} from "./dadJokeDB.json"

const getJokes = ()=>{
    let newJoke = jokes[Math.floor(Math.random() * jokes.length)]
    return newJoke
}

export default getJokes;
