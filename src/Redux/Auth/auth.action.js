import axios from "axios"

const loginUserAction = (loginData) =>async(dispatch)=>{
    try {
        const {data} = await axios.post('${API_BASE_URL}/auth/signin',loginData)
    } catch (error) {
        
    }
}