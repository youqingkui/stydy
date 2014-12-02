original = ['Mary', 'Poppins']
copy = original[0..]

console.log copy
console.log 'Sh' + copy[0][1..]
copy[0] = 'Sh' + copy[0][1..]
copy[1] = 'B' + copy[1][1..]
console.log original.join ' || '