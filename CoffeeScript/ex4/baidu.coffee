baiduSwitch = (x, y) ->
  url = "http://api.map.baidu.com/geoconv/v1/?form=3&to5&ak=5tlKe6382DLbgQmpoLoQc4ks&output=json&coords=#{x},#{y}"
  request.get url, (err, res, body) ->
    msg = {}
    if err
      msg.code = "-1"
      msg.info = "request baidu error"
      return msg

    data = JSON.parse(body)
    unless data.status is 0
      msg.code = "-1"
      msg.info = "json result error baidu"
      return msg

    msg.code = 1
    msg.info =
      x:data.result.x
      y:data.result.y

    return msg

console.log baiduSwitch(113.3334256,23.14737133)