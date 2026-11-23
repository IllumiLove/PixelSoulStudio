(function () {
  const C = document.createElement("link").relList;
  if (C && C.supports && C.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) N(u);
  new MutationObserver((u) => {
    for (const z of u)
      if (z.type === "childList")
        for (const L of z.addedNodes)
          L.tagName === "LINK" && L.rel === "modulepreload" && N(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(u) {
    const z = {};
    return (
      u.integrity && (z.integrity = u.integrity),
      u.referrerPolicy && (z.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (z.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (z.credentials = "omit")
          : (z.credentials = "same-origin"),
      z
    );
  }
  function N(u) {
    if (u.ep) return;
    u.ep = !0;
    const z = o(u);
    fetch(u.href, z);
  }
})();
var Ms = { exports: {} },
  Gl = {},
  Ls = { exports: {} },
  Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac;
function pf() {
  if (ac) return Oe;
  ac = 1;
  var h = Symbol.for("react.element"),
    C = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    z = Symbol.for("react.provider"),
    L = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    F = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    q = Symbol.iterator;
  function X(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (q && p[q]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var Ce = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    me = Object.assign,
    le = {};
  function y(p, E, V) {
    ((this.props = p),
      (this.context = E),
      (this.refs = le),
      (this.updater = V || Ce));
  }
  ((y.prototype.isReactComponent = {}),
    (y.prototype.setState = function (p, E) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, E, "setState");
    }),
    (y.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    }));
  function H() {}
  H.prototype = y.prototype;
  function ae(p, E, V) {
    ((this.props = p),
      (this.context = E),
      (this.refs = le),
      (this.updater = V || Ce));
  }
  var xe = (ae.prototype = new H());
  ((xe.constructor = ae), me(xe, y.prototype), (xe.isPureReactComponent = !0));
  var te = Array.isArray,
    Z = Object.prototype.hasOwnProperty,
    ne = { current: null },
    se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function de(p, E, V) {
    var ie,
      ce = {},
      j = null,
      Y = null;
    if (E != null)
      for (ie in (E.ref !== void 0 && (Y = E.ref),
      E.key !== void 0 && (j = "" + E.key),
      E))
        Z.call(E, ie) && !se.hasOwnProperty(ie) && (ce[ie] = E[ie]);
    var he = arguments.length - 2;
    if (he === 1) ce.children = V;
    else if (1 < he) {
      for (var oe = Array(he), qe = 0; qe < he; qe++)
        oe[qe] = arguments[qe + 2];
      ce.children = oe;
    }
    if (p && p.defaultProps)
      for (ie in ((he = p.defaultProps), he))
        ce[ie] === void 0 && (ce[ie] = he[ie]);
    return {
      $$typeof: h,
      type: p,
      key: j,
      ref: Y,
      props: ce,
      _owner: ne.current,
    };
  }
  function Be(p, E) {
    return {
      $$typeof: h,
      type: p.type,
      key: E,
      ref: p.ref,
      props: p.props,
      _owner: p._owner,
    };
  }
  function Se(p) {
    return typeof p == "object" && p !== null && p.$$typeof === h;
  }
  function Fe(p) {
    var E = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (V) {
        return E[V];
      })
    );
  }
  var Re = /\/+/g;
  function Me(p, E) {
    return typeof p == "object" && p !== null && p.key != null
      ? Fe("" + p.key)
      : E.toString(36);
  }
  function fe(p, E, V, ie, ce) {
    var j = typeof p;
    (j === "undefined" || j === "boolean") && (p = null);
    var Y = !1;
    if (p === null) Y = !0;
    else
      switch (j) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case h:
            case C:
              Y = !0;
          }
      }
    if (Y)
      return (
        (Y = p),
        (ce = ce(Y)),
        (p = ie === "" ? "." + Me(Y, 0) : ie),
        te(ce)
          ? ((V = ""),
            p != null && (V = p.replace(Re, "$&/") + "/"),
            fe(ce, E, V, "", function (qe) {
              return qe;
            }))
          : ce != null &&
            (Se(ce) &&
              (ce = Be(
                ce,
                V +
                  (!ce.key || (Y && Y.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(Re, "$&/") + "/") +
                  p,
              )),
            E.push(ce)),
        1
      );
    if (((Y = 0), (ie = ie === "" ? "." : ie + ":"), te(p)))
      for (var he = 0; he < p.length; he++) {
        j = p[he];
        var oe = ie + Me(j, he);
        Y += fe(j, E, V, oe, ce);
      }
    else if (((oe = X(p)), typeof oe == "function"))
      for (p = oe.call(p), he = 0; !(j = p.next()).done; )
        ((j = j.value), (oe = ie + Me(j, he++)), (Y += fe(j, E, V, oe, ce)));
    else if (j === "object")
      throw (
        (E = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (E === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : E) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Y;
  }
  function De(p, E, V) {
    if (p == null) return p;
    var ie = [],
      ce = 0;
    return (
      fe(p, ie, "", "", function (j) {
        return E.call(V, j, ce++);
      }),
      ie
    );
  }
  function $e(p) {
    if (p._status === -1) {
      var E = p._result;
      ((E = E()),
        E.then(
          function (V) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = V));
          },
          function (V) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = V));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = E)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var Le = { current: null },
    O = { transition: null },
    w = {
      ReactCurrentDispatcher: Le,
      ReactCurrentBatchConfig: O,
      ReactCurrentOwner: ne,
    };
  function M() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Oe.Children = {
      map: De,
      forEach: function (p, E, V) {
        De(
          p,
          function () {
            E.apply(this, arguments);
          },
          V,
        );
      },
      count: function (p) {
        var E = 0;
        return (
          De(p, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (p) {
        return (
          De(p, function (E) {
            return E;
          }) || []
        );
      },
      only: function (p) {
        if (!Se(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    }),
    (Oe.Component = y),
    (Oe.Fragment = o),
    (Oe.Profiler = u),
    (Oe.PureComponent = ae),
    (Oe.StrictMode = N),
    (Oe.Suspense = D),
    (Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w),
    (Oe.act = M),
    (Oe.cloneElement = function (p, E, V) {
      if (p == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            p +
            ".",
        );
      var ie = me({}, p.props),
        ce = p.key,
        j = p.ref,
        Y = p._owner;
      if (E != null) {
        if (
          (E.ref !== void 0 && ((j = E.ref), (Y = ne.current)),
          E.key !== void 0 && (ce = "" + E.key),
          p.type && p.type.defaultProps)
        )
          var he = p.type.defaultProps;
        for (oe in E)
          Z.call(E, oe) &&
            !se.hasOwnProperty(oe) &&
            (ie[oe] = E[oe] === void 0 && he !== void 0 ? he[oe] : E[oe]);
      }
      var oe = arguments.length - 2;
      if (oe === 1) ie.children = V;
      else if (1 < oe) {
        he = Array(oe);
        for (var qe = 0; qe < oe; qe++) he[qe] = arguments[qe + 2];
        ie.children = he;
      }
      return {
        $$typeof: h,
        type: p.type,
        key: ce,
        ref: j,
        props: ie,
        _owner: Y,
      };
    }),
    (Oe.createContext = function (p) {
      return (
        (p = {
          $$typeof: L,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (p.Provider = { $$typeof: z, _context: p }),
        (p.Consumer = p)
      );
    }),
    (Oe.createElement = de),
    (Oe.createFactory = function (p) {
      var E = de.bind(null, p);
      return ((E.type = p), E);
    }),
    (Oe.createRef = function () {
      return { current: null };
    }),
    (Oe.forwardRef = function (p) {
      return { $$typeof: _, render: p };
    }),
    (Oe.isValidElement = Se),
    (Oe.lazy = function (p) {
      return { $$typeof: U, _payload: { _status: -1, _result: p }, _init: $e };
    }),
    (Oe.memo = function (p, E) {
      return { $$typeof: F, type: p, compare: E === void 0 ? null : E };
    }),
    (Oe.startTransition = function (p) {
      var E = O.transition;
      O.transition = {};
      try {
        p();
      } finally {
        O.transition = E;
      }
    }),
    (Oe.unstable_act = M),
    (Oe.useCallback = function (p, E) {
      return Le.current.useCallback(p, E);
    }),
    (Oe.useContext = function (p) {
      return Le.current.useContext(p);
    }),
    (Oe.useDebugValue = function () {}),
    (Oe.useDeferredValue = function (p) {
      return Le.current.useDeferredValue(p);
    }),
    (Oe.useEffect = function (p, E) {
      return Le.current.useEffect(p, E);
    }),
    (Oe.useId = function () {
      return Le.current.useId();
    }),
    (Oe.useImperativeHandle = function (p, E, V) {
      return Le.current.useImperativeHandle(p, E, V);
    }),
    (Oe.useInsertionEffect = function (p, E) {
      return Le.current.useInsertionEffect(p, E);
    }),
    (Oe.useLayoutEffect = function (p, E) {
      return Le.current.useLayoutEffect(p, E);
    }),
    (Oe.useMemo = function (p, E) {
      return Le.current.useMemo(p, E);
    }),
    (Oe.useReducer = function (p, E, V) {
      return Le.current.useReducer(p, E, V);
    }),
    (Oe.useRef = function (p) {
      return Le.current.useRef(p);
    }),
    (Oe.useState = function (p) {
      return Le.current.useState(p);
    }),
    (Oe.useSyncExternalStore = function (p, E, V) {
      return Le.current.useSyncExternalStore(p, E, V);
    }),
    (Oe.useTransition = function () {
      return Le.current.useTransition();
    }),
    (Oe.version = "18.3.1"),
    Oe
  );
}
var sc;
function Us() {
  return (sc || ((sc = 1), (Ls.exports = pf())), Ls.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function hf() {
  if (oc) return Gl;
  oc = 1;
  var h = Us(),
    C = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    N = Object.prototype.hasOwnProperty,
    u = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(_, D, F) {
    var U,
      q = {},
      X = null,
      Ce = null;
    (F !== void 0 && (X = "" + F),
      D.key !== void 0 && (X = "" + D.key),
      D.ref !== void 0 && (Ce = D.ref));
    for (U in D) N.call(D, U) && !z.hasOwnProperty(U) && (q[U] = D[U]);
    if (_ && _.defaultProps)
      for (U in ((D = _.defaultProps), D)) q[U] === void 0 && (q[U] = D[U]);
    return {
      $$typeof: C,
      type: _,
      key: X,
      ref: Ce,
      props: q,
      _owner: u.current,
    };
  }
  return ((Gl.Fragment = o), (Gl.jsx = L), (Gl.jsxs = L), Gl);
}
var uc;
function mf() {
  return (uc || ((uc = 1), (Ms.exports = hf())), Ms.exports);
}
var i = mf(),
  Ji = {},
  Is = { exports: {} },
  tn = {},
  Rs = { exports: {} },
  Ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc;
function gf() {
  return (
    cc ||
      ((cc = 1),
      (function (h) {
        function C(O, w) {
          var M = O.length;
          O.push(w);
          e: for (; 0 < M; ) {
            var p = (M - 1) >>> 1,
              E = O[p];
            if (0 < u(E, w)) ((O[p] = w), (O[M] = E), (M = p));
            else break e;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function N(O) {
          if (O.length === 0) return null;
          var w = O[0],
            M = O.pop();
          if (M !== w) {
            O[0] = M;
            e: for (var p = 0, E = O.length, V = E >>> 1; p < V; ) {
              var ie = 2 * (p + 1) - 1,
                ce = O[ie],
                j = ie + 1,
                Y = O[j];
              if (0 > u(ce, M))
                j < E && 0 > u(Y, ce)
                  ? ((O[p] = Y), (O[j] = M), (p = j))
                  : ((O[p] = ce), (O[ie] = M), (p = ie));
              else if (j < E && 0 > u(Y, M)) ((O[p] = Y), (O[j] = M), (p = j));
              else break e;
            }
          }
          return w;
        }
        function u(O, w) {
          var M = O.sortIndex - w.sortIndex;
          return M !== 0 ? M : O.id - w.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var z = performance;
          h.unstable_now = function () {
            return z.now();
          };
        } else {
          var L = Date,
            _ = L.now();
          h.unstable_now = function () {
            return L.now() - _;
          };
        }
        var D = [],
          F = [],
          U = 1,
          q = null,
          X = 3,
          Ce = !1,
          me = !1,
          le = !1,
          y = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          ae = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function xe(O) {
          for (var w = o(F); w !== null; ) {
            if (w.callback === null) N(F);
            else if (w.startTime <= O)
              (N(F), (w.sortIndex = w.expirationTime), C(D, w));
            else break;
            w = o(F);
          }
        }
        function te(O) {
          if (((le = !1), xe(O), !me))
            if (o(D) !== null) ((me = !0), $e(Z));
            else {
              var w = o(F);
              w !== null && Le(te, w.startTime - O);
            }
        }
        function Z(O, w) {
          ((me = !1), le && ((le = !1), H(de), (de = -1)), (Ce = !0));
          var M = X;
          try {
            for (
              xe(w), q = o(D);
              q !== null && (!(q.expirationTime > w) || (O && !Fe()));

            ) {
              var p = q.callback;
              if (typeof p == "function") {
                ((q.callback = null), (X = q.priorityLevel));
                var E = p(q.expirationTime <= w);
                ((w = h.unstable_now()),
                  typeof E == "function"
                    ? (q.callback = E)
                    : q === o(D) && N(D),
                  xe(w));
              } else N(D);
              q = o(D);
            }
            if (q !== null) var V = !0;
            else {
              var ie = o(F);
              (ie !== null && Le(te, ie.startTime - w), (V = !1));
            }
            return V;
          } finally {
            ((q = null), (X = M), (Ce = !1));
          }
        }
        var ne = !1,
          se = null,
          de = -1,
          Be = 5,
          Se = -1;
        function Fe() {
          return !(h.unstable_now() - Se < Be);
        }
        function Re() {
          if (se !== null) {
            var O = h.unstable_now();
            Se = O;
            var w = !0;
            try {
              w = se(!0, O);
            } finally {
              w ? Me() : ((ne = !1), (se = null));
            }
          } else ne = !1;
        }
        var Me;
        if (typeof ae == "function")
          Me = function () {
            ae(Re);
          };
        else if (typeof MessageChannel < "u") {
          var fe = new MessageChannel(),
            De = fe.port2;
          ((fe.port1.onmessage = Re),
            (Me = function () {
              De.postMessage(null);
            }));
        } else
          Me = function () {
            y(Re, 0);
          };
        function $e(O) {
          ((se = O), ne || ((ne = !0), Me()));
        }
        function Le(O, w) {
          de = y(function () {
            O(h.unstable_now());
          }, w);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (h.unstable_continueExecution = function () {
            me || Ce || ((me = !0), $e(Z));
          }),
          (h.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Be = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return o(D);
          }),
          (h.unstable_next = function (O) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = X;
            }
            var M = X;
            X = w;
            try {
              return O();
            } finally {
              X = M;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (O, w) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var M = X;
            X = O;
            try {
              return w();
            } finally {
              X = M;
            }
          }),
          (h.unstable_scheduleCallback = function (O, w, M) {
            var p = h.unstable_now();
            switch (
              (typeof M == "object" && M !== null
                ? ((M = M.delay),
                  (M = typeof M == "number" && 0 < M ? p + M : p))
                : (M = p),
              O)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = M + E),
              (O = {
                id: U++,
                callback: w,
                priorityLevel: O,
                startTime: M,
                expirationTime: E,
                sortIndex: -1,
              }),
              M > p
                ? ((O.sortIndex = M),
                  C(F, O),
                  o(D) === null &&
                    O === o(F) &&
                    (le ? (H(de), (de = -1)) : (le = !0), Le(te, M - p)))
                : ((O.sortIndex = E), C(D, O), me || Ce || ((me = !0), $e(Z))),
              O
            );
          }),
          (h.unstable_shouldYield = Fe),
          (h.unstable_wrapCallback = function (O) {
            var w = X;
            return function () {
              var M = X;
              X = w;
              try {
                return O.apply(this, arguments);
              } finally {
                X = M;
              }
            };
          }));
      })(Ds)),
    Ds
  );
}
var dc;
function vf() {
  return (dc || ((dc = 1), (Rs.exports = gf())), Rs.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc;
function yf() {
  if (fc) return tn;
  fc = 1;
  var h = Us(),
    C = vf();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var N = new Set(),
    u = {};
  function z(e, t) {
    (L(e, t), L(e + "Capture", t));
  }
  function L(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) N.add(t[e]);
  }
  var _ = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    D = Object.prototype.hasOwnProperty,
    F =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    U = {},
    q = {};
  function X(e) {
    return D.call(q, e)
      ? !0
      : D.call(U, e)
        ? !1
        : F.test(e)
          ? (q[e] = !0)
          : ((U[e] = !0), !1);
  }
  function Ce(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function me(e, t, n, r) {
    if (t === null || typeof t > "u" || Ce(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function le(e, t, n, r, l, a, s) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = s));
  }
  var y = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      y[e] = new le(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      y[t] = new le(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        y[e] = new le(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      y[e] = new le(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        y[e] = new le(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      y[e] = new le(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      y[e] = new le(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      y[e] = new le(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      y[e] = new le(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var H = /[\-:]([a-z])/g;
  function ae(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(H, ae);
      y[t] = new le(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(H, ae);
        y[t] = new le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(H, ae);
      y[t] = new le(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      y[e] = new le(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (y.xlinkHref = new le(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      y[e] = new le(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function xe(e, t, n, r) {
    var l = y.hasOwnProperty(t) ? y[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (me(t, n, l, r) && (n = null),
      r || l === null
        ? X(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Z = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    se = Symbol.for("react.fragment"),
    de = Symbol.for("react.strict_mode"),
    Be = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    Fe = Symbol.for("react.context"),
    Re = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    fe = Symbol.for("react.suspense_list"),
    De = Symbol.for("react.memo"),
    $e = Symbol.for("react.lazy"),
    Le = Symbol.for("react.offscreen"),
    O = Symbol.iterator;
  function w(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (O && e[O]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var M = Object.assign,
    p;
  function E(e) {
    if (p === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        p = (t && t[1]) || "";
      }
    return (
      `
` +
      p +
      e
    );
  }
  var V = !1;
  function ie(e, t) {
    if (!e || V) return "";
    V = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            a = r.stack.split(`
`),
            s = l.length - 1,
            c = a.length - 1;
          1 <= s && 0 <= c && l[s] !== a[c];

        )
          c--;
        for (; 1 <= s && 0 <= c; s--, c--)
          if (l[s] !== a[c]) {
            if (s !== 1 || c !== 1)
              do
                if ((s--, c--, 0 > c || l[s] !== a[c])) {
                  var f =
                    `
` + l[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      f.includes("<anonymous>") &&
                      (f = f.replace("<anonymous>", e.displayName)),
                    f
                  );
                }
              while (1 <= s && 0 <= c);
            break;
          }
      }
    } finally {
      ((V = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ce(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ie(e.type, !1)), e);
      case 11:
        return ((e = ie(e.type.render, !1)), e);
      case 1:
        return ((e = ie(e.type, !0)), e);
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case se:
        return "Fragment";
      case ne:
        return "Portal";
      case Be:
        return "Profiler";
      case de:
        return "StrictMode";
      case Me:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Fe:
          return (e.displayName || "Context") + ".Consumer";
        case Se:
          return (e._context.displayName || "Context") + ".Provider";
        case Re:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case De:
          return (
            (t = e.displayName || null),
            t !== null ? t : j(e.type) || "Memo"
          );
        case $e:
          ((t = e._payload), (e = e._init));
          try {
            return j(e(t));
          } catch {}
      }
    return null;
  }
  function Y(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return j(t);
      case 8:
        return t === de ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function he(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qe(e) {
    var t = oe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (s) {
            ((r = "" + s), a.call(this, s));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function at(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function St(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = oe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function jt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function nn(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ze(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = he(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function $t(e, t) {
    ((t = t.checked), t != null && xe(e, "checked", t, !1));
  }
  function Bt(e, t) {
    $t(e, t);
    var n = he(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? $(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && $(e, t.type, he(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function k(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function $(e, t, n) {
    (t !== "number" || jt(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var we = Array.isArray;
  function ke(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + he(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function be(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ge(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (we(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: he(n) };
  }
  function W(e, t) {
    var n = he(t.value),
      r = he(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function He(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? tt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var rt,
    Ie = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          rt = rt || document.createElement("div"),
            rt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = rt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function We(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ct = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Kt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function (e) {
    Kt.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ct[t] = ct[e]));
    });
  });
  function P(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ct.hasOwnProperty(e) && ct[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function B(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = P(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var ge = M(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ne(e, t) {
    if (t) {
      if (ge[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function je(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _e = null;
  function st(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ht = null,
    Te = null,
    Ee = null;
  function Pe(e) {
    if ((e = Ml(e))) {
      if (typeof ht != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = pi(t)), ht(e.stateNode, e.type, t));
    }
  }
  function Ue(e) {
    Te ? (Ee ? Ee.push(e) : (Ee = [e])) : (Te = e);
  }
  function Ke() {
    if (Te) {
      var e = Te,
        t = Ee;
      if (((Ee = Te = null), Pe(e), t)) for (e = 0; e < t.length; e++) Pe(t[e]);
    }
  }
  function vt(e, t) {
    return e(t);
  }
  function yt() {}
  var et = !1;
  function zt(e, t, n) {
    if (et) return e(t, n);
    et = !0;
    try {
      return vt(e, t, n);
    } finally {
      ((et = !1), (Te !== null || Ee !== null) && (yt(), Ke()));
    }
  }
  function Ht(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var cn = !1;
  if (_)
    try {
      var Lt = {};
      (Object.defineProperty(Lt, "passive", {
        get: function () {
          cn = !0;
        },
      }),
        window.addEventListener("test", Lt, Lt),
        window.removeEventListener("test", Lt, Lt));
    } catch {
      cn = !1;
    }
  function Wt(e, t, n, r, l, a, s, c, f) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (R) {
      this.onError(R);
    }
  }
  var Nt = !1,
    rn = null,
    yn = !1,
    dn = null,
    xn = {
      onError: function (e) {
        ((Nt = !0), (rn = e));
      },
    };
  function Ln(e, t, n, r, l, a, s, c, f) {
    ((Nt = !1), (rn = null), Wt.apply(xn, arguments));
  }
  function gr(e, t, n, r, l, a, s, c, f) {
    if ((Ln.apply(this, arguments), Nt)) {
      if (Nt) {
        var S = rn;
        ((Nt = !1), (rn = null));
      } else throw Error(o(198));
      yn || ((yn = !0), (dn = S));
    }
  }
  function ln(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Hn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function vr(e) {
    if (ln(e) !== e) throw Error(o(188));
  }
  function Je(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ln(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var a = l.alternate;
      if (a === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === a.child) {
        for (a = l.child; a; ) {
          if (a === n) return (vr(l), e);
          if (a === r) return (vr(l), t);
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) ((n = l), (r = a));
      else {
        for (var s = !1, c = l.child; c; ) {
          if (c === n) {
            ((s = !0), (n = l), (r = a));
            break;
          }
          if (c === r) {
            ((s = !0), (r = l), (n = a));
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = a.child; c; ) {
            if (c === n) {
              ((s = !0), (n = a), (r = l));
              break;
            }
            if (c === r) {
              ((s = !0), (r = a), (n = l));
              break;
            }
            c = c.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xt(e) {
    return ((e = Je(e)), e !== null ? yr(e) : null);
  }
  function yr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = yr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Dr = C.unstable_scheduleCallback,
    Tr = C.unstable_cancelCallback,
    dl = C.unstable_shouldYield,
    wn = C.unstable_requestPaint,
    Ye = C.unstable_now,
    Wn = C.unstable_getCurrentPriorityLevel,
    Vn = C.unstable_ImmediatePriority,
    xr = C.unstable_UserBlockingPriority,
    Ct = C.unstable_NormalPriority,
    In = C.unstable_LowPriority,
    Gn = C.unstable_IdlePriority,
    Qn = null,
    Dt = null;
  function Or(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Qn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : wr,
    Kn = Math.log,
    fl = Math.LN2;
  function wr(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Kn(e) / fl) | 0)) | 0);
  }
  var Ar = 64,
    Fr = 4194304;
  function Xn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      a = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var c = s & ~l;
      c !== 0 ? (r = Xn(c)) : ((a &= s), a !== 0 && (r = Xn(a)));
    } else ((s = n & ~l), s !== 0 ? (r = Xn(s)) : a !== 0 && (r = Xn(a)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - Tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Xl(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function na(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var s = 31 - Tt(a),
        c = 1 << s,
        f = l[s];
      (f === -1
        ? ((c & n) === 0 || (c & r) !== 0) && (l[s] = Xl(c, t))
        : f <= t && (e.expiredLanes |= c),
        (a &= ~c));
    }
  }
  function pl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Yl() {
    var e = Ar;
    return ((Ar <<= 1), (Ar & 4194240) === 0 && (Ar = 64), e);
  }
  function d(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function b(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Tt(t)),
      (e[t] = n));
  }
  function pe(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Tt(n),
        a = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a));
    }
  }
  function Q(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ue = 0;
  function mt(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Yn,
    Rn,
    ql,
    Jl,
    hl,
    kr = !1,
    $r = [],
    Vt = null,
    qn = null,
    Jn = null,
    ml = new Map(),
    gl = new Map(),
    Zn = [],
    Rc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Bs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Jn = null;
        break;
      case "pointerover":
      case "pointerout":
        ml.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(t.pointerId);
    }
  }
  function vl(e, t, n, r, l, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [l],
        }),
        t !== null && ((t = Ml(t)), t !== null && Rn(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Dc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Vt = vl(Vt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((qn = vl(qn, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Jn = vl(Jn, e, t, n, r, l)), !0);
      case "pointerover":
        var a = l.pointerId;
        return (ml.set(a, vl(ml.get(a) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (a = l.pointerId),
          gl.set(a, vl(gl.get(a) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function Hs(e) {
    var t = Sr(e.target);
    if (t !== null) {
      var n = ln(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Hn(n)), t !== null)) {
            ((e.blockedOn = t),
              hl(e.priority, function () {
                ql(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Zl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = la(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((_e = r), n.target.dispatchEvent(r), (_e = null));
      } else return ((t = Ml(n)), t !== null && Rn(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ws(e, t, n) {
    Zl(e) && n.delete(t);
  }
  function Tc() {
    ((kr = !1),
      Vt !== null && Zl(Vt) && (Vt = null),
      qn !== null && Zl(qn) && (qn = null),
      Jn !== null && Zl(Jn) && (Jn = null),
      ml.forEach(Ws),
      gl.forEach(Ws));
  }
  function yl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      kr ||
        ((kr = !0),
        C.unstable_scheduleCallback(C.unstable_NormalPriority, Tc)));
  }
  function xl(e) {
    function t(l) {
      return yl(l, e);
    }
    if (0 < $r.length) {
      yl($r[0], e);
      for (var n = 1; n < $r.length; n++) {
        var r = $r[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && yl(Vt, e),
        qn !== null && yl(qn, e),
        Jn !== null && yl(Jn, e),
        ml.forEach(t),
        gl.forEach(t),
        n = 0;
      n < Zn.length;
      n++
    )
      ((r = Zn[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
      (Hs(n), n.blockedOn === null && Zn.shift());
  }
  var Br = te.ReactCurrentBatchConfig,
    ei = !0;
  function Oc(e, t, n, r) {
    var l = ue,
      a = Br.transition;
    Br.transition = null;
    try {
      ((ue = 1), ra(e, t, n, r));
    } finally {
      ((ue = l), (Br.transition = a));
    }
  }
  function Ac(e, t, n, r) {
    var l = ue,
      a = Br.transition;
    Br.transition = null;
    try {
      ((ue = 4), ra(e, t, n, r));
    } finally {
      ((ue = l), (Br.transition = a));
    }
  }
  function ra(e, t, n, r) {
    if (ei) {
      var l = la(e, t, n, r);
      if (l === null) (ka(e, t, r, ti, n), Bs(e, r));
      else if (Dc(l, e, t, n, r)) r.stopPropagation();
      else if ((Bs(e, r), t & 4 && -1 < Rc.indexOf(e))) {
        for (; l !== null; ) {
          var a = Ml(l);
          if (
            (a !== null && Yn(a),
            (a = la(e, t, n, r)),
            a === null && ka(e, t, r, ti, n),
            a === l)
          )
            break;
          l = a;
        }
        l !== null && r.stopPropagation();
      } else ka(e, t, r, null, n);
    }
  }
  var ti = null;
  function la(e, t, n, r) {
    if (((ti = null), (e = st(r)), (e = Sr(e)), e !== null))
      if (((t = ln(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Hn(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((ti = e), null);
  }
  function Vs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Wn()) {
          case Vn:
            return 1;
          case xr:
            return 4;
          case Ct:
          case In:
            return 16;
          case Gn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var er = null,
    ia = null,
    ni = null;
  function Gs() {
    if (ni) return ni;
    var e,
      t = ia,
      n = t.length,
      r,
      l = "value" in er ? er.value : er.textContent,
      a = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[a - r]; r++);
    return (ni = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ri(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function li() {
    return !0;
  }
  function Qs() {
    return !1;
  }
  function an(e) {
    function t(n, r, l, a, s) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = s),
        (this.currentTarget = null));
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? li
          : Qs),
        (this.isPropagationStopped = Qs),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = li));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = li));
        },
        persist: function () {},
        isPersistent: li,
      }),
      t
    );
  }
  var Hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    aa = an(Hr),
    wl = M({}, Hr, { view: 0, detail: 0 }),
    Fc = an(wl),
    sa,
    oa,
    kl,
    ii = M({}, wl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ca,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== kl &&
              (kl && e.type === "mousemove"
                ? ((sa = e.screenX - kl.screenX), (oa = e.screenY - kl.screenY))
                : (oa = sa = 0),
              (kl = e)),
            sa);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : oa;
      },
    }),
    Ks = an(ii),
    Uc = M({}, ii, { dataTransfer: 0 }),
    $c = an(Uc),
    Bc = M({}, wl, { relatedTarget: 0 }),
    ua = an(Bc),
    Hc = M({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wc = an(Hc),
    Vc = M({}, Hr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Gc = an(Vc),
    Qc = M({}, Hr, { data: 0 }),
    Xs = an(Qc),
    Kc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Yc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function qc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Yc[e])
        ? !!t[e]
        : !1;
  }
  function ca() {
    return qc;
  }
  var Jc = M({}, wl, {
      key: function (e) {
        if (e.key) {
          var t = Kc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Xc[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ca,
      charCode: function (e) {
        return e.type === "keypress" ? ri(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ri(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Zc = an(Jc),
    ed = M({}, ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ys = an(ed),
    td = M({}, wl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ca,
    }),
    nd = an(td),
    rd = M({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ld = an(rd),
    id = M({}, ii, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ad = an(id),
    sd = [9, 13, 27, 32],
    da = _ && "CompositionEvent" in window,
    Sl = null;
  _ && "documentMode" in document && (Sl = document.documentMode);
  var od = _ && "TextEvent" in window && !Sl,
    qs = _ && (!da || (Sl && 8 < Sl && 11 >= Sl)),
    Js = " ",
    Zs = !1;
  function eo(e, t) {
    switch (e) {
      case "keyup":
        return sd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function to(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Wr = !1;
  function ud(e, t) {
    switch (e) {
      case "compositionend":
        return to(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zs = !0), Js);
      case "textInput":
        return ((e = t.data), e === Js && Zs ? null : e);
      default:
        return null;
    }
  }
  function cd(e, t) {
    if (Wr)
      return e === "compositionend" || (!da && eo(e, t))
        ? ((e = Gs()), (ni = ia = er = null), (Wr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dd[e.type] : t === "textarea";
  }
  function ro(e, t, n, r) {
    (Ue(r),
      (t = ci(t, "onChange")),
      0 < t.length &&
        ((n = new aa("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var jl = null,
    Nl = null;
  function fd(e) {
    So(e, 0);
  }
  function ai(e) {
    var t = Xr(e);
    if (St(t)) return e;
  }
  function pd(e, t) {
    if (e === "change") return t;
  }
  var lo = !1;
  if (_) {
    var fa;
    if (_) {
      var pa = "oninput" in document;
      if (!pa) {
        var io = document.createElement("div");
        (io.setAttribute("oninput", "return;"),
          (pa = typeof io.oninput == "function"));
      }
      fa = pa;
    } else fa = !1;
    lo = fa && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    jl && (jl.detachEvent("onpropertychange", so), (Nl = jl = null));
  }
  function so(e) {
    if (e.propertyName === "value" && ai(Nl)) {
      var t = [];
      (ro(t, Nl, e, st(e)), zt(fd, t));
    }
  }
  function hd(e, t, n) {
    e === "focusin"
      ? (ao(), (jl = t), (Nl = n), jl.attachEvent("onpropertychange", so))
      : e === "focusout" && ao();
  }
  function md(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ai(Nl);
  }
  function gd(e, t) {
    if (e === "click") return ai(t);
  }
  function vd(e, t) {
    if (e === "input" || e === "change") return ai(t);
  }
  function yd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kn = typeof Object.is == "function" ? Object.is : yd;
  function Cl(e, t) {
    if (kn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!D.call(t, l) || !kn(e[l], t[l])) return !1;
    }
    return !0;
  }
  function oo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function uo(e, t) {
    var n = oo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = oo(n);
    }
  }
  function co(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? co(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function fo() {
    for (var e = window, t = jt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = jt(e.document);
    }
    return t;
  }
  function ha(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function xd(e) {
    var t = fo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      co(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ha(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            a = Math.min(r.start, l);
          ((r = r.end === void 0 ? a : Math.min(r.end, l)),
            !e.extend && a > r && ((l = r), (r = a), (a = l)),
            (l = uo(n, a)));
          var s = uo(n, r);
          l &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var wd = _ && "documentMode" in document && 11 >= document.documentMode,
    Vr = null,
    ma = null,
    El = null,
    ga = !1;
  function po(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ga ||
      Vr == null ||
      Vr !== jt(r) ||
      ((r = Vr),
      "selectionStart" in r && ha(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (El && Cl(El, r)) ||
        ((El = r),
        (r = ci(ma, "onSelect")),
        0 < r.length &&
          ((t = new aa("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Vr))));
  }
  function si(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Gr = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    va = {},
    ho = {};
  _ &&
    ((ho = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Gr.animationend.animation,
      delete Gr.animationiteration.animation,
      delete Gr.animationstart.animation),
    "TransitionEvent" in window || delete Gr.transitionend.transition);
  function oi(e) {
    if (va[e]) return va[e];
    if (!Gr[e]) return e;
    var t = Gr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ho) return (va[e] = t[n]);
    return e;
  }
  var mo = oi("animationend"),
    go = oi("animationiteration"),
    vo = oi("animationstart"),
    yo = oi("transitionend"),
    xo = new Map(),
    wo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function tr(e, t) {
    (xo.set(e, t), z(t, [e]));
  }
  for (var ya = 0; ya < wo.length; ya++) {
    var xa = wo[ya],
      kd = xa.toLowerCase(),
      Sd = xa[0].toUpperCase() + xa.slice(1);
    tr(kd, "on" + Sd);
  }
  (tr(mo, "onAnimationEnd"),
    tr(go, "onAnimationIteration"),
    tr(vo, "onAnimationStart"),
    tr("dblclick", "onDoubleClick"),
    tr("focusin", "onFocus"),
    tr("focusout", "onBlur"),
    tr(yo, "onTransitionEnd"),
    L("onMouseEnter", ["mouseout", "mouseover"]),
    L("onMouseLeave", ["mouseout", "mouseover"]),
    L("onPointerEnter", ["pointerout", "pointerover"]),
    L("onPointerLeave", ["pointerout", "pointerover"]),
    z(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    z(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    z("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    z(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    z(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    z(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Pl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    jd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Pl),
    );
  function ko(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), gr(r, t, void 0, e), (e.currentTarget = null));
  }
  function So(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var c = r[s],
              f = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), f !== a && l.isPropagationStopped()))
              break e;
            (ko(l, c, S), (a = f));
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((c = r[s]),
              (f = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              f !== a && l.isPropagationStopped())
            )
              break e;
            (ko(l, c, S), (a = f));
          }
      }
    }
    if (yn) throw ((e = dn), (yn = !1), (dn = null), e);
  }
  function lt(e, t) {
    var n = t[Pa];
    n === void 0 && (n = t[Pa] = new Set());
    var r = e + "__bubble";
    n.has(r) || (jo(t, e, 2, !1), n.add(r));
  }
  function wa(e, t, n) {
    var r = 0;
    (t && (r |= 4), jo(n, e, r, t));
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function zl(e) {
    if (!e[ui]) {
      ((e[ui] = !0),
        N.forEach(function (n) {
          n !== "selectionchange" && (jd.has(n) || wa(n, !1, e), wa(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ui] || ((t[ui] = !0), wa("selectionchange", !1, t));
    }
  }
  function jo(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var l = Oc;
        break;
      case 4:
        l = Ac;
        break;
      default:
        l = ra;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !cn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ka(e, t, n, r, l) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var f = s.tag;
              if (
                (f === 3 || f === 4) &&
                ((f = s.stateNode.containerInfo),
                f === l || (f.nodeType === 8 && f.parentNode === l))
              )
                return;
              s = s.return;
            }
          for (; c !== null; ) {
            if (((s = Sr(c)), s === null)) return;
            if (((f = s.tag), f === 5 || f === 6)) {
              r = a = s;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    zt(function () {
      var S = a,
        R = st(n),
        T = [];
      e: {
        var I = xo.get(e);
        if (I !== void 0) {
          var G = aa,
            J = e;
          switch (e) {
            case "keypress":
              if (ri(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = Zc;
              break;
            case "focusin":
              ((J = "focus"), (G = ua));
              break;
            case "focusout":
              ((J = "blur"), (G = ua));
              break;
            case "beforeblur":
            case "afterblur":
              G = ua;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Ks;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = $c;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = nd;
              break;
            case mo:
            case go:
            case vo:
              G = Wc;
              break;
            case yo:
              G = ld;
              break;
            case "scroll":
              G = Fc;
              break;
            case "wheel":
              G = ad;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Gc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Ys;
          }
          var ee = (t & 4) !== 0,
            xt = !ee && e === "scroll",
            v = ee ? (I !== null ? I + "Capture" : null) : I;
          ee = [];
          for (var m = S, x; m !== null; ) {
            x = m;
            var A = x.stateNode;
            if (
              (x.tag === 5 &&
                A !== null &&
                ((x = A),
                v !== null &&
                  ((A = Ht(m, v)), A != null && ee.push(bl(m, A, x)))),
              xt)
            )
              break;
            m = m.return;
          }
          0 < ee.length &&
            ((I = new G(I, J, null, n, R)),
            T.push({ event: I, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (G = e === "mouseout" || e === "pointerout"),
            I &&
              n !== _e &&
              (J = n.relatedTarget || n.fromElement) &&
              (Sr(J) || J[Dn]))
          )
            break e;
          if (
            (G || I) &&
            ((I =
              R.window === R
                ? R
                : (I = R.ownerDocument)
                  ? I.defaultView || I.parentWindow
                  : window),
            G
              ? ((J = n.relatedTarget || n.toElement),
                (G = S),
                (J = J ? Sr(J) : null),
                J !== null &&
                  ((xt = ln(J)), J !== xt || (J.tag !== 5 && J.tag !== 6)) &&
                  (J = null))
              : ((G = null), (J = S)),
            G !== J)
          ) {
            if (
              ((ee = Ks),
              (A = "onMouseLeave"),
              (v = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Ys),
                (A = "onPointerLeave"),
                (v = "onPointerEnter"),
                (m = "pointer")),
              (xt = G == null ? I : Xr(G)),
              (x = J == null ? I : Xr(J)),
              (I = new ee(A, m + "leave", G, n, R)),
              (I.target = xt),
              (I.relatedTarget = x),
              (A = null),
              Sr(R) === S &&
                ((ee = new ee(v, m + "enter", J, n, R)),
                (ee.target = x),
                (ee.relatedTarget = xt),
                (A = ee)),
              (xt = A),
              G && J)
            )
              t: {
                for (ee = G, v = J, m = 0, x = ee; x; x = Qr(x)) m++;
                for (x = 0, A = v; A; A = Qr(A)) x++;
                for (; 0 < m - x; ) ((ee = Qr(ee)), m--);
                for (; 0 < x - m; ) ((v = Qr(v)), x--);
                for (; m--; ) {
                  if (ee === v || (v !== null && ee === v.alternate)) break t;
                  ((ee = Qr(ee)), (v = Qr(v)));
                }
                ee = null;
              }
            else ee = null;
            (G !== null && No(T, I, G, ee, !1),
              J !== null && xt !== null && No(T, xt, J, ee, !0));
          }
        }
        e: {
          if (
            ((I = S ? Xr(S) : window),
            (G = I.nodeName && I.nodeName.toLowerCase()),
            G === "select" || (G === "input" && I.type === "file"))
          )
            var re = pd;
          else if (no(I))
            if (lo) re = vd;
            else {
              re = md;
              var ve = hd;
            }
          else
            (G = I.nodeName) &&
              G.toLowerCase() === "input" &&
              (I.type === "checkbox" || I.type === "radio") &&
              (re = gd);
          if (re && (re = re(e, S))) {
            ro(T, re, n, R);
            break e;
          }
          (ve && ve(e, I, S),
            e === "focusout" &&
              (ve = I._wrapperState) &&
              ve.controlled &&
              I.type === "number" &&
              $(I, "number", I.value));
        }
        switch (((ve = S ? Xr(S) : window), e)) {
          case "focusin":
            (no(ve) || ve.contentEditable === "true") &&
              ((Vr = ve), (ma = S), (El = null));
            break;
          case "focusout":
            El = ma = Vr = null;
            break;
          case "mousedown":
            ga = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ga = !1), po(T, n, R));
            break;
          case "selectionchange":
            if (wd) break;
          case "keydown":
          case "keyup":
            po(T, n, R);
        }
        var ye;
        if (da)
          e: {
            switch (e) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          Wr
            ? eo(e, n) && (ze = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ze = "onCompositionStart");
        (ze &&
          (qs &&
            n.locale !== "ko" &&
            (Wr || ze !== "onCompositionStart"
              ? ze === "onCompositionEnd" && Wr && (ye = Gs())
              : ((er = R),
                (ia = "value" in er ? er.value : er.textContent),
                (Wr = !0))),
          (ve = ci(S, ze)),
          0 < ve.length &&
            ((ze = new Xs(ze, e, null, n, R)),
            T.push({ event: ze, listeners: ve }),
            ye
              ? (ze.data = ye)
              : ((ye = to(n)), ye !== null && (ze.data = ye)))),
          (ye = od ? ud(e, n) : cd(e, n)) &&
            ((S = ci(S, "onBeforeInput")),
            0 < S.length &&
              ((R = new Xs("onBeforeInput", "beforeinput", null, n, R)),
              T.push({ event: R, listeners: S }),
              (R.data = ye))));
      }
      So(T, t);
    });
  }
  function bl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ci(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        a = l.stateNode;
      (l.tag === 5 &&
        a !== null &&
        ((l = a),
        (a = Ht(e, n)),
        a != null && r.unshift(bl(e, a, l)),
        (a = Ht(e, t)),
        a != null && r.push(bl(e, a, l))),
        (e = e.return));
    }
    return r;
  }
  function Qr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function No(e, t, n, r, l) {
    for (var a = t._reactName, s = []; n !== null && n !== r; ) {
      var c = n,
        f = c.alternate,
        S = c.stateNode;
      if (f !== null && f === r) break;
      (c.tag === 5 &&
        S !== null &&
        ((c = S),
        l
          ? ((f = Ht(n, a)), f != null && s.unshift(bl(n, f, c)))
          : l || ((f = Ht(n, a)), f != null && s.push(bl(n, f, c)))),
        (n = n.return));
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Nd = /\r\n?/g,
    Cd = /\u0000|\uFFFD/g;
  function Co(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Nd,
        `
`,
      )
      .replace(Cd, "");
  }
  function di(e, t, n) {
    if (((t = Co(t)), Co(e) !== t && n)) throw Error(o(425));
  }
  function fi() {}
  var Sa = null,
    ja = null;
  function Na(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ca = typeof setTimeout == "function" ? setTimeout : void 0,
    Ed = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Eo = typeof Promise == "function" ? Promise : void 0,
    Pd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Eo < "u"
          ? function (e) {
              return Eo.resolve(null).then(e).catch(zd);
            }
          : Ca;
  function zd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ea(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), xl(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    xl(t);
  }
  function nr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Po(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Kr = Math.random().toString(36).slice(2),
    Pn = "__reactFiber$" + Kr,
    _l = "__reactProps$" + Kr,
    Dn = "__reactContainer$" + Kr,
    Pa = "__reactEvents$" + Kr,
    bd = "__reactListeners$" + Kr,
    _d = "__reactHandles$" + Kr;
  function Sr(e) {
    var t = e[Pn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Dn] || n[Pn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Po(e); e !== null; ) {
            if ((n = e[Pn])) return n;
            e = Po(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ml(e) {
    return (
      (e = e[Pn] || e[Dn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Xr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function pi(e) {
    return e[_l] || null;
  }
  var za = [],
    Yr = -1;
  function rr(e) {
    return { current: e };
  }
  function it(e) {
    0 > Yr || ((e.current = za[Yr]), (za[Yr] = null), Yr--);
  }
  function nt(e, t) {
    (Yr++, (za[Yr] = e.current), (e.current = t));
  }
  var lr = {},
    Ot = rr(lr),
    Yt = rr(!1),
    jr = lr;
  function qr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return lr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      a;
    for (a in n) l[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function qt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function hi() {
    (it(Yt), it(Ot));
  }
  function zo(e, t, n) {
    if (Ot.current !== lr) throw Error(o(168));
    (nt(Ot, t), nt(Yt, n));
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, Y(e) || "Unknown", l));
    return M({}, n, r);
  }
  function mi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        lr),
      (jr = Ot.current),
      nt(Ot, e),
      nt(Yt, Yt.current),
      !0
    );
  }
  function _o(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    (n
      ? ((e = bo(e, t, jr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        it(Yt),
        it(Ot),
        nt(Ot, e))
      : it(Yt),
      nt(Yt, n));
  }
  var Tn = null,
    gi = !1,
    ba = !1;
  function Mo(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e);
  }
  function Md(e) {
    ((gi = !0), Mo(e));
  }
  function ir() {
    if (!ba && Tn !== null) {
      ba = !0;
      var e = 0,
        t = ue;
      try {
        var n = Tn;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Tn = null), (gi = !1));
      } catch (l) {
        throw (Tn !== null && (Tn = Tn.slice(e + 1)), Dr(Vn, ir), l);
      } finally {
        ((ue = t), (ba = !1));
      }
    }
    return null;
  }
  var Jr = [],
    Zr = 0,
    vi = null,
    yi = 0,
    fn = [],
    pn = 0,
    Nr = null,
    On = 1,
    An = "";
  function Cr(e, t) {
    ((Jr[Zr++] = yi), (Jr[Zr++] = vi), (vi = e), (yi = t));
  }
  function Lo(e, t, n) {
    ((fn[pn++] = On), (fn[pn++] = An), (fn[pn++] = Nr), (Nr = e));
    var r = On;
    e = An;
    var l = 32 - Tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var a = 32 - Tt(t) + l;
    if (30 < a) {
      var s = l - (l % 5);
      ((a = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (l -= s),
        (On = (1 << (32 - Tt(t) + l)) | (n << l) | r),
        (An = a + e));
    } else ((On = (1 << a) | (n << l) | r), (An = e));
  }
  function _a(e) {
    e.return !== null && (Cr(e, 1), Lo(e, 1, 0));
  }
  function Ma(e) {
    for (; e === vi; )
      ((vi = Jr[--Zr]), (Jr[Zr] = null), (yi = Jr[--Zr]), (Jr[Zr] = null));
    for (; e === Nr; )
      ((Nr = fn[--pn]),
        (fn[pn] = null),
        (An = fn[--pn]),
        (fn[pn] = null),
        (On = fn[--pn]),
        (fn[pn] = null));
  }
  var sn = null,
    on = null,
    ot = !1,
    Sn = null;
  function Io(e, t) {
    var n = vn(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ro(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (sn = e), (on = nr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (sn = e), (on = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Nr !== null ? { id: On, overflow: An } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = vn(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (sn = e),
              (on = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ia(e) {
    if (ot) {
      var t = on;
      if (t) {
        var n = t;
        if (!Ro(e, t)) {
          if (La(e)) throw Error(o(418));
          t = nr(n.nextSibling);
          var r = sn;
          t && Ro(e, t)
            ? Io(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ot = !1), (sn = e));
        }
      } else {
        if (La(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (ot = !1), (sn = e));
      }
    }
  }
  function Do(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    sn = e;
  }
  function xi(e) {
    if (e !== sn) return !1;
    if (!ot) return (Do(e), (ot = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps))),
      t && (t = on))
    ) {
      if (La(e)) throw (To(), Error(o(418)));
      for (; t; ) (Io(e, t), (t = nr(t.nextSibling)));
    }
    if ((Do(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                on = nr(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        on = null;
      }
    } else on = sn ? nr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function To() {
    for (var e = on; e; ) e = nr(e.nextSibling);
  }
  function el() {
    ((on = sn = null), (ot = !1));
  }
  function Ra(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  var Ld = te.ReactCurrentBatchConfig;
  function Ll(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r,
          a = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (s) {
              var c = l.refs;
              s === null ? delete c[a] : (c[a] = s);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function wi(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Oo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ao(e) {
    function t(v, m) {
      if (e) {
        var x = v.deletions;
        x === null ? ((v.deletions = [m]), (v.flags |= 16)) : x.push(m);
      }
    }
    function n(v, m) {
      if (!e) return null;
      for (; m !== null; ) (t(v, m), (m = m.sibling));
      return null;
    }
    function r(v, m) {
      for (v = new Map(); m !== null; )
        (m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling));
      return v;
    }
    function l(v, m) {
      return ((v = pr(v, m)), (v.index = 0), (v.sibling = null), v);
    }
    function a(v, m, x) {
      return (
        (v.index = x),
        e
          ? ((x = v.alternate),
            x !== null
              ? ((x = x.index), x < m ? ((v.flags |= 2), m) : x)
              : ((v.flags |= 2), m))
          : ((v.flags |= 1048576), m)
      );
    }
    function s(v) {
      return (e && v.alternate === null && (v.flags |= 2), v);
    }
    function c(v, m, x, A) {
      return m === null || m.tag !== 6
        ? ((m = Cs(x, v.mode, A)), (m.return = v), m)
        : ((m = l(m, x)), (m.return = v), m);
    }
    function f(v, m, x, A) {
      var re = x.type;
      return re === se
        ? R(v, m, x.props.children, A, x.key)
        : m !== null &&
            (m.elementType === re ||
              (typeof re == "object" &&
                re !== null &&
                re.$$typeof === $e &&
                Oo(re) === m.type))
          ? ((A = l(m, x.props)), (A.ref = Ll(v, m, x)), (A.return = v), A)
          : ((A = Wi(x.type, x.key, x.props, null, v.mode, A)),
            (A.ref = Ll(v, m, x)),
            (A.return = v),
            A);
    }
    function S(v, m, x, A) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== x.containerInfo ||
        m.stateNode.implementation !== x.implementation
        ? ((m = Es(x, v.mode, A)), (m.return = v), m)
        : ((m = l(m, x.children || [])), (m.return = v), m);
    }
    function R(v, m, x, A, re) {
      return m === null || m.tag !== 7
        ? ((m = Ir(x, v.mode, A, re)), (m.return = v), m)
        : ((m = l(m, x)), (m.return = v), m);
    }
    function T(v, m, x) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return ((m = Cs("" + m, v.mode, x)), (m.return = v), m);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Z:
            return (
              (x = Wi(m.type, m.key, m.props, null, v.mode, x)),
              (x.ref = Ll(v, null, m)),
              (x.return = v),
              x
            );
          case ne:
            return ((m = Es(m, v.mode, x)), (m.return = v), m);
          case $e:
            var A = m._init;
            return T(v, A(m._payload), x);
        }
        if (we(m) || w(m))
          return ((m = Ir(m, v.mode, x, null)), (m.return = v), m);
        wi(v, m);
      }
      return null;
    }
    function I(v, m, x, A) {
      var re = m !== null ? m.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return re !== null ? null : c(v, m, "" + x, A);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return x.key === re ? f(v, m, x, A) : null;
          case ne:
            return x.key === re ? S(v, m, x, A) : null;
          case $e:
            return ((re = x._init), I(v, m, re(x._payload), A));
        }
        if (we(x) || w(x)) return re !== null ? null : R(v, m, x, A, null);
        wi(v, x);
      }
      return null;
    }
    function G(v, m, x, A, re) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return ((v = v.get(x) || null), c(m, v, "" + A, re));
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Z:
            return (
              (v = v.get(A.key === null ? x : A.key) || null),
              f(m, v, A, re)
            );
          case ne:
            return (
              (v = v.get(A.key === null ? x : A.key) || null),
              S(m, v, A, re)
            );
          case $e:
            var ve = A._init;
            return G(v, m, x, ve(A._payload), re);
        }
        if (we(A) || w(A))
          return ((v = v.get(x) || null), R(m, v, A, re, null));
        wi(m, A);
      }
      return null;
    }
    function J(v, m, x, A) {
      for (
        var re = null, ve = null, ye = m, ze = (m = 0), Mt = null;
        ye !== null && ze < x.length;
        ze++
      ) {
        ye.index > ze ? ((Mt = ye), (ye = null)) : (Mt = ye.sibling);
        var Xe = I(v, ye, x[ze], A);
        if (Xe === null) {
          ye === null && (ye = Mt);
          break;
        }
        (e && ye && Xe.alternate === null && t(v, ye),
          (m = a(Xe, m, ze)),
          ve === null ? (re = Xe) : (ve.sibling = Xe),
          (ve = Xe),
          (ye = Mt));
      }
      if (ze === x.length) return (n(v, ye), ot && Cr(v, ze), re);
      if (ye === null) {
        for (; ze < x.length; ze++)
          ((ye = T(v, x[ze], A)),
            ye !== null &&
              ((m = a(ye, m, ze)),
              ve === null ? (re = ye) : (ve.sibling = ye),
              (ve = ye)));
        return (ot && Cr(v, ze), re);
      }
      for (ye = r(v, ye); ze < x.length; ze++)
        ((Mt = G(ye, v, ze, x[ze], A)),
          Mt !== null &&
            (e &&
              Mt.alternate !== null &&
              ye.delete(Mt.key === null ? ze : Mt.key),
            (m = a(Mt, m, ze)),
            ve === null ? (re = Mt) : (ve.sibling = Mt),
            (ve = Mt)));
      return (
        e &&
          ye.forEach(function (hr) {
            return t(v, hr);
          }),
        ot && Cr(v, ze),
        re
      );
    }
    function ee(v, m, x, A) {
      var re = w(x);
      if (typeof re != "function") throw Error(o(150));
      if (((x = re.call(x)), x == null)) throw Error(o(151));
      for (
        var ve = (re = null), ye = m, ze = (m = 0), Mt = null, Xe = x.next();
        ye !== null && !Xe.done;
        ze++, Xe = x.next()
      ) {
        ye.index > ze ? ((Mt = ye), (ye = null)) : (Mt = ye.sibling);
        var hr = I(v, ye, Xe.value, A);
        if (hr === null) {
          ye === null && (ye = Mt);
          break;
        }
        (e && ye && hr.alternate === null && t(v, ye),
          (m = a(hr, m, ze)),
          ve === null ? (re = hr) : (ve.sibling = hr),
          (ve = hr),
          (ye = Mt));
      }
      if (Xe.done) return (n(v, ye), ot && Cr(v, ze), re);
      if (ye === null) {
        for (; !Xe.done; ze++, Xe = x.next())
          ((Xe = T(v, Xe.value, A)),
            Xe !== null &&
              ((m = a(Xe, m, ze)),
              ve === null ? (re = Xe) : (ve.sibling = Xe),
              (ve = Xe)));
        return (ot && Cr(v, ze), re);
      }
      for (ye = r(v, ye); !Xe.done; ze++, Xe = x.next())
        ((Xe = G(ye, v, ze, Xe.value, A)),
          Xe !== null &&
            (e &&
              Xe.alternate !== null &&
              ye.delete(Xe.key === null ? ze : Xe.key),
            (m = a(Xe, m, ze)),
            ve === null ? (re = Xe) : (ve.sibling = Xe),
            (ve = Xe)));
      return (
        e &&
          ye.forEach(function (ff) {
            return t(v, ff);
          }),
        ot && Cr(v, ze),
        re
      );
    }
    function xt(v, m, x, A) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === se &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case Z:
            e: {
              for (var re = x.key, ve = m; ve !== null; ) {
                if (ve.key === re) {
                  if (((re = x.type), re === se)) {
                    if (ve.tag === 7) {
                      (n(v, ve.sibling),
                        (m = l(ve, x.props.children)),
                        (m.return = v),
                        (v = m));
                      break e;
                    }
                  } else if (
                    ve.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === $e &&
                      Oo(re) === ve.type)
                  ) {
                    (n(v, ve.sibling),
                      (m = l(ve, x.props)),
                      (m.ref = Ll(v, ve, x)),
                      (m.return = v),
                      (v = m));
                    break e;
                  }
                  n(v, ve);
                  break;
                } else t(v, ve);
                ve = ve.sibling;
              }
              x.type === se
                ? ((m = Ir(x.props.children, v.mode, A, x.key)),
                  (m.return = v),
                  (v = m))
                : ((A = Wi(x.type, x.key, x.props, null, v.mode, A)),
                  (A.ref = Ll(v, m, x)),
                  (A.return = v),
                  (v = A));
            }
            return s(v);
          case ne:
            e: {
              for (ve = x.key; m !== null; ) {
                if (m.key === ve)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === x.containerInfo &&
                    m.stateNode.implementation === x.implementation
                  ) {
                    (n(v, m.sibling),
                      (m = l(m, x.children || [])),
                      (m.return = v),
                      (v = m));
                    break e;
                  } else {
                    n(v, m);
                    break;
                  }
                else t(v, m);
                m = m.sibling;
              }
              ((m = Es(x, v.mode, A)), (m.return = v), (v = m));
            }
            return s(v);
          case $e:
            return ((ve = x._init), xt(v, m, ve(x._payload), A));
        }
        if (we(x)) return J(v, m, x, A);
        if (w(x)) return ee(v, m, x, A);
        wi(v, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          m !== null && m.tag === 6
            ? (n(v, m.sibling), (m = l(m, x)), (m.return = v), (v = m))
            : (n(v, m), (m = Cs(x, v.mode, A)), (m.return = v), (v = m)),
          s(v))
        : n(v, m);
    }
    return xt;
  }
  var tl = Ao(!0),
    Fo = Ao(!1),
    ki = rr(null),
    Si = null,
    nl = null,
    Da = null;
  function Ta() {
    Da = nl = Si = null;
  }
  function Oa(e) {
    var t = ki.current;
    (it(ki), (e._currentValue = t));
  }
  function Aa(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function rl(e, t) {
    ((Si = e),
      (Da = nl = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Jt = !0), (e.firstContext = null)));
  }
  function hn(e) {
    var t = e._currentValue;
    if (Da !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), nl === null)) {
        if (Si === null) throw Error(o(308));
        ((nl = e), (Si.dependencies = { lanes: 0, firstContext: e }));
      } else nl = nl.next = e;
    return t;
  }
  var Er = null;
  function Fa(e) {
    Er === null ? (Er = [e]) : Er.push(e);
  }
  function Uo(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Fa(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Fn(e, r)
    );
  }
  function Fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var ar = !1;
  function Ua(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $o(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Un(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function sr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Qe & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Fn(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Fa(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Fn(e, n)
    );
  }
  function ji(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Q(e, n));
    }
  }
  function Bo(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (a === null ? (l = a = s) : (a = a.next = s), (n = n.next));
        } while (n !== null);
        a === null ? (l = a = t) : (a = a.next = t);
      } else l = a = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ni(e, t, n, r) {
    var l = e.updateQueue;
    ar = !1;
    var a = l.firstBaseUpdate,
      s = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var f = c,
        S = f.next;
      ((f.next = null), s === null ? (a = S) : (s.next = S), (s = f));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (c = R.lastBaseUpdate),
        c !== s &&
          (c === null ? (R.firstBaseUpdate = S) : (c.next = S),
          (R.lastBaseUpdate = f)));
    }
    if (a !== null) {
      var T = l.baseState;
      ((s = 0), (R = S = f = null), (c = a));
      do {
        var I = c.lane,
          G = c.eventTime;
        if ((r & I) === I) {
          R !== null &&
            (R = R.next =
              {
                eventTime: G,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var J = e,
              ee = c;
            switch (((I = t), (G = n), ee.tag)) {
              case 1:
                if (((J = ee.payload), typeof J == "function")) {
                  T = J.call(G, T, I);
                  break e;
                }
                T = J;
                break e;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = ee.payload),
                  (I = typeof J == "function" ? J.call(G, T, I) : J),
                  I == null)
                )
                  break e;
                T = M({}, T, I);
                break e;
              case 2:
                ar = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (I = l.effects),
            I === null ? (l.effects = [c]) : I.push(c));
        } else
          ((G = {
            eventTime: G,
            lane: I,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            R === null ? ((S = R = G), (f = T)) : (R = R.next = G),
            (s |= I));
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          ((I = c),
            (c = I.next),
            (I.next = null),
            (l.lastBaseUpdate = I),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (f = T),
        (l.baseState = f),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((s |= l.lane), (l = l.next));
        while (l !== t);
      } else a === null && (l.shared.lanes = 0);
      ((br |= s), (e.lanes = s), (e.memoizedState = T));
    }
  }
  function Ho(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(o(191, l));
          l.call(r);
        }
      }
  }
  var Il = {},
    zn = rr(Il),
    Rl = rr(Il),
    Dl = rr(Il);
  function Pr(e) {
    if (e === Il) throw Error(o(174));
    return e;
  }
  function $a(e, t) {
    switch ((nt(Dl, t), nt(Rl, e), nt(zn, Il), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : pt(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = pt(t, e)));
    }
    (it(zn), nt(zn, t));
  }
  function ll() {
    (it(zn), it(Rl), it(Dl));
  }
  function Wo(e) {
    Pr(Dl.current);
    var t = Pr(zn.current),
      n = pt(t, e.type);
    t !== n && (nt(Rl, e), nt(zn, n));
  }
  function Ba(e) {
    Rl.current === e && (it(zn), it(Rl));
  }
  var dt = rr(0);
  function Ci(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ha = [];
  function Wa() {
    for (var e = 0; e < Ha.length; e++)
      Ha[e]._workInProgressVersionPrimary = null;
    Ha.length = 0;
  }
  var Ei = te.ReactCurrentDispatcher,
    Va = te.ReactCurrentBatchConfig,
    zr = 0,
    ft = null,
    Et = null,
    bt = null,
    Pi = !1,
    Tl = !1,
    Ol = 0,
    Id = 0;
  function At() {
    throw Error(o(321));
  }
  function Ga(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!kn(e[n], t[n])) return !1;
    return !0;
  }
  function Qa(e, t, n, r, l, a) {
    if (
      ((zr = a),
      (ft = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ei.current = e === null || e.memoizedState === null ? Od : Ad),
      (e = n(r, l)),
      Tl)
    ) {
      a = 0;
      do {
        if (((Tl = !1), (Ol = 0), 25 <= a)) throw Error(o(301));
        ((a += 1),
          (bt = Et = null),
          (t.updateQueue = null),
          (Ei.current = Fd),
          (e = n(r, l)));
      } while (Tl);
    }
    if (
      ((Ei.current = _i),
      (t = Et !== null && Et.next !== null),
      (zr = 0),
      (bt = Et = ft = null),
      (Pi = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Ka() {
    var e = Ol !== 0;
    return ((Ol = 0), e);
  }
  function bn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (bt === null ? (ft.memoizedState = bt = e) : (bt = bt.next = e), bt);
  }
  function mn() {
    if (Et === null) {
      var e = ft.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Et.next;
    var t = bt === null ? ft.memoizedState : bt.next;
    if (t !== null) ((bt = t), (Et = e));
    else {
      if (e === null) throw Error(o(310));
      ((Et = e),
        (e = {
          memoizedState: Et.memoizedState,
          baseState: Et.baseState,
          baseQueue: Et.baseQueue,
          queue: Et.queue,
          next: null,
        }),
        bt === null ? (ft.memoizedState = bt = e) : (bt = bt.next = e));
    }
    return bt;
  }
  function Al(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xa(e) {
    var t = mn(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = Et,
      l = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (l !== null) {
        var s = l.next;
        ((l.next = a.next), (a.next = s));
      }
      ((r.baseQueue = l = a), (n.pending = null));
    }
    if (l !== null) {
      ((a = l.next), (r = r.baseState));
      var c = (s = null),
        f = null,
        S = a;
      do {
        var R = S.lane;
        if ((zr & R) === R)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action)));
        else {
          var T = {
            lane: R,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          (f === null ? ((c = f = T), (s = r)) : (f = f.next = T),
            (ft.lanes |= R),
            (br |= R));
        }
        S = S.next;
      } while (S !== null && S !== a);
      (f === null ? (s = r) : (f.next = c),
        kn(r, t.memoizedState) || (Jt = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = f),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((a = l.lane), (ft.lanes |= a), (br |= a), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ya(e) {
    var t = mn(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      a = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = (l = l.next);
      do ((a = e(a, s.action)), (s = s.next));
      while (s !== l);
      (kn(a, t.memoizedState) || (Jt = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, r];
  }
  function Vo() {}
  function Go(e, t) {
    var n = ft,
      r = mn(),
      l = t(),
      a = !kn(r.memoizedState, l);
    if (
      (a && ((r.memoizedState = l), (Jt = !0)),
      (r = r.queue),
      qa(Xo.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (bt !== null && bt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Fl(9, Ko.bind(null, n, r, l, t), void 0, null),
        _t === null)
      )
        throw Error(o(349));
      (zr & 30) !== 0 || Qo(n, t, l);
    }
    return l;
  }
  function Qo(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ft.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ft.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Ko(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Yo(t) && qo(e));
  }
  function Xo(e, t, n) {
    return n(function () {
      Yo(t) && qo(e);
    });
  }
  function Yo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kn(e, n);
    } catch {
      return !0;
    }
  }
  function qo(e) {
    var t = Fn(e, 1);
    t !== null && En(t, e, 1, -1);
  }
  function Jo(e) {
    var t = bn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Al,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Td.bind(null, ft, e)),
      [t.memoizedState, e]
    );
  }
  function Fl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ft.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ft.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Zo() {
    return mn().memoizedState;
  }
  function zi(e, t, n, r) {
    var l = bn();
    ((ft.flags |= e),
      (l.memoizedState = Fl(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function bi(e, t, n, r) {
    var l = mn();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Et !== null) {
      var s = Et.memoizedState;
      if (((a = s.destroy), r !== null && Ga(r, s.deps))) {
        l.memoizedState = Fl(t, n, a, r);
        return;
      }
    }
    ((ft.flags |= e), (l.memoizedState = Fl(1 | t, n, a, r)));
  }
  function eu(e, t) {
    return zi(8390656, 8, e, t);
  }
  function qa(e, t) {
    return bi(2048, 8, e, t);
  }
  function tu(e, t) {
    return bi(4, 2, e, t);
  }
  function nu(e, t) {
    return bi(4, 4, e, t);
  }
  function ru(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function lu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      bi(4, 4, ru.bind(null, t, e), n)
    );
  }
  function Ja() {}
  function iu(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ga(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function au(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ga(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function su(e, t, n) {
    return (zr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Jt = !0)), (e.memoizedState = n))
      : (kn(n, t) ||
          ((n = Yl()), (ft.lanes |= n), (br |= n), (e.baseState = !0)),
        t);
  }
  function Rd(e, t) {
    var n = ue;
    ((ue = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Va.transition;
    Va.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ue = n), (Va.transition = r));
    }
  }
  function ou() {
    return mn().memoizedState;
  }
  function Dd(e, t, n) {
    var r = dr(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      uu(e))
    )
      cu(t, n);
    else if (((n = Uo(e, t, n, r)), n !== null)) {
      var l = Qt();
      (En(n, e, r, l), du(n, t, r));
    }
  }
  function Td(e, t, n) {
    var r = dr(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (uu(e)) cu(t, l);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var s = t.lastRenderedState,
            c = a(s, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), kn(c, s))) {
            var f = t.interleaved;
            (f === null
              ? ((l.next = l), Fa(t))
              : ((l.next = f.next), (f.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Uo(e, t, l, r)),
        n !== null && ((l = Qt()), En(n, e, r, l), du(n, t, r)));
    }
  }
  function uu(e) {
    var t = e.alternate;
    return e === ft || (t !== null && t === ft);
  }
  function cu(e, t) {
    Tl = Pi = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function du(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Q(e, n));
    }
  }
  var _i = {
      readContext: hn,
      useCallback: At,
      useContext: At,
      useEffect: At,
      useImperativeHandle: At,
      useInsertionEffect: At,
      useLayoutEffect: At,
      useMemo: At,
      useReducer: At,
      useRef: At,
      useState: At,
      useDebugValue: At,
      useDeferredValue: At,
      useTransition: At,
      useMutableSource: At,
      useSyncExternalStore: At,
      useId: At,
      unstable_isNewReconciler: !1,
    },
    Od = {
      readContext: hn,
      useCallback: function (e, t) {
        return ((bn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: hn,
      useEffect: eu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          zi(4194308, 4, ru.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return zi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Dd.bind(null, ft, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = bn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Jo,
      useDebugValue: Ja,
      useDeferredValue: function (e) {
        return (bn().memoizedState = e);
      },
      useTransition: function () {
        var e = Jo(!1),
          t = e[0];
        return ((e = Rd.bind(null, e[1])), (bn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ft,
          l = bn();
        if (ot) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), _t === null)) throw Error(o(349));
          (zr & 30) !== 0 || Qo(r, t, n);
        }
        l.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (l.queue = a),
          eu(Xo.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          Fl(9, Ko.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bn(),
          t = _t.identifierPrefix;
        if (ot) {
          var n = An,
            r = On;
          ((n = (r & ~(1 << (32 - Tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ol++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Id++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ad = {
      readContext: hn,
      useCallback: iu,
      useContext: hn,
      useEffect: qa,
      useImperativeHandle: lu,
      useInsertionEffect: tu,
      useLayoutEffect: nu,
      useMemo: au,
      useReducer: Xa,
      useRef: Zo,
      useState: function () {
        return Xa(Al);
      },
      useDebugValue: Ja,
      useDeferredValue: function (e) {
        var t = mn();
        return su(t, Et.memoizedState, e);
      },
      useTransition: function () {
        var e = Xa(Al)[0],
          t = mn().memoizedState;
        return [e, t];
      },
      useMutableSource: Vo,
      useSyncExternalStore: Go,
      useId: ou,
      unstable_isNewReconciler: !1,
    },
    Fd = {
      readContext: hn,
      useCallback: iu,
      useContext: hn,
      useEffect: qa,
      useImperativeHandle: lu,
      useInsertionEffect: tu,
      useLayoutEffect: nu,
      useMemo: au,
      useReducer: Ya,
      useRef: Zo,
      useState: function () {
        return Ya(Al);
      },
      useDebugValue: Ja,
      useDeferredValue: function (e) {
        var t = mn();
        return Et === null ? (t.memoizedState = e) : su(t, Et.memoizedState, e);
      },
      useTransition: function () {
        var e = Ya(Al)[0],
          t = mn().memoizedState;
        return [e, t];
      },
      useMutableSource: Vo,
      useSyncExternalStore: Go,
      useId: ou,
      unstable_isNewReconciler: !1,
    };
  function jn(e, t) {
    if (e && e.defaultProps) {
      ((t = M({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Za(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Mi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ln(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qt(),
        l = dr(e),
        a = Un(r, l);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = sr(e, a, l)),
        t !== null && (En(t, e, l, r), ji(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Qt(),
        l = dr(e),
        a = Un(r, l);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = sr(e, a, l)),
        t !== null && (En(t, e, l, r), ji(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Qt(),
        r = dr(e),
        l = Un(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = sr(e, l, r)),
        t !== null && (En(t, e, r, n), ji(t, e, r)));
    },
  };
  function fu(e, t, n, r, l, a, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, a, s)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Cl(n, r) || !Cl(l, a)
          : !0
    );
  }
  function pu(e, t, n) {
    var r = !1,
      l = lr,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = hn(a))
        : ((l = qt(t) ? jr : Ot.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? qr(e, l) : lr)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Mi),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function hu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Mi.enqueueReplaceState(t, t.state, null));
  }
  function es(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ua(e));
    var a = t.contextType;
    (typeof a == "object" && a !== null
      ? (l.context = hn(a))
      : ((a = qt(t) ? jr : Ot.current), (l.context = qr(e, a))),
      (l.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (Za(e, t, a, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Mi.enqueueReplaceState(l, l.state, null),
        Ni(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function il(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += ce(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (a) {
      l =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ts(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ns(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ud = typeof WeakMap == "function" ? WeakMap : Map;
  function mu(e, t, n) {
    ((n = Un(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ai || ((Ai = !0), (vs = r)), ns(e, t));
      }),
      n
    );
  }
  function gu(e, t, n) {
    ((n = Un(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ns(e, t);
        }));
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          (ns(e, t),
            typeof r != "function" &&
              (ur === null ? (ur = new Set([this])) : ur.add(this)));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function vu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ud();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = ef.bind(null, e, t, n)), t.then(e, e));
  }
  function yu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Un(-1, 1)), (t.tag = 2), sr(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var $d = te.ReactCurrentOwner,
    Jt = !1;
  function Gt(e, t, n, r) {
    t.child = e === null ? Fo(t, null, n, r) : tl(t, e.child, n, r);
  }
  function wu(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return (
      rl(t, l),
      (r = Qa(e, t, n, r, a, l)),
      (n = Ka()),
      e !== null && !Jt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          $n(e, t, l))
        : (ot && n && _a(t), (t.flags |= 1), Gt(e, t, r, l), t.child)
    );
  }
  function ku(e, t, n, r, l) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !Ns(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Su(e, t, a, r, l))
        : ((e = Wi(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & l) === 0)) {
      var s = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Cl), n(s, r) && e.ref === t.ref)
      )
        return $n(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = pr(a, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Su(e, t, n, r, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Cl(a, r) && e.ref === t.ref)
        if (((Jt = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Jt = !0);
        else return ((t.lanes = e.lanes), $n(e, t, l));
    }
    return rs(e, t, n, r, l);
  }
  function ju(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          nt(sl, un),
          (un |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            nt(sl, un),
            (un |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = a !== null ? a.baseLanes : n),
          nt(sl, un),
          (un |= r));
      }
    else
      (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        nt(sl, un),
        (un |= r));
    return (Gt(e, t, l, n), t.child);
  }
  function Nu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function rs(e, t, n, r, l) {
    var a = qt(n) ? jr : Ot.current;
    return (
      (a = qr(t, a)),
      rl(t, l),
      (n = Qa(e, t, n, r, a, l)),
      (r = Ka()),
      e !== null && !Jt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          $n(e, t, l))
        : (ot && r && _a(t), (t.flags |= 1), Gt(e, t, n, l), t.child)
    );
  }
  function Cu(e, t, n, r, l) {
    if (qt(n)) {
      var a = !0;
      mi(t);
    } else a = !1;
    if ((rl(t, l), t.stateNode === null))
      (Ii(e, t), pu(t, n, r), es(t, n, r, l), (r = !0));
    else if (e === null) {
      var s = t.stateNode,
        c = t.memoizedProps;
      s.props = c;
      var f = s.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = hn(S))
        : ((S = qt(n) ? jr : Ot.current), (S = qr(t, S)));
      var R = n.getDerivedStateFromProps,
        T =
          typeof R == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      (T ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((c !== r || f !== S) && hu(t, s, r, S)),
        (ar = !1));
      var I = t.memoizedState;
      ((s.state = I),
        Ni(t, r, s, l),
        (f = t.memoizedState),
        c !== r || I !== f || Yt.current || ar
          ? (typeof R == "function" && (Za(t, n, R, r), (f = t.memoizedState)),
            (c = ar || fu(t, n, c, r, I, f, S))
              ? (T ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = f)),
            (s.props = r),
            (s.state = f),
            (s.context = S),
            (r = c))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((s = t.stateNode),
        $o(e, t),
        (c = t.memoizedProps),
        (S = t.type === t.elementType ? c : jn(t.type, c)),
        (s.props = S),
        (T = t.pendingProps),
        (I = s.context),
        (f = n.contextType),
        typeof f == "object" && f !== null
          ? (f = hn(f))
          : ((f = qt(n) ? jr : Ot.current), (f = qr(t, f))));
      var G = n.getDerivedStateFromProps;
      ((R =
        typeof G == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((c !== T || I !== f) && hu(t, s, r, f)),
        (ar = !1),
        (I = t.memoizedState),
        (s.state = I),
        Ni(t, r, s, l));
      var J = t.memoizedState;
      c !== T || I !== J || Yt.current || ar
        ? (typeof G == "function" && (Za(t, n, G, r), (J = t.memoizedState)),
          (S = ar || fu(t, n, S, r, I, J, f) || !1)
            ? (R ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, J, f),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, J, f)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (c === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = J)),
          (s.props = r),
          (s.state = J),
          (s.context = f),
          (r = S))
        : (typeof s.componentDidUpdate != "function" ||
            (c === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ls(e, t, n, r, a, l);
  }
  function ls(e, t, n, r, l, a) {
    Nu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return (l && _o(t, n, !1), $n(e, t, a));
    ((r = t.stateNode), ($d.current = t));
    var c =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = tl(t, e.child, null, a)), (t.child = tl(t, null, c, a)))
        : Gt(e, t, c, a),
      (t.memoizedState = r.state),
      l && _o(t, n, !0),
      t.child
    );
  }
  function Eu(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? zo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && zo(e, t.context, !1),
      $a(e, t.containerInfo));
  }
  function Pu(e, t, n, r, l) {
    return (el(), Ra(l), (t.flags |= 256), Gt(e, t, n, r), t.child);
  }
  var is = { dehydrated: null, treeContext: null, retryLane: 0 };
  function as(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function zu(e, t, n) {
    var r = t.pendingProps,
      l = dt.current,
      a = !1,
      s = (t.flags & 128) !== 0,
      c;
    if (
      ((c = s) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      nt(dt, l & 1),
      e === null)
    )
      return (
        Ia(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((s = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (s = { mode: "hidden", children: s }),
                (r & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = s))
                  : (a = Vi(s, r, 0, null)),
                (e = Ir(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = as(n)),
                (t.memoizedState = is),
                e)
              : ss(t, s))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return Bd(e, t, s, r, c, l, n);
    if (a) {
      ((a = r.fallback), (s = t.mode), (l = e.child), (c = l.sibling));
      var f = { mode: "hidden", children: r.children };
      return (
        (s & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = f),
            (t.deletions = null))
          : ((r = pr(l, f)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (a = pr(c, a)) : ((a = Ir(a, s, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? as(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (a.memoizedState = s),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = is),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = pr(a, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ss(e, t) {
    return (
      (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Li(e, t, n, r) {
    return (
      r !== null && Ra(r),
      tl(t, e.child, null, n),
      (e = ss(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bd(e, t, n, r, l, a, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ts(Error(o(422)))), Li(e, t, s, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = r.fallback),
            (l = t.mode),
            (r = Vi({ mode: "visible", children: r.children }, l, 0, null)),
            (a = Ir(a, l, s, null)),
            (a.flags |= 2),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (t.mode & 1) !== 0 && tl(t, e.child, null, s),
            (t.child.memoizedState = as(s)),
            (t.memoizedState = is),
            a);
    if ((t.mode & 1) === 0) return Li(e, t, s, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c),
        (a = Error(o(419))),
        (r = ts(a, r, void 0)),
        Li(e, t, s, r)
      );
    }
    if (((c = (s & e.childLanes) !== 0), Jt || c)) {
      if (((r = _t), r !== null)) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== a.retryLane &&
            ((a.retryLane = l), Fn(e, l), En(r, e, l, -1)));
      }
      return (js(), (r = ts(Error(o(421)))), Li(e, t, s, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = tf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (on = nr(l.nextSibling)),
        (sn = t),
        (ot = !0),
        (Sn = null),
        e !== null &&
          ((fn[pn++] = On),
          (fn[pn++] = An),
          (fn[pn++] = Nr),
          (On = e.id),
          (An = e.overflow),
          (Nr = t)),
        (t = ss(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Aa(e.return, t, n));
  }
  function os(e, t, n, r, l) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = l));
  }
  function _u(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      a = r.tail;
    if ((Gt(e, t, r.children, n), (r = dt.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
          else if (e.tag === 19) bu(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((nt(dt, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && Ci(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            os(t, !1, l, n, a));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Ci(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          os(t, !0, n, null, a);
          break;
        case "together":
          os(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ii(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $n(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (br |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = pr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = pr(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Hd(e, t, n) {
    switch (t.tag) {
      case 3:
        (Eu(t), el());
        break;
      case 5:
        Wo(t);
        break;
      case 1:
        qt(t.type) && mi(t);
        break;
      case 4:
        $a(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (nt(ki, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (nt(dt, dt.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? zu(e, t, n)
              : (nt(dt, dt.current & 1),
                (e = $n(e, t, n)),
                e !== null ? e.sibling : null);
        nt(dt, dt.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return _u(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          nt(dt, dt.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ju(e, t, n));
    }
    return $n(e, t, n);
  }
  var Mu, us, Lu, Iu;
  ((Mu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (us = function () {}),
    (Lu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Pr(zn.current));
        var a = null;
        switch (n) {
          case "input":
            ((l = nn(e, l)), (r = nn(e, r)), (a = []));
            break;
          case "select":
            ((l = M({}, l, { value: void 0 })),
              (r = M({}, r, { value: void 0 })),
              (a = []));
            break;
          case "textarea":
            ((l = be(e, l)), (r = be(e, r)), (a = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = fi);
        }
        Ne(n, r);
        var s;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var c = l[S];
              for (s in c) c.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (u.hasOwnProperty(S)
                  ? a || (a = [])
                  : (a = a || []).push(S, null));
        for (S in r) {
          var f = r[S];
          if (
            ((c = l?.[S]),
            r.hasOwnProperty(S) && f !== c && (f != null || c != null))
          )
            if (S === "style")
              if (c) {
                for (s in c)
                  !c.hasOwnProperty(s) ||
                    (f && f.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in f)
                  f.hasOwnProperty(s) &&
                    c[s] !== f[s] &&
                    (n || (n = {}), (n[s] = f[s]));
              } else (n || (a || (a = []), a.push(S, n)), (n = f));
            else
              S === "dangerouslySetInnerHTML"
                ? ((f = f ? f.__html : void 0),
                  (c = c ? c.__html : void 0),
                  f != null && c !== f && (a = a || []).push(S, f))
                : S === "children"
                  ? (typeof f != "string" && typeof f != "number") ||
                    (a = a || []).push(S, "" + f)
                  : S !== "suppressContentEditableWarning" &&
                    S !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(S)
                      ? (f != null && S === "onScroll" && lt("scroll", e),
                        a || c === f || (a = []))
                      : (a = a || []).push(S, f));
        }
        n && (a = a || []).push("style", n);
        var S = a;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Iu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Ul(e, t) {
    if (!ot)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Wd(e, t, n) {
    var r = t.pendingProps;
    switch ((Ma(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ft(t), null);
      case 1:
        return (qt(t.type) && hi(), Ft(t), null);
      case 3:
        return (
          (r = t.stateNode),
          ll(),
          it(Yt),
          it(Ot),
          Wa(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (xi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sn !== null && (ws(Sn), (Sn = null)))),
          us(e, t),
          Ft(t),
          null
        );
      case 5:
        Ba(t);
        var l = Pr(Dl.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Lu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return (Ft(t), null);
          }
          if (((e = Pr(zn.current)), xi(t))) {
            ((r = t.stateNode), (n = t.type));
            var a = t.memoizedProps;
            switch (((r[Pn] = t), (r[_l] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (lt("cancel", r), lt("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                lt("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pl.length; l++) lt(Pl[l], r);
                break;
              case "source":
                lt("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (lt("error", r), lt("load", r));
                break;
              case "details":
                lt("toggle", r);
                break;
              case "input":
                (Ze(r, a), lt("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!a.multiple }),
                  lt("invalid", r));
                break;
              case "textarea":
                (Ge(r, a), lt("invalid", r));
            }
            (Ne(n, a), (l = null));
            for (var s in a)
              if (a.hasOwnProperty(s)) {
                var c = a[s];
                s === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (a.suppressHydrationWarning !== !0 &&
                        di(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (a.suppressHydrationWarning !== !0 &&
                        di(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : u.hasOwnProperty(s) &&
                    c != null &&
                    s === "onScroll" &&
                    lt("scroll", r);
              }
            switch (n) {
              case "input":
                (at(r), k(r, a, !0));
                break;
              case "textarea":
                (at(r), He(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = fi);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((s = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = tt(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = s.createElement(n, { is: r.is }))
                    : ((e = s.createElement(n)),
                      n === "select" &&
                        ((s = e),
                        r.multiple
                          ? (s.multiple = !0)
                          : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Pn] = t),
              (e[_l] = r),
              Mu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((s = je(n, r)), n)) {
                case "dialog":
                  (lt("cancel", e), lt("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (lt("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Pl.length; l++) lt(Pl[l], e);
                  l = r;
                  break;
                case "source":
                  (lt("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (lt("error", e), lt("load", e), (l = r));
                  break;
                case "details":
                  (lt("toggle", e), (l = r));
                  break;
                case "input":
                  (Ze(e, r), (l = nn(e, r)), lt("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = M({}, r, { value: void 0 })),
                    lt("invalid", e));
                  break;
                case "textarea":
                  (Ge(e, r), (l = be(e, r)), lt("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ne(n, l), (c = l));
              for (a in c)
                if (c.hasOwnProperty(a)) {
                  var f = c[a];
                  a === "style"
                    ? B(e, f)
                    : a === "dangerouslySetInnerHTML"
                      ? ((f = f ? f.__html : void 0), f != null && Ie(e, f))
                      : a === "children"
                        ? typeof f == "string"
                          ? (n !== "textarea" || f !== "") && We(e, f)
                          : typeof f == "number" && We(e, "" + f)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          a !== "autoFocus" &&
                          (u.hasOwnProperty(a)
                            ? f != null && a === "onScroll" && lt("scroll", e)
                            : f != null && xe(e, a, f, s));
                }
              switch (n) {
                case "input":
                  (at(e), k(e, r, !1));
                  break;
                case "textarea":
                  (at(e), He(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + he(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? ke(e, !!r.multiple, a, !1)
                      : r.defaultValue != null &&
                        ke(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = fi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ft(t), null);
      case 6:
        if (e && t.stateNode != null) Iu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = Pr(Dl.current)), Pr(zn.current), xi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Pn] = t),
              (a = r.nodeValue !== n) && ((e = sn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  di(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    di(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Pn] = t),
              (t.stateNode = r));
        }
        return (Ft(t), null);
      case 13:
        if (
          (it(dt),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ot && on !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (To(), el(), (t.flags |= 98560), (a = !1));
          else if (((a = xi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(o(317));
              a[Pn] = t;
            } else
              (el(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ft(t), (a = !1));
          } else (Sn !== null && (ws(Sn), (Sn = null)), (a = !0));
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (dt.current & 1) !== 0
                  ? Pt === 0 && (Pt = 3)
                  : js())),
            t.updateQueue !== null && (t.flags |= 4),
            Ft(t),
            null);
      case 4:
        return (
          ll(),
          us(e, t),
          e === null && zl(t.stateNode.containerInfo),
          Ft(t),
          null
        );
      case 10:
        return (Oa(t.type._context), Ft(t), null);
      case 17:
        return (qt(t.type) && hi(), Ft(t), null);
      case 19:
        if ((it(dt), (a = t.memoizedState), a === null)) return (Ft(t), null);
        if (((r = (t.flags & 128) !== 0), (s = a.rendering), s === null))
          if (r) Ul(a, !1);
          else {
            if (Pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = Ci(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Ul(a, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    ((a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (s = a.alternate),
                      s === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = s.childLanes),
                          (a.lanes = s.lanes),
                          (a.child = s.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = s.memoizedProps),
                          (a.memoizedState = s.memoizedState),
                          (a.updateQueue = s.updateQueue),
                          (a.type = s.type),
                          (e = s.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (nt(dt, (dt.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Ye() > ol &&
              ((t.flags |= 128), (r = !0), Ul(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ci(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Ul(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !s.alternate &&
                  !ot)
              )
                return (Ft(t), null);
            } else
              2 * Ye() - a.renderingStartTime > ol &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Ul(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = a.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (a.last = s));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Ye()),
            (t.sibling = null),
            (n = dt.current),
            nt(dt, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ft(t), null);
      case 22:
      case 23:
        return (
          Ss(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (un & 1073741824) !== 0 &&
              (Ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ft(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Vd(e, t) {
    switch ((Ma(t), t.tag)) {
      case 1:
        return (
          qt(t.type) && hi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ll(),
          it(Yt),
          it(Ot),
          Wa(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Ba(t), null);
      case 13:
        if (
          (it(dt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          el();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (it(dt), null);
      case 4:
        return (ll(), null);
      case 10:
        return (Oa(t.type._context), null);
      case 22:
      case 23:
        return (Ss(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ri = !1,
    Ut = !1,
    Gd = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function al(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          gt(e, t, r);
        }
      else n.current = null;
  }
  function cs(e, t, n) {
    try {
      n();
    } catch (r) {
      gt(e, t, r);
    }
  }
  var Ru = !1;
  function Qd(e, t) {
    if (((Sa = ei), (e = fo()), ha(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              c = -1,
              f = -1,
              S = 0,
              R = 0,
              T = e,
              I = null;
            t: for (;;) {
              for (
                var G;
                T !== n || (l !== 0 && T.nodeType !== 3) || (c = s + l),
                  T !== a || (r !== 0 && T.nodeType !== 3) || (f = s + r),
                  T.nodeType === 3 && (s += T.nodeValue.length),
                  (G = T.firstChild) !== null;

              )
                ((I = T), (T = G));
              for (;;) {
                if (T === e) break t;
                if (
                  (I === n && ++S === l && (c = s),
                  I === a && ++R === r && (f = s),
                  (G = T.nextSibling) !== null)
                )
                  break;
                ((T = I), (I = T.parentNode));
              }
              T = G;
            }
            n = c === -1 || f === -1 ? null : { start: c, end: f };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ja = { focusedElem: e, selectionRange: n }, ei = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (K = e));
      else
        for (; K !== null; ) {
          t = K;
          try {
            var J = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ee = J.memoizedProps,
                      xt = J.memoizedState,
                      v = t.stateNode,
                      m = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ee : jn(t.type, ee),
                        xt,
                      );
                    v.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var x = t.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (A) {
            gt(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (K = e));
            break;
          }
          K = t.return;
        }
    return ((J = Ru), (Ru = !1), J);
  }
  function $l(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var a = l.destroy;
          ((l.destroy = void 0), a !== void 0 && cs(t, n, a));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Di(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ds(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Du(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Du(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Pn],
          delete t[_l],
          delete t[Pa],
          delete t[bd],
          delete t[_d])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Tu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ou(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = fi)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (fs(e, t, n), e = e.sibling; e !== null; )
        (fs(e, t, n), (e = e.sibling));
  }
  function ps(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ps(e, t, n), e = e.sibling; e !== null; )
        (ps(e, t, n), (e = e.sibling));
  }
  var It = null,
    Nn = !1;
  function or(e, t, n) {
    for (n = n.child; n !== null; ) (Au(e, t, n), (n = n.sibling));
  }
  function Au(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Qn, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ut || al(n, t);
      case 6:
        var r = It,
          l = Nn;
        ((It = null),
          or(e, t, n),
          (It = r),
          (Nn = l),
          It !== null &&
            (Nn
              ? ((e = It),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : It.removeChild(n.stateNode)));
        break;
      case 18:
        It !== null &&
          (Nn
            ? ((e = It),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ea(e.parentNode, n)
                : e.nodeType === 1 && Ea(e, n),
              xl(e))
            : Ea(It, n.stateNode));
        break;
      case 4:
        ((r = It),
          (l = Nn),
          (It = n.stateNode.containerInfo),
          (Nn = !0),
          or(e, t, n),
          (It = r),
          (Nn = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ut &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var a = l,
              s = a.destroy;
            ((a = a.tag),
              s !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && cs(n, t, s),
              (l = l.next));
          } while (l !== r);
        }
        or(e, t, n);
        break;
      case 1:
        if (
          !Ut &&
          (al(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (c) {
            gt(n, t, c);
          }
        or(e, t, n);
        break;
      case 21:
        or(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ut = (r = Ut) || n.memoizedState !== null), or(e, t, n), (Ut = r))
          : or(e, t, n);
        break;
      default:
        or(e, t, n);
    }
  }
  function Fu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Gd()),
        t.forEach(function (r) {
          var l = nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function Cn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var a = e,
            s = t,
            c = s;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                ((It = c.stateNode), (Nn = !1));
                break e;
              case 3:
                ((It = c.stateNode.containerInfo), (Nn = !0));
                break e;
              case 4:
                ((It = c.stateNode.containerInfo), (Nn = !0));
                break e;
            }
            c = c.return;
          }
          if (It === null) throw Error(o(160));
          (Au(a, s, l), (It = null), (Nn = !1));
          var f = l.alternate;
          (f !== null && (f.return = null), (l.return = null));
        } catch (S) {
          gt(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Uu(t, e), (t = t.sibling));
  }
  function Uu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Cn(t, e), _n(e), r & 4)) {
          try {
            ($l(3, e, e.return), Di(3, e));
          } catch (ee) {
            gt(e, e.return, ee);
          }
          try {
            $l(5, e, e.return);
          } catch (ee) {
            gt(e, e.return, ee);
          }
        }
        break;
      case 1:
        (Cn(t, e), _n(e), r & 512 && n !== null && al(n, n.return));
        break;
      case 5:
        if (
          (Cn(t, e),
          _n(e),
          r & 512 && n !== null && al(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            We(l, "");
          } catch (ee) {
            gt(e, e.return, ee);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var a = e.memoizedProps,
            s = n !== null ? n.memoizedProps : a,
            c = e.type,
            f = e.updateQueue;
          if (((e.updateQueue = null), f !== null))
            try {
              (c === "input" &&
                a.type === "radio" &&
                a.name != null &&
                $t(l, a),
                je(c, s));
              var S = je(c, a);
              for (s = 0; s < f.length; s += 2) {
                var R = f[s],
                  T = f[s + 1];
                R === "style"
                  ? B(l, T)
                  : R === "dangerouslySetInnerHTML"
                    ? Ie(l, T)
                    : R === "children"
                      ? We(l, T)
                      : xe(l, R, T, S);
              }
              switch (c) {
                case "input":
                  Bt(l, a);
                  break;
                case "textarea":
                  W(l, a);
                  break;
                case "select":
                  var I = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!a.multiple;
                  var G = a.value;
                  G != null
                    ? ke(l, !!a.multiple, G, !1)
                    : I !== !!a.multiple &&
                      (a.defaultValue != null
                        ? ke(l, !!a.multiple, a.defaultValue, !0)
                        : ke(l, !!a.multiple, a.multiple ? [] : "", !1));
              }
              l[_l] = a;
            } catch (ee) {
              gt(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Cn(t, e), _n(e), r & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.stateNode), (a = e.memoizedProps));
          try {
            l.nodeValue = a;
          } catch (ee) {
            gt(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Cn(t, e), _n(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            xl(t.containerInfo);
          } catch (ee) {
            gt(e, e.return, ee);
          }
        break;
      case 4:
        (Cn(t, e), _n(e));
        break;
      case 13:
        (Cn(t, e),
          _n(e),
          (l = e.child),
          l.flags & 8192 &&
            ((a = l.memoizedState !== null),
            (l.stateNode.isHidden = a),
            !a ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (gs = Ye())),
          r & 4 && Fu(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ut = (S = Ut) || R), Cn(t, e), (Ut = S)) : Cn(t, e),
          _n(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !R && (e.mode & 1) !== 0)
          )
            for (K = e, R = e.child; R !== null; ) {
              for (T = K = R; K !== null; ) {
                switch (((I = K), (G = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $l(4, I, I.return);
                    break;
                  case 1:
                    al(I, I.return);
                    var J = I.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      ((r = I), (n = I.return));
                      try {
                        ((t = r),
                          (J.props = t.memoizedProps),
                          (J.state = t.memoizedState),
                          J.componentWillUnmount());
                      } catch (ee) {
                        gt(r, n, ee);
                      }
                    }
                    break;
                  case 5:
                    al(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Hu(T);
                      continue;
                    }
                }
                G !== null ? ((G.return = I), (K = G)) : Hu(T);
              }
              R = R.sibling;
            }
          e: for (R = null, T = e; ; ) {
            if (T.tag === 5) {
              if (R === null) {
                R = T;
                try {
                  ((l = T.stateNode),
                    S
                      ? ((a = l.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((c = T.stateNode),
                        (f = T.memoizedProps.style),
                        (s =
                          f != null && f.hasOwnProperty("display")
                            ? f.display
                            : null),
                        (c.style.display = P("display", s))));
                } catch (ee) {
                  gt(e, e.return, ee);
                }
              }
            } else if (T.tag === 6) {
              if (R === null)
                try {
                  T.stateNode.nodeValue = S ? "" : T.memoizedProps;
                } catch (ee) {
                  gt(e, e.return, ee);
                }
            } else if (
              ((T.tag !== 22 && T.tag !== 23) ||
                T.memoizedState === null ||
                T === e) &&
              T.child !== null
            ) {
              ((T.child.return = T), (T = T.child));
              continue;
            }
            if (T === e) break e;
            for (; T.sibling === null; ) {
              if (T.return === null || T.return === e) break e;
              (R === T && (R = null), (T = T.return));
            }
            (R === T && (R = null),
              (T.sibling.return = T.return),
              (T = T.sibling));
          }
        }
        break;
      case 19:
        (Cn(t, e), _n(e), r & 4 && Fu(e));
        break;
      case 21:
        break;
      default:
        (Cn(t, e), _n(e));
    }
  }
  function _n(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Tu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (We(l, ""), (r.flags &= -33));
            var a = Ou(e);
            ps(e, a, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              c = Ou(e);
            fs(e, c, s);
            break;
          default:
            throw Error(o(161));
        }
      } catch (f) {
        gt(e, e.return, f);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kd(e, t, n) {
    ((K = e), $u(e));
  }
  function $u(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var l = K,
        a = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || Ri;
        if (!s) {
          var c = l.alternate,
            f = (c !== null && c.memoizedState !== null) || Ut;
          c = Ri;
          var S = Ut;
          if (((Ri = s), (Ut = f) && !S))
            for (K = l; K !== null; )
              ((s = K),
                (f = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Wu(l)
                  : f !== null
                    ? ((f.return = s), (K = f))
                    : Wu(l));
          for (; a !== null; ) ((K = a), $u(a), (a = a.sibling));
          ((K = l), (Ri = c), (Ut = S));
        }
        Bu(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = l), (K = a))
          : Bu(e);
    }
  }
  function Bu(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ut || Di(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ut)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : jn(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var a = t.updateQueue;
                a !== null && Ho(t, a, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ho(t, s, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var S = t.alternate;
                  if (S !== null) {
                    var R = S.memoizedState;
                    if (R !== null) {
                      var T = R.dehydrated;
                      T !== null && xl(T);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Ut || (t.flags & 512 && ds(t));
        } catch (I) {
          gt(t, t.return, I);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (K = n));
        break;
      }
      K = t.return;
    }
  }
  function Hu(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (K = n));
        break;
      }
      K = t.return;
    }
  }
  function Wu(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Di(4, t);
            } catch (f) {
              gt(t, n, f);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (f) {
                gt(t, l, f);
              }
            }
            var a = t.return;
            try {
              ds(t);
            } catch (f) {
              gt(t, a, f);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ds(t);
            } catch (f) {
              gt(t, s, f);
            }
        }
      } catch (f) {
        gt(t, t.return, f);
      }
      if (t === e) {
        K = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        ((c.return = t.return), (K = c));
        break;
      }
      K = t.return;
    }
  }
  var Xd = Math.ceil,
    Ti = te.ReactCurrentDispatcher,
    hs = te.ReactCurrentOwner,
    gn = te.ReactCurrentBatchConfig,
    Qe = 0,
    _t = null,
    kt = null,
    Rt = 0,
    un = 0,
    sl = rr(0),
    Pt = 0,
    Bl = null,
    br = 0,
    Oi = 0,
    ms = 0,
    Hl = null,
    Zt = null,
    gs = 0,
    ol = 1 / 0,
    Bn = null,
    Ai = !1,
    vs = null,
    ur = null,
    Fi = !1,
    cr = null,
    Ui = 0,
    Wl = 0,
    ys = null,
    $i = -1,
    Bi = 0;
  function Qt() {
    return (Qe & 6) !== 0 ? Ye() : $i !== -1 ? $i : ($i = Ye());
  }
  function dr(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Qe & 2) !== 0 && Rt !== 0
        ? Rt & -Rt
        : Ld.transition !== null
          ? (Bi === 0 && (Bi = Yl()), Bi)
          : ((e = ue),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
            e);
  }
  function En(e, t, n, r) {
    if (50 < Wl) throw ((Wl = 0), (ys = null), Error(o(185)));
    (b(e, n, r),
      ((Qe & 2) === 0 || e !== _t) &&
        (e === _t && ((Qe & 2) === 0 && (Oi |= n), Pt === 4 && fr(e, Rt)),
        en(e, r),
        n === 1 &&
          Qe === 0 &&
          (t.mode & 1) === 0 &&
          ((ol = Ye() + 500), gi && ir())));
  }
  function en(e, t) {
    var n = e.callbackNode;
    na(e, t);
    var r = Ur(e, e === _t ? Rt : 0);
    if (r === 0)
      (n !== null && Tr(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Tr(n), t === 1))
        (e.tag === 0 ? Md(Gu.bind(null, e)) : Mo(Gu.bind(null, e)),
          Pd(function () {
            (Qe & 6) === 0 && ir();
          }),
          (n = null));
      else {
        switch (mt(r)) {
          case 1:
            n = Vn;
            break;
          case 4:
            n = xr;
            break;
          case 16:
            n = Ct;
            break;
          case 536870912:
            n = Gn;
            break;
          default:
            n = Ct;
        }
        n = ec(n, Vu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Vu(e, t) {
    if ((($i = -1), (Bi = 0), (Qe & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (ul() && e.callbackNode !== n) return null;
    var r = Ur(e, e === _t ? Rt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Hi(e, r);
    else {
      t = r;
      var l = Qe;
      Qe |= 2;
      var a = Ku();
      (_t !== e || Rt !== t) && ((Bn = null), (ol = Ye() + 500), Mr(e, t));
      do
        try {
          Jd();
          break;
        } catch (c) {
          Qu(e, c);
        }
      while (!0);
      (Ta(),
        (Ti.current = a),
        (Qe = l),
        kt !== null ? (t = 0) : ((_t = null), (Rt = 0), (t = Pt)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = pl(e)), l !== 0 && ((r = l), (t = xs(e, l)))),
        t === 1)
      )
        throw ((n = Bl), Mr(e, 0), fr(e, r), en(e, Ye()), n);
      if (t === 6) fr(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Yd(l) &&
            ((t = Hi(e, r)),
            t === 2 && ((a = pl(e)), a !== 0 && ((r = a), (t = xs(e, a)))),
            t === 1))
        )
          throw ((n = Bl), Mr(e, 0), fr(e, r), en(e, Ye()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Lr(e, Zt, Bn);
            break;
          case 3:
            if (
              (fr(e, r),
              (r & 130023424) === r && ((t = gs + 500 - Ye()), 10 < t))
            ) {
              if (Ur(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Qt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Ca(Lr.bind(null, e, Zt, Bn), t);
              break;
            }
            Lr(e, Zt, Bn);
            break;
          case 4:
            if ((fr(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - Tt(r);
              ((a = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~a));
            }
            if (
              ((r = l),
              (r = Ye() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Xd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Ca(Lr.bind(null, e, Zt, Bn), r);
              break;
            }
            Lr(e, Zt, Bn);
            break;
          case 5:
            Lr(e, Zt, Bn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (en(e, Ye()), e.callbackNode === n ? Vu.bind(null, e) : null);
  }
  function xs(e, t) {
    var n = Hl;
    return (
      e.current.memoizedState.isDehydrated && (Mr(e, t).flags |= 256),
      (e = Hi(e, t)),
      e !== 2 && ((t = Zt), (Zt = n), t !== null && ws(t)),
      e
    );
  }
  function ws(e) {
    Zt === null ? (Zt = e) : Zt.push.apply(Zt, e);
  }
  function Yd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              a = l.getSnapshot;
            l = l.value;
            try {
              if (!kn(a(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function fr(e, t) {
    for (
      t &= ~ms,
        t &= ~Oi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Gu(e) {
    if ((Qe & 6) !== 0) throw Error(o(327));
    ul();
    var t = Ur(e, 0);
    if ((t & 1) === 0) return (en(e, Ye()), null);
    var n = Hi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = pl(e);
      r !== 0 && ((t = r), (n = xs(e, r)));
    }
    if (n === 1) throw ((n = Bl), Mr(e, 0), fr(e, t), en(e, Ye()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Lr(e, Zt, Bn),
      en(e, Ye()),
      null
    );
  }
  function ks(e, t) {
    var n = Qe;
    Qe |= 1;
    try {
      return e(t);
    } finally {
      ((Qe = n), Qe === 0 && ((ol = Ye() + 500), gi && ir()));
    }
  }
  function _r(e) {
    cr !== null && cr.tag === 0 && (Qe & 6) === 0 && ul();
    var t = Qe;
    Qe |= 1;
    var n = gn.transition,
      r = ue;
    try {
      if (((gn.transition = null), (ue = 1), e)) return e();
    } finally {
      ((ue = r), (gn.transition = n), (Qe = t), (Qe & 6) === 0 && ir());
    }
  }
  function Ss() {
    ((un = sl.current), it(sl));
  }
  function Mr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Ed(n)), kt !== null))
      for (n = kt.return; n !== null; ) {
        var r = n;
        switch ((Ma(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && hi());
            break;
          case 3:
            (ll(), it(Yt), it(Ot), Wa());
            break;
          case 5:
            Ba(r);
            break;
          case 4:
            ll();
            break;
          case 13:
            it(dt);
            break;
          case 19:
            it(dt);
            break;
          case 10:
            Oa(r.type._context);
            break;
          case 22:
          case 23:
            Ss();
        }
        n = n.return;
      }
    if (
      ((_t = e),
      (kt = e = pr(e.current, null)),
      (Rt = un = t),
      (Pt = 0),
      (Bl = null),
      (ms = Oi = br = 0),
      (Zt = Hl = null),
      Er !== null)
    ) {
      for (t = 0; t < Er.length; t++)
        if (((n = Er[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            a = n.pending;
          if (a !== null) {
            var s = a.next;
            ((a.next = l), (r.next = s));
          }
          n.pending = r;
        }
      Er = null;
    }
    return e;
  }
  function Qu(e, t) {
    do {
      var n = kt;
      try {
        if ((Ta(), (Ei.current = _i), Pi)) {
          for (var r = ft.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Pi = !1;
        }
        if (
          ((zr = 0),
          (bt = Et = ft = null),
          (Tl = !1),
          (Ol = 0),
          (hs.current = null),
          n === null || n.return === null)
        ) {
          ((Pt = 1), (Bl = t), (kt = null));
          break;
        }
        e: {
          var a = e,
            s = n.return,
            c = n,
            f = t;
          if (
            ((t = Rt),
            (c.flags |= 32768),
            f !== null && typeof f == "object" && typeof f.then == "function")
          ) {
            var S = f,
              R = c,
              T = R.tag;
            if ((R.mode & 1) === 0 && (T === 0 || T === 11 || T === 15)) {
              var I = R.alternate;
              I
                ? ((R.updateQueue = I.updateQueue),
                  (R.memoizedState = I.memoizedState),
                  (R.lanes = I.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var G = yu(s);
            if (G !== null) {
              ((G.flags &= -257),
                xu(G, s, c, a, t),
                G.mode & 1 && vu(a, S, t),
                (t = G),
                (f = S));
              var J = t.updateQueue;
              if (J === null) {
                var ee = new Set();
                (ee.add(f), (t.updateQueue = ee));
              } else J.add(f);
              break e;
            } else {
              if ((t & 1) === 0) {
                (vu(a, S, t), js());
                break e;
              }
              f = Error(o(426));
            }
          } else if (ot && c.mode & 1) {
            var xt = yu(s);
            if (xt !== null) {
              ((xt.flags & 65536) === 0 && (xt.flags |= 256),
                xu(xt, s, c, a, t),
                Ra(il(f, c)));
              break e;
            }
          }
          ((a = f = il(f, c)),
            Pt !== 4 && (Pt = 2),
            Hl === null ? (Hl = [a]) : Hl.push(a),
            (a = s));
          do {
            switch (a.tag) {
              case 3:
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var v = mu(a, f, t);
                Bo(a, v);
                break e;
              case 1:
                c = f;
                var m = a.type,
                  x = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (ur === null || !ur.has(x))))
                ) {
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var A = gu(a, c, t);
                  Bo(a, A);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Yu(n);
      } catch (re) {
        ((t = re), kt === n && n !== null && (kt = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ku() {
    var e = Ti.current;
    return ((Ti.current = _i), e === null ? _i : e);
  }
  function js() {
    ((Pt === 0 || Pt === 3 || Pt === 2) && (Pt = 4),
      _t === null ||
        ((br & 268435455) === 0 && (Oi & 268435455) === 0) ||
        fr(_t, Rt));
  }
  function Hi(e, t) {
    var n = Qe;
    Qe |= 2;
    var r = Ku();
    (_t !== e || Rt !== t) && ((Bn = null), Mr(e, t));
    do
      try {
        qd();
        break;
      } catch (l) {
        Qu(e, l);
      }
    while (!0);
    if ((Ta(), (Qe = n), (Ti.current = r), kt !== null)) throw Error(o(261));
    return ((_t = null), (Rt = 0), Pt);
  }
  function qd() {
    for (; kt !== null; ) Xu(kt);
  }
  function Jd() {
    for (; kt !== null && !dl(); ) Xu(kt);
  }
  function Xu(e) {
    var t = Zu(e.alternate, e, un);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Yu(e) : (kt = t),
      (hs.current = null));
  }
  function Yu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Wd(n, t, un)), n !== null)) {
          kt = n;
          return;
        }
      } else {
        if (((n = Vd(n, t)), n !== null)) {
          ((n.flags &= 32767), (kt = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Pt = 6), (kt = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        kt = t;
        return;
      }
      kt = t = e;
    } while (t !== null);
    Pt === 0 && (Pt = 5);
  }
  function Lr(e, t, n) {
    var r = ue,
      l = gn.transition;
    try {
      ((gn.transition = null), (ue = 1), Zd(e, t, n, r));
    } finally {
      ((gn.transition = l), (ue = r));
    }
    return null;
  }
  function Zd(e, t, n, r) {
    do ul();
    while (cr !== null);
    if ((Qe & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var a = n.lanes | n.childLanes;
    if (
      (pe(e, a),
      e === _t && ((kt = _t = null), (Rt = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Fi ||
        ((Fi = !0),
        ec(Ct, function () {
          return (ul(), null);
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      ((a = gn.transition), (gn.transition = null));
      var s = ue;
      ue = 1;
      var c = Qe;
      ((Qe |= 4),
        (hs.current = null),
        Qd(e, n),
        Uu(n, e),
        xd(ja),
        (ei = !!Sa),
        (ja = Sa = null),
        (e.current = n),
        Kd(n),
        wn(),
        (Qe = c),
        (ue = s),
        (gn.transition = a));
    } else e.current = n;
    if (
      (Fi && ((Fi = !1), (cr = e), (Ui = l)),
      (a = e.pendingLanes),
      a === 0 && (ur = null),
      Or(n.stateNode),
      en(e, Ye()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ai) throw ((Ai = !1), (e = vs), (vs = null), e);
    return (
      (Ui & 1) !== 0 && e.tag !== 0 && ul(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === ys ? Wl++ : ((Wl = 0), (ys = e))) : (Wl = 0),
      ir(),
      null
    );
  }
  function ul() {
    if (cr !== null) {
      var e = mt(Ui),
        t = gn.transition,
        n = ue;
      try {
        if (((gn.transition = null), (ue = 16 > e ? 16 : e), cr === null))
          var r = !1;
        else {
          if (((e = cr), (cr = null), (Ui = 0), (Qe & 6) !== 0))
            throw Error(o(331));
          var l = Qe;
          for (Qe |= 4, K = e.current; K !== null; ) {
            var a = K,
              s = a.child;
            if ((K.flags & 16) !== 0) {
              var c = a.deletions;
              if (c !== null) {
                for (var f = 0; f < c.length; f++) {
                  var S = c[f];
                  for (K = S; K !== null; ) {
                    var R = K;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $l(8, R, a);
                    }
                    var T = R.child;
                    if (T !== null) ((T.return = R), (K = T));
                    else
                      for (; K !== null; ) {
                        R = K;
                        var I = R.sibling,
                          G = R.return;
                        if ((Du(R), R === S)) {
                          K = null;
                          break;
                        }
                        if (I !== null) {
                          ((I.return = G), (K = I));
                          break;
                        }
                        K = G;
                      }
                  }
                }
                var J = a.alternate;
                if (J !== null) {
                  var ee = J.child;
                  if (ee !== null) {
                    J.child = null;
                    do {
                      var xt = ee.sibling;
                      ((ee.sibling = null), (ee = xt));
                    } while (ee !== null);
                  }
                }
                K = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && s !== null)
              ((s.return = a), (K = s));
            else
              e: for (; K !== null; ) {
                if (((a = K), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $l(9, a, a.return);
                  }
                var v = a.sibling;
                if (v !== null) {
                  ((v.return = a.return), (K = v));
                  break e;
                }
                K = a.return;
              }
          }
          var m = e.current;
          for (K = m; K !== null; ) {
            s = K;
            var x = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && x !== null)
              ((x.return = s), (K = x));
            else
              e: for (s = m; K !== null; ) {
                if (((c = K), (c.flags & 2048) !== 0))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Di(9, c);
                    }
                  } catch (re) {
                    gt(c, c.return, re);
                  }
                if (c === s) {
                  K = null;
                  break e;
                }
                var A = c.sibling;
                if (A !== null) {
                  ((A.return = c.return), (K = A));
                  break e;
                }
                K = c.return;
              }
          }
          if (
            ((Qe = l),
            ir(),
            Dt && typeof Dt.onPostCommitFiberRoot == "function")
          )
            try {
              Dt.onPostCommitFiberRoot(Qn, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ue = n), (gn.transition = t));
      }
    }
    return !1;
  }
  function qu(e, t, n) {
    ((t = il(n, t)),
      (t = mu(e, t, 1)),
      (e = sr(e, t, 1)),
      (t = Qt()),
      e !== null && (b(e, 1, t), en(e, t)));
  }
  function gt(e, t, n) {
    if (e.tag === 3) qu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (ur === null || !ur.has(r)))
          ) {
            ((e = il(n, e)),
              (e = gu(t, e, 1)),
              (t = sr(t, e, 1)),
              (e = Qt()),
              t !== null && (b(t, 1, e), en(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ef(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Qt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _t === e &&
        (Rt & n) === n &&
        (Pt === 4 || (Pt === 3 && (Rt & 130023424) === Rt && 500 > Ye() - gs)
          ? Mr(e, 0)
          : (ms |= n)),
      en(e, t));
  }
  function Ju(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Fr), (Fr <<= 1), (Fr & 130023424) === 0 && (Fr = 4194304)));
    var n = Qt();
    ((e = Fn(e, t)), e !== null && (b(e, t, n), en(e, n)));
  }
  function tf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ju(e, n));
  }
  function nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (r !== null && r.delete(t), Ju(e, n));
  }
  var Zu;
  Zu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Yt.current) Jt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Jt = !1), Hd(e, t, n));
        Jt = (e.flags & 131072) !== 0;
      }
    else ((Jt = !1), ot && (t.flags & 1048576) !== 0 && Lo(t, yi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Ii(e, t), (e = t.pendingProps));
        var l = qr(t, Ot.current);
        (rl(t, n), (l = Qa(null, t, r, e, l, n)));
        var a = Ka();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              qt(r) ? ((a = !0), mi(t)) : (a = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ua(t),
              (l.updater = Mi),
              (t.stateNode = l),
              (l._reactInternals = t),
              es(t, r, e, n),
              (t = ls(null, t, r, !0, a, n)))
            : ((t.tag = 0), ot && a && _a(t), Gt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ii(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = lf(r)),
            (e = jn(r, e)),
            l)
          ) {
            case 0:
              t = rs(null, t, r, e, n);
              break e;
            case 1:
              t = Cu(null, t, r, e, n);
              break e;
            case 11:
              t = wu(null, t, r, e, n);
              break e;
            case 14:
              t = ku(null, t, r, jn(r.type, e), n);
              break e;
          }
          throw Error(o(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jn(r, l)),
          rs(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jn(r, l)),
          Cu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Eu(t), e === null)) throw Error(o(387));
          ((r = t.pendingProps),
            (a = t.memoizedState),
            (l = a.element),
            $o(e, t),
            Ni(t, r, null, n));
          var s = t.memoizedState;
          if (((r = s.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              ((l = il(Error(o(423)), t)), (t = Pu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = il(Error(o(424)), t)), (t = Pu(e, t, r, n, l)));
              break e;
            } else
              for (
                on = nr(t.stateNode.containerInfo.firstChild),
                  sn = t,
                  ot = !0,
                  Sn = null,
                  n = Fo(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((el(), r === l)) {
              t = $n(e, t, n);
              break e;
            }
            Gt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wo(t),
          e === null && Ia(t),
          (r = t.type),
          (l = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (s = l.children),
          Na(r, l) ? (s = null) : a !== null && Na(r, a) && (t.flags |= 32),
          Nu(e, t),
          Gt(e, t, s, n),
          t.child
        );
      case 6:
        return (e === null && Ia(t), null);
      case 13:
        return zu(e, t, n);
      case 4:
        return (
          $a(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = tl(t, null, r, n)) : Gt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jn(r, l)),
          wu(e, t, r, l, n)
        );
      case 7:
        return (Gt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Gt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Gt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (a = t.memoizedProps),
            (s = l.value),
            nt(ki, r._currentValue),
            (r._currentValue = s),
            a !== null)
          )
            if (kn(a.value, s)) {
              if (a.children === l.children && !Yt.current) {
                t = $n(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var c = a.dependencies;
                if (c !== null) {
                  s = a.child;
                  for (var f = c.firstContext; f !== null; ) {
                    if (f.context === r) {
                      if (a.tag === 1) {
                        ((f = Un(-1, n & -n)), (f.tag = 2));
                        var S = a.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var R = S.pending;
                          (R === null
                            ? (f.next = f)
                            : ((f.next = R.next), (R.next = f)),
                            (S.pending = f));
                        }
                      }
                      ((a.lanes |= n),
                        (f = a.alternate),
                        f !== null && (f.lanes |= n),
                        Aa(a.return, n, t),
                        (c.lanes |= n));
                      break;
                    }
                    f = f.next;
                  }
                } else if (a.tag === 10) s = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((s = a.return), s === null)) throw Error(o(341));
                  ((s.lanes |= n),
                    (c = s.alternate),
                    c !== null && (c.lanes |= n),
                    Aa(s, n, t),
                    (s = a.sibling));
                } else s = a.child;
                if (s !== null) s.return = a;
                else
                  for (s = a; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((a = s.sibling), a !== null)) {
                      ((a.return = s.return), (s = a));
                      break;
                    }
                    s = s.return;
                  }
                a = s;
              }
          (Gt(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          rl(t, n),
          (l = hn(l)),
          (r = r(l)),
          (t.flags |= 1),
          Gt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = jn(r, t.pendingProps)),
          (l = jn(r.type, l)),
          ku(e, t, r, l, n)
        );
      case 15:
        return Su(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : jn(r, l)),
          Ii(e, t),
          (t.tag = 1),
          qt(r) ? ((e = !0), mi(t)) : (e = !1),
          rl(t, n),
          pu(t, r, l),
          es(t, r, l, n),
          ls(null, t, r, !0, e, n)
        );
      case 19:
        return _u(e, t, n);
      case 22:
        return ju(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function ec(e, t) {
    return Dr(e, t);
  }
  function rf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function vn(e, t, n, r) {
    return new rf(e, t, n, r);
  }
  function Ns(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function lf(e) {
    if (typeof e == "function") return Ns(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Re)) return 11;
      if (e === De) return 14;
    }
    return 2;
  }
  function pr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = vn(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Wi(e, t, n, r, l, a) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ns(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case se:
          return Ir(n.children, l, a, t);
        case de:
          ((s = 8), (l |= 8));
          break;
        case Be:
          return (
            (e = vn(12, n, t, l | 2)),
            (e.elementType = Be),
            (e.lanes = a),
            e
          );
        case Me:
          return (
            (e = vn(13, n, t, l)),
            (e.elementType = Me),
            (e.lanes = a),
            e
          );
        case fe:
          return (
            (e = vn(19, n, t, l)),
            (e.elementType = fe),
            (e.lanes = a),
            e
          );
        case Le:
          return Vi(n, l, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                s = 10;
                break e;
              case Fe:
                s = 9;
                break e;
              case Re:
                s = 11;
                break e;
              case De:
                s = 14;
                break e;
              case $e:
                ((s = 16), (r = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = vn(s, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = a),
      t
    );
  }
  function Ir(e, t, n, r) {
    return ((e = vn(7, e, r, t)), (e.lanes = n), e);
  }
  function Vi(e, t, n, r) {
    return (
      (e = vn(22, e, r, t)),
      (e.elementType = Le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Cs(e, t, n) {
    return ((e = vn(6, e, null, t)), (e.lanes = n), e);
  }
  function Es(e, t, n) {
    return (
      (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function af(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = d(0)),
      (this.expirationTimes = d(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = d(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ps(e, t, n, r, l, a, s, c, f) {
    return (
      (e = new af(e, t, n, c, f)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = vn(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ua(a),
      e
    );
  }
  function sf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function tc(e) {
    if (!e) return lr;
    e = e._reactInternals;
    e: {
      if (ln(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (qt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (qt(n)) return bo(e, n, t);
    }
    return t;
  }
  function nc(e, t, n, r, l, a, s, c, f) {
    return (
      (e = Ps(n, r, !0, e, l, a, s, c, f)),
      (e.context = tc(null)),
      (n = e.current),
      (r = Qt()),
      (l = dr(n)),
      (a = Un(r, l)),
      (a.callback = t ?? null),
      sr(n, a, l),
      (e.current.lanes = l),
      b(e, l, r),
      en(e, r),
      e
    );
  }
  function Gi(e, t, n, r) {
    var l = t.current,
      a = Qt(),
      s = dr(l);
    return (
      (n = tc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Un(a, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = sr(l, t, s)),
      e !== null && (En(e, l, s, a), ji(e, l, s)),
      s
    );
  }
  function Qi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function zs(e, t) {
    (rc(e, t), (e = e.alternate) && rc(e, t));
  }
  function of() {
    return null;
  }
  var lc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function bs(e) {
    this._internalRoot = e;
  }
  ((Ki.prototype.render = bs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Gi(e, t, null, null);
    }),
    (Ki.prototype.unmount = bs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (_r(function () {
            Gi(null, e, null, null);
          }),
            (t[Dn] = null));
        }
      }));
  function Ki(e) {
    this._internalRoot = e;
  }
  Ki.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Jl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++);
      (Zn.splice(n, 0, e), n === 0 && Hs(e));
    }
  };
  function _s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Xi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function ic() {}
  function uf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var a = r;
        r = function () {
          var S = Qi(s);
          a.call(S);
        };
      }
      var s = nc(t, r, e, 0, null, !1, !1, "", ic);
      return (
        (e._reactRootContainer = s),
        (e[Dn] = s.current),
        zl(e.nodeType === 8 ? e.parentNode : e),
        _r(),
        s
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var S = Qi(f);
        c.call(S);
      };
    }
    var f = Ps(e, 0, !1, null, null, !1, !1, "", ic);
    return (
      (e._reactRootContainer = f),
      (e[Dn] = f.current),
      zl(e.nodeType === 8 ? e.parentNode : e),
      _r(function () {
        Gi(t, f, n, r);
      }),
      f
    );
  }
  function Yi(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
      var s = a;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var f = Qi(s);
          c.call(f);
        };
      }
      Gi(t, s, e, l);
    } else s = uf(n, t, e, l, r);
    return Qi(s);
  }
  ((Yn = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 &&
            (Q(t, n | 1),
            en(t, Ye()),
            (Qe & 6) === 0 && ((ol = Ye() + 500), ir()));
        }
        break;
      case 13:
        (_r(function () {
          var r = Fn(e, 1);
          if (r !== null) {
            var l = Qt();
            En(r, e, 1, l);
          }
        }),
          zs(e, 1));
    }
  }),
    (Rn = function (e) {
      if (e.tag === 13) {
        var t = Fn(e, 134217728);
        if (t !== null) {
          var n = Qt();
          En(t, e, 134217728, n);
        }
        zs(e, 134217728);
      }
    }),
    (ql = function (e) {
      if (e.tag === 13) {
        var t = dr(e),
          n = Fn(e, t);
        if (n !== null) {
          var r = Qt();
          En(n, e, t, r);
        }
        zs(e, t);
      }
    }),
    (Jl = function () {
      return ue;
    }),
    (hl = function (e, t) {
      var n = ue;
      try {
        return ((ue = e), t());
      } finally {
        ue = n;
      }
    }),
    (ht = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Bt(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = pi(r);
                if (!l) throw Error(o(90));
                (St(r), Bt(r, l));
              }
            }
          }
          break;
        case "textarea":
          W(e, n);
          break;
        case "select":
          ((t = n.value), t != null && ke(e, !!n.multiple, t, !1));
      }
    }),
    (vt = ks),
    (yt = _r));
  var cf = { usingClientEntryPoint: !1, Events: [Ml, Xr, pi, Ue, Ke, ks] },
    Vl = {
      findFiberByHostInstance: Sr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    df = {
      bundleType: Vl.bundleType,
      version: Vl.version,
      rendererPackageName: Vl.rendererPackageName,
      rendererConfig: Vl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Xt(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Vl.findFiberByHostInstance || of,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qi.isDisabled && qi.supportsFiber)
      try {
        ((Qn = qi.inject(df)), (Dt = qi));
      } catch {}
  }
  return (
    (tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf),
    (tn.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_s(t)) throw Error(o(200));
      return sf(e, t, null, n);
    }),
    (tn.createRoot = function (e, t) {
      if (!_s(e)) throw Error(o(299));
      var n = !1,
        r = "",
        l = lc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ps(e, 1, !1, null, null, n, !1, r, l)),
        (e[Dn] = t.current),
        zl(e.nodeType === 8 ? e.parentNode : e),
        new bs(t)
      );
    }),
    (tn.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = Xt(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tn.flushSync = function (e) {
      return _r(e);
    }),
    (tn.hydrate = function (e, t, n) {
      if (!Xi(t)) throw Error(o(200));
      return Yi(null, e, t, !0, n);
    }),
    (tn.hydrateRoot = function (e, t, n) {
      if (!_s(e)) throw Error(o(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        a = "",
        s = lc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = nc(t, null, e, 1, n ?? null, l, !1, a, s)),
        (e[Dn] = t.current),
        zl(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Ki(t);
    }),
    (tn.render = function (e, t, n) {
      if (!Xi(t)) throw Error(o(200));
      return Yi(null, e, t, !1, n);
    }),
    (tn.unmountComponentAtNode = function (e) {
      if (!Xi(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (_r(function () {
            Yi(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Dn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tn.unstable_batchedUpdates = ks),
    (tn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Xi(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Yi(e, t, n, !1, r);
    }),
    (tn.version = "18.3.1-next-f1338f8080-20240426"),
    tn
  );
}
var pc;
function xf() {
  if (pc) return Is.exports;
  pc = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (C) {
        console.error(C);
      }
  }
  return (h(), (Is.exports = yf()), Is.exports);
}
var hc;
function wf() {
  if (hc) return Ji;
  hc = 1;
  var h = xf();
  return ((Ji.createRoot = h.createRoot), (Ji.hydrateRoot = h.hydrateRoot), Ji);
}
var kf = wf(),
  g = Us();
async function Ae(h, C = {}, o) {
  return window.__TAURI_INTERNALS__.invoke(h, C, o);
}
async function ea(h = {}) {
  return (
    typeof h == "object" && Object.freeze(h),
    await Ae("plugin:dialog|open", { options: h })
  );
}
async function Ql(h = {}) {
  return (
    typeof h == "object" && Object.freeze(h),
    await Ae("plugin:dialog|save", { options: h })
  );
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sf = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ec = (...h) =>
    h
      .filter((C, o, N) => !!C && C.trim() !== "" && N.indexOf(C) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var jf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nf = g.forwardRef(
  (
    {
      color: h = "currentColor",
      size: C = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: N,
      className: u = "",
      children: z,
      iconNode: L,
      ..._
    },
    D,
  ) =>
    g.createElement(
      "svg",
      {
        ref: D,
        ...jf,
        width: C,
        height: C,
        stroke: h,
        strokeWidth: N ? (Number(o) * 24) / Number(C) : o,
        className: Ec("lucide", u),
        ..._,
      },
      [
        ...L.map(([F, U]) => g.createElement(F, U)),
        ...(Array.isArray(z) ? z : [z]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ve = (h, C) => {
  const o = g.forwardRef(({ className: N, ...u }, z) =>
    g.createElement(Nf, {
      ref: z,
      iconNode: C,
      className: Ec(`lucide-${Sf(h)}`, N),
      ...u,
    }),
  );
  return ((o.displayName = `${h}`), o);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cf = Ve("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w",
    },
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat",
    },
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf",
    },
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pc = Ve("ClipboardCopy", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
      key: "4jdomd",
    },
  ],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ef = Ve("CopyPlus", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ta = Ve("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pf = Ve("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya",
    },
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zf = Ve("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mc = Ve("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gc = Ve("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = Ve("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = Ve("Grid2x2", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  [
    "rect",
    { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _f = Ve("Hand", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mf = Ve("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vc = Ve("Import", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lf = Ve("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const If = Ve("LockOpen", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rf = Ve("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = Ve("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tf = Ve("PaintBucket", [
  [
    "path",
    {
      d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
      key: "irua1i",
    },
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  [
    "path",
    {
      d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
      key: "xk76lq",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = Ve("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = Ve("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = Ve("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = Ve("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = Ve("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  [
    "path",
    {
      d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
      key: "6uklza",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = Ve("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = Ve("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = Ve("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = Ve("ScanSearch", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = Ve("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = Ve("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yc = Ve("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = Ve("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = Ve("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  [
    "path",
    {
      d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
      key: "f3b9sd",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bc = Ve("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $s = Ve("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function xc(h, C, o) {
  return C * o + h;
}
function Xf(h, C, o, N, u) {
  const z = xc(N, u, C);
  if (h[z * 4 + 3] === 0) return new Set();
  const L = new Set(),
    _ = [z];
  let D = 0;
  const F = [-1, 0, 1];
  for (; D < _.length; ) {
    const U = _[D++];
    if (L.has(U) || h[U * 4 + 3] === 0) continue;
    L.add(U);
    const q = U % C,
      X = Math.floor(U / C);
    for (const Ce of F)
      for (const me of F) {
        if (me === 0 && Ce === 0) continue;
        const le = q + me,
          y = X + Ce;
        if (le < 0 || y < 0 || le >= C || y >= o) continue;
        const H = xc(le, y, C);
        !L.has(H) && h[H * 4 + 3] > 0 && _.push(H);
      }
  }
  return L;
}
function _c(h, C) {
  if (!h.size) return null;
  let o = Number.MAX_SAFE_INTEGER,
    N = Number.MAX_SAFE_INTEGER,
    u = 0,
    z = 0;
  return (
    h.forEach((L) => {
      const _ = L % C,
        D = Math.floor(L / C);
      ((o = Math.min(o, _)),
        (N = Math.min(N, D)),
        (u = Math.max(u, _)),
        (z = Math.max(z, D)));
    }),
    { x: o, y: N, width: u - o + 1, height: z - N + 1 }
  );
}
function Yf(h, C, o) {
  const N = h.width,
    u = h.height,
    L = h.getContext("2d").getImageData(0, 0, N, u),
    _ = document.createElement("canvas");
  ((_.width = N), (_.height = u));
  const D = _.getContext("2d"),
    F = D.createImageData(N, u),
    U = new ImageData(new Uint8ClampedArray(L.data), N, u);
  (C.forEach((me) => {
    const le = me * 4;
    ((F.data[le] = L.data[le]),
      (F.data[le + 1] = L.data[le + 1]),
      (F.data[le + 2] = L.data[le + 2]),
      (F.data[le + 3] = L.data[le + 3]),
      (U.data[le] = 0),
      (U.data[le + 1] = 0),
      (U.data[le + 2] = 0),
      (U.data[le + 3] = 0));
  }),
    D.putImageData(F, 0, 0));
  const q = document.createElement("canvas");
  ((q.width = N), (q.height = u), q.getContext("2d").putImageData(U, 0, 0));
  const X = _c(C, N);
  let Ce = "";
  if (X) {
    const me = document.createElement("canvas");
    ((me.width = X.width),
      (me.height = X.height),
      me
        .getContext("2d")
        .drawImage(_, X.x, X.y, X.width, X.height, 0, 0, X.width, X.height),
      (Ce = me.toDataURL("image/png")));
  }
  return {
    keys: [...C],
    objectCount: o,
    pixelCount: C.size,
    bounds: X,
    fullDataUrl: _.toDataURL("image/png"),
    trimmedDataUrl: Ce,
    remainingDataUrl: q.toDataURL("image/png"),
  };
}
function Zd(h) {
  if (!h) return !1;
  if (h.type?.startsWith("image/")) return !0;
  return /\.(png|jpe?g|webp|bmp|gif|tiff?)$/i.test(h.name || "");
}
function Kl({
  src: h,
  title: C,
  documentId: o,
  editable: N = !1,
  tool: u = "pan",
  color: z = "#000000",
  brush: L = 1,
  backgroundColor: _ = "#262522",
  gridColor: D = "#c7743f",
  baseLayerVisible: F = !0,
  objectLayers: U = [],
  activeLayerId: q = "base",
  onEdit: X,
  onStrokeStart: Ce,
  onStrokeEnd: me,
  onPick: le,
  onBgPick: y,
  multiObjectSelect: H = !0,
  clearSelectionToken: ae = 0,
  onSelectionChange: xe,
  onImageFile: te,
  enableViewLock: Z = !1,
  language: dropLanguage = "en",
}) {
  const ne = g.useRef(null),
    se = g.useRef(null),
    de = g.useRef(),
    Be = g.useRef(""),
    Se = g.useRef({ x: 0, y: 0 }),
    Fe = g.useRef(!1),
    Re = g.useRef(new Map()),
    Me = g.useRef(new Set()),
    fe = g.useRef(0),
    [De, $e] = g.useState({ z: 1, x: 0, y: 0 }),
    [Le, O] = g.useState(!1),
    [w, M] = g.useState(!1),
    [p, E] = g.useState(!1),
    [V, ie] = g.useState(null),
    [ce, j] = g.useState(0),
    [dropActive, setDropActive] = g.useState(!1),
    dropCopy =
      dropLanguage === "zh-Hans"
        ? {
            title: h ? "松开以替换图片" : "拖放图片到这里",
            help: "支持 PNG、JPG、WebP、BMP、GIF、TIFF，也可以按 Ctrl+V 粘贴",
            editing: "正在编辑",
            baseLayer: "基础图层",
            layer: "图层",
            noImage: "尚未加载图片",
            fit: "适合",
            grid: "网格",
            gridOn: "网格已开启",
            gridOff: "网格已关闭",
            viewLocked: "视图已锁定",
            lockView: "锁定视图",
            unlockView: "解锁视图",
          }
        : dropLanguage === "zh-Hant"
          ? {
            title: h ? "放開以替換圖片" : "拖曳圖片到這裡",
            help: "支援 PNG、JPG、WebP、BMP、GIF、TIFF，也可以使用 Ctrl+V 貼上",
            editing: "正在編輯",
            baseLayer: "基礎圖層",
            layer: "圖層",
            noImage: "尚未載入圖片",
            fit: "適合",
            grid: "格線",
            gridOn: "格線開啟",
            gridOff: "格線關閉",
            viewLocked: "視圖已鎖定",
            lockView: "鎖定視圖",
            unlockView: "解除視圖鎖定",
          }
        : dropLanguage === "ja"
            ? {
              title: h ? "ドロップして画像を置換" : "画像をここにドロップ",
              help: "PNG、JPG、WebP、BMP、GIF、TIFF。Ctrl+V 貼り付けにも対応",
              editing: "編集中",
              baseLayer: "ベースレイヤー",
              layer: "レイヤー",
              noImage: "画像未読込",
              fit: "全体",
              grid: "グリッド",
              gridOn: "グリッド ON",
              gridOff: "グリッド OFF",
              viewLocked: "表示ロック中",
              lockView: "表示をロック",
              unlockView: "表示ロックを解除",
            }
          : dropLanguage === "ko"
              ? {
                title: h ? "놓아서 이미지 교체" : "이미지를 여기에 끌어놓기",
                help: "PNG, JPG, WebP, BMP, GIF, TIFF · Ctrl+V 붙여넣기도 가능",
                editing: "편집 중",
                baseLayer: "기본 레이어",
                layer: "레이어",
                noImage: "이미지 없음",
                fit: "맞춤",
                grid: "격자",
                gridOn: "격자 켜짐",
                gridOff: "격자 꺼짐",
                viewLocked: "보기 잠김",
                lockView: "보기 잠금",
                unlockView: "보기 잠금 해제",
              }
              : {
                title: h ? "Drop to replace image" : "Drop an image here",
                help: "PNG, JPG, WebP, BMP, GIF or TIFF · Ctrl+V also works",
                editing: "Editing",
                baseLayer: "Base Layer",
                layer: "Layer",
                noImage: "No image",
                fit: "Fit",
                grid: "Grid",
                gridOn: "Grid ON",
                gridOff: "Grid OFF",
                viewLocked: "View Locked",
                lockView: "Lock View",
                unlockView: "Unlock canvas view",
              };
  function Y() {
    return q === "base" ? de.current : Re.current.get(q);
  }
  function he() {
    const k = de.current;
    if (!k) return null;
    const $ = document.createElement("canvas");
    (($.width = k.width), ($.height = k.height));
    const we = $.getContext("2d");
    return (
      (we.imageSmoothingEnabled = !1),
      F && we.drawImage(k, 0, 0),
      U.filter((ke) => ke.visible).forEach((ke) => {
        const be = Re.current.get(ke.id);
        be && we.drawImage(be, 0, 0, k.width, k.height);
      }),
      $
    );
  }
  const oe = g.useCallback(
      (k = De, $ = V) => {
        const we = se.current,
          ke = ne.current,
          be = de.current;
        if (!we || !ke) return;
        const Ge = window.devicePixelRatio || 1;
        ((we.width = Math.max(1, Math.round(ke.clientWidth * Ge))),
          (we.height = Math.max(1, Math.round(ke.clientHeight * Ge))),
          (we.style.width = `${ke.clientWidth}px`),
          (we.style.height = `${ke.clientHeight}px`));
        const W = we.getContext("2d");
        if (
          (W.setTransform(Ge, 0, 0, Ge, 0, 0),
          (W.imageSmoothingEnabled = !1),
          W.clearRect(0, 0, ke.clientWidth, ke.clientHeight),
          (W.fillStyle = _),
          W.fillRect(0, 0, ke.clientWidth, ke.clientHeight),
          !be)
        )
          return;
        if (
          (F && W.drawImage(be, k.x, k.y, be.width * k.z, be.height * k.z),
          U.filter((Ie) => Ie.visible).forEach((Ie) => {
            const We = Re.current.get(Ie.id);
            We && W.drawImage(We, k.x, k.y, be.width * k.z, be.height * k.z);
          }),
          Le && k.z >= 5)
        ) {
          ((W.strokeStyle = `${D}b8`), (W.lineWidth = 1), W.beginPath());
          for (let Ie = 0; Ie <= be.width; Ie += 1) {
            const We = Math.round(k.x + Ie * k.z) + 0.5;
            (W.moveTo(We, k.y), W.lineTo(We, k.y + be.height * k.z));
          }
          for (let Ie = 0; Ie <= be.height; Ie += 1) {
            const We = Math.round(k.y + Ie * k.z) + 0.5;
            (W.moveTo(k.x, We), W.lineTo(k.x + be.width * k.z, We));
          }
          W.stroke();
        }
        if (Me.current.size) {
          (W.save(),
            (W.fillStyle = "rgba(199,116,63,.34)"),
            Me.current.forEach((We) => {
              const ct = We % be.width,
                Kt = Math.floor(We / be.width);
              W.fillRect(k.x + ct * k.z, k.y + Kt * k.z, k.z, k.z);
            }));
          const Ie = _c(Me.current, be.width);
          (Ie &&
            ((W.strokeStyle = "#ffffff"),
            (W.lineWidth = 1.5),
            W.setLineDash([5, 4]),
            W.strokeRect(
              k.x + Ie.x * k.z + 0.5,
              k.y + Ie.y * k.z + 0.5,
              Ie.width * k.z - 1,
              Ie.height * k.z - 1,
            )),
            W.restore());
        }
        if (!N || !$ || u === "pan" || u === "object") return;
        const He = Math.max(1, L),
          tt = k.x + $.x * k.z,
          pt = k.y + $.y * k.z,
          rt = He * k.z;
        if ((W.save(), u === "pencil"))
          ((W.globalAlpha = 0.62),
            (W.fillStyle = z),
            W.fillRect(tt, pt, rt, rt),
            (W.globalAlpha = 1),
            (W.strokeStyle = "#ffffff"),
            W.strokeRect(
              tt + 0.5,
              pt + 0.5,
              Math.max(1, rt - 1),
              Math.max(1, rt - 1),
            ));
        else if (u === "eraser") {
          const Ie = Math.max(2, k.z / 2);
          for (let We = 0; We < rt; We += Ie)
            for (let ct = 0; ct < rt; ct += Ie)
              ((W.fillStyle =
                (Math.floor(ct / Ie) + Math.floor(We / Ie)) % 2 === 0
                  ? "#ffffff"
                  : "#777777"),
                (W.globalAlpha = 0.58),
                W.fillRect(
                  tt + ct,
                  pt + We,
                  Math.min(Ie, rt - ct),
                  Math.min(Ie, rt - We),
                ));
          ((W.globalAlpha = 1),
            (W.strokeStyle = "#ff6b66"),
            (W.lineWidth = 2),
            W.strokeRect(
              tt + 1,
              pt + 1,
              Math.max(1, rt - 2),
              Math.max(1, rt - 2),
            ));
        } else
          ((W.fillStyle = u === "picker" ? "#60d39499" : "#c7743f99"),
            W.fillRect(tt, pt, k.z, k.z),
            (W.strokeStyle = "#ffffff"),
            W.strokeRect(
              tt + 0.5,
              pt + 0.5,
              Math.max(1, k.z - 1),
              Math.max(1, k.z - 1),
            ));
        W.restore();
      },
      [De, V, _, Le, D, N, u, L, z, ce, F, U, q],
    ),
    qe = g.useCallback(() => {
      const k = ne.current,
        $ = de.current;
      if (!k || !$) return;
      const we = Math.max(
          0.05,
          Math.min(
            64,
            Math.min(
              (k.clientWidth - 30) / $.width,
              (k.clientHeight - 30) / $.height,
            ),
          ),
        ),
        ke = {
          z: we,
          x: (k.clientWidth - $.width * we) / 2,
          y: (k.clientHeight - $.height * we) / 2,
        };
      ($e(ke), requestAnimationFrame(() => oe(ke, null)));
    }, [oe]);
  (g.useEffect(() => {
    if (!h) {
      ((de.current = void 0), oe());
      return;
    }
    const k = new Image();
    ((k.onload = () => {
      ((de.current = k),
        Be.current !== o
          ? ((Be.current = o),
            Me.current.clear(),
            (fe.current = 0),
            xe?.(null),
            j(($) => $ + 1),
            w ? oe() : qe())
          : oe());
    }),
      (k.src = h));
  }, [h, o, qe, oe, w]),
    g.useEffect(() => oe(), [oe]),
    g.useEffect(() => {
      const k = new Set(U.map(($) => $.id));
      (Re.current.forEach(($, we) => {
        k.has(we) || Re.current.delete(we);
      }),
        U.forEach(($) => {
          const we = Re.current.get($.id);
          if (we && we.src === $.dataUrl) return;
          const ke = new Image();
          ((ke.onload = () => {
            (Re.current.set($.id, ke), oe());
          }),
            (ke.src = $.dataUrl));
        }),
        oe());
    }, [U, oe]),
    g.useEffect(() => {
      (Me.current.clear(), (fe.current = 0), xe?.(null), j((k) => k + 1));
    }, [ae]),
    g.useEffect(() => {
      const k = new ResizeObserver(() => oe());
      return (ne.current && k.observe(ne.current), () => k.disconnect());
    }, [oe]));
  function at(k) {
    const $ = ne.current.getBoundingClientRect();
    return {
      x: Math.floor((k.clientX - $.left - De.x) / De.z),
      y: Math.floor((k.clientY - $.top - De.y) / De.z),
    };
  }
  function St(k) {
    const $ = de.current;
    return !!$ && k.x >= 0 && k.y >= 0 && k.x < $.width && k.y < $.height;
  }
  function jt(k, $, we) {
    const ke = ne.current.getBoundingClientRect(),
      be = k - ke.left,
      Ge = $ - ke.top;
    $e((W) => {
      const He = Math.max(0.05, Math.min(64, W.z * we));
      return {
        z: He,
        x: be - ((be - W.x) / W.z) * He,
        y: Ge - ((Ge - W.y) / W.z) * He,
      };
    });
  }
  function nn(k) {
    const $ = ne.current,
      we = $.getBoundingClientRect();
    jt(we.left + $.clientWidth / 2, we.top + $.clientHeight / 2, k);
  }
  function Ze() {
    const k = !Le;
    if ((O(k), !k || De.z >= 5)) return;
    const $ = ne.current;
    if (!$) return;
    const we = ($.clientWidth / 2 - De.x) / De.z,
      ke = ($.clientHeight / 2 - De.y) / De.z;
    $e({ z: 5, x: $.clientWidth / 2 - we * 5, y: $.clientHeight / 2 - ke * 5 });
  }
  function $t(k) {
    const $ = de.current;
    if (!$) return;
    const we = at(k);
    if (!St(we)) return;
    const ke = he();
    if (!ke) return;
    const Ge = ke.getContext("2d").getImageData(0, 0, $.width, $.height),
      W = Xf(Ge.data, $.width, $.height, we.x, we.y);
    if (!W.size) {
      !k.shiftKey &&
        !k.altKey &&
        (Me.current.clear(), (fe.current = 0), xe?.(null), j((He) => He + 1));
      return;
    }
    if (k.altKey)
      (W.forEach((He) => Me.current.delete(He)),
        (fe.current = Math.max(0, fe.current - 1)));
    else {
      !H && !k.shiftKey && (Me.current.clear(), (fe.current = 0));
      let He = !1;
      (W.forEach((tt) => {
        (Me.current.has(tt) || (He = !0), Me.current.add(tt));
      }),
        He && (fe.current += 1));
    }
    (j((He) => He + 1),
      xe?.(Me.current.size ? Yf(ke, Me.current, fe.current) : null));
  }
  function Bt(k) {
    const $ = de.current,
      we = Y();
    if (!$ || !we || U.find((We) => We.id === q)?.locked) return;
    const be = at(k);
    if (!St(be)) return;
    if (u === "object") {
      $t(k);
      return;
    }
    if (u === "bgpick") {
      y?.(be.x, be.y);
      return;
    }
    const Ge = document.createElement("canvas");
    ((Ge.width = $.width), (Ge.height = $.height));
    const W = Ge.getContext("2d");
    if (
      ((W.imageSmoothingEnabled = !1), W.drawImage(we, 0, 0), u === "picker")
    ) {
      const We = he();
      if (!We) return;
      const ct = We.getContext("2d").getImageData(be.x, be.y, 1, 1).data;
      le?.(
        `#${[ct[0], ct[1], ct[2]].map((Kt) => Kt.toString(16).padStart(2, "0")).join("")}`,
      );
      return;
    }
    const He = Math.max(1, L),
      tt = Math.min(be.x, $.width - He),
      pt = Math.min(be.y, $.height - He);
    u === "eraser"
      ? W.clearRect(tt, pt, He, He)
      : ((W.fillStyle = z), W.fillRect(tt, pt, He, He));
    const rt = Ge.toDataURL("image/png"),
      Ie = new Image();
    ((Ie.onload = () => {
      ((de.current = Ie), oe(), X?.(rt));
    }),
      (Ie.src = rt));
  }
  return i.jsxs("section", {
    className:
      "canvas-surface grid min-h-0 grid-rows-[40px_1fr] overflow-hidden rounded-xl border border-ui-line",
    children: [
      i.jsxs("header", {
        className: "flex items-center bg-ui-panel px-3 text-xs text-ui-muted",
        children: [
          i.jsx("b", { children: C }),
          i.jsxs("span", {
            className:
              "ml-2 rounded bg-ui-accent/20 px-2 py-0.5 text-[9px] text-ui-accent",
            children: [
              dropCopy.editing,
              ": ",
              q === "base"
                ? dropCopy.baseLayer
                : U.find((k) => k.id === q)?.id
                  ? U.find((k) => k.id === q)?.id
                  : dropCopy.layer,
            ],
          }),
          i.jsx("span", {
            className: "ml-auto",
            children: de.current
              ? `${de.current.width} x ${de.current.height} · ${Math.round(De.z * 100)}%`
              : dropCopy.noImage,
          }),
        ],
      }),
      i.jsxs("div", {
        ref: ne,
        className: "relative min-h-0 overflow-hidden",
        onDragEnter: (k) => {
          te && (k.preventDefault(), setDropActive(!0));
        },
        onDragOver: (k) => {
          te &&
            (k.preventDefault(),
            setDropActive(!0),
            (k.dataTransfer.dropEffect = "copy"));
        },
        onDragLeave: (k) => {
          te &&
            !k.currentTarget.contains(k.relatedTarget) &&
            setDropActive(!1);
        },
        onDrop: (k) => {
          if (!te) return;
          (k.preventDefault(), k.stopPropagation(), setDropActive(!1));
          const $ = Array.from(k.dataTransfer.files).find(Zd);
          $ && te($);
        },
        onWheel: (k) => {
          (k.preventDefault(),
            jt(k.clientX, k.clientY, k.deltaY < 0 ? 1.25 : 0.8));
        },
        onDoubleClick: qe,
        onPointerLeave: () => ie(null),
        onPointerDown: (k) => {
          (k.currentTarget.setPointerCapture(k.pointerId),
            (Se.current = { x: k.clientX, y: k.clientY }),
            k.button === 1 || (k.button === 0 && (!N || u === "pan"))
              ? E(!0)
              : k.button === 0 &&
                ((Fe.current = !0),
                (u === "pencil" || u === "eraser") && Ce?.(),
                Bt(k),
                (u === "object" || u === "picker" || u === "bgpick") &&
                  (Fe.current = !1)));
        },
        onPointerMove: (k) => {
          const $ = at(k);
          if ((ie(St($) ? $ : null), p)) {
            const we = k.clientX - Se.current.x,
              ke = k.clientY - Se.current.y;
            ((Se.current = { x: k.clientX, y: k.clientY }),
              $e((be) => ({ ...be, x: be.x + we, y: be.y + ke })));
          } else
            Fe.current &&
              k.buttons === 1 &&
              u !== "picker" &&
              u !== "bgpick" &&
              u !== "object" &&
              Bt(k);
        },
        onPointerUp: () => {
          const k = Fe.current && (u === "pencil" || u === "eraser");
          (E(!1), (Fe.current = !1), k && me?.());
        },
        onPointerCancel: () => {
          const k = Fe.current && (u === "pencil" || u === "eraser");
          (E(!1), (Fe.current = !1), k && me?.());
        },
        children: [
          !h &&
            te &&
            i.jsxs("div", {
              className: "canvas-drop-empty",
              children: [
                i.jsx("div", {
                  className: "canvas-drop-icon",
                  children: i.jsx(cl, { size: 26 }),
                }),
                i.jsx("strong", { children: dropCopy.title }),
                i.jsx("span", { children: dropCopy.help }),
              ],
            }),
          i.jsx("canvas", {
            ref: se,
            className: `absolute inset-0 ${p ? "cursor-grabbing" : N && u === "object" ? "cursor-default" : N && u !== "pan" ? "cursor-none" : "cursor-grab"}`,
          }),
          dropActive &&
            te &&
            i.jsxs("div", {
              className: "canvas-drop-overlay",
              children: [
                i.jsx("div", {
                  className: "canvas-drop-icon is-active",
                  children: i.jsx(cl, { size: 28 }),
                }),
                i.jsx("strong", { children: dropCopy.title }),
                i.jsx("span", { children: dropCopy.help }),
              ],
            }),
          i.jsxs("div", {
            className:
              "canvas-view-controls absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-ui-line bg-ui-panel p-1 shadow-xl",
            onPointerDown: (k) => k.stopPropagation(),
            onDoubleClick: (k) => k.stopPropagation(),
            children: [
              i.jsx("button", {
                className: "btn h-8 min-w-9 px-2 text-lg",
                onClick: () => nn(0.8),
                children: "−",
              }),
              i.jsx("button", {
                className: "btn h-8 min-w-9 px-2 text-lg",
                onClick: () => nn(1.25),
                children: "＋",
              }),
              i.jsx("button", {
                className: "btn h-8 px-3",
                onClick: qe,
                children: dropCopy.fit,
              }),
              i.jsx("button", {
                className: "btn h-8 px-3",
                onClick: () => {
                  const k = ne.current,
                    $ = de.current;
                  k &&
                    $ &&
                    $e({
                      z: 1,
                      x: (k.clientWidth - $.width) / 2,
                      y: (k.clientHeight - $.height) / 2,
                    });
                },
                children: "1:1",
              }),
              Z &&
                i.jsx("button", {
                  className: `btn h-8 min-w-[92px] whitespace-nowrap px-3 font-semibold ${w ? "active ring-2 ring-ui-accent/60" : ""}`,
                  title: w ? dropCopy.unlockView : dropCopy.lockView,
                  onClick: () => M((k) => !k),
                  children: w ? dropCopy.viewLocked : dropCopy.lockView,
                }),
              i.jsx("button", {
                className: `btn canvas-grid-toggle h-8 whitespace-nowrap px-3 font-semibold ${Le ? "active ring-2 ring-ui-accent/60" : ""}`,
                title: Le ? dropCopy.gridOn : dropCopy.gridOff,
                onClick: Ze,
                children: dropCopy.grid,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function wc({ colors: h, setColors: C, selected: o, setSelected: N }) {
  function u() {
    const _ = "#ffffff";
    (C([...h, _]), N(_));
  }
  function z(_) {
    if ((N(_), !/^#[0-9a-f]{6}$/i.test(_))) return;
    const D = h.findIndex((U) => U === o);
    if (D < 0) return;
    const F = [...h];
    ((F[D] = _), C(F));
  }
  function L() {
    const _ = h.findIndex((F) => F === o);
    if (_ < 0) return;
    const D = h.filter((F, U) => U !== _);
    (C(D), N(D[0] ?? "#000000"));
  }
  return i.jsxs("div", {
    children: [
      i.jsxs("div", {
        className: "flex items-center text-[11px] text-ui-muted",
        children: [
          i.jsx("span", { children: "Fixed colors are optional" }),
          i.jsxs("span", {
            className: "ml-auto",
            children: [h.length, " colors"],
          }),
        ],
      }),
      i.jsxs("div", {
        className: "mt-3 grid grid-cols-8 gap-2",
        children: [
          h.map((_, D) =>
            i.jsx(
              "button",
              {
                title: _,
                className: `h-8 rounded-lg border-2 ${o === _ ? "border-ui-accent" : "border-white/10"}`,
                style: { background: _ },
                onClick: () => N(_),
              },
              `${_}-${D}`,
            ),
          ),
          i.jsx("button", {
            title: "Add fixed color",
            className:
              "grid h-8 place-items-center rounded-lg border border-dashed border-ui-line",
            onClick: u,
            children: i.jsx(Uf, { size: 14 }),
          }),
        ],
      }),
      h.length > 0 &&
        i.jsxs("div", {
          className: "mt-3 flex items-center gap-2",
          children: [
            i.jsx("input", {
              type: "color",
              value: /^#[0-9a-f]{6}$/i.test(o) ? o : "#000000",
              onChange: (_) => z(_.target.value),
            }),
            i.jsx("input", {
              className: "field",
              value: o,
              onChange: (_) => z(_.target.value),
            }),
            i.jsx("button", {
              title: "Remove selected color",
              className: "tool",
              onClick: L,
              children: i.jsx(zc, { size: 15 }),
            }),
          ],
        }),
    ],
  });
}
function qf({
  selection: h,
  multiSelect: C,
  setMultiSelect: o,
  clearSelection: N,
  exportSelection: u,
  createLayer: z,
}) {
  const L = !!h?.pixelCount;
  return i.jsxs("div", {
    className: "card mt-3 p-3",
    children: [
      i.jsx("div", {
        className: "section-title",
        children: "Object Selection",
      }),
      i.jsxs("label", {
        className:
          "mt-3 flex items-center justify-between text-[11px] text-ui-muted",
        children: [
          "Continue click to add objects",
          i.jsx("input", {
            type: "checkbox",
            checked: C,
            onChange: (_) => o(_.target.checked),
          }),
        ],
      }),
      i.jsx("p", {
        className: "subtle mt-2",
        children:
          "Click non-transparent pixels. Shift adds, Alt removes, transparent area clears.",
      }),
      i.jsxs("div", {
        className: "mt-3 grid grid-cols-2 gap-2 text-[11px]",
        children: [
          i.jsx("span", { className: "text-ui-muted", children: "Objects" }),
          i.jsx("b", {
            className: "text-right",
            children: h?.objectCount ?? 0,
          }),
          i.jsx("span", { className: "text-ui-muted", children: "Pixels" }),
          i.jsx("b", { className: "text-right", children: h?.pixelCount ?? 0 }),
          i.jsx("span", { className: "text-ui-muted", children: "Bounds" }),
          i.jsx("b", {
            className: "text-right",
            children: h?.bounds
              ? `${h.bounds.width} × ${h.bounds.height}`
              : "-",
          }),
        ],
      }),
      i.jsxs("button", {
        className: "btn primary mt-3 w-full",
        disabled: !L,
        onClick: () => u(!1),
        children: [
          i.jsx(ta, { className: "mr-2 inline", size: 15 }),
          "Export Trimmed PNG",
        ],
      }),
      i.jsxs("button", {
        className: "btn mt-2 w-full",
        disabled: !L,
        onClick: () => u(!0),
        children: [
          i.jsx(ta, { className: "mr-2 inline", size: 15 }),
          "Export Canvas Size",
        ],
      }),
      i.jsxs("button", {
        className: "btn mt-2 w-full",
        disabled: !L,
        onClick: () => z(!1),
        children: [
          i.jsx(Ef, { className: "mr-2 inline", size: 15 }),
          "Duplicate to Layer",
        ],
      }),
      i.jsxs("button", {
        className: "btn mt-2 w-full",
        disabled: !L,
        onClick: () => z(!0),
        children: [
          i.jsx(Gf, { className: "mr-2 inline", size: 15 }),
          "Move to Layer",
        ],
      }),
      i.jsxs("button", {
        className: "btn mt-2 w-full",
        disabled: !L,
        onClick: N,
        children: [
          i.jsx($s, { className: "mr-2 inline", size: 15 }),
          "Clear Selection",
        ],
      }),
    ],
  });
}
function Jf({
  baseVisible: h,
  setBaseVisible: C,
  activeLayerId: o,
  setActiveLayerId: N,
  layers: u,
  setLayers: z,
  exportLayer: L,
  labels: _,
}) {
  return i.jsxs("div", {
    className: "card mt-3 p-3",
    children: [
      i.jsxs("div", {
        className: "section-title",
        children: [
          i.jsx(Lf, { className: "mr-2", size: 15 }),
          _.layers,
          " ",
          i.jsx("span", {
            className: "ml-auto text-ui-muted",
            children: u.length + 1,
          }),
        ],
      }),
      i.jsxs("div", {
        className: `mt-3 flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition ${o === "base" ? "border-ui-accent bg-ui-accent/10 ring-1 ring-ui-accent/40" : "border-ui-line bg-ui-panel2"}`,
        onClick: () => N("base"),
        children: [
          i.jsx("button", {
            title: h ? _.hideBaseLayer : _.showBaseLayer,
            className: `tool h-8 min-w-8 ${h ? "text-ui-good" : ""}`,
            onClick: (D) => {
              (D.stopPropagation(), C(!h));
            },
            children: h ? i.jsx(gc, { size: 15 }) : i.jsx(mc, { size: 15 }),
          }),
          i.jsx(Mf, { size: 15, className: "text-ui-muted" }),
          i.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              i.jsx("b", {
                className: "block truncate text-[11px]",
                children: _.originalBaseLayer,
              }),
              i.jsx("span", {
                className: "block text-[9px] text-ui-muted",
                children:
                  o === "base" ? _.activeEditLayer : _.defaultImageLayer,
              }),
            ],
          }),
          i.jsx("span", {
            className:
              "rounded bg-ui-accent/20 px-2 py-1 text-[9px] text-ui-accent",
            children: _.base,
          }),
        ],
      }),
      i.jsx("div", {
        className: "mt-2 space-y-2",
        children: u.map((D) =>
          i.jsxs(
            "div",
            {
              className: `flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition ${o === D.id ? "border-ui-accent bg-ui-accent/10 ring-1 ring-ui-accent/40" : "border-ui-line bg-ui-panel2"}`,
              onClick: () => N(D.id),
              children: [
                i.jsx("button", {
                  title: D.visible ? _.hideLayer : _.showLayer,
                  className: `tool h-8 min-w-8 ${D.visible ? "text-ui-good" : ""}`,
                  onClick: (F) => {
                    (F.stopPropagation(),
                      z(
                        u.map((U) =>
                          U.id === D.id ? { ...U, visible: !U.visible } : U,
                        ),
                      ));
                  },
                  children: D.visible
                    ? i.jsx(gc, { size: 15 })
                    : i.jsx(mc, { size: 15 }),
                }),
                i.jsx("input", {
                  className: "field h-8 min-w-0 flex-1",
                  value: D.name,
                  onClick: (F) => F.stopPropagation(),
                  onChange: (F) =>
                    z(
                      u.map((U) =>
                        U.id === D.id ? { ...U, name: F.target.value } : U,
                      ),
                    ),
                }),
                i.jsx("button", {
                  title: D.locked ? _.unlockLayer : _.lockLayer,
                  className: `tool h-8 min-w-8 ${D.locked ? "text-ui-accent" : ""}`,
                  onClick: (F) => {
                    (F.stopPropagation(),
                      z(
                        u.map((U) =>
                          U.id === D.id ? { ...U, locked: !U.locked } : U,
                        ),
                      ));
                  },
                  children: D.locked
                    ? i.jsx(Rf, { size: 15 })
                    : i.jsx(If, { size: 15 }),
                }),
                i.jsx("button", {
                  title: _.exportLayer,
                  className: "tool h-8 min-w-8",
                  onClick: (F) => {
                    (F.stopPropagation(), L(D));
                  },
                  children: i.jsx(ta, { size: 15 }),
                }),
                i.jsx("button", {
                  title: _.deleteLayer,
                  className: "tool h-8 min-w-8",
                  onClick: (F) => {
                    (F.stopPropagation(),
                      z(u.filter((U) => U.id !== D.id)),
                      o === D.id && N("base"));
                  },
                  children: i.jsx(zc, { size: 15 }),
                }),
              ],
            },
            D.id,
          ),
        ),
      }),
      i.jsx("p", { className: "subtle mt-3", children: _.layerHelp }),
    ],
  });
}
const Zf = {
    originalDataUrl: "",
    resultDataUrl: "",
    fileName: "image",
    source: "standard",
    detailPreset: "auto",
    detailStrength: 60,
    outlineStrength: 45,
    sizeMode: "ratio",
    targetWidth: 256,
    targetHeight: 256,
    fit: "contain",
    output: "small",
    colorDepth: 64,
    palette: "none",
    dither: "none",
    background: "transparent",
    backgroundColor: "#ffffff",
  },
  Mc = "pixel-soul-pixel-maker-preferences-v2";
let ut = { ...Zf };
try {
  const h = localStorage.getItem(Mc);
  h &&
    (ut = {
      ...ut,
      ...JSON.parse(h),
      originalDataUrl: "",
      resultDataUrl: "",
      fileName: "image",
    });
} catch {}
const ep = {
    gameboy: [
      [15, 56, 15],
      [48, 98, 48],
      [139, 172, 15],
      [155, 188, 15],
    ],
    pico8: [
      [0, 0, 0],
      [29, 43, 83],
      [126, 37, 83],
      [0, 135, 81],
      [171, 82, 54],
      [95, 87, 79],
      [194, 195, 199],
      [255, 241, 232],
      [255, 0, 77],
      [255, 163, 0],
      [255, 236, 39],
      [0, 228, 54],
      [41, 173, 255],
      [131, 118, 156],
      [255, 119, 168],
      [255, 204, 170],
    ],
    nes: [
      [124, 124, 124],
      [0, 0, 252],
      [68, 40, 188],
      [148, 0, 132],
      [168, 0, 32],
      [80, 48, 0],
      [0, 120, 0],
      [0, 88, 0],
      [0, 64, 88],
      [188, 188, 188],
      [0, 120, 248],
      [104, 68, 252],
      [216, 0, 204],
      [248, 56, 0],
      [172, 124, 0],
      [0, 184, 0],
      [0, 168, 68],
      [248, 248, 248],
    ],
    bw: [
      [0, 0, 0],
      [255, 255, 255],
    ],
  },
  tp = {
    en: {
      title: "Pixel Converter",
      hint: "Size conversion, palette, dithering and background",
      choose: "Choose Image",
      source: "Source Type",
      sharp: "Standard Pixel Conversion",
      detail: "Detail-Preserving Pixelization",
      detailHelp:
        "Preserves outlines, eyes, lines, and high-contrast details while downscaling.",
      detailPreset: "Detail Preservation",
      autoPreset: "Auto",
      softPreset: "Soft",
      standardPreset: "Standard",
      strongPreset: "Strong",
      customPreset: "Custom",
      advanced: "Advanced Settings",
      detailStrength: "Detail Protection",
      outlineStrength: "Outline Strength",
      mode: "Size Mode",
      ratio: "Keep aspect ratio by width",
      custom: "Custom width / height",
      square: "Square icon",
      presets: "Preset Sizes",
      width: "Target Width (px)",
      height: "Target Height (px)",
      fit: "Fit Mode",
      contain: "Contain, keep full image",
      cover: "Center crop, fill canvas",
      stretch: "Stretch to fill",
      output: "Output Size",
      large: "Upscale to original size",
      small: "Export true pixel size",
      depth: "Color Depth",
      originalColors: "Original colors",
      palette: "Palette",
      dither: "Dithering",
      off: "Off",
      background: "Background Mode",
      transparent: "Keep transparent",
      white: "White background",
      black: "Black background",
      customBg: "Custom color",
      compare: "Hold to view original",
      reset: "Reset",
      save: "Save Result",
      copy: "Copy Result",
      copied: "Processed image copied",
      paste: "Choose, drop, or press Ctrl+V to paste an image",
      original: "ORIGINAL",
      processed: "PROCESSED",
    },
    "zh-Hans": {
      title: "像素转换",
      hint: "尺寸转换、调色板、抖动与背景设置",
      choose: "选择图片",
      source: "原图型别",
      sharp: "标准像素转换",
      detail: "细节保留像素化",
      detailHelp: "缩小时优先保留轮廓、眼睛、线条和高对比细节。",
      detailPreset: "细节保留",
      autoPreset: "自动",
      softPreset: "柔和",
      standardPreset: "标准",
      strongPreset: "强化",
      customPreset: "自定义",
      advanced: "高阶设置",
      detailStrength: "细节保护",
      outlineStrength: "轮廓强度",
      mode: "尺寸模式",
      ratio: "按宽度等比例",
      custom: "自定义宽高",
      square: "正方形图示",
      presets: "常用尺寸",
      width: "目标宽度(px)",
      height: "目标高度(px)",
      fit: "适配方式",
      contain: "保持完整，留边",
      cover: "居中裁剪，填满",
      stretch: "拉伸填满",
      output: "输出尺寸",
      large: "拉伸回原图大尺寸",
      small: "缩小为真实像素尺寸",
      depth: "色彩深度",
      originalColors: "原图色彩",
      palette: "调色板",
      dither: "抖动 Dithering",
      off: "关闭",
      background: "背景模式",
      transparent: "保留透明",
      white: "白色背景",
      black: "黑色背景",
      customBg: "自定义颜色",
      compare: "按住看原图",
      reset: "重置参数",
      save: "保存结果",
      copy: "复制结果",
      copied: "已复制当前转换结果",
      paste: "可选择、拖入或按 Ctrl+V 粘贴图片",
      original: "原图",
      processed: "处理结果",
    },
    "zh-Hant": {
      title: "像素轉換",
      hint: "尺寸轉換、調色盤、抖動與背景設定",
      choose: "選擇圖片",
      source: "原圖型別",
      sharp: "標準像素轉換",
      detail: "細節保留像素化",
      detailHelp: "縮小時優先保留輪廓、眼睛、線條和高對比細節。",
      detailPreset: "細節保留",
      autoPreset: "自動",
      softPreset: "柔和",
      standardPreset: "標準",
      strongPreset: "強化",
      customPreset: "自定義",
      advanced: "高階設定",
      detailStrength: "細節保護",
      outlineStrength: "輪廓強度",
      mode: "尺寸模式",
      ratio: "按寬度等比例",
      custom: "自定義寬高",
      square: "正方形圖示",
      presets: "常用尺寸",
      width: "目標寬度(px)",
      height: "目標高度(px)",
      fit: "適配方式",
      contain: "保持完整，留邊",
      cover: "居中裁剪，填滿",
      stretch: "拉伸填滿",
      output: "輸出尺寸",
      large: "拉伸回原圖大尺寸",
      small: "縮小為真實像素尺寸",
      depth: "色彩深度",
      originalColors: "原圖色彩",
      palette: "調色盤",
      dither: "抖動 Dithering",
      off: "關閉",
      background: "背景模式",
      transparent: "保留透明",
      white: "白色背景",
      black: "黑色背景",
      customBg: "自定義顏色",
      compare: "按住看原圖",
      reset: "重置引數",
      save: "儲存結果",
      copy: "複製結果",
      copied: "已複製當前轉換結果",
      paste: "可選擇、拖入或按 Ctrl+V 貼上圖片",
      original: "原圖",
      processed: "處理結果",
    },
    ko: {
      title: "픽셀 변환",
      hint: "크기 변환, 팔레트, 디더링 및 배경 설정",
      choose: "이미지 선택",
      source: "원본 유형",
      sharp: "표준 픽셀 변환",
      detail: "디테일 보존 픽셀화",
      detailHelp: "축소 시 윤곽, 눈, 선 및 고대비 디테일을 우선 보존합니다.",
      detailPreset: "디테일 보존",
      autoPreset: "자동",
      softPreset: "부드럽게",
      standardPreset: "표준",
      strongPreset: "강화",
      customPreset: "사용자 지정",
      advanced: "고급 설정",
      detailStrength: "디테일 보호",
      outlineStrength: "윤곽 강도",
      mode: "크기 모드",
      ratio: "너비 기준 비율 유지",
      custom: "사용자 지정 너비/높이",
      square: "정사각형 아이콘",
      presets: "자주 쓰는 크기",
      width: "목표 너비(px)",
      height: "목표 높이(px)",
      fit: "맞춤 방식",
      contain: "전체 유지, 여백 추가",
      cover: "중앙 자르기, 채우기",
      stretch: "늘려서 채우기",
      output: "출력 크기",
      large: "원본 크기로 확대",
      small: "실제 픽셀 크기",
      depth: "색상 깊이",
      originalColors: "원본 색상",
      palette: "팔레트",
      dither: "디더링",
      off: "끄기",
      background: "배경 모드",
      transparent: "투명 유지",
      white: "흰색 배경",
      black: "검은색 배경",
      customBg: "사용자 색상",
      compare: "누르고 원본 보기",
      reset: "초기화",
      save: "결과 저장",
      copy: "결과 복사",
      copied: "변환 결과를 복사했습니다",
      paste: "이미지를 선택하거나 드래그하거나 Ctrl+V로 붙여넣으세요",
      original: "원본",
      processed: "처리 결과",
    },
    ja: {
      title: "ピクセル変換",
      hint: "サイズ変換、パレット、ディザリング、背景設定",
      choose: "画像を選択",
      source: "元画像タイプ",
      sharp: "標準ピクセル変換",
      detail: "ディテール保持ピクセル化",
      detailHelp:
        "縮小時に輪郭、目、線、高コントラストのディテールを優先して保持します。",
      detailPreset: "ディテール保持",
      autoPreset: "自動",
      softPreset: "ソフト",
      standardPreset: "標準",
      strongPreset: "強化",
      customPreset: "カスタム",
      advanced: "詳細設定",
      detailStrength: "ディテール保護",
      outlineStrength: "輪郭強度",
      mode: "サイズモード",
      ratio: "幅基準で比率維持",
      custom: "幅・高さを指定",
      square: "正方形アイコン",
      presets: "プリセットサイズ",
      width: "目標幅(px)",
      height: "目標高さ(px)",
      fit: "フィット方式",
      contain: "全体を保持、余白あり",
      cover: "中央トリミング、全面配置",
      stretch: "引き伸ばして配置",
      output: "出力サイズ",
      large: "元画像サイズへ拡大",
      small: "実ピクセルサイズ",
      depth: "色深度",
      originalColors: "元の色",
      palette: "パレット",
      dither: "ディザリング",
      off: "オフ",
      background: "背景モード",
      transparent: "透明を保持",
      white: "白背景",
      black: "黒背景",
      customBg: "カスタム色",
      compare: "長押しで元画像表示",
      reset: "リセット",
      save: "結果を保存",
      copy: "結果をコピー",
      copied: "変換結果をコピーしました",
      paste: "画像を選択、ドロップ、またはCtrl+Vで貼り付け",
      original: "元画像",
      processed: "処理結果",
    },
  };
function np(h, C, o, N) {
  let u = N[0],
    z = Number.MAX_VALUE;
  for (const L of N) {
    const _ = (h - L[0]) ** 2 + (C - L[1]) ** 2 + (o - L[2]) ** 2;
    _ < z && ((z = _), (u = L));
  }
  return u;
}
function rp(h, C) {
  return h === "white"
    ? "#fff"
    : h === "black"
      ? "#000"
      : h === "custom"
        ? C
        : null;
}
function lp({ language: h, onMessage: C }) {
  const o = tp[h],
    N = g.useRef(null),
    u = g.useRef(null),
    z = g.useRef(null),
    [L, _] = g.useState(null),
    [D, F] = g.useState(ut.originalDataUrl),
    [U, q] = g.useState(ut.resultDataUrl),
    [X, Ce] = g.useState(ut.fileName),
    [me, le] = g.useState(ut.source),
    [y, H] = g.useState(ut.detailPreset),
    [ae, xe] = g.useState(ut.detailStrength),
    [te, Z] = g.useState(ut.outlineStrength),
    [ne, se] = g.useState(!1),
    [de, Be] = g.useState(ut.sizeMode),
    [Se, Fe] = g.useState(ut.targetWidth),
    [Re, Me] = g.useState(ut.targetHeight),
    [fe, De] = g.useState(ut.fit),
    [$e, Le] = g.useState(ut.output),
    [O, w] = g.useState(ut.colorDepth),
    [M, p] = g.useState(ut.palette),
    [E, V] = g.useState(ut.dither),
    [ie, ce] = g.useState(ut.background),
    [j, Y] = g.useState(ut.backgroundColor),
    [he, oe] = g.useState(!1),
    [qe, at] = g.useState(4),
    [St, jt] = g.useState(!1),
    [nn, Ze] = g.useState(ut.targetWidth),
    [$t, Bt] = g.useState(ut.targetHeight),
    [k, $] = g.useState(ut.detailStrength),
    [we, ke] = g.useState(ut.outlineStrength),
    be = g.useRef(null);
  (g.useEffect(() => {
    if (!D || L) return;
    const P = new Image();
    ((P.onload = () => _(P)), (P.src = D));
  }, []),
    g.useEffect(() => {
      ut = {
        originalDataUrl: D,
        resultDataUrl: U,
        fileName: X,
        source: me,
        detailPreset: y,
        detailStrength: ae,
        outlineStrength: te,
        sizeMode: de,
        targetWidth: Se,
        targetHeight: Re,
        fit: fe,
        output: $e,
        colorDepth: O,
        palette: M,
        dither: E,
        background: ie,
        backgroundColor: j,
      };
      try {
        localStorage.setItem(
          Mc,
          JSON.stringify({
            source: me,
            detailPreset: y,
            detailStrength: ae,
            outlineStrength: te,
            sizeMode: de,
            targetWidth: Se,
            targetHeight: Re,
            fit: fe,
            output: $e,
            colorDepth: O,
            palette: M,
            dither: E,
            background: ie,
            backgroundColor: j,
          }),
        );
      } catch {}
    }, [D, U, X, me, y, ae, te, de, Se, Re, fe, $e, O, M, E, ie, j]),
    g.useEffect(() => {
      const P = window.setTimeout(() => {
        (Ze(Se), Bt(Re), $(ae), ke(te));
      }, 140);
      return () => window.clearTimeout(P);
    }, [Se, Re, ae, te]));
  function Ge(P) {
    if (!P.type.startsWith("image/")) return;
    const B = new FileReader();
    ((B.onload = () => {
      const ge = new Image();
      ((ge.onload = () => {
        (_(ge), F(String(B.result)), Ce(P.name.replace(/\.[^.]+$/, "")));
        const Ne = 256;
        (Fe(Ne), Me(Ne));
      }),
        (ge.src = String(B.result)));
    }),
      B.readAsDataURL(P));
  }
  (g.useEffect(() => {
    const P = (ge) => {
      const Ne =
        ge.detail || localStorage.getItem("pixel-soul-ai-transfer") || "";
      if (!Ne) return;
      const je = new Image();
      ((je.onload = () => {
        (_(je), F(Ne), Ce("ai-generated"));
        const _e = 256;
        (Fe(_e), Me(_e), localStorage.removeItem("pixel-soul-ai-transfer"));
      }),
        (je.src = Ne));
    };
    window.addEventListener("pixel-soul-ai-transfer", P);
    const B = localStorage.getItem("pixel-soul-ai-transfer");
    return (
      B && P(new CustomEvent("pixel-soul-ai-transfer", { detail: B })),
      () => window.removeEventListener("pixel-soul-ai-transfer", P)
    );
  }, []),
    g.useEffect(() => {
      const P = (B) => {
        const Ne = Array.from(B.clipboardData?.items || [])
          .find((je) => je.type.startsWith("image/"))
          ?.getAsFile();
        Ne && (B.preventDefault(), Ge(Ne));
      };
      return (
        window.addEventListener("paste", P),
        () => window.removeEventListener("paste", P)
      );
    }, []));
  function W(P, B, ge, Ne) {
    if (fe === "stretch" || de === "ratio") {
      P.drawImage(B, 0, 0, ge, Ne);
      return;
    }
    const je = B.width / B.height,
      _e = ge / Ne;
    let st = 0,
      ht = 0,
      Te = B.width,
      Ee = B.height,
      Pe = 0,
      Ue = 0,
      Ke = ge,
      vt = Ne;
    fe === "cover"
      ? (je > _e
          ? ((Te = B.height * _e), (st = (B.width - Te) / 2))
          : ((Ee = B.width / _e), (ht = (B.height - Ee) / 2)),
        P.drawImage(B, st, ht, Te, Ee, 0, 0, ge, Ne))
      : (je > _e
          ? ((vt = ge / je), (Ue = (Ne - vt) / 2))
          : ((Ke = Ne * je), (Pe = (ge - Ke) / 2)),
        P.drawImage(B, Pe, Ue, Ke, vt));
  }
  function He(P, B, ge) {
    return 0.2126 * P + 0.7152 * B + 0.0722 * ge;
  }
  function tt() {
    return y === "strong"
      ? { detail: 100, outline: 100 }
      : y === "custom"
        ? { detail: ae, outline: te }
        : {
            detail: Math.max(
              44,
              Math.min(
                78,
                52 +
                  Math.round(
                    (1 - Math.min(1, Se / Math.max(1, L?.width || Se))) * 28,
                  ),
              ),
            ),
            outline: Math.max(
              30,
              Math.min(
                65,
                38 +
                  Math.round(
                    (1 - Math.min(1, Se / Math.max(1, L?.width || Se))) * 25,
                  ),
              ),
            ),
          };
  }
  function pt(P, B, ge) {
    const Ne = document.createElement("canvas");
    ((Ne.width = P.width), (Ne.height = P.height));
    const je = Ne.getContext("2d", { willReadFrequently: !0 });
    ((je.imageSmoothingEnabled = !0), W(je, P, P.width, P.height));
    const _e = document.createElement("canvas");
    ((_e.width = B), (_e.height = ge));
    const st = _e.getContext("2d", { willReadFrequently: !0 });
    ((st.imageSmoothingEnabled = !0), W(st, P, B, ge));
    const ht = P.width / B,
      Te = P.height / ge,
      Ee = je.getImageData(0, 0, P.width, P.height),
      Pe = st.getImageData(0, 0, B, ge),
      Ue = new ImageData(B, ge),
      Ke = tt(),
      vt = y === "custom" ? k : Ke.detail,
      yt = y === "custom" ? we : Ke.outline,
      et = Math.max(1, Math.min(4, Math.round(Math.max(ht, Te) / 3))),
      zt = 14 + (100 - vt) * 0.5,
      Ht = yt / 100,
      cn = vt / 100;
    for (let Wt = 0; Wt < ge; Wt++)
      for (let Nt = 0; Nt < B; Nt++) {
        const rn = (Nt + 0.5) * ht - 0.5,
          yn = (Wt + 0.5) * Te - 0.5,
          dn = Math.max(0, Math.min(P.width - 1, Math.round(rn))),
          xn = Math.max(0, Math.min(P.height - 1, Math.round(yn)));
        let Ln = -1,
          gr = 0,
          ln = 0,
          Hn = 0,
          vr = 0;
        for (let Ye = -et; Ye <= et; Ye++)
          for (let Wn = -et; Wn <= et; Wn++) {
            const Vn = Math.max(0, Math.min(P.width - 1, dn + Wn)),
              xr = Math.max(0, Math.min(P.height - 1, xn + Ye)),
              Ct = (xr * P.width + Vn) * 4;
            if (Ee.data[Ct + 3] < 8) continue;
            const In = He(Ee.data[Ct], Ee.data[Ct + 1], Ee.data[Ct + 2]);
            let Gn = 0;
            for (const [Or, Tt] of [
              [-1, 0],
              [1, 0],
              [0, -1],
              [0, 1],
            ]) {
              const Kn = Math.max(0, Math.min(P.width - 1, Vn + Or)),
                fl = Math.max(0, Math.min(P.height - 1, xr + Tt)),
                wr = (fl * P.width + Kn) * 4;
              Gn = Math.max(
                Gn,
                Math.abs(
                  In - He(Ee.data[wr], Ee.data[wr + 1], Ee.data[wr + 2]),
                ),
              );
            }
            const Qn = Math.hypot(Wn, Ye) / (et + 1),
              Dt = Gn * (1 - Qn * 0.35) + Math.abs(In - 128) * 0.05;
            Dt > Ln &&
              ((Ln = Dt),
              (gr = Ee.data[Ct]),
              (ln = Ee.data[Ct + 1]),
              (Hn = Ee.data[Ct + 2]),
              (vr = Ee.data[Ct + 3]));
          }
        const Je = (Wt * B + Nt) * 4,
          Xt = Pe.data[Je],
          yr = Pe.data[Je + 1],
          Dr = Pe.data[Je + 2],
          Tr = Pe.data[Je + 3],
          dl = Ln > zt,
          wn = dl ? Math.min(0.92, 0.12 + cn * 0.55 + Ht * 0.25) : 0;
        ((Ue.data[Je] = Math.round(Xt * (1 - wn) + gr * wn)),
          (Ue.data[Je + 1] = Math.round(yr * (1 - wn) + ln * wn)),
          (Ue.data[Je + 2] = Math.round(Dr * (1 - wn) + Hn * wn)),
          (Ue.data[Je + 3] = Math.max(
            Tr,
            Math.round(vr * (0.45 + 0.55 * Ht)),
          )));
      }
    const Lt = document.createElement("canvas");
    return (
      (Lt.width = B),
      (Lt.height = ge),
      Lt.getContext("2d").putImageData(Ue, 0, 0),
      Lt
    );
  }
  function rt(P, B, ge) {
    const Ne = P.getImageData(0, 0, B, ge),
      je = Ne.data,
      _e = Math.max(2, O),
      st = M === "none" ? null : ep[M],
      ht = (Te, Ee, Pe) =>
        st
          ? np(Te, Ee, Pe, st)
          : [
              Math.round(Te / (255 / (_e - 1))) * (255 / (_e - 1)),
              Math.round(Ee / (255 / (_e - 1))) * (255 / (_e - 1)),
              Math.round(Pe / (255 / (_e - 1))) * (255 / (_e - 1)),
            ];
    if (E === "floyd") {
      const Te = new Float32Array(je.length);
      for (let Pe = 0; Pe < je.length; Pe++) Te[Pe] = je[Pe];
      const Ee = (Pe, Ue, Ke, vt, yt, et) => {
        if (Pe < 0 || Pe >= B || Ue < 0 || Ue >= ge) return;
        const zt = (Ue * B + Pe) * 4;
        ((Te[zt] += Ke * et), (Te[zt + 1] += vt * et), (Te[zt + 2] += yt * et));
      };
      for (let Pe = 0; Pe < ge; Pe++)
        for (let Ue = 0; Ue < B; Ue++) {
          const Ke = (Pe * B + Ue) * 4;
          if (!je[Ke + 3]) continue;
          const vt = Math.max(0, Math.min(255, Te[Ke])),
            yt = Math.max(0, Math.min(255, Te[Ke + 1])),
            et = Math.max(0, Math.min(255, Te[Ke + 2])),
            zt = ht(vt, yt, et);
          ((je[Ke] = zt[0]), (je[Ke + 1] = zt[1]), (je[Ke + 2] = zt[2]));
          const Ht = vt - zt[0],
            cn = yt - zt[1],
            Lt = et - zt[2];
          (Ee(Ue + 1, Pe, Ht, cn, Lt, 7 / 16),
            Ee(Ue - 1, Pe + 1, Ht, cn, Lt, 3 / 16),
            Ee(Ue, Pe + 1, Ht, cn, Lt, 5 / 16),
            Ee(Ue + 1, Pe + 1, Ht, cn, Lt, 1 / 16));
        }
    } else {
      const Te = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5],
      ];
      for (let Ee = 0; Ee < ge; Ee++)
        for (let Pe = 0; Pe < B; Pe++) {
          const Ue = (Ee * B + Pe) * 4;
          if (!je[Ue + 3]) continue;
          let Ke = je[Ue],
            vt = je[Ue + 1],
            yt = je[Ue + 2];
          if (E === "ordered") {
            const et = (Te[Ee % 4][Pe % 4] - 7.5) * 8;
            ((Ke = Math.max(0, Math.min(255, Ke + et))),
              (vt = Math.max(0, Math.min(255, vt + et))),
              (yt = Math.max(0, Math.min(255, yt + et))));
          }
          if (_e < 64 || st) {
            const et = ht(Ke, vt, yt);
            ((je[Ue] = et[0]), (je[Ue + 1] = et[1]), (je[Ue + 2] = et[2]));
          }
        }
    }
    P.putImageData(Ne, 0, 0);
  }
  g.useEffect(() => {
    if (!L) return;
    const P = u.current,
      B = P.getContext("2d");
    ((P.width = L.width),
      (P.height = L.height),
      B.clearRect(0, 0, L.width, L.height),
      B.drawImage(L, 0, 0));
    const ge = Math.max(1, nn),
      Ne =
        de === "ratio"
          ? Math.max(1, Math.floor((ge * L.height) / L.width))
          : de === "square"
            ? ge
            : Math.max(1, $t),
      je = document.createElement("canvas");
    ((je.width = ge), (je.height = Ne));
    const _e = je.getContext("2d", { willReadFrequently: !0 }),
      st = rp(ie, j);
    if (
      (st && ((_e.fillStyle = st), _e.fillRect(0, 0, ge, Ne)), me === "detail")
    ) {
      const Ue = pt(L, ge, Ne);
      ((_e.imageSmoothingEnabled = !1), _e.drawImage(Ue, 0, 0, ge, Ne));
    } else ((_e.imageSmoothingEnabled = !1), W(_e, L, ge, Ne));
    rt(_e, ge, Ne);
    let ht = ge,
      Te = Ne;
    $e === "large" && ((ht = L.width), (Te = L.height));
    const Ee = z.current,
      Pe = Ee.getContext("2d");
    ((Ee.width = ht),
      (Ee.height = Te),
      st && ((Pe.fillStyle = st), Pe.fillRect(0, 0, ht, Te)),
      (Pe.imageSmoothingEnabled = !1),
      Pe.drawImage(je, 0, 0, ht, Te),
      q(Ee.toDataURL("image/png")));
  }, [L, me, y, k, we, de, nn, $t, fe, $e, O, M, E, ie, j]);
  const Ie = () =>
    new Promise((P, B) =>
      z.current?.toBlob(
        (ge) => (ge ? P(ge) : B(new Error("PNG export failed"))),
        "image/png",
      ),
    );
  async function We() {
    try {
      const P = await Ie();
      (await navigator.clipboard.write([new ClipboardItem({ "image/png": P })]),
        C(o.copied));
    } catch (P) {
      C(String(P));
    }
  }
  g.useEffect(() => {
    const P = (B) => {
      !(B.ctrlKey || B.metaKey) ||
        B.key.toLowerCase() !== "c" ||
        !U ||
        B.target?.matches(
          'input, textarea, select, [contenteditable="true"]',
        ) ||
        (document.activeElement !== be.current &&
          !be.current?.matches(":hover")) ||
        (B.preventDefault(), We());
    };
    return (
      window.addEventListener("keydown", P),
      () => window.removeEventListener("keydown", P)
    );
  }, [U, h]);
  async function ct(P) {
    if (!(!U || St)) {
      jt(!0);
      try {
        const B = await Ql({
          defaultPath: `${X}-pixel${P === 1 ? "" : `_${P}x`}.png`,
          filters: [{ name: "PNG", extensions: ["png"] }],
        });
        if (typeof B != "string") return;
        let ge = U;
        if (P !== 1) {
          const Ne = await new Promise((st, ht) => {
              const Te = new Image();
              ((Te.onload = () => st(Te)),
                (Te.onerror = () =>
                  ht(new Error("Unable to prepare export image"))),
                (Te.src = U));
            }),
            je = document.createElement("canvas");
          ((je.width = Ne.naturalWidth * P),
            (je.height = Ne.naturalHeight * P));
          const _e = je.getContext("2d");
          if (!_e) throw new Error("Unable to create export canvas");
          ((_e.imageSmoothingEnabled = !1),
            _e.drawImage(Ne, 0, 0, je.width, je.height),
            (ge = je.toDataURL("image/png")));
        }
        (await Ae("save_data_url", { dataUrl: ge, path: B }),
          oe(!1),
          C(`${o.save} ${P}x ✓`));
      } catch (B) {
        C(String(B));
      } finally {
        jt(!1);
      }
    }
  }
  function Kt() {
    (le("standard"),
      H("auto"),
      xe(60),
      Z(45),
      Be("ratio"),
      Fe(256),
      Me(256),
      De("contain"),
      Le("small"),
      w(64),
      p("none"),
      V("none"),
      ce("transparent"),
      Y("#ffffff"));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: "grid h-full min-h-0 grid-cols-[1fr_330px] gap-3",
        children: [
          i.jsxs("div", {
            className: "grid min-h-0 grid-cols-2 gap-3",
            children: [
              i.jsx(Kl, {
                documentId: `pixel-converter-original:${X}:${D.length}`,
                src: D,
                title: o.original,
                onImageFile: Ge,
              }),
              i.jsx("div", {
                ref: be,
                tabIndex: 0,
                className: "grid h-full min-h-0 outline-none",
                title:
                  h === "zh-Hans" ? "点击处理结果区域后可按 Ctrl+C 复制" : h === "zh-Hant" ? "點選處理結果區域後可按 Ctrl+C 複製"
                    : "Click the processed pane, then press Ctrl+C to copy",
                children: i.jsx(Kl, {
                  documentId: `pixel-converter-result:${X}`,
                  src: U,
                  title: o.processed,
                  enableViewLock: !0,
                }),
              }),
              i.jsx("canvas", { ref: u, className: "hidden" }),
              i.jsx("canvas", { ref: z, className: "hidden" }),
            ],
          }),
          i.jsxs("div", {
            className:
              "stone-scrollbar overflow-auto border-l border-ui-line bg-ui-panel px-4 pb-5",
            children: [
              i.jsx("b", {
                className: "sticky top-0 z-10 block bg-ui-panel py-4",
                children: o.title,
              }),
              i.jsx("p", { className: "subtle", children: o.hint }),
              i.jsxs("button", {
                className: "btn mt-4 w-full",
                onClick: () => N.current?.click(),
                children: [
                  i.jsx(cl, { className: "mr-2 inline", size: 15 }),
                  o.choose,
                ],
              }),
              i.jsx("input", {
                ref: N,
                className: "hidden",
                type: "file",
                accept: "image/*",
                onChange: (P) => P.target.files?.[0] && Ge(P.target.files[0]),
              }),
              i.jsx("label", { className: "label", children: o.source }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: me,
                onChange: (P) => {
                  (le(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", { value: "standard", children: o.sharp }),
                  i.jsx("option", { value: "detail", children: o.detail }),
                ],
              }),
              me === "detail" &&
                i.jsxs("div", {
                  className: "card mt-3 p-3",
                  children: [
                    i.jsx("div", {
                      className: "section-title",
                      children: o.detailPreset,
                    }),
                    i.jsx("p", {
                      className: "subtle mt-2",
                      children: o.detailHelp,
                    }),
                    i.jsx("div", {
                      className: "mt-3 grid grid-cols-3 gap-2",
                      children: [
                        ["auto", o.autoPreset],
                        ["strong", o.strongPreset],
                        ["custom", o.customPreset],
                      ].map(([P, B]) =>
                        i.jsx(
                          "button",
                          {
                            className: `btn text-[10px] ${y === P ? "active" : ""}`,
                            onClick: () => H(P),
                            children: B,
                          },
                          P,
                        ),
                      ),
                    }),
                    i.jsxs("button", {
                      className: "btn mt-3 w-full",
                      onClick: () => se((P) => !P),
                      children: [o.advanced, " ", ne ? "▲" : "▼"],
                    }),
                    ne &&
                      i.jsxs("div", {
                        className: "mt-3",
                        children: [
                          y === "auto" &&
                            i.jsx("p", {
                              className: "subtle mb-3",
                              children:
                                h === "zh-Hans" ? "自动模式会根据原图与目标尺寸选择细节和轮廓强度。" : h === "zh-Hant" ? "自動模式會根據原圖與目標尺寸選擇細節和輪廓強度。"
                                  : "Auto selects detail and outline strength from the source and target size.",
                            }),
                          y === "strong" &&
                            i.jsx("p", {
                              className: "subtle mb-3",
                              children:
                                h === "zh-Hans" ? "强化模式固定使用 100 的细节保护和轮廓强度。" : h === "zh-Hant" ? "強化模式固定使用 100 的細節保護和輪廓強度。"
                                  : "Strong keeps detail protection and outline strength fixed at 100.",
                            }),
                          i.jsxs("div", {
                            className: "label",
                            children: [
                              o.detailStrength,
                              i.jsx("span", {
                                children: y === "custom" ? ae : tt().detail,
                              }),
                            ],
                          }),
                          i.jsx("input", {
                            className: "w-full accent-ui-accent",
                            type: "range",
                            min: "0",
                            max: "100",
                            disabled: y !== "custom",
                            value: y === "custom" ? ae : tt().detail,
                            onChange: (P) => xe(+P.target.value),
                          }),
                          i.jsxs("div", {
                            className: "label",
                            children: [
                              o.outlineStrength,
                              i.jsx("span", {
                                children: y === "custom" ? te : tt().outline,
                              }),
                            ],
                          }),
                          i.jsx("input", {
                            className: "w-full accent-ui-accent",
                            type: "range",
                            min: "0",
                            max: "100",
                            disabled: y !== "custom",
                            value: y === "custom" ? te : tt().outline,
                            onChange: (P) => Z(+P.target.value),
                          }),
                        ],
                      }),
                  ],
                }),
              i.jsx("label", { className: "label", children: o.mode }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: de,
                onChange: (P) => {
                  (Be(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", { value: "ratio", children: o.ratio }),
                  i.jsx("option", { value: "custom", children: o.custom }),
                  i.jsx("option", { value: "square", children: o.square }),
                ],
              }),
              i.jsx("label", { className: "label", children: o.presets }),
              i.jsx("div", {
                className: "grid grid-cols-4 gap-2",
                children: [16, 24, 32, 48, 64, 96, 128, 256].map((P) =>
                  i.jsx(
                    "button",
                    {
                      className: "btn px-1 text-xs",
                      disabled: !L,
                      onClick: () => {
                        (Fe(P), de === "square" && Me(P));
                      },
                      children: P,
                    },
                    P,
                  ),
                ),
              }),
              i.jsxs("label", {
                className: "label",
                children: [o.width, i.jsx("span", { children: Se })],
              }),
              i.jsx("input", {
                className: "w-full accent-ui-accent",
                type: "range",
                min: "1",
                max: Math.max(256, L?.width || 256),
                disabled: !L,
                value: Se,
                onChange: (P) => Fe(Number(P.target.value)),
              }),
              de === "custom" &&
                i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("label", { className: "label", children: o.height }),
                    i.jsx("input", {
                      className: "field",
                      type: "number",
                      min: "1",
                      disabled: !L,
                      value: Re,
                      onChange: (P) =>
                        Me(Math.max(1, Number(P.target.value) || 1)),
                    }),
                  ],
                }),
              i.jsx("label", { className: "label", children: o.fit }),
              i.jsxs("select", {
                className: "field",
                disabled: !L || de === "ratio",
                value: fe,
                onChange: (P) => {
                  (De(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", { value: "contain", children: o.contain }),
                  i.jsx("option", { value: "cover", children: o.cover }),
                  i.jsx("option", { value: "stretch", children: o.stretch }),
                ],
              }),
              i.jsx("label", { className: "label", children: o.output }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: $e,
                onChange: (P) => {
                  (Le(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", { value: "large", children: o.large }),
                  i.jsx("option", { value: "small", children: o.small }),
                ],
              }),
              i.jsxs("label", {
                className: "label",
                children: [
                  o.depth,
                  i.jsx("span", { children: O === 64 ? o.originalColors : O }),
                ],
              }),
              i.jsx("input", {
                className: "w-full accent-ui-accent",
                type: "range",
                min: "2",
                max: "64",
                disabled: !L,
                value: O,
                onChange: (P) => w(Number(P.target.value)),
              }),
              i.jsx("label", { className: "label", children: o.palette }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: M,
                onChange: (P) => {
                  (p(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", {
                    value: "none",
                    children: o.originalColors,
                  }),
                  i.jsx("option", { value: "gameboy", children: "Game Boy" }),
                  i.jsx("option", { value: "pico8", children: "PICO-8" }),
                  i.jsx("option", { value: "nes", children: "NES" }),
                  i.jsx("option", { value: "bw", children: "Black & White" }),
                ],
              }),
              i.jsx("label", { className: "label", children: o.dither }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: E,
                onChange: (P) => {
                  (V(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", { value: "none", children: o.off }),
                  i.jsx("option", {
                    value: "ordered",
                    children: "Ordered Dithering",
                  }),
                  i.jsx("option", {
                    value: "floyd",
                    children: "Floyd-Steinberg",
                  }),
                ],
              }),
              i.jsx("label", { className: "label", children: o.background }),
              i.jsxs("select", {
                className: "field",
                disabled: !L,
                value: ie,
                onChange: (P) => {
                  (ce(P.target.value), P.currentTarget.blur());
                },
                children: [
                  i.jsx("option", {
                    value: "transparent",
                    children: o.transparent,
                  }),
                  i.jsx("option", { value: "white", children: o.white }),
                  i.jsx("option", { value: "black", children: o.black }),
                  i.jsx("option", { value: "custom", children: o.customBg }),
                ],
              }),
              ie === "custom" &&
                i.jsx("input", {
                  className: "mt-2 h-9 w-full",
                  type: "color",
                  value: j,
                  onChange: (P) => Y(P.target.value),
                }),
              i.jsxs("button", {
                className: "btn mt-4 w-full",
                disabled: !L,
                onClick: Kt,
                children: [
                  i.jsx(Hf, { className: "mr-1 inline", size: 14 }),
                  o.reset,
                ],
              }),
              i.jsxs("button", {
                className: "btn primary mt-2 w-full",
                disabled: !L,
                onClick: () => {
                  (at(4), oe(!0));
                },
                children: [
                  i.jsx(ta, { className: "mr-2 inline", size: 15 }),
                  o.save,
                ],
              }),
              i.jsxs("button", {
                className: "btn mt-2 w-full",
                disabled: !L,
                onClick: We,
                children: [
                  i.jsx(Pc, { className: "mr-2 inline", size: 15 }),
                  o.copy,
                ],
              }),
            ],
          }),
        ],
      }),
      he &&
        i.jsx("div", {
          className:
            "fixed inset-0 z-[120] grid place-items-center bg-black/70 p-4",
          onMouseDown: (P) => {
            P.target === P.currentTarget && !St && oe(!1);
          },
          children: i.jsxs("div", {
            className:
              "w-full max-w-[460px] rounded-2xl border border-ui-line bg-ui-panel p-5 shadow-2xl",
            children: [
              i.jsxs("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("h3", {
                        className: "m-0 text-lg font-bold",
                        children:
                          h === "zh-Hans" ? "导出像素转换结果" : h === "zh-Hant" ? "匯出像素轉換結果"
                            : "Export Pixel Conversion",
                      }),
                      i.jsx("p", {
                        className: "subtle mt-1",
                        children:
                          h === "zh-Hans" ? "选择整数倍率，最近邻导出保持像素清晰。" : h === "zh-Hant" ? "選擇整數倍率，最近鄰匯出保持像素清晰。"
                            : "Choose an integer nearest-neighbor scale.",
                      }),
                    ],
                  }),
                  i.jsx("button", {
                    className: "tool",
                    disabled: St,
                    onClick: () => oe(!1),
                    children: "×",
                  }),
                ],
              }),
              i.jsx("div", {
                className: "mt-5 grid grid-cols-4 gap-2",
                children: [1, 2, 4, 8].map((P) =>
                  i.jsxs(
                    "button",
                    {
                      className: `btn h-14 ${qe === P ? "active ring-2 ring-ui-accent/50" : ""}`,
                      onClick: () => at(P),
                      children: [
                        i.jsxs("span", {
                          className: "block text-base font-bold",
                          children: [P, "×"],
                        }),
                        i.jsx("span", {
                          className: "block text-[9px] opacity-70",
                          children: P === 1 ? "Original" : "Pixel Perfect",
                        }),
                      ],
                    },
                    P,
                  ),
                ),
              }),
              i.jsxs("div", {
                className: "mt-5 grid grid-cols-[110px_1fr] gap-2",
                children: [
                  i.jsx("button", {
                    className: "btn",
                    disabled: St,
                    onClick: () => oe(!1),
                    children: h === "zh-Hans" ? "取消" : h === "zh-Hant" ? "取消" : "Cancel",
                  }),
                  i.jsx("button", {
                    className: "btn primary",
                    disabled: St,
                    onClick: () => ct(qe),
                    children: St
                      ? h === "zh-Hans" ? "导出中..." : h === "zh-Hant" ? "匯出中..."
                        : "Exporting..."
                      : `${h === "zh-Hans" ? "导出" : h === "zh-Hant" ? "匯出" : "Export"} ${qe}× PNG`,
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Os = {
    en: "English",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
    ko: "한국어",
    ja: "日本語",
  },
  Cc = {
    en: {
      workspace: "Workspace",
      editor: "Pixel Editor",
      batch: "Batch Processing",
      settings: "Settings",
      appSettings: "Application Settings",
      appSettingsHelp:
        "Product information and application-level preferences are shown in the panel on the right.",
      batchHelp:
        "Process a complete folder with one consistent pixel size, color count, and palette.",
      inputFolder: "Input Folder",
      noFolder: "No folder selected",
      batchPanelHelp:
        "Choose the folder and batch options from the dedicated panel on the right.",
      processingSettings: "Processing Settings",
      singleProcessing: "Single-image processing",
      chooseImage: "Choose Image",
      colorCount: "Color Count",
      pixelSize: "Pixel Size",
      automatic: "Automatic",
      fixedPalette: "Fixed Palette",
      colorPalette: "Color Palette",
      output: "Output",
      generate: "Generate Preview",
      processing: "Processing...",
      saveResult: "Save Result",
      sendEditor: "Send to Pixel Editor",
      batchSettings: "Batch Settings",
      folderOnly: "Folder processing only",
      chooseInputFolder: "Choose Input Folder",
      outputFolder: "Output Folder",
      chooseOutput: "Choose an output folder",
      runBatch: "Run Batch Processing",
      application: "Application",
      version: "Version",
      processingCore: "Processing Core",
      status: "Status",
      ready: "Ready",
      coreHelp:
        "The processing core is an internal component. Its local file path is intentionally hidden from the workspace.",
      language: "Language",
      languageHelp:
        "Choose the display language. The selection is saved automatically.",
      canvasHint:
        "Wheel zoom · Left/Middle drag · Object Select supports continuous multi-click",
      bgPickCleared: "BG Pick cleared",
      connectedPixels: "connected pixels",
      tolerance: "Tolerance",
      batchSelected: "Batch input folder selected",
      batchOutputSelected: "Batch output folder selected",
      imageSelected: "Input image selected",
      unsupportedImage: "This file is not a supported image",
      canvasOriginal: "ORIGINAL",
      canvasProcessed: "PROCESSED",
      canvasEditor: "PIXEL EDITOR",
      drawColor: "Draw color",
      savePng: "Save PNG",
      saving: "Saving…",
      exportTitle: "Export Pixel Art",
      exportHelp: "Integer nearest-neighbor scaling keeps every pixel edge sharp.",
      originalSize: "Original",
      pixelPerfect: "Pixel Perfect",
      exportScaleLabel: "Scale",
      nearestNeighbor: "nearest neighbor",
      formatLabel: "Format",
      pngTransparency: "PNG · transparency preserved",
      filenameSuffix: "Filename suffix",
      none: "None",
      cancel: "Cancel",
      exporting: "Exporting…",
      exportPng: "Export {scale}× PNG",
      exportSaved: "Saved {scale}× pixel-perfect PNG",
      exportToast: "Exported {scale}× PNG with nearest-neighbor scaling",
      exportFailed: "Export failed",
      engineReady: "Engine ready",
      previewReady: "Preview ready",
      editorProperties: "Editor Properties",
      toolSettings: "Tool Settings",
      brushSize: "Brush Size",
      layers: "Layers",
      backgroundRemoval: "Background Removal",
      removalModes: "2 methods",
      autoRemoveHelp:
        "Start with one-click removal. It clears the dominant edge-connected background and keeps the subject.",
      autoRemove: "1 · Auto Remove Background",
      bgPickTitle: "2 · Refine by Clicking the Background",
      bgPickHelp:
        "Choose a tolerance, activate the picker, then click the unwanted background on the canvas. Undo is available if the result is too broad.",
      removalRunning: "Removing background…",
      removalFailed: "Background removal failed",
      chooseEditorImageFirst: "Open an image in Pixel Editor first",
      autoRemoveDone: "Automatic background removal cleared",
      exact: "Exact",
      soft: "Soft",
      wide: "Wide",
      colorRange: "Color similarity",
      exactHelp: "Same color only",
      softHelp: "Small variations",
      wideHelp: "Larger variations",
      narrower: "More precise",
      broader: "Broader",
      bgPickTip: "After activation, click the unwanted area directly on the canvas. Use Undo if too much is removed.",
      activateBgPick: "Activate BG Pick",
      bgPickActive: "BG Pick Active · Click Canvas",
      canvasDisplay: "Canvas Display",
      canvasBackground: "Canvas Background",
      pixelGridColor: "Pixel Grid Color",
      applyVisibleLayers: "Apply Visible Layers",
      pan: "Pan",
      pencil: "Pencil",
      eraser: "Eraser",
      colorPicker: "Color Picker",
      objectSelect: "Object Select",
      bgPick: "BG Pick",
      productOverview: "Product Overview",
      productOverviewHelp:
        "Pixel Soul Studio combines sprite processing, palette control, background cleanup, object selection, layers, and pixel editing.",
      interfaceLanguage: "Interface Language",
      coreStatus: "Core Status",
      currentVersion: "Current Version",
      saved: "Saved",
      unsaved: "Unsaved",
      originalBaseLayer: "Original / Base Layer",
      activeEditLayer: "ACTIVE EDIT LAYER",
      defaultImageLayer: "Default image layer",
      hideBaseLayer: "Hide Base Layer",
      showBaseLayer: "Show Base Layer",
      hideLayer: "Hide layer",
      showLayer: "Show layer",
      unlockLayer: "Unlock layer",
      lockLayer: "Lock layer",
      exportLayer: "Export this layer",
      deleteLayer: "Delete this layer",
      base: "BASE",
      layerHelp:
        "Click a layer row to make it active. Pencil, Eraser, BG Pick and Undo/Redo operate only on the highlighted active layer.",
      batchProgress: "Batch Progress",
      exportScale: "Output Pixel Scale",
      openOutputFolder: "Open Output Folder",
      processedFiles: "Processed files",
      noImagesFound: "No supported images found in the selected folder",
      batchComplete: "Batch processing complete",
    },
    "zh-Hans": {
      workspace: "工作区",
      editor: "像素编辑器",
      batch: "批量处理",
      settings: "设置",
      appSettings: "应用设置",
      appSettingsHelp: "产品信息和应用级首选项显示在右侧面板中。",
      batchHelp: "使用统一的像素尺寸、颜色数量和调色板处理整个文件夹。",
      inputFolder: "输入文件夹",
      noFolder: "尚未选择文件夹",
      batchPanelHelp: "请在右侧专用面板中选择文件夹和批处理选项。",
      processingSettings: "处理设置",
      singleProcessing: "单张图片处理",
      chooseImage: "选择图片",
      colorCount: "颜色数量",
      pixelSize: "像素尺寸",
      automatic: "自动",
      fixedPalette: "固定调色板",
      colorPalette: "调色板",
      output: "输出",
      generate: "生成预览",
      processing: "处理中...",
      saveResult: "保存结果",
      sendEditor: "发送到像素编辑器",
      batchSettings: "批处理设置",
      folderOnly: "仅处理文件夹",
      chooseInputFolder: "选择输入文件夹",
      outputFolder: "输出文件夹",
      chooseOutput: "选择输出文件夹",
      runBatch: "运行批量处理",
      application: "应用",
      version: "版本",
      processingCore: "处理核心",
      status: "状态",
      ready: "就绪",
      coreHelp: "处理核心是内部组件，工作区中不会显示本地文件路径。",
      language: "语言",
      languageHelp: "选择界面显示语言，所选语言会自动保存。",
      canvasHint: "滚轮缩放 · 左键/中键拖动 · 对象选择支持连续多选",
      bgPickCleared: "背景选取已清除",
      connectedPixels: "个连通像素",
      tolerance: "容差",
      batchSelected: "已选择批处理输入文件夹",
      batchOutputSelected: "已选择批处理输出文件夹",
      imageSelected: "已选择输入图片",
      unsupportedImage: "不支持这个图片格式",
      canvasOriginal: "原始图片",
      canvasProcessed: "处理结果",
      canvasEditor: "像素编辑画布",
      drawColor: "绘图颜色",
      savePng: "保存 PNG",
      saving: "正在保存…",
      exportTitle: "导出像素图片",
      exportHelp: "整数倍最邻近缩放可保持每条像素边缘清晰。",
      originalSize: "原始尺寸",
      pixelPerfect: "像素精准",
      exportScaleLabel: "缩放倍率",
      nearestNeighbor: "最邻近缩放",
      formatLabel: "格式",
      pngTransparency: "PNG · 保留透明背景",
      filenameSuffix: "文件名后缀",
      none: "无",
      cancel: "取消",
      exporting: "正在导出…",
      exportPng: "导出 {scale}× PNG",
      exportSaved: "已保存 {scale}× 像素精准 PNG",
      exportToast: "已导出 {scale}× PNG，使用最邻近缩放",
      exportFailed: "导出失败",
      engineReady: "处理核心已就绪",
      previewReady: "预览已生成",
      editorProperties: "编辑器属性",
      toolSettings: "工具设置",
      brushSize: "画笔大小",
      layers: "图层",
      backgroundRemoval: "背景移除",
      removalModes: "2 种方式",
      autoRemoveHelp:
        "建议先按一键移除；它会清除与图片边缘相连的主要背景，并保留中央主体。",
      autoRemove: "1 · 一键移除背景",
      bgPickTitle: "2 · 点击背景进行细修",
      bgPickHelp:
        "选择容差后启用背景选取，再点击画布上的残留背景。若移除过多，可立即使用撤销。",
      removalRunning: "正在移除背景…",
      removalFailed: "背景移除失败",
      chooseEditorImageFirst: "请先在像素编辑器打开图片",
      autoRemoveDone: "自动背景移除已清除",
      exact: "精确",
      soft: "柔和",
      wide: "宽范围",
      colorRange: "颜色相近范围",
      exactHelp: "只清除相同颜色",
      softHelp: "包含些微色差",
      wideHelp: "包含较大色差",
      narrower: "较精准",
      broader: "较广泛",
      bgPickTip: "启用后直接点画布上不要的区域；若清除过多，可按撤销。",
      activateBgPick: "启用背景选取",
      bgPickActive: "背景选取已启用 · 点击画布",
      canvasDisplay: "画布显示",
      canvasBackground: "画布背景",
      pixelGridColor: "像素网格颜色",
      applyVisibleLayers: "应用可见图层",
      pan: "平移",
      pencil: "铅笔",
      eraser: "橡皮擦",
      colorPicker: "取色器",
      objectSelect: "对象选择",
      bgPick: "背景选取",
      productOverview: "产品概览",
      productOverviewHelp:
        "Pixel Soul Studio 整合了精灵图处理、调色板控制、背景清理、对象选择、图层和像素编辑。",
      interfaceLanguage: "界面语言",
      coreStatus: "核心状态",
      currentVersion: "当前版本",
      saved: "已保存",
      unsaved: "未保存",
      originalBaseLayer: "原始图 / 基础图层",
      activeEditLayer: "当前编辑图层",
      defaultImageLayer: "默认图像图层",
      hideBaseLayer: "隐藏基础图层",
      showBaseLayer: "显示基础图层",
      hideLayer: "隐藏图层",
      showLayer: "显示图层",
      unlockLayer: "解锁图层",
      lockLayer: "锁定图层",
      exportLayer: "导出此图层",
      deleteLayer: "删除此图层",
      base: "基础",
      layerHelp:
        "点击图层行可将其设为活动图层。铅笔、橡皮擦、背景选取和撤销/重做仅作用于高亮的活动图层。",
      batchProgress: "批处理进度",
      exportScale: "输出像素倍率",
      openOutputFolder: "打开输出文件夹",
      processedFiles: "已处理文件",
      noImagesFound: "所选文件夹中没有支持的图片",
      batchComplete: "批处理完成",
    },
    "zh-Hant": {
      workspace: "工作區",
      editor: "像素編輯器",
      batch: "批次處理",
      settings: "設定",
      appSettings: "應用設定",
      appSettingsHelp: "產品資訊和應用級首選項顯示在右側面板中。",
      batchHelp: "使用統一的像素尺寸、顏色數量和調色盤處理整個資料夾。",
      inputFolder: "輸入資料夾",
      noFolder: "尚未選擇資料夾",
      batchPanelHelp: "請在右側專用面板中選擇資料夾和批處理選項。",
      processingSettings: "處理設定",
      singleProcessing: "單張圖片處理",
      chooseImage: "選擇圖片",
      colorCount: "顏色數量",
      pixelSize: "像素尺寸",
      automatic: "自動",
      fixedPalette: "固定調色盤",
      colorPalette: "調色盤",
      output: "輸出",
      generate: "生成預覽",
      processing: "處理中...",
      saveResult: "儲存結果",
      sendEditor: "傳送到像素編輯器",
      batchSettings: "批處理設定",
      folderOnly: "僅處理資料夾",
      chooseInputFolder: "選擇輸入資料夾",
      outputFolder: "輸出資料夾",
      chooseOutput: "選擇輸出資料夾",
      runBatch: "執行批次處理",
      application: "應用",
      version: "版本",
      processingCore: "處理核心",
      status: "狀態",
      ready: "就緒",
      coreHelp: "處理核心是內部元件，工作區中不會顯示本地檔案路徑。",
      language: "語言",
      languageHelp: "選擇介面顯示語言，所選語言會自動儲存。",
      canvasHint: "滾輪縮放 · 左鍵/中鍵拖動 · 物件選擇支援連續多選",
      bgPickCleared: "背景選取已清除",
      connectedPixels: "個連通像素",
      tolerance: "容差",
      batchSelected: "已選擇批處理輸入資料夾",
      batchOutputSelected: "已選擇批處理輸出資料夾",
      imageSelected: "已選擇輸入圖片",
      unsupportedImage: "不支援這個圖片格式",
      canvasOriginal: "原始圖片",
      canvasProcessed: "處理結果",
      canvasEditor: "像素編輯畫布",
      drawColor: "繪圖顏色",
      savePng: "儲存 PNG",
      saving: "正在儲存…",
      exportTitle: "匯出像素圖片",
      exportHelp: "整數倍最鄰近縮放能保持每條像素邊緣清晰。",
      originalSize: "原始尺寸",
      pixelPerfect: "像素精準",
      exportScaleLabel: "縮放倍率",
      nearestNeighbor: "最鄰近縮放",
      formatLabel: "格式",
      pngTransparency: "PNG · 保留透明背景",
      filenameSuffix: "檔名後綴",
      none: "無",
      cancel: "取消",
      exporting: "正在匯出…",
      exportPng: "匯出 {scale}× PNG",
      exportSaved: "已儲存 {scale}× 像素精準 PNG",
      exportToast: "已匯出 {scale}× PNG，使用最鄰近縮放",
      exportFailed: "匯出失敗",
      engineReady: "處理核心已就緒",
      previewReady: "預覽已完成",
      editorProperties: "編輯器屬性",
      toolSettings: "工具設定",
      brushSize: "畫筆大小",
      layers: "圖層",
      backgroundRemoval: "背景移除",
      removalModes: "2 種方式",
      autoRemoveHelp:
        "建議先按一鍵移除；它會清除與圖片邊緣相連的主要背景，並保留中央主體。",
      autoRemove: "1 · 一鍵移除背景",
      bgPickTitle: "2 · 點選背景進行細修",
      bgPickHelp:
        "選擇容差後啟用背景選取，再點選畫布上的殘留背景。若移除過多，可立即使用復原。",
      removalRunning: "正在移除背景…",
      removalFailed: "背景移除失敗",
      chooseEditorImageFirst: "請先在像素編輯器開啟圖片",
      autoRemoveDone: "自動背景移除已清除",
      exact: "精確",
      soft: "柔和",
      wide: "寬範圍",
      colorRange: "顏色相近範圍",
      exactHelp: "只清除相同顏色",
      softHelp: "包含些微色差",
      wideHelp: "包含較大色差",
      narrower: "較精準",
      broader: "較廣泛",
      bgPickTip: "啟用後直接點畫布上不要的區域；若清除過多，可按復原。",
      activateBgPick: "啟用背景選取",
      bgPickActive: "背景選取已啟用 · 點選畫布",
      canvasDisplay: "畫布顯示",
      canvasBackground: "畫布背景",
      pixelGridColor: "像素網格顏色",
      applyVisibleLayers: "應用可見圖層",
      pan: "平移",
      pencil: "鉛筆",
      eraser: "橡皮擦",
      colorPicker: "取色器",
      objectSelect: "物件選擇",
      bgPick: "背景選取",
      productOverview: "產品概覽",
      productOverviewHelp:
        "Pixel Soul Studio 整合了精靈圖處理、調色盤控制、背景清理、物件選擇、圖層和像素編輯。",
      interfaceLanguage: "介面語言",
      coreStatus: "核心狀態",
      currentVersion: "當前版本",
      saved: "已儲存",
      unsaved: "未儲存",
      originalBaseLayer: "原始圖 / 基礎圖層",
      activeEditLayer: "當前編輯圖層",
      defaultImageLayer: "預設影象圖層",
      hideBaseLayer: "隱藏基礎圖層",
      showBaseLayer: "顯示基礎圖層",
      hideLayer: "隱藏圖層",
      showLayer: "顯示圖層",
      unlockLayer: "解鎖圖層",
      lockLayer: "鎖定圖層",
      exportLayer: "匯出此圖層",
      deleteLayer: "刪除此圖層",
      base: "基礎",
      layerHelp:
        "點選圖層行可將其設為活動圖層。鉛筆、橡皮擦、背景選取和撤銷/重做僅作用於高亮的活動圖層。",
      batchProgress: "批處理進度",
      exportScale: "輸出像素倍率",
      openOutputFolder: "開啟輸出資料夾",
      processedFiles: "已處理檔案",
      noImagesFound: "所選資料夾中沒有支援的圖片",
      batchComplete: "批處理完成",
    },
    ko: {
      workspace: "작업 공간",
      editor: "픽셀 편집기",
      batch: "일괄 처리",
      settings: "설정",
      appSettings: "애플리케이션 설정",
      appSettingsHelp:
        "제품 정보와 애플리케이션 환경설정이 오른쪽 패널에 표시됩니다.",
      batchHelp:
        "동일한 픽셀 크기, 색상 수 및 팔레트로 전체 폴더를 처리합니다.",
      inputFolder: "입력 폴더",
      noFolder: "선택된 폴더 없음",
      batchPanelHelp:
        "오른쪽 전용 패널에서 폴더와 일괄 처리 옵션을 선택하세요.",
      processingSettings: "처리 설정",
      singleProcessing: "단일 이미지 처리",
      chooseImage: "이미지 선택",
      colorCount: "색상 수",
      pixelSize: "픽셀 크기",
      automatic: "자동",
      fixedPalette: "고정 팔레트",
      colorPalette: "색상 팔레트",
      output: "출력",
      generate: "미리보기 생성",
      processing: "처리 중...",
      saveResult: "결과 저장",
      sendEditor: "픽셀 편집기로 보내기",
      batchSettings: "일괄 처리 설정",
      folderOnly: "폴더 처리 전용",
      chooseInputFolder: "입력 폴더 선택",
      outputFolder: "출력 폴더",
      chooseOutput: "출력 폴더 선택",
      runBatch: "일괄 처리 실행",
      application: "애플리케이션",
      version: "버전",
      processingCore: "처리 코어",
      status: "상태",
      ready: "준비됨",
      coreHelp:
        "처리 코어는 내부 구성 요소이며 로컬 파일 경로는 작업 공간에 표시되지 않습니다.",
      language: "언어",
      languageHelp: "표시 언어를 선택합니다. 선택 내용은 자동 저장됩니다.",
      canvasHint:
        "휠 확대/축소 · 왼쪽/가운데 버튼 드래그 · 객체 선택 연속 다중 클릭 지원",
      bgPickCleared: "BG Pick 삭제",
      connectedPixels: "연결 픽셀",
      tolerance: "허용 오차",
      batchSelected: "일괄 입력 폴더 선택됨",
      batchOutputSelected: "일괄 출력 폴더 선택됨",
      imageSelected: "입력 이미지 선택됨",
      unsupportedImage: "지원되는 이미지 파일이 아닙니다",
      canvasOriginal: "원본",
      canvasProcessed: "처리 결과",
      canvasEditor: "픽셀 편집 캔버스",
      drawColor: "그리기 색상",
      savePng: "PNG 저장",
      saving: "저장 중…",
      exportTitle: "픽셀 아트 내보내기",
      exportHelp: "정수 배율 최근접 이웃 확대는 픽셀 가장자리를 선명하게 유지합니다.",
      originalSize: "원본 크기",
      pixelPerfect: "픽셀 퍼펙트",
      exportScaleLabel: "배율",
      nearestNeighbor: "최근접 이웃",
      formatLabel: "형식",
      pngTransparency: "PNG · 투명도 유지",
      filenameSuffix: "파일명 접미사",
      none: "없음",
      cancel: "취소",
      exporting: "내보내는 중…",
      exportPng: "{scale}× PNG 내보내기",
      exportSaved: "{scale}× 픽셀 퍼펙트 PNG 저장됨",
      exportToast: "최근접 이웃 방식으로 {scale}× PNG를 내보냈습니다",
      exportFailed: "내보내기 실패",
      engineReady: "엔진 준비 완료",
      previewReady: "미리보기가 준비되었습니다",
      editorProperties: "편집기 속성",
      toolSettings: "도구 설정",
      brushSize: "브러시 크기",
      layers: "레이어",
      backgroundRemoval: "배경 제거",
      removalModes: "2가지 방법",
      autoRemoveHelp:
        "자동 제거는 복잡한 배경에 가장자리 연결 알고리즘을 사용합니다.",
      autoRemove: "자동 제거",
      bgPickTitle: "BG Pick · 클릭한 연결 영역",
      bgPickHelp:
        "클릭한 픽셀에서 시작하는 연결 영역만 삭제합니다. 다른 위치의 같은 색상은 유지되며 스마트 확산을 사용하지 않습니다.",
      exact: "정확",
      soft: "부드럽게",
      wide: "넓게",
      colorRange: "색상 유사 범위",
      exactHelp: "같은 색상만",
      softHelp: "작은 색상 차이",
      wideHelp: "넓은 색상 차이",
      narrower: "더 정확하게",
      broader: "더 넓게",
      bgPickTip: "활성화한 뒤 캔버스에서 지울 영역을 클릭하세요. 너무 많이 지워지면 실행 취소를 사용하세요.",
      activateBgPick: "BG Pick 활성화",
      bgPickActive: "BG Pick 활성 · 캔버스 클릭",
      canvasDisplay: "캔버스 표시",
      canvasBackground: "캔버스 배경",
      pixelGridColor: "픽셀 그리드 색상",
      applyVisibleLayers: "보이는 레이어 적용",
      pan: "이동",
      pencil: "연필",
      eraser: "지우개",
      colorPicker: "색상 선택",
      objectSelect: "객체 선택",
      bgPick: "BG Pick",
      productOverview: "제품 개요",
      productOverviewHelp:
        "Pixel Soul Studio는 스프라이트 처리, 팔레트 제어, 배경 정리, 객체 선택, 레이어 및 픽셀 편집을 통합합니다.",
      interfaceLanguage: "인터페이스 언어",
      coreStatus: "코어 상태",
      currentVersion: "현재 버전",
      saved: "저장됨",
      unsaved: "저장 안 됨",
      originalBaseLayer: "원본 / 기본 레이어",
      activeEditLayer: "활성 편집 레이어",
      defaultImageLayer: "기본 이미지 레이어",
      hideBaseLayer: "기본 레이어 숨기기",
      showBaseLayer: "기본 레이어 표시",
      hideLayer: "레이어 숨기기",
      showLayer: "레이어 표시",
      unlockLayer: "레이어 잠금 해제",
      lockLayer: "레이어 잠금",
      exportLayer: "이 레이어 내보내기",
      deleteLayer: "이 레이어 삭제",
      base: "기본",
      layerHelp:
        "레이어 행을 클릭해 활성화합니다. 연필, 지우개, BG Pick 및 실행 취소/다시 실행은 강조된 활성 레이어에만 적용됩니다.",
      batchProgress: "일괄 처리 진행률",
      exportScale: "출력 픽셀 배율",
      openOutputFolder: "출력 폴더 열기",
      processedFiles: "처리된 파일",
      noImagesFound: "선택한 폴더에 지원되는 이미지가 없습니다",
      batchComplete: "일괄 처리 완료",
    },
    ja: {
      workspace: "ワークスペース",
      editor: "ピクセルエディター",
      batch: "バッチ処理",
      settings: "設定",
      appSettings: "アプリ設定",
      appSettingsHelp: "製品情報とアプリ設定は右側のパネルに表示されます。",
      batchHelp:
        "同じピクセルサイズ、色数、パレットでフォルダー全体を処理します。",
      inputFolder: "入力フォルダー",
      noFolder: "フォルダー未選択",
      batchPanelHelp:
        "右側の専用パネルでフォルダーとバッチオプションを選択してください。",
      processingSettings: "処理設定",
      singleProcessing: "単一画像処理",
      chooseImage: "画像を選択",
      colorCount: "色数",
      pixelSize: "ピクセルサイズ",
      automatic: "自動",
      fixedPalette: "固定パレット",
      colorPalette: "カラーパレット",
      output: "出力",
      generate: "プレビュー生成",
      processing: "処理中...",
      saveResult: "結果を保存",
      sendEditor: "ピクセルエディターへ送る",
      batchSettings: "バッチ設定",
      folderOnly: "フォルダー処理のみ",
      chooseInputFolder: "入力フォルダーを選択",
      outputFolder: "出力フォルダー",
      chooseOutput: "出力フォルダーを選択",
      runBatch: "バッチ処理を実行",
      application: "アプリケーション",
      version: "バージョン",
      previewReady: "プレビューを作成しました",
      processingCore: "処理コア",
      status: "状態",
      ready: "準備完了",
      coreHelp:
        "処理コアは内部コンポーネントです。ローカルファイルパスはワークスペースに表示されません。",
      language: "言語",
      languageHelp: "表示言語を選択します。選択内容は自動保存されます。",
      canvasHint:
        "ホイールでズーム · 左/中ボタンでドラッグ · オブジェクト選択は連続複数クリック対応",
      bgPickCleared: "BG Pickで削除",
      connectedPixels: "個の連結ピクセル",
      tolerance: "許容値",
      batchSelected: "バッチ入力フォルダーを選択しました",
      batchOutputSelected: "バッチ出力フォルダーを選択しました",
      imageSelected: "入力画像を選択しました",
      exportTitle: "ピクセルアートを書き出す",
      exportHelp: "整数倍のニアレストネイバー拡大で輪郭を鮮明に保ちます。",
      originalSize: "元のサイズ",
      pixelPerfect: "ピクセルパーフェクト",
      exportScaleLabel: "倍率",
      nearestNeighbor: "ニアレストネイバー",
      formatLabel: "形式",
      pngTransparency: "PNG · 透過を保持",
      filenameSuffix: "ファイル名の接尾辞",
      none: "なし",
      cancel: "キャンセル",
      exporting: "書き出し中…",
      exportPng: "{scale}× PNGを書き出す",
      exportSaved: "{scale}× PNGを保存しました",
      exportToast: "ニアレストネイバーで{scale}× PNGを書き出しました",
      exportFailed: "書き出しに失敗しました",
      editorProperties: "エディター設定",
      toolSettings: "ツール設定",
      brushSize: "ブラシサイズ",
      layers: "レイヤー",
      backgroundRemoval: "背景削除",
      autoRemoveHelp:
        "自動削除は複雑な背景にエッジ連結アルゴリズムを使用します。",
      autoRemove: "自動削除",
      bgPickTitle: "BG Pick · クリックした連結領域",
      bgPickHelp:
        "クリックしたピクセルから始まる連結領域のみを削除します。他の場所の同じ色は保持され、スマート拡散は行いません。",
      exact: "正確",
      soft: "ソフト",
      wide: "広範囲",
      activateBgPick: "BG Pickを有効化",
      bgPickActive: "BG Pick有効 · キャンバスをクリック",
      canvasDisplay: "キャンバス表示",
      canvasBackground: "キャンバス背景",
      pixelGridColor: "ピクセルグリッド色",
      applyVisibleLayers: "表示レイヤーを適用",
      pan: "移動",
      pencil: "鉛筆",
      eraser: "消しゴム",
      colorPicker: "カラーピッカー",
      objectSelect: "オブジェクト選択",
      bgPick: "BG Pick",
      productOverview: "製品概要",
      productOverviewHelp:
        "Pixel Soul Studioはスプライト処理、パレット制御、背景整理、オブジェクト選択、レイヤー、ピクセル編集を統合します。",
      interfaceLanguage: "表示言語",
      coreStatus: "コア状態",
      currentVersion: "現在のバージョン",
      saved: "保存済み",
      unsaved: "未保存",
      originalBaseLayer: "オリジナル / ベースレイヤー",
      activeEditLayer: "アクティブ編集レイヤー",
      defaultImageLayer: "既定の画像レイヤー",
      hideBaseLayer: "ベースレイヤーを非表示",
      showBaseLayer: "ベースレイヤーを表示",
      hideLayer: "レイヤーを非表示",
      showLayer: "レイヤーを表示",
      unlockLayer: "レイヤーのロック解除",
      lockLayer: "レイヤーをロック",
      exportLayer: "このレイヤーをエクスポート",
      deleteLayer: "このレイヤーを削除",
      base: "ベース",
      layerHelp:
        "レイヤー行をクリックしてアクティブにします。鉛筆、消しゴム、BG Pick、元に戻す/やり直しは強調表示されたアクティブレイヤーにのみ適用されます。",
      batchProgress: "バッチ処理の進行状況",
      exportScale: "出力ピクセル倍率",
      openOutputFolder: "出力フォルダーを開く",
      processedFiles: "処理済みファイル",
      noImagesFound: "選択したフォルダーに対応画像がありません",
      batchComplete: "バッチ処理が完了しました",
    },
  };
function ThirdPartyNotices({ language }) {
  const labels = {
    en: ["Third-party licenses", "Unable to load licenses."],
    "zh-Hans": ["第三方授权", "无法读取授权资料。"],
    "zh-Hant": ["第三方授權", "無法讀取授權資料。"],
    ko: ["제3자 라이선스", "라이선스를 불러올 수 없습니다."],
    ja: ["サードパーティライセンス", "ライセンスを読み込めません。"],
  };
  const [label, error] = labels[language] || labels.en;
  const [notices, setNotices] = g.useState(null);

  async function loadNotices(event) {
    if (!event.currentTarget.open || notices !== null) return;
    try {
      const response = await fetch("/third-party-notices.txt");
      if (!response.ok) throw new Error(response.statusText);
      setNotices(await response.text());
    } catch {
      setNotices("");
    }
  }

  return i.jsxs("details", {
    className: "card p-5 lg:col-span-2",
    onToggle: loadNotices,
    children: [
      i.jsx("summary", { children: label }),
      i.jsx("pre", {
        className: "third-party-notices",
        children: notices === null ? "…" : notices || error,
      }),
    ],
  });
}

function PixelSoulStudio() {
  const [h, C] = g.useState("Workspace"),
    [o, N] = g.useState(
      () => {
        const savedLanguage = localStorage.getItem("pixel-soul-language");
        return savedLanguage === "zh" ? "zh-Hant" : savedLanguage || "en";
      },
    ),
    u = (d) => Cc[o][d] || Cc.en[d] || d,
    [z, L] = g.useState(""),
    [_, D] = g.useState(""),
    [F, U] = g.useState(""),
    [q, X] = g.useState(""),
    [Ce, me] = g.useState(1),
    [le, y] = g.useState(0),
    [H, ae] = g.useState(0),
    [xe, te] = g.useState(!1),
    [Z, ne] = g.useState(""),
    [se, de] = g.useState(""),
    [Be, Se] = g.useState(""),
    [Fe, Re] = g.useState("pan"),
    [Me, fe] = g.useState("#000000"),
    [De, $e] = g.useState(1),
    [Le, O] = g.useState("#262522"),
    [w, M] = g.useState("#c7743f"),
    [p, E] = g.useState(0),
    [V, ie] = g.useState("automatic"),
    [ce, j] = g.useState([]),
    [Y, he] = g.useState("#000000"),
    [oe, qe] = g.useState(24),
    [at, St] = g.useState(!0),
    [jt, nn] = g.useState(8),
    [Ze, $t] = g.useState("off"),
    [Bt, k] = g.useState(128),
    [$, we] = g.useState(128),
    [ke, be] = g.useState("bottom"),
    [Ge, W] = g.useState("transparent"),
    [He, tt] = g.useState(0),
    [pt, rt] = g.useState(0),
    [Ie, We] = g.useState(!1),
    [ct, Kt] = g.useState(!1),
    [P, B] = g.useState("Engine ready"),
    [ge, Ne] = g.useState([]),
    [je, _e] = g.useState([]),
    [st, ht] = g.useState(""),
    [Te, Ee] = g.useState(!1),
    [Pe, Ue] = g.useState(4),
    [Ke, vt] = g.useState(!1),
    [bgBusy, setBgBusy] = g.useState(!1),
    [yt, et] = g.useState(null),
    [zt, Ht] = g.useState(!0),
    [cn, Lt] = g.useState(0),
    [Wt, Nt] = g.useState([]),
    [rn, yn] = g.useState(!0),
    [dn, xn] = g.useState("base"),
    Ln = "pixel-soul-app-preferences-v2",
    gr = g.useRef(!1),
    [ln, Hn] = g.useState("workspace");
  (g.useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(Ln) || "{}");
      (typeof d.color == "string" && fe(d.color),
        typeof d.brush == "number" && $e(d.brush),
        typeof d.editorBg == "string" && O(d.editorBg),
        typeof d.editorGrid == "string" && M(d.editorGrid),
        typeof d.bgPickTolerance == "number" && E(d.bgPickTolerance),
        (d.paletteMode === "automatic" || d.paletteMode === "fixed") &&
          ie(d.paletteMode),
        Array.isArray(d.fixedColors) && j(d.fixedColors),
        typeof d.fixedSelected == "string" && he(d.fixedSelected),
        typeof d.count == "number" && qe(d.count),
        typeof d.auto == "boolean" && St(d.auto),
        typeof d.pixelSize == "number" && nn(d.pixelSize),
        ["off", "first", "custom"].includes(d.uniformCanvasMode) &&
          $t(d.uniformCanvasMode),
        typeof d.uniformCanvasWidth == "number" && k(d.uniformCanvasWidth),
        typeof d.uniformCanvasHeight == "number" && we(d.uniformCanvasHeight),
        typeof d.uniformCanvasAnchor == "string" && be(d.uniformCanvasAnchor),
        typeof d.uniformCanvasBackground == "string" &&
          W(d.uniformCanvasBackground),
        [1, 2, 4, 8].includes(d.batchScale) && me(d.batchScale));
    } catch {}
    gr.current = !0;
  }, []),
    g.useEffect(() => {
      if (gr.current)
        try {
          localStorage.setItem(
            Ln,
            JSON.stringify({
              color: Me,
              brush: De,
              editorBg: Le,
              editorGrid: w,
              bgPickTolerance: p,
              paletteMode: V,
              fixedColors: ce,
              fixedSelected: Y,
              count: oe,
              auto: at,
              pixelSize: jt,
              uniformCanvasMode: Ze,
              uniformCanvasWidth: Bt,
              uniformCanvasHeight: $,
              uniformCanvasAnchor: ke,
              uniformCanvasBackground: Ge,
              batchScale: Ce,
            }),
          );
        } catch {}
    }, [Me, De, Le, w, p, V, ce, Y, oe, at, jt, Ze, Bt, $, ke, Ge, Ce]));
  function vr() {
    for (const key of ["pixel-soul-language", Ln, Mc]) {
      localStorage.removeItem(key);
    }
    window.location.reload();
  }
  function Je(d) {
    (ht(d), window.setTimeout(() => ht(""), 1800));
  }
  function Xt() {
    (et(null), Lt((d) => d + 1));
  }
  (g.useEffect(() => {
    const d = (b) => {
      ct && (b.preventDefault(), (b.returnValue = ""));
    };
    return (
      window.addEventListener("beforeunload", d),
      () => window.removeEventListener("beforeunload", d)
    );
  }, [ct]),
    g.useEffect(() => {
      (localStorage.setItem("pixel-soul-language", o),
        (document.documentElement.lang = o));
    }, [o]),
    g.useEffect(() => {
      const d = (b) => {
        if (h !== "Pixel Editor") return;
        if (
          (b.ctrlKey || b.metaKey) &&
          b.key.toLowerCase() === "a" &&
          Fe === "object"
        ) {
          (b.preventDefault(),
            Je(
              "Ctrl+A object selection is reserved for the next selection command set.",
            ));
          return;
        }
        if (!(b.ctrlKey || b.metaKey)) return;
        const pe = b.key.toLowerCase();
        pe === "z" && !b.shiftKey
          ? (b.preventDefault(), Dt())
          : (pe === "y" || (pe === "z" && b.shiftKey)) &&
            (b.preventDefault(), Or());
      };
      return (
        window.addEventListener("keydown", d),
        () => window.removeEventListener("keydown", d)
      );
    }, [h, ge, je, Be, Fe]));
  async function yr() {
    const d = h === "Batch Processing",
      b = await ea({
        directory: d,
        multiple: !1,
        filters: d
          ? void 0
          : [
              {
                name: "Images",
                extensions: [
                  "png",
                  "jpg",
                  "jpeg",
                  "webp",
                  "bmp",
                  "tif",
                  "tiff",
                  "gif",
                ],
              },
            ],
      });
    if (typeof b == "string") {
      if (d) {
        (U(b), te(!1), y(0), ae(0), X(`${b}output`), B(u("batchSelected")));
        return;
      }
      (L(b),
        ne(await Ae("read_image", { path: b })),
        D(b.replace(/\.[^.]+$/, "_snapped.png")),
        B(u("imageSelected")));
    }
  }
  async function Dr() {
    const d = await ea({ directory: !0, multiple: !1 });
    typeof d == "string" && (X(d), te(!1), B(u("batchOutputSelected")));
  }
  async function Tr() {
    q && (await Ae("open_folder", { path: q }));
  }
  async function dl(d) {
    return await new Promise((b, pe) => {
      const Q = new Image();
      ((Q.onload = () => b({ width: Q.naturalWidth, height: Q.naturalHeight })),
        (Q.onerror = () =>
          pe(new Error("Unable to read processed image dimensions."))),
        (Q.src = d));
    });
  }
  async function wn() {
    if (h === "Batch Processing" ? !F : !z) return Je("Choose input first");
    We(!0);
    try {
      if (h === "Batch Processing") {
        const d = await Ae("list_batch_images", { path: F });
        if (!d.length) {
          Je(u("noImagesFound"));
          return;
        }
        (ae(d.length), y(0), te(!1));
        let b = Ze === "first" ? 0 : Bt,
          pe = Ze === "first" ? 0 : $;
        for (let Q = 0; Q < d.length; Q++) {
          const ue = d[Q],
            mt = "\\",
            ql = (
              ue.split(mt).join("/").split("/").pop() || `image-${Q + 1}.png`
            ).replace(/\.[^.]+$/, ""),
            Jl = Ce === 1 ? "" : `_${Ce}x`,
            hl = q.includes(mt) ? mt : "/",
            kr = `${q}${q.endsWith(hl) ? "" : hl}${ql}_snapped${Jl}.png`,
            $r = {
              input: ue,
              colorCount: oe,
              pixelSize: at ? null : jt,
              palette:
                V === "fixed"
                  ? ce.map((Vt) => Vt.replace("#", "")).join(",")
                  : "",
            };
          await Ae("process_batch_image", { options: $r, output: kr, scale: Ce });
          if (Ze === "first" && Q === 0) {
            const Vt = await Ae("image_dimensions_file", { path: kr });
            ((b = Vt[0]), (pe = Vt[1]), tt(b), rt(pe));
          } else
            Ze !== "off" &&
              (await Ae("apply_uniform_canvas_file", {
                path: kr,
                options: { width: b, height: pe, anchor: ke, background: Ge },
              }));
          (y(Q + 1), B(`${u("processedFiles")}: ${Q + 1}/${d.length}`));
        }
        (te(!0), B(`${u("batchComplete")}: ${d.length}`));
      } else {
        const d = {
            input: z,
            colorCount: oe,
            pixelSize: at ? null : jt,
            palette:
              V === "fixed" ? ce.map((Q) => Q.replace("#", "")).join(",") : "",
          },
          b = await Ae("process_preview", { options: d });
        let pe = b.dataUrl;
        if (Ze === "first")
          if (!He || !pt) {
            const Q = await dl(b.dataUrl);
            (tt(Q.width), rt(Q.height));
          } else
            pe = (
              await Ae("apply_uniform_canvas", {
                dataUrl: b.dataUrl,
                options: { width: He, height: pt, anchor: ke, background: Ge },
              })
            ).dataUrl;
        else
          Ze === "custom" &&
            (pe = (
              await Ae("apply_uniform_canvas", {
                dataUrl: b.dataUrl,
                options: { width: Bt, height: $, anchor: ke, background: Ge },
              })
            ).dataUrl);
        (de(pe), Kt(!0), B(u("previewReady")));
      }
    } catch (d) {
      Je(String(d));
    } finally {
      We(!1);
    }
  }
  function Ye(d, b) {
    return b === 1 ? d : d.replace(/(\.png)?$/i, `_${b}x.png`);
  }
  async function Wn(d, b) {
    if (b === 1) return d;
    const pe = await new Promise((mt, Yn) => {
        const Rn = new Image();
        ((Rn.onload = () => mt(Rn)),
          (Rn.onerror = () =>
            Yn(new Error("Failed to load the processed image for export."))),
          (Rn.src = d));
      }),
      Q = document.createElement("canvas");
    ((Q.width = pe.naturalWidth * b), (Q.height = pe.naturalHeight * b));
    const ue = Q.getContext("2d");
    if (!ue) throw new Error("Unable to create the export canvas.");
    return (
      (ue.imageSmoothingEnabled = !1),
      ue.clearRect(0, 0, Q.width, Q.height),
      ue.drawImage(pe, 0, 0, Q.width, Q.height),
      Q.toDataURL("image/png")
    );
  }
  async function Vn(d) {
    const b = ln === "editor" ? Be : se;
    if (!b) {
      Je(ln === "editor" ? u("chooseEditorImageFirst") : "Generate preview first");
      return;
    }
    if (Ke) return;
    vt(!0);
    try {
      const pe = Ye(
          ln === "editor"
            ? "pixel-editor-result.png"
            : _ || "pixelsnapper_result.png",
          d,
        ),
        ue = await Ql({
          defaultPath: pe,
          filters: [{ name: "PNG", extensions: ["png"] }],
        });
      if (typeof ue != "string") return;
      const mt = await Wn(b, d);
      (await Ae("save_data_url", { dataUrl: mt, path: ue }),
        Ee(!1),
        Kt(!1),
        B(u("exportSaved").replace("{scale}", d)),
        Je(u("exportToast").replace("{scale}", d)));
    } catch (pe) {
      Je(`${u("exportFailed")}: ${String(pe)}`);
    } finally {
      vt(!1);
    }
  }
  function xr() {
    if (!se) return Je("Generate preview first");
    (Se(se),
      Ne([]),
      _e([]),
      Nt([]),
      yn(!0),
      xn("base"),
      Xt(),
      C("Pixel Editor"));
  }
  function Ct() {
    return dn === "base" ? Be : (Wt.find((d) => d.id === dn)?.dataUrl ?? Be);
  }
  function In(d) {
    (dn === "base"
      ? Se(d)
      : Nt((b) => b.map((pe) => (pe.id === dn ? { ...pe, dataUrl: d } : pe))),
      Kt(!0));
  }
  function Gn() {
    const d = Ct();
    d && (Ne((b) => [...b, d].slice(-60)), _e([]));
  }
  function Qn(d) {
    In(d);
  }
  function Dt() {
    if (!ge.length) return;
    const d = Ct();
    (_e((b) => [...b, d]),
      In(ge[ge.length - 1]),
      Ne((b) => b.slice(0, -1)),
      Xt());
  }
  function Or() {
    if (!je.length) return;
    const d = Ct();
    (Ne((b) => [...b, d]),
      In(je[je.length - 1]),
      _e((b) => b.slice(0, -1)),
      Xt());
  }
  async function Tt(d, b = 0, pe = 0) {
    const Q = Ct();
    if (!Q) return Je(u("chooseEditorImageFirst"));
    if (bgBusy) return;
    setBgBusy(!0);
    B(u("removalRunning"));
    try {
      const ue = await Ae(
        d ? "remove_background" : "remove_picked",
        d
          ? { dataUrl: Q, tolerance: 28 }
          : { dataUrl: Q, x: b, y: pe, tolerance: p },
      );
      (Ne((mt) => [...mt, Q].slice(-60)),
        _e([]),
        In(ue.dataUrl),
        Xt(),
        !d && Re("pan"));
      const mt = d
        ? `${u("autoRemoveDone")} ${ue.removed} ${u("connectedPixels")}`
        : `${u("bgPickCleared")} ${ue.removed} ${u("connectedPixels")} · ${u("tolerance")} ${p}`;
      (B(mt), Je(mt));
    } catch (ue) {
      const mt = `${u("removalFailed")}: ${String(ue)}`;
      (B(mt), Je(mt));
    } finally {
      setBgBusy(!1);
    }
  }
  async function Kn(d) {
    return await new Promise((b, pe) => {
      const Q = new Image();
      ((Q.onload = () => b(Q)),
        (Q.onerror = () => pe(new Error("Failed to load layer image"))),
        (Q.src = d));
    });
  }
  async function fl() {
    if (Be)
      try {
        const d = await Kn(Be),
          b = document.createElement("canvas");
        ((b.width = d.width), (b.height = d.height));
        const pe = b.getContext("2d");
        ((pe.imageSmoothingEnabled = !1), rn && pe.drawImage(d, 0, 0));
        for (const ue of Wt.filter((mt) => mt.visible)) {
          const mt = await Kn(ue.dataUrl);
          pe.drawImage(mt, 0, 0, b.width, b.height);
        }
        const Q = b.toDataURL("image/png");
        (de(Q),
          Se(Q),
          Nt([]),
          xn("base"),
          yn(!0),
          Ne([]),
          _e([]),
          Xt(),
          Kt(!0),
          B(
            `Applied ${Wt.filter((ue) => ue.visible).length + (rn ? 1 : 0)} visible layer(s) to result`,
          ));
      } catch (d) {
        Je(String(d));
      }
  }
  async function wr(d) {
    if (!yt) return;
    const b = await Ql({
      defaultPath: d ? "selection_canvas.png" : "selection_trimmed.png",
      filters: [{ name: "PNG", extensions: ["png"] }],
    });
    typeof b == "string" &&
      (await Ae("save_data_url", {
        dataUrl: d ? yt.fullDataUrl : yt.trimmedDataUrl,
        path: b,
      }));
  }
  function Ar(d) {
    if (!yt) return;
    const b = Wt.length + 1,
      pe = {
        id: `${Date.now()}-${b}`,
        name: `Object ${b}`,
        dataUrl: yt.fullDataUrl,
        visible: !0,
        locked: !1,
      };
    (Nt((Q) => [...Q, pe]),
      xn(pe.id),
      d &&
        (Ne((Q) => [...Q, Be].slice(-60)),
        _e([]),
        Se(yt.remainingDataUrl),
        Kt(!0)),
      Xt(),
      B(
        d
          ? "Selection moved to object layer"
          : "Selection duplicated to object layer",
      ));
  }
  async function Fr(d) {
    const b = await Ql({
      defaultPath: `${d.name || "object-layer"}.png`,
      filters: [{ name: "PNG", extensions: ["png"] }],
    });
    typeof b == "string" &&
      (await Ae("save_data_url", { dataUrl: d.dataUrl, path: b }));
  }
  function Xn(d) {
    if (!Zd(d)) return Je(u("unsupportedImage"));
    const b = new FileReader();
    ((b.onload = async () => {
      try {
        const pe = String(b.result || ""),
          Q = await Ae("save_clipboard_image", { dataUrl: pe });
        (L(Q),
          ne(pe),
          de(""),
          D(Q.replace(/\.[^.]+$/, "_snapped.png")),
          B(u("imageSelected")));
      } catch (pe) {
        Je(String(pe));
      }
    }),
      b.readAsDataURL(d));
  }
  g.useEffect(() => {
    const d = (b) => {
      if (h !== "Workspace") return;
      const Q = Array.from(b.clipboardData?.items || [])
        .find((ue) => ue.type.startsWith("image/"))
        ?.getAsFile();
      Q && (b.preventDefault(), Xn(Q));
    };
    return (
      window.addEventListener("paste", d),
      () => window.removeEventListener("paste", d)
    );
  }, [h, o]);
  async function Ur() {
    if (se)
      try {
        const d = await (await fetch(se)).blob();
        (await navigator.clipboard.write([
          new ClipboardItem({ "image/png": d }),
        ]),
          Je(o === "zh-Hans" ? "已复制当前处理结果" : o === "zh-Hant" ? "已複製當前處理結果" : "Processed image copied"));
      } catch (d) {
        Je(String(d));
      }
  }
  async function Xl(d) {
    if (!Zd(d)) return Je(u("unsupportedImage"));
    const b = new FileReader();
    ((b.onload = () => {
      const pe = String(b.result || "");
      if (!pe) return;
      const Q = Ct();
      (Q && Ne((ue) => [...ue, Q].slice(-60)),
        _e([]),
        Se(pe),
        Nt([]),
        yn(!0),
        xn("base"),
        Xt(),
        Kt(!0),
        B(
          o === "zh-Hans" ? "已将剪贴簿图片加载像素编辑器" : o === "zh-Hant" ? "已將剪貼簿圖片載入像素編輯器"
            : "Clipboard image loaded into Pixel Editor",
        ));
    }),
      b.readAsDataURL(d));
  }
  async function na() {
    if (Be)
      try {
        const d = await Kn(Be),
          b = document.createElement("canvas");
        ((b.width = d.width), (b.height = d.height));
        const pe = b.getContext("2d");
        if (!pe) throw new Error("Unable to create clipboard canvas");
        ((pe.imageSmoothingEnabled = !1), rn && pe.drawImage(d, 0, 0));
        for (const ue of Wt.filter((mt) => mt.visible)) {
          const mt = await Kn(ue.dataUrl);
          pe.drawImage(mt, 0, 0, b.width, b.height);
        }
        const Q = await new Promise((ue, mt) =>
          b.toBlob(
            (Yn) =>
              Yn ? ue(Yn) : mt(new Error("PNG clipboard export failed")),
            "image/png",
          ),
        );
        (await navigator.clipboard.write([
          new ClipboardItem({ "image/png": Q }),
        ]),
          Je(
            o === "zh-Hans" ? "已复制像素编辑器可见图层" : o === "zh-Hant" ? "已複製像素編輯器可見圖層"
              : "Visible editor layers copied",
          ));
      } catch (d) {
        Je(String(d));
      }
  }
  g.useEffect(() => {
    const d = (b) => {
      if (
        !(
          h !== "Pixel Editor" ||
          b.target?.matches('input, textarea, select, [contenteditable="true"]')
        )
      )
        if (b.type === "paste") {
          const ue = Array.from(b.clipboardData?.items || [])
            .find((mt) => mt.type.startsWith("image/"))
            ?.getAsFile();
          if (!ue) return;
          (b.preventDefault(), Xl(ue));
        } else b.type === "copy" && Be && (b.preventDefault(), na());
    };
    return (
      window.addEventListener("paste", d),
      window.addEventListener("copy", d),
      () => {
        (window.removeEventListener("paste", d),
          window.removeEventListener("copy", d));
      }
    );
  }, [h, Be, Wt, rn, o]);
  const pl = [
      ["Workspace", bf, u("workspace")],
      ["Pixel Editor", Of, u("editor")],
      ["Batch Processing", Cf, u("batch")],
      [
        "Pixel Maker",
        Df,
        o === "zh-Hans" ? "像素转换" : o === "zh-Hant" ? "像素轉換"
          : o === "ko"
            ? "픽셀 변환"
            : o === "ja"
              ? "ピクセル変換"
              : "Pixel Converter",
      ],
      ["Settings", Qf, u("settings")],
    ],
    Yl = [
      ["pan", _f, u("pan")],
      ["pencil", Af, u("pencil")],
      ["eraser", Pf, u("eraser")],
      ["picker", Ff, u("colorPicker")],
      ["object", Vf, u("objectSelect")],
      ["bgpick", Tf, u("bgPick")],
    ];
  return i.jsxs("div", {
    className:
      "pixel-soul-ui grid h-full grid-cols-[205px_1fr_330px] grid-rows-[52px_1fr_28px]",
    children: [
      i.jsxs("header", {
        className:
          "col-span-3 flex items-center gap-3 border-b border-ui-line bg-[#27241f] px-4",
        children: [
          i.jsx("div", {
            className:
              "grid h-8 w-8 place-items-center rounded-lg bg-ui-accent font-black",
            children: "P",
          }),
          i.jsx("b", { children: "Pixel Soul Studio" }),
          i.jsx("span", {
            className: "subtle",
            children: "Pixel Art Creation Suite",
          }),
          i.jsx("span", {
            className:
              "ml-auto rounded-full border border-ui-line bg-ui-panel2 px-3 py-1 text-xs text-ui-muted",
            children: "Version 1.4.0",
          }),
        ],
      }),
      i.jsx("aside", {
        className:
          "flex flex-col gap-1 border-r border-ui-line bg-ui-panel p-3",
        children: pl.map(([page, Icon, label]) =>
          i.jsxs("button", {
            className: `nav ${h === page ? "active" : ""}`,
            onClick: () => C(page),
            children: [
              i.jsx(Icon, { size: 17 }),
              i.jsx("span", {
                className: "min-w-0 flex-1 text-left",
                children: label,
              }),
            ],
          }, page),
        ),
      }),
      i.jsxs("main", {
        className: `flex min-h-0 flex-col ${h === "Pixel Maker" ? "col-span-2" : ""}`,
        children: [
          i.jsxs("div", {
            className:
              "flex h-[62px] items-center border-b border-ui-line px-4",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("b", {
                    children:
                      h === "Workspace"
                        ? u("workspace")
                        : h === "Pixel Editor"
                          ? u("editor")
                          : h === "Batch Processing"
                            ? u("batch")
                                : h === "Pixel Maker"
                                  ? o === "zh-Hans" ? "像素转换" : o === "zh-Hant" ? "像素轉換"
                                    : o === "ko"
                                      ? "픽셀 변환"
                                      : o === "ja"
                                        ? "ピクセル変換"
                                        : "Pixel Converter"
                                  : u("settings"),
                  }),
                  i.jsx("div", {
                    className: "subtle",
                    children: u("canvasHint"),
                  }),
                ],
              }),
              h === "Pixel Editor" &&
                i.jsxs("div", {
                  className: "ml-auto flex gap-1",
                  children: [
                    Yl.map(([d, b, pe]) =>
                      i.jsx(
                        "button",
                        {
                          title: pe,
                          className: `tool ${Fe === d ? "active" : ""}`,
                          onClick: () => Re(d),
                          children: i.jsx(b, { size: 17 }),
                        },
                        d,
                      ),
                    ),
                    i.jsx("input", {
                      title: u("drawColor"),
                      type: "color",
                      value: Me,
                      onChange: (d) => fe(d.target.value),
                    }),
                    i.jsx("button", {
                      className: "tool",
                      onClick: Dt,
                      children: i.jsx(Kf, { size: 17 }),
                    }),
                    i.jsx("button", {
                      className: "tool",
                      onClick: Or,
                      children: i.jsx($f, { size: 17 }),
                    }),
                    i.jsx("button", {
                      className: "btn primary",
                      onClick: fl,
                      children: u("applyVisibleLayers"),
                    }),
                    i.jsx("button", {
                      className: "btn",
                      disabled: !Be || Ke,
                      onClick: () => {
                        (Hn("editor"), Ue(1), Ee(!0));
                      },
                      children: Ke ? u("saving") : u("savePng"),
                    }),
                  ],
                }),
            ],
          }),
          i.jsx("div", {
            className: "grid min-h-0 flex-1 p-3",
            children:
              h === "Workspace"
                ? i.jsxs("div", {
                    className: "grid min-h-0 grid-cols-2 gap-3",
                    children: [
                      i.jsx(Kl, {
                        documentId: `original:${z}`,
                        src: Z,
                        title: u("canvasOriginal"),
                        onImageFile: Xn,
                        language: o,
                      }),
                      i.jsx(Kl, {
                        documentId: `processed:${z}`,
                        src: se,
                        title: u("canvasProcessed"),
                        language: o,
                      }),
                    ],
                  })
                : h === "Pixel Editor"
                  ? i.jsx(Kl, {
                      documentId: `editor:${z}`,
                      src: Be,
                      title: u("canvasEditor"),
                      onImageFile: Xl,
                      language: o,
                      editable: !0,
                      tool: Fe,
                      color: Me,
                      brush: De,
                      backgroundColor: Le,
                      gridColor: w,
                      baseLayerVisible: rn,
                      objectLayers: Wt,
                      activeLayerId: dn,
                      multiObjectSelect: zt,
                      clearSelectionToken: cn,
                      onSelectionChange: et,
                      onStrokeStart: Gn,
                      onEdit: Qn,
                      onPick: (d) => {
                        (fe(d), Re("pencil"));
                      },
                      onBgPick: (d, b) => Tt(!1, d, b),
                    })
                  : h === "Batch Processing"
                    ? i.jsxs("div", {
                        className: "card p-6",
                        children: [
                          i.jsx("h2", { children: u("batch") }),
                          i.jsx("p", {
                            className: "subtle",
                            children: u("batchHelp"),
                          }),
                          i.jsxs("div", {
                            className:
                              "mt-5 rounded-xl border border-ui-line bg-ui-panel2 p-4",
                            children: [
                              i.jsx("div", {
                                className: "section-title",
                                children: u("inputFolder"),
                              }),
                              i.jsx("p", {
                                className: "subtle mt-2 break-all",
                                children: F || u("noFolder"),
                              }),
                              i.jsx("p", {
                                className: "subtle mt-3",
                                children: u("batchPanelHelp"),
                              }),
                            ],
                          }),
                        ],
                      })
                    : h === "Pixel Maker"
                      ? i.jsx(lp, { language: o, onMessage: Je })
                          : i.jsx("div", {
                              className: "min-h-0 overflow-auto p-1",
                              children: i.jsxs("div", {
                                className:
                                  "mx-auto grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2",
                                children: [
                                  i.jsxs("div", {
                                    className: "card p-6 lg:col-span-2",
                                    children: [
                                      i.jsx("h2", {
                                        children: u("appSettings"),
                                      }),
                                      i.jsx("p", {
                                        className: "subtle mt-2",
                                        children: u("appSettingsHelp"),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    className: "card p-5",
                                    children: [
                                      i.jsx("div", {
                                        className: "section-title",
                                        children: u("interfaceLanguage"),
                                      }),
                                      i.jsx("p", {
                                        className: "subtle mt-2",
                                        children: u("languageHelp"),
                                      }),
                                      i.jsx("div", {
                                        className:
                                          "mt-4 grid grid-cols-2 gap-3",
                                        children: Object.keys(Os).map((d) =>
                                          i.jsx(
                                            "button",
                                            {
                                              className: `btn h-12 ${o === d ? "active" : ""}`,
                                              onClick: () => {
                                                (localStorage.setItem(
                                                  "pixel-soul-language",
                                                  d,
                                                ),
                                                  N(d));
                                              },
                                              children: Os[d],
                                            },
                                            d,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    className: "card p-5",
                                    children: [
                                      i.jsx("div", {
                                        className: "section-title",
                                        children: u("productOverview"),
                                      }),
                                      i.jsx("h3", {
                                        className: "mt-4 text-lg font-bold",
                                        children: "Pixel Soul Studio",
                                      }),
                                      i.jsx("p", {
                                        className: "subtle mt-2",
                                        children: u("productOverviewHelp"),
                                      }),
                                      i.jsxs("div", {
                                        className:
                                          "mt-5 grid grid-cols-2 gap-3",
                                        children: [
                                          i.jsxs("div", {
                                            className:
                                              "rounded-xl border border-ui-line bg-ui-panel2 p-3",
                                            children: [
                                              i.jsx("div", {
                                                className:
                                                  "text-[10px] text-ui-muted",
                                                children: u("currentVersion"),
                                              }),
                                              i.jsx("b", {
                                                className: "mt-1 block",
                                                children: "1.4.0",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "rounded-xl border border-ui-line bg-ui-panel2 p-3",
                                            children: [
                                              i.jsx("div", {
                                                className:
                                                  "text-[10px] text-ui-muted",
                                                children: u("coreStatus"),
                                              }),
                                              i.jsxs("b", {
                                                className:
                                                  "mt-1 block text-ui-good",
                                                children: ["● ", u("ready")],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    className: "card p-5 lg:col-span-2",
                                    children: [
                                      i.jsx("div", {
                                        className: "section-title",
                                        children: u("processingCore"),
                                      }),
                                      i.jsx("p", {
                                        className: "subtle mt-3",
                                        children: u("coreHelp"),
                                      }),
                                    ],
                                  }),
                                  i.jsx(ThirdPartyNotices, { language: o }),
                                  i.jsxs("div", {
                                    className: "card p-5 lg:col-span-2",
                                    children: [
                                      i.jsx("div", {
                                        className: "section-title",
                                        children:
                                          o === "zh-Hans" ? "重置所有设置" : o === "zh-Hant" ? "重置所有設定"
                                            : "Reset All Settings",
                                      }),
                                      i.jsx("p", {
                                        className: "subtle mt-3",
                                        children:
                                          o === "zh-Hans" ? "恢复所有页面参数为当前版本默认值，不删除用户图片。" : o === "zh-Hant" ? "恢復所有頁面引數為當前版本預設值，不刪除使用者圖片。"
                                            : "Restore all page preferences without deleting user images.",
                                      }),
                                      i.jsx("button", {
                                        className:
                                          "btn mt-4 border-red-500/50 text-red-300",
                                        onClick: () => {
                                          confirm(
                                            o === "zh-Hans" ? "确定恢复所有设置吗？" : o === "zh-Hant" ? "確定恢復所有設定嗎？"
                                              : "Reset all settings?",
                                          ) && vr();
                                        },
                                        children:
                                          o === "zh-Hans" ? "恢复所有设置为默认值" : o === "zh-Hant" ? "恢復所有設定為預設值"
                                            : "Reset All Settings",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
          }),
        ],
      }),
      i.jsx("aside", {
        className: `overflow-auto border-l border-ui-line bg-ui-panel p-4 ${h === "Pixel Maker" ? "hidden" : ""}`,
        children:
          h === "Pixel Editor"
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx("b", { children: u("editorProperties") }),
                  i.jsxs("div", {
                    className: "card mt-4 p-3",
                    children: [
                      i.jsx("div", {
                        className: "section-title",
                        children: u("toolSettings"),
                      }),
                      i.jsxs("div", {
                        className: "label",
                        children: [
                          u("brushSize"),
                          " ",
                          i.jsxs("span", { children: [De, "px"] }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: [1, 2, 4].map((d) =>
                          i.jsxs(
                            "button",
                            {
                              className: `btn ${De === d ? "active" : ""}`,
                              onClick: () => $e(d),
                              children: [d, "px"],
                            },
                            d,
                          ),
                        ),
                      }),
                    ],
                  }),
                  Fe === "object" &&
                    i.jsx(qf, {
                      selection: yt,
                      multiSelect: zt,
                      setMultiSelect: Ht,
                      clearSelection: Xt,
                      exportSelection: wr,
                      createLayer: Ar,
                    }),
                  i.jsx(Jf, {
                    baseVisible: rn,
                    setBaseVisible: yn,
                    activeLayerId: dn,
                    setActiveLayerId: (d) => {
                      (xn(d), Ne([]), _e([]), Xt());
                    },
                    layers: Wt,
                    setLayers: Nt,
                    exportLayer: Fr,
                    labels: {
                      layers: u("layers"),
                      originalBaseLayer: u("originalBaseLayer"),
                      activeEditLayer: u("activeEditLayer"),
                      defaultImageLayer: u("defaultImageLayer"),
                      hideBaseLayer: u("hideBaseLayer"),
                      showBaseLayer: u("showBaseLayer"),
                      hideLayer: u("hideLayer"),
                      showLayer: u("showLayer"),
                      unlockLayer: u("unlockLayer"),
                      lockLayer: u("lockLayer"),
                      exportLayer: u("exportLayer"),
                      deleteLayer: u("deleteLayer"),
                      base: u("base"),
                      layerHelp: u("layerHelp"),
                    },
                  }),
                  i.jsxs("div", {
                    className: "card background-removal-card mt-3 p-3",
                    children: [
                      i.jsxs("div", {
                        className: "section-title",
                        children: [
                          i.jsx("span", { children: u("backgroundRemoval") }),
                          i.jsx("span", {
                            className: "removal-badge",
                            children: bgBusy
                              ? u("removalRunning")
                              : u("removalModes"),
                          }),
                        ],
                      }),
                      i.jsx("p", {
                        className: "subtle mt-2",
                        children: u("autoRemoveHelp"),
                      }),
                      i.jsx("button", {
                        className: "btn primary removal-action mt-3 w-full",
                        disabled: bgBusy || !Ct(),
                        onClick: () => Tt(!0),
                        children: bgBusy ? u("removalRunning") : u("autoRemove"),
                      }),
                      i.jsxs("div", {
                        className: "removal-refine mt-4 border-t border-ui-line pt-4",
                        children: [
                          i.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              i.jsx("span", {
                                className: "removal-step",
                                children: "2",
                              }),
                              i.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  i.jsx("strong", { children: u("bgPickTitle").replace(/^2\s*[·・]\s*/, "") }),
                                  i.jsx("p", {
                                    className: "subtle mt-1",
                                    children: u("bgPickHelp"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "tolerance-heading mt-4",
                            children: [
                              i.jsx("span", { children: u("colorRange") }),
                              i.jsxs("b", { children: [p, " / 32"] }),
                            ],
                          }),
                          i.jsx("div", {
                            className: "tolerance-presets mt-2 grid grid-cols-3 gap-2",
                            children: [0, 6, 16].map((d) =>
                              i.jsxs(
                                "button",
                                {
                                  className: `tolerance-option ${p === d ? "active" : ""}`,
                                  onClick: () => E(d),
                                  children: [
                                    i.jsx("strong", {
                                      children:
                                        d === 0
                                          ? u("exact")
                                          : d === 6
                                            ? u("soft")
                                            : u("wide"),
                                    }),
                                    i.jsx("span", {
                                      children:
                                        d === 0
                                          ? u("exactHelp")
                                          : d === 6
                                            ? u("softHelp")
                                            : u("wideHelp"),
                                    }),
                                  ],
                                },
                                d,
                              ),
                            ),
                          }),
                          i.jsx("input", {
                            className: "mt-3 w-full accent-ui-accent",
                            "aria-label": u("colorRange"),
                            type: "range",
                            min: "0",
                            max: "32",
                            step: "1",
                            value: p,
                            onChange: (d) => E(Number(d.target.value)),
                          }),
                          i.jsxs("div", {
                            className: "tolerance-scale",
                            children: [
                              i.jsx("span", { children: u("narrower") }),
                              i.jsx("span", { children: u("broader") }),
                            ],
                          }),
                          i.jsx("button", {
                            className: `btn bg-pick-toggle mt-3 w-full ${Fe === "bgpick" ? "active" : ""}`,
                            disabled: bgBusy || !Ct(),
                            onClick: () => {
                              (Re(Fe === "bgpick" ? "pan" : "bgpick"),
                                B(
                                  Fe === "bgpick"
                                    ? u("pan")
                                    : `${u("bgPickActive")} · ${u("tolerance")} ${p}`,
                                ));
                            },
                            children: u(
                              Fe === "bgpick"
                                ? "bgPickActive"
                                : "activateBgPick",
                              ),
                          }),
                          i.jsx("p", {
                            className: "bg-pick-tip mt-3",
                            children: u("bgPickTip"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "card mt-3 p-3",
                    children: [
                      i.jsx("div", {
                        className: "section-title",
                        children: u("canvasDisplay"),
                      }),
                      i.jsx("div", {
                        className: "label",
                        children: u("canvasBackground"),
                      }),
                      i.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          i.jsx("input", {
                            type: "color",
                            value: Le,
                            onChange: (d) => O(d.target.value),
                          }),
                          i.jsx("input", {
                            className: "field",
                            value: Le,
                            onChange: (d) => O(d.target.value),
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "label",
                        children: u("pixelGridColor"),
                      }),
                      i.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          i.jsx("input", {
                            type: "color",
                            value: w,
                            onChange: (d) => M(d.target.value),
                          }),
                          i.jsx("input", {
                            className: "field",
                            value: w,
                            onChange: (d) => M(d.target.value),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : h === "Workspace"
              ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("b", { children: u("processingSettings") }),
                    i.jsx("p", {
                      className: "subtle mt-1",
                      children: u("singleProcessing"),
                    }),
                    i.jsxs("button", {
                      className: "btn mt-4 w-full",
                      onClick: yr,
                      children: [
                        i.jsx(cl, { className: "mr-2 inline", size: 15 }),
                        u("chooseImage"),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "label",
                      children: [
                        u("colorCount"),
                        " ",
                        i.jsx("span", { children: oe }),
                      ],
                    }),
                    i.jsx("input", {
                      className: "w-full accent-ui-accent",
                      type: "range",
                      min: "2",
                      max: "256",
                      value: oe,
                      onChange: (d) => qe(+d.target.value),
                    }),
                    i.jsxs("div", {
                      className: "label",
                      children: [
                        u("pixelSize"),
                        " ",
                        i.jsx("span", { children: at ? "Auto" : jt }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "seg",
                      children: [
                        i.jsx("button", {
                          className: at ? "active" : "",
                          onClick: () => St(!0),
                          children: "Auto",
                        }),
                        i.jsx("button", {
                          className: at ? "" : "active",
                          onClick: () => St(!1),
                          children: "Manual",
                        }),
                      ],
                    }),
                    !at &&
                      i.jsx("input", {
                        className: "field mt-2",
                        type: "number",
                        value: jt,
                        onChange: (d) => nn(+d.target.value),
                      }),
                    i.jsxs("div", {
                      className: "card mt-4 p-3",
                      children: [
                        i.jsx("div", {
                          className: "section-title",
                          children: u("colorPalette"),
                        }),
                        i.jsxs("div", {
                          className: "seg mt-3",
                          children: [
                            i.jsx("button", {
                              className: V === "automatic" ? "active" : "",
                              onClick: () => ie("automatic"),
                              children: u("automatic"),
                            }),
                            i.jsx("button", {
                              className: V === "fixed" ? "active" : "",
                              onClick: () => ie("fixed"),
                              children: u("fixedPalette"),
                            }),
                          ],
                        }),
                        V === "fixed" &&
                          i.jsx("div", {
                            className: "mt-3",
                            children: i.jsx(wc, {
                              colors: ce,
                              setColors: j,
                              selected: Y,
                              setSelected: he,
                            }),
                          }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "card mt-4 p-3",
                      children: [
                        i.jsx("div", {
                          className: "section-title",
                          children:
                            o === "zh-Hans" ? "统一输出尺寸" : o === "zh-Hant" ? "統一輸出尺寸" : "Uniform Output Size",
                        }),
                        i.jsx("p", {
                          className: "subtle mt-1",
                          children:
                            o === "zh-Hans" ? "用于动画序列帧。只补透明边界，不放大、不缩小像素内容。" : o === "zh-Hant" ? "用於動畫序列幀。只補透明邊界，不放大、不縮小像素內容。"
                              : "For animation frames. Pads canvas only; never scales pixel content.",
                        }),
                        i.jsxs("div", {
                          className: "mt-3 grid grid-cols-3 gap-2",
                          children: [
                            i.jsx("button", {
                              className: `btn ${Ze === "off" ? "active" : ""}`,
                              onClick: () => $t("off"),
                              children: o === "zh-Hans" ? "关闭" : o === "zh-Hant" ? "關閉" : "Off",
                            }),
                            i.jsx("button", {
                              className: `btn ${Ze === "first" ? "active" : ""}`,
                              onClick: () => {
                                ($t("first"), tt(0), rt(0));
                              },
                              children:
                                o === "zh-Hans" ? "按第一张" : o === "zh-Hant" ? "按第一張" : "First Result",
                            }),
                            i.jsx("button", {
                              className: `btn ${Ze === "custom" ? "active" : ""}`,
                              onClick: () => $t("custom"),
                              children: o === "zh-Hans" ? "自定义" : o === "zh-Hant" ? "自定義" : "Custom",
                            }),
                          ],
                        }),
                        Ze === "first" &&
                          i.jsx("div", {
                            className:
                              "mt-2 rounded-lg border border-ui-line bg-ui-panel2 p-2 text-[10px] text-ui-muted",
                            children:
                              He && pt
                                ? `${o === "zh-Hans" ? "已锁定" : o === "zh-Hant" ? "已鎖定" : "Locked"}: ${He} × ${pt}`
                                : o === "zh-Hans" ? "处理第一张后自动锁定其结果尺寸" : o === "zh-Hant" ? "處理第一張後自動鎖定其結果尺寸"
                                  : "The first processed result sets the size",
                          }),
                        Ze === "custom" &&
                          i.jsxs("div", {
                            className: "mt-2 grid grid-cols-2 gap-2",
                            children: [
                              i.jsx("input", {
                                className: "field",
                                type: "number",
                                min: "16",
                                value: Bt,
                                onChange: (d) =>
                                  k(Math.max(16, +d.target.value || 16)),
                              }),
                              i.jsx("input", {
                                className: "field",
                                type: "number",
                                min: "16",
                                value: $,
                                onChange: (d) =>
                                  we(Math.max(16, +d.target.value || 16)),
                              }),
                            ],
                          }),
                        Ze !== "off" &&
                          i.jsxs(i.Fragment, {
                            children: [
                              i.jsxs("div", {
                                className: "mt-2 grid grid-cols-2 gap-2",
                                children: [
                                  i.jsx("button", {
                                    className: `btn ${ke === "center" ? "active" : ""}`,
                                    onClick: () => be("center"),
                                    children: o === "zh-Hans" ? "中心" : o === "zh-Hant" ? "中心" : "Center",
                                  }),
                                  i.jsx("button", {
                                    className: `btn ${ke === "bottom" ? "active" : ""}`,
                                    onClick: () => be("bottom"),
                                    children:
                                      o === "zh-Hans" ? "底部居中" : o === "zh-Hant" ? "底部居中" : "Bottom Center",
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className:
                                  "mt-2 grid grid-cols-[1fr_auto] gap-2",
                                children: [
                                  i.jsxs("select", {
                                    className: "field",
                                    value: Ge,
                                    onChange: (d) => W(d.target.value),
                                    children: [
                                      i.jsx("option", {
                                        value: "transparent",
                                        children:
                                          o === "zh-Hans" ? "透明背景" : o === "zh-Hant" ? "透明背景"
                                            : "Transparent",
                                      }),
                                      i.jsx("option", {
                                        value: "#ffffff",
                                        children:
                                          o === "zh-Hans" ? "白色背景" : o === "zh-Hant" ? "白色背景" : "White",
                                      }),
                                      i.jsx("option", {
                                        value: "#000000",
                                        children:
                                          o === "zh-Hans" ? "黑色背景" : o === "zh-Hant" ? "黑色背景" : "Black",
                                      }),
                                    ],
                                  }),
                                  i.jsx("input", {
                                    type: "color",
                                    value:
                                      Ge === "transparent" ? "#000000" : Ge,
                                    onChange: (d) => W(d.target.value),
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "subtle mt-2",
                                children:
                                  o === "zh-Hans" ? "提示：同一组动画帧还应使用相同的手动 Pixel Size。" : o === "zh-Hant" ? "提示：同一組動畫幀還應使用相同的手動 Pixel Size。"
                                    : "Tip: use the same Manual Pixel Size for every frame.",
                              }),
                            ],
                          }),
                      ],
                    }),
                    i.jsx("div", { className: "label", children: u("output") }),
                    i.jsx("input", {
                      className: "field",
                      value: _,
                      onChange: (d) => D(d.target.value),
                    }),
                    i.jsx("button", {
                      className: "btn primary mt-4 w-full",
                      disabled: Ie || !z || (V === "fixed" && ce.length === 0),
                      onClick: wn,
                      children: u(Ie ? "processing" : "generate"),
                    }),
                    i.jsxs("button", {
                      className: "btn mt-2 w-full",
                      disabled: !se,
                      onClick: () => {
                        (Hn("workspace"), Ue(4), Ee(!0));
                      },
                      children: [
                        i.jsx(Wf, { className: "mr-2 inline", size: 15 }),
                        u("saveResult"),
                      ],
                    }),
                    i.jsxs("button", {
                      className: "btn mt-2 w-full",
                      disabled: !se,
                      onClick: Ur,
                      children: [
                        i.jsx(Pc, { className: "mr-2 inline", size: 15 }),
                        o === "zh-Hans" ? "复制结果" : o === "zh-Hant" ? "複製結果" : "Copy Result",
                      ],
                    }),
                    i.jsx("button", {
                      className: "btn mt-2 w-full",
                      disabled: !se,
                      onClick: xr,
                      children: u("sendEditor"),
                    }),
                  ],
                })
              : h === "Batch Processing"
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("b", { children: u("batchSettings") }),
                      i.jsx("p", {
                        className: "subtle mt-1",
                        children: u("folderOnly"),
                      }),
                      i.jsxs("button", {
                        className: "btn mt-4 w-full",
                        onClick: yr,
                        children: [
                          i.jsx(cl, { className: "mr-2 inline", size: 15 }),
                          u("chooseInputFolder"),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "label",
                        children: [
                          u("colorCount"),
                          " ",
                          i.jsx("span", { children: oe }),
                        ],
                      }),
                      i.jsx("input", {
                        className: "w-full accent-ui-accent",
                        type: "range",
                        min: "2",
                        max: "256",
                        value: oe,
                        onChange: (d) => qe(+d.target.value),
                      }),
                      i.jsxs("div", {
                        className: "label",
                        children: [
                          u("pixelSize"),
                          " ",
                          i.jsx("span", { children: at ? "Auto" : jt }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "seg",
                        children: [
                          i.jsx("button", {
                            className: at ? "active" : "",
                            onClick: () => St(!0),
                            children: "Auto",
                          }),
                          i.jsx("button", {
                            className: at ? "" : "active",
                            onClick: () => St(!1),
                            children: "Manual",
                          }),
                        ],
                      }),
                      !at &&
                        i.jsx("input", {
                          className: "field mt-2",
                          type: "number",
                          value: jt,
                          onChange: (d) => nn(+d.target.value),
                        }),
                      i.jsxs("div", {
                        className: "card mt-4 p-3",
                        children: [
                          i.jsx("div", {
                            className: "section-title",
                            children: u("colorPalette"),
                          }),
                          i.jsxs("div", {
                            className: "seg mt-3",
                            children: [
                              i.jsx("button", {
                                className: V === "automatic" ? "active" : "",
                                onClick: () => ie("automatic"),
                                children: u("automatic"),
                              }),
                              i.jsx("button", {
                                className: V === "fixed" ? "active" : "",
                                onClick: () => ie("fixed"),
                                children: u("fixedPalette"),
                              }),
                            ],
                          }),
                          V === "fixed" &&
                            i.jsx("div", {
                              className: "mt-3",
                              children: i.jsx(wc, {
                                colors: ce,
                                setColors: j,
                                selected: Y,
                                setSelected: he,
                              }),
                            }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "card mt-4 p-3",
                        children: [
                          i.jsx("div", {
                            className: "section-title",
                            children:
                              o === "zh-Hans" ? "统一输出尺寸" : o === "zh-Hant" ? "統一輸出尺寸"
                                : "Uniform Output Size",
                          }),
                          i.jsx("p", {
                            className: "subtle mt-1",
                            children:
                              o === "zh-Hans" ? "用于动画序列帧。只补透明边界，不放大、不缩小像素内容。" : o === "zh-Hant" ? "用於動畫序列幀。只補透明邊界，不放大、不縮小像素內容。"
                                : "For animation frames. Pads canvas only; never scales pixel content.",
                          }),
                          i.jsxs("div", {
                            className: "mt-3 grid grid-cols-3 gap-2",
                            children: [
                              i.jsx("button", {
                                className: `btn ${Ze === "off" ? "active" : ""}`,
                                onClick: () => $t("off"),
                                children: o === "zh-Hans" ? "关闭" : o === "zh-Hant" ? "關閉" : "Off",
                              }),
                              i.jsx("button", {
                                className: `btn ${Ze === "first" ? "active" : ""}`,
                                onClick: () => {
                                  ($t("first"), tt(0), rt(0));
                                },
                                children:
                                  o === "zh-Hans" ? "按第一张" : o === "zh-Hant" ? "按第一張" : "First Result",
                              }),
                              i.jsx("button", {
                                className: `btn ${Ze === "custom" ? "active" : ""}`,
                                onClick: () => $t("custom"),
                                children: o === "zh-Hans" ? "自定义" : o === "zh-Hant" ? "自定義" : "Custom",
                              }),
                            ],
                          }),
                          Ze === "first" &&
                            i.jsx("div", {
                              className:
                                "mt-2 rounded-lg border border-ui-line bg-ui-panel2 p-2 text-[10px] text-ui-muted",
                              children:
                                He && pt
                                  ? `${o === "zh-Hans" ? "已锁定" : o === "zh-Hant" ? "已鎖定" : "Locked"}: ${He} × ${pt}`
                                  : o === "zh-Hans" ? "处理第一张后自动锁定其结果尺寸" : o === "zh-Hant" ? "處理第一張後自動鎖定其結果尺寸"
                                    : "The first processed result sets the size",
                            }),
                          Ze === "custom" &&
                            i.jsxs("div", {
                              className: "mt-2 grid grid-cols-2 gap-2",
                              children: [
                                i.jsx("input", {
                                  className: "field",
                                  type: "number",
                                  min: "16",
                                  value: Bt,
                                  onChange: (d) =>
                                    k(Math.max(16, +d.target.value || 16)),
                                }),
                                i.jsx("input", {
                                  className: "field",
                                  type: "number",
                                  min: "16",
                                  value: $,
                                  onChange: (d) =>
                                    we(Math.max(16, +d.target.value || 16)),
                                }),
                              ],
                            }),
                          Ze !== "off" &&
                            i.jsxs(i.Fragment, {
                              children: [
                                i.jsxs("div", {
                                  className: "mt-2 grid grid-cols-2 gap-2",
                                  children: [
                                    i.jsx("button", {
                                      className: `btn ${ke === "center" ? "active" : ""}`,
                                      onClick: () => be("center"),
                                      children: o === "zh-Hans" ? "中心" : o === "zh-Hant" ? "中心" : "Center",
                                    }),
                                    i.jsx("button", {
                                      className: `btn ${ke === "bottom" ? "active" : ""}`,
                                      onClick: () => be("bottom"),
                                      children:
                                        o === "zh-Hans" ? "底部居中" : o === "zh-Hant" ? "底部居中"
                                          : "Bottom Center",
                                    }),
                                  ],
                                }),
                                i.jsxs("div", {
                                  className:
                                    "mt-2 grid grid-cols-[1fr_auto] gap-2",
                                  children: [
                                    i.jsxs("select", {
                                      className: "field",
                                      value: Ge,
                                      onChange: (d) => W(d.target.value),
                                      children: [
                                        i.jsx("option", {
                                          value: "transparent",
                                          children:
                                            o === "zh-Hans" ? "透明背景" : o === "zh-Hant" ? "透明背景"
                                              : "Transparent",
                                        }),
                                        i.jsx("option", {
                                          value: "#ffffff",
                                          children:
                                            o === "zh-Hans" ? "白色背景" : o === "zh-Hant" ? "白色背景" : "White",
                                        }),
                                        i.jsx("option", {
                                          value: "#000000",
                                          children:
                                            o === "zh-Hans" ? "黑色背景" : o === "zh-Hant" ? "黑色背景" : "Black",
                                        }),
                                      ],
                                    }),
                                    i.jsx("input", {
                                      type: "color",
                                      value:
                                        Ge === "transparent" ? "#000000" : Ge,
                                      onChange: (d) => W(d.target.value),
                                    }),
                                  ],
                                }),
                                i.jsx("p", {
                                  className: "subtle mt-2",
                                  children:
                                    o === "zh-Hans" ? "提示：同一组动画帧还应使用相同的手动 Pixel Size。" : o === "zh-Hant" ? "提示：同一組動畫幀還應使用相同的手動 Pixel Size。"
                                      : "Tip: use the same Manual Pixel Size for every frame.",
                                }),
                              ],
                            }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "label",
                        children: u("outputFolder"),
                      }),
                      i.jsxs("div", {
                        className: "grid grid-cols-[1fr_auto] gap-2",
                        children: [
                          i.jsx("input", {
                            className: "field min-w-0",
                            value: q,
                            onChange: (d) => X(d.target.value),
                            placeholder: u("chooseOutput"),
                          }),
                          i.jsx("button", {
                            className: "btn px-3",
                            onClick: Dr,
                            title: u("chooseOutput"),
                            children: i.jsx(cl, { size: 16 }),
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "label",
                        children: u("exportScale"),
                      }),
                      i.jsx("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: [1, 2, 4, 8].map((d) =>
                          i.jsxs(
                            "button",
                            {
                              className: `btn ${Ce === d ? "active" : ""}`,
                              disabled: Ie,
                              onClick: () => {
                                (me(d), te(!1));
                              },
                              children: [d, "×"],
                            },
                            d,
                          ),
                        ),
                      }),
                      (Ie || H > 0) &&
                        i.jsxs("div", {
                          className: "card mt-4 p-3",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex items-center justify-between text-xs",
                              children: [
                                i.jsx("span", { children: u("batchProgress") }),
                                i.jsxs("b", {
                                  children: [
                                    H ? Math.round((le / H) * 100) : 0,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                            i.jsx("div", {
                              className:
                                "mt-3 h-2 overflow-hidden rounded-full bg-ui-panel2",
                              children: i.jsx("div", {
                                className:
                                  "h-full rounded-full bg-ui-accent transition-all duration-200",
                                style: { width: `${H ? (le / H) * 100 : 0}%` },
                              }),
                            }),
                            i.jsxs("div", {
                              className: "mt-2 text-[10px] text-ui-muted",
                              children: [le, " / ", H],
                            }),
                          ],
                        }),
                      i.jsx("button", {
                        className: "btn primary mt-4 w-full",
                        disabled:
                          Ie || !F || !q || (V === "fixed" && ce.length === 0),
                        onClick: wn,
                        children: Ie
                          ? `${u("processing")} ${le}/${H}`
                          : u("runBatch"),
                      }),
                      xe &&
                        i.jsxs("button", {
                          className: "btn mt-2 w-full",
                          onClick: Tr,
                          children: [
                            i.jsx(cl, { className: "mr-2 inline", size: 15 }),
                            u("openOutputFolder"),
                          ],
                        }),
                    ],
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("b", { children: u("application") }),
                      i.jsxs("div", {
                        className: "card mt-4 p-3",
                        children: [
                          i.jsx("div", {
                            className: "section-title",
                            children: "Pixel Soul Studio",
                          }),
                          i.jsxs("div", {
                            className: "label",
                            children: [
                              u("version"),
                              " ",
                              i.jsx("span", { children: "1.4.0" }),
                            ],
                          }),
                          i.jsx("p", {
                            className: "subtle mt-2",
                            children: "Pixel Art Creation Suite",
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "card mt-3 p-3",
                        children: [
                          i.jsx("div", {
                            className: "section-title",
                            children: u("language"),
                          }),
                          i.jsxs("div", {
                            className:
                              "mt-2 flex items-center justify-between text-xs",
                            children: [
                              i.jsx("span", {
                                className: "text-ui-muted",
                                children: u("status"),
                              }),
                              i.jsx("b", { children: Os[o] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
      }),
      i.jsxs("footer", {
        className:
          "col-span-3 flex items-center border-t border-ui-line bg-[#27241f] px-4 text-[10px] text-ui-muted",
        children: [
          i.jsx("span", {
            children: P === "Engine ready" ? u("engineReady") : P,
          }),
          i.jsx("span", {
            className: "ml-auto",
            children: ct ? `● ${u("unsaved")}` : u("saved"),
          }),
        ],
      }),
      Te &&
        i.jsx("div", {
          className:
            "fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4",
          onMouseDown: (d) => {
            d.target === d.currentTarget && !Ke && Ee(!1);
          },
          children: i.jsxs("div", {
            className:
              "w-full max-w-[460px] rounded-2xl border border-ui-line bg-ui-panel p-5 shadow-2xl",
            children: [
              i.jsxs("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("h3", {
                        className: "m-0 text-lg font-bold",
                        children: u("exportTitle"),
                      }),
                      i.jsx("p", {
                        className: "subtle mt-1",
                        children: u("exportHelp"),
                      }),
                    ],
                  }),
                  i.jsx("button", {
                    className: "tool",
                    disabled: Ke,
                    onClick: () => Ee(!1),
                    children: "×",
                  }),
                ],
              }),
              i.jsx("div", {
                className: "mt-5 grid grid-cols-4 gap-2",
                children: [1, 2, 4, 8].map((d) =>
                  i.jsxs(
                    "button",
                    {
                      className: `btn h-14 ${Pe === d ? "active ring-2 ring-ui-accent/50" : ""}`,
                      onClick: () => Ue(d),
                      children: [
                        i.jsxs("span", {
                          className: "block text-base font-bold",
                          children: [d, "×"],
                        }),
                        i.jsx("span", {
                          className: "block text-[9px] opacity-70",
                          children: d === 1 ? u("originalSize") : u("pixelPerfect"),
                        }),
                      ],
                    },
                    d,
                  ),
                ),
              }),
              i.jsxs("div", {
                className:
                  "mt-4 rounded-xl border border-ui-line bg-ui-panel2 p-3 text-[11px] text-ui-muted",
                children: [
                  i.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      i.jsx("span", { children: u("exportScaleLabel") }),
                      i.jsxs("b", {
                        className: "text-ui-text",
                        children: [Pe, "× ", u("nearestNeighbor")],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "mt-1 flex justify-between",
                    children: [
                      i.jsx("span", { children: u("formatLabel") }),
                      i.jsx("b", {
                        className: "text-ui-text",
                        children: u("pngTransparency"),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "mt-1 flex justify-between",
                    children: [
                      i.jsx("span", { children: u("filenameSuffix") }),
                      i.jsx("b", {
                        className: "text-ui-text",
                        children: Pe === 1 ? u("none") : `_${Pe}x`,
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "mt-5 grid grid-cols-[110px_1fr] gap-2",
                children: [
                  i.jsx("button", {
                    className: "btn",
                    disabled: Ke,
                    onClick: () => Ee(!1),
                    children: u("cancel"),
                  }),
                  i.jsx("button", {
                    className: "btn primary",
                    disabled: Ke,
                    onClick: () => Vn(Pe),
                    children: Ke
                      ? u("exporting")
                      : u("exportPng").replace("{scale}", Pe),
                  }),
                ],
              }),
            ],
          }),
        }),
      st && i.jsx("div", { className: "toast", children: st }),
    ],
  });
}
kf.createRoot(document.getElementById("root")).render(i.jsx(PixelSoulStudio, {}));
