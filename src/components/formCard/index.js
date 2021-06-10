import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';


export default class FormCard extends Component {
  constructor() {
    super();

    this.validationSchema = Yup.object().shape({
      name: Yup.string().required(),
    });
  }

  handleSubmit = (values, actions) => {
    const { onSubmit } = this.props;

    onSubmit(values);

    actions.resetForm();
  }

  render() {
    const { type } = this.props;

    return (
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="img"
              name="Фотография"
              placeholder="перетащите фото"
            />
            <h2>Поля ввода</h2>

            <Field
              type="number"
              name="№ п/п"
              placeholder="порядковый номер"
            />

            <Field
              type="number"
              name="Наименование рус/бел"
              placeholder="наименование/назва"
            />

            <Field
              type="text"
              name="Характеристика"
              placeholder="назначение предмета"
            />

            <Field
              name="Категория"
              component="select"
              placeholder="выберите категорию/тип">
              <option value="dishes">посуда</option>
              <option value="Houseware">быт</option>
              <option value="woven">тканые изделия</option>
              <option value="tools">орудия труда</option>
              <option value="document">документы</option>
              <option value="money">деньги</option>
              <option value="book">книги</option>
              <option value="photo">фотография</option>
              <option value="technics">техника</option>
              <option value="archeology">археологические находки</option> 
              <option value="fittings">фурнитура</option>
            </Field>

            <Field
              type="text"
              name="Описание"
              placeholder="Описание внешнего вида"
            />

            <Field
              name="Место расположения"
              component="select"
              placeholder="Выберите экспозицию">
              <option value="rzeczpospolita">Речь Посполитая</option>
              <option value="palac">Дворец</option>
              <option value="fates">Судьбы</option>
              <option value="nelly">Нелли</option>
              <option value="urban">Городская</option>
              <option value="hatka">Хатка</option>
              <option value="ethnography">Этнография</option>
              <option value="local history">Краеведение</option>
              <option value="grodno history">Гродноведение</option>
              <option value="research">Исследования</option>
              <option value="archive">Архив</option>
            </Field>

            <Field
              type="number"
              name="Размеры (мм)"
              placeholder="мм"
            />

            <Field
              name="Материал"
              component="select"
              placeholder="выберите из списка">
              <option value="wood">Дерево</option>
              <option value="plastic">Пластмасса</option>
              <option value="metal">Металл</option>
              <option value="cloth">ткань</option>
              <option value="glass">Стекло</option>
              <option value="paper">Бумага</option>
            </Field>

            <Field
              type="text"
              name="Сохранность"
              placeholder="описание состояния"
            />

            <Field
              type="number"
              name="№ акта"
              placeholder="номер акта приёмки"
            />

            <Field
              name="способ получения"
              component="select"
              placeholder="выберите из списка">
              <option value="donation">Дарение</option>
              <option value="find">Находка</option>
              <option value="purchase">Покупка</option>
            </Field>

            <Field
              type="text"
              name="sourceName"
              placeholder="ФИО"
            />

            <Field
              type="text"
              name="sourceAddress"
              placeholder="адрес"
            />

            <Field
              type="text"
              name="sourcePosition"
              placeholder="место работы, должность"
            />
            <Field
              type="number"
              name="sourcePhone"
              placeholder="телефон"
            />



            <button type="submit">Ввод</button>
          </Form>
        )}
      </Formik>
    );
  }
}

FormCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
