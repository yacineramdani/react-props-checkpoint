import React from 'react'
import "./ProfileComponent.css"
import PropTypes from "prop-types"

const ProfileComponent = ( {fullName, profession, bio, handleName , children} ) => {
    const handleAlert = e => {
        handleName(fullName)
    }
    return (
        <div className="container">
            <div className="user">
                <div>{children}</div>
                <button onClick={handleAlert}>Alert</button>
            </div>
            <div className="userInfo">
                <h1>{fullName}</h1>
                <h3>{profession}</h3>  
                <p>{bio}</p>
            </div>         
        </div>
        
    )
}

ProfileComponent.defaultProps = {
    fullName : "Yacine",
    profession : "Developer",
    bio : "Blank",
    
}

ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.func

}
export default ProfileComponent
