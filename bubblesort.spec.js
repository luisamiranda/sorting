beforeEach(function(){
		spyOn(window, "swap").and.callThrough();
 });
it('involves exactly array.length * array.length calls', function () {
  bubbleSort();
  expect(window.swap.calls.count()).toEqual(9);
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one element', function(){
  	expect(bubbleSort([1])).toEqual([1]);
  });
  it('sorts an array with multiple elements', function(){
  	expect(bubbleSort([2,1,3])).toEqual([1,2,3]);
  });
  it('sorts an array with duplicate elements', function(){
  	expect(bubbleSort([4,2,3,1,4])).toEqual([1,2,3,4,4]);
  });
});
