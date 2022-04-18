import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ModeEdit from "@mui/icons-material/ModeEdit";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const List = ({ items, clearList, removeItem, editItem }) => {
  return (
    <Box>
      {items.map((item) => {
          return (
              <Box key={item.id}>
                  <Grid container>
                    <Grid item xs = {6}>
                        <Typography variant="h6">{item.title}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid sx={{marginRight: '50px'}} item xs={3}>
                                <Button onClick={() => removeItem(item.id)}><DeleteIcon /></Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button onClick={() => editItem(item.id)}><ModeEditIcon /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Grid>
                  
              </Box>
          )
      })}
        { items.length>0? <Button onClick={clearList} variant="outlined" size="large">Clear cart</Button>: ''}
    </Box>
  );
};

export default List;
