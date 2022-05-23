/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      firstname
      lastname
      email
      defaultaddress
      phone
      isphonenotificationpreffered
      isemailnotificationpreferred
      Orders {
        items {
          id
          customerid
          delverytime
          items
          customerID
          createdAt
          updatedAt
          orderDeliveryScheduleId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      firstname
      lastname
      email
      defaultaddress
      phone
      isphonenotificationpreffered
      isemailnotificationpreferred
      Orders {
        items {
          id
          customerid
          delverytime
          items
          customerID
          createdAt
          updatedAt
          orderDeliveryScheduleId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      firstname
      lastname
      email
      defaultaddress
      phone
      isphonenotificationpreffered
      isemailnotificationpreferred
      Orders {
        items {
          id
          customerid
          delverytime
          items
          customerID
          createdAt
          updatedAt
          orderDeliveryScheduleId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      customerid
      delverytime
      items
      customerID
      DeliverySchedule {
        id
        orderid
        originaddress
        expecteddeliverytime
        delay
        early
        deliveryaddress
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderDeliveryScheduleId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      customerid
      delverytime
      items
      customerID
      DeliverySchedule {
        id
        orderid
        originaddress
        expecteddeliverytime
        delay
        early
        deliveryaddress
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderDeliveryScheduleId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      customerid
      delverytime
      items
      customerID
      DeliverySchedule {
        id
        orderid
        originaddress
        expecteddeliverytime
        delay
        early
        deliveryaddress
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderDeliveryScheduleId
    }
  }
`;
export const onCreateDeliverySchedule = /* GraphQL */ `
  subscription OnCreateDeliverySchedule {
    onCreateDeliverySchedule {
      id
      orderid
      originaddress
      expecteddeliverytime
      delay
      early
      deliveryaddress
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDeliverySchedule = /* GraphQL */ `
  subscription OnUpdateDeliverySchedule {
    onUpdateDeliverySchedule {
      id
      orderid
      originaddress
      expecteddeliverytime
      delay
      early
      deliveryaddress
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDeliverySchedule = /* GraphQL */ `
  subscription OnDeleteDeliverySchedule {
    onDeleteDeliverySchedule {
      id
      orderid
      originaddress
      expecteddeliverytime
      delay
      early
      deliveryaddress
      status
      createdAt
      updatedAt
    }
  }
`;
