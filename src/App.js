import logo from './logo.svg';
import './App.css';

import {Analytics, Amplify, API} from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import * as mutations from './graphql/mutations';
import PhoneInput from 'react-phone-number-input';

import { useEffect, useState } from 'react';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut, user}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNotificationPreffered, setPhoneNotificationPreffered] = useState("");
  const [emailNotificationPreffered, setEmailNotificationPreffered] = useState("");

  useEffect(() => {
    Analytics.record("home page visit")
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const customerInformation = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      defaultaddress: address,
      phone: phoneNumber,
      isphonenotificationpreffered: phoneNotificationPreffered,
      isemailnotificationpreferred: emailNotificationPreffered
    }

    const newCustomer = await API.graphql({query: mutations.createCustomer, variables: {input: customerInformation}});
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleFormSubmit} >
          <PhoneInput country="Canada" />
          <label for="first_name">
            First Name: 
            <input type="text" name="first_name" id="first_name"
            onChange={e => setFirstName(e.target.value) }/>
          </label>
           
           <label for="last_name">Last Name:
              <input type="text" name="last_name" id="last_name"
              onChange={e => setLastName(e.target.value) }/>
           </label>
          <br/>
          <label for="phone_number" >Phone Number:
            <input type="text" name="phone_number" id="phone_number"
            onChange={e => setPhoneNumber(e.target.value) }/> 
          </label>
          
          <label for="email_address">Email:
          <input type="email" name="email_address" id="email_address"
          onChange={e => setEmail(e.target.value) }/>
          </label>
           <br/>
            <label for="isphonenotificationpreffered">Prefer Phone Notification:
           <input type="text" name="isphonenotificationpreffered" 
           id="isphonenotificationpreffered"
           onChange={e => setPhoneNotificationPreffered(e.target.value) }/>
           </label>
            <label for="isemailnotificationpreferred">Prefer Email Notification:
           <input type="text" name="isemailnotificationpreferred"
           id="isemailnotificationpreferred"
           onChange={e => setEmailNotificationPreffered(e.target.value) }/>
           </label>
            <br/>
            <label for="address">Address:
           <input type="text" name="address" id="address"
           onChange={e => setAddress(e.target.value) }/>
           </label>
           <br/>
            <br/>
          <button type='submit'>Add Customer</button>
        </form>
        <>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
