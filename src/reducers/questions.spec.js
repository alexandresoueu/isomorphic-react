import { questions } from './questions'

describe("The questions reducer", () => {
    it("Should not modify state for unrecognized action", () => {
        console.log("Test questions")
        const state = ["foo", "bar"]
        const stateClone = ["foo", "bar"]
        const newState = questions(state, {type: "UNRECOGNIZED_ACTION"})

        expect(stateClone).toEqual(state)
        expect(newState).toBe(state)
    })

    it("Should add new questions", () => {
        const state = [{ question_id: "foo" }, { question_id: "bar" }]
        const newQuestion = { question_id: "baz" }
        const newState = questions( state, { type: `FETCHED_QUESTION`, question:newQuestion } )
        
        expect(newState).toContain(newQuestion)
        expect(state).not.toContain(newQuestion)
        expect(newState).toHaveLength(3)
    })
})