import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radio from 'material-ui/Radio';
import TcellRadioGroup from 'tcellradiogroup';
import { FormControlLabel } from 'material-ui/Form';

import TcellHorizontalForm from 'tcellhorizontalform';

import { Cities } from './Lookup'
import CityFields from './CityFields';

class CityDialog extends Component {

    constructor(props) {
        super(props);
        this.dialogValue = this.dialogValue.bind(this);
        this.state={
            city: null
        }
    }

    dialogValue() {
        return this.state.city;
    }

    handleCityFormChange = (event) => {
        this.cityForm.onChange(event);
    }

    createCityOptions(cities) {
        const cityOptions = cities.map((option) => {
            return <FormControlLabel value={option.id} key={option.id} control={<Radio />} label={option.text} />
        })
        return cityOptions;
    }

    componentWillMount(){      
        this.setState({city: null})
    }

    render() {
        const { value, ...other } = this.props;
        return (
           
                <TcellHorizontalForm columnCount={1}>
                    <TcellRadioGroup name="CITY" value={ this.state.city }
                        onChange={(event)=> this.setState({city: event.target.value})} >
                        {this.createCityOptions(Cities)}
                    </TcellRadioGroup>
                </TcellHorizontalForm>
           
        );
    }
}

export default CityDialog;
