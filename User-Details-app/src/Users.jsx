import { use } from "react"
import User from "./User"
export default function Users({userPromise}){
    const users=use(userPromise)
    return(
        <div className="card-container">
            {users.map(user=><User key={user.id} user={user}></User>)}
        </div>
    )
}