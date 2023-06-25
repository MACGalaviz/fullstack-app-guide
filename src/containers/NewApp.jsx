import React from 'react';
import FirstComponent from '../components/FirstComponent';
import FetchComponent from '../components/FetchComponent';


class NewApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }  
  render() {
    return (
        <React.Fragment>
            <div> Hello From NewApp </div> 
            {/* <FirstComponent /> */}
            <FirstComponent text={"Text from NewApp To FirstComponent"} />
            <FetchComponent />
        </React.Fragment>
    );
  }
}
export default NewApp;