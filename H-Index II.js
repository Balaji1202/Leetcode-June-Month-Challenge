var hIndex = function(citations) {
  var len = citations.length;

  citations.unshift(0);
  var low = 0;
  var high = len;
  var mid;
  var max = 0;
  while (low <= high) {
    mid = (low + high) >> 1;

    // numbers count >= citations[mid]
    var largetLeft = len - mid + 1;
    
    if (citations[mid] >= largetLeft) {
      max = Math.max(max, largetLeft);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return max;
};
