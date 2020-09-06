import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Paper} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#150036',//theme.palette.background.paper,
    border: '2px solid white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "250px",
    textAlign:'center',
    color: 'white'
  },
  advantagePaper:{
    minHeight: '180px',
    backgroundColor:'#150036',
    opacity: 0.6,
    font: 'bold 150% serif',
    color: 'white',
    overflowX:'hidden',
    overflowY:'hidden',
    lineHeight: '50px',
    paddingTop: '50px',
    cursor:'pointer',
    "@media (max-width:900px)": {
      font:'bold 120% serif'
    },
    "@media (max-width:750px)": {
      font:'bold 100% serif'
    },
    "@media (max-width:650px)": {
      font:'bold 90% serif'
    },
},
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper className={classes.advantagePaper} onClick={handleOpen}>
        {props.title}
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.title_modal}</h2>
    <p id="transition-modal-description">{props.text}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}