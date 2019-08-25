import React,{Component} from 'react';
import logo from './logo.svg';
import Display from './components/DisplayArea';
import Content from './components/Content';
import './App.css';

class App extends Component {
  state = { num:1, data:[
  { id:1,
    name:'John Smith',
    email:'jsmith@test.com',
    phone:'123456',
    city:'Chennai',
    state:'Tamil Nadu',
    country:'India',
    organization:'Company 3',
    job_profile:'Software Developer',
    additional_info:'Buys Lots of product in general'},
  {
    id:2,
    name:'ABCD',
    email:'abcd@test.com',
    phone:'123456',
    city:'Chennai',
    state:'Tamil Nadu',
    country:'India',
    organization:'Company 3',
    job_profile:'Software Developer',
    additional_info:'Buys Lots of product in general'
  },
  {id:3,
    name:'Tyrion',
    email:'tyrion@test.com',
    phone:'123456',
    city:'Chennai',
    state:'Tamil Nadu',
    country:'India',
    organization:'Company 3',
    job_profile:'Software Developer',
    additional_info:'Buys Lots of product in general'}
  ] }
  handleClick=(id)=>{
    this.setState({num:id})
  }
  render() { 
    return (
  <div className="container-fluid d-flex flex-column grow">
    <header className="row App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Simple React App </p>
    </header>
    {/* ------------- */}
    <div className="row "> 
      <header className="col-12 "><Display/></header>
        <div className="card  col-4 ">    
          {this.state.data.map(content => {
            return (<Display key={content.id} info={content} select={this.handleClick}/>)
          })}
        </div>

        <div className="col-8 main"> 
        <Content info={this.state.data.filter(content =>
           {return content.id === this.state.num;})[0]}/>
        
          
        </div>

       
        </div>
   

  </div>  );
  }
}
 
export default App;

