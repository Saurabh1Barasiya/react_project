import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    // console.log("user  value",user);

    if (!user) {
        return <div>Please login</div>
    }else if(user?.username === undefined || user?.password  === undefined){
        return <div>Please  enter correct details</div>
    }else{
        return <div>Welcome {user.username}</div>
    }


}

export default Profile
