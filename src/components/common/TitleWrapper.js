import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
    Link,
    Typography,
    Box
  } from "@material-ui/core";

const TitleWrapper = (props) => {
console.log('DATA',props.data);
    return(
      <>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link variant="caption" key={'home-breadcrumb'} color="inherit" href="/" >
                      Home
                  </Link>
          { props.data ? 
            props.data.map((d,i)=>{
              return <Link variant="caption" key={`breadcrumb-${i}`} color="inherit" href={d.url} >
                        {d.name}
                    </Link>
            })
            :
            ''
          }
          
          <Typography variant="caption" color="textPrimary">{props.title}</Typography>
        </Breadcrumbs>
        <Box mb={4} mt={1} position="relative">
        <Typography variant="h6" className="font-bold">{props.title}</Typography>
        </Box>
      </>
    )
}

export default TitleWrapper

