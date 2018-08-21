import React        from 'react';
import LoginBroker  from 'broker.login';
import FormBroker   from 'broker.form';
import {Redirect}   from 'react-router-dom';

export default class RegisterPage extends React.Component{
    constructor(){
        super();
        // load procedures
        this.handleInputChange=FormBroker.handleInputChange.bind(this);
        this.traverseForm=FormBroker.traverseForm.bind(this);
        this.register=LoginBroker.register.bind(this);
        // set state
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput='';
        this.state.businessNameInput='';
        this.state.passwordInput='';
        this.state.passwordConfirmationInput='';
    }

    render(){
        const Content=()=>{
            if(this.props.userId===''){
                return(
                    <div ref={this.form}>
                        <div>
                            <label htmlFor="emailInput">
                                email
                            </label>
                            <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput}
                                onChange={this.handleInputChange} onKeyDown={this.traverseForm}/>
                        </div>
                        <div>
                            <label htmlFor="businessNameInput">
                                business name
                            </label>
                            <input id="businessNameInput" type="text" autoComplete="off" value={this.state.businessNameInput}
                                onChange={this.handleInputChange} onKeyDown={this.traverseForm}/>
                        </div>
                        <div>
                            <label htmlFor="passwordInput">
                                password
                            </label>
                            <input id="passwordInput" type="password" value={this.state.passwordInput}
                                onChange={this.handleInputChange} onKeyDown={this.traverseForm}/>
                        </div>
                        <div>
                            <label htmlFor="passwordConfirmationInput">
                                confirm password
                            </label>
                            <input id="passwordConfirmationInput" type="password" value={this.state.passwordConfirmationInput}
                                onChange={this.handleInputChange} onKeyDown={this.traverseForm}/>
                        </div>
                        <div>
                            <div ref={this.formSubmitButton} tabIndex="0" onClick={this.register}>
                                    submit
                            </div>
                        </div>
                    </div>
                );
            }else{
                return(
                    <Redirect to='/account'/>
                );
            }
        };

        return(
            <div className="register">
                <div>
                    register
                </div>
                <Content/>
            </div>
        );
    }
}