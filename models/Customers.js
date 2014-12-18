module.exports = function(Customer) {
  
  Customer.definition.properties.createdAt.default = function() {
    return new Date();
  };
}

