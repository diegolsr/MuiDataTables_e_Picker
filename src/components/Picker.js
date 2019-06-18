import React, { useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns"
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    DatePicker,
    TimePicker,
    KeyboardDateTimePicker
} from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


//CALENDÁRIO SELECIONÁVEL
function ComponentsDatePicker(prosp) {
    const classes = useStyles();
    const [value, setValue] = useState(prosp.value)

    function handleChange(date) { setValue(date) }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Grid container className={classes.grid} justify="space-around">
                <DatePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label={!prosp.label ? '' : prosp.label}// label="Mês/Ano"
                    cancelLabel={'Cancelar'}
                    format={!prosp.format ? 'dd/MM/yyyy' : prosp.format}
                    value={value}
                    autoOk={true}
                    onChange={(e) => handleChange(e)}

                    /* Open to DatePicker */
                    /* openTo?: 'year' | 'date' | 'month' */
                    openTo={!prosp.openTo ? 'date' : prosp.openTo}

                    /* Array of views to show */
                    /* views?: ('year' | 'date' | 'month') */
                    views={!prosp.views ? ['year', 'month', 'date'] : prosp.views}

                    maxDate={!prosp.maxDate ? null : prosp.maxDate}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}

//CALENDÁRIO SELECIONÁVEL E DIGITÁVEL
function ComponentsKeyboardDatePicker(prosp) {
    const classes = useStyles();
    const [value, setValue] = useState(prosp.value)

    function handleChange(date) { setValue(date) }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Grid container className={classes.grid} justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label={!prosp.label ? '' : prosp.label}// label="Mês/Ano"
                    cancelLabel={'Cancelar'}
                    format={!prosp.format ? 'dd/MM/yyyy' : prosp.format}
                    value={value}
                    autoOk={true}
                    onChange={(e) => handleChange(e)}

                    /* Open to DatePicker */
                    /* openTo?: 'year' | 'date' | 'month' */
                    openTo={!prosp.openTo ? 'date' : prosp.openTo}

                    /* Array of views to show */
                    /* views?: ('year' | 'date' | 'month') */
                    views={!prosp.views ? ['year', 'month', 'date'] : prosp.views}

                    maxDate={!prosp.maxDate ? null : prosp.maxDate}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}


//RELÓGIO SELECIONÁVEL
function ComponentsTimePicker(prosp) {
    const classes = useStyles();
    const [value, setValue] = useState(new Date('2000-01-01 ' + prosp.value))
    function handleChange(date) { setValue(date) }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Grid container className={classes.grid} justify="space-around">
                <TimePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label={!prosp.label ? '' : prosp.label}
                    cancelLabel={'Cancelar'}
                    format={!prosp.format ? 'HH:mm' : prosp.format}
                    value={value}
                    autoOk={true}
                    onChange={(e) => handleChange(e)}
                    ampm={!prosp.ampm ? false : prosp.ampm}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}

//RELÓGIO SELECIONÁVEL E DIGITÁVEL
function ComponentsKeyboardDateTimePicker(prosp) {
    const classes = useStyles();
    const [value, setValue] = useState(new Date('2000-01-01 ' + prosp.value))
    function handleChange(date) { setValue(date) }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Grid container className={classes.grid} justify="space-around">
                <KeyboardDateTimePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label={!prosp.label ? '' : prosp.label}
                    cancelLabel={'Cancelar'}
                    format={!prosp.format ? 'HH:mm' : prosp.format}
                    value={value}
                    autoOk={true}
                    onChange={(e) => handleChange(e)}
                    ampm={!prosp.ampm ? false : prosp.ampm}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}


export { ComponentsDatePicker, ComponentsKeyboardDatePicker, ComponentsTimePicker, ComponentsKeyboardDateTimePicker }