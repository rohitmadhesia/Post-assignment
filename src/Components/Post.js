import * as React from 'react';
import  { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {

    const [items, setItems] = useState([]);

    const apiGet = () => {
      fetch("https://dummyjson.com/posts#")
        .then((response) => response.json())
        .then(({ posts }) => {
          setItems(posts);
        });
    };
  
    useEffect(() => {
      apiGet();
    }, []);


  return (
    
    <Card sx={{ minWidth: 275,  }}>
     {items.map((item)  => 
      <CardContent key={item.id}>
     

      <Typography  sx={{ fontSize: 24, fontWeight: 700, }} variant="h5" component="div">
          {item.title}
        </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 400, }} color="text.secondary" gutterBottom>
          {item.body}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
        Genre: {item.tags}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
        UserId: {item.userId}
        </Typography>
        <Typography variant="h6">
         Reactions: {item.reactions}
          <br />
        </Typography>
      
      </CardContent>
      )}
    </Card>

  );
}