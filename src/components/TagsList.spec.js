import React from 'react'
import TagList from './TagsList'
import renderer from 'react-test-renderer'
import { render } from 'enzyme'

describe("The tags list", () => {
    it("renders as expected", () => {
        const tree = renderer
            .create(<TagList tags={[`css`, `html`, `swift`]} />)
            .toJSON()

        console.log(tree)
        expect(tree).toMatchSnapshot()
    })
})
