import React from 'react'
import Typography from '@material-ui/core/Typography';
const styles  = theme => ( {
    footer: {
        marginTop: theme.spacing.unit * 20,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
      },
})

const Footer = () => {
  return (
    <div>
       {/* Footer */}
       <footer style={styles.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Footer
