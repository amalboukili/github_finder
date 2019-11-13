import React from 'react';
import PropTypes from 'prop-types';

function Alert({type, message}) {
    // const {type, message} = props;
    return message ? (
        <div className = "container" style= {{marginTop : '15px'}}>
            <div className = "columns">
                <div className = "column col-12">
                    <div class={`toast toast-${type}`}>
                        <button class="btn btn-clear float-right"></button>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    ):(
        ''
    );

}

Alert.propTypes = {
    type : PropTypes.string,
    message : PropTypes.string,
};

Alert.defaultProps = {
    type : 'error',
}



export default Alert;