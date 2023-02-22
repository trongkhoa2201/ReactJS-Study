const CO = (props) => {
    if(props.number % 2 == 0){
       return(<p>Số {props.number} này là số chẳn</p>)
            }
            return(<p>{props.number} là số lẻ</p>)      
}
export default CO