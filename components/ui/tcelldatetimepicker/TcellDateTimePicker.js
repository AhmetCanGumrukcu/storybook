import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/TextField'
import { ListItem } from 'material-ui/List'
import DateRangeIcon from 'material-ui-icons/DateRange'
import { DateTimePicker } from './DateTimePicker'
import { TcellComponent } from 'tcellcomponent'
//import ComponentHelper from 'componenthelper'
import moment from 'moment'

class ReadOnlyTextField extends TcellComponent {
    render() {
        const { value, ...others } = this.props;
        return (
            <TextField value={value ? value : ''} { ...others }></TextField>
        )
    };
}

class TcellDateTimePicker extends TcellComponent {
    constructor(props) {
        super(props);
        if (props.value) {
            this.state = this.acquireDateTime(props.value);
        }
        else {
            this.state = {
                open: false,
                display: null,
                rawday: null,
                rawmonth: null,
                rawyear: null,
                rawhours: null,
                rawminutes: null,
                rawweekday: null
            };
        }
        this.shapeDisplay = this.shapeDisplay.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    shapeDisplay(event) {
        let actualDisplay = "";
        let value = null;
        let monthInt = null;
        switch (event.state.month) {
            case "Ocak":
                monthInt = "01";
                break;
            case "January":
                monthInt = "01";
                break;
            case "Şubat":
                monthInt = "02";
                break;
            case "Februray":
                monthInt = "02";
                break;
            case "Mart":
                monthInt = "03";
                break;
            case "March":
                monthInt = "03";
                break;
            case "Nisan":
                monthInt = "04";
                break;
            case "April":
                monthInt = "04";
                break;
            case "Mayıs":
                monthInt = "05";
                break;
            case "May":
                monthInt = "05";
                break;
            case "Haziran":
                monthInt = "06";
                break;
            case "June":
                monthInt = "06";
                break;
            case "Temmuz":
                monthInt = "07";
                break;
            case "July":
                monthInt = "07";
                break;
            case "Ağustos":
                monthInt = "08";
                break;
            case "August":
                monthInt = "08";
                break;
            case "Eylül":
                monthInt = "09";
                break;
            case "September":
                monthInt = "09";
                break;
            case "Ekim":
                monthInt = "10";
                break;
            case "October":
                monthInt = "10";
                break;
            case "Kasım":
                monthInt = "11";
                break;
            case "November":
                monthInt = "11";
                break;
            case "Aralık":
                monthInt = "12";
                break;
            case "December":
                monthInt = "12";
                break;
        }

        if (event.state && event.state.showClock) {
            actualDisplay = `${event.state.day} ${event.state.month} ${event.state.year} ${event.state.hours}:${event.state.minutes}`
            value = `${event.state.year}-${monthInt}-${event.state.day} ${event.state.hours}:${event.state.minutes}`
        }
        else if (event.state) {
            actualDisplay = `${event.state.day} ${event.state.month} ${event.state.year}`
            value = `${event.state.year}-${monthInt}-${event.state.day}`
        }
        let myEvent = {
            target: {
                name: event.name,
                value: value
            }
        }
        this.setState({
            display: actualDisplay,
            open: false,
            rawday: event.state.day,
            rawmonth: event.state.month,
            rawyear: event.state.year,
            rawhours: event.state.hours,
            rawminutes: event.state.minutes,
            rawweekday: event.state.weekday
        });
        if (this.props.onChange) {
            this.props.onChange(myEvent);
        }
    }

    handleClick(event) {
        this.setState({
            open: true
        });
    };

    handleRequestClose() {
        this.setState({
            open: false
        });
    };

    acquireDateTime(value) {
        let tempDate = moment(value);
        var formattedDate = "";
        if (this.props.showClock) {
            formattedDate = tempDate.format("DD MMM YYYY HH:mm");
        }
        else {
            formattedDate = tempDate.format("DD MMM YYYY");
        }
        return {
            display: formattedDate,
            rawday: tempDate.format("DD"),
            rawhours: tempDate.format("HH"),
            rawminutes: tempDate.format("mm"),
            rawmonth: tempDate.format("MMMM"),
            rawweekday: tempDate.format("dddd"),
            rawyear: tempDate.format("YYYY")
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value && nextProps.value) {
            const { value } = nextProps;
            this.setState(this.acquireDateTime(value));
        }
        else if (this.props.value != nextProps.value && !nextProps.value) {
            let formattedDate = null;
            this.setState({
                display: formattedDate,
                rawday: null,
                rawmonth: null,
                rawyear: null,
                rawhours: null,
                rawminutes: null,
                rawweekday: null
            });
        }
    }

    componentDidMount() {
        const inputNode = ReactDOM.findDOMNode(this.textField);
        const inputs = inputNode.querySelectorAll('textarea');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('readonly', 'readonly')
        }
      
        const liNode = this.getClosestUp(inputNode, 'li');
        liNode.style.padding = "0px";

        if (this.device.desktop) {
            inputNode.querySelector('div').style.paddingRight = "14px";
        } else if (this.device.android) {
            inputNode.querySelector('div').style.paddingRight = "28px";
        }
    }
    getClosestUp = function(elem, selector) {
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get closest match
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }

        return null;
    }
    render() {
        const { dataSource, name, value, classes, showCalendar, showClock, ...others } = this.props;
        return (
            <div>
                <ListItem>
                    <ReadOnlyTextField
                        ref={(r) => { this.textField = r; }}
                        multiline
                        aria-owns={this.state.open ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        value={this.state.display}
                        { ...others }
                    >
                    </ReadOnlyTextField>
                    <DateRangeIcon onClick={this.handleClick} />
                </ListItem>
                {this.state.open && <DateTimePicker
                    showCalendar={showCalendar}
                    clickOnCancel={this.handleRequestClose}
                    clickOnOK={this.shapeDisplay}
                    showClock={showClock}
                    name={name}
                    day={this.state.rawday}
                    month={this.state.rawmonth}
                    hours={this.state.rawhours}
                    minutes={this.state.rawminutes}
                    year={this.state.rawyear}
                    weekday={this.state.rawweekday}
                />}
            </div>
        );
    }
}

export default TcellDateTimePicker;