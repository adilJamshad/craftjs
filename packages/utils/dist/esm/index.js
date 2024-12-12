import t, {
  applyPatches as e,
  enableMapSet as n,
  enablePatches as r,
  produceWithPatches as o,
} from 'immer';
import i from 'lodash/isEqualWith';
import a, {
  useMemo as s,
  useRef as c,
  useReducer as u,
  useCallback as l,
  useEffect as p,
  useState as f,
  cloneElement as d,
  isValidElement as h,
} from 'react';
import y from 'shallowequal';
import g from 'tiny-invariant';
import m from 'react-dom';
var v = 'ROOT',
  b = 'canvas-ROOT',
  E = 'LOGO',
  w = 'Footer',
  O = 'after',
  R = 'before',
  T = 'Parent id cannot be ommited',
  C = 'Attempting to add a node with duplicated id',
  I = 'Node does not exist, it may have been removed',
  D =
    'A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ',
  H =
    'Placeholder required placement info (parent, index, or where) is missing',
  P = 'Node cannot be dropped into target parent',
  x = 'Target parent rejects incoming node',
  N = 'Current parent rejects outgoing node',
  A = 'Cannot move node that is not a direct child of a Canvas node',
  L = 'Cannot move node into a non-Canvas parent',
  k = 'A top-level Node cannot be moved',
  M = 'Root Node cannot be moved',
  S = 'Cannot move node into a descendant',
  _ =
    'The component type specified for this node (%node_type%) does not exist in the resolver',
  j =
    "The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template.",
  U =
    'The node has specified a canDrag() rule that prevents it from being dragged',
  q = 'Invalid parameter Node Id specified',
  G = 'Attempting to delete a top-level Node',
  Y =
    'Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props',
  B =
    'An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props',
  F =
    'You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.',
  W =
    'You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.',
  z = function (t, e) {
    return (z =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      })(t, e);
  },
  J = function () {
    return (J =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
function K() {
  for (var t = 0, e = 0, n = arguments.length; e < n; e++)
    t += arguments[e].length;
  var r = Array(t),
    o = 0;
  for (e = 0; e < n; e++)
    for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
      r[o] = i[a];
  return r;
}
var Q = {
    UNDO: 'HISTORY_UNDO',
    REDO: 'HISTORY_REDO',
    THROTTLE: 'HISTORY_THROTTLE',
    IGNORE: 'HISTORY_IGNORE',
    MERGE: 'HISTORY_MERGE',
    CLEAR: 'HISTORY_CLEAR',
  },
  V = (function () {
    function t() {
      (this.timeline = []), (this.pointer = -1);
    }
    return (
      (t.prototype.add = function (t, e) {
        (0 === t.length && 0 === e.length) ||
          ((this.pointer = this.pointer + 1),
          (this.timeline.length = this.pointer),
          (this.timeline[this.pointer] = {
            patches: t,
            inversePatches: e,
            timestamp: Date.now(),
          }));
      }),
      (t.prototype.throttleAdd = function (t, e, n) {
        if ((void 0 === n && (n = 500), 0 !== t.length || 0 !== e.length)) {
          if (this.timeline.length && this.pointer >= 0) {
            var r = this.timeline[this.pointer],
              o = r.patches,
              i = r.inversePatches,
              a = r.timestamp;
            if (new Date().getTime() - a < n)
              return void (this.timeline[this.pointer] = {
                timestamp: a,
                patches: K(o, t),
                inversePatches: K(e, i),
              });
          }
          this.add(t, e);
        }
      }),
      (t.prototype.merge = function (t, e) {
        if (0 !== t.length || 0 !== e.length)
          if (this.timeline.length && this.pointer >= 0) {
            var n = this.timeline[this.pointer],
              r = n.inversePatches;
            this.timeline[this.pointer] = {
              timestamp: n.timestamp,
              patches: K(n.patches, t),
              inversePatches: K(e, r),
            };
          } else this.add(t, e);
      }),
      (t.prototype.clear = function () {
        (this.timeline = []), (this.pointer = -1);
      }),
      (t.prototype.canUndo = function () {
        return this.pointer >= 0;
      }),
      (t.prototype.canRedo = function () {
        return this.pointer < this.timeline.length - 1;
      }),
      (t.prototype.undo = function (t) {
        if (this.canUndo()) {
          var n = this.timeline[this.pointer].inversePatches;
          return (this.pointer = this.pointer - 1), e(t, n);
        }
      }),
      (t.prototype.redo = function (t) {
        if (this.canRedo())
          return (
            (this.pointer = this.pointer + 1),
            e(t, this.timeline[this.pointer].patches)
          );
      }),
      t
    );
  })();
function X(e, n, r, i) {
  var a,
    f = s(function () {
      return new V();
    }, []),
    d = c([]),
    h = c();
  'function' == typeof e
    ? (a = e)
    : ((a = e.methods),
      (d.current = e.ignoreHistoryForActions),
      (h.current = e.normalizeHistory));
  var y = c(i);
  y.current = i;
  var g = s(
      function () {
        var e = h.current,
          n = d.current,
          i = y.current;
        return [
          function (s, c) {
            var u,
              l =
                r &&
                Z(
                  r,
                  function () {
                    return s;
                  },
                  f
                ),
              p = o(s, function (t) {
                var e, n;
                switch (c.type) {
                  case Q.UNDO:
                    return f.undo(t);
                  case Q.REDO:
                    return f.redo(t);
                  case Q.CLEAR:
                    return f.clear(), J({}, t);
                  case Q.IGNORE:
                  case Q.MERGE:
                  case Q.THROTTLE:
                    var r = c.payload,
                      o = r[0],
                      i = r.slice(1);
                    (e = a(t, l))[o].apply(e, i);
                    break;
                  default:
                    (n = a(t, l))[c.type].apply(n, c.payload);
                }
              }),
              d = p[0],
              h = p[1],
              y = p[2];
            return (
              (u = d),
              i &&
                i(
                  d,
                  s,
                  { type: c.type, params: c.payload, patches: h },
                  l,
                  function (t) {
                    var e = o(d, t);
                    (u = e[0]), (h = K(h, e[1])), (y = K(e[2], y));
                  }
                ),
              [Q.UNDO, Q.REDO].includes(c.type) && e && (u = t(u, e)),
              K(n, [Q.UNDO, Q.REDO, Q.IGNORE, Q.CLEAR]).includes(c.type) ||
                (c.type === Q.THROTTLE
                  ? f.throttleAdd(h, y, c.config && c.config.rate)
                  : c.type === Q.MERGE
                  ? f.merge(h, y)
                  : f.add(h, y)),
              u
            );
          },
          a,
        ];
      },
      [f, a, r]
    ),
    m = g[1],
    v = u(g[0], n),
    b = v[0],
    E = v[1],
    w = c();
  w.current = b;
  var O = s(
      function () {
        return r
          ? Z(
              r,
              function () {
                return w.current;
              },
              f
            )
          : [];
      },
      [f, r]
    ),
    R = s(
      function () {
        var t = Object.keys(m(null, null)),
          e = d.current;
        return J(
          J(
            {},
            t.reduce(function (t, e) {
              return (
                (t[e] = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  return E({ type: e, payload: t });
                }),
                t
              );
            }, {})
          ),
          {
            history: {
              undo: function () {
                return E({ type: Q.UNDO });
              },
              redo: function () {
                return E({ type: Q.REDO });
              },
              clear: function () {
                return E({ type: Q.CLEAR });
              },
              throttle: function (n) {
                return J(
                  {},
                  t
                    .filter(function (t) {
                      return !e.includes(t);
                    })
                    .reduce(function (t, e) {
                      return (
                        (t[e] = function () {
                          for (var t = [], r = 0; r < arguments.length; r++)
                            t[r] = arguments[r];
                          return E({
                            type: Q.THROTTLE,
                            payload: K([e], t),
                            config: { rate: n },
                          });
                        }),
                        t
                      );
                    }, {})
                );
              },
              ignore: function () {
                return J(
                  {},
                  t
                    .filter(function (t) {
                      return !e.includes(t);
                    })
                    .reduce(function (t, e) {
                      return (
                        (t[e] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return E({ type: Q.IGNORE, payload: K([e], t) });
                        }),
                        t
                      );
                    }, {})
                );
              },
              merge: function () {
                return J(
                  {},
                  t
                    .filter(function (t) {
                      return !e.includes(t);
                    })
                    .reduce(function (t, e) {
                      return (
                        (t[e] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return E({ type: Q.MERGE, payload: K([e], t) });
                        }),
                        t
                      );
                    }, {})
                );
              },
            },
          }
        );
      },
      [m]
    ),
    T = l(function () {
      return w.current;
    }, []),
    C = s(
      function () {
        return new $(T);
      },
      [T]
    );
  return (
    p(
      function () {
        (w.current = b), C.notify();
      },
      [b, C]
    ),
    s(
      function () {
        return {
          getState: T,
          subscribe: function (t, e, n) {
            return C.subscribe(t, e, n);
          },
          actions: R,
          query: O,
          history: f,
        };
      },
      [R, O, C, T, f]
    )
  );
}
function Z(t, e, n) {
  var r = Object.keys(t()).reduce(function (n, r) {
    var o;
    return J(
      J({}, n),
      (((o = {})[r] = function () {
        for (var n, o = [], i = 0; i < arguments.length; i++)
          o[i] = arguments[i];
        return (n = t(e()))[r].apply(n, o);
      }),
      o)
    );
  }, {});
  return J(J({}, r), {
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
n(), r();
var $ = (function () {
    function t(t) {
      (this.subscribers = []), (this.getState = t);
    }
    return (
      (t.prototype.subscribe = function (t, e, n) {
        var r = this,
          o = new tt(
            function () {
              return t(r.getState());
            },
            e,
            n
          );
        return this.subscribers.push(o), this.unsubscribe.bind(this, o);
      }),
      (t.prototype.unsubscribe = function (t) {
        if (this.subscribers.length) {
          var e = this.subscribers.indexOf(t);
          if (e > -1) return this.subscribers.splice(e, 1);
        }
      }),
      (t.prototype.notify = function () {
        this.subscribers.forEach(function (t) {
          return t.collect();
        });
      }),
      t
    );
  })(),
  tt = (function () {
    function t(t, e, n) {
      void 0 === n && (n = !1),
        (this.collector = t),
        (this.onChange = e),
        n && this.collect();
    }
    return (
      (t.prototype.collect = function () {
        try {
          var t = this.collector();
          i(t, this.collected) ||
            ((this.collected = t),
            this.onChange && this.onChange(this.collected));
        } catch (t) {
          console.warn(t);
        }
      }),
      t
    );
  })(),
  et = function (t) {
    var e = t.getBoundingClientRect(),
      n = e.x,
      r = e.y,
      o = e.top,
      i = e.left,
      a = e.bottom,
      s = e.right,
      c = e.width,
      u = e.height,
      l = window.getComputedStyle(t),
      p = {
        left: parseInt(l.marginLeft),
        right: parseInt(l.marginRight),
        bottom: parseInt(l.marginBottom),
        top: parseInt(l.marginTop),
      },
      f = {
        left: parseInt(l.paddingLeft),
        right: parseInt(l.paddingRight),
        bottom: parseInt(l.paddingBottom),
        top: parseInt(l.paddingTop),
      };
    return {
      x: n,
      y: r,
      top: o,
      left: i,
      bottom: a,
      right: s,
      width: c,
      height: u,
      outerWidth: Math.round(c + p.left + p.right),
      outerHeight: Math.round(u + p.top + p.bottom),
      margin: p,
      padding: f,
      inFlow:
        t.parentElement &&
        !!(function (e) {
          var n = getComputedStyle(e);
          if (
            !(
              (l.overflow && 'visible' !== l.overflow) ||
              'none' !== n.float ||
              'grid' === n.display ||
              ('flex' === n.display && 'column' !== n['flex-direction'])
            )
          ) {
            switch (l.position) {
              case 'static':
              case 'relative':
                break;
              default:
                return;
            }
            switch (t.tagName) {
              case 'TR':
              case 'TBODY':
              case 'THEAD':
              case 'TFOOT':
                return !0;
            }
            switch (l.display) {
              case 'block':
              case 'list-item':
              case 'table':
              case 'flex':
              case 'grid':
                return !0;
            }
          }
        })(t.parentElement),
    };
  };
function nt(t, e) {
  var n = t.subscribe,
    r = t.getState,
    o = t.actions,
    i = t.query,
    a = c(!0),
    s = c(null),
    u = c(e);
  u.current = e;
  var d = l(
    function (t) {
      return J(J({}, t), { actions: o, query: i });
    },
    [o, i]
  );
  a.current && e && ((s.current = e(r(), i)), (a.current = !1));
  var h = f(d(s.current)),
    y = h[0],
    g = h[1];
  return (
    p(
      function () {
        var t;
        return (
          u.current &&
            (t = n(
              function (t) {
                return u.current(t, i);
              },
              function (t) {
                g(d(t));
              }
            )),
          function () {
            t && t();
          }
        );
      },
      [d, i, n]
    ),
    y
  );
}
var rt,
  ot = function (t) {
    return (
      Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 5)
    );
  },
  it = (function () {
    function t() {
      (this.elementIdMap = new WeakMap()), (this.registry = new Map());
    }
    return (
      (t.prototype.getElementId = function (t) {
        var e = this.elementIdMap.get(t);
        if (e) return e;
        var n = ot();
        return this.elementIdMap.set(t, n), n;
      }),
      (t.prototype.getConnectorId = function (t, e) {
        return e + '--' + this.getElementId(t);
      }),
      (t.prototype.register = function (t, e) {
        var n = this,
          r = this.getByElement(t, e.name);
        if (r) {
          if (y(e.required, r.required)) return r;
          this.getByElement(t, e.name).disable();
        }
        var o = null,
          i = this.getConnectorId(t, e.name);
        return (
          this.registry.set(i, {
            id: i,
            required: e.required,
            enable: function () {
              o && o(), (o = e.connector(t, e.required, e.options));
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
      (t.prototype.get = function (t) {
        return this.registry.get(t);
      }),
      (t.prototype.remove = function (t) {
        var e = this.get(t);
        e && (e.disable(), this.registry.delete(e.id));
      }),
      (t.prototype.enable = function () {
        this.registry.forEach(function (t) {
          t.enable();
        });
      }),
      (t.prototype.disable = function () {
        this.registry.forEach(function (t) {
          t.disable();
        });
      }),
      (t.prototype.getByElement = function (t, e) {
        return this.get(this.getConnectorId(t, e));
      }),
      (t.prototype.removeByElement = function (t, e) {
        return this.remove(this.getConnectorId(t, e));
      }),
      (t.prototype.clear = function () {
        this.disable(),
          (this.elementIdMap = new WeakMap()),
          (this.registry = new Map());
      }),
      t
    );
  })();
!(function (t) {
  (t[(t.HandlerDisabled = 0)] = 'HandlerDisabled'),
    (t[(t.HandlerEnabled = 1)] = 'HandlerEnabled');
})(rt || (rt = {}));
var at = (function () {
    function t(t) {
      (this.registry = new it()),
        (this.subscribers = new Set()),
        (this.options = t);
    }
    return (
      (t.prototype.listen = function (t) {
        var e = this;
        return (
          this.subscribers.add(t),
          function () {
            return e.subscribers.delete(t);
          }
        );
      }),
      (t.prototype.disable = function () {
        this.onDisable && this.onDisable(),
          this.registry.disable(),
          this.subscribers.forEach(function (t) {
            t(rt.HandlerDisabled);
          });
      }),
      (t.prototype.enable = function () {
        this.onEnable && this.onEnable(),
          this.registry.enable(),
          this.subscribers.forEach(function (t) {
            t(rt.HandlerEnabled);
          });
      }),
      (t.prototype.cleanup = function () {
        this.disable(), this.subscribers.clear(), this.registry.clear();
      }),
      (t.prototype.addCraftEventListener = function (t, e, n, r) {
        var o = function (r) {
          (function (t, e, n) {
            t.craft ||
              (t.craft = {
                stopPropagation: function () {},
                blockedEvents: {},
              });
            for (
              var r = (t.craft && t.craft.blockedEvents[e]) || [], o = 0;
              o < r.length;
              o++
            ) {
              var i = r[o];
              if (n !== i && n.contains(i)) return !0;
            }
            return !1;
          })(r, e, t) ||
            ((r.craft.stopPropagation = function () {
              r.craft.blockedEvents[e] || (r.craft.blockedEvents[e] = []),
                r.craft.blockedEvents[e].push(t);
            }),
            n(r));
        };
        return (
          t.addEventListener(e, o, r),
          function () {
            return t.removeEventListener(e, o, r);
          }
        );
      }),
      (t.prototype.createConnectorsUsage = function () {
        var t = this,
          e = this.handlers(),
          n = new Set();
        return {
          connectors: Object.entries(e).reduce(function (e, r) {
            var o,
              i = r[0],
              a = r[1];
            return J(
              J({}, e),
              (((o = {})[i] = function (e, r, o) {
                var s = t.registry.register(e, {
                  required: r,
                  name: i,
                  options: o,
                  connector: a,
                });
                return n.add(s.id), e;
              }),
              o)
            );
          }, {}),
          cleanup: function () {
            n.forEach(function (e) {
              return t.registry.remove(e);
            });
          },
        };
      }),
      (t.prototype.derive = function (t, e) {
        return new t(this, e);
      }),
      (t.prototype.createProxyHandlers = function (t, e) {
        var n = [],
          r = t.handlers();
        return (
          e(
            new Proxy(r, {
              get: function (t, e, o) {
                return e in r == 0
                  ? Reflect.get(t, e, o)
                  : function (t) {
                      for (var o = [], i = 1; i < arguments.length; i++)
                        o[i - 1] = arguments[i];
                      var a = r[e].apply(r, K([t], o));
                      a && n.push(a);
                    };
              },
            })
          ),
          function () {
            n.forEach(function (t) {
              t();
            });
          }
        );
      }),
      (t.prototype.reflect = function (t) {
        return this.createProxyHandlers(this, t);
      }),
      t
    );
  })(),
  st = (function (t) {
    function e(e, n) {
      var r = t.call(this, n) || this;
      return (
        (r.derived = e),
        (r.options = n),
        (r.unsubscribeParentHandlerListener = r.derived.listen(function (t) {
          switch (t) {
            case rt.HandlerEnabled:
              return r.enable();
            case rt.HandlerDisabled:
              return r.disable();
            default:
              return;
          }
        })),
        r
      );
    }
    return (
      (function (t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Class extends value ' + String(e) + ' is not a constructor or null'
          );
        function n() {
          this.constructor = t;
        }
        z(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      })(e, t),
      (e.prototype.inherit = function (t) {
        return this.createProxyHandlers(this.derived, t);
      }),
      (e.prototype.cleanup = function () {
        t.prototype.cleanup.call(this), this.unsubscribeParentHandlerListener();
      }),
      e
    );
  })(at);
function ct(t, e) {
  e && ('function' == typeof t ? t(e) : (t.current = e));
}
function ut(t, e) {
  var n = t.ref;
  return (
    g(
      'string' != typeof n,
      'Cannot connect to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
    ),
    d(
      t,
      n
        ? {
            ref: function (t) {
              ct(n, t), ct(e, t);
            },
          }
        : { ref: e }
    )
  );
}
function lt(t) {
  if ('string' != typeof t.type) throw new Error();
}
function pt(t) {
  return function (e) {
    void 0 === e && (e = null);
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (!h(e)) {
      if (!e) return;
      var o = e;
      return o && t.apply(void 0, K([o], n)), o;
    }
    var i = e;
    return lt(i), ut(i, t);
  };
}
function ft(t) {
  return Object.keys(t).reduce(function (e, n) {
    return (
      (e[n] = pt(function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return t[n].apply(t, e);
      })),
      e
    );
  }, {});
}
var dt = function (t) {
    var e = t.parentDom,
      n = a.createElement('div', {
        style: J(
          {
            position: 'fixed',
            display: 'block',
            opacity: 1,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            zIndex: 99999,
          },
          t.style
        ),
      });
    return e && e.ownerDocument !== document
      ? m.createPortal(n, e.ownerDocument.body)
      : n;
  },
  ht = function (t) {
    p(t, []);
  },
  yt = function (t, e) {
    var n =
        'Deprecation warning: ' + t + ' will be deprecated in future relases.',
      r = e.suggest,
      o = e.doc;
    r && (n += ' Please use ' + r + ' instead.'),
      o && (n += '(' + o + ')'),
      console.warn(n);
  },
  gt = function () {
    return 'undefined' != typeof window;
  },
  mt = function () {
    return gt() && /Linux/i.test(window.navigator.userAgent);
  },
  vt = function () {
    return gt() && /Chrome/i.test(window.navigator.userAgent);
  };
export {
  O as AFTER,
  R as BEFORE,
  b as DEPRECATED_ROOT_NODE,
  st as DerivedEventHandlers,
  U as ERROR_CANNOT_DRAG,
  G as ERROR_DELETE_TOP_LEVEL_NODE,
  B as ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER,
  C as ERROR_DUPLICATE_NODEID,
  j as ERROR_INFINITE_CANVAS,
  I as ERROR_INVALID_NODEID,
  q as ERROR_INVALID_NODE_ID,
  H as ERROR_MISSING_PLACEHOLDER_PLACEMENT,
  P as ERROR_MOVE_CANNOT_DROP,
  x as ERROR_MOVE_INCOMING_PARENT,
  A as ERROR_MOVE_NONCANVAS_CHILD,
  N as ERROR_MOVE_OUTGOING_PARENT,
  M as ERROR_MOVE_ROOT_NODE,
  k as ERROR_MOVE_TOP_LEVEL_NODE,
  S as ERROR_MOVE_TO_DESCENDANT,
  L as ERROR_MOVE_TO_NONCANVAS_PARENT,
  T as ERROR_NOPARENT,
  _ as ERROR_NOT_IN_RESOLVER,
  Y as ERROR_RESOLVER_NOT_AN_OBJECT,
  D as ERROR_TOP_LEVEL_ELEMENT_NO_ID,
  F as ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT,
  W as ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT,
  rt as EventHandlerUpdates,
  at as EventHandlers,
  w as FOOTER,
  Q as HISTORY_ACTIONS,
  V as History,
  E as LOGO,
  v as ROOT_NODE,
  dt as RenderIndicator,
  ut as cloneWithRef,
  Z as createQuery,
  yt as deprecationWarning,
  et as getDOMInfo,
  ot as getRandomId,
  vt as isChromium,
  gt as isClientSide,
  mt as isLinux,
  nt as useCollector,
  ht as useEffectOnce,
  X as useMethods,
  ft as wrapConnectorHooks,
  pt as wrapHookToRecognizeElement,
};
