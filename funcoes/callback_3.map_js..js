//const nums = [1, 2, 3, 4, 5]
//const dobro1 = (n) => n * 2 
//console.log(nums.map(dobro))




const nums1 = [1, 2, 3, 4, 5]
const dobro1 = (n, i, a) => n * 2 + i + a.length
console.log(nums1.map(dobro1))