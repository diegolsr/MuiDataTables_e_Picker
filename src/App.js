import React, { useState } from 'react';
import MUIDataTable from './components/MuiDataTables'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { ComponentsDatePicker, ComponentsKeyboardDatePicker, ComponentsTimePicker, ComponentsKeyboardDateTimePicker } from './components/Picker'

// import ptBR from 'date-fns/locale/pt-BR';
// import Grid from "@material-ui/core/Grid";
// import DateFnsUtils from "@date-io/date-fns"
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
//   DatePicker,
//   TimePicker
// } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function App() {
  const [data, setData] = useState([

    { id: 0, name: "Joe James", date: "10/01/2018", horario: "01:00:00", company: "Test Corp", city: "Yonkers", state: "NY" },
    { id: 1, name: "John Walsh", date: "10/01/2019", horario: "01:52:00", company: "Test Corp", city: "Hartford", state: "CT" },
    { id: 2, name: "Bob Herm", date: "10/01/2020", horario: "22:44:00", company: "Test Corp", city: "Tampa", state: "FL" },
    { id: 3, name: "James Houston", date: "10/01/2021", horario: "15:45:00", company: "Test Corp", city: "Dallas", state: "TX" },
  ]);

  const classes = useStyles();

  const columns = [
    {
      label: "id",
      name: "id",
      options: {
        display: 'excluded'
      }
    },
    {
      label: "Input",
      name: "name",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <FormControlLabel
            value={value}
            control={<TextField value={value} />}
            onChange={event => updateValue(event.target.value)}
          />
        )
      }
    },
    {
      label: "Botão",
      name: "name",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Fab onClick={() => console.log(tableMeta)} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        )
      }
    },
    {
      label: "Data",
      name: "date",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <ComponentsKeyboardDatePicker
            openTo={'month'}
            views={'month'}
            value={value}
          />)
      }
    },
    {
      label: "Horário",
      name: "horario",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <ComponentsTimePicker
            value={value}
          />)
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];


  // function onRowUpdate(newData, oldData) {
  //   new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //       const data = [...state.data];
  //       data[data.indexOf(oldData)] = newData;
  //       setState({ ...state, data });
  //     }, 600);
  //   })
  // }


  return (
    <div className="App">
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
      />
    </div>
  );
}
