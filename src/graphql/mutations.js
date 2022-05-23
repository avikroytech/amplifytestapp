/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createDeliverySchedule = /* GraphQL */ `
  mutation CreateDeliverySchedule(
    $input: CreateDeliveryScheduleInput!
    $condition: ModelDeliveryScheduleConditionInput
  ) {
    createDeliverySchedule(input: $input, condition: $condition) {
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
export const updateDeliverySchedule = /* GraphQL */ `
  mutation UpdateDeliverySchedule(
    $input: UpdateDeliveryScheduleInput!
    $condition: ModelDeliveryScheduleConditionInput
  ) {
    updateDeliverySchedule(input: $input, condition: $condition) {
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
export const deleteDeliverySchedule = /* GraphQL */ `
  mutation DeleteDeliverySchedule(
    $input: DeleteDeliveryScheduleInput!
    $condition: ModelDeliveryScheduleConditionInput
  ) {
    deleteDeliverySchedule(input: $input, condition: $condition) {
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
