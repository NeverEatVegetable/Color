System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventEmitter, EventHandlers, _crd;

  _export({
    EventEmitter: void 0,
    EventHandlers: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d127fazAwFCj7NqDuUWEzfW", "EventEmitter", undefined);

      /**
       * 多事件的订阅和触发
       */
      _export("EventEmitter", EventEmitter = class EventEmitter {
        constructor() {
          this.eventHandlers = void 0;
          this.eventHandlers = new Map();
        }
        /**
         * 注册事件
         * @param event 
         * @param handler 
         * @param target 事件处理器的this指向
         */


        on(event, handler, target) {
          var handlers = this.eventHandlers.get(event);

          if (!handlers) {
            handlers = new EventHandlers();
            this.eventHandlers.set(event, handlers);
          }

          handlers.addHandler(handler, target);
        }
        /**
         * 注销一个事件
         * @param event 
         * @param handler 
         */


        off(event, handler) {
          var handlers = this.eventHandlers.get(event);

          if (handlers) {
            handlers.removeHandler(handler);

            if (handlers.count() <= 0) {
              this.eventHandlers.delete(event);
            }
          }
        }
        /**
         * 触发一个事件的所有处理器,按注册顺序触发
         * @param event 
         * @param args 
         * @returns true if emit 
         */


        emit(event) {
          var handlers = this.eventHandlers.get(event);

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (handlers) return handlers.emit(...args);
          return false;
        }
        /**
         * 移除所有事件和处理器
         */


        removeAllListeners() {
          for (var eh of this.eventHandlers) {
            eh[1].removeAllHandlers();
          }

          this.eventHandlers.clear();
        }

      });
      /**
       * 事件处理器
       */


      /**
       * 单事件的多处理器订阅和触发
       */
      _export("EventHandlers", EventHandlers = class EventHandlers {
        /**
         * 构造
         */
        constructor() {
          this.handlers = [];
        }
        /**
         * Counts event handlers
         * @returns  
         */


        count() {
          return this.handlers.length;
        }
        /**
         * 添加处理器
         *
         * @param handler
         */


        addHandler(handler, target) {
          this.handlers.push({
            handler,
            target
          });
        }
        /**
         * 移出处理器
         *
         * @param handler
         */


        removeHandler(handler) {
          for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i].handler === handler) {
              this.handlers.splice(i, 1);
              return;
            }
          }
        }
        /**
         * Removes all handlers
         */


        removeAllHandlers() {
          this.handlers = [];
        }
        /**
         * 触发所有处理器, 有处理器则返回true
         *
         * @param args
         */


        emit() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          for (var i = 0; i < this.handlers.length; i++) {
            var _this$handlers$i$targ;

            this.handlers[i].handler.call((_this$handlers$i$targ = this.handlers[i].target) != null ? _this$handlers$i$targ : this, ...args);
          }

          return this.handlers.length > 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be19d9619b49a9afb710650bd350b346c665cc26.js.map