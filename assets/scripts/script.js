var timer_glob_sec = 0,
  timer_glob_sec_2 = 0,
  prohod = 0,
  timer_glob_sec_temp = 0,
  okruglit = 0,
  kotirovka = 0;
var gorizontmini;

const detectando = document.getElementById("detectando");
const oportunidadeDetectada = document.getElementById("oportunidadeDetectada");
const entrada = document.getElementById("entrada");

function EntradaOn() {
  entrada.style.display = "block";
  setTimeout(function () {
    entrada.style.display = "none";
  }, 2000);
}

function ArrowDraw(
  context,
  direction,
  startX,
  startY,
  width,
  height,
  color,
  lineWidth,
  fillStyle
) {
  console.log(
    context,
    direction,
    startX,
    startY,
    width,
    height,
    color,
    lineWidth,
    fillStyle
  );
  let sign = direction === "up" ? 1 : -1;
  let fillMethod = fillStyle === "fill" ? 2 : 1;

  context.beginPath();
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = lineWidth;

  let halfWidth = width / 2;
  let halfHeight = (sign * height) / 2;
  let fifthWidth = width / 5;
  let fullHeight = sign * height;

  startX += halfWidth;

  context.moveTo(startX, startY);

  // set of lineTo operations
  let lineToArgs = [
    [halfWidth, halfHeight],
    [fifthWidth, halfHeight],
    [fifthWidth, fullHeight],
    [-fifthWidth, fullHeight],
    [-fifthWidth, halfHeight],
    [-halfWidth, halfHeight],
  ];

  lineToArgs.forEach((args) => {
    context.lineTo(startX + args[0], startY + args[1]);
  });

  context.closePath();
  context.stroke();

  if (fillMethod == 2) {
    context.fill();
  }
}

function OpenMenu() {
  localStorage.setItem("open_menu", "true");
  return 1;
}

function trading_view_graff_on() {
  // document.getElementById("trading_view_graff").onclick = function () {
  //   if (document.getElementById("trading_view_graff").checked) {
  //     document.getElementById("TradingView-wrapper").style.display = "block";
  //     localStorage.setItem("trading_view_graff", "true");
  //     return 1;
  //   } else {
  //     document.getElementById("TradingView-wrapper").style.display = "none";
  //     localStorage.setItem("trading_view_graff", "false");
  //     return 0;
  //   }
  // };
  // if (localStorage.getItem("trading_view_graff") == "true") {
  //   document.getElementById("trading_view_graff").setAttribute("checked", "checked");
  //   document.getElementById("TradingView-wrapper").style.display = "block";
  //   return 1;
  // } else {
  //   document.getElementById("TradingView-wrapper").style.display = "none";
  //   return 0;
  // }
}

function stsrelki_move() {
  return 1;
}

function check_1(darik) {
  document.getElementById(darik).onclick = function () {
    if (document.getElementById(darik).checked) {
      localStorage.setItem(darik, "true");
      return 1;
    } else {
      localStorage.setItem(darik, "false");
      return 0;
    }
  };
  if (localStorage.getItem(darik) == "true") {
    document.getElementById(darik).setAttribute("checked", "checked");
    return 1;
  } else {
    return 0;
  }
}

function Menu() {
  menuopen = OpenMenu();
  trading_view_graff_on();

  timer = 1;

  Strelki_On = 1;
  strelki_procent = 1;

  max_size = 14;
  gis_size = 14;
  ur_gist = 14;
  ur_str_size = 14;
  str_min_size = 14;

  pair2 = $("#pair").attr("val");
  document.getElementById("okrugl").onclick = function () {
    okrugl = document.getElementById("okrugl").value;
    document.getElementById("okrugl").setAttribute("value", okrugl);
    localStorage.setItem("okrugl" + pair2, okrugl);
  };
  okr_get_elem = document.getElementById("okrugl").value;
  local_get_elem = localStorage.getItem("okrugl" + pair2);
  if (!local_get_elem) {
    if (!okr_get_elem) {
    } else {
      okrugl = okr_get_elem;
      localStorage.setItem("okrugl" + pair2, okr_get_elem);
    }
  } else {
    okrugl = localStorage.getItem("okrugl" + pair2);
    document.getElementById("okrugl").setAttribute("value", okrugl);
  }
  document.getElementById("gorizontal").onclick = function () {
    gorizontal = document.getElementById("gorizontal").value;
    document.getElementById("gorizontal").setAttribute("value", gorizontal);
    localStorage.setItem("gorizontal" + pair2, gorizontal);
  };
  okr_get_elem = document.getElementById("gorizontal").value;
  local_get_elem = localStorage.getItem("gorizontal" + pair2);
  if (!local_get_elem) {
    if (!okr_get_elem) {
    } else {
      gorizontal = okr_get_elem;
      localStorage.setItem("gorizontal" + pair2, okr_get_elem);
    }
  } else {
    gorizontal = localStorage.getItem("gorizontal" + pair2);
    document.getElementById("gorizontal").setAttribute("value", gorizontal);
  }
}

function TradingView_11() {
  // let storedPair = JSON.parse(localStorage.getItem("dsav"));
  // let pair = (storedPair && storedPair.pair) ? storedPair.pair : "EURUSD";
  // let cleanedPair = pair.replace("/", "").replace("frx", "").replace(/int-/g, "");
  // let interval = size / 60;
  // new TradingView.widget({
  //     autosize: true,
  //     symbol: "OANDA:" + cleanedPair,
  //     interval: "" + interval,
  //     timezone: "Europe/Moscow",
  //     theme: "Dark",
  //     style: "1",
  //     locale: "ru",
  //     toolbar_bg: "#f1f3f6",
  //     enable_publishing: false,
  //     withdateranges: true,
  //     hide_side_toolbar: false,
  //     allow_symbol_change: true,
  //     save_image: false,
  //     details: false,
  //     hotlist: false,
  //     calendar: false,
  //     popup_width: "1000",
  //     popup_height: "650",
  //     container_id: "tradingview_61bf3"
  // });
}

function hashCode(beverely) {
  return beverely.split("").reduce((anisse, trejohn) => {
    return ((anisse << 5) - anisse + trejohn.charCodeAt(0)) | 0;
  }, 0);
}

var Sign = function () {
  TradingView_11();

  var kyroe = 0;
  var hasting = this,
    pegeen,
    aricela = false,
    chailyn = 0,
    cessna = 0,
    jioni = "va-mod.ru",
    aniruddha = [(x = 0), (y = 0)],
    felice = "Binomo",
    see = 0,
    johel = 0;
  var brityn = document.getElementById("valx");
  var zuriyah = brityn.getContext("2d");
  var condol = [];

  $(brityn).attr("width", window.innerWidth);
  $(brityn).attr("height", window.innerHeight);
  $(window).bind("resize orientationchange", function () {
    $(brityn).attr("width", window.innerWidth);
    $(brityn).attr("height", window.innerHeight);
  });

  $(brityn).mousemove(function (alexya) {
    aniruddha.x = alexya.pageX;
    aniruddha.y = alexya.pageY;
    var umaima = (($(brityn).width() / 100) * 15) / 100;
    var arneshia = $(brityn).height() - ($(brityn).height() / 100) * 200;
    if (aniruddha.x < umaima * 100 && aniruddha.y < arneshia) {
      requestAnimationFrame(hasting.indi);
    }
    if (aniruddha.y > arneshia) {
      requestAnimationFrame(hasting.indi);
    }
  });

  this.lincen = function (jaicyon) {
    if (
      jaicyon.hp < aniruddha.y &&
      aniruddha.y < jaicyon.hp + jaicyon.hh &&
      aniruddha.x < jaicyon.ww
    ) {
      return true;
    }
    if (
      jaicyon.hp < aniruddha.y &&
      aniruddha.y < jaicyon.hp + jaicyon.hh &&
      aniruddha.x > jaicyon.wp &&
      aniruddha.x < jaicyon.wp + jaicyon.ww
    ) {
      return true;
    }
    return false;
  };

  this.risv = function (semiko, addison) {};
  this.risg = function (alvaro) {
    fon_svecha = [];
    (X_price = []), (Y_price = []);
    // if (window.location.hostname.length !== jioni.length) {
    //   return;
    // }
    // ;
    var luzmila = $("#period").val(),
      kalel = 0;
    for (var bucky = 0; bucky < luzmila; bucky++) {
      if (!alvaro[bucky].tick) {
        break;
      }
      if (alvaro[bucky].tick.length > kalel) {
        kalel = alvaro[bucky].tick.length;
      }
    }
    var cendy = kalel / 100,
      neekon = ($(brityn).width() - 120) / luzmila,
      vincenzio = (($(brityn).height() / 100) * 20) / 100;
    var charlirose = 0,
      emryss,
      andalasia,
      milya,
      corrick,
      vicktoria;
    open_sv = [];
    for (var bucky = 0; bucky < luzmila; bucky++) {
      if (!alvaro[bucky].tick) {
        break;
      }
      if (alvaro[bucky].tick) {
        charlirose = alvaro[bucky].tick.length;
      }
      open_sv[bucky] = alvaro[bucky].open;
      if (alvaro[bucky].close < alvaro[bucky].open) {
        zuriyah.fillStyle = "#d75c48";
        fon_svecha[bucky] = "red";
      } else {
        if (alvaro[bucky].close > alvaro[bucky].open) {
          zuriyah.fillStyle = "#53a15f";
          fon_svecha[bucky] = "green";
        } else {
          if ((alvaro[bucky].close = alvaro[bucky].open)) {
            zuriyah.fillStyle = "#808080";
            fon_svecha[bucky] = "grey";
          }
        }
      }
      // zuriyah.fillRect(neekon * (luzmila - 1 - bucky), $(brityn).height(), neekon - neekon / 100, 0 - vincenzio * (charlirose / cendy));
      zuriyah.fillStyle = "#fff";
      zuriyah.font = "14px Verdana";
      emryss = new Date(alvaro[bucky].time * 1e3);
      vicktoria = new Date();
      andalasia = emryss.getHours();
      if (felice == "Binomo") {
        plus = 1;
        sec_0 = 59;
      } else {
        plus = 0;
        sec_0 = 60;
      }
      if (timer == 1) {
        milya = emryss.getMinutes() + plus;
        if (bucky < 1) {
          corrick = sec_0 - glob_sec + plus;
          if (corrick < -1) {
            corrick = 59;
          }
          if (corrick < -2) {
            corrick = 58;
          }
          if (corrick < 10) {
            corrick = "0" + corrick;
          }
        } else {
          corrick = "";
          zuriyah.font = "14px Verdana";
        }
        if (milya < 10) {
          milya = "0" + milya;
        }
        if (milya > 59) {
          milya = "00";
          andalasia = parseInt(andalasia) + 1;
        }
        if (andalasia < 10) {
          andalasia = "0" + plus;
        }
        if (corrick > 59) {
          corrick = "00";
        }
        if (corrick <= "45" && corrick > "35") {
          zuriyah.fillStyle = "#ffff00";
        }
        if (corrick <= "35" && corrick > "30") {
          zuriyah.fillStyle = "#ff0000";
        }
      } else {
        milya = emryss.getMinutes() + plus;
        if (bucky < 1) {
          corrick = glob_sec - plus;
          if (corrick < 10) {
            corrick = "0" + corrick;
          }
        } else {
          corrick = "";
          zuriyah.font = "14px Verdana";
        }
        if (milya < 10) {
          milya = "0" + milya;
        }
        if (milya > 59) {
          milya = "00";
          andalasia = parseInt(andalasia) + plus;
        }
        if (andalasia < 10) {
          andalasia = "0" + andalasia;
        }
        if (corrick > 59) {
          corrick = "00";
        }
        if (corrick >= "15" && corrick < "25") {
          zuriyah.fillStyle = "#ffff00";
        }
        if (corrick >= "25" && corrick < "30") {
          zuriyah.fillStyle = "#ff0000";
        }
      }
      if (bucky < 1) {
        corrick = ":" + corrick;
        if (timer == 1) {
        } else {
          milya = milya - 1;
        }
      }
      // zuriyah.fillText(andalasia + ":" + milya + corrick, neekon * (luzmila - 1 - bucky), $(brityn).height() - vincenzio * (charlirose / cendy) - 10);
      X_price[bucky] = neekon * (luzmila - 1 - bucky);
      Y_price[bucky] = $(brityn).height() - vincenzio * (charlirose / cendy);
      charlirose = 0;
    }
  };
  this.rish = function (reja) {
    // CARREGA SETAS
    var richana = $("#period").val() * 1 + 1;
    var ladaruis = 300;
    cena_sv = [];
    (cena_stolbik = 0), (rash_up = 0);
    var joeen,
      aizen = [],
      jonavin = 0,
      donivan,
      tessah;
    // if (window.location.hostname.length !== jioni.length) {
    //   return;
    // }
    // ;
    var brynlie = $("#period").val(),
      leartis,
      zaki = 0,
      daemian,
      talore,
      eddie = 0,
      keyten = [],
      merek = [],
      daffney = [],
      tyrance,
      rabecca,
      jaqson = [],
      louvine = [];

    for (var maybellene = 0; maybellene < brynlie; maybellene++) {
      if (!reja[maybellene].tick) {
        break;
      }

      if (reja[maybellene].tick) {
        renault = reja[maybellene].tick.length;
      }

      (merek = []), (talore = reja[maybellene].tick.length);
      if (talore > zaki) {
        zaki = talore;
      }

      for (var mecie = 0; mecie < talore; mecie++) {
        if (!merek[reja[maybellene].tick[mecie].close]) {
          merek[reja[maybellene].tick[mecie].close] = 1;
        } else {
          merek[reja[maybellene].tick[mecie].close]++;
        }
      }
      var daffney = [];
      for (var sharrona in merek) {
        daffney.push([sharrona, merek[sharrona]]);
      }
      var tyrance = daffney.length,
        rabecca,
        keyten = [];
      for (var kejuan = 0; kejuan < tyrance; kejuan++) {
        if (Number(daffney[kejuan][0]) > 0) {
          rabecca = kejuan;
          eddie = daffney[kejuan][0];
          for (var ajhane = 0; ajhane < tyrance; ajhane++) {
            if (Number(daffney[ajhane][0]) > eddie) {
              eddie = daffney[ajhane][0];
              rabecca = ajhane;
              if (kejuan > 0) {
                kejuan--;
              }
            }
          }

          keyten.push([eddie, daffney[rabecca][1]]);
          daffney[rabecca][0] = 0;
        }
      }

      jaqson.push(keyten);
    }

    var breshia = jaqson.length,
      beatryce;
    var daemian = zaki / 100;
    var karise = ($(brityn).width() - 120) / brynlie;
    var lavith = (($(brityn).height() / 100) * 20) / 100,
      param = 0,
      camile = 0;
    var leartis;
    candleLow = 0;
    candleHigh = 0;
    for (var maybellene = 0; maybellene < breshia; maybellene++) {
      beatryce = jaqson[maybellene].length;
      param = ((reja[maybellene].tick.length / daemian) * lavith) / beatryce;
      camile = reja[maybellene].tick[0].close;
      leartis = 0;
      open[maybellene] = open_sv[maybellene];
      candleHigh = jaqson[maybellene][0][0];
      candleLow = jaqson[maybellene][beatryce - 1][0];
      for (var talore = 0; talore < beatryce; talore++) {
        if (jaqson[maybellene][talore][1] > leartis) {
          leartis = jaqson[maybellene][talore][1];
        }
      }

      joeen = 0;
      aizen = 0;
      for (var talore = 0; talore < beatryce; talore++) {
        if (jaqson[maybellene][talore][1] >= joeen) {
          joeen = jaqson[maybellene][talore][1];
          jonavin = beatryce;
          max_p_find = talore;
          aizen = jaqson[maybellene][talore][0];
          if (aizen < camile) {
            color_text = "#008f1d";
          }

          if (aizen > camile) {
            color_text = "#d75c48";
          }

          if (jaqson[maybellene][talore][0] == camile) {
            color_text = "#ffffff";
          }
        }

        zuriyah.fillStyle = "#005811";
        if (jaqson[maybellene][talore][0] <= camile) {
          zuriyah.fillStyle = "#930000";
        }
        jamyria =
          (karise / 100) * (jaqson[maybellene][talore][1] / (leartis / 100));

        louvine.hp = $(brityn).height() - param * (beatryce - talore);
        louvine.hh = param;
        louvine.wp = karise * (brynlie - 1 - maybellene);
        louvine.ww = (karise / 100) * (leartis / (leartis / 100));
      }
      x = X_price[maybellene];
      y = Y_price[maybellene];

      if (strelki_procent == 1) {
        zuriyah.fillStyle = color_text;

        procent_rassh = (max_p_find * 100) / jonavin;
        procent_rassh = parseFloat(procent_rassh.toFixed());
        zuriyah.font = str_min_size + "px Verdana";
        if (fon_svecha[maybellene] == "red") {
          if (procent_rassh < 50) {
            donivan = "down";
          } else {
            if (procent_rassh > 50) {
              donivan = "down";
            } else {
              if ((procent_rassh = 50)) {
                donivan = "0";
              }
            }
          }
          procent_rassh = 100 - procent_rassh;
        }

        if (fon_svecha[maybellene] == "green") {
          if (procent_rassh < 50) {
            donivan = "up";
          } else {
            if (procent_rassh > 50) {
              donivan = "up";
            } else {
              if ((procent_rassh = 50)) {
                donivan = "0";
              }
            }
          }
        }

        if (fon_svecha[maybellene] == "grey") {
          if (procent_rassh < 50) {
            donivan = "0";
          } else {
            if (procent_rassh > 50) {
              donivan = "0";
            } else {
              if ((procent_rassh = 50)) {
                donivan = "0";
              }
            }
          }
        }

        if (donivan == "up") {
          rash_up = procent_rassh;
          rash_down = 100 - procent_rassh;
        } else {
          if (donivan == "down") {
            rash_up = 100 - procent_rassh;
            rash_down = procent_rassh;
          } else {
            if (donivan == "0") {
              rash_up = procent_rassh;
              rash_down = procent_rassh;
            }
          }
        }

        po_up = 2;
        po_down = 1;
      }

      if (Strelki_On === 1 && maybellene === 1) {
        const sebastiano = $(brityn).width() / 5;
        const litza = $(brityn).height() / 10;
        const sumaiya = sebastiano,
          ianmichael = litza;
        const arrow_down_x = sebastiano,
          arrow_down_y = litza + 330;
        const fillText = () => {
          if (strelki_procent === 1) {
            zuriyah.fillStyle = "#fff";
            zuriyah.fillText(
              rash_down + "%",
              sumaiya + 55,
              (arrow_down_y / po_up) * 1.5
            );
            zuriyah.fillText(
              rash_up + "%",
              sumaiya + 55,
              (arrow_down_y / po_up) * 0.9
            );
          }
        };
        zuriyah.font = 20 + "px Verdana";

        switch (color_text) {
          case "#d75c48":
            ArrowDraw(
              zuriyah,
              "up",
              sumaiya,
              ianmichael,
              150,
              150,
              "green",
              1,
              "str",
              entrada
            );
            ArrowDraw(
              zuriyah,
              "down",
              arrow_down_x,
              arrow_down_y,
              150,
              150,
              "red",
              1,
              "fill",
              entrada
            );
            fillText();
            break;

          case "#008f1d":
            ArrowDraw(
              zuriyah,
              "up",
              sumaiya,
              ianmichael,
              150,
              150,
              "green",
              1,
              "fill",
              entrada
            );
            ArrowDraw(
              zuriyah,
              "down",
              arrow_down_x,
              arrow_down_y,
              150,
              150,
              "red",
              1,
              "str",
              entrada
            );
            fillText();
            break;

          case "#ffffff":
            ArrowDraw(
              zuriyah,
              "up",
              sumaiya,
              ianmichael,
              150,
              150,
              "green",
              1,
              "str",
              entrada
            );
            ArrowDraw(
              zuriyah,
              "down",
              arrow_down_x,
              arrow_down_y,
              150,
              150,
              "red",
              1,
              "str",
              entrada
            );
            fillText();
            break;
        }
      }
    }

    if ($(".preload").is(":visible")) {
      $(".preload").hide("fade");
    }
  };
  this.soc = function (_0x8a93x73 = "frxEURUSD", _0x8a93x46 = 60) {
    var amandalee, xareni, kotirovka;
    // if (window.location.hostname.length !== jioni.length) {
    //   return;
    // }
    // ;
    $(".preload").show("fade");
    if (
      $("#" + $("#pair").attr("val").replace(/[/]/g, "_")).attr("data") !==
        felice ||
      !pegeen
    ) {
      felice = $("#" + $("#pair").attr("val").replace(/[/]/g, "_")).attr(
        "data"
      );
      if (pegeen) {
        pegeen.close();
      }
      if (felice == "OlympTrade") {
        console.log("OlympTrade");
        pegeen = new WebSocket("wss://olymptrade.com/ds/v4");
      } else {
        if (felice == "Binary") {
          console.log("Binary");
          pegeen = new WebSocket(
            "wss://blue.binaryws.com/websockets/v3?app_id=1&l=RU&brand=deriv"
          );
        } else {
          if (felice == "Intradebar") {
            _0x8a93x73 = _0x8a93x73.replace(/int-/g, "");
            pegeen = new WebSocket("wss://sec3.intrade2.bar/fxconnect");
          } else {
            if (felice == "Binomo") {
              console.log("Binomo");
              pegeen = new WebSocket("wss://as.binomo.com/");
            } else {
              console.log("ERROR ??? typ: ", felice);
            }
          }
        }
      }
      pegeen.onopen = function () {
        if (felice == "OlympTrade") {
          send_olymp =
            '[{"t":2,"e":4,"d":[{"p":"' +
            _0x8a93x73 +
            '","tf":' +
            _0x8a93x46 +
            "}]}]";
          pegeen.send(send_olymp);
        }
        if (felice == "Binary") {
          pegeen.send(
            '{"ticks_history":"' +
              _0x8a93x73 +
              '","style":"ticks","end":"latest","count":5000,"subscribe":1,"req_id":1,"passthrough":{}}'
          );
        }
        if (felice == "Intradebar") {
          _0x8a93x73 = _0x8a93x73.replace(/int-/g, "");
          pegeen.send(_0x8a93x73);
        }
        if (felice == "Binomo") {
          pegeen.send("subscribe:" + _0x8a93x73);
        }
      };
      pegeen.onclose = function () {
        console.log("Connection closed...");
        hasting.soc($("#pair").attr("val"), $("#size").val());
      };
      pegeen.onerror = function (shanteya) {
        if (felice == "Binomo") {
          broker_err =
            '\nÃƒÂÃ…Â¸Ãƒâ€˜Ã¢â€šÂ¬ÃƒÂÃ‚Â¾ÃƒÂÃ‚Â±Ãƒâ€˜Ã†â€™ÃƒÂÃ‚Â¹ "macOS", ÃƒÂÃ‚Â±Ãƒâ€˜Ã¢â€šÂ¬ÃƒÂÃ‚Â°Ãƒâ€˜Ã†â€™ÃƒÂÃ‚Â·ÃƒÂÃ‚ÂµÃƒâ€˜Ã¢â€šÂ¬ Safari ÃƒÂÃ‚Â¸ VPN.';
        } else {
          broker_err =
            "\nÃƒÂÃ…Â¸Ãƒâ€˜Ã¢â€šÂ¬ÃƒÂÃ‚Â¾ÃƒÂÃ‚Â±Ãƒâ€˜Ã†â€™ÃƒÂÃ‚Â¹ Ãƒâ€˜Ã‚Â VPN.";
        }
        alert(
          "ÃƒÂÃ‚ÂÃƒÂÃ‚ÂµÃƒâ€˜Ã¢â‚¬Å¡ Ãƒâ€˜Ã‚ÂÃƒÂÃ‚Â¾ÃƒÂÃ‚ÂµÃƒÂÃ‚Â´ÃƒÂÃ‚Â¸ÃƒÂÃ‚Â½ÃƒÂÃ‚ÂµÃƒÂÃ‚Â½ÃƒÂÃ‚Â¸Ãƒâ€˜Ã‚Â Ãƒâ€˜Ã‚Â Ãƒâ€˜Ã‚ÂÃƒÂÃ‚ÂµÃƒâ€˜Ã¢â€šÂ¬ÃƒÂÃ‚Â²ÃƒÂÃ‚ÂµÃƒâ€˜Ã¢â€šÂ¬ÃƒÂÃ‚Â¾ÃƒÂÃ‚Â¼: " +
            felice +
            "\nÃƒÂÃ…Â¾Ãƒâ€˜Ã‹â€ ÃƒÂÃ‚Â¸ÃƒÂÃ‚Â±ÃƒÂÃ‚ÂºÃƒÂÃ‚Â° ÃƒÂÃ‚Â¿ÃƒÂÃ‚Â¾ÃƒÂÃ‚Â´ÃƒÂÃ‚ÂºÃƒÂÃ‚Â»Ãƒâ€˜Ã…Â½Ãƒâ€˜Ã¢â‚¬Â¡ÃƒÂÃ‚ÂµÃƒÂÃ‚Â½ÃƒÂÃ‚Â¸Ãƒâ€˜Ã‚Â." +
            broker_err +
            "\nÃƒÂÃ…Â¾Ãƒâ€˜Ã‹â€ ÃƒÂÃ‚Â¸ÃƒÂÃ‚Â±ÃƒÂÃ‚ÂºÃƒÂÃ‚Â°: " +
            shanteya.message
        );
        var anilah = $(brityn).height(),
          maddon = $(brityn).width();
        zuriyah.clearRect(0, 0, maddon, anilah);
        zuriyah.strokeStyle = "#fff";
        zuriyah.font = (maddon / 100) * 4 + "px Verdana";
        var jamay =
          "CotaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes de " +
          $("#pair").text() +
          " nÃƒÆ’Ã‚Â£o estÃƒÆ’Ã‚Â£o disponÃƒÆ’Ã‚Â­veis".zuriyah.strokeText(
            jamay,
            (maddon / jamay.length) * 4,
            anilah / 2
          );
        see = 0;
        johel = 0;
        if ($(".preload").is(":visible")) {
          $(".preload").hide("fade");
        }
      };
      pegeen.onmessage = function (shamala) {
        Menu();
        temppp = JSON.parse(shamala.data);
        if (temppp.error && temppp.error.code) {
          if (temppp.error.code == "MarketIsClosed") {
            alert(temppp.error.code + "\n" + temppp.error.message);
          } else {
            if (temppp.error.code == "WrongResponse") {
              alert(
                "WrongResponse: " +
                  temppp.error.code +
                  "\n" +
                  temppp.error.message +
                  "\n" +
                  "Restart"
              );
              location.reload();
            } else {
              alert(temppp.error.message);
            }
          }
        }
        if (felice == "Binomo") {
          amandalee = temppp.data[0].assets;
          xareni = temppp.data[0].assets[0].created_at;
          kotirovka = temppp.data[0].assets[0].rate;
        } else {
          if (felice == "Binary") {
            if (temppp.msg_type == "history") {
              amandalee = temppp.tick;
              xareni = temppp.history.times[0] * 1e3;
              kotirovka = temppp.history.prices[0];
              localStorage.setItem("data", JSON.stringify([]));
              chailyn = 0;
              hasting.predobrdatahistory(shamala.data);
            } else {
              if (temppp.msg_type == "tick") {
                amandalee = temppp.tick;
                xareni = temppp.tick.epoch * 1e3;
                kotirovka = temppp.tick.quote;
              } else {
                amandalee;
                xareni;
                kotirovka;
              }
            }
          } else {
            if (felice == "Intradebar") {
              amandalee = temppp.bid;
              xareni = temppp.Updates * 1e3;
              kotirovka = (temppp.bid + temppp.ask) / 2;
            } else {
              amandalee;
              xareni;
              kotirovka;
            }
          }
        }
        if (amandalee && xareni) {
          if (felice == "Binary" && temppp.msg_type == "history") {
          } else {
            timer_test = new Date(xareni);
            timer_glob_hour = timer_test.getHours();
            timer_glob_min = timer_test.getMinutes();
            timer_glob_sec = timer_test.getSeconds();

            hasting.predobrdata(shamala.data);
          }
        }
        document.getElementById("tik").setAttribute("value", kotirovka);

        document.getElementById("tikokrugl").setAttribute("value", kotirovka);
      };
    } else {
      if (felice == "OlympTrade" && pegeen) {
        if (!uuid) {
          uuid = (
            Date.now().toString(36) + Math.random().toString(36).substr(2, 12)
          ).toUpperCase();
        }
        if (sub_uid === "undefined") {
          if (pegeen.readyState === WebSocket.OPEN) {
            pegeen.close();
            pegeen = new WebSocket("wss://olymptrade.com/ds/v4");
          }
          pegeen.onopen = function () {
            send_olymp =
              '[{"t":2,"e":4,"d":[{"p":"' +
              _0x8a93x73 +
              '","tf":' +
              _0x8a93x46 +
              "}]}]";
            pegeen.send(send_olymp);
          };
        } else {
          send_sub_uid =
            '[{"t":2,"e":5,"uuid":"' +
            uuid +
            '","d":[{"sub_uid":"' +
            sub_uid +
            '"}]}]';
          pegeen.send(send_sub_uid);
          send_olymp =
            '[{"t":2,"e":4,"uuid":"' +
            uuid +
            '","d":[{"p":"' +
            _0x8a93x73 +
            '","tf":' +
            _0x8a93x46 +
            "}]}]";
          pegeen.send(send_olymp);
        }
      }
      if (pegeen.readyState == 1) {
        if (felice == "Binary") {
          pegeen.send('{"forget_all":["ticks","candles"],"passthrough":{}}');
          pegeen.send(
            '{"ticks_history":"' +
              _0x8a93x73 +
              '","style":"ticks","end":"latest","count":5000,"subscribe":1,"req_id":1,"passthrough":{}}'
          );
        }
        if (felice == "Intradebar") {
          _0x8a93x73 = _0x8a93x73.replace(/int-/g, "");
          pegeen.send(_0x8a93x73);
        }
      }
      if (felice == "Binomo") {
        var maxi = "";
        console.log("Binomo22");
        if (maxi == "undefined") {
          if (pegeen.readyState === WebSocket.OPEN) {
            pegeen.close();
            pegeen = new WebSocket("wss://as.binomo.com/");
          }
          pegeen.onopen = function () {
            pegeen.send("subscribe:" + _0x8a93x73);
            console.log("subscribe:" + _0x8a93x73);
          };
        } else {
          if (pegeen.readyState == 1) {
            pegeen.send("unsubscribe:" + hasting.data.pair);
            console.log("unsubscribe:" + hasting.data.pair);
            pegeen.send("subscribe:" + _0x8a93x73);
            console.log("subscribe:" + _0x8a93x73);
          }
        }
      }
      johel = 0;
      if ($(".preload").is(":visible")) {
        Menu();
      }
    }
  };
  this.predobrdatahistory = function (shynisha) {
    var shynisha = JSON.parse(shynisha);
    if (felice == "Binary") {
      for (var ralen = 0; ralen < shynisha.history.prices.length; ralen++) {
        var stclair = {},
          farmer;
        if (see == 0 && shynisha.history) {
          see = shynisha.history.prices[ralen];
        }
        if (shynisha.history) {
          if (see == shynisha.history.prices[ralen]) {
            johel++;
          }
        }
        if (shynisha.history.prices) {
          farmer = shynisha.history.times[ralen];
          tick_prices = shynisha.history.prices[ralen];
          name_pair = shynisha.echo_req.ticks_history;

          test_time = new Date(farmer * 1e3);
          glob_hour = test_time.getHours();
          glob_min = test_time.getMinutes();
          glob_sec = test_time.getSeconds();
          if (aricela == true) {
            stclair.pair = name_pair;
            stclair.time = farmer;
            stclair.open = tick_prices;
            stclair.close = tick_prices;
            stclair.low = tick_prices;
            stclair.high = tick_prices;
          } else {
            if (aricela == false) {
              stclair.barsize = +$("#size").val();
              stclair.pair = name_pair;
              stclair.data = [];
              var reba = {};
              reba.pair = name_pair;
              reba.time = farmer - (farmer % $("#size").val());
              reba.open = +tick_prices;
              reba.low = +tick_prices;
              reba.high = +tick_prices;
              reba.close = +tick_prices;
              for (var anayis = 0; anayis < 72; anayis++) {
                stclair.data.push(reba);
                reba.time = farmer - $("#size").val();
              }
            }
          }
        }
        hasting.obr_hist(stclair, ralen);
      }
    }
  };
  this.obr_hist = function (lutina, milam) {
    kyroe = 0;
    if (lutina.servertime) {
      cessna++;
    }
    if (lutina.time) {
      cessna = 0;
      var jazmari = lutina.time % hasting.data.barsize;
      if (
        jazmari == 0 ||
        Math.floor(lutina.time / hasting.data.barsize) >
          Math.floor(hasting.data.data[0].time / hasting.data.barsize)
      ) {
        if (lutina.time > chailyn) {
          chailyn = lutina.time + 10;
          hasting.data.data.unshift(lutina);
          localStorage.setItem("data", JSON.stringify(hasting.data));
        }
      } else {
        if (lutina.close) {
          cessna = 0;
          if (hasting.data.data[0].high < lutina.high) {
            hasting.data.data[0].high = lutina.high;
          }
          if (hasting.data.data[0].low > lutina.low) {
            hasting.data.data[0].low = lutina.low;
          }
          if (hasting.data.data[0].close != lutina.close) {
            hasting.data.data[0].close = lutina.close;
            if (!hasting.data.data[0].tick) {
              hasting.data.data[0].tick = [];
              hasting.data.data[0].tick.push(lutina);
            } else {
              hasting.data.data[0].tick.unshift(lutina);
            }
          }
        }
      }
    } else {
      if (lutina.data) {
        if (!aricela) {
          var derell = JSON.parse(localStorage.getItem("data"));
          if (derell) {
            if (
              derell.pair == lutina.pair &&
              derell.barsize == lutina.barsize
            ) {
              hasting.data = derell;
            } else {
              hasting.data = lutina;
            }
          } else {
            hasting.data = lutina;
          }
          aricela = true;
        }
      }
    }
    if (cessna > 2 || johel > 20) {
      var mau = $(brityn).height(),
        carlita = $(brityn).width();
      zuriyah.clearRect(0, 0, carlita, mau);
      zuriyah.strokeStyle = "#fff";
      zuriyah.font = (carlita / 100) * 4 + "px Verdana";
      // var chene = "CotaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes de " + $("#pair").text() + " nÃƒÆ’Ã‚Â£o estÃƒÆ’Ã‚Â£o disponÃƒÆ’Ã‚Â­veis".
      // zuriyah.strokeText(chene, carlita / chene.length * 4, mau / 2);
      see = 0;
      johel = 0;
      if ($(".preload").is(":visible")) {
        console.log("1preload4");
        $(".preload").hide("fade");
      }
    }
  };
  this.predobrdata = function (geneine) {
    var geneine = JSON.parse(geneine);
    uuid = (
      Date.now().toString(36) + Math.random().toString(36).substr(2, 12)
    ).toUpperCase();
    if (felice == "OlympTrade") {
      sub_bin = "undefined";
      var jackilyn = {},
        brashaun;
      if (see == 0 && geneine[5]) {
        if (see == 0 && geneine[5].e == 4) {
          sub_uid = geneine[5].d[0].sub_uid;
        }
      } else {
        if (geneine[0].d[0].sub_uid) {
          sub_uid = geneine[0].d[0].sub_uid;
        } else {
          if (geneine[5]) {
            if (geneine[5].e == 4) {
              if (geneine[5].d[0]) {
                sub_uid = geneine[5].d[0].sub_uid;
              }
            }
          }
        }
      }
      if (see == 0 && geneine[0].e == 1) {
        see = geneine[0].d[0].q;
      }
      if (geneine[0].d) {
        if (see == geneine[0].d[0].close) {
          johel++;
        }
      }
      if (geneine[0].e == 1) {
        geneine = geneine[0].d[0];
        brashaun = geneine.t;
        test_time = new Date(brashaun * 1e3);
        glob_hour = test_time.getHours();
        glob_min = test_time.getMinutes();
        glob_sec = test_time.getSeconds();
        if (aricela == true) {
          jackilyn.pair = geneine.p;
          jackilyn.time = +brashaun;
          jackilyn.open = +geneine.q;
          jackilyn.low = +geneine.q;
          jackilyn.high = +geneine.q;
          jackilyn.close = +geneine.q;
        } else {
          if (aricela == false) {
            jackilyn.barsize = +$("#size").val();
            jackilyn.data = [];
            jackilyn.pair = geneine.p;
            var juddah = {};
            juddah.pair = geneine.p;
            juddah.time = brashaun - (brashaun % $("#size").val());
            juddah.open = +geneine.q;
            juddah.low = +geneine.q;
            juddah.high = +geneine.q;
            juddah.close = +geneine.q;
            for (var markya = 0; markya < 72; markya++) {
              jackilyn.data.push(juddah);
              juddah.time = brashaun - $("#size").val();
            }
          }
        }
      }
      hasting.obr(jackilyn);
    }
    if (felice == "Intradebar") {
      sub_bin = "undefined";
      var jackilyn = {},
        brashaun;
      if (see == 0 && geneine) {
        see = (geneine.bid + geneine.ask) / 2;
      }
      if (geneine) {
        if (see == (geneine.bid + geneine.ask) / 2) {
          johel++;
        }
      }
      if (geneine) {
        brashaun = geneine.Updates;

        geneine.quote =
          Math.round(((geneine.bid + geneine.ask) / 2) * 1e5) / 1e5;

        test_time = new Date(brashaun * 1e3);
        glob_hour = test_time.getHours();
        glob_min = test_time.getMinutes();
        glob_sec = test_time.getSeconds();
        if (aricela == true) {
          jackilyn.pair = geneine.symbol;
          jackilyn.time = +brashaun;
          jackilyn.open = +geneine.quote;
          jackilyn.low = +geneine.quote;
          jackilyn.high = +geneine.quote;
          jackilyn.close = +geneine.quote;
        } else {
          if (aricela == false) {
            jackilyn.barsize = +$("#size").val();
            jackilyn.data = [];
            jackilyn.pair = geneine.symbol;
            var juddah = {};
            juddah.pair = geneine.symbol;
            juddah.time = brashaun - (brashaun % $("#size").val());
            juddah.open = +geneine.quote;
            juddah.low = +geneine.quote;
            juddah.high = +geneine.quote;
            juddah.close = +geneine.quote;
            for (var markya = 0; markya < 72; markya++) {
              jackilyn.data.push(juddah);
              juddah.time = brashaun - $("#size").val();
            }
          }
        }
      }
      hasting.obr(jackilyn);
    }
    if (felice == "Binary") {
      sub_bin = "undefined";
      var jackilyn = {},
        brashaun;
      if (see == 0 && geneine.tick) {
        see = geneine.tick.quote;
      }
      if (geneine.tick) {
        if (see == geneine.tick.quote) {
          johel++;
        }
      }
      if (geneine.tick) {
        geneine = geneine.tick;
        brashaun = geneine.epoch;

        test_time = new Date(brashaun * 1e3);
        glob_hour = test_time.getHours();
        glob_min = test_time.getMinutes();
        glob_sec = test_time.getSeconds();
        if (aricela == true) {
          jackilyn.pair = geneine.symbol;
          jackilyn.time = +brashaun;
          jackilyn.open = +geneine.quote;
          jackilyn.low = +geneine.quote;
          jackilyn.high = +geneine.quote;
          jackilyn.close = +geneine.quote;
        } else {
          if (aricela == false) {
            jackilyn.barsize = +$("#size").val();
            jackilyn.data = [];
            jackilyn.pair = geneine.symbol;
            var juddah = {};
            juddah.pair = geneine.symbol;
            juddah.time = brashaun - (brashaun % $("#size").val());
            juddah.open = +geneine.quote;
            juddah.low = +geneine.quote;
            juddah.high = +geneine.quote;
            juddah.close = +geneine.quote;
            for (var markya = 0; markya < 72; markya++) {
              jackilyn.data.push(juddah);
              juddah.time = brashaun - $("#size").val();
            }
          }
        }
      }
      hasting.obr(jackilyn);
    }
    if (felice == "Binomo") {
      sub_uid = "undefined";
      sub_bin = 0;
      var jackilyn = {},
        brashaun;
      if (see == 0 && geneine.data[0].action) {
        if (geneine.data[0].action == "subscribe") {
          sub_bin = 123;
        }
      }
      if (see == 0 && geneine.data[0].assets) {
        see = geneine.data[0].assets[0].rate;
      }
      if (geneine.data[0].assets) {
        if (see == geneine.data[0].assets[0].rate) {
          johel++;
        }
      }
      if (geneine.errors[0]) {
        jackilyn = { servertime: 1234567890 };
      } else {
        if (geneine.data[0].assets) {
          geneine = geneine.data[0].assets[0];

          brashaun = String(Date.parse(geneine.created_at));
          tim_00 = Date.parse(geneine.created_at);
          test_time = new Date(tim_00);
          glob_sec = test_time.getSeconds();
          glob_min = test_time.getMinutes();
          glob_hour = test_time.getHours();
          brashaun = Number(brashaun.substring(0, brashaun.length - 3));
          if (aricela == true) {
            jackilyn.pair = geneine.ric;
            jackilyn.time = +brashaun;
            jackilyn.open = +geneine.rate;
            jackilyn.low = +geneine.rate;
            jackilyn.high = +geneine.rate;
            jackilyn.close = +geneine.rate;
          } else {
            if (aricela == false) {
              jackilyn.barsize = +$("#size").val();
              jackilyn.data = [];
              jackilyn.pair = geneine.ric;
              var juddah = {};
              juddah.pair = geneine.ric;
              juddah.time = brashaun - (brashaun % $("#size").val());
              juddah.open = +geneine.rate;
              juddah.low = +geneine.rate;
              juddah.high = +geneine.rate;
              juddah.close = +geneine.rate;
              for (var markya = 0; markya < 72; markya++) {
                jackilyn.data.push(juddah);
                juddah.time = brashaun - $("#size").val();
              }
            }
          }
        }
      }
      hasting.obr(jackilyn);
    }
  };
  this.indi = function () {
    if (!hasting.data) {
      return;
    }
    // if (window.location.hostname.length !== jioni.length) {
    //   return;
    // }
    // ;
    var eraine = hasting.data.data;
    if (!eraine[0].tick) {
      return;
    }
    var adriena = $("#period").val(),
      abdullatif = [],
      miamarie = 0,
      montanez = [];
    for (var mira = 0; mira < adriena; mira++) {
      if (!eraine[mira].tick) {
        break;
      }
      for (var viron = 0; viron < eraine[mira].tick.length; viron++) {
        if (!abdullatif[eraine[mira].tick[viron].close]) {
          abdullatif[eraine[mira].tick[viron].close] = 1;
        } else {
          abdullatif[eraine[mira].tick[viron].close]++;
        }
      }
    }
    for (var chisholm in abdullatif) {
      if (abdullatif[chisholm] > miamarie) {
        miamarie = abdullatif[chisholm];
      }
      montanez.push([chisholm, abdullatif[chisholm]]);
    }
    var amaurion = montanez.length,
      anamari,
      desheila = [];
    for (var mira = 0; mira < amaurion; mira++) {
      if (Number(montanez[mira][0]) > 0) {
        anamari = mira;
        ky = montanez[mira][0];
        for (var viron = 0; viron < amaurion; viron++) {
          if (Number(montanez[viron][0]) > ky) {
            ky = montanez[viron][0];
            anamari = viron;
            if (mira > 0) {
              mira--;
            }
          }
        }
        desheila.push([ky, montanez[anamari][1]]);
        montanez[anamari][0] = 0;
      }
    }
    zuriyah.clearRect(0, 0, $(brityn).width(), $(brityn).height());
    hasting.risg(eraine);
    hasting.rish(eraine);
  };
  // if (window.location.hostname.length !== jioni.length) {
  //   return;
  // }
  // ;
  this.obr = function (bryna) {
    kyroe = 0;
    if ($(".preload").is(":visible")) {
    }
    if (bryna.servertime) {
      cessna++;
    }
    if (bryna.time) {
      cessna = 0;
      var emilyjane = bryna.time % hasting.data.barsize;
      if (
        emilyjane == 0 ||
        Math.floor(bryna.time / hasting.data.barsize) >
          Math.floor(hasting.data.data[0].time / hasting.data.barsize)
      ) {
        if (bryna.time > chailyn) {
          chailyn = bryna.time + 10;
          hasting.data.data.unshift(bryna);
          localStorage.setItem("data", JSON.stringify(hasting.data));
        }
      } else {
        if (bryna.close) {
          cessna = 0;
          if (hasting.data.data[0].high < bryna.high) {
            hasting.data.data[0].high = bryna.high;
          }
          if (hasting.data.data[0].low > bryna.low) {
            hasting.data.data[0].low = bryna.low;
          }
          if (hasting.data.data[0].close != bryna.close) {
            hasting.data.data[0].close = bryna.close;
            if (!hasting.data.data[0].tick) {
              hasting.data.data[0].tick = [];
              hasting.data.data[0].tick.push(bryna);
            } else {
              hasting.data.data[0].tick.unshift(bryna);
            }
          }
        }
      }
      requestAnimationFrame(hasting.indi);
    } else {
      if (bryna.data) {
        if (!aricela) {
          var munisa = JSON.parse(localStorage.getItem("data"));
          if (munisa) {
            if (munisa.pair == bryna.pair && munisa.barsize == bryna.barsize) {
              hasting.data = munisa;
            } else {
              hasting.data = bryna;
            }
          } else {
            hasting.data = bryna;
          }
          aricela = true;
        }
      }
    }
    if (cessna > 2 || johel > 20) {
      var tabethia = $(brityn).height(),
        starasia = $(brityn).width();
      zuriyah.clearRect(0, 0, starasia, tabethia);
      zuriyah.strokeStyle = "#fff";
      zuriyah.font = (starasia / 100) * 4 + "px Verdana";
      // var basheer = "CotaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes de " + $("#pair").text() + " nÃƒÆ’Ã‚Â£o estÃƒÆ’Ã‚Â£o disponÃƒÆ’Ã‚Â­veis".
      // zuriyah.strokeText(basheer, starasia / basheer.length * 4, tabethia / 2);
      see = 0;
      johel = 0;
      if ($(".preload").is(":visible")) {
        console.log("preload4");
        $(".preload").hide("fade");
      }
    }
  };
  this.pairchange = function () {
    console.log(
      "Ãƒâ€˜Ã‚ÂÃƒÂÃ‚Â¼ÃƒÂÃ‚ÂµÃƒÂÃ‚Â½ÃƒÂÃ‚Â° ÃƒÂÃ‚Â¿ÃƒÂÃ‚Â°Ãƒâ€˜Ã¢â€šÂ¬Ãƒâ€˜Ã¢â‚¬Â¹"
    );

    aricela = false;
    var peter = 0;
    if (condol.aff) {
      peter = condol.aff;
    }
    var charmarie = {
      aff: peter,
      pair: $("#pair").attr("val"),
      period: $("#period").val(),
      size: $("#size").val(),
      date: condol.date,
    };
    cessna = 0;
    localStorage.setItem("dsav", JSON.stringify(charmarie));
    hasting.soc($("#pair").attr("val"), $("#size").val());
  };
  $("#size").change(function () {
    hasting.pairchange();
  });
  $("#pair").click(function () {
    if (!$(".divscrol").is(":visible")) {
      $(".divscrol").show("blind");
    } else {
      $(".divscrol").hide("blind");
    }
  });
  $("#valx").click(function () {
    if ($(".divscrol").is(":visible")) {
      $(".divscrol").hide("blind");
    }
  });
  $(".sels").click(function () {
    if ($(this).attr("val") !== $("#pair").attr("val")) {
      $("#pair").attr("val", $(this).attr("val"));
      $("#pair").html($(this).html());
      hasting.pairchange();
    }
    $(".divscrol").hide("blind");
  });
  $("#period").change(function () {
    if ($(this).val() < 2) {
      $(this).val(2);
    }
    if ($(this).val() > 72) {
      $(this).val(72);
    }
    var olya = 0;
    if (condol.aff) {
      olya = condol.aff;
    }
    var piya = {
      aff: olya,
      pair: $("#pair").attr("val"),
      period: $("#period").val(),
      size: $("#size").val(),
      date: condol.date,
    };
    localStorage.setItem("dsav", JSON.stringify(piya));
  });
  condol = JSON.parse(localStorage.getItem("dsav"));
  var tione = new Date();
  tione = tione.getTime();
  if (condol) {
    if (condol.pair) {
      $("#pair").attr("val", condol.pair);
      $("#pair").html($("#" + condol.pair.replace(/[/]/g, "_")).html());
    }
    if (condol.period) {
      $("#period").val(condol.period);
    }
    if (condol.size) {
      $("#size>option:eq(2)").removeAttr("selected");
      $("#" + condol.size).attr("selected", "selected");
    }
  } else {
    var kiyarah = {
      aff: "null",
      pair: $("#pair").val(),
      period: $("#period").val(),
      size: $("#size").val(),
      date: tione,
    };
    localStorage.setItem("dsav", JSON.stringify(kiyarah));
    condol = kiyarah;
  }
  // if (window.location.hostname.length !== jioni.length) {
  //   return;
  // }
  // ;
  hasting.soc($("#pair").attr("val"), $("#size").val());
};
window.onload = Sign();
