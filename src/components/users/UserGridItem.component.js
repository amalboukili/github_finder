import React from 'react'

function UserGridItem(props) {
    const { user } = props;
    return (
        <div className="card" style={style.cardStyle}>
            <div className="card-image">
                <img
                    src= {user.avatar_url}  
                    className="img-responsive" 
                    style= {style.imgStyle}
                    alt={user.login}
                />
            </div>
            <div className="card-header">
                <div className="card-title h5">{user.login}</div>
                <div className="card-subtitle text-gray">
                    <strong>
                        {user.type}
                    </strong>
                </div>
            </div>
            <div className="card-footer">
                <a className="btn btn-primary" href ={user.html_url} >
                    More details
                </a>
            </div>
        </div>
    )
}

const style = {
    cardStyle : {
        display : 'flex',
        alignItems : 'center',
        padding : '5px',
    },
    imgStyle : {
        height : '220px',
        width : '220',
        borderRadius : '50px',
    }
}



export default UserGridItem
