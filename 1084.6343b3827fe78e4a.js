"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[1084], {
    71084: (v,c,t)=>{
        var i = t(35461);
        c.wT = i.RecaptchaComponent;
        t(64556);
        var d = t(53780);
        c.a = d.RecaptchaModule,
        t(97853),
        t(16616);
        t(35018)
    }
    ,
    77416: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        }),
        t(83668),
        t(35461);
        var s = t(83668)
          , r = (t(35461),
        function() {
            function p() {}
            return p.\u0275fac = function(n) {
                return new (n || p)
            }
            ,
            p.\u0275mod = s.\u0275\u0275defineNgModule({
                type: p
            }),
            p.\u0275inj = s.\u0275\u0275defineInjector({}),
            p
        }());
        c.RecaptchaCommonModule = r
    }
    ,
    64556: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var a = t(86019)
          , i = t(83668)
          , s = t(39747);
        function d(o, n, e, u, h) {
            window.ng2recaptchaloaded = function() {
                n(grecaptcha)
            }
            ;
            var l = document.createElement("script");
            l.innerHTML = "",
            l.src = (u || "https://www.google.com/recaptcha/api.js") + "?render=" + o + "&onload=ng2recaptchaloaded" + e,
            h && (l.nonce = h),
            l.async = !0,
            l.defer = !0,
            document.head.appendChild(l)
        }
        c.RECAPTCHA_LANGUAGE = new i.InjectionToken("recaptcha-language"),
        c.RECAPTCHA_BASE_URL = new i.InjectionToken("recaptcha-base-url"),
        c.RECAPTCHA_NONCE = new i.InjectionToken("recaptcha-nonce-tag"),
        c.loadScript = d;
        var r = t(83668)
          , p = function() {
            function o(n, e, u, h) {
                this.platformId = n,
                this.language = e,
                this.baseUrl = u,
                this.nonce = h,
                this.init(),
                this.ready = a.isPlatformBrowser(this.platformId) ? o.ready.asObservable() : s.of()
            }
            return o.prototype.init = function() {
                if (!o.ready && a.isPlatformBrowser(this.platformId)) {
                    var n = new s.BehaviorSubject(null);
                    o.ready = n,
                    d("explicit", function(u) {
                        return n.next(u)
                    }, this.language ? "&hl=" + this.language : "", this.baseUrl, this.nonce)
                }
            }
            ,
            o.ready = null,
            o.ctorParameters = function() {
                return [{
                    type: void 0,
                    decorators: [{
                        type: i.Inject,
                        args: [i.PLATFORM_ID]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Optional
                    }, {
                        type: i.Inject,
                        args: [c.RECAPTCHA_LANGUAGE]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Optional
                    }, {
                        type: i.Inject,
                        args: [c.RECAPTCHA_BASE_URL]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Optional
                    }, {
                        type: i.Inject,
                        args: [c.RECAPTCHA_NONCE]
                    }]
                }]
            }
            ,
            o.\u0275fac = function(e) {
                return new (e || o)(r.\u0275\u0275inject(i.PLATFORM_ID),r.\u0275\u0275inject(c.RECAPTCHA_LANGUAGE, 8),r.\u0275\u0275inject(c.RECAPTCHA_BASE_URL, 8),r.\u0275\u0275inject(c.RECAPTCHA_NONCE, 8))
            }
            ,
            o.\u0275prov = r.\u0275\u0275defineInjectable({
                token: o,
                factory: function(n) {
                    return o.\u0275fac(n)
                }
            }),
            o
        }();
        c.RecaptchaLoaderService = p
    }
    ,
    97853: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var a = t(83668);
        c.RECAPTCHA_SETTINGS = new a.InjectionToken("recaptcha-settings")
    }
    ,
    16616: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        }),
        t(83668);
        var i = t(35018)
          , s = t(83668)
          , d = function() {
            function r() {}
            return r.\u0275fac = function(o) {
                return new (o || r)
            }
            ,
            r.\u0275mod = s.\u0275\u0275defineNgModule({
                type: r
            }),
            r.\u0275inj = s.\u0275\u0275defineInjector({
                providers: [i.ReCaptchaV3Service]
            }),
            r
        }();
        c.RecaptchaV3Module = d
    }
    ,
    35018: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var a = t(86019)
          , i = t(83668)
          , s = t(39747)
          , d = t(64556);
        c.RECAPTCHA_V3_SITE_KEY = new i.InjectionToken("recaptcha-v3-site-key");
        var r = t(83668)
          , p = function() {
            function o(n, e, u, h, l) {
                var f = this;
                this.onLoadComplete = function(y) {
                    f.grecaptcha = y,
                    f.actionBacklog && f.actionBacklog.length > 0 && (f.actionBacklog.forEach(function(g) {
                        return f.executeActionWithSubject(g[0], g[1])
                    }),
                    f.actionBacklog = void 0)
                }
                ,
                this.zone = n,
                this.isBrowser = a.isPlatformBrowser(u),
                this.siteKey = e,
                this.nonce = l,
                this.baseUrl = h,
                this.init()
            }
            return Object.defineProperty(o.prototype, "onExecute", {
                get: function() {
                    return this.onExecuteSubject || (this.onExecuteSubject = new s.Subject,
                    this.onExecuteObservable = this.onExecuteSubject.asObservable()),
                    this.onExecuteObservable
                },
                enumerable: !0,
                configurable: !0
            }),
            o.prototype.execute = function(n) {
                var e = new s.Subject;
                return this.isBrowser && (this.grecaptcha ? this.executeActionWithSubject(n, e) : (this.actionBacklog || (this.actionBacklog = []),
                this.actionBacklog.push([n, e]))),
                e.asObservable()
            }
            ,
            o.prototype.executeActionWithSubject = function(n, e) {
                var u = this;
                this.zone.runOutsideAngular(function() {
                    u.grecaptcha.execute(u.siteKey, {
                        action: n
                    }).then(function(h) {
                        u.zone.run(function() {
                            e.next(h),
                            e.complete(),
                            u.onExecuteSubject && u.onExecuteSubject.next({
                                action: n,
                                token: h
                            })
                        })
                    })
                })
            }
            ,
            o.prototype.init = function() {
                this.isBrowser && ("grecaptcha"in window ? this.grecaptcha = grecaptcha : d.loadScript(this.siteKey, this.onLoadComplete, "", this.baseUrl, this.nonce))
            }
            ,
            o.ctorParameters = function() {
                return [{
                    type: i.NgZone
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Inject,
                        args: [c.RECAPTCHA_V3_SITE_KEY]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Inject,
                        args: [i.PLATFORM_ID]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Optional
                    }, {
                        type: i.Inject,
                        args: [d.RECAPTCHA_BASE_URL]
                    }]
                }, {
                    type: void 0,
                    decorators: [{
                        type: i.Optional
                    }, {
                        type: i.Inject,
                        args: [d.RECAPTCHA_NONCE]
                    }]
                }]
            }
            ,
            o.\u0275fac = function(e) {
                return new (e || o)(r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(c.RECAPTCHA_V3_SITE_KEY),r.\u0275\u0275inject(i.PLATFORM_ID),r.\u0275\u0275inject(d.RECAPTCHA_BASE_URL, 8),r.\u0275\u0275inject(d.RECAPTCHA_NONCE, 8))
            }
            ,
            o.\u0275prov = r.\u0275\u0275defineInjectable({
                token: o,
                factory: function(n) {
                    return o.\u0275fac(n)
                }
            }),
            o
        }();
        c.ReCaptchaV3Service = p
    }
    ,
    35461: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        var a = t(83668)
          , i = t(64556)
          , s = t(97853)
          , d = t(83668)
          , r = t(64556)
          , p = 0
          , o = function() {
            function n(e, u, h, l) {
                this.elementRef = e,
                this.loader = u,
                this.zone = h,
                this.id = "ngrecaptcha-" + p++,
                this.resolved = new a.EventEmitter,
                l && (this.siteKey = l.siteKey,
                this.theme = l.theme,
                this.type = l.type,
                this.size = l.size,
                this.badge = l.badge)
            }
            return n.prototype.ngAfterViewInit = function() {
                var e = this;
                this.subscription = this.loader.ready.subscribe(function(u) {
                    null != u && u.render instanceof Function && (e.grecaptcha = u,
                    e.renderRecaptcha())
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.grecaptchaReset(),
                this.subscription && this.subscription.unsubscribe()
            }
            ,
            n.prototype.execute = function() {
                "invisible" === this.size && (null != this.widget ? this.grecaptcha.execute(this.widget) : this.executeRequested = !0)
            }
            ,
            n.prototype.reset = function() {
                null != this.widget && (this.grecaptcha.getResponse(this.widget) && this.resolved.emit(null),
                this.grecaptchaReset())
            }
            ,
            n.prototype.expired = function() {
                this.resolved.emit(null)
            }
            ,
            n.prototype.captchaResponseCallback = function(e) {
                this.resolved.emit(e)
            }
            ,
            n.prototype.grecaptchaReset = function() {
                var e = this;
                null != this.widget && this.zone.runOutsideAngular(function() {
                    return e.grecaptcha.reset(e.widget)
                })
            }
            ,
            n.prototype.renderRecaptcha = function() {
                var e = this;
                this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
                    badge: this.badge,
                    callback: function(u) {
                        e.zone.run(function() {
                            return e.captchaResponseCallback(u)
                        })
                    },
                    "expired-callback": function() {
                        e.zone.run(function() {
                            return e.expired()
                        })
                    },
                    sitekey: this.siteKey,
                    size: this.size,
                    tabindex: this.tabIndex,
                    theme: this.theme,
                    type: this.type
                }),
                !0 === this.executeRequested && (this.executeRequested = !1,
                this.execute())
            }
            ,
            n.ctorParameters = function() {
                return [{
                    type: a.ElementRef
                }, {
                    type: i.RecaptchaLoaderService
                }, {
                    type: a.NgZone
                }, {
                    type: void 0,
                    decorators: [{
                        type: a.Optional
                    }, {
                        type: a.Inject,
                        args: [s.RECAPTCHA_SETTINGS]
                    }]
                }]
            }
            ,
            n.propDecorators = {
                id: [{
                    type: a.Input
                }, {
                    type: a.HostBinding,
                    args: ["attr.id"]
                }],
                siteKey: [{
                    type: a.Input
                }],
                theme: [{
                    type: a.Input
                }],
                type: [{
                    type: a.Input
                }],
                size: [{
                    type: a.Input
                }],
                tabIndex: [{
                    type: a.Input
                }],
                badge: [{
                    type: a.Input
                }],
                resolved: [{
                    type: a.Output
                }]
            },
            n.\u0275fac = function(u) {
                return new (u || n)(d.\u0275\u0275directiveInject(d.ElementRef),d.\u0275\u0275directiveInject(r.RecaptchaLoaderService),d.\u0275\u0275directiveInject(d.NgZone),d.\u0275\u0275directiveInject(s.RECAPTCHA_SETTINGS, 8))
            }
            ,
            n.\u0275cmp = d.\u0275\u0275defineComponent({
                type: n,
                selectors: [["re-captcha"]],
                hostVars: 1,
                hostBindings: function(u, h) {
                    2 & u && d.\u0275\u0275attribute("id", h.id)
                },
                inputs: {
                    id: "id",
                    siteKey: "siteKey",
                    theme: "theme",
                    type: "type",
                    size: "size",
                    badge: "badge",
                    tabIndex: "tabIndex"
                },
                outputs: {
                    resolved: "resolved"
                },
                exportAs: ["reCaptcha"],
                decls: 0,
                vars: 0,
                template: function(u, h) {},
                encapsulation: 2
            }),
            n
        }();
        c.RecaptchaComponent = o
    }
    ,
    53780: (v,c,t)=>{
        Object.defineProperty(c, "__esModule", {
            value: !0
        }),
        t(83668);
        var i = t(77416)
          , s = t(64556)
          , r = (t(35461),
        t(83668))
          , n = (t(77416),
        t(35461),
        function() {
            function e() {}
            return e.forRoot = function() {
                return e
            }
            ,
            e.\u0275fac = function(h) {
                return new (h || e)
            }
            ,
            e.\u0275mod = r.\u0275\u0275defineNgModule({
                type: e
            }),
            e.\u0275inj = r.\u0275\u0275defineInjector({
                providers: [s.RecaptchaLoaderService],
                imports: [[i.RecaptchaCommonModule]]
            }),
            e
        }());
        c.RecaptchaModule = n
    }
}]);
