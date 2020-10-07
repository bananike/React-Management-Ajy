import React from 'react';

class Customer extends React.Component {
    render(){
        return(
            <div>
                <CustomerProfile image={this.props.image} id={this.props.id} name={this.props.name} />
                <CustomerInfo title={this.props.title} date={this.props.date} content={this.props.content} />
            </div>
        );
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img className="img" src={this.props.image} alt="Profile" />
                <h2>{this.props.name} <small>({this.props.id})</small></h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title} <small>{this.props.date}</small></h2>
                <div>{this.props.content}</div>
            </div>
        )
    }
}

export default Customer;