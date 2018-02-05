/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import Avatar from './AvatarViewer'
import Buttons from './ButtonViewer'
import SelectField from './SelectFieldViewer'
import SelectMultiple from './SelectMultipleViewer'
import HorizontalForm from './HorizontalFormViewer'
import Input from './InputViewer'
import DataFieldButton from './DataFieldButtonViewer'
import Checkbox from './CheckboxViewer'
import RadioButton from './RadioButtonViewer'
import Card from './CardViewer'
import DialogViewer from './DialogViewer'
import DateTimeViewer from './DateTimeViewer'
import AppBarViewer from './AppBarViewer'
import SimpleBadge from './Badges'
import ButtonMenu from './PopupMenu'


import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import Typography from 'material-ui/Typography'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
  typography: {
      fontFamily:
        '-apple-system,system-ui,BlinkMacSystemFont,' +
        '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      button: {
        fontStyle: 'italic',
      },
    },
});

storiesOf('Turkcell Web Components', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <MuiThemeProvider theme={theme}>
            <div style={{ width: '100%', maxWidth: 1000, minWidth: 600 }} >
              {storyKind}
            </div>
          </MuiThemeProvider>
        );
    })
    .add('Avatar', () => {
        setOptions({
            name: '',
            url: '',
            goFullScreen: false,
            downPanelInRight: false,
        });
        return <Avatar />;
    })
    .add('Buttons', () => (
      <Buttons />
    ))    
    .add('SelectField', () => (
      <SelectField />
    )) 
    .add('SelectMultiple', () => (
      <SelectMultiple />
    ))
    .add('HorizontalForm', () => (
      <HorizontalForm />
    ))
    .add('Input', () => (
      <Input />
    ))
    .add('DataFieldButton', () => (
      <DataFieldButton />
    ))
    .add('Checkbox', () => (
      <Checkbox />
    ))
    .add('RadioButton', () => (
      <RadioButton />
    ))
    .add('Card', () => (
      <Card />
    ))
    .add('Dialog', () => (
      <DialogViewer />
    ))
    .add('DateTime', () => (
      <DateTimeViewer />
    ))
    .add('AppBar', () => (
      <AppBarViewer />
    ))
    .add('SimpleBadge', () => (
      <SimpleBadge />
    ))
    .add('ButtonMenu', () => (
      <ButtonMenu />
    ))
