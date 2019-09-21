var btn = document.createElement("button")
btn.onclick=function (){
  evaluateAll()
}
btn.textContent="一键评教"
document.getElementsByTagName("body")[0].appendChild(btn)
function evaluateAll() {
  var list = document.getElementsByTagName('a')
  var body = document.getElementsByTagName('body')[0]
  for (var i = 0; i < list.length; i++) {
    if (list[i].href != undefined && list[i].href.indexOf('key') != -1) {
      var iframe = document.createElement('iframe')
      iframe.src = list[i].href
      iframe.height = 0
      body.appendChild(iframe)
    }
  }
}

setTimeout(function() {
  var iframes = document.getElementsByTagName('iframe')
  for (var i = 0; i < iframes.length; i++) {
    evaluate(iframes[i].contentDocument)
  }
}, 3000)

function evaluate(doc) {
  var s = 'droplist'
  if (doc.getElementById('droplist1') == null) return
  for (i = 0; i < 19; i++) {
    var s1 = s + i
    doc.getElementById(s1).value = '95'
  }
  var s2 = s + Math.ceil(Math.random() * 16)
  doc.getElementById(s2).value = '85'
  doc.getElementById('Finnal').value = 94.5
  // window.confirm = function() {
  //   return true
  // }
  console.log(1)
  doc.getElementById('Button1').click()
  return
}
