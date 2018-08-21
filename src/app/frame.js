import React                from 'react';
import LoginBroker          from 'broker.login';
import MainRouter           from 'router.main';
import FrameBroker          from 'broker.frame';
import {withRouter}         from 'react-router-dom';
import {ArrowUpwardIcon}    from 'mdi-react';
import                      'styles/frame.css';

class Frame extends React.Component{
    constructor(){
        super();
        // load procedures
        this.up=FrameBroker.up.bind(this);
        this.signOut=LoginBroker.signOut.bind(this);
        this.verifyUser=LoginBroker.verifyUser.bind(this);
        this.configureAuthentication=LoginBroker.configure.bind(this);
        // set state
        this.state={}
        this.state.userId='';
        // perform initial actions
        this.configureAuthentication();
        document.title='website.prototype';
    }

    componentDidMount(){
        // this.verifyUser();
    }

    render(){
        const ToolPanel=()=>{
            if(this.props.location.pathname==='/'){
                return null;
            }else{
                return(
                    <div className="frame---tool-panel">
                        <div className="frame---navigation-button">
                            <ArrowUpwardIcon size="1em" tabIndex="0" onClick={this.up}/>
                        </div>  
                    </div>
                );
            }
        };
        
        return(
            <div className="frame">
                <ToolPanel/>
                <div className="frame---view-panel">
                    <MainRouter userId={this.state.userId}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Frame);