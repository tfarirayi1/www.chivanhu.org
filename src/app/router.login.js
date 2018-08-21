import React                from 'react';
import LoginPage            from 'page.login';
import ResetPasswordPage    from 'page.login--reset-password';
import ChangePasswordPage   from 'page.login--change-password';
import BlankPage            from 'page.blank';
import RouteBroker          from 'broker.route';
import {Switch,Route}       from 'react-router-dom';

export default class HelpRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                endpoint:'/login',
                component:LoginPage,
                exact:true,
            },
            {
                endpoint:'/login/reset-password',
                component:ResetPasswordPage,
                exact:true,
            },
            {
                endpoint:'/login/change-password',
                component:ChangePasswordPage,
                exact:true,
            },
        ];
    }

    render(){
        const RouteList=()=>{
            return this.renderRoutes();
        };
        return(
            <Switch>
                <RouteList/>
                <Route component={BlankPage}/>
            </Switch>
        );
    }
}