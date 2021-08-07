var list = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

const arraySort = array => {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  return array;
}

const anagramGrouping = array => {
  let anagrams = {}
  let collectedAnagrams = [] 
  for (let i of array){
    let sortWord = arraySort(i.split(''));
    let joinedWord = sortWord.join('');

    anagrams[joinedWord] = anagrams[joinedWord] || []
    
    anagrams[joinedWord].push(i)
  }
  for (let key in anagrams){
    collectedAnagrams.push(anagrams[key])
  }
  return collectedAnagrams
}

const result = anagramGrouping(list);
console.log(result);

