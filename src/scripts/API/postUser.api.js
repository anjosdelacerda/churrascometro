import { API } from "./url.api.js";

const postUserData = async () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user){
        console.log('user not found')
    }

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: user
    }

    try{
        const response = await fetch(API, data)
        const responseData = await response.json()
        console.log(responseData)
    }catch(error){
        console.log(error.message)
    }
}

export default postUserData