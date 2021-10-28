import * as React from 'react';
import 'date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Button,
  TextField,
  TextareaAutosize,
  Grid,
  Box,
  Typography,
  FormControl,
  Container,
  InputLabel,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './useStyles';

const theme = createMuiTheme();

export default function ProfileDetail(): JSX.Element {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        ghh
      </Container>
    </ThemeProvider>
  );
}
