//Sun Oct 13 2024 11:46:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("掌上武义");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a9) {
      {
        return typeof a9;
      }
    } : function (a9) {
      {
        return a9 && "function" == typeof Symbol && a9.constructor === Symbol && a9 !== Symbol.prototype ? "symbol" : typeof a9;
      }
    };
    return b(a6);
  }
  function c(a6, a7) {
    var a8 = {
      DpGSg: function (af, ag) {
        return af === ag;
      },
      OYrau: "throw",
      Cjomf: "Utils_Code",
      oZCEo: function (af, ag) {
        return af(ag);
      },
      zOvaT: function (af) {
        return af();
      },
      vcRJI: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      jNieh: "xcnPF",
      hjsuK: function (af, ag) {
        return af >= ag;
      },
      CVGCc: "normal",
      HNJCe: function (af, ag) {
        return af === ag;
      },
      ZEMqz: "ciKRq",
      RzCCU: function (af, ag) {
        return af < ag;
      },
      oAMDQ: function (af, ag) {
        return af == ag;
      },
      eZYqb: "function",
      CGBPL: function (af, ag) {
        return af + ag;
      },
      WkvGu: function (af, ag) {
        return af === ag;
      }
    };
    {
      var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
      if (!a9) {
        {
          if (Array.isArray(a6) || (a9 = g(a6)) || a7 && a6 && "number" == typeof a6.length) {
            {
              a9 && (a6 = a9);
              var aa = 0;
              var ab = function () {};
              return {
                s: ab,
                n: function () {
                  {
                    var ah = {
                      done: true
                    };
                    return aa >= a6.length ? ah : {
                      done: false,
                      value: a6[aa++]
                    };
                  }
                },
                e: function (ag) {
                  {
                    throw ag;
                  }
                },
                f: ab
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ac;
      var ad = true;
      var ae = false;
      return {
        s: function () {
          {
            a9 = a9.call(a6);
          }
        },
        n: function () {
          var ah = a9.next();
          ad = ah.done;
          return ah;
        },
        e: function (ah) {
          {
            ae = true;
            ac = ah;
          }
        },
        f: function () {
          {
            try {
              ad || null == a9.return || a9.return();
            } finally {
              {
                if (ae) {
                  throw ac;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a6, a7) {
    {
      return j(a6) || i(a6, a7) || g(a6, a7) || f();
    }
  }
  function f() {
    {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  }
  function g(a6, a7) {
    {
      if (a6) {
        {
          if ("string" == typeof a6) {
            return h(a6, a7);
          }
          var aa = {}.toString.call(a6).slice(8, -1);
          "Object" === aa && a6.constructor && (aa = a6.constructor.name);
          return "Map" === aa || "Set" === aa ? Array.from(a6) : "Arguments" === aa || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aa) ? h(a6, a7) : undefined;
        }
      }
    }
  }
  function h(a6, a7) {
    {
      (null == a7 || a7 > a6.length) && (a7 = a6.length);
      for (var a9 = 0, aa = Array(a7); a9 < a7; a9++) {
        aa[a9] = a6[a9];
      }
      return aa;
    }
  }
  function i(a6, a7) {
    var a8 = {
      PFfMS: function (ah) {
        return ah();
      },
      BlcZm: "end",
      vQkTX: function (ah) {
        return ah();
      }
    };
    {
      var a9 = null == a6 ? null : "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
      if (null != a9) {
        {
          var aa;
          var ab;
          var ac;
          var ad;
          var ae = [];
          var af = true;
          var ag = false;
          try {
            {
              if (ac = (a9 = a9.call(a6)).next, 0 === a7) {
                {
                  if (Object(a9) !== a9) {
                    return;
                  }
                  af = false;
                }
              } else {
                for (; !(af = (aa = ac.call(a9)).done) && (ae.push(aa.value), ae.length !== a7); af = true) {}
              }
            }
          } catch (ak) {
            ag = true;
            ab = ak;
          } finally {
            {
              try {
                {
                  if (!af && null != a9.return && (ad = a9.return(), Object(ad) !== ad)) {
                    return;
                  }
                }
              } finally {
                {
                  if (ag) {
                    throw ab;
                  }
                }
              }
            }
          }
          return ae;
        }
      }
    }
  }
  function j(a6) {
    {
      if (Array.isArray(a6)) {
        return a6;
      }
    }
  }
  function k() {
    "use strict";

    var a6 = {
      reljD: "[object Generator]",
      cZOEQ: function (aD, aE) {
        return aD === aE;
      },
      fEnLZ: function (aD, aE) {
        return aD !== aE;
      },
      OzUnE: function (aD, aE) {
        return aD(aE);
      },
      iOFHQ: function (aD, aE, aF) {
        return aD(aE, aF);
      },
      zmhpZ: "(((.+)+)+)+$",
      tpYUB: "PVZbR",
      LpDsq: function (aD, aE, aF, aG) {
        return aD(aE, aF, aG);
      },
      xNqQN: function (aD) {
        return aD();
      },
      xZXDf: "RCVaj",
      TyjOo: function (aD, aE, aF, aG, aH) {
        return aD(aE, aF, aG, aH);
      },
      YSTTZ: function (aD, aE) {
        return aD < aE;
      },
      kmquF: function (aD, aE, aF, aG, aH) {
        return aD(aE, aF, aG, aH);
      },
      KQinM: "next",
      dKjhj: function (aD, aE) {
        return aD / aE;
      },
      uvFcq: function (aD, aE) {
        return aD + aE;
      },
      xKycH: "end",
      ZUIzH: function (aD, aE) {
        return aD >= aE;
      },
      gXVml: function (aD, aE) {
        return aD != aE;
      },
      Ypypc: function (aD, aE) {
        return aD !== aE;
      },
      nOuCb: "hSytN",
      ZJYSS: "AMPNk",
      NYsAz: function (aD, aE) {
        return aD(aE);
      },
      YoXpr: "Generator is already running",
      IKjfV: function (aD, aE) {
        return aD === aE;
      },
      Aydzm: function (aD, aE) {
        return aD !== aE;
      },
      NweDT: "throw",
      xekRj: function (aD, aE) {
        return aD !== aE;
      },
      PtBWP: "xfanl",
      uutYa: function (aD, aE) {
        return aD === aE;
      },
      BAmXR: function (aD, aE) {
        return aD === aE;
      },
      CwIpL: "dBBhL",
      nmGWu: function (aD, aE) {
        return aD === aE;
      },
      VjikJ: function (aD, aE) {
        return aD === aE;
      },
      GzYVA: "return",
      WLUEq: "normal",
      jfvWe: function (aD, aE) {
        return aD !== aE;
      },
      SbWJW: "DwHtb",
      FKTvI: function (aD, aE) {
        return aD === aE;
      },
      oAGLk: "eNOsw",
      QYMnP: function (aD, aE) {
        return aD(aE);
      },
      dpdqG: function (aD, aE) {
        return aD === aE;
      },
      mGPBo: "sRtqT",
      ECQue: function (aD, aE) {
        return aD in aE;
      },
      rfudX: "root",
      AWAhg: "yffhG",
      vhCXb: function (aD, aE) {
        return aD === aE;
      },
      qbhib: function (aD, aE) {
        return aD == aE;
      },
      zMROe: "string",
      tBzSK: function (aD, aE, aF) {
        return aD(aE, aF);
      },
      usICK: "Object",
      OhwHZ: "Map",
      oRIFO: "Set",
      drFko: "SrEJm",
      tfAUd: "function",
      idDJn: function (aD, aE) {
        return aD === aE;
      },
      oZDNP: "GeneratorFunction",
      aNtFV: function (aD, aE) {
        return aD == aE;
      },
      YcUEo: function (aD, aE) {
        return aD == aE;
      },
      cILHq: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      iqMqO: "3.1.0",
      ONdUi: "M1903F2A",
      ihQpi: "M2001J2E",
      bJFcI: "M2001J1E",
      LDFWI: "M2001J1C",
      qNVDJ: "M2002J9E",
      aAbpT: "M2011K2C",
      tTVdP: "M2102K1C",
      htHgO: "2107119DC",
      hLBUe: "2201123C",
      lZLBr: "2112123AC",
      tymuP: "2201122C",
      JjDLo: "2211133C",
      VJdJS: "2210132C",
      XtaUL: "2304FPN6DC",
      IcmcR: "23127PN0CC",
      RPpnU: "24031PN0DC",
      lDckD: "2312DRA50C",
      uNJiy: "2312CRAD3C",
      rAxtb: "2312DRAABC",
      IzbtA: "22101316C",
      wwxQp: function (aD, aE) {
        return aD + aE;
      },
      antCg: "Android",
      lkSsX: ";1.0;null;",
      YZtQh: "6.6.1",
      qtZZP: "try statement without catch or finally",
      ZyumK: function (aD, aE) {
        return aD(aE);
      },
      SIHmk: function (aD, aE) {
        return aD !== aE;
      },
      LIafD: "KRhgd",
      voTPX: function (aD, aE) {
        return aD !== aE;
      },
      KfjXl: "GePgD",
      zEGsF: function (aD, aE) {
        return aD === aE;
      },
      uVUxy: "eRnEb",
      pHiub: function (aD, aE) {
        return aD === aE;
      },
      JhGBx: "vVwDt",
      HOLpX: " API请求失败，请检查网路重试",
      VEzlU: function (aD) {
        return aD();
      },
      hTWUn: function (aD, aE) {
        return aD(aE);
      },
      AFSbY: function (aD, aE) {
        return aD(aE);
      },
      RFLny: function (aD, aE) {
        return aD in aE;
      },
      YGTzF: function (aD, aE) {
        return aD === aE;
      },
      TEXCO: "WmSgI",
      Fwnqj: function (aD, aE) {
        return aD !== aE;
      },
      SQhaN: "yPFMZ",
      NAGGp: function (aD, aE) {
        return aD - aE;
      },
      TEjqg: "Tlrtl",
      vEFvn: function (aD, aE) {
        return aD === aE;
      },
      BecMp: function (aD, aE) {
        return aD(aE);
      },
      jAxXl: function (aD, aE) {
        return aD <= aE;
      },
      GVbeG: function (aD, aE) {
        return aD === aE;
      },
      HEWvN: "PEFSL",
      yzQjF: "mTfSI",
      kBbnw: "catchLoc",
      uGMFw: function (aD, aE) {
        return aD && aE;
      },
      JEYRt: "DnSUY",
      OVAfz: "zFrcH",
      YkFkX: "PMAJr",
      RXUsB: function (aD, aE) {
        return aD < aE;
      },
      fzpJG: function (aD, aE) {
        return aD(aE);
      },
      oaOkk: "UBDvL",
      PsTvn: "cyFhE",
      OAYxc: function (aD, aE) {
        return aD === aE;
      },
      CCNDB: "QXtBK",
      DVCEw: "IayAU",
      lSVKV: "finallyLoc",
      RmEHF: function (aD, aE) {
        return aD < aE;
      },
      JJMSS: "MTIKf",
      pROAh: "break",
      EHkWg: "rnsei",
      TyxfU: "OKtcC",
      CeokO: "continue",
      JqODa: function (aD, aE) {
        return aD === aE;
      },
      Mrfqb: function (aD, aE) {
        return aD === aE;
      },
      MGfZW: function (aD, aE) {
        return aD != aE;
      },
      CJJBE: function (aD, aE) {
        return aD(aE);
      },
      rOTAc: "OrHky",
      sVhMt: "GikjD",
      psBIo: "CppaF",
      JBACk: function (aD, aE) {
        return aD(aE);
      },
      ZxELC: "LVuDK",
      jKyyb: function (aD, aE) {
        return aD - aE;
      },
      MwXin: function (aD, aE) {
        return aD === aE;
      },
      bttfW: "JHEKi",
      dzlrH: "aOyeu",
      mrAAb: function (aD, aE) {
        return aD === aE;
      },
      lsnun: "FvYiE",
      fYYsT: function (aD, aE) {
        return aD(aE);
      },
      UhMct: function (aD, aE) {
        return aD(aE);
      },
      TVtfW: "illegal catch attempt"
    };
    k = function () {
      return a8;
    };
    var a7;
    var a8 = {};
    var a9 = Object.prototype;
    var aa = a9.hasOwnProperty;
    var ab = Object.defineProperty || function (aD, aE, aF) {
      {
        aD[aE] = aF.value;
      }
    };
    var ac = "function" == typeof Symbol ? Symbol : {};
    var ad = ac.iterator || "@@iterator";
    var ae = ac.asyncIterator || "@@asyncIterator";
    var af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      {
        var aG = {
          value: aF,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aD, aE, aG);
        return aD[aE];
      }
    }
    try {
      {
        ag({}, "");
      }
    } catch (aE) {
      {
        ag = function (aG, aH, aI) {
          {
            return aG[aH] = aI;
          }
        };
      }
    }
    function ah(aG, aH, aI, aJ) {
      {
        var aL = aH && aH.prototype instanceof ao ? aH : ao;
        var aM = Object.create(aL.prototype);
        var aN = new aB(aJ || []);
        ab(aM, "_invoke", {
          value: ax(aG, aI, aN)
        });
        return aM;
      }
    }
    function ai(aG, aH, aI) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aG.call(aH, aI)
            };
          }
        } catch (aM) {
          {
            var aK = {
              type: "throw",
              arg: aM
            };
            return aK;
          }
        }
      }
    }
    a8.wrap = ah;
    var aj = "suspendedStart";
    var ak = "suspendedYield";
    var al = "executing";
    var am = "completed";
    var an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf;
    var at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      ["next", "throw", "return"].forEach(function (aJ) {
        ag(aG, aJ, function (aM) {
          {
            return this._invoke(aJ, aM);
          }
        });
      });
    }
    function aw(aG, aH) {
      {
        function aK(aL, aM, aN, aO) {
          {
            var aQ = ai(aG[aL], aG, aM);
            if ("throw" !== aQ.type) {
              {
                var aR = aQ.arg;
                var aS = aR.value;
                return aS && "object" == b(aS) && aa.call(aS, "__await") ? aH.resolve(aS.__await).then(function (aV) {
                  {
                    aK("next", aV, aN, aO);
                  }
                }, function (aV) {
                  {
                    aK("throw", aV, aN, aO);
                  }
                }) : aH.resolve(aS).then(function (aV) {
                  {
                    aR.value = aV;
                    aN(aR);
                  }
                }, function (aV) {
                  return aK("throw", aV, aN, aO);
                });
              }
            }
            aO(aQ.arg);
          }
        }
        var aJ;
        ab(this, "_invoke", {
          value: function (aL, aM) {
            {
              function aO() {
                return new aH(function (aS, aT) {
                  aK(aL, aM, aS, aT);
                });
              }
              return aJ = aJ ? aJ.then(aO, aO) : aO();
            }
          }
        });
      }
    }
    function ax(aG, aH, aI) {
      {
        var aK = aj;
        return function (aM, aN) {
          {
            if (aK === al) {
              throw Error("Generator is already running");
            }
            if (aK === am) {
              {
                if ("throw" === aM) {
                  throw aN;
                }
                var aP = {
                  value: a7,
                  done: true
                };
                return aP;
              }
            }
            for (aI.method = aM, aI.arg = aN;;) {
              {
                var aQ = aI.delegate;
                if (aQ) {
                  {
                    var aR = ay(aQ, aI);
                    if (aR) {
                      {
                        if (aR === an) {
                          continue;
                        }
                        return aR;
                      }
                    }
                  }
                }
                if ("next" === aI.method) {
                  aI.sent = aI._sent = aI.arg;
                } else {
                  if ("throw" === aI.method) {
                    {
                      if (aK === aj) {
                        throw aK = am, aI.arg;
                      }
                      aI.dispatchException(aI.arg);
                    }
                  } else {
                    "return" === aI.method && aI.abrupt("return", aI.arg);
                  }
                }
                aK = al;
                var aS = ai(aG, aH, aI);
                if ("normal" === aS.type) {
                  {
                    if (aK = aI.done ? am : ak, aS.arg === an) {
                      continue;
                    }
                    var aT = {
                      value: aS.arg,
                      done: aI.done
                    };
                    return aT;
                  }
                }
                "throw" === aS.type && (aK = am, aI.method = "throw", aI.arg = aS.arg);
              }
            }
          }
        };
      }
    }
    function ay(aG, aH) {
      {
        var aN = aH.method;
        var aO = aG.iterator[aN];
        if (aO === a7) {
          aH.delegate = null;
          "throw" === aN && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aN && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
          return an;
        }
        var aM = ai(aO, aG.iterator, aH.arg);
        if ("throw" === aM.type) {
          aH.method = "throw";
          aH.arg = aM.arg;
          aH.delegate = null;
          return an;
        }
        var aL = aM.arg;
        return aL ? aL.done ? (aH[aG.resultName] = aL.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aL : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
      }
    }
    function az(aG) {
      {
        var aI = {
          tryLoc: aG[0]
        };
        1 in aG && (aI.catchLoc = aG[1]);
        2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
        this.tryEntries.push(aI);
      }
    }
    function aA(aG) {
      {
        var aH = aG.completion || {};
        aH.type = "normal";
        delete aH.arg;
        aG.completion = aH;
      }
    }
    function aB(aG) {
      {
        var aH = {
          tryLoc: "root"
        };
        this.tryEntries = [aH];
        aG.forEach(az, this);
        this.reset(true);
      }
    }
    function aC(aG) {
      {
        if (aG || "" === aG) {
          {
            var aH = aG[ad];
            if (aH) {
              return aH.call(aG);
            }
            if ("function" == typeof aG.next) {
              return aG;
            }
            if (!isNaN(aG.length)) {
              {
                var aI = -1;
                var aJ = function aL() {
                  {
                    for (; ++aI < aG.length;) {
                      if (aa.call(aG, aI)) {
                        aL.value = aG[aI];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a7;
                    aL.done = true;
                    return aL;
                  }
                };
                return aJ.next = aJ;
              }
            }
          }
        }
        throw new TypeError(b(aG) + " is not iterable");
      }
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: true
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: true
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      {
        var aH = "function" == typeof aG && aG.constructor;
        return !!aH && (aH === ap || "GeneratorFunction" === (aH.displayName || aH.name));
      }
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      {
        var aI = {
          __await: aG
        };
        return aI;
      }
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      {
        return this;
      }
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      {
        undefined === aK && (aK = Promise);
        var aL = new aw(ah(aG, aH, aI, aJ), aK);
        return a8.isGeneratorFunction(aH) ? aL : aL.next().then(function (aN) {
          {
            return aN.done ? aN.value : aL.next();
          }
        });
      }
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      {
        return this;
      }
    });
    ag(au, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a8.keys = function (aG) {
      {
        var aI = Object(aG);
        var aJ = [];
        for (var aK in aI) aJ.push(aK);
        aJ.reverse();
        return function aL() {
          {
            for (; aJ.length;) {
              {
                var aO = aJ.pop();
                if (aO in aI) {
                  aL.value = aO;
                  aL.done = false;
                  return aL;
                }
              }
            }
            aL.done = true;
            return aL;
          }
        };
      }
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = false, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
            for (var aH in this) "t" === aH.charAt(0) && aa.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a7);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aG = this.tryEntries[0].completion;
          if ("throw" === aG.type) {
            throw aG.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aG) {
        {
          if (this.done) {
            throw aG;
          }
          var aI = this;
          function aP(aQ, aR) {
            aL.type = "throw";
            aL.arg = aG;
            aI.next = aQ;
            aR && (aI.method = "next", aI.arg = a7);
            return !!aR;
          }
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              var aL = aK.completion;
              if ("root" === aK.tryLoc) {
                return aP("end");
              }
              if (aK.tryLoc <= this.prev) {
                {
                  var aM = aa.call(aK, "catchLoc");
                  var aN = aa.call(aK, "finallyLoc");
                  if (aM && aN) {
                    {
                      if (this.prev < aK.catchLoc) {
                        return aP(aK.catchLoc, true);
                      }
                      if (this.prev < aK.finallyLoc) {
                        return aP(aK.finallyLoc);
                      }
                    }
                  } else {
                    if (aM) {
                      {
                        if (this.prev < aK.catchLoc) {
                          return aP(aK.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aN) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aK.finallyLoc) {
                          return aP(aK.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        {
          for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
            {
              var aL = this.tryEntries[aK];
              if (aL.tryLoc <= this.prev && aa.call(aL, "finallyLoc") && this.prev < aL.finallyLoc) {
                {
                  var aM = aL;
                  break;
                }
              }
            }
          }
          aM && ("break" === aG || "continue" === aG) && aM.tryLoc <= aH && aH <= aM.finallyLoc && (aM = null);
          var aN = aM ? aM.completion : {};
          aN.type = aG;
          aN.arg = aH;
          return aM ? (this.method = "next", this.next = aM.finallyLoc, an) : this.complete(aN);
        }
      },
      complete: function (aG, aH) {
        {
          if ("throw" === aG.type) {
            throw aG.arg;
          }
          "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
          return an;
        }
      },
      finish: function (aG) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.finallyLoc === aG) {
                this.complete(aJ.completion, aJ.afterLoc);
                aA(aJ);
                return an;
              }
            }
          }
        }
      },
      catch: function (aG) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.tryLoc === aG) {
                {
                  var aK = aJ.completion;
                  if ("throw" === aK.type) {
                    {
                      var aL = aK.arg;
                      aA(aJ);
                    }
                  }
                  return aL;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aG, aH, aI) {
        {
          this.delegate = {
            iterator: aC(aG),
            resultName: aH,
            nextLoc: aI
          };
          "next" === this.method && (this.arg = a7);
          return an;
        }
      }
    };
    return a8;
  }
  function l(a6, a7, a8, a9, aa, ab, ac) {
    {
      try {
        {
          var ae = a6[ab](ac);
          var af = ae.value;
        }
      } catch (ah) {
        return void a8(ah);
      }
      ae.done ? a7(af) : Promise.resolve(af).then(a9, aa);
    }
  }
  function m(a6) {
    return function () {
      var a8 = this;
      var a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a6.apply(a8, a9);
        function ae(ag) {
          {
            l(ad, aa, ab, ae, af, "next", ag);
          }
        }
        function af(ag) {
          l(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(undefined);
      });
    };
  }
  var n = ($.isNode() ? process.env.ZSWY : $.getdata("ZSWY")) || "";
  var o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var p = undefined;
  var q = "";
  var r = "";
  var s = "";
  var t = "73";
  var u = "";
  var v = "10024";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "vKmnytOp9GrPa7kLbWTx";
  var D = "35c782a2";
  var E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    var a6 = {
      FUIIX: function (a7, a8) {
        return a7(a8);
      },
      zoVIs: function (a7, a8) {
        return a7 in a8;
      },
      pfqCQ: "normal",
      YptoY: function (a7, a8) {
        return a7 | a8;
      },
      hwpFa: function (a7, a8) {
        return a7 * a8;
      },
      dxSSL: function (a7, a8) {
        return a7 === a8;
      },
      JdFCP: function (a7, a8, a9, aa) {
        return a7(a8, a9, aa);
      },
      DcZik: "_invoke",
      VAOVl: function (a7, a8) {
        return a7 === a8;
      },
      MffWi: "throw",
      BksRr: function (a7, a8) {
        return a7 !== a8;
      },
      iXXar: "vWLod",
      pSXPm: "xDCBc",
      YGcuY: function (a7, a8) {
        return a7 === a8;
      },
      abvmp: "YrAHu",
      BApgV: "CsbEC",
      esPip: function (a7, a8) {
        return a7 / a8;
      },
      kqItT: "end",
      aiFis: "oUnyk",
      ItDyc: function (a7, a8) {
        return a7 & a8;
      },
      UygyQ: "Object",
      leOkC: "Arguments",
      Wfqsi: function (a7, a8, a9) {
        return a7(a8, a9);
      },
      lcKtu: "需要识别的字：",
      ZKEFL: "uXBGW",
      DbPFg: function (a7, a8) {
        return a7 + a8;
      },
      jgGbC: "tCSCC",
      qAyzI: function (a7) {
        return a7();
      },
      EvZtf: function (a7, a8) {
        return a7 >= a8;
      },
      mJdEL: function (a7, a8) {
        return a7 / a8;
      },
      vEWYp: " API请求失败，请检查网路重试",
      CSbgn: "✅ Utils加载成功, 请继续",
      vPmaJ: function (a7, a8) {
        return a7 < a8;
      },
      sTNAJ: "先去boxjs填写账号密码",
      jFGEC: "return",
      EWSXN: "prLIr",
      OHEdo: "获取signature_key",
      pNKib: "获取code",
      kuzLC: function (a7, a8) {
        return a7(a8);
      },
      XMaiX: "/web/oauth/credential_auth",
      qRRgy: "sFamd",
      zkiAm: "continue",
      uqWFR: "————————————",
      Lcbim: "获取id",
      QcdCO: "获取key和token",
      CHALt: function (a7, a8, a9) {
        return a7(a8, a9);
      },
      XLtOH: "/api/member/login",
      tvZup: "获取抽奖id",
      xwLPp: "/api/study/detail?id=",
      DeGcJ: "开始阅读",
      FCEKn: function (a7, a8, a9) {
        return a7(a8, a9);
      },
      oZhjl: "qHWCb",
      SLMVH: function (a7, a8) {
        return a7 === a8;
      },
      ZIFxd: "RMYLP",
      mmquV: "/api/captcha/get",
      rSGkV: function (a7, a8) {
        return a7 == a8;
      },
      NrsdM: "KAotf",
      egDuu: "pOvhq",
      RmCQS: "xnTyv",
      qUtyD: "slRai",
      Bbbxg: "/select",
      rxDTd: "ddddocr服务异常",
      hYZVD: function (a7, a8) {
        return a7 === a8;
      },
      OacqK: function (a7, a8) {
        return a7 === a8;
      },
      nUTLR: "WQYBA",
      gFcGu: "/capcode",
      IhuNC: function (a7, a8, a9) {
        return a7(a8, a9);
      },
      bicoX: "验证滑块：",
      zSbft: "操作成功",
      CCERO: "kgyMf",
      lqaBx: "akZuc",
      cndYz: "/api/study/level?id=",
      lFWSp: "已完成",
      vuxzq: "YWGiH",
      BhyWo: "/api/article/detail?id=",
      itkDQ: "/api/favorite/like",
      FgaLa: "/api/article/read_time?channel_article_id=",
      cGkIS: "ifBqx",
      ZMUoJ: "vTcRS",
      Lfvwl: "bigWheel",
      DroXm: "秘钥：",
      fMkRY: function (a7, a8) {
        return a7 === a8;
      },
      WdIcR: "EuZAo",
      XVPiG: "RfxOG",
      LbxnA: "GQSKk",
      Jmuqt: "HglVW",
      yxUvn: "dFGPr",
      aUinv: function (a7, a8) {
        return a7 === a8;
      },
      IlJuY: function (a7, a8) {
        return a7 === a8;
      },
      AgSfk: "滑块：",
      VyfeG: function (a7, a8, a9) {
        return a7(a8, a9);
      },
      ZGvzz: "YMFnx",
      Hsodx: "bGdxl",
      TQewi: " 抽奖获得：",
      jJFqH: "ItMGk",
      VVczS: "任务：",
      kxSZk: function (a7, a8) {
        return a7 === a8;
      },
      riGkL: "UXFyy",
      PqLzv: function (a7, a8) {
        return a7 != a8;
      },
      rhbUJ: "使用本地服务",
      kGbEk: "BFMYK",
      paGTb: "memberType=6&member_type=6",
      iaQgf: "任务完成获得：",
      cqsBm: "新闻资讯点赞",
      IxpLZ: function (a7, a8) {
        return a7 && a8;
      },
      ZZbfr: "/api/article/channel_list?channel_id=6423f0a579f6be58d033d816&isDiFangHao=false&is_new=true&list_count=0&size=20",
      UhBFu: "&is_end=true&read_time=3051",
      NdYVT: "阅读获得：",
      HtVqz: function (a7, a8) {
        return a7 === a8;
      },
      RhKyf: "文章已经阅读过了",
      hjgLU: "点赞获得：",
      mwZXs: function (a7, a8) {
        return a7 === a8;
      },
      WAuAB: "memberType=3&member_type=3&target_id==",
      UhaJU: "文章已经分享过了",
      XLyAp: function (a7, a8) {
        return a7(a8);
      },
      kMKak: "/api/user_mumber/account_detail"
    };
    G = m(k().mark(function a7() {
      var a8 = {
        pAPku: function (bW, bX) {
          return bW(bX);
        },
        zHkVn: function (bW, bX) {
          return bW(bX);
        },
        xIiOH: function (bW, bX) {
          return bW in bX;
        },
        VJCqu: "normal",
        KhyAx: function (bW, bX) {
          return bW | bX;
        },
        PkOmF: function (bW, bX) {
          return bW * bX;
        },
        VMXeg: function (bW, bX) {
          return bW === bX;
        },
        OBjxP: function (bW, bX) {
          return bW & bX;
        },
        BvyYQ: function (bW, bX, bY, bZ) {
          return bW(bX, bY, bZ);
        },
        iIEcw: "_invoke",
        Tbvgl: function (bW, bX) {
          return bW === bX;
        },
        kbAki: function (bW, bX, bY, bZ, c0) {
          return bW(bX, bY, bZ, c0);
        },
        XhtkD: "throw",
        cfRiG: function (bW, bX) {
          return bW === bX;
        },
        EvCQH: "&phone_number=",
        HYviW: function (bW, bX) {
          return bW !== bX;
        },
        Pbgbo: "vWLod",
        xWnNe: "xDCBc",
        OJQFb: function (bW, bX) {
          return bW === bX;
        },
        XxuFT: "YrAHu",
        xhefr: "CsbEC",
        sGTNm: function (bW, bX) {
          return bW / bX;
        },
        wVaDf: "end",
        DniWO: function (bW, bX) {
          return bW !== bX;
        },
        QcoLM: "oUnyk",
        wchcY: function (bW, bX) {
          return bW & bX;
        },
        dUygJ: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        kArQt: function (bW, bX) {
          return bW === bX;
        },
        Vglsf: "Object",
        YfxTg: "Arguments",
        SXShe: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        tyXoq: "需要识别的字：",
        xDgff: "KRayl",
        kjjmu: "uXBGW",
        PVFYX: function (bW, bX) {
          return bW + bX;
        },
        BFftK: "未找到：",
        HamFw: "tCSCC",
        KHSza: function (bW) {
          return bW();
        },
        IyAVV: function (bW, bX) {
          return bW >= bX;
        },
        YLVND: function (bW, bX) {
          return bW / bX;
        },
        ZGnsK: " API请求失败，请检查网路重试",
        nZkAO: "Utils_Code",
        QQadj: "✅ Utils加载成功, 请继续",
        JUzTX: function (bW, bX) {
          return bW < bX;
        },
        mkVic: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
        aNeJe: "uANnt",
        LeIhv: "先去boxjs填写账号密码",
        wqGPZ: "return",
        vtTBt: "prLIr",
        PfnUF: "用户：",
        pYPuy: "开始任务",
        TfhNL: function (bW, bX) {
          return bW(bX);
        },
        mktZj: "获取signature_key",
        ZBGID: "/web/init?client_id=",
        clSdo: "获取code",
        ooqHL: function (bW, bX) {
          return bW(bX);
        },
        xsNUn: "/web/oauth/credential_auth",
        vDdQy: function (bW, bX) {
          return bW === bX;
        },
        dYLHI: "sFamd",
        cLpTD: "WEHRl",
        MGIWk: "continue",
        iRLSj: "/api/zbtxz/login",
        vdGxI: "&token=&type=-1&union_id=",
        LbTtc: "————————————",
        NfOMD: "获取id",
        PmybG: "获取key和token",
        KzFNi: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        HttSW: "/api/member/login",
        WTrwo: "Bearer ",
        ExZRh: "获取抽奖id",
        Arcqp: "/api/study/detail?id=",
        GvDCq: "开始阅读",
        HrJDP: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        MVVPx: function (bW, bX) {
          return bW != bX;
        },
        CeyFU: "qHWCb",
        UfBZv: function (bW, bX) {
          return bW === bX;
        },
        fbxud: "RMYLP",
        baYyL: "pbUyG",
        CyYBO: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        uvzHL: "/api/captcha/get",
        cUEGl: function (bW, bX) {
          return bW === bX;
        },
        DNfFn: function (bW, bX) {
          return bW === bX;
        },
        WBRuY: function (bW, bX) {
          return bW == bX;
        },
        OAqdf: function (bW, bX) {
          return bW === bX;
        },
        OVLhK: "KAotf",
        EdVND: "pOvhq",
        CrHPR: "xnTyv",
        SzoFb: "rrOcj",
        ZMNRn: "slRai",
        gaIdx: "/select",
        pjmly: function (bW, bX) {
          return bW !== bX;
        },
        Fvbmd: "qhyaq",
        hcaXi: "ddddocr服务异常",
        OljQm: "sDltR",
        SnhIa: function (bW) {
          return bW();
        },
        LLxku: function (bW, bX) {
          return bW == bX;
        },
        gPIks: function (bW, bX) {
          return bW === bX;
        },
        wdNNH: function (bW, bX) {
          return bW === bX;
        },
        Tcbfq: function (bW, bX) {
          return bW !== bX;
        },
        zEICT: "WQYBA",
        agOsm: "/capcode",
        XxvQh: function (bW, bX) {
          return bW !== bX;
        },
        tRUiM: "VQgAR",
        Ndmeq: "不支持的图片验证类型",
        jqyGp: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        LMpbn: "/api/captcha/check",
        GZXsY: "study",
        wluqX: function (bW, bX) {
          return bW + bX;
        },
        ykkDD: "验证滑块：",
        cYUkE: "操作成功",
        uOOlT: "kgyMf",
        azTtb: "ApVbQ",
        sMMHc: "break",
        NRHvf: function (bW, bX) {
          return bW(bX);
        },
        OUlWM: "akZuc",
        OPWJq: "/api/study/level?id=",
        LjQUs: "IvWpF",
        fJpda: "已完成",
        Sffha: function (bW, bX) {
          return bW(bX);
        },
        wVXfs: "YWGiH",
        lRbcg: "yAYkG",
        QEcvP: "/api/article/detail?id=",
        Gtxnh: "/api/favorite/like",
        uGIUz: "action=true&id=",
        XfUYS: "/api/article/read_time?channel_article_id=",
        XspkQ: "&read_time=5938",
        UnlIm: "/api/study/task/complete",
        vqvEh: "次抽奖",
        MyaTa: function (bW, bX) {
          return bW !== bX;
        },
        vaNBn: "ifBqx",
        TTKlK: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        HIwAW: "/api/lotterybigwheel/_ac_lottery",
        IhcZd: "vTcRS",
        RCsZU: "XtaBi",
        AbLIL: "bigWheel",
        OMtUS: function (bW, bX) {
          return bW === bX;
        },
        EQBiU: function (bW, bX) {
          return bW === bX;
        },
        emKLJ: function (bW, bX) {
          return bW === bX;
        },
        jhJia: "秘钥：",
        VNcfb: function (bW, bX) {
          return bW === bX;
        },
        NgpjW: function (bW, bX) {
          return bW === bX;
        },
        rVMuR: "EuZAo",
        RRRnK: function (bW, bX) {
          return bW(bX);
        },
        VRbfC: "gPKAA",
        cvdxd: "RfxOG",
        knsPg: "CNGhh",
        CIhEY: "cIXbR",
        oVjWc: "GQSKk",
        fJWrv: "HglVW",
        FDpHJ: function (bW, bX) {
          return bW(bX);
        },
        ixCuG: function (bW, bX) {
          return bW !== bX;
        },
        wkQiq: "dFGPr",
        rpCWh: function (bW) {
          return bW();
        },
        QYDop: function (bW, bX) {
          return bW === bX;
        },
        FJPtS: function (bW, bX) {
          return bW === bX;
        },
        INrbh: "ZsdMw",
        moeCc: "滑块：",
        YNfBa: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        oqclk: "YMFnx",
        gXTjR: function (bW, bX) {
          return bW(bX);
        },
        dFAJI: function (bW, bX, bY) {
          return bW(bX, bY);
        },
        QMdWt: "bGdxl",
        BNMkn: " 抽奖获得：",
        YgOJN: "抽奖获得：",
        HgleN: function (bW, bX) {
          return bW !== bX;
        },
        WbDGR: "ItMGk",
        vzBei: "任务：",
        erSqn: function (bW, bX) {
          return bW === bX;
        },
        NplBY: "UXFyy",
        kzfMM: "任务进度：",
        jhBxu: function (bW, bX) {
          return bW != bX;
        },
        vVFvu: "使用本地服务",
        xAJQy: "UJdHq",
        OKcHd: function (bW, bX) {
          return bW === bX;
        },
        ypska: "BFMYK",
        oqPWt: "/api/user_mumber/doTask",
        ORRQd: "memberType=6&member_type=6",
        CBHXr: "任务完成获得：",
        alnta: "新闻资讯点赞",
        YCHPD: function (bW, bX) {
          return bW && bX;
        },
        LNiKw: function (bW, bX) {
          return bW(bX);
        },
        ynemj: "/api/article/channel_list?channel_id=6423f0a579f6be58d033d816&isDiFangHao=false&is_new=true&list_count=0&size=20",
        xDpjD: "&is_end=true&read_time=3051",
        qyWBo: "阅读获得：",
        lrFMh: function (bW, bX) {
          return bW === bX;
        },
        ijzUA: function (bW, bX) {
          return bW === bX;
        },
        auIjl: "文章已经阅读过了",
        NCcuX: "点赞获得：",
        UNBHB: function (bW, bX) {
          return bW === bX;
        },
        RFGEJ: function (bW, bX) {
          return bW === bX;
        },
        ZRWFl: function (bW, bX) {
          return bW === bX;
        },
        yugnz: "文章已经点赞过了",
        XZlRQ: "memberType=3&member_type=3&target_id==",
        ffhan: "分享获得：",
        SxJFi: function (bW, bX) {
          return bW === bX;
        },
        oPgWZ: "文章已经分享过了",
        sQPCc: function (bW, bX) {
          return bW(bX);
        },
        uAjDt: "/api/user_mumber/account_detail"
      };
      var a9;
      var aa;
      var ab;
      var ac;
      var ad;
      var af;
      var ag;
      var ah;
      var ai;
      var aj;
      var ak;
      var al;
      var am;
      var an;
      var ao;
      var ap;
      var aq;
      var ar;
      var as;
      var at;
      var au;
      var av;
      var aw;
      var ax;
      var ay;
      var az;
      var aA;
      var aB;
      var aC;
      var aD;
      var aE;
      var aF;
      var aG;
      var aH;
      var aI;
      var aJ;
      var aK;
      var aL;
      var aM;
      var aN;
      var aO;
      var aP;
      var aQ;
      var aR;
      var aS;
      var aT;
      var aU;
      var aV;
      var aW;
      var aX;
      var aY;
      var aZ;
      var b0;
      var b1;
      var b2;
      var b3;
      var b4;
      var b5;
      var b6;
      var b7;
      var b8;
      var b9;
      var ba;
      var bb;
      var bc;
      var bd;
      var bf;
      var bg;
      var bh;
      var bi;
      var bj;
      var bk;
      var bl;
      var bm;
      var bn;
      var bo;
      var bp;
      var bq;
      var br;
      var bs;
      var bt;
      var bu;
      var bv;
      var bw;
      var bx;
      var by;
      var bz;
      var bA;
      var bB;
      var bC;
      var bD;
      var bE;
      var bF;
      var bG;
      var bH;
      var bI;
      var bJ;
      var bK;
      var bL;
      var bM;
      var bN;
      var bO;
      var bP;
      var bQ;
      var bR;
      var bS;
      var bT;
      var bU;
      var bV;
      return k().wrap(function (bW) {
        for (;;) {
          switch (bW.prev = bW.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                {
                  bW.next = 6;
                  break;
                }
              }
              console.log("先去boxjs填写账号密码");
              bW.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return bW.abrupt("return");
            case 6:
              bW.next = 8;
              return a2();
            case 8:
              p = bW.sent;
              a9 = n.split(" ");
              aa = c(a9);
              bW.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                {
                  bW.next = 389;
                  break;
                }
              }
              ac = ab.value;
              console.log("随机生成UA");
              ad = a1();
              y = ad.ua;
              z = ad.commonUa;
              A = ad.uuid;
              console.log(y);
              console.log(z);
              w = ac.split("&")[0];
              x = ac.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              bW.next = 28;
              return N("/api/account/init");
            case 28:
              af = bW.sent;
              s = af.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bW.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ag = bW.sent;
              q = ag.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bW.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ah = bW.sent, ah.data) {
                {
                  bW.next = 44;
                  break;
                }
              }
              console.log(ah.message);
              return bW.abrupt("continue", 387);
            case 44:
              ai = ah.data.authorization_code.code;
              console.log(ai);
              console.log("登录");
              bW.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ai, "&token=&type=-1&union_id="));
            case 49:
              aj = bW.sent;
              console.log("登录成功");
              u = aj.data.session.account_id;
              s = aj.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              bW.next = 58;
              return L("/api/article/channel_list?channel_id=657a5b3d79f6be03b8fd7fb1&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 58:
              for (ak = bW.sent, al = ak.data.article_list[0].column_news_list[0].url, am = al.split("?")[1], an = {}, ao = am.split("&"), ap = 0, aq = ao.length; ap < aq; ap++) {
                ar = ao[ap].split("=");
                an[ar[0]] = ar[1];
              }
              var bY = {
                debug: 0,
                userId: ""
              };
              as = an.id;
              console.log(as);
              console.log("获取key和token");
              bW.next = 69;
              return P("/api/member/login", bY);
            case 69:
              at = bW.sent;
              D = at.data.key;
              B = "Bearer " + at.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              bW.next = 77;
              return R("/api/study/detail?id=".concat(as), {
                id: as
              });
            case 77:
              au = bW.sent;
              av = au.data.lottery.lottery_id;
              console.log(av);
              console.log("开始阅读");
              bW.next = 83;
              return R("/api/study/task/captcha?activityId=".concat(as), {
                activityId: as
              });
            case 83:
              if (aw = bW.sent, 10000 != aw.code) {
                {
                  bW.next = 156;
                  break;
                }
              }
              console.log(aw.message);
              ax = 0;
            case 87:
              if (!(ax < 3)) {
                {
                  bW.next = 156;
                  break;
                }
              }
              var bZ = {
                activity_id: 0,
                module: "study"
              };
              bW.next = 90;
              return P("/api/captcha/get", bZ);
            case 90:
              if (aC = bW.sent, aD = undefined, aE = null == aC || null === (ay = aC.data) || undefined === ay ? undefined : ay.secretKey, aF = null == aC || null === (az = aC.data) || undefined === az ? undefined : az.token, console.log("秘钥：".concat(aE)), null == aC || null === (aA = aC.data) || undefined === aA || !aA.originalImageBase64) {
                {
                  bW.next = 127;
                  break;
                }
              }
              aG = aC.data.wordList;
              aH = c(aG);
              try {
                {
                  for (aH.s(); !(aI = aH.n()).done;) {
                    aJ = aI.value;
                    console.log("需要识别的字：".concat(aJ));
                  }
                }
              } catch (ca) {
                {
                  aH.e(ca);
                }
              } finally {
                {
                  aH.f();
                }
              }
              var c0 = {
                image: aC.data.originalImageBase64
              };
              bW.next = 101;
              return T("".concat(o, "/select"), c0);
            case 101:
              if (aK = bW.sent, aK) {
                {
                  bW.next = 107;
                  break;
                }
              }
              console.log("ddddocr服务异常");
              bW.next = 106;
              return a4("ddddocr服务异常");
            case 106:
              return bW.abrupt("continue", 153);
            case 107:
              console.log(JSON.stringify(aK));
              aD = [];
              aL = c(aG);
              bW.prev = 110;
              aN = k().mark(function cf() {
                {
                  var ch;
                  var ci;
                  var cj;
                  return k().wrap(function (ck) {
                    {
                      for (;;) {
                        switch (ck.prev = ck.next) {
                          case 0:
                            ch = aM.value;
                            ci = aK.find(function (co) {
                              {
                                return Object.keys(co)[0] === ch;
                              }
                            });
                            ci ? (cj = ci[ch], aD.push({
                              x: Math.floor((cj[0] + cj[2]) / 2),
                              y: Math.floor((cj[1] + cj[3]) / 2)
                            })) : console.log("未找到：".concat(ch));
                          case 3:
                          case "end":
                            return ck.stop();
                        }
                      }
                    }
                  }, cf);
                }
              });
              aL.s();
            case 113:
              if ((aM = aL.n()).done) {
                {
                  bW.next = 117;
                  break;
                }
              }
              return bW.delegateYield(aN(), "t0", 115);
            case 115:
              bW.next = 113;
              break;
            case 117:
              bW.next = 122;
              break;
            case 119:
              bW.prev = 119;
              bW.t1 = bW.catch(110);
              aL.e(bW.t1);
            case 122:
              bW.prev = 122;
              aL.f();
              return bW.finish(122);
            case 125:
              bW.next = 146;
              break;
            case 127:
              if (null == aC || null === (aB = aC.data) || undefined === aB || !aB.jigsawImageUrl) {
                {
                  bW.next = 144;
                  break;
                }
              }
              aO = aC.data.jigsawImageUrl;
              aP = aC.data.originalImageUrl;
              console.log("滑块：".concat(aO));
              console.log("背景：".concat(aP));
              bW.next = 134;
              return T("".concat(o, "/capcode"), {
                slidingImage: aO,
                backImage: aP
              });
            case 134:
              if (aQ = bW.sent, aQ) {
                {
                  bW.next = 140;
                  break;
                }
              }
              console.log("ddddocr服务异常");
              bW.next = 139;
              return a4("ddddocr服务异常");
            case 139:
              return bW.abrupt("continue", 153);
            case 140:
              console.log(JSON.stringify(aQ));
              aD = {
                x: aQ.result,
                y: 5
              };
              bW.next = 146;
              break;
            case 144:
              console.log("不支持的图片验证类型");
              return bW.abrupt("break", 156);
            case 146:
              aR = V(JSON.stringify(aD), aE);
              bW.next = 149;
              return P("/api/captcha/check", {
                activity_id: 0,
                module: "study",
                cap_token: aF,
                point: aR
              });
            case 149:
              if (aS = bW.sent, console.log("验证滑块：" + aS.message), "操作成功" != aS.message) {
                {
                  bW.next = 153;
                  break;
                }
              }
              return bW.abrupt("break", 156);
            case 153:
              ax++;
              bW.next = 87;
              break;
            case 156:
              aT = c(au.data.levels);
              bW.prev = 157;
              aT.s();
            case 159:
              if ((aU = aT.n()).done) {
                {
                  bW.next = 206;
                  break;
                }
              }
              aV = aU.value;
              bW.next = 163;
              return R("/api/study/level?id=".concat(aV.id), {
                id: aV.id
              });
            case 163:
              if (aW = bW.sent, console.log(aW.data.level.name), aW.data.level.task_num != aW.data.completedTasks.length) {
                {
                  bW.next = 168;
                  break;
                }
              }
              console.log("已完成");
              return bW.abrupt("continue", 204);
            case 168:
              aX = c(aW.data.tasks);
              bW.prev = 169;
              aX.s();
            case 171:
              if ((aY = aX.n()).done) {
                {
                  bW.next = 196;
                  break;
                }
              }
              for (aZ = aY.value, b0 = aZ.link, b1 = b0.split("?")[1], b2 = {}, b3 = b1.split("&"), b4 = 0, b5 = b3.length; b4 < b5; b4++) {
                b6 = b3[b4].split("=");
                b2[b6[0]] = b6[1];
              }
              bW.next = 180;
              return L("/api/article/detail?id=".concat(b2.id));
            case 180:
              b7 = bW.sent;
              console.log("文章：".concat(b7.data.article.list_title));
              bW.next = 184;
              return N("/api/favorite/like", "action=true&id=".concat(b2.id));
            case 184:
              b8 = bW.sent;
              console.log("点赞：".concat(b8.message));
              bW.next = 188;
              return L("/api/article/read_time?channel_article_id=".concat(b2.id, "&read_time=5938"));
            case 188:
              var c1 = {
                id: aZ.id
              };
              b9 = bW.sent;
              console.log("阅读：".concat(b9.message));
              bW.next = 192;
              return P("/api/study/task/complete", c1);
            case 192:
              ba = bW.sent;
              console.log("完成任务：".concat(ba.message));
            case 194:
              bW.next = 171;
              break;
            case 196:
              bW.next = 201;
              break;
            case 198:
              bW.prev = 198;
              bW.t2 = bW.catch(169);
              aX.e(bW.t2);
            case 201:
              bW.prev = 201;
              aX.f();
              return bW.finish(201);
            case 204:
              bW.next = 159;
              break;
            case 206:
              bW.next = 211;
              break;
            case 208:
              bW.prev = 208;
              bW.t3 = bW.catch(157);
              aT.e(bW.t3);
            case 211:
              bW.prev = 211;
              aT.f();
              return bW.finish(211);
            case 214:
              bW.next = 216;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: av,
                module: "study"
              });
            case 216:
              bb = bW.sent;
              console.log("拥有".concat(bb.data.count, "次抽奖"));
              bc = 0;
            case 219:
              if (!(bc < bb.data.count)) {
                {
                  bW.next = 305;
                  break;
                }
              }
              bW.next = 222;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 222:
              if (bd = bW.sent, 10000 != bd.code) {
                {
                  bW.next = 301;
                  break;
                }
              }
              console.log(bd.message);
              bf = 0;
            case 226:
              if (!(bf < 3)) {
                {
                  bW.next = 299;
                  break;
                }
              }
              bW.next = 229;
              return P("/api/captcha/get", {
                activity_id: av,
                module: "bigWheel"
              });
            case 229:
              if (bk = bW.sent, bl = undefined, bm = null == bk || null === (bg = bk.data) || undefined === bg ? undefined : bg.secretKey, bn = null == bk || null === (bh = bk.data) || undefined === bh ? undefined : bh.token, console.log("秘钥：".concat(bm)), null == bk || null === (bi = bk.data) || undefined === bi || !bi.originalImageBase64) {
                {
                  bW.next = 266;
                  break;
                }
              }
              bo = bk.data.wordList;
              bp = c(bo);
              try {
                {
                  for (bp.s(); !(bq = bp.n()).done;) {
                    br = bq.value;
                    console.log("需要识别的字：".concat(br));
                  }
                }
              } catch (cs) {
                {
                  bp.e(cs);
                }
              } finally {
                {
                  bp.f();
                }
              }
              var c2 = {
                image: bk.data.originalImageBase64
              };
              bW.next = 240;
              return T("".concat(o, "/select"), c2);
            case 240:
              if (bs = bW.sent, bs) {
                {
                  bW.next = 246;
                  break;
                }
              }
              console.log("ddddocr服务异常");
              bW.next = 245;
              return a4("ddddocr服务异常");
            case 245:
              return bW.abrupt("continue", 296);
            case 246:
              console.log(JSON.stringify(bs));
              bl = [];
              bt = c(bo);
              bW.prev = 249;
              bv = k().mark(function cw() {
                {
                  var cy;
                  var cz;
                  var cA;
                  return k().wrap(function (cC) {
                    {
                      for (;;) {
                        switch (cC.prev = cC.next) {
                          case 0:
                            cy = bu.value;
                            cz = bs.find(function (cE) {
                              {
                                return Object.keys(cE)[0] === cy;
                              }
                            });
                            cz ? (cA = cz[cy], bl.push({
                              x: Math.floor((cA[0] + cA[2]) / 2),
                              y: Math.floor((cA[1] + cA[3]) / 2)
                            })) : console.log("未找到：".concat(cy));
                          case 3:
                          case "end":
                            return cC.stop();
                        }
                      }
                    }
                  }, cw);
                }
              });
              bt.s();
            case 252:
              if ((bu = bt.n()).done) {
                {
                  bW.next = 256;
                  break;
                }
              }
              return bW.delegateYield(bv(), "t4", 254);
            case 254:
              bW.next = 252;
              break;
            case 256:
              bW.next = 261;
              break;
            case 258:
              bW.prev = 258;
              bW.t5 = bW.catch(249);
              bt.e(bW.t5);
            case 261:
              bW.prev = 261;
              bt.f();
              return bW.finish(261);
            case 264:
              bW.next = 285;
              break;
            case 266:
              if (null == bk || null === (bj = bk.data) || undefined === bj || !bj.jigsawImageUrl) {
                {
                  bW.next = 283;
                  break;
                }
              }
              bw = bk.data.jigsawImageUrl;
              bx = bk.data.originalImageUrl;
              console.log("滑块：".concat(bw));
              console.log("背景：".concat(bx));
              bW.next = 273;
              return T("".concat(o, "/capcode"), {
                slidingImage: bw,
                backImage: bx
              });
            case 273:
              if (by = bW.sent, by) {
                {
                  bW.next = 279;
                  break;
                }
              }
              console.log("ddddocr服务异常");
              bW.next = 278;
              return a4("ddddocr服务异常");
            case 278:
              return bW.abrupt("continue", 296);
            case 279:
              console.log(JSON.stringify(by));
              bl = {
                x: by.result,
                y: 5
              };
              bW.next = 285;
              break;
            case 283:
              console.log("不支持的图片验证类型");
              return bW.abrupt("break", 299);
            case 285:
              bz = V(JSON.stringify(bl), bm);
              bW.next = 288;
              return P("/api/captcha/check", {
                activity_id: av,
                module: "bigWheel",
                cap_token: bn,
                point: bz
              });
            case 288:
              if (bA = bW.sent, console.log("验证滑块：" + bA.message), "操作成功" != bA.message) {
                {
                  bW.next = 296;
                  break;
                }
              }
              bW.next = 293;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 293:
              bd = bW.sent;
              bd.data.code ? (console.log("抽奖获得：".concat(bd.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.title, "\n")) : (console.log("抽奖获得：".concat(bd.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.tip_title, "\n"));
              return bW.abrupt("break", 299);
            case 296:
              bf++;
              bW.next = 226;
              break;
            case 299:
              bW.next = 302;
              break;
            case 301:
              bd.data.code ? (console.log("抽奖获得：".concat(bd.data.title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.title, "\n")) : (console.log("抽奖获得：".concat(bd.data.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(bd.data.tip_title, "\n"));
            case 302:
              bc++;
              bW.next = 219;
              break;
            case 305:
              console.log("————————————");
              console.log("开始任务");
              bB = true;
              bC = true;
              bD = true;
              bW.next = 312;
              return L("/api/user_center/task?type=1&current=1&size=20");
            case 312:
              bE = bW.sent;
              bF = c(bE.data.list);
              bW.prev = 314;
              bF.s();
            case 316:
              if ((bG = bF.n()).done) {
                {
                  bW.next = 338;
                  break;
                }
              }
              if (bH = bG.value, console.log("任务：".concat(bH.name)), 1 != bH.completed) {
                {
                  bW.next = 322;
                  break;
                }
              }
              console.log("任务已完成");
              return bW.abrupt("continue", 336);
            case 322:
              if (console.log("任务进度：".concat(bH.finish_times, "/").concat(bH.frequency)), "使用本地服务" != bH.name) {
                {
                  bW.next = 333;
                  break;
                }
              }
              bI = bH.finish_times;
            case 325:
              if (!(bI < bH.frequency)) {
                {
                  bW.next = 333;
                  break;
                }
              }
              bW.next = 328;
              return N("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 328:
              bJ = bW.sent;
              console.log("任务完成获得：".concat(bJ.data.score_notify.integral, "积分"));
            case 330:
              bI++;
              bW.next = 325;
              break;
            case 333:
              "新闻资讯阅读" == bH.name && (bB = false);
              "新闻资讯点赞" == bH.name && (bC = false);
              "分享资讯给好友" == bH.name && (bD = false);
            case 336:
              bW.next = 316;
              break;
            case 338:
              bW.next = 343;
              break;
            case 340:
              bW.prev = 340;
              bW.t6 = bW.catch(314);
              bF.e(bW.t6);
            case 343:
              bW.prev = 343;
              bF.f();
              return bW.finish(343);
            case 346:
              if (bB && bC && bD) {
                bW.next = 381;
                break;
              }
              bW.next = 349;
              return L("/api/article/channel_list?channel_id=6423f0a579f6be58d033d816&isDiFangHao=false&is_new=true&list_count=0&size=20");
            case 349:
              bK = bW.sent;
              bL = c(bK.data.article_list);
              bW.prev = 351;
              bL.s();
            case 353:
              if ((bM = bL.n()).done) {
                bW.next = 373;
                break;
              }
              if (bN = bM.value, bO = bN.id, bB) {
                bW.next = 361;
                break;
              }
              bW.next = 359;
              return L("/api/article/read_time?channel_article_id=".concat(bO, "&is_end=true&read_time=3051"));
            case 359:
              bP = bW.sent;
              bP.data.score_notify ? console.log("阅读获得：".concat(null === (bQ = bP.data) || undefined === bQ || null === (bQ = bQ.score_notify) || undefined === bQ ? undefined : bQ.integral, "积分")) : console.log("文章已经阅读过了");
            case 361:
              if (bC) {
                bW.next = 366;
                break;
              }
              bW.next = 364;
              return N("/api/favorite/like", "action=true&id=".concat(bO));
            case 364:
              bR = bW.sent;
              bR.data ? console.log("点赞获得：".concat(null === (bS = bR.data) || undefined === bS || null === (bS = bS.score_notify) || undefined === bS ? undefined : bS.integral, "积分")) : console.log("文章已经点赞过了");
            case 366:
              if (bD) {
                bW.next = 371;
                break;
              }
              bW.next = 369;
              return N("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(bO));
            case 369:
              bT = bW.sent;
              bT.data.score_notify ? console.log("分享获得：".concat(null === (bU = bT.data) || undefined === bU || null === (bU = bU.score_notify) || undefined === bU ? undefined : bU.integral, "积分")) : console.log("文章已经分享过了");
            case 371:
              bW.next = 353;
              break;
            case 373:
              bW.next = 378;
              break;
            case 375:
              bW.prev = 375;
              bW.t7 = bW.catch(351);
              bL.e(bW.t7);
            case 378:
              bW.prev = 378;
              bL.f();
              return bW.finish(378);
            case 381:
              console.log("————————————");
              console.log("查询积分");
              bW.next = 385;
              return L("/api/user_mumber/account_detail");
            case 385:
              bV = bW.sent;
              console.log("拥有积分：".concat(bV.data.rst.total_integral, "\n"));
            case 387:
              bW.next = 13;
              break;
            case 389:
              bW.next = 394;
              break;
            case 391:
              bW.prev = 391;
              bW.t8 = bW.catch(11);
              aa.e(bW.t8);
            case 394:
              bW.prev = 394;
              aa.f();
              return bW.finish(394);
            case 397:
              if (!r) {
                bW.next = 400;
                break;
              }
              bW.next = 400;
              return a4(r);
            case 400:
            case "end":
              return bW.stop();
          }
        }
      }, a7, null, [[11, 391, 394, 397], [110, 119, 122, 125], [157, 208, 211, 214], [169, 198, 201, 204], [249, 258, 261, 264], [314, 340, 343, 346], [351, 375, 378, 381]]);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function a7(a8) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ae, function () {
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(aj));
                            } catch (am) {
                              $.logErr(am, ai);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = m(k().mark(function a7(a8) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = W();
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a9.uuid,
                  "X-SIGNATURE": a9.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: ad,
                  body: a9.body
                };
                $.post(ae, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(al));
                            } catch (an) {
                              $.logErr(an, ak);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: a9
                };
                $.post(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ae();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a7(a8, a9) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a9);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": aa.signature,
                    "access-nonce-str": aa.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": aa.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a9)
                };
                $.post(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ad();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = X(a9);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ag, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return S.apply(this, arguments);
  }
  function T(a6, a7) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a7(a8, a9) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  "Content-Type": "application/json"
                };
                var ae = {
                  url: a8,
                  headers: ad,
                  body: JSON.stringify(a9)
                };
                $.post(ae, function (af, ag, ah) {
                  try {
                    af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ah));
                  } catch (ai) {
                    $.logErr(ai, ag);
                  } finally {
                    ac();
                  }
                });
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return U.apply(this, arguments);
  }
  function V(a6, a7) {
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.enc.Utf8.parse(a7);
    var a9 = CryptoJS.enc.Utf8.parse(a6);
    var aa = CryptoJS.AES.encrypt(a9, a8, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return aa.toString();
  }
  function W() {
    var ae = new (p.loadJSEncrypt())();
    ae.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = ae.encrypt(x);
    var ab = Z();
    var ac = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w);
    var ad = "post%%/web/oauth/credential_auth?".concat(ac, "%%").concat(ab, "%%");
    ac = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(ad, q);
    var aa = CryptoJS.enc.Hex.stringify(a9);
    var a8 = {
      uuid: ab,
      signature: aa,
      body: ac
    };
    return a8;
  }
  function X(a6) {
    var a8 = Z();
    var a9 = Date.now();
    var aa = {
      app_id: C,
      device_id: A,
      nonce_str: a8,
      source_type: "app",
      timestamp: a9,
      auth_id: u,
      token: s
    };
    Object.entries(a6).forEach(function (af) {
      var ag = d(af, 2);
      var ah = ag[0];
      var ai = ag[1];
      aa[ah] = ai;
    });
    var ab = Object.keys(aa).sort();
    var ac = ab.map(function (af) {
      return "".concat(af, "=").concat(aa[af]);
    }).join("&&");
    ac = ac + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var ad = CryptoJS.SHA256(ac).toString();
    var ae = {
      uuid: a8,
      time: a9,
      signature: ad
    };
    return ae;
  }
  function Y(a6) {
    var a7 = Z();
    var a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(s, "&&").concat(a7, "&&").concat(a8, "&&").concat(E, "&&").concat(t)).toString();
    var aa = {
      uuid: a7,
      time: a8,
      signature: a9
    };
    return aa;
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a7) {
      var a8 = 16 * Math.random() | 0;
      var a9 = "x" === a7 ? a8 : 3 & a8 | 8;
      return a9.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "3.1.0";
    var a7 = Z();
    var a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a9 = "Xiaomi " + a8;
    var aa = "Android";
    var ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a6, ";1.0;null;").concat(a8);
    var ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.6.1");
    var ad = {
      ua: ab,
      commonUa: ac,
      uuid: a7
    };
    return ad;
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = m(k().mark(function a7() {
      var a9;
      return k().wrap(function aa(ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (a9 = $.getdata("Utils_Code") || "", !a9 || !Object.keys(a9).length) {
                ab.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a9);
              return ab.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ab.abrupt("return", new Promise(function () {
                var ae = m(k().mark(function af(ag) {
                  return k().wrap(function ai(aj) {
                    for (;;) {
                      switch (aj.prev = aj.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            ag(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aj.stop();
                      }
                    }
                  }, af);
                }));
                return function (ag) {
                  return ae.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function a7(a8) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (!$.isNode()) {
                ab.next = 5;
                break;
              }
              ab.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              ab.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a5.apply(this, arguments);
  }
  m(k().mark(function a6() {
    return k().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return F();
          case 2:
          case "end":
            return a7.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}