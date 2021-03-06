import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const LoginPage = ({startLogin}) => {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className=".box-layout__title">Welcome to Expense Tracker</h1>
                    <p>The first step to financial freedom</p>
                    {/* <div className="box-layout__image"></div> */}
                    <button className="login-button" onClick={startLogin}><FontAwesomeIcon className="google-icon" icon={faGoogle} />Login</button>
                </div>
            </div>
        );
    };

    const mapDispatchToProps = (dispatch) => ({
        startLogin: () => dispatch(startLogin())
    });

export default connect(undefined, mapDispatchToProps)(LoginPage);