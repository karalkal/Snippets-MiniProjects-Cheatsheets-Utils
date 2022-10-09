/*
if ReferenceError: TextEncoder is not defined
locate this file node_modules/whatwg-url/dist/encoding.js or .../lib/encoding.js
add this line at top const { TextEncoder, TextDecoder } = require("util");
https://stackoverflow.com/questions/19697858/referenceerror-textencoder-is-not-defined
*/

const renderDom = require('./helpers')

let dom
let document

describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDom('index.html')
        document = await dom.window.document
    })

    test('it has a title', () => {
        let title = document.querySelector('title')
        expect(title).toBeTruthy()
    })

    test('h1 text content initially is Title 1', () => {
        let h1 = document.querySelector('h1')
        expect(h1.textContent).toBe('Title 1')
    })
    test('h1 text content alternates when test button is clicked', () => {
        let testBtn = document.querySelector('.test')
        let h1 = document.querySelector('h1')

        expect(h1.textContent).toBe('Title 1')
        testBtn.dispatchEvent(new dom.window.Event('click'))
        expect(h1.textContent).toBe('You hit me!')
        testBtn.dispatchEvent(new dom.window.Event('click'))
        expect(h1.textContent).toBe('Title 1')
    })
})
