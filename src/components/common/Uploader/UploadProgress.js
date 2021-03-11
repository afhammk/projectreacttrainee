import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function UploadProgress(props) {
    return (
        <div style={{position:'absolute',right:'5px',bottom:'0px'}}><Typography variant="caption">{props.value}</Typography></div>
    );
}

/*UploadProgress.propTypes = {

    value: PropTypes.number.isRequired,
}*/

export default UploadProgress;