// jshint esversion: 6
import {jokes} from "./dadJokeDB.json"

const getJokes = ()=>{
    let num=  jokes.length
    let newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log('Hit the function')
    console.log(newJoke)
    return newJoke
}

export default getJokes;
