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
      position: "relative",
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
            placeholder="Выберите фото"
          />
          <label htmlFor="icon-button-file" >
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
            type="number"
            inputProps={{ min: 1 }}
            label="Порядковый номер"
            id="margin-normal"
            name="order"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="порядковый номер"
            onChange={handleInput}
          />
          <TextField
            type="text"
            label="Название"
            id="margin-normal"
            name="exhibitName"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="наименование/назва"
            onChange={handleInput}
          />
          <TextField
            label="Характеристика"
            id="margin-normal"
            name="assignment"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="назначение предмета"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="category"
            select
            ref={selectCategoryRef}
            label="Категория"
            required
            value={category}
            className={classes.textField}
            onChange={handleChangeCategory}
            helperText="Выберите категорию"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Описание"
            id="margin-normal"
            name="description"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="описание внешнего вида"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="location"
            select
            label="Место расположения"
            className={classes.textField}
            value={location}
            onChange={handleChangeLocation}
            helperText="Выберите экспозицию"
          >
            {locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Размеры"
            id="margin-normal"
            name="sizes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="размеры (мм/мм/мм)"
            onChange={handleInput}
          />
          <TextField
            type="number"
            inputProps={{ min: 1 }}
            label="количество"
            id="margin-normal"
            name="quantity"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="выберите число"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="material"
            required
            select
            label="Материал"
            value={material}
            className={classes.textField}
            onChange={handleChangeMaterial}
            helperText="Выберите из списка"
          >
            {materials.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Сохранность"
            id="margin-normal"
            name="safety"
            required
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="описание состояния"
            onChange={handleInput}
          />
          <TextField
            label="№ акта приёмки"
            id="margin-normal"
            name="actNumber"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="№ акта приёмки"
            onChange={handleInput}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              className={classes.textField}
              label="Выберите дату поступления"
              name="receipDate"
              format="yyyy/MM/dd"
              value={selectedDate}
              onChange={handleDateChange}
              helperText="ГГГГ/ММ/ДД"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="standard-select-currency"
            name="method"
            select
            label="Способ получения"
            value={method}
            className={classes.textField}
            onChange={handleChangeMethod}
            helperText="Выберите из списка"
          >
            {methodes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Источник"
            id="margin-normal"
            name="sourceName"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="ФИО"
            onChange={handleInput}
          />
          <TextField
            label="Данные источника"
            id="margin-normal"
            name="sourceData"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="Место работы (должность)/ место жительства/ телефон"
            onChange={handleInput}
          />
          <TextField
            label="Дополнения"
            id="margin-normal"
            name="notes"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="дополнительная информация"
            onChange={handleInput}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Ввод
            <AddBoxIcon style={{ paddingLeft: 10 }} />
          </Button>
        </form>
      </Paper>
    </div>
  );
}
