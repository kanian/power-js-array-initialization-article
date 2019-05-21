function* filler(from,to){
    while(from <= to)
      yield from++
}


function fillTo(x){
  return [...filler(1, x)]
}

module.exports = fillTo