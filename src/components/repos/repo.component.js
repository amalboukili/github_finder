import React, { Fragment } from 'react'

function Repo({repo}) {
    return (
        <Fragment>
            <div className="repo-item">
                <h4> 
                    <a href={repo.html_url}>{repo.name}</a>
                </h4>
                <p>
                    {repo.description}
                </p>
            </div>
            <div className="divider"></div>
        </Fragment>
    )
}

export default Repo;
