(function() {
  'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController )
.controller('AlreadyBoughtController',AlreadyBoughtController )
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
  //  var rec = ShoppingListCheckOffService.getBoughtItem(itemIndex);
  //  ShoppingListCheckOffService.addItem(rec);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems = [
  {name: "cookies", quantity: 10},
  {name: "cookies", quantity: 20},
  {name: "cookies", quantity: 10},
  {name: "cookies", quantity: 10},
  {name: "cookies", quantity: 10}
];

var boughtItems = [];

service.removeItem = function (itemIndex){
  var newObject = toBuyItems.splice(itemIndex,1)[0];
  boughtItems.push({name: newObject.name,quantity: newObject.quantity});
};

// service.addItem = function (record) {
//      boughtItems.push(record);
// };

service.getBoughtItem = function (boughtItemIndex){
    return toBuyItems[boughtItemIndex];
};

service.getBoughtItems = function () {
  return boughtItems;
};

service.getToBuyItems = function () {
      return toBuyItems;
};

};

}());
