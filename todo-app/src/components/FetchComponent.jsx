import React from 'react';
import Card from './Card';

class FetchComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: "Hello From React", data: []}
  }
  /*
  handleFetchData = () => {
    fetch('http://localhost:3001/backend')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({text: data.data})
        }); 
  }
  */
  handleFetchData = () => {
    fetch('http://localhost:3001/todo_list')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({data: data})
        }); 
  }
/*
  Card = (props) => {
    const {title, description, image} = props.data
    console.log("data:", props.data)
    return (
      <div style={{backgroundColor: 'grey'}}>
          <p>{title}</p>
          <p>{description}</p>
          <img src={image} style={{width: 200, height: 100}}/>
      </div>
    )
  }
*/

  handlePostData = () => {
    let dataToSave = { title: "Save Title", description: "Save Description", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3EMsr-8AjBp-m_febOvDMpIQowfMaMwhDw&usqp=CAU" }
    fetch('http://localhost:3001/todo_list', {method: "POST", mode: "cors", headers: { "Content-Type": "application/json"},  body: JSON.stringify(dataToSave)})
        .then(response => response.json())
        .then(data => {console.log(data)}); 
  }

  render() {
    // const { Card } = this
    return (
        <React.Fragment>
            <div>{this.state.text}</div>
            <button onClick={this.handleFetchData}>Fetch Data</button>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexFlow: 'wrap'}}>
              {this.state.data.map((element)=>{
                console.log(element.data)
                let item = JSON.parse(element.data)
                console.log(item)
                // return <div>{item["title"]}</div>
                return <Card data={item}/>
              })}
            </div>
            <button onClick={this.handlePostData}>Post Data</button>
        </React.Fragment>
    );
  }
}
export default FetchComponent;