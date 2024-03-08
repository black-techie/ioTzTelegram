import { userModel } from "../database/engine"
import type { User } from "../interfaces/user"





const verifyUser = async (userId: number) => {
    const user:User = await userModel.find({ userId })
    if (user.id) {
        console.log("Hey")
        return { user }
    }
    return {   
        error: "user not found"
    }
}


export {
    verifyUser
}
