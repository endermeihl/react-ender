/**
 * Created by ender on 2017/8/30.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {checkPhone, none} from '../actions.js';

class phone extends Component {
    constructor(props, context) {
        super(props, context);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const inputValue = event.target.value;
        if (inputValue.trim().length !== 11) {
            this.props.onNone();
        }else{
            this.props.onAdd(inputValue);
        }
    }

    render() {
        return (<div className="login-div" id="register">
                <dl>
                    <dt><label htmlFor="phone">手机号</label></dt>
                    <dd>
                        <input id="phone" type="text" style={{background: '#fff'}}
                               placeholder="请填写手机号" onChange={this.onInputChange}
                               autoFocus required/>
                    </dd>
                </dl>
            </div>
        )
    }
}

phone.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onNone: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(checkPhone(text));
        },
        onNone: () => {
            dispatch(none());
        },
    }
};


export default connect(null, mapDispatchToProps)(phone);
