import React from 'react';

export default class GlossaryPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
        this.state.data=[
            {
                key:'web-system',
                value:'_a group of associated websites designed to achieve a common purpose',
            },
            {
                key:'business process',
                value:'_logically related activities or tasks performed successively to achieve a specific result',
            },
            {
                key:'business operations',
                value:'_everything that happens within a company to keep it running and earning money',
            },
        ];
    }
    render(){
        const List=()=>{
            return this.state.data.map((a,b)=>{
                const item=a;
                const index=b;
                return(
                    <div key={index}>
                        <div>{item.key}</div>
                        <div>{item.value}</div>
                    </div>
                );
            });
        };
        return(
            <div className="glossary">
                <div>
                    glossary
                </div>
                <List/>
            </div>
        );
    }
}