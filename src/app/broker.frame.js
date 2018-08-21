export default class FrameBroker{
    static up(){
        const {history,location}=this.props;
        const path=location.pathname.split('/');
        history.push('/'+path[path.length-2]);
    }
}