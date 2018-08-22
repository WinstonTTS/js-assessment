describe('Functions', function() {
  const FILL_ME_IN = undefined

  it('should declare Functions', function() {
    function add(a, b) {
      return a + b
    }

    expect(add(1, 2)).toBe(FILL_ME_IN)
    expect(add(4, 6)).toBe(FILL_ME_IN)
  })

  it('should know internal variables override outer variables', function() {
    let message = 'Outer'

    function getMessage() {
      return message
    }

    function overrideMessage() {
      let message = 'Inner'
      return message
    }

    expect(getMessage()).toBe(FILL_ME_IN)
    expect(overrideMessage()).toBe(FILL_ME_IN)
    expect(message).toBe(FILL_ME_IN)
  })

  it('should have lexical scoping', function () {
    let variable = 'top-level'

    function parentFunction() {
      variable = 'local'

      function childFunction() {
        return variable
      }

      return childFunction()
    }

    expect(parentFunction()).toBe(FILL_ME_IN)
  })

  it('should use lexical scoping to synthesise functions', function () {

    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param
      }

      return newFunction
    }

    const mysteryFunction3 = makeMysteryFunction(3)
    const mysteryFunction5 = makeMysteryFunction(5)

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN)
  })
  it('should allow extra function arguments', function () {

    function returnFirstArg(firstArg) {
      return firstArg
    }

    expect(returnFirstArg('first', 'second', 'third')).toBe(FILL_ME_IN)

    function returnSecondArg(firstArg, secondArg) {
      return secondArg
    }

    expect(returnSecondArg('only give first arg')).toBe(undefined)

    function returnAllArgs() {
      const argsArray = []

      for (let i = 0; i < arguments.length; i ++) {
        argsArray.push(arguments[i])
      }

      return argsArray.join(',')
    }

    expect(returnAllArgs('first', 'second', 'third')).toBe(FILL_ME_IN)
  })

  it('should pass functions as values', function() {

    const appendRules = function(name) {
      return name + ' rules!'
    }

    const appendDoubleRules = function(name) {
      return name + ' totally rules!'
    }

    const praiseSinger = {
      givePraise: appendRules
    }

    expect(praiseSinger.givePraise('John')).toBe(FILL_ME_IN)

    praiseSinger.givePraise = appendDoubleRules
    expect(praiseSinger.givePraise('Mary')).toBe(FILL_ME_IN)
  })
})