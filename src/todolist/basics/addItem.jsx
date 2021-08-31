import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const AddItem = (props) => {
    

   const submit =(e) =>{
      e.preventDefault();
      if(!(props.title&&props.des)){alert("can not be void");}
      else
       props.addItem(props.title,props.des);
      props.setTitle('');props.setDes('');
   }

    return (
      <div className="my-5 container">
        <h4 className="mx-auto">Add Todo</h4>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={props.title}
              onChange={(event)=>props.setTitle(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="desc" value={props.des} onChange={(event)=>props.setDes(event.target.value)}/>
          </div>
          <Button size="small" variant="contained" style={{backgroundColor:"green",color:"white"}} type="submit" startIcon={<AddIcon />}>Add</Button>
          </form>
    </div>
    )
}

export default AddItem;