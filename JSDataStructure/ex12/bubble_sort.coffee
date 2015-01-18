###冒泡排序，从小到大###
bubbleSort = (arr) ->
  numElements = arr.length

  outer = numElements

  # 数组位数是最后一位时停止
  while outer >= 2
    inner = 0

    # 数组默认下标为0所以减2（如数组为4位，则终止与a[2] 与 a[2 + 1] 比较）
    while inner <= outer - 2
      console.log "outer - 2 ==>", outer - 2
      if arr[inner] > arr[inner + 1]
        tmp = arr[inner]
        arr[inner] = arr[inner + 1]
        arr[inner + 1] = tmp
      console.log arr
      inner++

    outer--


arr = [4,3,2,1,31,314,134,123,3,21,3,21,3,21,3,21,3]
console.log arr
bubbleSort(arr)
console.log arr