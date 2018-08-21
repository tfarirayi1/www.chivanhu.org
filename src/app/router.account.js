import React            from 'react';
import HomePage         from 'page.account';
import BillingPage      from 'page.account--billing';
import ProjectsPage     from 'page.account--projects';
import BlankPage        from 'page.blank';
import RouteBroker      from 'broker.route';
import {Switch,Route}   from 'react-router-dom';

export default class AccountRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                component:HomePage,
                endpoint:'/account',
                exact:true,
            },
            {
                endpoint:'/account/billing',
                component:BillingPage,
                exact:true,
            },
            {
                endpoint:'/account/projects',
                component:ProjectsPage,
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