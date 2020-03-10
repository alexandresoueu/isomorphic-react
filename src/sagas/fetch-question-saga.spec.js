import { handleFetchQuestion }  from './fetch-question-saga'
import fetch from 'isomorphic-fetch'

describe("Fetch questions saga",()=>{
    beforeAll(()=>{
        fetch.__setValue([{question_id:42}])
    })
    
    it("should get the questions from the correct endpoint in response to the appropriate action",async ()=>{
        const gen = handleFetchQuestion({question_id:42})
        const { value } = await gen.next()
        
        expect(value).toEqual([{question_id:42}])
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
    })
})