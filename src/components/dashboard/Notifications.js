import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'


const styles = {
    
    paper: {
      margin: 4,
      padding :10
    }
  };

const Notifications = (props) => {
  const {notifications} = props
  return (
    <div>
       <Paper  elevation={1} style={styles.paper}>
        <Typography variant="headline" component="h3">
        Notifications
        </Typography>
        
        { notifications && notifications.map( item =>{
            return(
              <div key={item.id}>
                  <Typography component="p" >
                  {item.user} {item.content}
                  </Typography>
                  <Typography variant="caption">
                    {moment( item.time.toDate() ).fromNow() }
                    </Typography>
                </div>
            )

        })
        
        }
      </Paper>
    </div>
  )
}

export default Notifications
