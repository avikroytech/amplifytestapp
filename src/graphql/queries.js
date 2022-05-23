/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        defaultaddress
        phone
        isphonenotificationpreffered
        isemailnotificationpreferred
        Orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDeliverySchedule = /* GraphQL */ `
  query GetDeliverySchedule($id: ID!) {
    getDeliverySchedule(id: $id) {
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
export const listDeliverySchedules = /* GraphQL */ `
  query ListDeliverySchedules(
    $filter: ModelDeliveryScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliverySchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
