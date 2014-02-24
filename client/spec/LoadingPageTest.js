describe("Loading page", function () {
    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = "./";
        loadFixtures("index.html");
    });

    describe("before login", function () {
        it("shows a board area", function () {
            var boardArea = $(".board-area");
            expect(boardArea).toBeDefined();
            expect(boardArea).toBeVisible();
        });

        it("shows login form", function(){
            var loginForm = $(".login-form");
            expect(loginForm).toBeDefined();
            expect(loginForm).toBeVisible();
        });
    });

    describe("after login", function(){
    });
});