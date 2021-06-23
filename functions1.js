(function () { 
    console.warn("Print all the odd numbers in an array") 
    oddNum();

    console.warn("Convert all the strings to title caps in a string array")
    stringCase();

    console.warn("Sum of all numbers in an array")
    add();

    console.warn("Return all the prime numbers in an array")
    prime();

    console.warn("Return all the palindromes in an array")
    palindrome();

    console.warn("Return median of two sorted arrays of same size ")
    median();

    console.warn("Remove duplicates from an array")
    duplicates();

    console.warn("Rotating an array by k times")
    rotate();

})();

function oddNum(){
    for(var i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
function stringCase() {
    var string="good morning to everyone, hope all fine.";
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    }
function add(){
    var array=[10, 5, 4, 6, 7];
    var sum=0;
    for(var j=0;j<array.length;j++){
        sum+=array[j];
    }
    console.log(sum);
}
function prime() {   
    let num = [1,2, 3, 4, 10, 16, 7, 8, 19, 10]
    num = num.filter((num1) => {
        for (var i = 2; i <= Math.sqrt(num1); i++) {
          if (num1 % i === 0) return false;
        }
        return true;
      });
      console.log(num);
    }
    function palindrome() {
        const arr = [1234321, 1122, 121, 'mom', 'apple'];
        const isPalindrome = el => {
           const str = String(el);
           let i = 0;
           let j = str.length - 1;
           while(i < j) {
              if(str[i] === str[j]) {
                 i++;
                 j--;
              }
              else {
                 return false;
              }
           }
           return true;
        };
        const findPalindrome = arr => {
           return arr.filter(el => isPalindrome(el));
        };
        console.log(findPalindrome(arr));
    }
    function Median1(ar1, ar2, n)
{
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
 
    /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
    for (count = 0; count <= n; count++)
    {
        /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}     
    /* Driver program to test above function */
    function median(){
    var ar1 = [1, 2, 3, 4, 5];
    var ar2 = [6, 7, 8, 9, 10];
    var n1 = ar1.length;
    var n2 = ar2.length;
    if (n1 == n2)
        console.log("Median is "+ Median1(ar1, ar2, n1));
    else
        console.log("Arays are unequal in size");
    }
    
    function uniqBy(a, key) {
        var seen = {};
        return a.filter(function(item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    }
    function duplicates(){
    var a = [[1,2,3], [4,5,6], [1,2,3], [4,5,6], [7,8,9], "one", "two", "one", "two", "three"]
    var b = uniqBy(a, JSON.stringify);
    console.log(b);
    }

    function Rotate(arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
        }
      
    function rotate(){
        for(let i = -3 ; i <= 3 ; i++) 
        {
        console.log(Rotate([1,2,3,4,5,6], i), i);
         }
        }

