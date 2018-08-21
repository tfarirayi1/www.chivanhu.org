import React    from 'react';
import {Link}   from 'react-router-dom';
import          'styles/index.css';

export default class IndexPage extends React.Component{
    render(){
        const Neutral=()=>(
            <div className="index---neutral">
                <div>
                    <Link to="/glossary">glossary</Link>
                </div>
            </div>
        );

        const Content=()=>{
            if(this.props.userId){
                return(
                    <React.Fragment>
                        <div>
                            <Link to="/account">account</Link>
                        </div>
                        <Neutral/>
                    </React.Fragment>

                );
            }else{
                return(
                    <React.Fragment>
                        <div>
                            <Link to="/login">login</Link>
                        </div>
                        <div>
                            <Link to="/register">register</Link>
                        </div>
                        <Neutral/>
                    </React.Fragment>
                );
            }
        };
        return(
            <div className="index">
                <Content/>
            </div>
        );
    }
}