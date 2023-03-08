import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import EditIcon from '@mui/icons-material/Edit';
import "D:/project_spring/project/src/App.css"

import Typography from 'antd/es/typography/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';import { Router } from 'react-router-dom';
function View() {

  const [productsList, setProductsList] = useState([]);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  useEffect(() => {
    fetchData();
}, []);


const fetchData = async () => {
    let res = await axios.get("http://localhost:8080/view");
    setProductsList(res.data);
    console.log(res.data);
}

const handleDelete = (id) => {
  axios.delete("http://localhost:8080/delete/" + id);
  // window.location.reload();
}

  return (
    <div>
      {/* {productsList.map((val)=>{
        return(
        <h1>{val.pName}</h1>)
      })} */}
      <div>
        <button style={{  textDecoration: "none"}}>
          <Link to="/post">Post a New Data</Link>
        </button>
      </div>
      <div className='head'>

        <h4 style={{marginLeft:10}}>Product Id</h4>
        <h4 style={{marginLeft:80}}>Product Name</h4>
        <h4 style={{marginLeft:180}}>Product Description</h4>
        <h4 style={{marginLeft:300}}>Product Price</h4>
        <h4 style={{marginLeft:350}}>Product Rating</h4>

      </div>
       <List sx={{ width: '100%', maxWidth: 1600, bgcolor: 'background.paper' }}>
      {productsList.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {/* <CommentIcon /> */}
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              {/* <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon> */}
              <ListItemText id={labelId} primary={`${value.pId}`} />
              <ListItemText id={labelId} primary={`${value.pName}`} />
            </ListItemButton>
            <ListItemText
          primary={value.pDesc}
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {value.pDesc}
              </Typography> */}
              {/* {' — Do you have Paris recommendations? Have you ever…'} */}
            </React.Fragment>
          }
        />
            <ListItemText
          primary={value.price}
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {value.pDesc}
              </Typography> */}
              {/* {' — Do you have Paris recommendations? Have you ever…'} */}
            </React.Fragment>
          }
        />
          <Rate value={value.rate} />
          <IconButton edge="end" aria-label="comments">
                <Link to={"/put"}><EditIcon /></Link>
              </IconButton>
              <IconButton onClick={() => {handleDelete(value.pId)}} edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
          </ListItem>
        );
      })}
    </List>

    </div>
    
  )
}

export default View