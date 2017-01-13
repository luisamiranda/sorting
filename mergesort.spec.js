describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect(mergeSort([])).toEqual([]);
  });
  it('sorts an array with multiple elements', function(){
  	expect(mergeSort([2,1,3,5])).toEqual([1,2,3,5]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,6,5,8])).toEqual([[2,6],[5,8]]);
  });
});
