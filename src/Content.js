import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const Content = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "rgb(23,245,23)",
  });

  const showAlert = (show = false, message, color) => {
    setAlert({ show: show, message: message, color: color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //   DISPLAY ALERT
      showAlert(true, "Please enter your value", "rgb(230,12,12)");
    } else if (name && isEditing) {
      //   DISPLAY ALERT
      
      const newList = list.map((object) => {
        if (object.id === editId) {
          return {...object, title: name}
        }
        return object
      })
      setList(newList)
      setName('')
      setIsEditing(false)
      setEditId(null)
      showAlert(true, "item has been edited", 'rgb(45,89,100)')
    } else {
      //  SHOW ALERT
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "Item was added", "rgb(30,256,11)");
    }
  };

  const clearList = () => {
      showAlert(true,'Items was cleared successfully','rgb(200,210,190)')
      setList([])
  }

  const removeItem = (id) => {
    const remove = list.filter((item) => item.id !== id)
    setList(remove)
    showAlert(true, 'Item was removed', 'rgb(23,145,59)')
  }

  const editItem = (id) => {
    const item = list.find((object) => object.id === id)
    setIsEditing(true)
    setEditId(item.id)
    setName(item.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Box
      sx={{
        boxShadow: "1px 1px 10px 0 #fefefe",
      }}
    >
      <Box>{alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}</Box>
      <Box>
        <Typography marginY={2} variant="h6">
          Grocery Shop
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box marginY={2} sx={{}}>
            <Button
              type="submit"
              size="large"
              variant={isEditing ? "outlined" : "contained"}
            >
              {isEditing ? "EDIT" : "SUBMIT"}
            </Button>
          </Box>
        </Box>

        <List items={list} editItem={editItem} clearList ={clearList} removeItem={removeItem} />
      </Box>
    </Box>
  );
};

export default Content;
