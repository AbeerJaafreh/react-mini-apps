import React, { Component } from 'react';
class Content extends Component {
    render() { 
        const{name,email,phone,city,state,country,organization,job_profile,add_info}=this.props.info;

        return ( 
            <div>
                <div className="card text-center">
                    <div className="card-header">{name}</div>
                   <div className="card-body">
                        <div className="card-text">
                            <p>Name : {name}</p>
                            <p>Email : {email}</p>
                            <p>Phone : {phone}</p>
                            <p>City : {city}</p>
                            <p>State :{state}</p>
                            <p>Country : {country}</p>
                            <p>organization: {organization}</p>
                            <p>Job Profile : {job_profile}</p>
                            <p>Add Info  : {add_info}</p>

                        </div>
                   </div>

                </div>
            </div>
         );
    }
}
 
export default Content;