describe('Arrays', function() {
  const FILL_ME_IN = undefined

  it('should create Arrays', function() {
    const emptyArray = []

    expect(typeof(emptyArray)).toBe(FILL_ME_IN)
    expect(emptyArray.length).toBe(FILL_ME_IN)

    const multiTypeArray = [1, 2, true, 'Jon Snow', function() { return 'Voldemort' }, { name: 'Jorah Mormont', age: 42 }]

    expect(multiTypeArray[0]).toBe(FILL_ME_IN)
    expect(multiTypeArray[1]).toBe(FILL_ME_IN)
    expect(multiTypeArray[2]).toBe(FILL_ME_IN)
    expect(multiTypeArray[3]).toBe(FILL_ME_IN)
    expect(multiTypeArray[4]()).toBe(FILL_ME_IN)
    expect(multiTypeArray[5].name).toBe(FILL_ME_IN)
    expect(multiTypeArray[5].age).toBe(FILL_ME_IN)
  })

  it('should understand Array Literals', function() {
    const array = []
    expect(array).toEqual(FILL_ME_IN)

    array[0] = 1
    expect(array).toEqual(FILL_ME_IN)

    array[1] = 2
    expect(array).toEqual(FILL_ME_IN)

    array.push(3)
    expect(array).toEqual(FILL_ME_IN)
  })

  it('should understand Array Length', function() {
    const fourNumberArray = [1, 2, 3, 4]

    expect(fourNumberArray.length).toBe(FILL_ME_IN)
    fourNumberArray.push(5, 6)
    expect(fourNumberArray.length).toBe(FILL_ME_IN)

    const tenEmptyElementArray = new Array(10)
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN)

    tenEmptyElementArray.length = 5
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN)
  })

  it('should Slice Arrays', function() {
    const array = ['peanut', 'butter', 'and', 'jelly']

    expect(array.slice(0, 1)).toEqual(FILL_ME_IN)
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN)
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN)
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN)
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN)
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN)
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN)
  })

  it('should know Array References', function() {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five']

    function passedByReference(refArray) {
      refArray[1] = 'changed in function'
    }

    passedByReference(array)
    expect(array[1]).toBe(FILL_ME_IN)

    const assignedArray = array
    assignedArray[5] = 'changed in assignedArray'
    expect(array[5]).toBe(FILL_ME_IN)

    const copyOfArray = array.slice()
    copyOfArray[3] = 'changed in copyOfArray'
    expect(array[3]).toBe(FILL_ME_IN)
  })

  it('should Push and Pop', function() {
    const array = [1, 2]
    array.push(3)

    expect(array).toEqual(FILL_ME_IN)

    const poppedValue = array.pop()
    expect(poppedValue).toBe(FILL_ME_IN)
    expect(array).toEqual(FILL_ME_IN)
  })

  it('should Shift and Unshift', function() {
    const array = [1, 2]

    // It should mutate the array
    array.unshift(3)
    expect(array).toEqual(FILL_ME_IN)

    const shiftedValue = array.shift()
    expect(shiftedValue).toEqual(FILL_ME_IN)
    // It should mutate the array
    expect(array).toEqual(FILL_ME_IN)
  })

  it('should Filter', function() {
    const array = [1, 2, 3]

    const itemsGreaterThanTwo = array.filter(function(item) {
      return item > 2
    })
    expect(itemsGreaterThanTwo.length).toBe(FILL_ME_IN)
    expect(itemsGreaterThanTwo).toEqual(FILL_ME_IN)

    const itemsLessThanOrEqualToTwo = array.filter(function(item) {
      return item <= 2
    })
    expect(itemsLessThanOrEqualToTwo.length).toBe(FILL_ME_IN)
    expect(itemsLessThanOrEqualToTwo).toEqual(FILL_ME_IN)

    // It should not mutate the original array
    expect(array).toEqual(FILL_ME_IN)
  })

  it('should Map', function() {
    const array = [1, 2, 3]

    const doubledArray = array.map(function(item) {
      return item * 2
    })
    expect(doubledArray.length).toBe(FILL_ME_IN)
    expect(doubledArray).toEqual(FILL_ME_IN)

    // It should not mutate the original array
    expect(array).toEqual(FILL_ME_IN)
  })
})
