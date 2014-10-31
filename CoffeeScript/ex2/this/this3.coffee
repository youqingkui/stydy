setName = (name) ->@name = name
pig = {}
setName.apply pig, ["hello"]
console.log(pig)