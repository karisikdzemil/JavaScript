const customers = ["Max", "Manuel", "Anna"];

const activeCustomers = ["Max", "Manuel"];

    const inactveCustomers = _.difference(customers, activeCustomers);
    
    console.log(inactveCustomers);