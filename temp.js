
obj = {a:1}


arr = [{c:2},{b:2}]
ok  =Object.assign({...obj},...arr)
console.log(ok);
console.log(obj);

