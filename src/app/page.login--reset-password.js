import React        from 'react';
import LoginBroker  from 'broker.login';
import FormBroker   from 'broker.form';

export default class ResetPasswordPage extends React.Component{
    constructor(props){
        super(props);
        // load procedures
        this.resetPassword=LoginBroker.resetPassword.bind(this);
        this.handleInputChange=FormBroker.handleInputChange.bind(this);
        this.traverseForm=FormBroker.traverseForm.bind(this);
        // set state
        const {location}=props;
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput=location.state?location.state.emailInput?location.state.emailInput:'':'';
    }
    
    render(){
        return(
            <div className="login--reset-password">
                <div>
                    password-reset
                </div>
                <div ref={this.form}>
                    <div>
                        <label htmlFor="emailInput">
                            email
                        </label>
                        <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput}
                            onChange={this.handleInputChange} onKeyDown={this.traverseForm}/>
                    </div>
                    <div>
                        <div tabIndex="0" ref={this.formSubmitButton} onClick={this.resetPassword}>
                            submit 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}