// arr = array of numbers
function major(arr)
{
  arr.sort();
  console.log(arr[arr.size()/2]);
  return arr[arr.size()/2];
}
module.exports=major;
