import React, { useReducer, useRef } from "react";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

import { Button, TextField, Paper, Typography, MenuItem, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import './formCard.scss';
import { categories } from '../Array/arrCategory.js';
import { materials } from '../Array/arrMaterial.js';
import { locations } from '../Array/arrExhibition.js';
import { methodes } from '../Array/arrGetMethod.js';

export function MaterialUIFormSubmit(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2),
      position: "absolute",
      left: "75%"
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      transition: theme.transitions.create('width'),
      width: '100%'
    },
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: "",
      name: ""
    }
  );
  const selectCategoryRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault();

    let values = { formInput };
    const { onSubmit } = props;

    onSubmit(values);
    event.target.reset();
    setCategory('');
    setLocation('');
    setMaterial('');
    setMethod('');
    setSelectedDate();
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  const [category, setCategory] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [material, setMaterial] = React.useState('');
  const [method, setMethod] = React.useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    handleInput(event);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    handleInput(event);
  };

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
    handleInput(event);
  };

  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
    handleInput(event);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormInput({ date: date });
  };

  return (
    <div className="">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <input
            accept="image/*"
            className={classes.input}
            required
            id="icon-button-file"
            type="file"
            name="photo"
            onChange={handleInput}
            placeholder="???????????????? ????????"
          />
          <label htmlFor="icon-button-file" >
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
            type="number"
            inputProps={{ min: 1 }}
            label="???????????????????? ??????????"
            id="margin-normal"
            name="order"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????????? ??????????"
            onChange={handleInput}
          />
          <TextField
            type="text"
            label="????????????????"
            id="margin-normal"
            name="exhibitName"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="????????????????????????/??????????"
            onChange={handleInput}
          />
          <TextField
            label="????????????????????????????"
            id="margin-normal"
            name="assignment"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????????? ????????????????"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="category"
            select
            ref={selectCategoryRef}
            label="??????????????????"
            required
            value={category}
            className={classes.textField}
            onChange={handleChangeCategory}
            helperText="???????????????? ??????????????????"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="????????????????"
            id="margin-normal"
            name="description"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????? ???????????????? ????????"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="location"
            select
            label="?????????? ????????????????????????"
            className={classes.textField}
            value={location}
            onChange={handleChangeLocation}
            helperText="???????????????? ????????????????????"
          >
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="??????????????"
            id="margin-normal"
            name="sizes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="?????????????? (????/????/????)"
            onChange={handleInput}
          />
          <TextField
            type="number"
            inputProps={{ min: 1 }}
            label="????????????????????"
            id="margin-normal"
            name="quantity"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????? ??????????"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="material"
            required
            select
            label="????????????????"
            value={material}
            className={classes.textField}
            onChange={handleChangeMaterial}
            helperText="???????????????? ???? ????????????"
          >
            {materials.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="??????????????????????"
            id="margin-normal"
            name="safety"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????? ??????????????????"
            onChange={handleInput}
          />
          <TextField
            label="??? ???????? ??????????????"
            id="margin-normal"
            name="actNumber"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="??? ???????? ??????????????"
            onChange={handleInput}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              className={classes.textField}
              label="???????????????? ???????? ??????????????????????"
              name="receipDate"
              format="yyyy/MM/dd"
              value={selectedDate}
              onChange={handleDateChange}
              helperText="????????/????/????"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="standard-select-currency"
            name="method"
            select
            label="???????????? ??????????????????"
            value={method}
            className={classes.textField}
            onChange={handleChangeMethod}
            helperText="???????????????? ???? ????????????"
          >
            {methodes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="????????????????"
            id="margin-normal"
            name="sourceName"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="??????"
            onChange={handleInput}
          />
          <TextField
            label="???????????? ??????????????????"
            id="margin-normal"
            name="sourceData"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="?????????? ???????????? (??????????????????)/ ?????????? ????????????????????/ ??????????????"
            onChange={handleInput}
          />
          <TextField
            label="????????????????????"
            id="margin-normal"
            name="notes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="???????????????????????????? ????????????????????"
            onChange={handleInput}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            ????????
            <AddBoxIcon style={{ paddingLeft: 10 }} />
          </Button>
        </form>
      </Paper>
    </div>
  );
}
