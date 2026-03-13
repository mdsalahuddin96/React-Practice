export default function User({user}){
    return(
        <div className="card">
            <h2>Name: {user.name}</h2>
            <p>City: {user.address?.city}</p>
            <p>Email: {user?.email}</p>
            <p>Company: {user.company?.name}</p>
        </div>
    )
}