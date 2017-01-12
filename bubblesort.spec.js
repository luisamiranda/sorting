before(function(){
	spyOn('bubbleSort, 'swap'').and.callThrough();
});
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one element', function(){
  	expect(bubbleSort([1])).toEqual([1]);
  });
  it('sorts and array with multitple elements', function(){
  	expect(bubbleSort([2,1,3]).toEqual([1,2,3]));
  });
  it('sorts an array with duplicate elements', function(){
  	expect(bubbleSort([4.2.3.1.5,4]).toEqual([1,2,3,4,4,5]));
  });
});