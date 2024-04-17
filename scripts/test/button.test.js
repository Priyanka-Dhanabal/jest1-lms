const buttonClick = require("../button")

// runs before each test is run, creating a MOCK dom.
beforeEach(() => {
    // document.body.innerHTML = '<p id="par"></p>';
    let fs = require("fs");
    let fileContents = fs.readFileSync("index1.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("DOM tests", () => {
    test("excepts p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
})