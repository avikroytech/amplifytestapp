import logo from './logo.svg';
import './App.css';

import {Analytics, Amplify, API} from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
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

  const [deliveryTime, setDeliveryTime] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [orderItems, setOrderItems] = useState("")

  const [listCustomer, setListCustomer] = useState([]);

  useEffect(() => {

    async function getAllCustomers(){
      const allCustomers = await API.graphql( {query: queries.listCustomers} );
      //console.log(allCustomers.data.listCustomers);
      setListCustomer(allCustomers.data.listCustomers.items);
    }

    //Analytics.record("home page visit");
    getAllCustomers();
  }, [])

  const handleCustomerFormSubmit = async (e, formType) => {
    e.preventDefault();

    const customerInformation = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      defaultaddress: address,
      phone: phoneNumber,
      isphonenotificationpreffered: true,
      isemailnotificationpreferred: false
    }

    // console.log(customerInformation);
    try{
      const newCustomer = await API.graphql({
        query: mutations.createCustomer, 
        variables: {input: customerInformation}});
    }
    catch(err){
      console.log(err);
    }
    // console.log(newCustomer);
  }

  const handleOrderFormSubmit = async (e, formType) => {
    e.preventDefault();

    const orderInformation = {
      id :'1111111',
      customerid: customerId,
      delverytime: deliveryTime,
      items: ['Test Items']
    }

    console.log(orderInformation);
    try{
      const newOrder = await API.graphql({
        query: mutations.createOrder, 
        variables: {input: orderInformation}});
    }
    catch(err){
      console.log(err);
    }
    // console.log(newOrder);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Customers</h3>
        <select>
        {listCustomer && listCustomer.map(item =>
         
            <option key={item.id}>
              {item.firstname}
            </option>
         )}
        </select>
        
        <form id="addCustomer" onSubmit={handleCustomerFormSubmit} >
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
            {/* <label for="isphonenotificationpreffered">Prefer Phone Notification:
           <input type="text" name="isphonenotificationpreffered" 
           id="isphonenotificationpreffered"
           onChange={e => setPhoneNotificationPreffered(e.target.value) }/>
           </label>
            <label for="isemailnotificationpreferred">Prefer Email Notification:
           <input type="text" name="isemailnotificationpreferred"
           id="isemailnotificationpreferred"
           onChange={e => setEmailNotificationPreffered(e.target.value) }/>
           </label>
            <br/> */}
            <label for="address">Address:
           <input type="text" name="address" id="address"
           onChange={e => setAddress(e.target.value) }/>
           </label>
           <br/>
            <br/>
          <button type='submit'>Add Customer</button>
        </form>
        <br/>
        <form id="addOrder" onSubmit={handleOrderFormSubmit} >
          <p>Customers</p>
          <select onChange={e => { 
            console.log('value - ' + e.target.value);
            setCustomerId(e.target.value);} } >
          {listCustomer && listCustomer.map(item =>
          
              <option key={item.id} id={item.id} value={item.id}>
                {item.firstname}
              </option>
          )}
          </select>
          <br/>
          <label for="delivery_time">
            Delivery Time: 
            <input type="datetime-local" name="delivery_time" id="delivery_time"
            onChange={e => setDeliveryTime('2022-05-23T20:13:00.000Z') }/>
            
          </label>
          <br/>
          <label for="order_items">
            Items for Order:
            <br/>
            <textarea rows={5} cols={30} maxLength={15} type="text" name="order_items" id="order_items"
            onChange={e => setOrderItems(e.target.value) }/>
          </label>
          <br/>
          <button type='submit'>Add Order</button>
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
