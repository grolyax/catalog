import React, { useReducer } from "react";
import { Button, Icon, TextField, Paper, Typography, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';
import './formCard.scss';

const categories = [
  {
    value: 'dishes',
    label: 'посуда'
  },
  {
    value: 'Houseware',
    label: 'быт'
  },
  {
    value: 'woven',
    label: 'тканые изделия'
  },
  {
    value: 'tools',
    label: 'орудия труда'
  },
  {
    value: 'document',
    label: 'документы'
  },
  {
    value: 'money',
    label: 'деньги'
  },
  {
    value: 'book',
    label: 'книги'
  },
  {
    value: 'photo',
    label: 'фотография'
  },
  {
    value: 'technics',
    label: 'техника'
  },
  {
    value: 'archeology',
    label: 'археологические находки'
  },
  {
    value: 'fittings',
    label: 'фурнитура'
  },
];

const locations = [
  {
    value: "rzeczpospolita",
    label: 'Речь Посполитая'
  },
  {
    value: "palac",
    label: 'Дворец'
  },
  {
    value: "fates",
    label: 'Судьбы'
  },
  {
    value: "nelly",
    label: 'Нелли'
  },
  {
    value: "urban",
    label: 'Городская'
  },
  {
    value: "hatka",
    label: 'Хатка'
  },
  {
    value: "ethnography",
    label: 'Этнография'
  },
  {
    value: "local history",
    label: 'Краеведение'
  },
  {
    value: "grodno history",
    label: 'Гродноведение'
  },
  {
    value: "research",
    label: 'Исследования'
  },
  {
    value: "archive",
    label: 'Архив'
  },

];

const materials = [
  {
    value: "wood",
    label: 'дерево'
  },
  {
    value: "plastic",
    label: 'пластмасса'
  },
  {
    value: "metal",
    label: 'металл'
  },
  {
    value: "cloth",
    label: 'ткань'
  },
  {
    value: "glass",
    label: 'стекло'
  },
  {
    value: "paper",
    label: 'бумага'
  },
  {
    value: "ceramics",
    label: 'керамика'
  },
  {
    value: "porcelain",
    label: 'фарфор'
  },
  {
    value: "leather",
    label: 'кожа'
  },
];

const methodes = [
  {
    value: "donation",
    label: 'Дарение'
  },
  {
    value: "find",
    label: 'Находка'
  },
  {
    value: "purchase",
    label: 'Покупка'
  },
]

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
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: "",
      name: ""
    }
  );


  const handleSubmit = evt => {
    evt.preventDefault();

    let values = { formInput };
    const { onSubmit } = props;

    onSubmit(values);
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
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    setMaterial(event.target.value);
    setMethod(event.target.value);
  };

  const handleChangeMaterial = (event) => {
    setMaterial(event.target.value);
    setMethod(event.target.value);
  };

  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  console.log(props);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Порядковый номер"
            id="margin-normal"
            name="order"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="порядковый номер"
            onChange={handleInput}
          />
          <TextField
            label="Название"
            id="margin-normal"
            name="exhibitName"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="наименование/назва"
            onChange={handleInput}
          />
          <TextField
            label="Характеристика"
            id="margin-normal"
            name="assignment"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="назначение предмета"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="category"
            select
            label="Категория"
            value={category}
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
            id="standard-select-currency"
            name="material"
            select
            label="Материал"
            value={material}
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
          <TextField
            label="Дата поступления"
            id="margin-normal"
            name="receipDate"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="ГГГГ/ММ/ДД"
            onChange={handleInput}
          />
          <TextField
            id="standard-select-currency"
            name="method"
            select
            label="Способ получения"
            value={method}
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
