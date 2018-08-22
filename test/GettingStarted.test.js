// `describe` is a function provided by the Jest testing library we are using in this project.
// It is used to designate a Test Suite. In the case of this test file, the 'Getting Started' test suite.
describe('Getting Started', () => {
  // This is just a placeholder value. Do not change line 5, but instead change all of the places in the file that `FILL_ME_IN` appears.
  const FILL_ME_IN = undefined
  // `it` is another function provided by the Jest testing library that indicates a single test.
  it('should teach you about testing', () => {
    // A typical test involves an `expect` function.
    // In the case here, we are expecting `true` to be `FILL_ME_IN`
    expect(true).toBe(FILL_ME_IN)
  })

  it('should teach you about testing', () => {
    expect(true).toBe(FILL_ME_IN)
    expect(false).toBe(FILL_ME_IN)
    expect([].length).toBe(FILL_ME_IN)
    expect(['foo'].length).toBe(FILL_ME_IN)
  })
})