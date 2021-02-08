// Search

function search(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5], 4)); //3

// Binary search

function binSearch(array, val) {
  let start = 0;
  let end = array.length - 1;
  let center = Math.floor((start + end) / 2);
  console.log(`start --> ${start} ---> center ${center} end ---> ${end}`);

  while (array[center] !== val && start <= end) {
    if (val < array[center]) {
      end = center - 1;
    } else {
      start = center + 1;
    }
    center = Math.floor((start + end) / 2);
  }
  console.log(`start --> ${start} ---> center ${center} end ---> ${end}`);
  
  if(array[center] === val){
    return `Found at Index ---> ${center}`;
  }else{
      return -1 || `Value not found`
  }
}
console.log(
  binSearch([3, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 18)
);

// second approach

function bSearch(array, val){
    let start = 0;
  let end = array.length - 1;
  let center = Math.floor((start + end) / 2);

  while (array[center] !== val && start <= end) {
    if (val < array[center]) {
      end = center - 1;
    } else {
      start = center + 1;
    }
    center = Math.floor((start + end) / 2);
  }
   return array[center] ? center : -1

}
console.log(
    bSearch([3, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 18)
  );

//   function that takes two strings and then returns the pattern we are looking for

function searchPattern(longString,shortString){

    let count = 0

    for(let i = 0; i < longString.length;i++){
        for(let j = 0; j < shortString.length; j++){
            console.log(`longString --> ${longString[i]} shortString---> ${shortString[j]} ` )
            if(shortString[j] !== longString[i + j] ){
                console.log(`Break --->`)
                break
            }
            if(j === shortString.length - 1){
                console.log(`Got It !!!!!!`)
                count ++
            }

        }
        
    }

    return count

}
console.log(searchPattern('messi oh my god is the best messi the allien','messi'))