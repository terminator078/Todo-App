import React from 'react'
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';


const EditItem = (props) => {
    

   const submit =(e) =>{
      e.preventDefault();
      if(props.title&&props.des)props.updateItem(props.title,props.des);
      else alert("can not be void");
      props.setTitle('');props.setDes('');
      props.setAu(1);
      props.setDi("");
   }

    return (
      <div className="my-5 container">
        <h4 className="mx-auto">Edit Todo</h4>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              New Title
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
              New Description
            </label>
            <input type="text" className="form-control" id="desc" value={props.des} onChange={(event)=>props.setDes(event.target.value)}/>
          </div>
          <Button size="small" variant="contained" startIcon={<DoneIcon />} style={{backgroundColor:"rgb(163, 163, 0)",color:"white"}} type="submit">Done</Button>
          </form>
    </div>
    )
}

export default EditItem;