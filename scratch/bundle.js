var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.act = X;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = X;
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef3(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState3(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports2.Children = Children;
        exports2.Component = Component;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.Profiler = REACT_PROFILER_TYPE;
        exports2.PureComponent = PureComponent;
        exports2.StrictMode = REACT_STRICT_MODE_TYPE;
        exports2.Suspense = REACT_SUSPENSE_TYPE;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports2.act = act;
        exports2.cloneElement = cloneElement$1;
        exports2.createContext = createContext;
        exports2.createElement = createElement$1;
        exports2.createFactory = createFactory;
        exports2.createRef = createRef;
        exports2.forwardRef = forwardRef3;
        exports2.isValidElement = isValidElement;
        exports2.lazy = lazy;
        exports2.memo = memo;
        exports2.startTransition = startTransition;
        exports2.unstable_act = act;
        exports2.useCallback = useCallback;
        exports2.useContext = useContext;
        exports2.useDebugValue = useDebugValue;
        exports2.useDeferredValue = useDeferredValue;
        exports2.useEffect = useEffect2;
        exports2.useId = useId;
        exports2.useImperativeHandle = useImperativeHandle;
        exports2.useInsertionEffect = useInsertionEffect;
        exports2.useLayoutEffect = useLayoutEffect;
        exports2.useMemo = useMemo2;
        exports2.useReducer = useReducer;
        exports2.useRef = useRef;
        exports2.useState = useState3;
        exports2.useSyncExternalStore = useSyncExternalStore;
        exports2.useTransition = useTransition;
        exports2.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// src/pages/WayanadLandingPage.jsx
var WayanadLandingPage_exports = {};
__export(WayanadLandingPage_exports, {
  default: () => WayanadLandingPage
});
module.exports = __toCommonJS(WayanadLandingPage_exports);
var import_react5 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/arrow-right.js
var __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
var ArrowRight = createLucideIcon("ArrowRight", __iconNode);

// node_modules/lucide-react/dist/esm/icons/award.js
var __iconNode2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
var Award = createLucideIcon("Award", __iconNode2);

// node_modules/lucide-react/dist/esm/icons/bug.js
var __iconNode3 = [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
];
var Bug = createLucideIcon("Bug", __iconNode3);

// node_modules/lucide-react/dist/esm/icons/building-2.js
var __iconNode4 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
var Building2 = createLucideIcon("Building2", __iconNode4);

// node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode5 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("Check", __iconNode5);

// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("ChevronDown", __iconNode6);

// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode7 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
var ChevronUp = createLucideIcon("ChevronUp", __iconNode7);

// node_modules/lucide-react/dist/esm/icons/circle-alert.js
var __iconNode8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
var CircleAlert = createLucideIcon("CircleAlert", __iconNode8);

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode9 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("CircleCheckBig", __iconNode9);

// node_modules/lucide-react/dist/esm/icons/circle-check.js
var __iconNode10 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var CircleCheck = createLucideIcon("CircleCheck", __iconNode10);

// node_modules/lucide-react/dist/esm/icons/circle-help.js
var __iconNode11 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
var CircleHelp = createLucideIcon("CircleHelp", __iconNode11);

// node_modules/lucide-react/dist/esm/icons/clock.js
var __iconNode12 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
var Clock = createLucideIcon("Clock", __iconNode12);

// node_modules/lucide-react/dist/esm/icons/copy.js
var __iconNode13 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
var Copy = createLucideIcon("Copy", __iconNode13);

// node_modules/lucide-react/dist/esm/icons/external-link.js
var __iconNode14 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
var ExternalLink = createLucideIcon("ExternalLink", __iconNode14);

// node_modules/lucide-react/dist/esm/icons/file-check.js
var __iconNode15 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
var FileCheck = createLucideIcon("FileCheck", __iconNode15);

// node_modules/lucide-react/dist/esm/icons/hotel.js
var __iconNode16 = [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
];
var Hotel = createLucideIcon("Hotel", __iconNode16);

// node_modules/lucide-react/dist/esm/icons/map-pin.js
var __iconNode17 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
var MapPin = createLucideIcon("MapPin", __iconNode17);

// node_modules/lucide-react/dist/esm/icons/message-circle.js
var __iconNode18 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
var MessageCircle = createLucideIcon("MessageCircle", __iconNode18);

// node_modules/lucide-react/dist/esm/icons/navigation.js
var __iconNode19 = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
];
var Navigation = createLucideIcon("Navigation", __iconNode19);

// node_modules/lucide-react/dist/esm/icons/phone-call.js
var __iconNode20 = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
];
var PhoneCall = createLucideIcon("PhoneCall", __iconNode20);

// node_modules/lucide-react/dist/esm/icons/phone.js
var __iconNode21 = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
];
var Phone = createLucideIcon("Phone", __iconNode21);

// node_modules/lucide-react/dist/esm/icons/search.js
var __iconNode22 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
];
var Search = createLucideIcon("Search", __iconNode22);

// node_modules/lucide-react/dist/esm/icons/send.js
var __iconNode23 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
var Send = createLucideIcon("Send", __iconNode23);

// node_modules/lucide-react/dist/esm/icons/share-2.js
var __iconNode24 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
var Share2 = createLucideIcon("Share2", __iconNode24);

// node_modules/lucide-react/dist/esm/icons/shield-check.js
var __iconNode25 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var ShieldCheck = createLucideIcon("ShieldCheck", __iconNode25);

// node_modules/lucide-react/dist/esm/icons/shield.js
var __iconNode26 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
var Shield = createLucideIcon("Shield", __iconNode26);

// node_modules/lucide-react/dist/esm/icons/sparkles.js
var __iconNode27 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
var Sparkles = createLucideIcon("Sparkles", __iconNode27);

// node_modules/lucide-react/dist/esm/icons/star.js
var __iconNode28 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
var Star = createLucideIcon("Star", __iconNode28);

// node_modules/lucide-react/dist/esm/icons/trees.js
var __iconNode29 = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
];
var Trees = createLucideIcon("Trees", __iconNode29);

// node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var __iconNode30 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
var TriangleAlert = createLucideIcon("TriangleAlert", __iconNode30);

// src/data/wayanadData.js
var WAYANAD_DATA = {
  meta: {
    title: "Termite Control in Wayanad | Anti-Termite & Pest Control Sultan Bathery, Kalpetta, Resorts",
    description: "Best termite control, anti-termite treatment & general pest control in Wayanad. Central service desk near St. Mary's College, Kuppadi, Sultan Bathery. IS:6313 certified, odorless & eco-safe for homes, luxury resorts & homestays. Call 9020040009.",
    keywords: "termite control wayanad, termite treatment wayanad, termite control sultan bathery, termite treatment sultan bathery, termite control kalpetta, termite treatment kalpetta, termite control mananthavady, pest control wayanad, resort pest control wayanad, homestay termite treatment wayanad, wood borer treatment wayanad, anti termite treatment vythiri, termite inspection sultan bathery, pest control for hotels wayanad"
  },
  brand: {
    name: "TermiteControl.me",
    parentCompany: "Eco Pest India",
    tagline: "Protecting What You've Built.",
    secondaryTagline: "Termite & Pest Control. Local Wayanad Expertise. Hill Station & Resort Coverage.",
    phone: "9020040009",
    phoneDisplay: "90200 40009",
    whatsappNumber: "919020040009",
    email: "support@termitecontrol.me",
    justdialRating: "4.9 / 5.0",
    justdialReviewsCount: "940+ Verified Ratings",
    officeAddress: {
      brand: "TermiteControl.me",
      unit: "A Unit of Eco Pest India",
      line1: "Near St. Mary's College, Kuppadi",
      city: "Sultan Bathery",
      district: "Wayanad",
      state: "Kerala",
      pincode: "673592",
      landmark: "Near St. Mary's College, Kuppadi Road",
      locality: "Kuppadi / Sultan Bathery",
      deskPhone: "9020040009",
      timing: "Open 7 Days: 8:00 AM \u2013 8:30 PM (Emergency Pest Dispatch Available)",
      geo: {
        latitude: 11.6625,
        longitude: 76.257
      }
    }
  },
  // 4 Major Commercial, Administrative & Tourism Epicenters of Wayanad
  majorHubs: [
    {
      id: "sultan-bathery",
      name: "Sultan Bathery & Kuppadi Hub",
      slug: "sultan-bathery",
      type: "Central Service Base & Commercial Gateway",
      tagline: "Primary Dispatch Desk Near St. Mary's College, Kuppadi",
      description: "Our main Wayanad service center operates from Kuppadi, Sultan Bathery. Providing rapid 45-minute on-site response for residential villas, plantation estates, commercial establishments, and resorts along NH-766.",
      prominentAreas: [
        "Kuppadi",
        "Sultan Bathery Town",
        "Chungam",
        "Assumption Junction",
        "Beenachi",
        "Chedalath",
        "Kidanganad",
        "Cheeral",
        "Naikatty",
        "Kolagappara",
        "Vadakkanad",
        "Pazhupathoor",
        "Fairland",
        "Thazhathangadi",
        "Dottappankulam",
        "Kaivattumoola"
      ]
    },
    {
      id: "kalpetta",
      name: "Kalpetta (District Headquarters)",
      slug: "kalpetta",
      type: "District Administrative HQ & Central Crossroads",
      tagline: "Commercial Core, Modern Residences & Central Tourism Hub",
      description: "Dedicated anti-termite drill-fill-seal barriers, wood borer treatments, and commercial pest control for administrative offices, banks, retail complexes, and luxury hillside residences across Kalpetta.",
      prominentAreas: [
        "Kalpetta Town",
        "Pinangode Road",
        "Kainatty",
        "Emily",
        "Devershola",
        "Mandad",
        "Kalpetta North",
        "Kalpetta South",
        "Kakkavayal",
        "Rani Mala",
        "Munderi",
        "Vellaramkunnu",
        "Adivaram Road",
        "Chuzhali",
        "Gudalai"
      ]
    },
    {
      id: "mananthavady",
      name: "Mananthavady (Northern Highlands)",
      slug: "mananthavady",
      type: "Northern Cultural & Heritage Hub",
      tagline: "Highland Residences, Heritage Tharavads & River Valley Properties",
      description: "Specialized foundation soil barriers and timber preservation for traditional wooden tharavads, sprawling coffee plantations, institutions, and tourist homestays in northern Wayanad.",
      prominentAreas: [
        "Mananthavady Town",
        "Payyampally",
        "Valliyoorkavu",
        "Thonichal",
        "Dwaraka",
        "Koyileru",
        "Arattuthara",
        "Kallody",
        "Cherukattoor",
        "Mananthavady Hospital Road",
        "Cheeyambam",
        "Paleri",
        "Kurukkanmoola",
        "Kaniyaram"
      ]
    },
    {
      id: "vythiri-meppadi",
      name: "Vythiri, Lakkidi & Meppadi",
      slug: "vythiri-meppadi",
      type: "Rainforest Resort Capital & Eco-Tourism Belt",
      tagline: "Luxury Resorts, Treehouses, Eco-Lodges & Tea Plantation Chalets",
      description: "Specialized eco-safe, zero-odor termite protection and timber borer preservation designed specifically for high-rainfall luxury resorts, wooden cottages, treehouses, and boutique homestays.",
      prominentAreas: [
        "Vythiri Town",
        "Lakkidi",
        "Pookode Lake Area",
        "Chundale",
        "Meppadi Town",
        "Chembra Peak Base",
        "Soochipara",
        "Kanthapara",
        "Chooralmala Road",
        "Attamala",
        "Vellarimala Fringe",
        "Thalappuzha Road",
        "Kunnathidavaka",
        "Old Vythiri"
      ]
    }
  ],
  // 3 Administrative Taluks in Wayanad District
  taluks: [
    {
      id: "sulthan-bathery-taluk",
      name: "Sulthan Bathery Taluk",
      headquarters: "Sulthan Bathery",
      coverage: "Sulthan Bathery Municipality, Ambalavayal, Nenmeni, Noolpuzha, Poothadi, Meenangadi, Pulpally, Mullankolly, Kuppadi, Cheeral, Naikatty, Vadakkanad, Irulam, Krishnagiri, Beenachi, Koleri."
    },
    {
      id: "vythiri-taluk",
      name: "Vythiri Taluk",
      headquarters: "Kalpetta",
      coverage: "Kalpetta Municipality, Vythiri, Meppadi, Muppainad, Muttil, Pozhuthana, Padinjarathara, Kottathara, Kaniyambetta, Chundale, Vengappally, Thariyode, Lakkidi, Pookode, Arappatta, Kakkavayal."
    },
    {
      id: "mananthavady-taluk",
      name: "Mananthavady Taluk",
      headquarters: "Mananthavady",
      coverage: "Mananthavady Municipality, Panamaram, Thirunelly, Vellamunda, Thondernad, Thavinhal, Edavaka, Begur, Kuruva Island, Payyampally, Dwaraka, Valliyoorkavu."
    }
  ],
  // 4 Block Panchayats & All 23 Grama Panchayats in Wayanad
  blocks: [
    {
      id: "sultan-bathery-block",
      name: "Sultan Bathery Block",
      headquarters: "Sultan Bathery",
      tagline: "Eastern Plantation Gateway, Wildlife Fringe & Commercial Corridor",
      description: "Subterranean termite soil barriers, pre-construction treatments, and plantation bungalow protection across eastern Wayanad.",
      panchayats: [
        { name: "Ambalavayal", areas: "Ambalavayal Town, Edakkal Caves, Regional Agricultural Research Station, Karapuzha Dam Fringe, Malika, Vaduvanchal Road" },
        { name: "Meenangadi", areas: "Meenangadi Town, Krishnagiri, Purakkadi, Kolagappara, 54th Mile, Kaniyambetta Link" },
        { name: "Nenmeni", areas: "Nenmeni, Koliyadi, Mangalam, Chulliyode, Nambiar Kunnu, Cheeral Border" },
        { name: "Noolpuzha", areas: "Noolpuzha, Naikatty, Kalloor, Muthanga Sanctuary Gate, Vadakkanad Road, Ponkuzhi" },
        { name: "Poothadi", areas: "Poothadi, Kenichira, Nadavayal, Valavayal, Manikavu, Koleri" }
      ]
    },
    {
      id: "panamaram-pulpally-block",
      name: "Panamaram & Pulpally Block",
      headquarters: "Panamaram",
      tagline: "Central Agricultural Heart, River Valleys & Border Homesteads",
      description: "Targeted wood borer treatments, residential drill-fill-seal, and subterranean termite nest destruction for agrarian estates and modern villas.",
      panchayats: [
        { name: "Pulpally", areas: "Pulpally Town, Seetha Mount, Mullankolly Road, Marakkadavu, Palvelicham, Anandamala" },
        { name: "Mullankolly", areas: "Mullankolly, Padichira, Vattachira, Sasimala, Kabini River Basin, Perikalloor" },
        { name: "Panamaram", areas: "Panamaram Town, Cherukattoor, Neervaram, Kayakkunnu, Mathamangalam, Koolivayal" },
        { name: "Kaniyambetta", areas: "Kaniyambetta, Kambalakkad, Varadoor, Pachilakkad, Millumukku" }
      ]
    },
    {
      id: "kalpetta-vythiri-block",
      name: "Kalpetta & Vythiri Block",
      headquarters: "Kalpetta",
      tagline: "Rainforest Resort Corridor, Lake Retreats & Highland Residences",
      description: "Eco-safe, non-leaching termiticides and odorless timber treatments tailored for luxury forest resorts, treehouses, and lakeside cottages.",
      panchayats: [
        { name: "Vythiri", areas: "Vythiri Town, Old Vythiri, Lakkidi, Chain Tree Area, Kunnathidavaka, Pookode Road" },
        { name: "Meppadi", areas: "Meppadi Town, Chembra Peak Road, Soochipara, Kanthapara, Nedumbala, Chooralmala" },
        { name: "Muppainad", areas: "Muppainad, Vaduvanchal, Chundale Border, Rippon Tea Estate, Meppadi Link" },
        { name: "Muttil", areas: "Muttil North, Muttil South, Mandad, Kainatty Link, WMO College Area" },
        { name: "Pozhuthana", areas: "Pozhuthana, Sugandhagiri, Peringoda, Kurumbalakotta Foothills, Achooranam" },
        { name: "Padinjarathara", areas: "Padinjarathara Town, Banasura Sagar Dam, Kuppadithara, Venniyode, Karlad Lake Border" },
        { name: "Kottathara", areas: "Kottathara, Venniyode, Kumbilery, Kurumbalakotta Base, Vettathur" },
        { name: "Vengappally", areas: "Vengappally, Puzhamudi, Pinangode Border, Chuzhali" },
        { name: "Thariyode", areas: "Thariyode, Karlad Lake Area, Kavumannam, 10th Mile, Banasura Foothills" }
      ]
    },
    {
      id: "mananthavady-block",
      name: "Mananthavady Block",
      headquarters: "Mananthavady",
      tagline: "Heritage Teak Tharavads, River Island Resorts & Forest Fringe Belts",
      description: "Non-destructive micro-drilling, deep timber permeation, and pre-construction foundation piping for northern Wayanad properties.",
      panchayats: [
        { name: "Thirunelly", areas: "Thirunelly Temple Area, Appapara, Thrissilery, Brahmagiri Base, Kattikulam, Bavali" },
        { name: "Vellamunda", areas: "Vellamunda, Ozhakkodi, Taruvana, Pulikkal, Kattayad, Kanjirangad" },
        { name: "Thondernad", areas: "Thondernad, Korome, Makkiyad, Kunjome, Mattilayam, Vellamunda Border" },
        { name: "Thavinhal", areas: "Thavinhal, Thalappuzha, Valad, Boys Town, Mananthavady Pass, Kambamala" },
        { name: "Edavaka", areas: "Edavaka, Dwaraka, Kallody, Thonichal, Pallikkal, Payyampally Border" }
      ]
    }
  ],
  // Special Tourism & Hospitality Destination Targeting in Wayanad
  tourismDestinations: [
    {
      title: "Vythiri & Lakkidi Rainforest Luxury Resorts",
      locations: "Vythiri, Lakkidi, Chain Tree, Pookode, Old Vythiri",
      challenge: "Dense rainforest humidity, heavy rainfall, and elevated soil moisture create hyper-active subterranean termite activity attacking wooden stilt chalets, bamboo decks, and luxury forest cottages.",
      solution: "Odorless, non-leaching termiticide barrier injection, timber preservative saturation, and eco-safe formulations harmless to forest wildlife and guests."
    },
    {
      title: "Meppadi & Chembra Peak Plantation Retreats",
      locations: "Meppadi, Chembra Peak Base, Soochipara Falls, Kanthapara, Chooralmala",
      challenge: "High altitude tea/coffee plantation estates with extensive teak roof trusses, wooden floorings, and damp sub-soil termite colonies tunneling under foundation slabs.",
      solution: "Sub-slab chemical barrier creation, acoustic hollow detection, and periodic preventative wood borer micro-syringe treatments."
    },
    {
      title: "Banasura Sagar Dam & Padinjarathara Waterfront Cottages",
      locations: "Padinjarathara, Banasura Dam Area, Thariyode, Karlad Lake, Kuppadithara",
      challenge: "Water reservoir proximity creates continuous soil dampness, encouraging subterranean termites (Coptotermes gestroi) to penetrate concrete expansion joints and wooden wall paneling.",
      solution: "Moisture-resistant non-repellent transfer chemistry creating an impenetrable underground perimeter shield."
    },
    {
      title: "Edakkal Caves & Ambalavayal Heritage Homestays",
      locations: "Ambalavayal, Edakkal, Karapuzha Lakeside, Vaduvanchal, Malika",
      challenge: "Traditional stone and timber architecture with antique wooden pillars and exposed ceiling rafters vulnerable to powder-post beetle larvae (wood borers) and drywood termites.",
      solution: "Specialized syringe injection into borer exit pinholes, non-staining timber coatings, and localized drywood foaming."
    },
    {
      title: "Kuruva Dweep, Begur & Thirunelly Forest Lodges",
      locations: "Kuruva Island, Begur, Thirunelly, Kattikulam, Bavali, Tholpetty",
      challenge: "Forest-edge riverine environment with decomposing root systems supplying massive subterranean termite colonies that migrate toward wooden homestays and eco-lodges.",
      solution: "Perimeter soil trenching, transfer-chemistry nest annihilation, and zero-odor scheduled Annual Maintenance Contracts (AMC)."
    }
  ],
  // 14 Comprehensive Termite & Timber Protection Services in Wayanad
  services: [
    {
      id: "termite-control",
      name: "Termite Control",
      slug: "termite-control",
      tagline: "Comprehensive Colony Elimination & Structural Defense",
      icon: "ShieldAlert",
      image: "/images/service-termite-control.jpg",
      description: "Total subterranean termite extermination for residential, commercial, and resort properties in Wayanad. Uses advanced non-repellent transfer termiticides that worker termites unknowingly carry back to the queen, annihilating the entire underground colony.",
      method: "Perimeter soil barrier, sub-slab injection, and transfer-chemistry nest destruction.",
      warranty: "5-Year Written Guarantee with Periodic Audits",
      chemical: "Government-approved, odorless, non-repellent termiticide (safe for guests & pets)."
    },
    {
      id: "termite-treatment",
      name: "Termite Treatment",
      slug: "termite-treatment",
      tagline: "Targeted Eradication for Active Infestations",
      icon: "Flame",
      image: "/images/service-termite-treatment.jpg",
      description: "Fast-acting curative termite eradication when live mud tubes or active white ants are discovered in door frames, false ceilings, modular kitchens, or wooden rafters across Wayanad.",
      method: "Precision injection directly into active mud galleries, infested timber junctions, and foundation voids.",
      warranty: "Immediate Clearance Certificate + Multi-Year Structural Warranty",
      chemical: "Fast-acting colony-eliminating formulation with zero downtime."
    },
    {
      id: "termite-inspection",
      name: "Termite Inspection",
      slug: "termite-inspection",
      tagline: "Diagnostic Moisture & Acoustic Thermal Detection",
      icon: "Search",
      image: "/images/service-termite-inspection.jpg",
      description: "Thorough non-destructive structural diagnostic assessment. Our Wayanad technicians check wall junctions, electrical conduits, ceiling beams, sub-floor crawlspaces, and wooden furniture for concealed termite colonies.",
      method: "Digital moisture meters, acoustic listening tools, and sub-surface thermal analysis.",
      warranty: "Comprehensive Written Diagnostic Report & Custom Treatment Blueprint",
      chemical: "Non-invasive, non-destructive diagnostic process."
    },
    {
      id: "anti-termite-treatment",
      name: "Anti-Termite Treatment",
      slug: "anti-termite-treatment",
      tagline: "Chemical Barrier Protection Under IS:6313 (Part 2 & 3)",
      icon: "ShieldCheck",
      image: "/images/pest4.jpg",
      description: "Standardized chemical barrier creation following Bureau of Indian Standards (IS:6313) norms for pre-construction and post-construction buildings throughout Wayanad.",
      method: "Continuous soil saturation, plinth masonry treatment, and foundation conduit sealing.",
      warranty: "5 to 10-Year Certified Warranty with Renewal Options",
      chemical: "IS-compliant termiticide forming an impenetrable chemical zone around the structure."
    },
    {
      id: "pre-construction-termite-treatment",
      name: "Pre-Construction Termite Treatment",
      slug: "pre-construction-termite-treatment",
      tagline: "IS 6313 (Part 2) 4-Stage Foundation Soil Barrier",
      icon: "Hammer",
      image: "/images/service-pre-construction.jpg",
      description: "Essential termite defense implemented during building construction in Wayanad. Treats bottom/sides of foundation trenches, backfill soil, plinth filling, and perimeter external soil before floor flooring is laid.",
      method: "4-Stage soil chemical saturation under foundation footings, plinth beam walls, and perforated reticulation piping installation.",
      warranty: "10-Year Full Structural Pre-Construction Warranty",
      chemical: "High-stability termiticide bonded with soil particles resisting high rainfall leaching."
    },
    {
      id: "post-construction-termite-treatment",
      name: "Post-Construction Termite Treatment",
      slug: "post-construction-termite-treatment",
      tagline: "Drill-Fill-Seal Technology for Existing Buildings",
      icon: "Building2",
      image: "/images/service-post-construction.jpg",
      description: "Scientific non-destructive treatment for established villas, apartments, commercial buildings, and resorts with active or preventative termite risks in Wayanad.",
      method: "Precision 12mm holes drilled at 1-foot intervals along inner wall junctions, injected with termiticide under pressure, and colour-matched sealed.",
      warranty: "5-Year Renewed Structural Warranty",
      chemical: "Odorless, non-staining, pet-safe non-repellent chemical formulation."
    },
    {
      id: "residential-termite-control",
      name: "Residential Termite Control",
      slug: "residential-termite-control",
      tagline: "Total Home, Villa & Plantation Bungalow Protection",
      icon: "Home",
      image: "/images/service-residential.jpg",
      description: "Customized residential termite defense protecting modular kitchens, wooden wardrobes, teak door frames, false ceilings, and compound wall foundations for homeowners across Sultan Bathery, Kalpetta, and Mananthavady.",
      method: "Whole-home inspection, selective drill-seal barrier, and preventative woodwork treatment.",
      warranty: "Full Residential Warranty with Annual Audits",
      chemical: "Safe for children, elderly family members, and indoor domestic pets."
    },
    {
      id: "commercial-termite-control",
      name: "Commercial & Institutional Pest Control",
      slug: "commercial-termite-control",
      tagline: "Offices, Spice Processing Plants & Commercial Buildings",
      icon: "Factory",
      image: "/images/service-commercial.jpg",
      description: "Enterprise-grade termite management for commercial complexes, spice export units, coffee curing plants, retail stores, banks, schools, and hospitals across Wayanad.",
      method: "Off-hours quiet execution, minimal business disruption, and comprehensive compliance documentation.",
      warranty: "Commercial AMC Contracts with Priority Dispatch",
      chemical: "Industrial-grade approved termiticide with zero downtime."
    },
    {
      id: "resort-homestay-termite-treatment",
      name: "Resort, Treehouse & Eco-Lodge Timber Treatment",
      slug: "resort-homestay-termite-treatment",
      tagline: "Specialized Care for High-Altitude Timber Hospitality Properties",
      icon: "Hotel",
      image: "/images/wayanad-resort-cottage.jpg",
      description: "Tailored preservation protocols for high-value timber architecture, bamboo stilt cottages, treehouses, and resort chalets in Vythiri, Meppadi, and Lakkidi. 100% odor-free with zero evacuation required for guests.",
      method: "Deep timber permeation, acoustic hollow detection, and discrete non-disruptive barrier placement.",
      warranty: "Multi-Year Hospitality Preservation Warranty",
      chemical: "Eco-safe, wood-nourishing, non-corrosive, wildlife-friendly termiticide."
    },
    {
      id: "holiday-home-termite-protection",
      name: "Homestay & Holiday Home Protection",
      slug: "holiday-home-termite-protection",
      tagline: "Heritage Homestays, Airbnb Cottages & Heritage Tharavads",
      icon: "Hotel",
      image: "/images/wayanad-heritage-tharavad.jpg",
      description: "Targeted termite defense for homestays and heritage properties where continuous tourist occupancy and antique wooden structures require delicate, odorless, and fast treatment.",
      method: "Concealed micro-injection, utility penetration sealing, and exterior perimeter trench barriers.",
      warranty: "Homestay Specific Warranty with Biannual Inspections",
      chemical: "Zero-odor, eco-certified termiticide."
    },
    {
      id: "wood-borer-treatment",
      name: "Wood Borer Treatment",
      slug: "wood-borer-treatment",
      tagline: "Powder-Post Beetle & Timber Borer Eradication",
      icon: "Bug",
      image: "/images/wood-borer.jpg",
      description: "Specialized chemical syringe micro-injection and surface coating to eliminate wood borer larvae (powder-post beetles) producing fine yellow-white powder beneath wooden furniture and roof beams in Wayanad.",
      method: "Direct syringe injection into borer exit pinholes followed by petroleum-free chemical brushing.",
      warranty: "2 to 5-Year Wood Borer Protection Warranty",
      chemical: "Deep-penetrating wood preservative solution."
    },
    {
      id: "drywood-termite-control",
      name: "Drywood Termite Control",
      slug: "drywood-termite-control",
      tagline: "Non-Subterranean Direct Wood Infestation Treatment",
      icon: "Layers",
      image: "/images/pest7.jpg",
      description: "Eradication of drywood termites that live directly inside furniture, doors, window sills, and wooden ceilings without requiring soil contact in Wayanad's highland environment.",
      method: "Acoustic detection, targeted localized foaming, and wood preservative injection.",
      warranty: "Targeted Furniture & Fixture Warranty",
      chemical: "Slow-acting insect growth regulator formulation."
    },
    {
      id: "subterranean-termite-control",
      name: "Subterranean Termite Control",
      slug: "subterranean-termite-control",
      tagline: "Soil-Dwelling Ground Colony Annihilation for High-Rainfall Belts",
      icon: "Droplet",
      image: "/images/termite-damage.jpg",
      description: "The primary termite threat in Wayanad. Subterranean termites nest underground in damp plantation soil and build mud tubes to consume cellulose in buildings and resorts.",
      method: "Perimeter soil trenching, sub-slab injection, and transfer-chemistry nest destruction.",
      warranty: "5 to 10-Year Soil Barrier Warranty",
      chemical: "Non-repellent transfer termiticide creating an invisible elimination zone."
    },
    {
      id: "termite-prevention-amc",
      name: "Termite Prevention & AMC",
      slug: "termite-prevention-amc",
      tagline: "Proactive Monitoring & Annual Maintenance for Wayanad Properties",
      icon: "Compass",
      image: "/images/service-prevention-amc.jpg",
      description: "Scheduled preventative inspections, perimeter barrier top-ups, and moisture control consultations to ensure permanent termite-free property status for luxury resorts, homestays, and residences.",
      method: "Biannual acoustic audits, exterior perimeter refreshers, and plumbing dampness assessments.",
      warranty: "Continuous Active Protection Warranty",
      chemical: "Preventative micro-dosages and physical exclusion techniques."
    }
  ],
  // 6 General Pest Control Services for Wayanad
  generalPestServices: [
    {
      id: "cockroach-control",
      name: "Cockroach Control",
      tagline: "Advanced Gel Baiting & Odorless Kitchen Spray",
      description: "Targeted German & American cockroach eradication for resort kitchens, restaurants, food storage pantries, and homes. 100% odorless gel that causes secondary colony eradication.",
      icon: "Bug",
      features: ["Odorless Food-Grade Gel", "No Kitchen Evacuation", "Hassle-Free AMC"]
    },
    {
      id: "rodent-control",
      name: "Rodent & Rat Control",
      tagline: "Tamper-Resistant Bait Stations & Structural Exclusion",
      description: "Effective rodent management for spice warehouses, coffee estates, resort grounds, and commercial properties. Prevents electrical wiring damage and health hazards.",
      icon: "ShieldAlert",
      features: ["Tamper-Proof Bait Boxes", "Entry Hole Exclusion", "Zero Odor Trapping"]
    },
    {
      id: "bedbug-control",
      name: "Bed Bug Eradication",
      tagline: "2-Stage Comprehensive Thermal & Chemical Treatment",
      description: "Crucial for Wayanad hotels, homestays, and tourist lodges. Eliminates all bedbug life stages (eggs, nymphs, adults) in mattresses, headboards, and luggage racks.",
      icon: "Flame",
      features: ["High-Pressure Steaming", "Micro-Encapsulated Spray", "Guest Room Clearance"]
    },
    {
      id: "mosquito-control",
      name: "Mosquito Management",
      tagline: "Eco-Friendly Larvicide & Outdoor Thermal Misting",
      description: "Reduces mosquito populations across resort garden lawns, water features, swimming pool fringes, and residential compounds without harming beneficial pollinators.",
      icon: "Droplet",
      features: ["Larval Source Reduction", "Organic Garden Misting", "Dengue/Malaria Defense"]
    },
    {
      id: "ant-spider-control",
      name: "Ant & Spider Control",
      tagline: "Perimeter Barrier & Roof Truss Spray",
      description: "Clears carpenter ants, crazy ants, and webs from wooden eaves, thatched roofs, garden patios, and balcony seating areas across Wayanad properties.",
      icon: "Layers",
      features: ["Residual Perimeter Spray", "Long-Lasting Repellency", "Attic Web Clearance"]
    },
    {
      id: "hospitality-pest-amc",
      name: "Resort & Hotel Pest AMC",
      tagline: "All-in-One Integrated Pest Management (IPM)",
      description: "Comprehensive 360-degree pest control contract combining termite monitoring, cockroach gel baiting, rodent management, and fly control with audit-ready documentation.",
      icon: "Building2",
      features: ["FSSAI Audit Compliant", "Monthly/Quarterly Service", "Priority 24/7 Desk"]
    }
  ],
  // Wayanad Property Types & Environmental Context
  propertyProfiles: [
    {
      title: "Luxury Rainforest Resorts & Wooden Treehouses",
      locations: "Vythiri, Lakkidi, Meppadi, Chembra, Pookode",
      challenge: "Damp rainforest climate, massive exposed teak and bamboo structures, and organic garden soils harbor relentless subterranean termite colonies attacking wooden stilt foundations.",
      solution: "Eco-safe non-leaching chemical barriers, non-destructive timber saturation, and discrete quarterly preventative maintenance audits."
    },
    {
      title: "Heritage Coffee & Tea Plantation Tharavads",
      locations: "Sultan Bathery, Ambalavayal, Mananthavady, Meenangadi",
      challenge: "Century-old wooden machans, carved teak pillars, and antique wooden roof trusses prone to both subterranean termite tunneling and powder-post wood borer attacks.",
      solution: "Micro-drilling borer syringe injection, non-staining surface preservation, and foundation perimeter trenching preserving antique heritage."
    },
    {
      title: "Waterfront Lake & Dam Cottages",
      locations: "Banasura Sagar Dam, Padinjarathara, Karapuzha, Karlad Lake",
      challenge: "High ambient water table and saturated soil facilitate rapid subterranean termite mud tube expansion through floor tile joints and electrical conduits.",
      solution: "Moisture-resistant non-repellent transfer chemistry creating an impenetrable sub-soil elimination zone around the building perimeter."
    },
    {
      title: "Modern NRI Mansions & Multi-Story Concrete Villas",
      locations: "Kalpetta, Sultan Bathery, Mananthavady, Meppadi, Pulpally",
      challenge: "Concealed PVC electrical conduits, drywall partitions, imported modular kitchen cabinetry, and false ceilings acting as dark highways for termite mud tubes.",
      solution: "Precision acoustic inspection, conduit entry isolation, and surgical drill-fill-seal protection behind skirtings and cabinets."
    },
    {
      title: "Spice Warehouses, Coffee Curing Plants & Commercial Units",
      locations: "Kuppadi, Beenachi, Kalpetta, Naikatty, Panamaram",
      challenge: "Wooden shipping pallets, cardboard packaging materials, and vast floor slabs susceptible to hidden subterranean colony tunneling under concrete flooring.",
      solution: "Industrial sub-slab injection, perimeter chemical barrier, and non-disruptive off-hours execution with zero operational downtime."
    }
  ],
  // 5-Step Scientific Treatment Process
  treatmentProcess: [
    {
      step: "01",
      title: "On-Site Diagnostic Inspection",
      description: "Our certified Wayanad technicians assess your property using acoustic sensors, moisture meters, and optical scopes to map subterranean termite mud tubes and wood borer hotspots."
    },
    {
      step: "02",
      title: "Infestation & Structure Mapping",
      description: "We determine the exact species (Subterranean, Drywood, or Wood Borer) and engineer a customized treatment blueprint adhering to IS:6313 standards."
    },
    {
      step: "03",
      title: "Precision Chemical Application",
      description: "Using odorless, non-repellent transfer chemistry, we execute perimeter soil saturation, sub-slab drill-fill-seal injection, or borer micro-syringe permeation."
    },
    {
      step: "04",
      title: "Colour-Matched Seamless Sealing",
      description: "All drilled injection points along wall joints or floor tiles are filled with matching waterproof epoxy compound, leaving your property immaculate."
    },
    {
      step: "05",
      title: "Warranty & Scheduled Audits",
      description: "You receive an official multi-year written warranty certificate backed by free periodic audit inspections from our Sultan Bathery central dispatch desk."
    }
  ],
  // Trust Building & Why Choose Us (8 Core Pillars)
  whyChooseUs: [
    {
      title: "Local Sultan Bathery Service Base",
      description: "Stationed near St. Mary's College, Kuppadi, our technicians reach any location in Sultan Bathery, Kalpetta, Mananthavady, or Vythiri within 45 to 60 minutes."
    },
    {
      title: "IS:6313 Certified & Non-Repellent",
      description: "We adhere strictly to Bureau of Indian Standards (IS:6313) using cutting-edge transfer termiticides that eliminate entire underground colonies including the queen."
    },
    {
      title: "Eco-Safe for Western Ghats Biosphere",
      description: "Our odorless chemical formulations are non-toxic to humans, pets, and native wildlife, perfectly suited for Wayanad's eco-sensitive resort and plantation zones."
    },
    {
      title: "Zero Downtime for Resorts & Homestays",
      description: "100% odorless applications that require zero guest room evacuation, zero food contamination risk, and no business interruption."
    },
    {
      title: "5 to 10-Year Written Guarantee",
      description: "Every full structural treatment is backed by a stamped multi-year warranty certificate with complimentary re-treatments if activity is ever detected."
    },
    {
      title: "Free On-Site Property Inspection",
      description: "No-obligation, comprehensive diagnostic inspection across Wayanad with immediate transparent cost estimation."
    },
    {
      title: "Wood Borer & General Pest Synergy",
      description: "Complete one-stop solution for termites, powder-post beetles, cockroaches, rodents, bed bugs, and mosquitoes under a single trusted partner."
    },
    {
      title: "4.9\u2605 Rated on Justdial & Google",
      description: "Over 940+ verified 5-star customer reviews from resort owners, plantation managers, and homeowners across Wayanad District."
    }
  ],
  // Customer Reviews & Real Testimonials from Wayanad Clients
  testimonials: [
    {
      name: "Mathew Varghese",
      role: "Managing Director, Luxury Eco Resort",
      location: "Vythiri, Wayanad",
      review: "Our resort in Vythiri has 18 wooden cottages surrounded by dense rainforest. Termites and wood borers were a constant threat to our roof rafters. TermiteControl.me deployed an odorless IS:6313 barrier without causing any disruption to our guests. Their periodic audits and 5-year warranty give us complete peace of mind.",
      rating: 5,
      date: "August 2026",
      service: "Resort Timber Termite & Wood Borer Treatment"
    },
    {
      name: "Dr. Ananya Nair",
      role: "Homeowner",
      location: "Kuppadi, Sultan Bathery",
      review: "Discovered termite mud tubes behind our modular kitchen cabinets in our newly built villa. Their team from the Kuppadi desk arrived within 40 minutes, did a thorough moisture scan, and performed drill-fill-seal treatment. The work was extremely clean, odorless, and completely solved the problem.",
      rating: 5,
      date: "July 2026",
      service: "Residential Drill-Fill-Seal Termite Treatment"
    },
    {
      name: "Sujith Menon",
      role: "Plantation Homestay Owner",
      location: "Meppadi / Chembra Base, Wayanad",
      review: "Our century-old heritage plantation bungalow had powder-post borer dust falling from the wooden ceiling machan. The TermiteControl.me specialists used micro-syringe injection that preserved our antique teak wood perfectly without staining. Highly recommended for any timber property in Wayanad!",
      rating: 5,
      date: "June 2026",
      service: "Heritage Timber & Wood Borer Treatment"
    },
    {
      name: "K. P. Ramachandran",
      role: "Commercial Complex Owner",
      location: "Pinangode Road, Kalpetta",
      review: "Contracted TermiteControl.me for pre-construction anti-termite soil treatment for our 3-story commercial complex in Kalpetta. Their chemical dosing was strictly as per IS:6313 norms and the documentation provided was top notch for building certifications.",
      rating: 5,
      date: "May 2026",
      service: "Pre-Construction Anti-Termite Treatment"
    },
    {
      name: "Jaffer Ali",
      role: "Coffee & Spices Warehouse Manager",
      location: "Mananthavady, Wayanad",
      review: "We had severe subterranean termite infestation affecting wooden storage pallets and cardboard packaging in our warehouse. The team performed sub-slab injection and perimeter chemical trenches. Total colony eradication in just one visit.",
      rating: 5,
      date: "April 2026",
      service: "Commercial Sub-Slab Termite Control"
    }
  ],
  // 15 Comprehensive AEO & Voice Search Optimized FAQs
  faqs: [
    {
      q: "What is the best termite treatment for a house or resort in Wayanad?",
      a: "The best termite treatment for Wayanad properties is an IS:6313 certified post-construction drill-fill-seal chemical barrier using non-repellent transfer chemistry (such as Imidacloprid or Fipronil). Because Wayanad has high rainfall and damp plantation soils, non-repellent termiticides are vital because worker termites unknowingly carry the active chemical back to the underground nest, eradicating the entire subterranean colony including the queen."
    },
    {
      q: "How much does termite treatment cost in Wayanad?",
      a: "Termite treatment costs in Wayanad typically start from \u20B94,500 to \u20B98,500 for targeted room or kitchen treatments, \u20B912,000 to \u20B925,000 for full 2-3 BHK residential drill-fill-seal structural barriers, and \u20B925,000+ for large plantation bungalows and luxury resorts depending on total square footage, perimeter linear meters, and timber surface area. We provide a 100% free on-site inspection and transparent written quote."
    },
    {
      q: "How can I identify termite infestation in my Wayanad property?",
      a: "Common signs of termites in Wayanad include brown mud tubes running up foundation walls, hollow-sounding wooden door frames, papery crumbling timber veneer, blistering wall paint, and discarded silvery wings on window sills after monsoon swarms. If you notice fine yellow wood powder beneath furniture, that indicates wood borer beetle larvae rather than termites."
    },
    {
      q: "Is termite treatment safe for eco-resorts, homestays, and pets in Wayanad?",
      a: "Yes. We exclusively use government-approved (CIBRC registered), odorless, low-toxicity non-repellent termiticides that bind tightly to sub-soil and wood fibers without leaching into water bodies or emitting toxic fumes. It is 100% safe for resort guests, children, elderly residents, pets, and native wildlife in Wayanad's eco-sensitive Western Ghats biosphere."
    },
    {
      q: "How long does termite treatment take for a home or resort?",
      a: "A standard residential drill-fill-seal treatment for a 2,000 sq.ft home takes approximately 3 to 5 hours. Large resorts or commercial complexes are completed in 1 to 2 days or executed during off-hours with zero operational downtime for guests and staff."
    },
    {
      q: "Do you provide free termite inspection in Sultan Bathery, Kalpetta, and Mananthavady?",
      a: "Yes! We provide 100% free on-site termite and pest inspections across all towns in Wayanad District, including Sultan Bathery, Kalpetta, Mananthavady, Vythiri, Meppadi, Panamaram, Ambalavayal, and Pulpally. Our technician will visit your site, perform moisture and acoustic checks, and provide an instant quote."
    },
    {
      q: "Where is your Wayanad service office located?",
      a: "Our central Wayanad dispatch desk is located Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala - 673592. You can contact our central helpline at 9020040009 for same-day service dispatch."
    },
    {
      q: "Do you provide pest control for resorts, homestays, and hotels in Wayanad?",
      a: "Yes. We specialize in comprehensive hospitality pest management (IPM) for resorts, treehouses, homestays, hotels, and restaurants in Vythiri, Lakkidi, Meppadi, Banasura, and throughout Wayanad. We handle termites, wood borers, cockroaches, rodents, bed bugs, and mosquitoes with FSSAI audit-compliant service logs."
    },
    {
      q: "Why are termites and wood borers more aggressive in Wayanad's climate?",
      a: "Wayanad's high-altitude damp rainforest climate, heavy monsoon precipitation (exceeding 3,000mm annually), and organic soil rich in decomposing tree roots create ideal breeding conditions for subterranean termites. Additionally, the extensive use of teak, anjili, jackfruit wood, and bamboo in local architecture provides continuous cellulose food sources."
    },
    {
      q: "What is the difference between subterranean termites and wood borers?",
      a: "Subterranean termites nest underground in the soil and build mud pathways to consume wood from the inside out. Wood borers (powder-post beetles) live directly inside seasoned timber as larvae and push fine powdery frass out of tiny pinholes without soil contact. Our team provides specialized syringe injection for borers and sub-slab barriers for termites."
    },
    {
      q: "Do you provide pre-construction anti-termite treatment in Wayanad?",
      a: "Yes. We execute IS:6313 (Part 2) certified 4-stage pre-construction soil treatment for new houses, resorts, and commercial buildings in Wayanad, treating foundation trenches, backfill earth, plinth filling, and external perimeter soil before flooring is poured, backed by a 10-year warranty."
    },
    {
      q: "What warranty do you offer on termite treatments?",
      a: "We offer a 5-Year Written Guarantee for post-construction drill-fill-seal treatments and a 10-Year Guarantee for pre-construction soil treatments. If any termite activity reoccurs during the warranty period, we provide complete re-treatment at zero additional cost."
    },
    {
      q: "How quickly can your team reach my property in Wayanad?",
      a: "Our rapid response team dispatched from our Sultan Bathery Kuppadi hub reaches Sultan Bathery and Meenangadi within 30\u201345 minutes, Kalpetta and Vythiri within 45\u201360 minutes, and Mananthavady or Pulpally within 60 minutes."
    },
    {
      q: "Do you offer general pest control for cockroaches, rats, and bed bugs?",
      a: "Yes. We provide complete pest control services including odorless cockroach gel baiting, rodent bait stations and exclusion, 2-stage bed bug thermal eradication, and eco-friendly mosquito misting for residences and commercial properties across Wayanad."
    },
    {
      q: "How often should resorts in Wayanad schedule termite and pest AMC?",
      a: "Due to Wayanad's high humidity and forest surroundings, resorts and homestays should schedule quarterly or biannual preventative audits and maintenance treatments to ensure zero guest complaints and prevent expensive structural wood damage."
    }
  ]
};

// src/utils/analytics.js
var PRIMARY_PHONE = "9020040009";
var PRIMARY_PHONE_DISPLAY = "9020040009";
var WHATSAPP_NUMBER = "919020040009";
var trackConversion = (eventName, params = {}) => {
  try {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const eventPayload = {
      event: eventName,
      timestamp,
      url: window.location.href,
      pathname: window.location.pathname,
      ...params
    };
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        send_to: window.GA_CONVERSION_ID || void 0,
        ...params
      });
    }
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(eventPayload);
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", eventName, params);
    }
    console.info(`[Conversion Tracked]: ${eventName}`, eventPayload);
  } catch (err) {
    console.error("Error logging conversion event:", err);
  }
};
var getWhatsAppLink = (context = {}) => {
  const { location, service, propertyType, message } = context;
  let text = "Hi, I need termite control / wood borer treatment. Please provide details.";
  if (location && service) {
    text = `Hi TermiteControl.me, I am looking for ${service} in ${location}. Please provide inspection and quotation details.`;
  } else if (location) {
    text = `Hi TermiteControl.me, I need termite / wood borer treatment for my property in ${location}. Please share consultation and inspection details.`;
  } else if (service) {
    text = `Hi, I need information regarding ${service}. Please contact me.`;
  } else if (message) {
    text = message;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
var handlePhoneClick = (source = "direct") => {
  trackConversion("phone_call_click", {
    source,
    phone: PRIMARY_PHONE,
    page: window.location.pathname
  });
  window.location.href = `tel:${PRIMARY_PHONE}`;
};
var handleWhatsAppClick = (source = "direct", context = {}) => {
  trackConversion("whatsapp_click", {
    source,
    context,
    page: window.location.pathname
  });
  const link = getWhatsAppLink(context);
  window.open(link, "_blank", "noopener,noreferrer");
};

// src/utils/seo.js
var updateMetaTags = (options = {}) => {
  if (typeof document === "undefined") return;
  try {
    const {
      title,
      description,
      keywords,
      canonicalUrl,
      image,
      imageAlt,
      imageWidth = "1200",
      imageHeight = "630",
      type = "website",
      siteName = "TermiteControl.me - A Unit of Eco Pest India",
      locale = "en_IN",
      schema
    } = options;
    const currentUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/");
    const defaultImage = typeof window !== "undefined" ? `${window.location.origin}/images/wayanad-luxury-hero.jpg` : "https://termitecontrol.me/images/wayanad-luxury-hero.jpg";
    const ogImage = image || defaultImage;
    const setMeta = (attrName, attrVal, content) => {
      if (!content) return;
      try {
        const metas = document.getElementsByTagName("meta");
        let found = false;
        for (let i = 0; i < metas.length; i++) {
          if (metas[i].getAttribute(attrName) === attrVal) {
            metas[i].setAttribute("content", content);
            found = true;
            break;
          }
        }
        if (!found) {
          const meta = document.createElement("meta");
          meta.setAttribute(attrName, attrVal);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      } catch (err) {
      }
    };
    if (title) {
      document.title = title;
      setMeta("name", "title", title);
      setMeta("property", "og:title", title);
      setMeta("name", "twitter:title", title);
      setMeta("property", "twitter:title", title);
    }
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
      setMeta("property", "twitter:description", description);
    }
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }
    setMeta("property", "og:url", currentUrl);
    setMeta("name", "twitter:url", currentUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:locale", locale);
    if (ogImage) {
      setMeta("property", "og:image", ogImage);
      setMeta("property", "og:image:secure_url", ogImage);
      setMeta("property", "og:image:width", String(imageWidth));
      setMeta("property", "og:image:height", String(imageHeight));
      setMeta("property", "og:image:type", typeof ogImage === "string" && ogImage.endsWith(".png") ? "image/png" : "image/jpeg");
      if (imageAlt) {
        setMeta("property", "og:image:alt", imageAlt);
      }
      setMeta("name", "twitter:card", "summary_large_image");
      setMeta("property", "twitter:card", "summary_large_image");
      setMeta("name", "twitter:image", ogImage);
      setMeta("property", "twitter:image", ogImage);
    }
    try {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", currentUrl);
    } catch (err) {
    }
    if (schema) {
      try {
        let schemaScript = document.getElementById("dynamic-page-schema");
        if (!schemaScript) {
          schemaScript = document.createElement("script");
          schemaScript.id = "dynamic-page-schema";
          schemaScript.type = "application/ld+json";
          document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);
      } catch (err) {
      }
    }
  } catch (err) {
    console.error("Error updating meta tags:", err);
  }
};

// src/components/LeadForm.jsx
var import_react3 = __toESM(require_react(), 1);

// src/utils/storage.js
var STORAGE_KEY = "tc_leads_database_v1";
var saveLead = (leadData) => {
  try {
    const existing = getStoredLeads();
    const newLead = {
      id: "TC-" + Date.now().toString(36).toUpperCase() + "-" + Math.floor(Math.random() * 1e3),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      formattedDate: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      ...leadData,
      status: "New",
      sourceUrl: window.location.href,
      pagePath: window.location.pathname
    };
    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (window.TC_WEBHOOK_URL) {
      fetch(window.TC_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead)
      }).catch((err) => console.warn("Webhook dispatch failed (optional):", err));
    }
    return { success: true, lead: newLead };
  } catch (error) {
    console.error("Failed to store lead:", error);
    return { success: false, error: error.message };
  }
};
var getStoredLeads = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read leads:", e);
    return [];
  }
};

// src/data/districts.js
var DISTRICTS = [
  {
    id: "kozhikode",
    name: "Kozhikode",
    altName: "Calicut",
    slug: "termite-control-kozhikode",
    hub: true,
    office: "Pavamani Road, Near Malabar Gold & Diamonds, Kozhikode",
    phone: "9020040009",
    metaTitle: "Termite Control in Kozhikode | Anti-Termite & Wood Borer Treatment Calicut",
    metaDescription: "Best termite control and wood borer treatment in Kozhikode (Calicut). Office at Pavamani Road. 100% odorless, warranty backed. Call/WhatsApp 9020040009.",
    majorAreas: ["Pavamani Road", "Mavoor Road", "Palayam", "Nadakkavu", "Westhill", "Calicut Beach", "Medical College", "Feroke", "Ramanattukara", "Pantheeramkavu", "Elathur", "Koyilandy", "Vadakara", "Beypore", "Kunnamangalam", "Balussery"],
    intro: "Premier termite control, anti-termite soil piping, and wood borer treatment across Kozhikode district with same-day inspection from our Pavamani Road central service hub."
  },
  {
    id: "ernakulam",
    name: "Ernakulam",
    altName: "Kochi",
    slug: "termite-control-ernakulam",
    hub: true,
    office: "Kochi Central Hub, Ernakulam",
    phone: "9020040009",
    metaTitle: "Termite Control in Kochi & Ernakulam | Anti-Termite Treatment",
    metaDescription: "Professional termite control and wood borer treatment in Kochi, Kakkanad, Edappally, Aluva, Vyttila & all Ernakulam. Same-day inspection. Call 9020040009.",
    majorAreas: ["Kochi", "Kakkanad", "Edappally", "Vyttila", "Aluva", "Kalamassery", "Thrippunithura", "Angamaly", "Perumbavoor", "Muvattupuzha", "Kothamangalam", "Fort Kochi", "Palarivattom", "Marine Drive"],
    intro: "Comprehensive termite protection and wood borer treatment across Kochi, Kakkanad Infopark, Edappally, Aluva, and all Ernakulam metropolitan areas."
  },
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    altName: "Trivandrum",
    slug: "termite-control-thiruvananthapuram",
    phone: "9020040009",
    metaTitle: "Termite Control in Thiruvananthapuram | Trivandrum Anti-Termite Treatment",
    metaDescription: "Expert termite control, anti-termite treatment, and wood borer eradication in Thiruvananthapuram, Technopark, Kazhakkoottam, Kowdiar. Call 9020040009.",
    majorAreas: ["Kazhakkoottam", "Technopark", "Kowdiar", "Pattom", "Vellayambalam", "Statue", "Medical College", "Nemom", "Sreekaryam", "Nedumangad", "Attingal", "Neyyattinkara", "Varkala"],
    intro: "Trusted termite control and pre/post construction anti-termite solutions across Trivandrum city, Technopark corridor, and rural Thiruvananthapuram."
  },
  {
    id: "thrissur",
    name: "Thrissur",
    altName: "Trichur",
    slug: "termite-control-thrissur",
    hub: true,
    office: "Veluthath Building, Pamboor, Kuttoor P.O., Thrissur - 680013",
    phone: "9020040009",
    metaTitle: "Termite Control in Thrissur | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Thrissur. Specialists in white ant removal, wood borer eradication & IS:6313 pre/post construction soil barrier. Call 9020040009.",
    majorAreas: ["Thrissur City", "Ayyanthole", "Punkunnam", "Ollur", "Guruvayur", "Chalakudy", "Kodungallur", "Kunnamkulam", "Irinjalakuda", "Wadakkanchery", "Chavakkad", "Mannuthy", "Kuriachira", "Viyyur", "Cherpu", "Triprayar", "Mala", "Koratty", "Puthukkad", "Pamboor / Kuttoor"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Thrissur district with same-day inspection."
  },
  {
    id: "malappuram",
    name: "Malappuram",
    slug: "termite-control-malappuram",
    phone: "9020040009",
    metaTitle: "Termite Control in Malappuram | Anti-Termite Treatment Specialists",
    metaDescription: "Professional termite control and anti-termite treatments in Malappuram, Manjeri, Perinthalmanna, Tirur, Kottakkal, Edappal. Call 9020040009.",
    majorAreas: ["Manjeri", "Perinthalmanna", "Tirur", "Kottakkal", "Ponnani", "Nilambur", "Edappal", "Valanchery", "Kondotty", "Tanur", "Parappanangadi"],
    intro: "Fast, dependable termite eradication and pre-construction soil treatment across Malappuram district."
  },
  {
    id: "kannur",
    name: "Kannur",
    slug: "termite-control-kannur",
    phone: "9020040009",
    metaTitle: "Termite Control in Kannur | Anti-Termite Treatment & Wood Borer Control",
    metaDescription: "Reliable termite control and wood borer treatment in Kannur, Thalassery, Payyanur, Taliparamba, Mattannur. Certified technicians. Call 9020040009.",
    majorAreas: ["Kannur City", "Thalassery", "Payyanur", "Taliparamba", "Mattannur", "Iritty", "Koothuparamba", "Chakkarakkal", "Panoor", "Dharmasala"],
    intro: "Complete termite and timber borer management for homes, commercial complexes, and coastal villas across Kannur."
  },
  {
    id: "kollam",
    name: "Kollam",
    altName: "Quilon",
    slug: "termite-control-kollam",
    office: "Near DYFI Youth Centre, Polayathodu, Kollam, Kerala 691001",
    phone: "9020040009",
    metaTitle: "Termite Control in Kollam | Professional Anti-Termite Treatment",
    metaDescription: "Residential & commercial termite control in Kollam, Karunagappally, Kottarakkara, Punalur, Paravur. Call 9020040009.",
    majorAreas: ["Polayathodu", "Chinnakada", "Asramam", "Thevally", "Karunagappally", "Kottarakkara", "Punalur", "Paravur", "Anchal", "Kundara", "Chathannoor", "Sasthamkotta"],
    intro: "Guaranteed termite control, drill-fill-seal barriers, and wood borer protection for residential and commercial establishments in Kollam."
  },
  {
    id: "kottayam",
    name: "Kottayam",
    slug: "termite-control-kottayam",
    phone: "9020040009",
    metaTitle: "Termite Control in Kottayam | Anti-Termite & Wood Borer Treatment",
    metaDescription: "Top-rated termite inspection and treatment in Kottayam, Changanassery, Pala, Ettumanoor, Kanjirappally, Vaikom. Call 9020040009.",
    majorAreas: ["Kottayam Town", "Changanassery", "Pala", "Ettumanoor", "Kanjirappally", "Vaikom", "Erattupetta", "Pambady", "Kaduthuruthy"],
    intro: "Specialized termite barriers and timber protection for rubber-belt humid zones and modern residences in Kottayam."
  },
  {
    id: "palakkad",
    name: "Palakkad",
    altName: "Palghat",
    slug: "termite-control-palakkad",
    hub: true,
    office: "TB Road / Fort Maidan Area, Palakkad",
    phone: "9020040009",
    metaTitle: "Termite Control in Palakkad | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Palakkad. Specialists in white ant removal, wood borer eradication & IS:6313 pre/post construction soil barrier. Call 9020040009.",
    majorAreas: ["Palakkad Town", "Ottapalam", "Shornur", "Chittur", "Mannarkkad", "Alathur", "Cherpulassery", "Pattambi", "Kanjikode", "Nemmara", "Kollengode", "Vadakkencherry", "Kuzhalmannam", "Walayar", "Kongad", "Parli"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Palakkad district with same-day inspection."
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    altName: "Alleppey",
    slug: "termite-control-alappuzha",
    hub: true,
    office: "Alappuzha District Central Dispatch, Kerala - 688001",
    phone: "9020040009",
    metaTitle: "Termite Control in Alappuzha, Kerala | TermiteControl.me",
    metaDescription: "Professional termite control, termite inspection and termite treatment services across Alappuzha, Kerala. Residential, commercial, pre-construction and post-construction solutions.",
    majorAreas: ["Alappuzha Town", "Cherthala", "Chengannur", "Kayamkulam", "Mavelikara", "Harippad", "Kuttanad", "Kainakary", "Champakkulam", "Edathua", "Nedumudi", "Aroor", "Mararikkulam", "Thanneermukkam", "Ambalappuzha", "Punnapra", "Muhamma", "Mannanchery"],
    intro: "Premier termite control, anti-termite soil barriers, and wood borer treatment across Alappuzha district with rapid on-site inspection for homes, luxury waterfront villas, resorts, and commercial spaces."
  },
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    slug: "termite-control-pathanamthitta",
    hub: true,
    office: "Eco Pest India, Mezhuveli P.O., Pathanamthitta - 689507",
    phone: "9020040009",
    metaTitle: "Termite Control in Pathanamthitta | Anti Termite Treatment & White Ant Removal",
    metaDescription: "Best termite control and anti-termite treatment in Pathanamthitta, Thiruvalla, Adoor, Kumbanad, Mezhuveli. Specialists in white ant removal & IS:6313 soil barrier. Call 9020040009.",
    majorAreas: ["Thiruvalla", "Adoor", "Pathanamthitta Town", "Mezhuveli", "Kumbanad", "Kozhencherry", "Ranni", "Mallappally", "Konni", "Pandalam", "Aranmula", "Kulanada", "Pullad"],
    intro: "Professional termite control, anti-termite barrier protection, white ant removal, and wood borer treatment across Pathanamthitta district with same-day inspection."
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    slug: "termite-control-kasaragod",
    phone: "9020040009",
    metaTitle: "Termite Control in Kasaragod | Anti-Termite & Wood Borer Treatment",
    metaDescription: "Professional termite pest control in Kasaragod, Kanhangad, Nileshwar, Uppala, Cheruvathur. Safe & guaranteed. Call 9020040009.",
    majorAreas: ["Kasaragod Town", "Kanhangad", "Nileshwar", "Uppala", "Cheruvathur", "Manjeshwar", "Bekal", "Kumbla"],
    intro: "Certified termite extermination and anti-termite soil barriers across northern Kerala's Kasaragod district."
  },
  {
    id: "wayanad",
    name: "Wayanad",
    slug: "termite-control-wayanad",
    hub: true,
    office: "Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala - 673592",
    phone: "9020040009",
    metaTitle: "Termite Control in Wayanad | Anti-Termite & Pest Control Sultan Bathery, Kalpetta, Resorts",
    metaDescription: "Best termite control, anti-termite treatment & general pest control in Wayanad. Central service desk near St. Mary's College, Kuppadi, Sultan Bathery. IS:6313 certified, odorless & eco-safe for homes, luxury resorts & homestays. Call 9020040009.",
    majorAreas: [
      "Sultan Bathery",
      "Kalpetta",
      "Mananthavady",
      "Vythiri",
      "Meppadi",
      "Panamaram",
      "Ambalavayal",
      "Pulpally",
      "Kuppadi",
      "Lakkidi",
      "Pookode",
      "Thirunelly",
      "Meenangadi",
      "Padinjarathara",
      "Noolpuzha",
      "Nenmeni",
      "Poothadi",
      "Mullankolly"
    ],
    intro: "Premier termite control, anti-termite soil barriers, wood borer eradication & general pest control across Wayanad district with 45-minute dispatch from our Sultan Bathery Kuppadi central desk."
  },
  {
    id: "idukki",
    name: "Idukki",
    slug: "termite-control-idukki",
    phone: "9020040009",
    metaTitle: "Termite Control in Idukki | Anti-Termite & Timber Protection",
    metaDescription: "Termite and wood-boring insect treatment for resorts, plantations, and homes in Idukki, Thodupuzha, Munnar, Kattappana, Nedumkandam. Call 9020040009.",
    majorAreas: ["Thodupuzha", "Kattappana", "Munnar", "Adimali", "Nedumkandam", "Kumily", "Painavu", "Vandiperiyar"],
    intro: "Long-lasting termite defense and timber preservation for residences, plantation bungalows, and tourist retreats in Idukki."
  }
];

// src/components/LeadForm.jsx
function LeadForm({
  defaultLocation = "",
  defaultProblem = "",
  defaultProperty = "",
  title = "GET A TERMITE INSPECTION",
  subtitle = "Free site inspection & transparent treatment quotation across Kerala",
  source = "hero_form",
  onSuccess
}) {
  const [formData, setFormData] = (0, import_react3.useState)({
    name: "",
    phone: "",
    location: defaultLocation || "",
    propertyType: defaultProperty || "House",
    problem: defaultProblem || "Termite",
    message: ""
  });
  const [status, setStatus] = (0, import_react3.useState)({
    submitting: false,
    submitted: false,
    error: null,
    leadId: null
  });
  const propertyTypes = ["House", "Villa", "Apartment", "Office", "Shop", "Commercial", "Other"];
  const problemTypes = ["Termite", "Wood Borer", "Both", "Not Sure"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, leadId: null });
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setStatus({ submitting: false, submitted: false, error: "Please enter a valid 10-digit mobile number.", leadId: null });
      return;
    }
    if (!formData.name.trim()) {
      setStatus({ submitting: false, submitted: false, error: "Please enter your name.", leadId: null });
      return;
    }
    const result = saveLead({
      ...formData,
      phone: cleanPhone,
      sourceForm: source
    });
    trackConversion("lead_form_submit", {
      source,
      propertyType: formData.propertyType,
      problem: formData.problem,
      location: formData.location,
      phone: cleanPhone
    });
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        leadId: result.lead ? result.lead.id : null
      });
      if (onSuccess) {
        onSuccess(formData);
      }
    }, 400);
  };
  const handleWhatsAppForward = () => {
    const text = `Hi TermiteControl.me, I submitted an inspection request.
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location || defaultLocation}
Property: ${formData.propertyType}
Problem: ${formData.problem}
Notes: ${formData.message || "None"}`;
    const url = getWhatsAppLink({ message: text });
    window.open(url, "_blank");
  };
  if (status.submitted) {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-200 text-center animate-in fade-in zoom-in-95 duration-200" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4" }, /* @__PURE__ */ import_react3.default.createElement(CircleCheckBig, { className: "w-10 h-10" })), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-2xl font-bold text-slate-900 font-display mb-2" }, "Thank you!"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-base font-semibold text-emerald-800 mb-2" }, "Our team will contact you shortly."), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-sm text-slate-600 mb-4" }, "Your inspection request has been registered under reference ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded" }, status.leadId), "."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "p-4 bg-emerald-50 rounded-xl border border-emerald-100 mb-5 text-left text-xs text-slate-700 space-y-1.5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center text-emerald-900 font-bold mb-1" }, /* @__PURE__ */ import_react3.default.createElement(Clock, { className: "w-4 h-4 mr-1 text-emerald-700" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Response Guarantee:")), /* @__PURE__ */ import_react3.default.createElement("p", null, "\u2022 Our senior pest technician will call you within 15\u201330 minutes."), /* @__PURE__ */ import_react3.default.createElement("p", null, "\u2022 Inspection schedule and preliminary cost assessment will be shared.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "space-y-2.5" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: handleWhatsAppForward,
        className: "w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center space-x-2"
      },
      /* @__PURE__ */ import_react3.default.createElement(MessageCircle, { className: "w-4 h-4 fill-white" }),
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Connect on WhatsApp Instantly")
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        onClick: () => setStatus({ submitting: false, submitted: false, error: null, leadId: null }),
        className: "text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
      },
      "Submit Another Request"
    )));
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-200/80 text-left" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "mb-4" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-2" }, /* @__PURE__ */ import_react3.default.createElement(Shield, { className: "w-3.5 h-3.5 text-emerald-700" }), /* @__PURE__ */ import_react3.default.createElement("span", null, "Same-Day Inspection Booking")), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight leading-snug" }, title), /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-xs sm:text-sm text-slate-600 mt-1" }, subtitle)), status.error && /* @__PURE__ */ import_react3.default.createElement("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center space-x-2" }, /* @__PURE__ */ import_react3.default.createElement(CircleAlert, { className: "w-4 h-4 flex-shrink-0" }), /* @__PURE__ */ import_react3.default.createElement("span", null, status.error)), /* @__PURE__ */ import_react3.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-3.5" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Your Name ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "text",
      name: "name",
      required: true,
      placeholder: "e.g. Rahul Menon",
      value: formData.name,
      onChange: handleChange,
      className: "w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
    }
  )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Phone Number ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-semibold text-slate-500" }, "+91"), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "tel",
      name: "phone",
      required: true,
      maxLength: "12",
      placeholder: "9876543210",
      value: formData.phone,
      onChange: handleChange,
      className: "w-full pl-12 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
    }
  )))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between" }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Location / City in Kerala ", /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-[11px] text-emerald-700 font-medium" }, "All 14 Districts")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      type: "text",
      name: "location",
      required: true,
      placeholder: "e.g. Kozhikode (Pavamani Rd / Nadakkavu), Kochi, etc.",
      value: formData.location,
      onChange: handleChange,
      list: "kerala-districts-list",
      className: "w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition"
    }
  ), /* @__PURE__ */ import_react3.default.createElement("datalist", { id: "kerala-districts-list" }, DISTRICTS.map((d) => /* @__PURE__ */ import_react3.default.createElement("option", { key: d.id, value: d.name })), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kozhikode - Pavamani Road" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kozhikode - Nadakkavu" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kozhikode - Palayam" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kozhikode - Mavoor Road" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kozhikode - Westhill" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kochi - Kakkanad" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Kochi - Edappally" }), /* @__PURE__ */ import_react3.default.createElement("option", { value: "Thiruvananthapuram - Kazhakkoottam" })))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Property Type"), /* @__PURE__ */ import_react3.default.createElement(
    "select",
    {
      name: "propertyType",
      value: formData.propertyType,
      onChange: handleChange,
      className: "w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium"
    },
    propertyTypes.map((p) => /* @__PURE__ */ import_react3.default.createElement("option", { key: p, value: p }, p))
  )), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Pest Problem"), /* @__PURE__ */ import_react3.default.createElement(
    "select",
    {
      name: "problem",
      value: formData.problem,
      onChange: handleChange,
      className: "w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition font-medium text-emerald-950 font-semibold"
    },
    problemTypes.map((pr) => /* @__PURE__ */ import_react3.default.createElement("option", { key: pr, value: pr }, pr))
  ))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Message / Area Details (Optional)"), /* @__PURE__ */ import_react3.default.createElement(
    "textarea",
    {
      name: "message",
      rows: "2",
      placeholder: "e.g. Mud tubes on door frame, wood powder from cupboard, etc.",
      value: formData.message,
      onChange: handleChange,
      className: "w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition resize-none"
    }
  )), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      type: "submit",
      disabled: status.submitting,
      className: "w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-[0.99] flex items-center justify-center space-x-2"
    },
    status.submitting ? /* @__PURE__ */ import_react3.default.createElement("span", { className: "inline-flex items-center space-x-2" }, /* @__PURE__ */ import_react3.default.createElement("svg", { className: "animate-spin h-5 w-5 text-white", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react3.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react3.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8H4z" })), /* @__PURE__ */ import_react3.default.createElement("span", null, "Scheduling...")) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("span", null, "GET FREE CONSULTATION"), /* @__PURE__ */ import_react3.default.createElement(Send, { className: "w-4 h-4 ml-1" }))
  ), /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-500 pt-1" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "flex items-center text-slate-600" }, /* @__PURE__ */ import_react3.default.createElement(Shield, { className: "w-3.5 h-3.5 mr-1 text-emerald-700" }), "100% Privacy Protected"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "text-amber-800 font-semibold" }, "Zero Call Spam"))));
}

// src/components/PrimaryBottomCTA.jsx
var import_react4 = __toESM(require_react(), 1);
function PrimaryBottomCTA({ onOpenInspectionModal }) {
  return /* @__PURE__ */ import_react4.default.createElement("section", { className: "bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white py-16 sm:py-20 relative overflow-hidden border-t border-emerald-800/60" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4" }, /* @__PURE__ */ import_react4.default.createElement(Sparkles, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ import_react4.default.createElement("span", null, "Same-Day Inspection Available Across All 14 Districts")), /* @__PURE__ */ import_react4.default.createElement("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4" }, "Termites? Wood Borers? ", /* @__PURE__ */ import_react4.default.createElement("span", { className: "text-amber-400" }, "Don't Wait.")), /* @__PURE__ */ import_react4.default.createElement("p", { className: "text-lg sm:text-xl font-medium text-emerald-100/90 max-w-2xl mx-auto mb-8" }, "Get Professional Treatment Across Kerala."), /* @__PURE__ */ import_react4.default.createElement("div", { className: "inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-8" }, /* @__PURE__ */ import_react4.default.createElement("p", { className: "text-xs text-emerald-300 font-bold uppercase tracking-widest" }, "Call / WhatsApp Direct"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-display mt-0.5" }, PRIMARY_PHONE_DISPLAY)), /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto" }, /* @__PURE__ */ import_react4.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick("bottom_primary_cta"),
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react4.default.createElement(Phone, { className: "w-5 h-5 animate-pulse" }),
    /* @__PURE__ */ import_react4.default.createElement("span", null, "Call Now")
  ), /* @__PURE__ */ import_react4.default.createElement(
    "button",
    {
      onClick: () => handleWhatsAppClick("bottom_primary_cta"),
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react4.default.createElement(MessageCircle, { className: "w-5 h-5 fill-white" }),
    /* @__PURE__ */ import_react4.default.createElement("span", null, "WhatsApp Now")
  ), /* @__PURE__ */ import_react4.default.createElement(
    "button",
    {
      onClick: onOpenInspectionModal,
      className: "flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl transition transform active:scale-95 flex items-center justify-center space-x-2"
    },
    /* @__PURE__ */ import_react4.default.createElement(FileCheck, { className: "w-5 h-5" }),
    /* @__PURE__ */ import_react4.default.createElement("span", null, "Request Inspection")
  )), /* @__PURE__ */ import_react4.default.createElement("div", { className: "mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "font-bold text-slate-200" }, "TermiteControl.me"), /* @__PURE__ */ import_react4.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react4.default.createElement("span", null, "A Unit of Eco Pest India"), /* @__PURE__ */ import_react4.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react4.default.createElement("span", null, "IS:6313 Standard Certified"))));
}

// src/pages/WayanadLandingPage.jsx
function WayanadLandingPage({ onOpenLeadModal, onOpenInspectionModal }) {
  const [selectedBlock, setSelectedBlock] = (0, import_react5.useState)("all");
  const [panchayatSearch, setPanchayatSearch] = (0, import_react5.useState)("");
  const [faqSearchQuery, setFaqSearchQuery] = (0, import_react5.useState)("");
  const [openFaqIndex, setOpenFaqIndex] = (0, import_react5.useState)(0);
  const [copiedLink, setCopiedLink] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    updateMetaTags({
      title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Pest Protection",
      description: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI homes in Sultan Bathery, Kalpetta, Vythiri & Wayanad. IS:6313 certified with written warranty.",
      keywords: "termite control wayanad, sultan bathery pest control, kalpetta termite treatment, vythiri resort pest control, meppadi wood borer control, nri villa termite protection wayanad, luxury resort termite control kerala",
      canonicalUrl: `${window.location.origin}/termite-control-wayanad`,
      image: `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
      imageAlt: "TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection",
      schema: {
        "@context": "https://schema.org",
        "@type": "PestControlService",
        "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
        "url": `${window.location.origin}/termite-control-wayanad`,
        "image": `${window.location.origin}/images/wayanad-luxury-hero.jpg`,
        "telephone": "+91-9020040009",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near St. Mary's College, Kuppadi",
          "addressLocality": "Sultan Bathery",
          "addressRegion": "Wayanad, Kerala",
          "postalCode": "673592",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.6625",
          "longitude": "76.2570"
        },
        "priceRange": "\u20B9\u20B9",
        "areaServed": WAYANAD_DATA.urbanHubs.map((h) => ({
          "@type": "AdministrativeArea",
          "name": h.name
        }))
      }
    });
    try {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } catch (e) {
    }
  }, []);
  const handleCopyLink = () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/termite-control-wayanad";
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        }).catch(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        });
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch (e) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };
  const handleShareWhatsApp = () => {
    const shareText = `\u{1F332} *TermiteControl.me Wayanad - Luxury Resort & Villa Pest Protection*

Preserving Wayanad's finest estates, treehouses, homestays and timber villas with IS:6313 certified treatments and 10-year warranty.

\u{1F4CD} Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery
\u{1F4DE} Call/WhatsApp: +91 9020040009

\u{1F449} View Plan & Book Inspection: https://termitecontrol.me/termite-control-wayanad`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleNativeShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "Termite Control Wayanad | Kerala's Premier Resort & Villa Protection",
        text: "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & homes in Wayanad.",
        url: typeof window !== "undefined" ? window.location.href : "https://termitecontrol.me/termite-control-wayanad"
      }).catch(() => {
      });
    } else {
      handleShareWhatsApp();
    }
  };
  const filteredFaqs = (0, import_react5.useMemo)(() => {
    if (!faqSearchQuery.trim()) return WAYANAD_DATA.faqs;
    const query = faqSearchQuery.toLowerCase();
    return WAYANAD_DATA.faqs.filter(
      (f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query)
    );
  }, [faqSearchQuery]);
  const allPanchayats = (0, import_react5.useMemo)(
    () => WAYANAD_DATA.blocks.flatMap((block) => block.panchayats.map((p) => ({
      ...p,
      blockName: block.name,
      blockId: block.id,
      blockTagline: block.tagline
    }))),
    []
  );
  const filteredPanchayats = (0, import_react5.useMemo)(() => {
    return allPanchayats.filter((p) => {
      const matchesBlock = selectedBlock === "all" || p.blockId === selectedBlock;
      const matchesSearch = p.name.toLowerCase().includes(panchayatSearch.toLowerCase()) || p.areas.toLowerCase().includes(panchayatSearch.toLowerCase()) || p.blockName.toLowerCase().includes(panchayatSearch.toLowerCase());
      return matchesBlock && matchesSearch;
    });
  }, [allPanchayats, selectedBlock, panchayatSearch]);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad, Kerala 673592")}`;
  return /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white font-sans antialiased bg-[#FBFBF9]" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "bg-white border-b border-slate-200 text-xs py-2.5 px-4 sm:px-6 shadow-xs" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2" }, /* @__PURE__ */ import_react5.default.createElement("nav", { className: "flex items-center space-x-2 text-slate-600 text-xs" }, /* @__PURE__ */ import_react5.default.createElement("a", { href: "/", className: "hover:text-emerald-700 transition" }, "Home"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-slate-400" }, "/"), /* @__PURE__ */ import_react5.default.createElement("a", { href: "/#locations", className: "hover:text-emerald-700 transition" }, "Kerala Service Hub"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-slate-400" }, "/"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-800 font-bold" }, "Wayanad District Coverage")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-3 text-slate-600 text-[11px]" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "flex items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-600 animate-ping mr-1.5 inline-block" }), "Central Hub: Near St. Mary's College, Kuppadi, Sultan Bathery"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "hidden sm:inline text-slate-300" }, "|"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "hidden sm:inline text-slate-600 font-medium" }, "IS:6313 Certified \u2022 Odorless & Eco-Safe")))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-10 pb-20 lg:py-24 border-b border-emerald-950 bg-[#020b08] text-white overflow-hidden" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 z-0" }, /* @__PURE__ */ import_react5.default.createElement(
    "img",
    {
      src: "/images/wayanad-luxury-hero.jpg",
      alt: "Ultra luxury modern villa nestled in misty green Wayanad tea plantations and mountains",
      className: "w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out",
      loading: "eager",
      fetchPriority: "high"
    }
  ), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-[#020b08]/95 via-[#020b08]/75 to-[#020b08]/30 lg:to-transparent" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[#020b08]/95 via-transparent to-[#020b08]/60" })), /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-7 space-y-6 text-center lg:text-left" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-col sm:flex-row items-center lg:items-start gap-2.5" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-black/60 border border-emerald-500/40 rounded-full px-3.5 py-1.5 text-xs text-emerald-300 backdrop-blur-xl shadow-xl shadow-emerald-950/60" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "font-bold tracking-widest uppercase text-[10px] sm:text-[11px] font-mono" }, "PREMIUM TERMITE & TIMBER DEFENSE \u2022 WAYANAD")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-1.5 bg-amber-950/70 border border-amber-500/40 rounded-full px-3.5 py-1.5 text-xs text-amber-200 backdrop-blur-xl shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement(Sparkles, { className: "w-3.5 h-3.5 text-amber-400 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-medium" }, "\u0D35\u0D3F\u0D26\u0D47\u0D36\u0D24\u0D4D\u0D24\u0D41\u0D33\u0D4D\u0D33 \u0D2A\u0D4D\u0D30\u0D35\u0D3E\u0D38\u0D3F\u0D15\u0D7E\u0D15\u0D4D\u0D15\u0D41\u0D02 \u0D28\u0D3E\u0D1F\u0D4D\u0D1F\u0D3F\u0D32\u0D46 \u0D31\u0D3F\u0D38\u0D4B\u0D7C\u0D1F\u0D4D\u0D1F\u0D41\u0D15\u0D7E\u0D15\u0D4D\u0D15\u0D41\u0D02 \u0D35\u0D3F\u0D36\u0D4D\u0D35\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D35\u0D41\u0D28\u0D4D\u0D28 \u0D38\u0D47\u0D35\u0D28\u0D02"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react5.default.createElement("h1", { className: "text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]" }, "Preserving Wayanad's ", /* @__PURE__ */ import_react5.default.createElement("br", null), /* @__PURE__ */ import_react5.default.createElement("span", { className: "italic font-light bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent font-serif" }, "Finest Estates & Timber")), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-400/90 font-mono" }, "Sultan Bathery \u2022 Kalpetta \u2022 Mananthavady \u2022 Vythiri \u2022 Resorts & Homestays")), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm mx-auto lg:mx-0" }, "Odorless, IS:6313 certified subterranean termite elimination, deep wood borer eradication & annual protection for", /* @__PURE__ */ import_react5.default.createElement("strong", { className: "text-white font-semibold" }, " luxury rainforest resorts, plantation bungalows, modern villas, and commercial properties"), " across Wayanad."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement(ShieldCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "Kuppadi Central Hub")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement(Clock, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "45-Min Fast Dispatch")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement(Award, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "IS:6313 Certified")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-2 bg-black/45 backdrop-blur-xl border border-white/15 rounded-xl p-2.5 shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement(Trees, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-semibold text-slate-100" }, "Eco-Safe & Odorless"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3" }, /* @__PURE__ */ import_react5.default.createElement(
    "a",
    {
      href: "#dispatch-desk",
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all transform hover:-translate-y-0.5 text-sm"
    },
    /* @__PURE__ */ import_react5.default.createElement(Search, { className: "w-4 h-4" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Book Free Wayanad Inspection")
  ), /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick("wayanad_hero_call"),
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-xl transition text-sm"
    },
    /* @__PURE__ */ import_react5.default.createElement(PhoneCall, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Call: ", WAYANAD_DATA.brand.phoneDisplay)
  ), /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: () => handleWhatsAppClick("wayanad_hero_wa", { message: "Hi TermiteControl.me, I need termite/pest inspection for my property in Wayanad (Sultan Bathery/Kalpetta/Vythiri). Please share details." }),
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 font-semibold px-5 py-3.5 rounded-xl border border-emerald-500/40 backdrop-blur-xl transition text-sm shadow-lg"
    },
    /* @__PURE__ */ import_react5.default.createElement(MessageCircle, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "WhatsApp Desk")
  )), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 text-xs text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-3" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "flex items-center text-amber-300 font-bold" }, /* @__PURE__ */ import_react5.default.createElement(Star, { className: "w-3.5 h-3.5 fill-amber-300 mr-1" }), WAYANAD_DATA.brand.justdialRating), /* @__PURE__ */ import_react5.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react5.default.createElement("span", null, WAYANAD_DATA.brand.justdialReviewsCount, " across Wayanad"), /* @__PURE__ */ import_react5.default.createElement("span", null, "\u2022"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-300 font-medium" }, "Live Video Report for NRI Owners"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "hidden lg:block lg:col-span-5" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 shadow-2xl space-y-5 text-left relative overflow-hidden" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center justify-between border-b border-white/10 pb-4" }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold" }, "EXCELLENCE IN TIMBER DEFENSE"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-lg font-serif font-bold text-white mt-0.5" }, "Wayanad Hospitality & Villa Protocol")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300" }, /* @__PURE__ */ import_react5.default.createElement(Hotel, { className: "w-5 h-5" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3.5 text-xs" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "font-bold text-white" }, "Rainforest Resort & Homestay Specialist"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Zero guest room evacuation, 100% odorless, eco-safe for forest biospheres."))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "font-bold text-white" }, "Heritage Teak & Anjili Timber Preservation"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Surgical micro-syringe injection into wood borer exit holes without surface staining."))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "font-bold text-white" }, "IS:6313 Certified 10-Year Soil Barrier"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-slate-300 text-[11px] mt-0.5" }, "Transfer chemistry eliminating subterranean termite colonies & the queen.")))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 border-t border-white/10 flex items-center justify-between text-xs" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-slate-300" }, "Sultan Bathery Base: ", /* @__PURE__ */ import_react5.default.createElement("strong", { className: "text-white" }, "Kuppadi")), /* @__PURE__ */ import_react5.default.createElement("a", { href: "#dispatch-desk", className: "text-emerald-400 font-bold hover:underline inline-flex items-center space-x-1" }, /* @__PURE__ */ import_react5.default.createElement("span", null, "View Desk"), /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })))))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "bg-white border-b border-slate-200 py-4 shadow-xs" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "45 Mins"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Sultan Bathery & Kalpetta Response")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "IS:6313"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Bureau of Indian Standards Certified")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "5 - 10 Yrs"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "Written Guarantee Certificates")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 sm:pt-0 sm:px-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xl sm:text-2xl font-bold text-slate-900 font-serif" }, "Zero Odor"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-600 font-medium mt-0.5" }, "100% Guest & Pet Safe Formulations"))))), /* @__PURE__ */ import_react5.default.createElement("section", { id: "dispatch-desk", className: "py-14 sm:py-18 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-6 space-y-6" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1 text-xs text-emerald-800 font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(MapPin, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Primary Wayanad Service Base")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight" }, "Instant Dispatch Desk ", /* @__PURE__ */ import_react5.default.createElement("br", null), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-700 font-sans font-medium text-xl sm:text-2xl" }, "Near St. Mary's College, Kuppadi, Sultan Bathery")), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, "Our central Wayanad technical fleet is stationed at Kuppadi, Sultan Bathery. We provide same-day on-site acoustic inspections, moisture scans, and emergency termite/pest treatments across Sultan Bathery, Kalpetta, Mananthavady, Vythiri, Meppadi, and all surrounding panchayats.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5" }, /* @__PURE__ */ import_react5.default.createElement(Building2, { className: "w-5 h-5" })), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-500" }, "Official Service Hub"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-sm font-bold text-slate-900 mt-0.5" }, WAYANAD_DATA.brand.officeAddress.brand, " (", WAYANAD_DATA.brand.officeAddress.unit, ")"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-600 mt-1" }, WAYANAD_DATA.brand.officeAddress.line1, ", ", WAYANAD_DATA.brand.officeAddress.city, ", Wayanad, Kerala - ", WAYANAD_DATA.brand.officeAddress.pincode), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-emerald-700 font-medium mt-1 flex items-center" }, /* @__PURE__ */ import_react5.default.createElement(Clock, { className: "w-3 h-3 mr-1" }), WAYANAD_DATA.brand.officeAddress.timing))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement(
    "a",
    {
      href: googleMapsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center space-x-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 transition"
    },
    /* @__PURE__ */ import_react5.default.createElement(Navigation, { className: "w-3.5 h-3.5 text-blue-600" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Open in Google Maps"),
    /* @__PURE__ */ import_react5.default.createElement(ExternalLink, { className: "w-3 h-3 text-slate-400" })
  ), /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: () => handlePhoneClick(WAYANAD_DATA.brand.phone, "wayanad_desk_call"),
      className: "inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
    },
    /* @__PURE__ */ import_react5.default.createElement(Phone, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Direct Desk: ", WAYANAD_DATA.brand.phoneDisplay)
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-2 gap-3 pt-1" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-bold text-emerald-900" }, "Sultan Bathery & Surroundings"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-emerald-700 mt-0.5" }, "30 \u2013 45 Min Technician Arrival")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-bold text-emerald-900" }, "Kalpetta, Vythiri & Meppadi"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-emerald-700 mt-0.5" }, "45 \u2013 60 Min Dedicated Dispatch")))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-6" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30" }, "Quick Booking"), /* @__PURE__ */ import_react5.default.createElement(
    LeadForm,
    {
      title: "BOOK FREE WAYANAD INSPECTION",
      subtitle: "Same-day visit from our Sultan Bathery Kuppadi Technical Desk",
      defaultLocation: "Wayanad (Sultan Bathery Hub)",
      source: "wayanad_dispatch_desk",
      onSuccess: () => {
      }
    }
  )))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Engineered For Wayanad's Terrain")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Why Wayanad Trusts TermiteControl.me"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "From dense high-altitude rainforests to heritage plantation bungalows, our specialized non-repellent transfer chemistry protects valuable timber without toxic fumes or guest disruption.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, WAYANAD_DATA.whyChooseUs.map((item, idx) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition group"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition" }, idx + 1),
    /* @__PURE__ */ import_react5.default.createElement("h3", { className: "font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition" }, item.title),
    /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, item.description)
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-5 space-y-5" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(TriangleAlert, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "High-Risk Hill Station Ecology")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight" }, "Why Termites & Wood Borers Attack Wayanad Buildings"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm leading-relaxed" }, "Wayanad experiences annual rainfall exceeding 3,000mm and dense rainforest dampness. Combined with rich organic soil and extensive teak, anjili, jackfruit wood, and bamboo in local architecture, subterranean termite colonies rapidly invade foundation slabs and wooden ceiling rafters."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3 pt-2" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react5.default.createElement("strong", null, "High Soil Moisture:"), " Water tables along Banasura, Karapuzha, and Vythiri sustain immense underground white ant supercolonies.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react5.default.createElement("strong", null, "Exposed Timber Architecture:"), " Resorts, treehouses, and tharavads provide thousands of square feet of unprotected cellulose.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-start space-x-3" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700" }, /* @__PURE__ */ import_react5.default.createElement("strong", null, "Wood Borer Beetle Larvae:"), " Fine yellow powdery frass beneath wooden furniture indicates powder-post beetles hollowing timber from within."))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-4" }, /* @__PURE__ */ import_react5.default.createElement(
    "a",
    {
      href: "#dispatch-desk",
      className: "inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition text-xs sm:text-sm"
    },
    /* @__PURE__ */ import_react5.default.createElement(Search, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Request Immediate Moisture & Termite Scan")
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" }, "Diagnostic Self-Check"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-xl font-serif font-bold text-slate-900 mb-6" }, "8 Warning Signs You Need Professional Termite Treatment in Wayanad"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
    { title: "Mud Tubes on Wall Junctions", desc: "Brown pencil-thin dirt tunnels climbing up foundation plinths and exterior brickwork." },
    { title: "Hollow-Sounding Wooden Door Frames", desc: "Tapping wood produces a papery, empty resonance where interior timber is eaten." },
    { title: "Fine Wood Powder (Frass)", desc: "Yellowish dust piles beneath wooden tables, beds, and roof beams from wood borers." },
    { title: "Blistering & Peeling Paint", desc: "Moisture build-up and hollow channels directly behind painted drywall or plaster." },
    { title: "Discarded Silvery Wings", desc: "Piles of termite alate wings on window sills and door frames after monsoon rains." },
    { title: "Jammed Doors & Windows", desc: "Swelling caused by moisture introduced by termites tunneling through wooden frames." },
    { title: "Damaged Modular Kitchens", desc: "Termites exploiting damp plumbing conduits behind plywood cabinets." },
    { title: "Resort Cottage Stilt Weakening", desc: "Subterranean white ants hollowing out wooden posts and deck footings." }
  ].map((item, idx) => /* @__PURE__ */ import_react5.default.createElement("div", { key: idx, className: "bg-white p-3.5 rounded-xl border border-slate-200 flex items-start space-x-3" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5" }, idx + 1), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-bold text-slate-900" }, item.title), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[11px] text-slate-600 mt-0.5 leading-snug" }, item.desc))))))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(Hotel, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Specialized Hospitality & Tourism Focus")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white" }, "Pest & Timber Management for Wayanad Resorts, Homestays & Treehouses"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-300 text-sm sm:text-base" }, "Targeted odorless, eco-safe pest solutions for over 1,500+ luxury hospitality properties across Vythiri, Lakkidi, Meppadi, Chembra, Banasura, and Thirunelly.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, WAYANAD_DATA.tourismDestinations.map((dest, idx) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition flex flex-col justify-between"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-xs font-bold uppercase text-emerald-400 font-mono tracking-wider" }, dest.locations), /* @__PURE__ */ import_react5.default.createElement(Trees, { className: "w-4 h-4 text-emerald-400" })), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-serif font-bold text-white leading-snug" }, dest.title), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-2 pt-1" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-amber-300/90 leading-relaxed bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/40" }, /* @__PURE__ */ import_react5.default.createElement("strong", null, "Ecology Challenge:"), " ", dest.challenge), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-emerald-300 leading-relaxed bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40" }, /* @__PURE__ */ import_react5.default.createElement("strong", null, "Scientific Solution:"), " ", dest.solution))),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2" }, /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ location: dest.locations, propertyType: "Resort / Homestay" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold py-2.5 rounded-xl transition"
      },
      /* @__PURE__ */ import_react5.default.createElement("span", null, "Book Resort Inspection"),
      /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-12 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "100% Odor-Free & Non-Toxic"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-400" }, "Zero guest room evacuation required. Treatments can be executed during regular check-in/check-out hours.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "FSSAI & Eco-Audit Compliant"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-400" }, "Audit-ready documentation, bait station mapping, and certified chemical data sheets for resort kitchens and dining areas.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-1 border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-emerald-400 font-bold text-sm" }, "Priority 24/7 Service Desk"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-400" }, "Dedicated emergency dispatch for hospitality clients with guaranteed technician arrival within 45 minutes."))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-24 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-14" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Complete Wayanad Timber Defense")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Termite & Timber Protection Services in Wayanad"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Every service is delivered under strict chemical dosing norms, adhering to Indian Standards (IS:6313) with written guarantee certificates.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" }, WAYANAD_DATA.services.map((service) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: service.id,
      className: "bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100" }, /* @__PURE__ */ import_react5.default.createElement(
      "img",
      {
        src: service.image,
        alt: `${service.name} in Wayanad`,
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
        loading: "lazy"
      }
    ), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 border border-emerald-400/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md" }, service.warranty.split(" ")[0], " ", service.warranty.split(" ")[1] || "Warranty"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute bottom-3 left-3 right-3 text-white" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[11px] font-mono text-emerald-300 uppercase tracking-wider" }, service.tagline), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-bold font-serif leading-tight drop-shadow-sm" }, service.name))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "p-5 space-y-3.5" }, /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-xs sm:text-sm leading-relaxed" }, service.description), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-2 pt-1 border-t border-slate-100 text-xs text-slate-700" }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("strong", { className: "text-slate-900" }, "Application Method:"), " ", service.method), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("strong", { className: "text-slate-900" }, "Chemistry:"), " ", service.chemical)))),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "p-5 pt-0" }, /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ problem: service.name, location: "Wayanad District" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition"
      },
      /* @__PURE__ */ import_react5.default.createElement("span", null, "Book ", service.name),
      /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(Bug, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Full Pest Management")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "General Pest Control Services in Wayanad"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Comprehensive pest defense for residences, hotels, restaurants, and commercial establishments across Wayanad District.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, WAYANAD_DATA.generalPestServices.map((pest) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: pest.id,
      className: "bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-emerald-500 shadow-xs hover:shadow-md transition flex flex-col justify-between"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold" }, /* @__PURE__ */ import_react5.default.createElement(Bug, { className: "w-5 h-5" })), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] font-mono font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100" }, "Wayanad Safe")), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-serif font-bold text-slate-900" }, pest.name), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs font-semibold text-emerald-700" }, pest.tagline), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, pest.description), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-1.5 pt-2 border-t border-slate-100" }, pest.features.map((feat, i) => /* @__PURE__ */ import_react5.default.createElement("div", { key: i, className: "flex items-center space-x-2 text-xs text-slate-700" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }), /* @__PURE__ */ import_react5.default.createElement("span", null, feat))))),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-4" }, /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ problem: pest.name, location: "Wayanad District" }),
        className: "w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-900 text-xs font-bold py-2 rounded-xl transition"
      },
      /* @__PURE__ */ import_react5.default.createElement("span", null, "Get ", pest.name, " Quote"),
      /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
    ))
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheckBig, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Standardized Protocol")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "5-Step Scientific Eradication Process"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "How our certified technicians diagnose, eliminate, and permanently protect your Wayanad property under Indian Standards (IS:6313).")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4 relative" }, WAYANAD_DATA.treatmentProcess.map((step, idx) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-500 transition space-y-3"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-2xl font-serif font-bold text-emerald-700 font-mono" }, step.step),
    /* @__PURE__ */ import_react5.default.createElement("h3", { className: "font-bold text-slate-900 text-sm" }, step.title),
    /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, step.description)
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { id: "coverage", className: "py-16 sm:py-20 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(MapPin, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "100% District Wide Coverage")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Complete Wayanad Service Reach"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Our mobile technical fleet covers all 3 Taluks, 4 Urban Centers, 4 Block Panchayats & 23 Grama Panchayats in Wayanad District.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10" }, WAYANAD_DATA.majorHubs.map((hub) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: hub.id,
      className: "bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md" }, hub.type.split("/")[0]), /* @__PURE__ */ import_react5.default.createElement(MapPin, { className: "w-4 h-4 text-emerald-600" })),
    /* @__PURE__ */ import_react5.default.createElement("h3", { className: "text-lg font-serif font-bold text-slate-900" }, hub.name),
    /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, hub.description),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 border-t border-slate-100" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1" }, "Key Areas:"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-xs text-slate-700 leading-normal" }, hub.prominentAreas.slice(0, 7).join(", "), "..."))
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8 space-y-4" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto" }, /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: () => setSelectedBlock("all"),
      className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`
    },
    "All Wayanad (",
    allPanchayats.length,
    ")"
  ), WAYANAD_DATA.blocks.map((b) => /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      key: b.id,
      onClick: () => setSelectedBlock(b.id),
      className: `px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedBlock === b.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`
    },
    b.name.split(" ")[0],
    " (",
    b.panchayats.length,
    ")"
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative w-full sm:w-72" }, /* @__PURE__ */ import_react5.default.createElement(Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ import_react5.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search town, village or panchayat...",
      value: panchayatSearch,
      onChange: (e) => setPanchayatSearch(e.target.value),
      className: "w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500"
    }
  )))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, filteredPanchayats.map((p, idx) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 transition space-y-2 shadow-2xs"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("h4", { className: "font-bold text-slate-900 text-sm" }, p.name, " Grama Panchayat"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100" }, p.blockName.split(" ")[0], " Block")),
    /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, /* @__PURE__ */ import_react5.default.createElement("strong", { className: "text-slate-700" }, "Locations Covered:"), " ", p.areas),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] text-emerald-700 font-medium" }, "\u2713 Same-day inspection"), /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        onClick: () => onOpenLeadModal({ location: `${p.name} Panchayat, Wayanad` }),
        className: "text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center space-x-1"
      },
      /* @__PURE__ */ import_react5.default.createElement("span", null, "Book"),
      /* @__PURE__ */ import_react5.default.createElement(ArrowRight, { className: "w-3 h-3" })
    ))
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-white border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center max-w-3xl mx-auto space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(Star, { className: "w-3.5 h-3.5 text-amber-500 fill-amber-500" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Real Wayanad Client Feedback")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Trusted by Wayanad Homeowners & Resorts"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm sm:text-base" }, "Verified testimonials from resort directors, plantation owners, and residential clients across Wayanad District.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, WAYANAD_DATA.testimonials.slice(0, 3).map((test, idx) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      key: idx,
      className: "bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-1 text-amber-400" }, [...Array(test.rating)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement(Star, { key: i, className: "w-4 h-4 fill-amber-400" }))), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-xs sm:text-sm text-slate-700 leading-relaxed italic" }, '"', test.review, '"')),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-3 border-t border-slate-200 flex items-center justify-between" }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "font-bold text-slate-900 text-xs sm:text-sm" }, test.name), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[11px] text-slate-500" }, test.role, " \u2022 ", test.location)), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded-md" }, test.service.split(" ")[0], " ", test.service.split(" ")[1]))
  ))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-[#031510] to-slate-950 text-white border-b border-emerald-950/60 relative overflow-hidden" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-6 space-y-6 text-center lg:text-left" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md" }, /* @__PURE__ */ import_react5.default.createElement(Share2, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "WhatsApp & Social Share \u2022 Rich Preview Card")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug" }, "Share This Wayanad Defense Plan With Family or Resort Team"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-300 text-sm sm:text-base leading-relaxed" }, "Easily send this comprehensive timber & termite protection page to NRI property owners in the Gulf/UK, resort general managers, or on-site caretakers in Wayanad.")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex flex-col sm:flex-row items-center gap-3 pt-2" }, /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: handleShareWhatsApp,
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-emerald-950/50 cursor-pointer active:scale-98"
    },
    /* @__PURE__ */ import_react5.default.createElement(MessageCircle, { className: "w-4 h-4 fill-slate-950 text-slate-950" }),
    /* @__PURE__ */ import_react5.default.createElement("span", null, "Share on WhatsApp (With Preview)")
  ), /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      onClick: handleCopyLink,
      className: "w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3.5 rounded-xl text-sm font-semibold transition cursor-pointer"
    },
    copiedLink ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Check, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-300 font-bold" }, "Link Copied to Clipboard!")) : /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Copy, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "Copy Direct Link"))
  )), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "flex items-center space-x-1.5 text-emerald-400" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheckBig, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "High-Res Villa Photo Attached")), /* @__PURE__ */ import_react5.default.createElement("span", { className: "flex items-center space-x-1.5 text-emerald-400" }, /* @__PURE__ */ import_react5.default.createElement(CircleCheckBig, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "IS:6313 Guarantee Summary Included")))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "lg:col-span-6 flex justify-center" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-full max-w-md bg-[#0b141a] rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl relative" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex items-center space-x-3 pb-3 border-b border-slate-800 text-xs text-slate-300" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-xs" }, "TC"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "font-bold text-white truncate flex items-center space-x-1" }, /* @__PURE__ */ import_react5.default.createElement("span", null, "TermiteControl.me (Wayanad Desk)"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-400 text-[10px]" }, "\u2713")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[10px] text-emerald-400 truncate" }, "Online \u2022 Sultan Bathery Central Office")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-[10px] text-slate-500 font-mono" }, "16:40")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-3 bg-[#1f2c34] rounded-2xl overflow-hidden border border-slate-700/60 text-left shadow-lg" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900" }, /* @__PURE__ */ import_react5.default.createElement(
    "img",
    {
      src: "/images/wayanad-luxury-hero.jpg",
      alt: "TermiteControl.me Wayanad Luxury Villa Preview",
      className: "w-full h-full object-cover"
    }
  ), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[10px] font-bold text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/40" }, "IS:6313 Certified"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[10px] text-slate-300 font-mono tracking-wider" }, "termitecontrol.me/termite-control-wayanad"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "p-3.5 space-y-1.5 bg-[#1f2c34]" }, /* @__PURE__ */ import_react5.default.createElement("h4", { className: "text-xs sm:text-sm font-bold text-white leading-tight" }, "TermiteControl.me Wayanad | Kerala's Premier Resort & Villa Protection"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-[11px] text-slate-300 leading-snug" }, "Specialized anti-termite & wood borer defense for luxury resorts, plantation villas, treehouses & NRI estates. 10-Yr Warranty & live video audit."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-700/50" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-400 font-semibold" }, "Central Hub: Kuppadi, Sultan Bathery"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-emerald-400 flex items-center space-x-0.5" }, /* @__PURE__ */ import_react5.default.createElement("span", null, "Read"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-sky-400 font-bold text-xs" }, "\u2713\u2713"))))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "mt-3 text-center" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "text-[11px] text-slate-400 font-medium" }, "\u2728 Automatically renders when shared on WhatsApp, iMessage & Facebook"))))))), /* @__PURE__ */ import_react5.default.createElement("section", { className: "py-16 sm:py-24 bg-slate-50 border-b border-slate-200" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "text-center space-y-3 mb-12" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider" }, /* @__PURE__ */ import_react5.default.createElement(CircleHelp, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ import_react5.default.createElement("span", null, "AEO & Voice Search Answers")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900" }, "Frequently Asked Questions (Wayanad)"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "text-slate-600 text-sm" }, "Direct, transparent answers regarding termite costs, inspection protocols, odorless chemistry, and resort pest control in Wayanad."), /* @__PURE__ */ import_react5.default.createElement("div", { className: "pt-4 max-w-md mx-auto" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react5.default.createElement(Search, { className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ import_react5.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search questions (e.g. cost, safety, resort AMC)...",
      value: faqSearchQuery,
      onChange: (e) => setFaqSearchQuery(e.target.value),
      className: "w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:border-emerald-500 shadow-2xs"
    }
  )))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "space-y-3" }, filteredFaqs.map((faq, idx) => {
    const isOpen = openFaqIndex === idx;
    return /* @__PURE__ */ import_react5.default.createElement(
      "div",
      {
        key: idx,
        className: "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
      },
      /* @__PURE__ */ import_react5.default.createElement(
        "button",
        {
          onClick: () => setOpenFaqIndex(isOpen ? -1 : idx),
          className: "w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50/50 transition"
        },
        /* @__PURE__ */ import_react5.default.createElement("span", { className: "font-bold text-slate-900 text-sm sm:text-base font-serif" }, faq.q),
        /* @__PURE__ */ import_react5.default.createElement("span", { className: "w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0" }, isOpen ? /* @__PURE__ */ import_react5.default.createElement(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ import_react5.default.createElement(ChevronDown, { className: "w-4 h-4" }))
      ),
      isOpen && /* @__PURE__ */ import_react5.default.createElement("div", { className: "px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30" }, faq.a)
    );
  })))), /* @__PURE__ */ import_react5.default.createElement(
    PrimaryBottomCTA,
    {
      onOpenInspectionModal,
      districtName: "Wayanad",
      customOfficeAddress: "Near St. Mary's College, Kuppadi, Sultan Bathery, Wayanad"
    }
  ), /* @__PURE__ */ import_react5.default.createElement(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://termitecontrol.me/#localbusiness-wayanad",
              "name": "TermiteControl.me Wayanad - Unit of Eco Pest India",
              "url": "https://termitecontrol.me/termite-control-wayanad",
              "logo": "https://termitecontrol.me/images/logo.png",
              "image": "https://termitecontrol.me/images/wayanad-hero-nature.jpg",
              "description": "Professional IS:6313 certified termite control, anti-termite treatment, wood borer eradication and general pest control for homes, luxury resorts and homestays across Wayanad District.",
              "telephone": "+919020040009",
              "email": "support@termitecontrol.me",
              "priceRange": "\u20B9\u20B9",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near St. Mary's College, Kuppadi",
                "addressLocality": "Sultan Bathery",
                "addressRegion": "Kerala",
                "postalCode": "673592",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.6625,
                "longitude": 76.257
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:30"
              },
              "areaServed": [
                "Sultan Bathery",
                "Kalpetta",
                "Mananthavady",
                "Vythiri",
                "Meppadi",
                "Panamaram",
                "Ambalavayal",
                "Pulpally",
                "Kuppadi",
                "Lakkidi",
                "Pookode",
                "Thirunelly",
                "Padinjarathara",
                "Wayanad District"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "940"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://termitecontrol.me/termite-control-wayanad#faq",
              "mainEntity": WAYANAD_DATA.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://termitecontrol.me/termite-control-wayanad#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://termitecontrol.me/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Kerala Service Locations",
                  "item": "https://termitecontrol.me/#locations"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Wayanad District",
                  "item": "https://termitecontrol.me/termite-control-wayanad"
                }
              ]
            }
          ]
        })
      }
    }
  ));
}
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/award.js:
lucide-react/dist/esm/icons/bug.js:
lucide-react/dist/esm/icons/building-2.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle-alert.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/circle-help.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/external-link.js:
lucide-react/dist/esm/icons/file-check.js:
lucide-react/dist/esm/icons/hotel.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/message-circle.js:
lucide-react/dist/esm/icons/navigation.js:
lucide-react/dist/esm/icons/phone-call.js:
lucide-react/dist/esm/icons/phone.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/send.js:
lucide-react/dist/esm/icons/share-2.js:
lucide-react/dist/esm/icons/shield-check.js:
lucide-react/dist/esm/icons/shield.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/trees.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.475.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
