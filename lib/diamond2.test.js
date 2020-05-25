const { diamond, edge} = require("./diamond2")

describe("diamond2", () => {
    it("it should output A for A", () => {
        expect(diamond("A")).toEqual("A")
    })
    describe("edge", () => {
        it("should return  -A\nB- for B", () => {
            expect(edge("B")).toEqual(["-A",
                                       "B-"])
        })
    })
})

-A-
B-B
-A-