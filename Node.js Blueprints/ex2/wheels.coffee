typeOfTires = ''
exports.init = (type) ->
  typeOfTires = type

exports.info = () ->
  console.log("The car uses " + typeOfTires + " tires.")
