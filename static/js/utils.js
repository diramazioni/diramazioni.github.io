var initial = {};

function letterOUT(letter, fillColor, radius) {
  // console.log('letterOUT'+letter);
  $('#'+letter).find('rect').each(function() {

    if (!($(this).attr('id') in initial)) {
      initial[$(this).attr('id')] = [$(this).attr('x'), $(this).attr('y')]
    }
    $(this).animate({
      top: rIntRange(-radius, radius)
    },{
      step: function(ry,fx){
        // var col = 'rgb('+Math.floor(Math.abs(ry))+', 0,0)'
        $(this).attr('y', ry);
        // $(this).attr('fill', fillColor );
        if (ry>0) {$(this).attr('rx', ry)};

      },
      duration: 500
    });


  });
}
function letterIN(letter, fillColor) {
  $('#'+letter).find('rect').each(function() {
    var start = initial[$(this).attr('id')]
    $(this).animate({
      top: start[1],
    },{
      step: function(ry,fx){
        $(this).attr('y', ry);
        // $(this).attr('fill', fillColor);

      },
      duration: 500
    }
                   );
  });
}
function rIntRange(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
function rIntPosNeg(max) {
  var nh = Math.floor(Math.random() * max)
  if (Math.random() < 0.5) {nh = nh * -1}
  return nh;
}
