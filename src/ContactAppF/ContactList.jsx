import React, { Component } from 'react'

class ContactList extends Component {
    selectedContactHandler=()=>{
        this.props.selContact();
    }
  render() {
    return (
      <div>
          <h1>Contact List..bbb</h1>
          <pre>{JSON.stringify(this.selectedContactHandler)}</pre>
          <div className='container'>
              <div className='row'>
                  <div className='col'>
                  <table className='table table-hover'>
                      <thead className='bg-dark text-white'>
                          <tr>
                              <th> Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Country</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.props.contacts.map((contact)=>{
                                  return <tr key={contact.login.uuid} onClick={this.selectedContactHandler.bind(this,contact)}>
                                      <td>{contact.login.uuid}</td>
                                      <td>{contact.name.last}</td>
                                      <td>{contact.email}</td>
                                      <td>{contact.location.country}</td>
                                  </tr>
                              })
                          }
                      </tbody>
                  </table>
                  </div>

              </div>
          </div>

      </div>
    )
  }
}

 export default ContactList