var round=function(i,d){var y=Math.pow(10,d),x=i*y,e=Math.round(x);return e/y},distance=function(i,d){return Math.pow(Math.pow(i[0]-d[0],2)+Math.pow(i[1]-d[1],2),.5)},main_village=[446,440],villages=JSON.parse('[{"id":6651,"x":446,"y":441},{"id":5992,"x":447,"y":442},{"id":6889,"x":443,"y":440},{"id":6510,"x":449,"y":441},{"id":7086,"x":448,"y":437},{"id":7660,"x":444,"y":437},{"id":6922,"x":444,"y":443},{"id":6654,"x":449,"y":438},{"id":6519,"x":448,"y":443},{"id":7187,"x":446,"y":436},{"id":6534,"x":444,"y":444},{"id":5990,"x":450,"y":438},{"id":6935,"x":450,"y":437},{"id":6397,"x":451,"y":442},{"id":7951,"x":441,"y":438},{"id":6817,"x":442,"y":444},{"id":5614,"x":451,"y":443},{"id":6914,"x":443,"y":445},{"id":7512,"x":441,"y":437},{"id":8193,"x":443,"y":435},{"id":6909,"x":441,"y":443},{"id":7927,"x":447,"y":434},{"id":6145,"x":452,"y":439},{"id":6025,"x":445,"y":446},{"id":7165,"x":440,"y":442},{"id":5679,"x":450,"y":445},{"id":8357,"x":440,"y":437},{"id":6685,"x":443,"y":446},{"id":5881,"x":445,"y":447},{"id":5860,"x":450,"y":446},{"id":8424,"x":442,"y":434},{"id":7499,"x":448,"y":433},{"id":7878,"x":439,"y":438},{"id":7995,"x":444,"y":433},{"id":8119,"x":438,"y":440},{"id":8234,"x":446,"y":432},{"id":5543,"x":447,"y":448},{"id":5442,"x":453,"y":444},{"id":6797,"x":442,"y":447},{"id":5875,"x":444,"y":448},{"id":8576,"x":443,"y":432},{"id":6764,"x":454,"y":437},{"id":7782,"x":449,"y":432},{"id":8610,"x":439,"y":435},{"id":6701,"x":453,"y":435},{"id":5450,"x":451,"y":447},{"id":9525,"x":454,"y":436},{"id":5744,"x":445,"y":449},{"id":6961,"x":439,"y":446},{"id":5140,"x":452,"y":447},{"id":8876,"x":440,"y":433},{"id":8067,"x":448,"y":431},{"id":6317,"x":442,"y":449},{"id":5083,"x":453,"y":447},{"id":7443,"x":452,"y":432},{"id":8545,"x":440,"y":432},{"id":8799,"x":438,"y":434},{"id":8353,"x":436,"y":439},{"id":6750,"x":454,"y":434},{"id":6765,"x":438,"y":446},{"id":7280,"x":451,"y":431},{"id":8767,"x":443,"y":430},{"id":8635,"x":438,"y":433},{"id":5994,"x":453,"y":448},{"id":4955,"x":454,"y":447},{"id":7359,"x":452,"y":431},{"id":8779,"x":445,"y":429},{"id":5787,"x":457,"y":438},{"id":6201,"x":456,"y":435},{"id":9026,"x":444,"y":429},{"id":7661,"x":436,"y":445},{"id":8590,"x":448,"y":429},{"id":5244,"x":453,"y":449},{"id":7677,"x":435,"y":443},{"id":8737,"x":437,"y":433},{"id":7780,"x":452,"y":430},{"id":8828,"x":446,"y":428},{"id":5559,"x":446,"y":452},{"id":5564,"x":458,"y":439},{"id":8644,"x":434,"y":441},{"id":8782,"x":434,"y":440},{"id":6484,"x":457,"y":435},{"id":9488,"x":439,"y":430},{"id":5711,"x":458,"y":438},{"id":5991,"x":443,"y":452},{"id":9028,"x":440,"y":429},{"id":9112,"x":435,"y":434},{"id":8098,"x":450,"y":428},{"id":7331,"x":455,"y":431},{"id":7191,"x":436,"y":448},{"id":8365,"x":433,"y":441},{"id":5508,"x":447,"y":453},{"id":8632,"x":446,"y":427},{"id":7016,"x":457,"y":433},{"id":5570,"x":459,"y":441},{"id":5854,"x":453,"y":451},{"id":9305,"x":439,"y":429},{"id":8835,"x":434,"y":435},{"id":5005,"x":448,"y":453},{"id":9020,"x":433,"y":438},{"id":5844,"x":459,"y":437},{"id":8302,"x":452,"y":428},{"id":7026,"x":437,"y":450},{"id":7235,"x":456,"y":431},{"id":5000,"x":459,"y":444},{"id":7952,"x":450,"y":427},{"id":9010,"x":438,"y":429},{"id":5547,"x":442,"y":453},{"id":5982,"x":459,"y":436},{"id":6211,"x":459,"y":435},{"id":7645,"x":453,"y":428},{"id":8008,"x":433,"y":445},{"id":5402,"x":460,"y":439},{"id":8487,"x":447,"y":426},{"id":5358,"x":445,"y":454},{"id":6686,"x":436,"y":450},{"id":5378,"x":444,"y":454},{"id":6682,"x":457,"y":431},{"id":9261,"x":435,"y":431},{"id":8352,"x":452,"y":427},{"id":9459,"x":432,"y":437},{"id":8728,"x":443,"y":426},{"id":5886,"x":440,"y":453},{"id":6514,"x":459,"y":434},{"id":8125,"x":454,"y":428},{"id":8568,"x":450,"y":426},{"id":5993,"x":450,"y":454},{"id":4965,"x":459,"y":447},{"id":4542,"x":451,"y":454},{"id":9509,"x":435,"y":430},{"id":10770,"x":445,"y":455},{"id":8791,"x":431,"y":441},{"id":9213,"x":437,"y":428},{"id":8917,"x":445,"y":425},{"id":8675,"x":431,"y":438},{"id":9215,"x":440,"y":426},{"id":4352,"x":452,"y":454},{"id":4718,"x":460,"y":446},{"id":9025,"x":431,"y":437},{"id":6616,"x":459,"y":432},{"id":8656,"x":431,"y":443},{"id":7950,"x":433,"y":448},{"id":9298,"x":442,"y":425},{"id":4259,"x":458,"y":450},{"id":6093,"x":460,"y":433},{"id":9345,"x":432,"y":433},{"id":4594,"x":451,"y":455},{"id":8914,"x":446,"y":424},{"id":5377,"x":462,"y":438},{"id":9659,"x":438,"y":426}]'),infobox=document.createElement("div");if(infobox.className="info_box",window.location.href.indexOf("screen=overview")!==-1){var fields=0,innerhtml="";for(key in villages)fields=round(distance(main_village,[villages[key].x,villages[key].y]),1),innerhtml+="<a href='"+window.location.href.replace("screen=overview","place")+"&target="+villages[key].id+"&light=1'>"+villages[key].x+"|"+villages[key].y+" "+fields+" fields away</a><br/>";infobox.innerHTML=innerhtml,console.log(innerhtml),document.querySelector("#units_help").parentNode.insertBefore(infobox,document.querySelector("#units_help"))}else alert("You need to be in the Village Overview!");