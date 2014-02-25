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

        it("shows login form", function () {
            var loginForm = $(".login-form");
            expect(loginForm).toBeVisible();
            expect(loginForm.find(".username")).toBeInDOM();
            expect(loginForm.find(".password")).toBeInDOM();
        });

        it("user do login", function () {
            var loginForm = $(".login-form");
            var spyEvent = spyOnEvent(loginForm, "submit");
            loginForm.find("#button").trigger("click");
            expect(spyEvent).toHaveBeenTriggered();
        });
    });
});