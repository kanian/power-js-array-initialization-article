function* filler(from,to){
    while(from <= to)
      yield from++
}


function fillTo(x){
  return [...filler(1, x)]
}

function fill(x,y){
  return [...filler(x,y)]
}

module.exports = {fillTo: fillTo, fill: fill, filler: filler}