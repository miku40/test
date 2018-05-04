angular.module('invoice3',['finance3'])
	.controller('InvoiceController',['currencyConverter',function(currencyConverter){
		this.qty = 1;
		this.cost = 2;
		this.inCurr = 'CNY';
		this.currencies = currencyConverter.currencies;
		

		this.total = function total(outCurr){
			return currencyConverter.convert(this.qty*this.cost,this.inCurr,outCurr);
		};
		
		this.pay = function pay(){
			window.alert('谢谢');
		};
	}]);