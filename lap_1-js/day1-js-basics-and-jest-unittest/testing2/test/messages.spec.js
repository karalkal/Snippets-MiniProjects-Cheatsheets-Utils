const messageServices = require("../messages");

describe("public annoucement service", () => {
    it("prepares a public announcement", () => {
        let msg = "Don't lie in yellow snow";
        let annoucement = messageServices.psa(msg);
        expect(annoucement).toContain(msg);
    })

    describe.each([
       [ "What a load of poop", "poop" ],
       [ "Ew, stinky fart!", "fart" ],
       [ "Bums and Tums", "bum" ],
       [ "Long live jquery", "jquery" ]
    ])("throws error rejecting messages containing rude words", (msg, word) => {
        it(`rejects ${word}`, () => {
            expect(() => {
                messageServices.psa(msg)
            }).toThrowError();
        })
    })
})