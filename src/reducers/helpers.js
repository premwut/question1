export const isFibonacci = query => {

    if(query === 0 || query === 1 || query === 2){
       return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while(count <= query){
       if(prev + count === query){
          return true;
       };
       temp = prev;
       prev = count;
       count += temp;
    };
    return false;
 };

export const isPrime = (n) => {
   if (n===1)
   {
     return false;
   }
   else if(n === 2)
   {
     return true;
   }else
   {
     for(var x = 2; x < n; x++)
     {
       if(n % x === 0)
       {
         return false;
       }
     }
     return true;  
   }
 }
 