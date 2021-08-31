import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#d32f2f'
    }
  },
});

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};


const TodoListItem = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <div className="card w-75 m-2">
        <div className="card-body">
          <h5 className="card-title">{ props.listItem.title}</h5>
          <p className="card-text">
            {props.listItem.des}
          </p>
          <Button color={props.di!==props.listItem.id?"secondary":"default"} disabled={props.di===props.listItem.id} variant="contained"  size="small" style={{marginRight:"5px"}} startIcon={<DeleteIcon />} onClick={()=>props.deleteItem(props.listItem)}>
            Delete
          </Button>
          <Button color="primary" variant ="contained" size="small" startIcon={<EditIcon />} onClick={()=>{props.editItem(props.listItem);props.setAu(2);props.setDi(props.listItem.id);scrollToTop()}}>
            Edit
          </Button>
        </div>
      </div>
</ThemeProvider>
  );
};

export default TodoListItem;
