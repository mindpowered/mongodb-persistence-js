/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const persistence = require('../lib/persistence.js');

/**
 * Persistence
 */
class Persistence {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new persistence.persistence.Persistence(bus);
	}

	/**
	 * 
	 * @param {object}  
	 * @return {Promise}  Promise will resolve to type string.
	*/
	EnglishAuction_Auction_CreateNew() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		let ret = jsbus.call('Persistence.EnglishAuction.Auction.CreateNew', args);
		return ret;
	}

	/**
	 * 
	*/
	EnglishAuction_Auction_FindById() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Auction.FindById', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Auction_FindStarting() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Auction.FindStarting', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Auction_FindEnding() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Auction.FindEnding', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Auction_FindOpen() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Auction.FindOpen', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Bid_CountForAuction() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Bid.CountForAuction', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Bid_FindByHighestPriceForAuction() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Bid.FindByHighestPriceForAuction', args);
	}

	/**
	 * 
	*/
	EnglishAuction_Bid_New() {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [];
		jsbus.call('Persistence.EnglishAuction.Bid.New', args);
	}

}
module.exports = Persistence;

