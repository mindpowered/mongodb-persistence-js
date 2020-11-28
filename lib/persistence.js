const maglev = require('@mindpowered/maglev');

class Persistence {
    constructor(bus) {
        this.jsbus = new maglev.maglev.MagLevJs(bus);
        this.jsbus.register('Persistence.EnglishAuction.Auction.CreateNew', (args) => {
            return "123";
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindById', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindStarting', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindStarting', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindEnding', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.CountForAuction', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.FindByHighestPriceForAuction', (args) => {
            return null;
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.New', (args) => {
            return null;
        });
    }
}

module.exports = {persistence: {Persistence}};
