"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[635], {
    10635: (H,p,r)=>{
        r.d(p, {
            K: ()=>R
        });
        var t = r(83668)
          , m = r(35902)
          , l = r(69279)
          , s = r(86019)
          , c = r(7336);
        function d(n, i) {
            1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275text(1, "s"),
            t.\u0275\u0275elementContainerEnd())
        }
        function _(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 9),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Day"),
            t.\u0275\u0275template(4, d, 2, 0, "ng-container", 8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.daysDisplay, " "),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", e.daysDisplay > 1)
            }
        }
        function u(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 10),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Hrs"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.hoursDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.hoursDisplay, " ")
            }
        }
        function g(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 11),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Min"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.minutesDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.minutesDisplay <= 59 ? e.minutesDisplay : "00", " ")
            }
        }
        function h(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span"),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Sec"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.secondsDisplay <= 59 ? e.secondsDisplay : "00", " ")
            }
        }
        function x(n, i) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, _, 5, 2, "span", 5),
            t.\u0275\u0275template(2, u, 4, 3, "span", 6),
            t.\u0275\u0275template(3, g, 4, 3, "span", 7),
            t.\u0275\u0275template(4, h, 4, 1, "span", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.daysDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.hoursDisplay),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.minutesDisplay),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.secondsDisplay)
            }
        }
        function f(n, i) {
            1 & n && (t.\u0275\u0275elementStart(0, "span", 9),
            t.\u0275\u0275text(1, " 00 "),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Day"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        function y(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 10),
            t.\u0275\u0275text(1, " 00 "),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Hrs"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.hoursDisplay < 1 && e.customized)
            }
        }
        function C(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 11),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Min"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.minutesDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.minutesDisplay <= 59 ? e.minutesDisplay : "00", " ")
            }
        }
        function v(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span"),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Sec"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.secondsDisplay <= 59 ? e.secondsDisplay : "00", " ")
            }
        }
        function D(n, i) {
            if (1 & n && (t.\u0275\u0275template(0, f, 4, 0, "span", 5),
            t.\u0275\u0275template(1, y, 4, 2, "span", 6),
            t.\u0275\u0275template(2, C, 4, 3, "span", 7),
            t.\u0275\u0275template(3, v, 4, 1, "span", 8)),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275property("ngIf", e.daysDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.hoursDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.minutesDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.secondsDisplay)
            }
        }
        const o = function(n, i, e, a) {
            return {
                "one-minute-left": n,
                "default-time": i,
                "background-none": e,
                "second-left": a
            }
        };
        function T(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 2),
            t.\u0275\u0275template(1, x, 5, 4, "ng-container", 3),
            t.\u0275\u0275template(2, D, 4, 4, "ng-template", null, 4, t.\u0275\u0275templateRefExtractor),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275reference(3)
                  , a = t.\u0275\u0275nextContext();
                t.\u0275\u0275classProp("time-per-question", a.customized),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction4(5, o, a.timerAlert, !a.timerAlert, a.backgroundNone, a.minTimeAlert)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", a.daysDisplay > 0 || a.hoursDisplay > 0 || a.minutesDisplay > 0 || a.secondsDisplay > 0)("ngIfElse", e)
            }
        }
        function E(n, i) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 14),
            t.\u0275\u0275element(1, "img", 15),
            t.\u0275\u0275elementEnd())
        }
        function w(n, i) {
            1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275text(1, "s"),
            t.\u0275\u0275elementContainerEnd())
        }
        function M(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 9),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Day"),
            t.\u0275\u0275template(4, w, 2, 0, "ng-container", 8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.daysDisplay, " "),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", e.daysDisplay > 1)
            }
        }
        function I(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 10),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Hrs"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.hoursDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.hoursDisplay, " ")
            }
        }
        function P(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 11),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Min"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.minutesDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.minutesDisplay <= 59 ? e.minutesDisplay : "00", " ")
            }
        }
        function S(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span"),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Sec"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.secondsDisplay <= 59 ? e.secondsDisplay : "00", " ")
            }
        }
        function O(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div"),
            t.\u0275\u0275template(1, M, 5, 2, "span", 5),
            t.\u0275\u0275template(2, I, 4, 3, "span", 6),
            t.\u0275\u0275template(3, P, 4, 3, "span", 7),
            t.\u0275\u0275template(4, S, 4, 1, "span", 8),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.daysDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.hoursDisplay),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.minutesDisplay),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.secondsDisplay)
            }
        }
        function b(n, i) {
            1 & n && (t.\u0275\u0275elementStart(0, "span", 9),
            t.\u0275\u0275text(1, " 00 "),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Day"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        function k(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 10),
            t.\u0275\u0275text(1, " 00 "),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Hrs"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.hoursDisplay < 1 && e.customized)
            }
        }
        function z(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 11),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Min"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275classProp("hide", e.minutesDisplay < 1 && e.customized),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.minutesDisplay <= 59 ? e.minutesDisplay : "00", " ")
            }
        }
        function A(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span"),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementStart(2, "em"),
            t.\u0275\u0275text(3, "Sec"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.secondsDisplay <= 59 ? e.secondsDisplay : "00", " ")
            }
        }
        function L(n, i) {
            if (1 & n && (t.\u0275\u0275template(0, b, 4, 0, "span", 5),
            t.\u0275\u0275template(1, k, 4, 2, "span", 6),
            t.\u0275\u0275template(2, z, 4, 3, "span", 7),
            t.\u0275\u0275template(3, A, 4, 1, "span", 8)),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275property("ngIf", e.daysDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.hoursDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.minutesDisplay > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.secondsDisplay)
            }
        }
        function W(n, i) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275template(1, E, 2, 0, "div", 13),
            t.\u0275\u0275elementStart(2, "div"),
            t.\u0275\u0275elementStart(3, "p"),
            t.\u0275\u0275text(4),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275template(5, O, 5, 4, "div", 3),
            t.\u0275\u0275template(6, L, 4, 4, "ng-template", null, 4, t.\u0275\u0275templateRefExtractor),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275reference(7)
                  , a = t.\u0275\u0275nextContext();
                t.\u0275\u0275classProp("time-per-question", a.customized),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction4(7, o, a.timerAlert, !a.timerAlert, a.backgroundNone, a.minTimeAlert)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", a.isLoader),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate1("", a.type, " Time Remaining"),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", a.daysDisplay > 0 || a.hoursDisplay > 0 || a.minutesDisplay > 0 || a.secondsDisplay > 0)("ngIfElse", e)
            }
        }
        let R = (()=>{
            class n {
                constructor() {
                    this.durationSub = new m.y,
                    this.customized = !1,
                    this.durationChange = new t.EventEmitter,
                    this.updateTime = new t.EventEmitter,
                    this.timerEnd = new t.EventEmitter,
                    this.withIcon = !1,
                    this.isLoader = !1,
                    this.type = "",
                    this.ticks = 0,
                    this.initialDuration = 0,
                    this.timerStartedAt = null,
                    this.minutesDisplay = 0,
                    this.hoursDisplay = 0,
                    this.secondsDisplay = 0,
                    this.daysDisplay = 0,
                    this.timerAlert = !1,
                    this.minTimeAlert = !1,
                    this.worker = null
                }
                ngOnChanges(e) {
                    e.duration && (this.initialDuration = this.duration)
                }
                ngOnInit() {
                    "undefined" != typeof Worker && (this.worker = new Worker(r.tu(new URL(r.p + r.u(4647),r.b)),{
                        type: void 0
                    })),
                    this.durationSub && (this.durationSubscription = this.durationSub.subscribe(e=>{
                        this.sub && this.sub.unsubscribe(),
                        this.initialDuration = e,
                        this.duration = e,
                        this.startTimer()
                    }
                    )),
                    this.initialDuration = this.duration,
                    this.initialDuration && this.startTimer()
                }
                ngOnDestroy() {
                    this.durationSubscription && this.durationSubscription.unsubscribe(),
                    this.sub && this.sub.unsubscribe(),
                    this.worker && this.worker.terminate()
                }
                alertTimer() {
                    this.daysDisplay < 1 && this.hoursDisplay < 1 && this.minutesDisplay < 1 && (this.timerAlert = !0),
                    this.daysDisplay < 1 && this.hoursDisplay < 1 && this.minutesDisplay < 1 && this.secondsDisplay < 11 && (this.minTimeAlert = !0)
                }
                startTimer() {
                    if (this.worker)
                        this.worker.onmessage = ({data: e})=>{
                            this.ticks = e.ticks,
                            this.handleTimerWorkerMessage(this.ticks)
                        }
                        ,
                        this.worker.postMessage("startTimerThread");
                    else {
                        console.log("Web Workers are not supported...., fallback to normal methods..");
                        const e = (0,
                        l.H)(1, 1e3);
                        this.sub = e.subscribe(a=>{
                            this.ticks = a,
                            this.handleTimerWorkerMessage(this.ticks)
                        }
                        )
                    }
                }
                handleTimerWorkerMessage(e) {
                    this.duration - e <= 0 && (this.timerEnd.emit(!0),
                    this.sub && this.sub.unsubscribe()),
                    this.secondsDisplay = this.getSeconds(e),
                    this.minutesDisplay = this.getMinutes(e),
                    this.hoursDisplay = this.getHours(e),
                    this.daysDisplay = this.getDays(e),
                    this.updateTime.emit(this.duration - e),
                    this.alertTimer()
                }
                getSeconds(e) {
                    return this.pad((this.duration - e) % 60)
                }
                getMinutes(e) {
                    return this.pad(Math.floor((this.duration - e) / 60) % 60)
                }
                getHours(e) {
                    return this.pad(Math.floor((this.duration - e) / 60 / 60) % 24)
                }
                getDays(e) {
                    return this.pad(Math.floor((this.duration - e) / 60 / 60 / 24))
                }
                pad(e) {
                    return e <= 9 ? "0" + e : e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-timer"]],
                inputs: {
                    duration: "duration",
                    durationSub: "durationSub",
                    backgroundNone: "backgroundNone",
                    customized: "customized",
                    withIcon: "withIcon",
                    isLoader: "isLoader",
                    type: "type"
                },
                outputs: {
                    durationChange: "durationChange",
                    updateTime: "updateTime",
                    timerEnd: "timerEnd"
                },
                features: [t.\u0275\u0275NgOnChangesFeature],
                decls: 2,
                vars: 2,
                consts: [["class", "timer-wrapper", 3, "ngClass", "time-per-question", 4, "ngIf"], ["class", "timer-wrapper with-icon", 3, "ngClass", "time-per-question", 4, "ngIf"], [1, "timer-wrapper", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["timesUp", ""], ["class", "colon hour", 4, "ngIf"], ["class", "colon minute", 3, "hide", 4, "ngIf"], ["class", "colon seconds", 3, "hide", 4, "ngIf"], [4, "ngIf"], [1, "colon", "hour"], [1, "colon", "minute"], [1, "colon", "seconds"], [1, "timer-wrapper", "with-icon", 3, "ngClass"], ["class", "icon-wrapper vertical-align", 4, "ngIf"], [1, "icon-wrapper", "vertical-align"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/manage-registrations/timer-icon.svg"]],
                template: function(e, a) {
                    1 & e && (t.\u0275\u0275template(0, T, 4, 10, "div", 0),
                    t.\u0275\u0275template(1, W, 8, 12, "div", 1)),
                    2 & e && (t.\u0275\u0275property("ngIf", !a.withIcon),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", a.withIcon))
                },
                directives: [s.NgIf, s.NgClass, c.H],
                styles: ['.timer-wrapper[_ngcontent-%COMP%]{color:#fff;font-weight:400;padding:0 4px;border-radius:3px;display:inline-block;line-height:22px;vertical-align:middle}.timer-wrapper.default-time[_ngcontent-%COMP%]{background:#a1a1a1}.timer-wrapper.one-minute-left[_ngcontent-%COMP%]{background:#f44336}.timer-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;margin-left:10px;margin-right:5px}.timer-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;text-align:center;margin:0 5px;font-weight:500;position:relative;min-width:20px}.timer-wrapper[_ngcontent-%COMP%]   span.colon[_ngcontent-%COMP%]:after{content:":";position:absolute;top:0px;right:-7px;font-size:15px}.timer-wrapper[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:10px;display:block;font-style:normal;line-height:5px;color:#eee;font-weight:400}.timer-wrapper.time-per-question[_ngcontent-%COMP%]{background:none;color:#5a6b87;line-height:normal;padding:0;font-size:14px;margin-top:-1px;margin-left:2px}.timer-wrapper.time-per-question.second-left[_ngcontent-%COMP%]{color:#d63625}.timer-wrapper.time-per-question[_ngcontent-%COMP%]   span.colon[_ngcontent-%COMP%]:after{right:-6px}.timer-wrapper.time-per-question[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#5a6b87;font-weight:500;margin-top:4px}.timer-wrapper.with-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;background:#fff;color:#484848;line-height:normal}.timer-wrapper.with-icon[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#48484880;margin-top:4px}.timer-wrapper.with-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#484848cc;font-size:11px;margin:0 0 2px 5px;font-weight:600;line-height:normal}.timer-wrapper.with-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;font-weight:600}.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%;border:5px solid #c3ddff;margin-right:3px;position:relative}.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:after{content:"";position:absolute;height:40px;width:40px;border:5px solid #0073E6;border-top:5px solid transparent;border-left:5px solid transparent;top:-5px;left:-5px;border-radius:50%}.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;height:16px;animation:timerLoader 3.4s infinite alternate}@media (max-width: 600px){.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{height:30px;width:30px}.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:after{height:inherit;width:inherit}.timer-wrapper.with-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:11px}}@keyframes timerLoader{0%,30%{transform:rotate(0)}80%,to{transform:rotate(180deg)}}.background-none[_ngcontent-%COMP%]{background:none!important}']
            }),
            n
        }
        )()
    }
}]);
