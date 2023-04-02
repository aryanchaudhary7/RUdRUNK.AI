"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[2114], {
    66611: (F,y,c)=>{
        c.d(y, {
            k: ()=>t
        });
        var C = c(86019)
          , i = c(57725)
          , v = c(85293)
          , M = c(23249)
          , f = c(83668);
        let t = (()=>{
            class h {
            }
            return h.\u0275fac = function(x) {
                return new (x || h)
            }
            ,
            h.\u0275mod = f.\u0275\u0275defineNgModule({
                type: h
            }),
            h.\u0275inj = f.\u0275\u0275defineInjector({
                imports: [[C.CommonModule, v.y, M.g, i.Bz]]
            }),
            h
        }
        )()
    }
    ,
    87448: (F,y,c)=>{
        c.d(y, {
            i: ()=>Wt
        });
        var C = c(39357)
          , i = c(45423)
          , v = c(41073)
          , M = c(95599)
          , f = c(67686)
          , t = c(83668)
          , h = c(53010)
          , w = c(44522)
          , x = c(57725)
          , u = c(86019);
        function P(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 3),
            t.\u0275\u0275element(1, "div", 4),
            t.\u0275\u0275elementStart(2, "div", 5),
            t.\u0275\u0275element(3, "div", 6),
            t.\u0275\u0275element(4, "div", 7),
            t.\u0275\u0275element(5, "div", 8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        const S = function() {
            return [1, 2, 3]
        };
        function E(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 1),
            t.\u0275\u0275template(1, P, 6, 0, "div", 2),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("ngForOf", t.\u0275\u0275pureFunction0(1, S)))
        }
        let T = (()=>{
            class n {
                constructor() {
                    this.viewport = "desktop",
                    this.className = "",
                    this.childClass = ""
                }
                onWindowResize() {
                    this.viewport = window.innerWidth <= 800 ? "mobile" : "desktop"
                }
                ngOnInit() {
                    this.onWindowResize()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-user-my-watchlist-loader"]],
                hostBindings: function(e, a) {
                    1 & e && t.\u0275\u0275listener("resize", function(l) {
                        return a.onWindowResize(l)
                    }, !1, t.\u0275\u0275resolveWindow)
                },
                inputs: {
                    type: "type",
                    className: "className",
                    childClass: "childClass"
                },
                decls: 1,
                vars: 1,
                consts: [[3, "ngIf"], [1, "e_featured", "j-between"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "img", "box"], [1, "cptn"], [1, "box", "h-20"], [1, "box", "h-15", "mt-10"], [1, "box", "h-15", "mt-5", "w-70"]],
                template: function(e, a) {
                    1 & e && t.\u0275\u0275template(0, E, 2, 2, "ng-template", 0),
                    2 & e && t.\u0275\u0275property("ngIf", "related" == a.type)
                },
                directives: [u.NgIf, u.NgForOf],
                styles: [".h-15[_ngcontent-%COMP%]{height:15px}.h-20[_ngcontent-%COMP%]{height:20px}.w-70[_ngcontent-%COMP%]{width:70%}.box[_ngcontent-%COMP%]{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;background:#f6f7f8;background:#eeeeee;background:linear-gradient(to right,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);background-size:800px 104px;position:relative}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@media (max-width: 800px){.e_featured[_ngcontent-%COMP%]{flex-wrap:wrap}}.item[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(33.333% - 10px);background:#fff;padding:20px;border-radius:8px;border:1px solid #F4F6F9}@media (max-width: 800px){.item[_ngcontent-%COMP%]{border:0;border-radius:0;border-bottom:1px solid #F6F8FA;margin:0 0 15px;padding:0 0 15px;width:100%}.item[_ngcontent-%COMP%]:last-child{margin-bottom:0;padding-bottom:0;border-bottom:0}}.img[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:8px}.cptn[_ngcontent-%COMP%]{width:calc(100% - 70px);padding-left:12px}"]
            }),
            n
        }
        )();
        var W = c(7336)
          , _ = c(6845)
          , g = c(74705);
        function r(n, o) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "span", 9),
                t.\u0275\u0275listener("click", function() {
                    const l = t.\u0275\u0275restoreView(e).$implicit;
                    return t.\u0275\u0275nextContext(2).switchMyComp(l.link)
                }),
                t.\u0275\u0275text(2),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = o.$implicit
                  , a = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275classProp("in", a.currentTab == e.link),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", e.name, " ")
            }
        }
        function m(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275element(1, "app-user-my-watchlist-loader", 13),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("type", "related"))
        }
        function p(n, o) {
            1 & n && t.\u0275\u0275elementContainer(0)
        }
        const d = function(n, o) {
            return {
                item: n,
                i: o
            }
        };
        function b(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, p, 1, 0, "ng-container", 18),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext()
                  , a = e.$implicit
                  , s = e.index;
                t.\u0275\u0275nextContext(4);
                const l = t.\u0275\u0275reference(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngTemplateOutlet", l)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, d, a, s))
            }
        }
        function I(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, b, 2, 5, "ng-container", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = o.index;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e < 3)
            }
        }
        function U(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275text(1, " You haven\u2019t registered in any competition. "),
            t.\u0275\u0275elementEnd())
        }
        const k = function() {
            return {
                search: "",
                page: 1
            }
        };
        function z(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 20),
            t.\u0275\u0275text(1, " View all "),
            t.\u0275\u0275elementStart(2, "em", 21),
            t.\u0275\u0275text(3, "keyboard_arrow_right"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n && t.\u0275\u0275property("routerLink", "/user/registrations/all/live")("queryParams", t.\u0275\u0275pureFunction0(2, k))
        }
        const L = function(n) {
            return {
                full: n
            }
        };
        function D(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 14),
            t.\u0275\u0275template(1, I, 2, 1, "ng-container", 15),
            t.\u0275\u0275template(2, U, 2, 0, "div", 16),
            t.\u0275\u0275template(3, z, 4, 3, "div", 17),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(5, L, (null == e.liveCompetition ? null : e.liveCompetition.length) < 2)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngForOf", e.liveCompetition)("ngForTrackBy", e.trackByFn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.liveCompetition && e.liveCompetition.length < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.liveCompetition && e.liveCompetition.length)
            }
        }
        function A(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, m, 2, 1, "div", 10),
            t.\u0275\u0275template(2, D, 4, 7, "div", 11),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.liveCompetition),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.liveCompetition)
            }
        }
        function B(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275element(1, "app-user-my-watchlist-loader", 13),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("type", "related"))
        }
        function R(n, o) {
            1 & n && t.\u0275\u0275elementContainer(0)
        }
        function V(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, R, 1, 0, "ng-container", 18),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext()
                  , a = e.$implicit
                  , s = e.index;
                t.\u0275\u0275nextContext(4);
                const l = t.\u0275\u0275reference(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngTemplateOutlet", l)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, d, a, s))
            }
        }
        function j(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, V, 2, 5, "ng-container", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = o.index;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e < 3)
            }
        }
        function N(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275text(1, " No opportunities in your watchlist! "),
            t.\u0275\u0275elementEnd())
        }
        const H = function() {
            return ["/user", "watchlist", "all", "live"]
        };
        function K(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 20),
            t.\u0275\u0275text(1, " View all "),
            t.\u0275\u0275elementStart(2, "em", 21),
            t.\u0275\u0275text(3, "keyboard_arrow_right"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n && t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(2, H))("queryParams", t.\u0275\u0275pureFunction0(3, k))
        }
        function $(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 14),
            t.\u0275\u0275template(1, j, 2, 1, "ng-container", 15),
            t.\u0275\u0275template(2, N, 2, 0, "div", 16),
            t.\u0275\u0275template(3, K, 4, 4, "div", 17),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(5, L, e.myWatchlist.length < 2)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngForOf", e.myWatchlist)("ngForTrackBy", e.trackByFn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myWatchlist && e.myWatchlist.length < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myWatchlist && e.myWatchlist.length > 2)
            }
        }
        function Y(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, B, 2, 1, "div", 10),
            t.\u0275\u0275template(2, $, 4, 7, "div", 11),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.myWatchlist),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myWatchlist)
            }
        }
        function Q(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275element(1, "app-user-my-watchlist-loader", 13),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("type", "related"))
        }
        function G(n, o) {
            1 & n && t.\u0275\u0275elementContainer(0)
        }
        function J(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, G, 1, 0, "ng-container", 18),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext()
                  , a = e.$implicit
                  , s = e.index;
                t.\u0275\u0275nextContext(4);
                const l = t.\u0275\u0275reference(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngTemplateOutlet", l)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, d, a, s))
            }
        }
        function X(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, J, 2, 5, "ng-container", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = o.index;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e < 3)
            }
        }
        function Z(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275text(1, " You haven't visited any opportunity yet! "),
            t.\u0275\u0275elementEnd())
        }
        const q = function() {
            return ["/user", "recently-viewed"]
        };
        function tt(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 23),
            t.\u0275\u0275text(1, " View all "),
            t.\u0275\u0275elementStart(2, "em", 21),
            t.\u0275\u0275text(3, "keyboard_arrow_right"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n && t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(1, q))
        }
        function et(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 14),
            t.\u0275\u0275template(1, X, 2, 1, "ng-container", 15),
            t.\u0275\u0275template(2, Z, 2, 0, "div", 16),
            t.\u0275\u0275template(3, tt, 4, 2, "div", 22),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(5, L, e.recentViewed.length < 2)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngForOf", e.recentViewed)("ngForTrackBy", e.trackByFn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.recentViewed && e.recentViewed.length < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.recentViewed && e.recentViewed.length > 2)
            }
        }
        function nt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, Q, 2, 1, "div", 10),
            t.\u0275\u0275template(2, et, 4, 7, "div", 11),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.recentViewed),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.recentViewed)
            }
        }
        function it(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275element(1, "app-user-my-watchlist-loader", 13),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("type", "related"))
        }
        function ot(n, o) {
            1 & n && t.\u0275\u0275elementContainer(0)
        }
        function rt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, ot, 1, 0, "ng-container", 18),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext()
                  , a = e.$implicit
                  , s = e.index;
                t.\u0275\u0275nextContext(4);
                const l = t.\u0275\u0275reference(4);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngTemplateOutlet", l)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, d, a, s))
            }
        }
        function at(n, o) {
            1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275element(1, "img", 24),
            t.\u0275\u0275elementContainerEnd())
        }
        function st(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, rt, 2, 5, "ng-container", 8),
            t.\u0275\u0275template(2, at, 2, 0, "ng-container", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = o.index
                  , a = t.\u0275\u0275nextContext(4);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e < 3),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", 1 == (null == a.myCourseList ? null : a.myCourseList.length))
            }
        }
        function lt(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275text(1, " You haven't enrolled in any course yet! "),
            t.\u0275\u0275elementEnd())
        }
        function ct(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 20),
            t.\u0275\u0275text(1, " View all "),
            t.\u0275\u0275elementStart(2, "em", 21),
            t.\u0275\u0275text(3, "keyboard_arrow_right"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n && t.\u0275\u0275property("routerLink", "/user/myCourses")("queryParams", t.\u0275\u0275pureFunction0(2, k))
        }
        function _t(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275template(1, st, 3, 2, "ng-container", 15),
            t.\u0275\u0275template(2, lt, 2, 0, "div", 16),
            t.\u0275\u0275template(3, ct, 4, 3, "div", 17),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngForOf", e.myCourseList)("ngForTrackBy", e.trackByFn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myCourseList && e.myCourseList.length < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myCourseList && e.myCourseList.length > 2)
            }
        }
        function mt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, it, 2, 1, "div", 10),
            t.\u0275\u0275template(2, _t, 4, 4, "div", 10),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !(null != e.myCourseList && e.myCourseList.length)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myCourseList)
            }
        }
        function pt(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275element(1, "app-user-my-watchlist-loader", 13),
            t.\u0275\u0275elementEnd()),
            2 & n && (t.\u0275\u0275advance(1),
            t.\u0275\u0275property("type", "related"))
        }
        function dt(n, o) {
            1 & n && t.\u0275\u0275elementContainer(0)
        }
        function gt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, dt, 1, 0, "ng-container", 18),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext()
                  , a = e.$implicit
                  , s = e.index;
                t.\u0275\u0275nextContext(4);
                const l = t.\u0275\u0275reference(6);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngTemplateOutlet", l)("ngTemplateOutletContext", t.\u0275\u0275pureFunction2(2, d, a, s))
            }
        }
        function ht(n, o) {
            1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275element(1, "img", 25),
            t.\u0275\u0275elementContainerEnd())
        }
        function ut(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, gt, 2, 5, "ng-container", 8),
            t.\u0275\u0275template(2, ht, 2, 0, "ng-container", 8),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = o.index
                  , a = t.\u0275\u0275nextContext(4);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e < 3),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", 1 == (null == a.myMentorSessions ? null : a.myMentorSessions.length))
            }
        }
        function ft(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275text(1, " You haven't booked any session yet! "),
            t.\u0275\u0275elementEnd())
        }
        const xt = function() {
            return ["/user", "mentor-sessions"]
        };
        function yt(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 23),
            t.\u0275\u0275text(1, " View all "),
            t.\u0275\u0275elementStart(2, "em", 21),
            t.\u0275\u0275text(3, "keyboard_arrow_right"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n && t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(1, xt))
        }
        function Ct(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275template(1, ut, 3, 2, "ng-container", 15),
            t.\u0275\u0275template(2, ft, 2, 0, "div", 16),
            t.\u0275\u0275template(3, yt, 4, 2, "div", 22),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngForOf", e.myMentorSessions)("ngForTrackBy", e.trackByFn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myMentorSessions && e.myMentorSessions.length < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myMentorSessions && e.myMentorSessions.length > 2)
            }
        }
        function vt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, pt, 2, 1, "div", 10),
            t.\u0275\u0275template(2, Ct, 4, 4, "div", 10),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !(null != e.myMentorSessions && e.myMentorSessions.length)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.myMentorSessions)
            }
        }
        function Mt(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "section", 4),
            t.\u0275\u0275elementStart(1, "div", 5),
            t.\u0275\u0275elementStart(2, "div", 6),
            t.\u0275\u0275template(3, r, 3, 3, "ng-container", 7),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275template(4, A, 3, 2, "ng-container", 8),
            t.\u0275\u0275template(5, Y, 3, 2, "ng-container", 8),
            t.\u0275\u0275template(6, nt, 3, 2, "ng-container", 8),
            t.\u0275\u0275template(7, mt, 3, 2, "ng-container", 8),
            t.\u0275\u0275template(8, vt, 3, 2, "ng-container", 8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngForOf", e.userActivityTab),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "live" == e.currentTab),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "watchlist" == e.currentTab),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "recommended" == e.currentTab),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "courses" == e.currentTab),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "sessions" == e.currentTab)
            }
        }
        function wt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext().item;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", null == e ? null : e.title, " ")
            }
        }
        function bt(n, o) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext().item;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", null == e ? null : e.name, " ")
            }
        }
        function Ot(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "a", 26),
            t.\u0275\u0275elementStart(1, "div", 27),
            t.\u0275\u0275element(2, "d2c-img", 28),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(3, "div", 29),
            t.\u0275\u0275elementStart(4, "h3", 30),
            t.\u0275\u0275template(5, wt, 2, 1, "ng-container", 8),
            t.\u0275\u0275template(6, bt, 2, 1, "ng-container", 8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(7, "p", 30),
            t.\u0275\u0275text(8),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = o.item
                  , a = o.isFestival;
                t.\u0275\u0275propertyInterpolate1("routerLink", "/", null == e ? null : e.public_url, ""),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("setAttribute", !0)("url", (null == e ? null : e.logoUrl2) + "?d=90x90")("type", e.type)("alt", null == e ? null : e.title),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", !a),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", a),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275textInterpolate1(" ", null == e || null == e.organisation ? null : e.organisation.name, " ")
            }
        }
        function It(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 34),
            t.\u0275\u0275elementStart(1, "div", 35),
            t.\u0275\u0275element(2, "div", 36),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(3, "h6", 37),
            t.\u0275\u0275text(4),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext().item;
                t.\u0275\u0275advance(2),
                t.\u0275\u0275styleMapInterpolate1("width:", e.module_percent, "%"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275textInterpolate1("", e.module_percent, "% completed")
            }
        }
        function Pt(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 38),
            t.\u0275\u0275text(1, "arrow_forward"),
            t.\u0275\u0275elementEnd())
        }
        function St(n, o) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "a", 31),
                t.\u0275\u0275listener("click", function() {
                    const l = t.\u0275\u0275restoreView(e).item;
                    return t.\u0275\u0275nextContext().navigateToCourseDetails(l)
                }),
                t.\u0275\u0275elementStart(1, "div", 27),
                t.\u0275\u0275element(2, "d2c-img", 28),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(3, "div", 29),
                t.\u0275\u0275elementStart(4, "h3", 30),
                t.\u0275\u0275text(5),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(6, It, 5, 4, "div", 32),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(7, Pt, 2, 0, "div", 33),
                t.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const e = o.item;
                t.\u0275\u0275classProp("pdng_right", !e.module_percent),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("setAttribute", !0)("url", (null == e || null == e.banner ? null : e.banner.image_url) + "?d=90x90")("type", e.type)("alt", null == e ? null : e.title),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate1(" ", null == e ? null : e.title, " "),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.module_percent),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.module_percent)
            }
        }
        function Et(n, o) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 38),
            t.\u0275\u0275text(1, "arrow_forward"),
            t.\u0275\u0275elementEnd())
        }
        function Tt(n, o) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "a", 39),
            t.\u0275\u0275elementStart(1, "div", 27),
            t.\u0275\u0275element(2, "d2c-img", 28),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(3, "div", 29),
            t.\u0275\u0275elementStart(4, "h3", 30),
            t.\u0275\u0275text(5),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(6, "p", 30),
            t.\u0275\u0275text(7),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(8, "p"),
            t.\u0275\u0275elementStart(9, "strong"),
            t.\u0275\u0275text(10),
            t.\u0275\u0275pipe(11, "d2cDate"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275template(12, Et, 2, 0, "div", 33),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = o.item;
                t.\u0275\u0275classProp("pdng_right", !e.module_percent),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("setAttribute", !0)("url", (null == e || null == e.mentor ? null : e.mentor.avatar) + "?d=90x90")("type", e.type)("alt", null == e || null == e.mentor ? null : e.mentor.first_name),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate2(" ", null == e || null == e.mentor ? null : e.mentor.first_name, " ", null == e || null == e.mentor ? null : e.mentor.last_name, " "),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275textInterpolate2(" ", null == e || null == e.mentor ? null : e.mentor.current_role, " at ", null == e || null == e.mentor || null == e.mentor.organisation ? null : e.mentor.organisation.name, " "),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate1(" ", t.\u0275\u0275pipeBind1(11, 12, null == e ? null : e.start_date), " "),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngIf", !e.module_percent)
            }
        }
        let Wt = (()=>{
            class n {
                constructor(e, a, s, l, O) {
                    this.store = e,
                    this.localStorageService = a,
                    this.authService = s,
                    this.http = l,
                    this.router = O,
                    this.userLoggedIn = !1,
                    this.isAdmin = !1,
                    this.currentTab = "live",
                    this.userActivityTab = [],
                    this.cardChange = {
                        myComp: !0
                    },
                    this.type = "registration"
                }
                onWindowResize() {
                    this.viewport = window.innerWidth > 800 ? "desktop" : "mobile"
                }
                ngOnDestroy() {}
                ngOnInit() {
                    this.getCurrentUser()
                }
                navigateToCourseDetails(e) {
                    var a;
                    let s = "";
                    if (s = e.public_url.includes("courses/details/") ? e.public_url.split("courses/details")[1] : e.public_url,
                    null != (null == e ? void 0 : e.with_first_module) && (null === (a = e.with_first_module) || void 0 === a ? void 0 : a.sub_topic_for_normal_course_details.length) > 0)
                        if (null != e.with_first_module.sub_topic_for_normal_course_details[0].slug)
                            if (e.with_first_module.sub_topic_for_normal_course_details[0].slug.includes(e.with_first_module.sub_topic_for_normal_course_details.id))
                                s = s + "/" + e.with_first_module.sub_topic_for_normal_course_details[0].slug;
                            else {
                                let l = e.with_first_module.sub_topic_for_normal_course_details[0].title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
                                l = l + "-" + e.with_first_module.sub_topic_for_normal_course_details[0].id,
                                s += "/" + l
                            }
                        else {
                            let l = e.with_first_module.sub_topic_for_normal_course_details[0].title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
                            l = l + "-" + e.with_first_module.sub_topic_for_normal_course_details[0].id,
                            s += "/" + l
                        }
                    this.router.navigate(["courses/" + s])
                }
                ngOnChanges(e) {
                    e.currentUser && this.currentUser && ("registration" == this.type ? this.getMyRegistrations() : "courses" == this.type ? this.getMyCourses() : "mentor" == this.type && this.getMentorSessions())
                }
                switchMyComp(e) {
                    this.currentTab = e,
                    this.cardChange.myComp = !0,
                    "watchlist" == e && !this.myWatchlist && this.getMyWatchlist(),
                    "recommended" == e && !this.recentViewed && this.getRecentViewed(),
                    "courses" == e && !this.myCourseList && this.getMyCourses()
                }
                getMyWatchlist() {
                    this.http.get("/api/personalize/watchlist").subscribe(a=>{
                        var s;
                        this.myWatchlist = a.data,
                        this.myWatchlist.length < 1 ? this.getRecentViewed() : this.myWatchlist.length > 0 && (null === (s = this.liveCompetition) || void 0 === s ? void 0 : s.length) < 1 && (this.currentTab = "watchlist",
                        this.userActivityTab = [{
                            name: "My Watchlist",
                            link: "watchlist"
                        }, {
                            name: "My Registrations",
                            link: "live"
                        }, {
                            name: "Recently Viewed",
                            link: "recommended"
                        }])
                    }
                    )
                }
                getMyRegistrations() {
                    this.http.get("/api/personalize/upcoming-registered").subscribe(a=>{
                        var s;
                        this.liveCompetition = a.data,
                        (null === (s = this.liveCompetition) || void 0 === s ? void 0 : s.length) < 1 ? this.getMyWatchlist() : (this.currentTab = "live",
                        this.userActivityTab = [{
                            name: "My Registrations",
                            link: "live"
                        }, {
                            name: "My Watchlist",
                            link: "watchlist"
                        }, {
                            name: "Recently Viewed",
                            link: "recommended"
                        }])
                    }
                    )
                }
                getMyCourses() {
                    this.userActivityTab = [{
                        name: "My Courses",
                        link: "courses"
                    }],
                    this.currentTab = "courses",
                    this.http.get("/api/user/enrolled-courses?page=1&per_page=10&undefined=true").subscribe(a=>{
                        this.myCourseList = a.data.data
                    }
                    )
                }
                getMentorSessions() {
                    this.userActivityTab = [{
                        name: "My Sessions",
                        link: "sessions"
                    }],
                    this.currentTab = "sessions",
                    this.http.get("/api/mentorship/mentee/my-bookings?page=1&per_page=10&tab=upcoming&undefined=true").subscribe(a=>{
                        this.myMentorSessions = a.data.data
                    }
                    )
                }
                getRecentViewed() {
                    this.http.get("/api/personalize/recent-viewed").subscribe(a=>{
                        var s, l;
                        this.recentViewed = a.data,
                        this.recentViewed.length > 0 && (null === (s = this.myWatchlist) || void 0 === s ? void 0 : s.length) < 1 && (null === (l = this.liveCompetition) || void 0 === l ? void 0 : l.length) < 1 && (this.currentTab = "recommended",
                        this.userActivityTab = [{
                            name: "Recently Viewed",
                            link: "recommended"
                        }, {
                            name: "My Watchlist",
                            link: "watchlist"
                        }, {
                            name: "My Registrations",
                            link: "live"
                        }])
                    }
                    )
                }
                getCurrentUser() {
                    this.store.select(C.T).subscribe(e=>{
                        this.userLoggedIn = e,
                        this.userLoggedIn && this.localStorageService.getEncItem("currentUser") && (this.currentUser = this.localStorageService.getEncItem("currentUser"),
                        this.isAdmin = !1,
                        this.currentUser.userRole && this.currentUser.userRole.length > 0 && this.currentUser.userRole.forEach(a=>{
                            "admin" == a.name && (this.isAdmin = !0)
                        }
                        ))
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.\u0275\u0275directiveInject(h.yh),t.\u0275\u0275directiveInject(M.n),t.\u0275\u0275directiveInject(f.e),t.\u0275\u0275directiveInject(w.eN),t.\u0275\u0275directiveInject(x.F0))
            }
            ,
            n.\u0275cmp = t.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-user-my-watchlist"]],
                hostBindings: function(e, a) {
                    1 & e && t.\u0275\u0275listener("resize", function(l) {
                        return a.onWindowResize(l)
                    }, !1, t.\u0275\u0275resolveWindow)
                },
                inputs: {
                    currentUser: "currentUser",
                    type: "type"
                },
                features: [t.\u0275\u0275ProvidersFeature([i.Y, v.o]), t.\u0275\u0275NgOnChangesFeature],
                decls: 7,
                vars: 1,
                consts: [["class", "page_heading", 4, "ngIf"], ["opportunityTemplate", ""], ["coursesTemplate", ""], ["mentorTemplate", ""], [1, "page_heading"], [1, "d2c-container"], [1, "my-tabs"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], ["class", "item_box", 4, "ngIf"], ["class", "item_box", 3, "ngClass", 4, "ngIf"], [1, "item_box"], [3, "type"], [1, "item_box", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "d2c_alert", 4, "ngIf"], ["class", "view_all", 3, "routerLink", "queryParams", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d2c_alert"], [1, "view_all", 3, "routerLink", "queryParams"], [1, "material-icons"], ["class", "view_all", 3, "routerLink", 4, "ngIf"], [1, "view_all", 3, "routerLink"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63fde302a2458_frame_1000006673browse_courses.png", "alt", "browse more", "routerLink", "/courses", 1, "browse_more"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63fde2d383776_frame_1000006672browse_sessions.png", "alt", "browse more", "routerLink", "/find-a-mentor", 1, "browse_more"], [1, "list", "cursor-pointer", "animated", "fadeInUp", 3, "routerLink"], [1, "img"], [3, "setAttribute", "url", "type", "alt"], [1, "cptn"], [1, "double-wrap"], [1, "list", "cursor-pointer", "animated", "fadeInUp", 3, "click"], ["class", "j-between mt-15", 4, "ngIf"], ["class", "start_icon material-icons", 4, "ngIf"], [1, "j-between", "mt-15"], [1, "bar-bg"], [1, "bar"], [1, "font-12", "f-weight-700", "m-0"], [1, "start_icon", "material-icons"], ["routerLink", "/user/mentor-sessions", 1, "list", "cursor-pointer", "animated", "fadeInUp"]],
                template: function(e, a) {
                    1 & e && (t.\u0275\u0275template(0, Mt, 9, 6, "section", 0),
                    t.\u0275\u0275template(1, Ot, 9, 8, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor),
                    t.\u0275\u0275template(3, St, 8, 9, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor),
                    t.\u0275\u0275template(5, Tt, 13, 14, "ng-template", null, 3, t.\u0275\u0275templateRefExtractor)),
                    2 & e && t.\u0275\u0275property("ngIf", (null == a.liveCompetition ? null : a.liveCompetition.length) > 0 || (null == a.myWatchlist ? null : a.myWatchlist.length) > 0 || (null == a.recentViewed ? null : a.recentViewed.length) > 0 || (null == a.myCourseList ? null : a.myCourseList.length) > 0 || (null == a.myMentorSessions ? null : a.myMentorSessions.length) > 0)
                },
                directives: [u.NgIf, u.NgForOf, T, u.NgClass, u.NgTemplateOutlet, x.rH, W.H, x.yS, _.B],
                pipes: [g.f],
                styles: ["img[_ngcontent-%COMP%]{max-width:100%;height:auto}.page_heading[_ngcontent-%COMP%]{margin-bottom:100px}.page_heading[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{position:relative;min-height:177px}@media (max-width: 1100px){.page_heading[_ngcontent-%COMP%]{margin-bottom:50px}.page_heading[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{min-height:auto}}.my-tabs[_ngcontent-%COMP%]{width:calc(100% - 88px);display:flex}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:#1C4980;border:1px solid #1C4980;border-bottom:none!important;cursor:pointer;color:#fff;height:50px;width:33.33%;max-width:172px;font-weight:400;font-size:16px;line-height:140%;transition:.3s}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{border-radius:12px 0 0}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{border-radius:0 12px 0 0}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:only-child{border-radius:12px 12px 0 0}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:2px}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .my-tabs[_ngcontent-%COMP%]   span.in[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #DDE5EA;color:#1c4980}@media (max-width: 1100px){.my-tabs[_ngcontent-%COMP%]{justify-content:space-between;border-radius:0;width:100%;background:transparent;padding:0}.my-tabs[_ngcontent-%COMP%]:after{bottom:-10px}.my-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0;white-space:nowrap;padding:7px 12px;text-align:center;font-size:12px;font-weight:500}.my-tabs[_ngcontent-%COMP%]   span.in[_ngcontent-%COMP%]{font-weight:600}}.item_box[_ngcontent-%COMP%]{display:flex;border:1px solid #DDE5EA;border-radius:0 12px 12px;margin-top:-1px;padding:20px}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{background:#F4F6F9;border-radius:8px;padding:20px;display:flex;align-items:center;margin:0 5px;width:calc(25% - 10px);flex-grow:1}.item_box[_ngcontent-%COMP%]   .list.pdng_right[_ngcontent-%COMP%]{padding-right:60px;position:relative}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .start_icon[_ngcontent-%COMP%]{font-size:14px;font-weight:800;border:1.5px solid;width:22px;height:22px;text-align:center;line-height:19px;border-radius:50%;color:#1c4980;position:absolute;right:20px}@media only screen and (min-width: 1101px){.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#0073e6}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{transform:scale(1.05)}}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{transition:.3s;background:#fff;border:1px solid #DDE5EA;border-radius:8px;width:70px;height:70px;display:flex;align-items:center;justify-content:center}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]     img{max-width:80%;min-width:unset;width:auto;height:auto}.item_box[_ngcontent-%COMP%]   .cptn[_ngcontent-%COMP%]{width:calc(100% - 70px);padding-left:12px}.item_box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1c4980;font-weight:600;font-size:13px;line-height:130%;margin-bottom:3px;transition:.3s}.item_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:16px;transition:.3s}@media (max-width: 767px){.item_box[_ngcontent-%COMP%]{border-radius:0 0 12px 12px;padding:15px;display:flex;flex-direction:column}.item_box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{background:transparent;border-radius:0;border-bottom:1px solid #F6F8FA;margin:0 0 15px;padding:0 0 15px;width:100%}.item_box.full[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{width:100%}}.view_all[_ngcontent-%COMP%]{position:absolute;top:4px;right:0px;display:flex;align-items:center;cursor:pointer;font-weight:500;transition:.3s;color:#0073e6;font-weight:400;font-size:16px;line-height:140%}@media only screen and (min-width: 1101px){.view_all[_ngcontent-%COMP%]:hover{color:#1c4980}.view_all[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%]{transform:translate(2px)}}.view_all[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:18px;margin-left:5px;transition:.3s}@media (max-width: 1100px){.view_all[_ngcontent-%COMP%]{width:100%;justify-content:center;position:static;height:auto;font-size:12px;color:#1c4980d9;font-weight:600}}app-user-my-watchlist-loader[_ngcontent-%COMP%], .d2c_alert[_ngcontent-%COMP%]{width:100%}.bar-bg[_ngcontent-%COMP%]{height:11px;width:100%;background-color:#fff;position:relative;border-radius:8px;width:calc(100% - 120px)}.bar-bg[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{border-radius:8px;background-color:#05c165;height:9px;position:absolute;left:0;top:0;bottom:0;margin:auto}.browse_more[_ngcontent-%COMP%]{width:calc(25% - 10px);flex-grow:1;cursor:pointer}@media screen and (max-width: 800px){.browse_more[_ngcontent-%COMP%]{width:100%}}"]
            }),
            n
        }
        )()
    }
    ,
    6845: (F,y,c)=>{
        c.d(y, {
            B: ()=>W
        });
        var C = c(77976)
          , i = c(83668)
          , v = c(66999)
          , M = c(35427)
          , f = c(86019)
          , t = c(7336)
          , h = c(74705);
        const w = ["lazyImg"];
        function x(_, g) {
            if (1 & _) {
                const r = i.\u0275\u0275getCurrentView();
                i.\u0275\u0275elementStart(0, "img", 3, 4),
                i.\u0275\u0275listener("error", function() {
                    return i.\u0275\u0275restoreView(r),
                    i.\u0275\u0275nextContext(2).imageNotFound()
                })("load", function(p) {
                    return i.\u0275\u0275restoreView(r),
                    i.\u0275\u0275nextContext(2).imageLoaded(p)
                }),
                i.\u0275\u0275pipe(2, "d2cDate"),
                i.\u0275\u0275elementEnd()
            }
            if (2 & _) {
                const r = i.\u0275\u0275nextContext(2);
                i.\u0275\u0275styleMap(r.safeStyleString),
                i.\u0275\u0275classMapInterpolate1("no-lazy ", r.classString, " custom-alt"),
                i.\u0275\u0275property("src", r.url, i.\u0275\u0275sanitizeUrl)("alt", r.customAlt ? r.alt + i.\u0275\u0275pipeBind1(2, 11, r.customAlt) : r.alt),
                i.\u0275\u0275attribute("width", r.width)("height", r.height)("loading", r.lazyLoad ? "lazy" : "")("fetchpriority", r.lazyLoad ? "" : "high")
            }
        }
        function u(_, g) {
            if (1 & _ && (i.\u0275\u0275elementStart(0, "div", 7),
            i.\u0275\u0275elementStart(1, "div", 8),
            i.\u0275\u0275element(2, "img", 9),
            i.\u0275\u0275elementEnd(),
            i.\u0275\u0275elementEnd()),
            2 & _) {
                const r = i.\u0275\u0275nextContext(3);
                i.\u0275\u0275classProp("align", r.dimensions)
            }
        }
        const P = function(_) {
            return {
                "v-hidden": _
            }
        };
        function S(_, g) {
            if (1 & _) {
                const r = i.\u0275\u0275getCurrentView();
                i.\u0275\u0275elementContainerStart(0),
                i.\u0275\u0275elementStart(1, "img", 5, 4),
                i.\u0275\u0275listener("error", function() {
                    return i.\u0275\u0275restoreView(r),
                    i.\u0275\u0275nextContext(2).imageNotFound()
                })("load", function(p) {
                    return i.\u0275\u0275restoreView(r),
                    i.\u0275\u0275nextContext(2).imageLoaded(p)
                }),
                i.\u0275\u0275elementEnd(),
                i.\u0275\u0275template(3, u, 3, 2, "div", 6),
                i.\u0275\u0275elementContainerEnd()
            }
            if (2 & _) {
                const r = i.\u0275\u0275nextContext(2);
                i.\u0275\u0275advance(1),
                i.\u0275\u0275styleMap(r.safeStyleString),
                i.\u0275\u0275classMapInterpolate1("lazy ", r.classString, ""),
                i.\u0275\u0275propertyInterpolate("alt", r.alt),
                i.\u0275\u0275property("src", r.url, i.\u0275\u0275sanitizeUrl)("lazySrcVisibleClass", "visible")("ngClass", i.\u0275\u0275pureFunction1(10, P, !r.loaded)),
                i.\u0275\u0275advance(2),
                i.\u0275\u0275property("ngIf", !r.loaded)
            }
        }
        function E(_, g) {
            if (1 & _ && (i.\u0275\u0275elementContainerStart(0),
            i.\u0275\u0275template(1, x, 3, 13, "img", 2),
            i.\u0275\u0275template(2, S, 4, 12, "ng-container", 0),
            i.\u0275\u0275elementContainerEnd()),
            2 & _) {
                const r = i.\u0275\u0275nextContext();
                i.\u0275\u0275advance(1),
                i.\u0275\u0275property("ngIf", !r.isLazy),
                i.\u0275\u0275advance(1),
                i.\u0275\u0275property("ngIf", r.isLazy)
            }
        }
        function T(_, g) {
            if (1 & _ && (i.\u0275\u0275elementStart(0, "span"),
            i.\u0275\u0275text(1),
            i.\u0275\u0275elementEnd()),
            2 & _) {
                const r = i.\u0275\u0275nextContext();
                i.\u0275\u0275classMap(r.classString),
                i.\u0275\u0275advance(1),
                i.\u0275\u0275textInterpolate(r.getInitial(r.alt))
            }
        }
        let W = (()=>{
            class _ {
                constructor(r, m, p, d, b) {
                    this.helper = r,
                    this.breakpointObserver = m,
                    this.sanitizer = p,
                    this.element = d,
                    this.renderer = b,
                    this.isLazy = !1,
                    this.setAttribute = !1,
                    this.lazyLoad = !0,
                    this.fallbackTried = !1,
                    this.noImage = !1,
                    this.loaded = !1,
                    this.apiImage = {
                        height: 0,
                        width: 0,
                        tried: !1
                    }
                }
                ngOnChanges(r) {
                    (r.url || r.filename) && (this.styleString && "" !== this.styleString && (this.safeStyleString = this.sanitizer.bypassSecurityTrustStyle(this.styleString)),
                    this.getResponsiveImageUrl(),
                    this.imageHasExtension())
                }
                imageHasExtension() {
                    if (this.url) {
                        let p = this.url.split("?d")
                          , d = p[0];
                        if (p && p[1]) {
                            let b = [".jpg", ".png", ".gif", ".jpeg"];
                            var r = d.lastIndexOf(".")
                              , m = d.substring(r);
                            let I = 0;
                            b.forEach(U=>{
                                m == U && I++
                            }
                            ),
                            I < 1 && (this.fallBackUrl = d)
                        }
                    }
                }
                getResponsiveImageUrl() {
                    this.responsive && this.responsive.forEach(r=>{
                        this.breakpointObserver.isMatched("(max-width: " + r.maxWidth + "px)") && (this.url = this.getCDNUrl(r.width, r.height))
                    }
                    ),
                    window.innerWidth <= 600 && this.isLazy && (this.isLazy = !1)
                }
                imageNotFound() {
                    if (this.isLazy = !1,
                    this.responsive && this.filename && !this.apiImage.tried)
                        return this.url = this.getResizeUrl(this.apiImage.width, this.apiImage.height),
                        this.noImage = !1,
                        void (this.apiImage.tried = !0);
                    if (this.fallBackUrl && "" != this.fallBackUrl && !this.fallbackTried)
                        this.url = this.fallBackUrl,
                        this.fallbackTried = !0;
                    else if (this.type && "" != this.type)
                        switch (this.type) {
                        case "competitions":
                            this.url = this.helper.cdn("/images/icons/competition.svg"),
                            this.classString += " svg-img";
                            break;
                        case "quizzes":
                            this.url = this.helper.cdn("/images/icons/quiz.svg"),
                            this.classString += " svg-img";
                            break;
                        case "hackathons":
                            this.url = this.helper.cdn("/images/icons/hackathon.svg"),
                            this.classString += " svg-img";
                            break;
                        case "scholarships":
                            this.url = this.helper.cdn("/images/icons/scholarship.svg"),
                            this.classString += " svg-img";
                            break;
                        case "internships":
                            this.url = this.helper.cdn("/images/icons/Internship.svg"),
                            this.classString += " svg-img";
                            break;
                        case "workshops":
                            this.url = this.helper.cdn("/images/icons/workshop-icon.svg"),
                            this.classString += " svg-img";
                            break;
                        case "festival":
                            this.url = this.helper.cdn("/images/icons/Competition128.png"),
                            this.classString += ""
                        }
                    else
                        this.noImage = !0
                }
                getInitial(r) {
                    if (null != r && !this.responsive)
                        return r.split(" ").map(m=>m[0]).join("").slice(0, 2)
                }
                getCDNUrl(r, m) {
                    return this.apiImage.height = m,
                    this.apiImage.width = r,
                    this.apiImage.tried = !1,
                    this.helper.cdn("/" + this.filename + "?d=" + r + "x" + m)
                }
                getResizeUrl(r, m) {
                    return ""
                }
                ngOnInit() {
                    this.apiImage.width = window.innerWidth,
                    this.apiImage.height = this.apiImage.width,
                    this.styleString && "" !== this.styleString && (this.safeStyleString = this.sanitizer.bypassSecurityTrustStyle(this.styleString)),
                    this.getResponsiveImageUrl()
                }
                ngAfterViewInit() {}
                imageLoaded(r) {
                    this.loaded = !0,
                    this.isLazy = !1,
                    this.noImage = !1,
                    this.getImageDimensions(),
                    this.setHeightWidth()
                }
                getImageDimensions() {
                    if (this.lazyImg && this.dimensions)
                        return !(this.lazyImg.nativeElement.clientWidth >= this.dimensions - 5)
                }
                setHeightWidth() {
                    this.setAttribute && this.lazyImg && (this.width = this.lazyImg.nativeElement.clientWidth,
                    this.height = this.lazyImg.nativeElement.clientHeight)
                }
            }
            return _.\u0275fac = function(r) {
                return new (r || _)(i.\u0275\u0275directiveInject(C.W_),i.\u0275\u0275directiveInject(v.Yg),i.\u0275\u0275directiveInject(M.H7),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.Renderer2))
            }
            ,
            _.\u0275cmp = i.\u0275\u0275defineComponent({
                type: _,
                selectors: [["d2c-img"]],
                viewQuery: function(r, m) {
                    if (1 & r && i.\u0275\u0275viewQuery(w, 5),
                    2 & r) {
                        let p;
                        i.\u0275\u0275queryRefresh(p = i.\u0275\u0275loadQuery()) && (m.lazyImg = p.first)
                    }
                },
                hostBindings: function(r, m) {
                    1 & r && i.\u0275\u0275listener("resize", function(d) {
                        return m.getResponsiveImageUrl(d)
                    }, !1, i.\u0275\u0275resolveWindow)
                },
                inputs: {
                    classString: "classString",
                    alt: "alt",
                    url: "url",
                    responsive: "responsive",
                    filename: "filename",
                    styleString: "styleString",
                    fallBackUrl: "fallBackUrl",
                    type: "type",
                    dimensions: "dimensions",
                    isLazy: "isLazy",
                    setAttribute: "setAttribute",
                    width: "width",
                    height: "height",
                    lazyLoad: "lazyLoad",
                    customAlt: "customAlt"
                },
                features: [i.\u0275\u0275NgOnChangesFeature],
                decls: 2,
                vars: 2,
                consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "src", "style", "class", "alt", "error", "load", 4, "ngIf"], [3, "src", "alt", "error", "load"], ["lazyImg", ""], [3, "src", "lazySrcVisibleClass", "ngClass", "alt", "error", "load"], ["class", "loading mt-0", 3, "align", 4, "ngIf"], [1, "loading", "mt-0"], [1, "loader-overlay"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "height", "40", "alt", "Unstop loader"]],
                template: function(r, m) {
                    1 & r && (i.\u0275\u0275template(0, E, 3, 2, "ng-container", 0),
                    i.\u0275\u0275template(1, T, 2, 4, "span", 1)),
                    2 & r && (i.\u0275\u0275property("ngIf", !m.noImage),
                    i.\u0275\u0275advance(1),
                    i.\u0275\u0275property("ngIf", m.noImage))
                },
                directives: [f.NgIf, t.H, f.NgClass],
                pipes: [h.f],
                styles: ["img[_ngcontent-%COMP%]{max-width:75px;max-height:75px;display:block;margin:0 auto;overflow:hidden;font-size:11px;line-height:12px;min-width:50px}d2c-img[_ngcontent-%COMP%]{width:100%;height:100%}img.img-large[_ngcontent-%COMP%]{max-width:118px;max-height:118px;height:auto;margin:0 auto}@media (max-width: 768px){img.img-large[_ngcontent-%COMP%]{max-width:85px;max-height:85px}}img.inheritClass[_ngcontent-%COMP%]{max-width:100%;max-height:100%!important;width:100%}img.logo[_ngcontent-%COMP%]{max-width:none;max-height:38px;border:1px solid #f3f3f3}img.svg-img[_ngcontent-%COMP%]{width:75px;height:75px}span[_ngcontent-%COMP%]{color:#1c4980;text-transform:uppercase;font-size:32px}img.banner-responsive[_ngcontent-%COMP%]{position:relative;max-width:100%;max-height:100%}img.featured-img[_ngcontent-%COMP%]{height:178px;border-radius:8px 8px 0 0}img.orgLogo[_ngcontent-%COMP%]{max-height:75px!important}img.lazy[_ngcontent-%COMP%]{max-width:inherit!important}img.lazy-loading[_ngcontent-%COMP%]{background-size:35px 35px;height:50px;width:50px;border:none}img.exploreLogo[_ngcontent-%COMP%]{max-width:90px!important}img.logo-attach[_ngcontent-%COMP%]{max-width:100%!important;max-height:100%!important;border-radius:0!important;width:auto!important;background:#fff;height:auto}img.full-screen[_ngcontent-%COMP%]{width:100%;height:100%;max-width:none;max-height:none}.v-hidden[_ngcontent-%COMP%]{visibility:hidden;height:0!important;width:0!important;max-width:0!important;display:block!important}.loading[_ngcontent-%COMP%]{text-align:center}.loading[_ngcontent-%COMP%]   .loading-bar[_ngcontent-%COMP%]{margin:0 2px}.loading[_ngcontent-%COMP%]{height:40px;width:40px;margin:auto;opacity:.2;position:relative}.loading.align[_ngcontent-%COMP%]{margin:0}.loading[_ngcontent-%COMP%]   img.grey-image[_ngcontent-%COMP%]{height:40px;width:40px;filter:grayscale(100%)}.loading[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]{position:absolute;top:0px;left:0px;width:0%;height:100%;overflow:hidden;animation:fullWidth 1s infinite ease-out}.loading[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;max-width:none!important}@keyframes fullWidth{0%{width:0%}to{width:100%}}.img-articles[_ngcontent-%COMP%]{position:absolute;top:0px;left:0px;width:100%;height:100%;justify-content:center;display:flex;align-items:center}.img-articles[_ngcontent-%COMP%]   .loading-bar[_ngcontent-%COMP%]{background:#c8c8c8!important}img.social-avatar[_ngcontent-%COMP%]{max-width:30px;max-height:30px;min-width:0px}span.social-avatar[_ngcontent-%COMP%]{font-size:12px;color:#fff}"]
            }),
            _
        }
        )()
    }
}]);
