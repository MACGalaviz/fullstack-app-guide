// function FirstComponent({text}) {
function Card(props) {
    const { title, description, image } = props.data
    
    return (
        <div style={{backgroundColor: 'grey'}}>
          <p>{title}</p>
          <p>{description}</p>
          <img src={image} style={{width: 200, height: 100}}/>
        </div>
    );
}
export default Card;