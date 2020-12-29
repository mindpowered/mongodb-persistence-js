const maglev = require('@mindpowered/maglev');

class Persistence {
    constructor(bus) {
        this.jsbus = new maglev.maglev.MagLevJs(bus);
        this.jsbus.register('Persistence.EnglishAuction.Auction.CreateNew', (args) => {
            this.noimpl('Persistence.EnglishAuction.Auction.CreateNew')
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindById', (args) => {
            this.noimpl('Persistence.EnglishAuction.Auction.FindById')
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindStarting', (args) => {
            this.noimpl('Persistence.EnglishAuction.Auction.FindStarting')
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindEnding', (args) => {
            this.noimpl('Persistence.EnglishAuction.Auction.FindEnding')
        });
        this.jsbus.register('Persistence.EnglishAuction.Auction.FindOpen', (args) => {
            this.noimpl('Persistence.EnglishAuction.Auction.FindOpen')
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.CountForAuction', (args) => {
            this.noimpl('Persistence.EnglishAuction.Bid.CountForAuction')
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.FindByHighestPriceForAuction', (args) => {
            this.noimpl('Persistence.EnglishAuction.Bid.FindByHighestPriceForAuction')
        });
        this.jsbus.register('Persistence.EnglishAuction.Bid.New', (args) => {
            this.noimpl('Persistence.EnglishAuction.Bid.New')
        });
    }

    noimpl(method) {
        var data = ["_not_implemented_", "mongodb-persistence", "js", method];
        this.jsbus.call("MindPowered.Telemetry.Send", data, function(dummy){});
        var msg = "You are trying to use the '" + method + "' method but it's not quite done yet. Please email support@mindpowered.dev to find out when it will be done.";
        throw msg;
    }
}

module.exports = {persistence: {Persistence}};
