later = require('later')
sched = later.parse.text('every 5 mins')
occurrences = later.schedule(sched).next(10)

for i in 10
  console.log(occurrences[i])
