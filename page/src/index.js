import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function getItems() {
  return fetch("/api")
    .then(data => data.json())
}

function MediaCard(props) {
  return (
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.item.Image}
        alt={props.item.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.Detail}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}

function App(props) {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    getItems()
      .then(res => {
        if(mounted) {
          setItems(res.Items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
     <h1>Data List</h1>
     <Grid container spacing={{ xs: 2, md: 3 }}>
       {items.map(item => <MediaCard item={item} />)}
     </Grid>
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
