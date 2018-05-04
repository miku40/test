angular.module('invoice2',['finance2'])
	.controller('InvoiceController',['currencyConverter',function(currencyConverter){
		this.qty = 1;
		this.cost = 2;
		this.inCurr = 'CNY';
		this.currencies = currencyConverter.currencies;
		this.usdToForeignRates = {
			USD: 1,
			EUR: 0.74,
			CNY: 6.09
		};

		this.total = function total(outCurr){
			return currencyConverter.convert(this.qty*this.cost,this.inCurr,outCurr);
		};
		this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
			return amount * this.usdToForeignRates[outCurr] /this.usdToForeignRates[inCurr];
		};
		this.pay = function pay(){
			window.alert('谢谢');
		};
	}]);