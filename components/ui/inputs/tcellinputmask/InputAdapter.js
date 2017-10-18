import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input'

const isAndroid = navigator != null && /Android/i.test(navigator.userAgent);

export class InputAdapter extends Component {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        caretPosition: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    }
    componentDidMount() {       
        this._setCaretPosition();
    }
    componentDidUpdate() {
        this._setCaretPosition();
    }
    get caretPosition() {
        return this.input.selectionEnd;
    }
    _setCaretPosition() {
        if (this.input === document.activeElement) {
            if (isAndroid === true) {
                setTimeout(() => {
                    this.input.setSelectionRange(this.props.caretPosition, this.props.caretPosition, 'none');
                }, 0);
            }
            else {
                this.input.setSelectionRange(this.props.caretPosition, this.props.caretPosition, 'none');
            }
        }
    }
    _getRef = (ref) => {
        this.input = ref;
    };
    _onChange = (event) => {
       
        event.persist();
        this.props.onChange(event);
    };
    render() {
       
        const {caretPosition, onChange, ...rest} = this.props;
        return <Input ref={this._getRef} type="text" onChange={this._onChange} {...rest} />;
    }
}