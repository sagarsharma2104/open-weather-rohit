const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const openWeather = require('./../open-weather');

describe("Test suite for Märkischer Kreis city", function () {
    let profile;
    beforeEach(() => {
        profile = {
            "firstname": "First1",
            "lastname": "Last1",
            "city": "Märkischer Kreis",
            "country": "DE"
        };
    });
    it("Positive : Verify lat & lon", async () => {
        const coord = {
            lat: 51.26,
            lon: 7.74
        };
        const res = await openWeather(profile.city, profile.country);
        expect(coord.lat).to.equal(res.coord.lat);
        expect(coord.lon).to.equal(res.coord.lon);
    });

    it("Negative : Wrong City", async () => {        
        profile.city = 'New Delhi';
        const res = await openWeather(profile.city, profile.country);
        expect('404').to.equal(res.error.cod);
    });
});