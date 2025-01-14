'use strict';
var produce = require('immer'),
  isEqualWith = require('lodash/isEqualWith'),
  React = require('react'),
  isEqual = require('shallowequal'),
  invariant = require('tiny-invariant'),
  ReactDOM = require('react-dom'),
  ROOT_NODE = 'ROOT',
  DEPRECATED_ROOT_NODE = 'canvas-ROOT',
  LOGO = 'LOGO',
  FOOTER = 'Footer',
  AFTER = 'after',
  BEFORE = 'before',
  ERROR_NOPARENT = 'Parent id cannot be ommited',
  ERROR_DUPLICATE_NODEID = 'Attempting to add a node with duplicated id',
  ERROR_INVALID_NODEID = 'Node does not exist, it may have been removed',
  ERROR_TOP_LEVEL_ELEMENT_NO_ID =
    'A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ',
  ERROR_MISSING_PLACEHOLDER_PLACEMENT =
    'Placeholder required placement info (parent, index, or where) is missing',
  ERROR_MOVE_CANNOT_DROP = 'Node cannot be dropped into target parent',
  ERROR_MOVE_INCOMING_PARENT = 'Target parent rejects incoming node',
  ERROR_MOVE_OUTGOING_PARENT = 'Current parent rejects outgoing node',
  ERROR_MOVE_NONCANVAS_CHILD =
    'Cannot move node that is not a direct child of a Canvas node',
  ERROR_MOVE_TO_NONCANVAS_PARENT = 'Cannot move node into a non-Canvas parent',
  ERROR_MOVE_TOP_LEVEL_NODE = 'A top-level Node cannot be moved',
  ERROR_MOVE_ROOT_NODE = 'Root Node cannot be moved',
  ERROR_MOVE_TO_DESCENDANT = 'Cannot move node into a descendant',
  ERROR_NOT_IN_RESOLVER =
    'The component type specified for this node (%node_type%) does not exist in the resolver',
  ERROR_INFINITE_CANVAS =
    "The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template.",
  ERROR_CANNOT_DRAG =
    'The node has specified a canDrag() rule that prevents it from being dragged',
  ERROR_INVALID_NODE_ID = 'Invalid parameter Node Id specified',
  ERROR_DELETE_TOP_LEVEL_NODE = 'Attempting to delete a top-level Node',
  ERROR_RESOLVER_NOT_AN_OBJECT =
    'Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props',
  ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER =
    'An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props',
  ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT =
    'You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.',
  ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT =
    'You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.',
  _extendStatics = function (e, t) {
    return (_extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(e, t);
  };
function __extends(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  function n() {
    this.constructor = e;
  }
  _extendStatics(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var _assign = function () {
  return (_assign =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function __spreadArrays() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  var r = Array(e),
    o = 0;
  for (t = 0; t < n; t++)
    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
      r[o] = i[s];
  return r;
}
var HISTORY_ACTIONS = {
    UNDO: 'HISTORY_UNDO',
    REDO: 'HISTORY_REDO',
    THROTTLE: 'HISTORY_THROTTLE',
    IGNORE: 'HISTORY_IGNORE',
    MERGE: 'HISTORY_MERGE',
    CLEAR: 'HISTORY_CLEAR',
  },
  History = (function () {
    function e() {
      (this.timeline = []), (this.pointer = -1);
    }
    return (
      (e.prototype.add = function (e, t) {
        (0 === e.length && 0 === t.length) ||
          ((this.pointer = this.pointer + 1),
          (this.timeline.length = this.pointer),
          (this.timeline[this.pointer] = {
            patches: e,
            inversePatches: t,
            timestamp: Date.now(),
          }));
      }),
      (e.prototype.throttleAdd = function (e, t, n) {
        if ((void 0 === n && (n = 500), 0 !== e.length || 0 !== t.length)) {
          if (this.timeline.length && this.pointer >= 0) {
            var r = this.timeline[this.pointer],
              o = r.patches,
              i = r.inversePatches,
              s = r.timestamp;
            if (new Date().getTime() - s < n)
              return void (this.timeline[this.pointer] = {
                timestamp: s,
                patches: __spreadArrays(o, e),
                inversePatches: __spreadArrays(t, i),
              });
          }
          this.add(e, t);
        }
      }),
      (e.prototype.merge = function (e, t) {
        if (0 !== e.length || 0 !== t.length)
          if (this.timeline.length && this.pointer >= 0) {
            var n = this.timeline[this.pointer],
              r = n.inversePatches;
            this.timeline[this.pointer] = {
              timestamp: n.timestamp,
              patches: __spreadArrays(n.patches, e),
              inversePatches: __spreadArrays(t, r),
            };
          } else this.add(e, t);
      }),
      (e.prototype.clear = function () {
        (this.timeline = []), (this.pointer = -1);
      }),
      (e.prototype.canUndo = function () {
        return this.pointer >= 0;
      }),
      (e.prototype.canRedo = function () {
        return this.pointer < this.timeline.length - 1;
      }),
      (e.prototype.undo = function (e) {
        if (this.canUndo()) {
          var t = this.timeline[this.pointer].inversePatches;
          return (this.pointer = this.pointer - 1), produce.applyPatches(e, t);
        }
      }),
      (e.prototype.redo = function (e) {
        if (this.canRedo())
          return (
            (this.pointer = this.pointer + 1),
            produce.applyPatches(e, this.timeline[this.pointer].patches)
          );
      }),
      e
    );
  })();
function useMethods(e, t, n, r) {
  var o,
    i = React.useMemo(function () {
      return new History();
    }, []),
    s = React.useRef([]),
    a = React.useRef();
  'function' == typeof e
    ? (o = e)
    : ((o = e.methods),
      (s.current = e.ignoreHistoryForActions),
      (a.current = e.normalizeHistory));
  var c = React.useRef(r);
  c.current = r;
  var u = React.useMemo(
      function () {
        var e = a.current,
          t = s.current,
          r = c.current;
        return [
          function (s, a) {
            var c,
              u =
                n &&
                createQuery(
                  n,
                  function () {
                    return s;
                  },
                  i
                ),
              R = produce.produceWithPatches(s, function (e) {
                var t, n;
                switch (a.type) {
                  case HISTORY_ACTIONS.UNDO:
                    return i.undo(e);
                  case HISTORY_ACTIONS.REDO:
                    return i.redo(e);
                  case HISTORY_ACTIONS.CLEAR:
                    return i.clear(), _assign({}, e);
                  case HISTORY_ACTIONS.IGNORE:
                  case HISTORY_ACTIONS.MERGE:
                  case HISTORY_ACTIONS.THROTTLE:
                    var r = a.payload,
                      s = r[0],
                      c = r.slice(1);
                    (t = o(e, u))[s].apply(t, c);
                    break;
                  default:
                    (n = o(e, u))[a.type].apply(n, a.payload);
                }
              }),
              E = R[0],
              p = R[1],
              O = R[2];
            return (
              (c = E),
              r &&
                r(
                  E,
                  s,
                  { type: a.type, params: a.payload, patches: p },
                  u,
                  function (e) {
                    var t = produce.produceWithPatches(E, e);
                    (c = t[0]),
                      (p = __spreadArrays(p, t[1])),
                      (O = __spreadArrays(t[2], O));
                  }
                ),
              [HISTORY_ACTIONS.UNDO, HISTORY_ACTIONS.REDO].includes(a.type) &&
                e &&
                (c = produce(c, e)),
              __spreadArrays(t, [
                HISTORY_ACTIONS.UNDO,
                HISTORY_ACTIONS.REDO,
                HISTORY_ACTIONS.IGNORE,
                HISTORY_ACTIONS.CLEAR,
              ]).includes(a.type) ||
                (a.type === HISTORY_ACTIONS.THROTTLE
                  ? i.throttleAdd(p, O, a.config && a.config.rate)
                  : a.type === HISTORY_ACTIONS.MERGE
                  ? i.merge(p, O)
                  : i.add(p, O)),
              c
            );
          },
          o,
        ];
      },
      [i, o, n]
    ),
    R = u[1],
    E = React.useReducer(u[0], t),
    p = E[0],
    O = E[1],
    d = React.useRef();
  d.current = p;
  var l = React.useMemo(
      function () {
        return n
          ? createQuery(
              n,
              function () {
                return d.current;
              },
              i
            )
          : [];
      },
      [i, n]
    ),
    _ = React.useMemo(
      function () {
        var e = Object.keys(R(null, null)),
          t = s.current;
        return _assign(
          _assign(
            {},
            e.reduce(function (e, t) {
              return (
                (e[t] = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  return O({ type: t, payload: e });
                }),
                e
              );
            }, {})
          ),
          {
            history: {
              undo: function () {
                return O({ type: HISTORY_ACTIONS.UNDO });
              },
              redo: function () {
                return O({ type: HISTORY_ACTIONS.REDO });
              },
              clear: function () {
                return O({ type: HISTORY_ACTIONS.CLEAR });
              },
              throttle: function (n) {
                return _assign(
                  {},
                  e
                    .filter(function (e) {
                      return !t.includes(e);
                    })
                    .reduce(function (e, t) {
                      return (
                        (e[t] = function () {
                          for (var e = [], r = 0; r < arguments.length; r++)
                            e[r] = arguments[r];
                          return O({
                            type: HISTORY_ACTIONS.THROTTLE,
                            payload: __spreadArrays([t], e),
                            config: { rate: n },
                          });
                        }),
                        e
                      );
                    }, {})
                );
              },
              ignore: function () {
                return _assign(
                  {},
                  e
                    .filter(function (e) {
                      return !t.includes(e);
                    })
                    .reduce(function (e, t) {
                      return (
                        (e[t] = function () {
                          for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                          return O({
                            type: HISTORY_ACTIONS.IGNORE,
                            payload: __spreadArrays([t], e),
                          });
                        }),
                        e
                      );
                    }, {})
                );
              },
              merge: function () {
                return _assign(
                  {},
                  e
                    .filter(function (e) {
                      return !t.includes(e);
                    })
                    .reduce(function (e, t) {
                      return (
                        (e[t] = function () {
                          for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                          return O({
                            type: HISTORY_ACTIONS.MERGE,
                            payload: __spreadArrays([t], e),
                          });
                        }),
                        e
                      );
                    }, {})
                );
              },
            },
          }
        );
      },
      [R]
    ),
    f = React.useCallback(function () {
      return d.current;
    }, []),
    h = React.useMemo(
      function () {
        return new Watcher(f);
      },
      [f]
    );
  return (
    React.useEffect(
      function () {
        (d.current = p), h.notify();
      },
      [p, h]
    ),
    React.useMemo(
      function () {
        return {
          getState: f,
          subscribe: function (e, t, n) {
            return h.subscribe(e, t, n);
          },
          actions: _,
          query: l,
          history: i,
        };
      },
      [_, l, h, f, i]
    )
  );
}
function createQuery(e, t, n) {
  var r = Object.keys(e()).reduce(function (n, r) {
    var o;
    return _assign(
      _assign({}, n),
      (((o = {})[r] = function () {
        for (var n, o = [], i = 0; i < arguments.length; i++)
          o[i] = arguments[i];
        return (n = e(t()))[r].apply(n, o);
      }),
      o)
    );
  }, {});
  return _assign(_assign({}, r), {
    history: {
      canUndo: function () {
        return n.canUndo();
      },
      canRedo: function () {
        return n.canRedo();
      },
    },
  });
}
produce.enableMapSet(), produce.enablePatches();
var Watcher = (function () {
    function e(e) {
      (this.subscribers = []), (this.getState = e);
    }
    return (
      (e.prototype.subscribe = function (e, t, n) {
        var r = this,
          o = new Subscriber(
            function () {
              return e(r.getState());
            },
            t,
            n
          );
        return this.subscribers.push(o), this.unsubscribe.bind(this, o);
      }),
      (e.prototype.unsubscribe = function (e) {
        if (this.subscribers.length) {
          var t = this.subscribers.indexOf(e);
          if (t > -1) return this.subscribers.splice(t, 1);
        }
      }),
      (e.prototype.notify = function () {
        this.subscribers.forEach(function (e) {
          return e.collect();
        });
      }),
      e
    );
  })(),
  Subscriber = (function () {
    function e(e, t, n) {
      void 0 === n && (n = !1),
        (this.collector = e),
        (this.onChange = t),
        n && this.collect();
    }
    return (
      (e.prototype.collect = function () {
        try {
          var e = this.collector();
          isEqualWith(e, this.collected) ||
            ((this.collected = e),
            this.onChange && this.onChange(this.collected));
        } catch (e) {
          console.warn(e);
        }
      }),
      e
    );
  })(),
  getDOMInfo = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.x,
      r = t.y,
      o = t.top,
      i = t.left,
      s = t.bottom,
      a = t.right,
      c = t.width,
      u = t.height,
      R = window.getComputedStyle(e),
      E = {
        left: parseInt(R.marginLeft),
        right: parseInt(R.marginRight),
        bottom: parseInt(R.marginBottom),
        top: parseInt(R.marginTop),
      },
      p = {
        left: parseInt(R.paddingLeft),
        right: parseInt(R.paddingRight),
        bottom: parseInt(R.paddingBottom),
        top: parseInt(R.paddingTop),
      };
    return {
      x: n,
      y: r,
      top: o,
      left: i,
      bottom: s,
      right: a,
      width: c,
      height: u,
      outerWidth: Math.round(c + E.left + E.right),
      outerHeight: Math.round(u + E.top + E.bottom),
      margin: E,
      padding: p,
      inFlow:
        e.parentElement &&
        !!(function (t) {
          var n = getComputedStyle(t);
          if (
            !(
              (R.overflow && 'visible' !== R.overflow) ||
              'none' !== n.float ||
              'grid' === n.display ||
              ('flex' === n.display && 'column' !== n['flex-direction'])
            )
          ) {
            switch (R.position) {
              case 'static':
              case 'relative':
                break;
              default:
                return;
            }
            switch (e.tagName) {
              case 'TR':
              case 'TBODY':
              case 'THEAD':
              case 'TFOOT':
                return !0;
            }
            switch (R.display) {
              case 'block':
              case 'list-item':
              case 'table':
              case 'flex':
              case 'grid':
                return !0;
            }
          }
        })(e.parentElement),
    };
  };
function useCollector(e, t) {
  var n = e.subscribe,
    r = e.getState,
    o = e.actions,
    i = e.query,
    s = React.useRef(!0),
    a = React.useRef(null),
    c = React.useRef(t);
  c.current = t;
  var u = React.useCallback(
    function (e) {
      return _assign(_assign({}, e), { actions: o, query: i });
    },
    [o, i]
  );
  s.current && t && ((a.current = t(r(), i)), (s.current = !1));
  var R = React.useState(u(a.current)),
    E = R[0],
    p = R[1];
  return (
    React.useEffect(
      function () {
        var e;
        return (
          c.current &&
            (e = n(
              function (e) {
                return c.current(e, i);
              },
              function (e) {
                p(u(e));
              }
            )),
          function () {
            e && e();
          }
        );
      },
      [u, i, n]
    ),
    E
  );
}
var getRandomId = function (e) {
    return (
      Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 5)
    );
  },
  ConnectorRegistry = (function () {
    function e() {
      (this.elementIdMap = new WeakMap()), (this.registry = new Map());
    }
    return (
      (e.prototype.getElementId = function (e) {
        var t = this.elementIdMap.get(e);
        if (t) return t;
        var n = getRandomId();
        return this.elementIdMap.set(e, n), n;
      }),
      (e.prototype.getConnectorId = function (e, t) {
        return t + '--' + this.getElementId(e);
      }),
      (e.prototype.register = function (e, t) {
        var n = this,
          r = this.getByElement(e, t.name);
        if (r) {
          if (isEqual(t.required, r.required)) return r;
          this.getByElement(e, t.name).disable();
        }
        var o = null,
          i = this.getConnectorId(e, t.name);
        return (
          this.registry.set(i, {
            id: i,
            required: t.required,
            enable: function () {
              o && o(), (o = t.connector(e, t.required, t.options));
            },
            disable: function () {
              o && o();
            },
            remove: function () {
              return n.remove(i);
            },
          }),
          this.registry.get(i).enable(),
          this.registry.get(i)
        );
      }),
      (e.prototype.get = function (e) {
        return this.registry.get(e);
      }),
      (e.prototype.remove = function (e) {
        var t = this.get(e);
        t && (t.disable(), this.registry.delete(t.id));
      }),
      (e.prototype.enable = function () {
        this.registry.forEach(function (e) {
          e.enable();
        });
      }),
      (e.prototype.disable = function () {
        this.registry.forEach(function (e) {
          e.disable();
        });
      }),
      (e.prototype.getByElement = function (e, t) {
        return this.get(this.getConnectorId(e, t));
      }),
      (e.prototype.removeByElement = function (e, t) {
        return this.remove(this.getConnectorId(e, t));
      }),
      (e.prototype.clear = function () {
        this.disable(),
          (this.elementIdMap = new WeakMap()),
          (this.registry = new Map());
      }),
      e
    );
  })();
function isEventBlockedByDescendant(e, t, n) {
  e.craft || (e.craft = { stopPropagation: function () {}, blockedEvents: {} });
  for (
    var r = (e.craft && e.craft.blockedEvents[t]) || [], o = 0;
    o < r.length;
    o++
  ) {
    var i = r[o];
    if (n !== i && n.contains(i)) return !0;
  }
  return !1;
}
(exports.EventHandlerUpdates = void 0),
  (function (e) {
    (e[(e.HandlerDisabled = 0)] = 'HandlerDisabled'),
      (e[(e.HandlerEnabled = 1)] = 'HandlerEnabled');
  })(exports.EventHandlerUpdates || (exports.EventHandlerUpdates = {}));
var EventHandlers = (function () {
    function e(e) {
      (this.registry = new ConnectorRegistry()),
        (this.subscribers = new Set()),
        (this.options = e);
    }
    return (
      (e.prototype.listen = function (e) {
        var t = this;
        return (
          this.subscribers.add(e),
          function () {
            return t.subscribers.delete(e);
          }
        );
      }),
      (e.prototype.disable = function () {
        this.onDisable && this.onDisable(),
          this.registry.disable(),
          this.subscribers.forEach(function (e) {
            e(exports.EventHandlerUpdates.HandlerDisabled);
          });
      }),
      (e.prototype.enable = function () {
        this.onEnable && this.onEnable(),
          this.registry.enable(),
          this.subscribers.forEach(function (e) {
            e(exports.EventHandlerUpdates.HandlerEnabled);
          });
      }),
      (e.prototype.cleanup = function () {
        this.disable(), this.subscribers.clear(), this.registry.clear();
      }),
      (e.prototype.addCraftEventListener = function (e, t, n, r) {
        var o = function (r) {
          isEventBlockedByDescendant(r, t, e) ||
            ((r.craft.stopPropagation = function () {
              r.craft.blockedEvents[t] || (r.craft.blockedEvents[t] = []),
                r.craft.blockedEvents[t].push(e);
            }),
            n(r));
        };
        return (
          e.addEventListener(t, o, r),
          function () {
            return e.removeEventListener(t, o, r);
          }
        );
      }),
      (e.prototype.createConnectorsUsage = function () {
        var e = this,
          t = this.handlers(),
          n = new Set();
        return {
          connectors: Object.entries(t).reduce(function (t, r) {
            var o,
              i = r[0],
              s = r[1];
            return _assign(
              _assign({}, t),
              (((o = {})[i] = function (t, r, o) {
                var a = e.registry.register(t, {
                  required: r,
                  name: i,
                  options: o,
                  connector: s,
                });
                return n.add(a.id), t;
              }),
              o)
            );
          }, {}),
          cleanup: function () {
            n.forEach(function (t) {
              return e.registry.remove(t);
            });
          },
        };
      }),
      (e.prototype.derive = function (e, t) {
        return new e(this, t);
      }),
      (e.prototype.createProxyHandlers = function (e, t) {
        var n = [],
          r = e.handlers();
        return (
          t(
            new Proxy(r, {
              get: function (e, t, o) {
                return t in r == 0
                  ? Reflect.get(e, t, o)
                  : function (e) {
                      for (var o = [], i = 1; i < arguments.length; i++)
                        o[i - 1] = arguments[i];
                      var s = r[t].apply(r, __spreadArrays([e], o));
                      s && n.push(s);
                    };
              },
            })
          ),
          function () {
            n.forEach(function (e) {
              e();
            });
          }
        );
      }),
      (e.prototype.reflect = function (e) {
        return this.createProxyHandlers(this, e);
      }),
      e
    );
  })(),
  DerivedEventHandlers = (function (e) {
    function t(t, n) {
      var r = e.call(this, n) || this;
      return (
        (r.derived = t),
        (r.options = n),
        (r.unsubscribeParentHandlerListener = r.derived.listen(function (e) {
          switch (e) {
            case exports.EventHandlerUpdates.HandlerEnabled:
              return r.enable();
            case exports.EventHandlerUpdates.HandlerDisabled:
              return r.disable();
            default:
              return;
          }
        })),
        r
      );
    }
    return (
      __extends(t, e),
      (t.prototype.inherit = function (e) {
        return this.createProxyHandlers(this.derived, e);
      }),
      (t.prototype.cleanup = function () {
        e.prototype.cleanup.call(this), this.unsubscribeParentHandlerListener();
      }),
      t
    );
  })(EventHandlers);
function setRef(e, t) {
  t && ('function' == typeof e ? e(t) : (e.current = t));
}
function cloneWithRef(e, t) {
  var n = e.ref;
  return (
    invariant(
      'string' != typeof n,
      'Cannot connect to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
    ),
    React.cloneElement(
      e,
      n
        ? {
            ref: function (e) {
              setRef(n, e), setRef(t, e);
            },
          }
        : { ref: t }
    )
  );
}
function throwIfCompositeComponentElement(e) {
  if ('string' != typeof e.type) throw new Error();
}
function wrapHookToRecognizeElement(e) {
  return function (t) {
    void 0 === t && (t = null);
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (!React.isValidElement(t)) {
      if (!t) return;
      var o = t;
      return o && e.apply(void 0, __spreadArrays([o], n)), o;
    }
    var i = t;
    return throwIfCompositeComponentElement(i), cloneWithRef(i, e);
  };
}
function wrapConnectorHooks(e) {
  return Object.keys(e).reduce(function (t, n) {
    return (
      (t[n] = wrapHookToRecognizeElement(function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return e[n].apply(e, t);
      })),
      t
    );
  }, {});
}
var RenderIndicator = function (e) {
    var t = e.parentDom,
      n = React.createElement('div', {
        style: _assign(
          {
            position: 'fixed',
            display: 'block',
            opacity: 1,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            zIndex: 99999,
          },
          e.style
        ),
      });
    return t && t.ownerDocument !== document
      ? ReactDOM.createPortal(n, t.ownerDocument.body)
      : n;
  },
  useEffectOnce = function (e) {
    React.useEffect(e, []);
  },
  deprecationWarning = function (e, t) {
    var n =
        'Deprecation warning: ' + e + ' will be deprecated in future relases.',
      r = t.suggest,
      o = t.doc;
    r && (n += ' Please use ' + r + ' instead.'),
      o && (n += '(' + o + ')'),
      console.warn(n);
  },
  isClientSide = function () {
    return 'undefined' != typeof window;
  },
  isLinux = function () {
    return isClientSide() && /Linux/i.test(window.navigator.userAgent);
  },
  isChromium = function () {
    return isClientSide() && /Chrome/i.test(window.navigator.userAgent);
  };
(exports.AFTER = AFTER),
  (exports.BEFORE = BEFORE),
  (exports.DEPRECATED_ROOT_NODE = DEPRECATED_ROOT_NODE),
  (exports.DerivedEventHandlers = DerivedEventHandlers),
  (exports.ERROR_CANNOT_DRAG = ERROR_CANNOT_DRAG),
  (exports.ERROR_DELETE_TOP_LEVEL_NODE = ERROR_DELETE_TOP_LEVEL_NODE),
  (exports.ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER = ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER),
  (exports.ERROR_DUPLICATE_NODEID = ERROR_DUPLICATE_NODEID),
  (exports.ERROR_INFINITE_CANVAS = ERROR_INFINITE_CANVAS),
  (exports.ERROR_INVALID_NODEID = ERROR_INVALID_NODEID),
  (exports.ERROR_INVALID_NODE_ID = ERROR_INVALID_NODE_ID),
  (exports.ERROR_MISSING_PLACEHOLDER_PLACEMENT = ERROR_MISSING_PLACEHOLDER_PLACEMENT),
  (exports.ERROR_MOVE_CANNOT_DROP = ERROR_MOVE_CANNOT_DROP),
  (exports.ERROR_MOVE_INCOMING_PARENT = ERROR_MOVE_INCOMING_PARENT),
  (exports.ERROR_MOVE_NONCANVAS_CHILD = ERROR_MOVE_NONCANVAS_CHILD),
  (exports.ERROR_MOVE_OUTGOING_PARENT = ERROR_MOVE_OUTGOING_PARENT),
  (exports.ERROR_MOVE_ROOT_NODE = ERROR_MOVE_ROOT_NODE),
  (exports.ERROR_MOVE_TOP_LEVEL_NODE = ERROR_MOVE_TOP_LEVEL_NODE),
  (exports.ERROR_MOVE_TO_DESCENDANT = ERROR_MOVE_TO_DESCENDANT),
  (exports.ERROR_MOVE_TO_NONCANVAS_PARENT = ERROR_MOVE_TO_NONCANVAS_PARENT),
  (exports.ERROR_NOPARENT = ERROR_NOPARENT),
  (exports.ERROR_NOT_IN_RESOLVER = ERROR_NOT_IN_RESOLVER),
  (exports.ERROR_RESOLVER_NOT_AN_OBJECT = ERROR_RESOLVER_NOT_AN_OBJECT),
  (exports.ERROR_TOP_LEVEL_ELEMENT_NO_ID = ERROR_TOP_LEVEL_ELEMENT_NO_ID),
  (exports.ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT = ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT),
  (exports.ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT = ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT),
  (exports.EventHandlers = EventHandlers),
  (exports.FOOTER = FOOTER),
  (exports.HISTORY_ACTIONS = HISTORY_ACTIONS),
  (exports.History = History),
  (exports.LOGO = LOGO),
  (exports.ROOT_NODE = ROOT_NODE),
  (exports.RenderIndicator = RenderIndicator),
  (exports.cloneWithRef = cloneWithRef),
  (exports.createQuery = createQuery),
  (exports.deprecationWarning = deprecationWarning),
  (exports.getDOMInfo = getDOMInfo),
  (exports.getRandomId = getRandomId),
  (exports.isChromium = isChromium),
  (exports.isClientSide = isClientSide),
  (exports.isLinux = isLinux),
  (exports.useCollector = useCollector),
  (exports.useEffectOnce = useEffectOnce),
  (exports.useMethods = useMethods),
  (exports.wrapConnectorHooks = wrapConnectorHooks),
  (exports.wrapHookToRecognizeElement = wrapHookToRecognizeElement);
