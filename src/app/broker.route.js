import React    from 'react';
import {Route}  from 'react-router-dom';

export default class RouteBroker{
    static renderRoutes(){
        return this.state.routes.map((p1,p2)=>{
            const item=p1;
            const position=p2;
            const component=(p1)=>{
                const routeObject=p1;
                const props={};
                props.userId=this.props.userId;
                return React.createElement(item.component,Object.assign(props,routeObject));
            };
            return(
                <Route key={position} exact={item.exact} path={item.endpoint} component={component}/>
            );
        });
    }
}