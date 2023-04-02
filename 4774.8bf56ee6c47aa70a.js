"use strict";
var se = Object.defineProperty
  , E = Object.getOwnPropertySymbols
  , oe = Object.prototype.hasOwnProperty
  , le = Object.prototype.propertyIsEnumerable
  , w = (h,a,r)=>a in h ? se(h, a, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : h[a] = r
  , O = (h,a)=>{
    for (var r in a || (a = {}))
        oe.call(a, r) && w(h, r, a[r]);
    if (E)
        for (var r of E(a))
            le.call(a, r) && w(h, r, a[r]);
    return h
}
;
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[4774], {
    94774: (h,a,r)=>{
        r.d(a, {
            YR: ()=>ie,
            rP: ()=>ne
        });
        var e = r(83668)
          , x = r(16087)
          , v = r(38053)
          , p = r(18735)
          , C = r(65686)
          , m = r(49133)
          , f = r(86019);
        const S = ["searchInput"]
          , F = ["filteredListElement"]
          , H = ["historyListElement"];
        function A(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 14),
                e.\u0275\u0275listener("click", function(s) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().remove(s)
                }),
                e.\u0275\u0275elementStart(1, "i", 15),
                e.\u0275\u0275text(2, "close"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        function V(n, l) {
            1 & n && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "div", 17),
            e.\u0275\u0275element(2, "div", 18),
            e.\u0275\u0275element(3, "div", 19),
            e.\u0275\u0275element(4, "div", 20),
            e.\u0275\u0275element(5, "div", 21),
            e.\u0275\u0275element(6, "div", 22),
            e.\u0275\u0275element(7, "div", 23),
            e.\u0275\u0275element(8, "div", 24),
            e.\u0275\u0275element(9, "div", 25),
            e.\u0275\u0275element(10, "div", 26),
            e.\u0275\u0275element(11, "div", 27),
            e.\u0275\u0275element(12, "div", 28),
            e.\u0275\u0275elementEnd())
        }
        function D(n, l) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 29),
            e.\u0275\u0275elementStart(1, "div", 30),
            e.\u0275\u0275text(2),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate(t.heading)
            }
        }
        function M(n, l) {
            1 & n && e.\u0275\u0275elementContainer(0)
        }
        const g = function(n) {
            return {
                $implicit: n
            }
        };
        function $(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 33),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const s = e.\u0275\u0275nextContext().$implicit;
                    return e.\u0275\u0275nextContext().select(s)
                }),
                e.\u0275\u0275template(1, M, 1, 0, "ng-container", 34),
                e.\u0275\u0275pipe(2, "highlight"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext()
                  , i = t.index
                  , s = t.$implicit
                  , o = e.\u0275\u0275nextContext();
                e.\u0275\u0275classProp("complete-selected", i === o.selectedIdx),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngTemplateOutlet", o.itemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(7, g, e.\u0275\u0275pipeBind2(2, 4, s, o.toHighlight)))
            }
        }
        function K(n, l) {
            1 & n && e.\u0275\u0275elementContainer(0)
        }
        function P(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 33),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const s = e.\u0275\u0275nextContext().$implicit;
                    return e.\u0275\u0275nextContext().select(s)
                }),
                e.\u0275\u0275template(1, K, 1, 0, "ng-container", 34),
                e.\u0275\u0275pipe(2, "highlight"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext()
                  , i = t.index
                  , s = t.$implicit
                  , o = e.\u0275\u0275nextContext();
                e.\u0275\u0275classProp("complete-selected", i === o.selectedIdx),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngTemplateOutlet", o.itemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(8, g, e.\u0275\u0275pipeBind3(2, 4, s, o.toHighlight, o.searchKeyword)))
            }
        }
        function R(n, l) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "li", 31),
            e.\u0275\u0275template(1, $, 3, 9, "div", 32),
            e.\u0275\u0275template(2, P, 3, 10, "div", 32),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = l.$implicit
                  , i = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", i.isTypeString(t)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !i.isTypeString(t))
            }
        }
        function N(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 29),
                e.\u0275\u0275elementStart(1, "div", 30),
                e.\u0275\u0275text(2),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "div", 14),
                e.\u0275\u0275listener("click", function(s) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().resetHistoryList(s)
                }),
                e.\u0275\u0275elementStart(4, "i", 35),
                e.\u0275\u0275text(5, "delete"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate(t.historyHeading)
            }
        }
        function U(n, l) {
            1 & n && e.\u0275\u0275elementContainer(0)
        }
        function q(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 33),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const s = e.\u0275\u0275nextContext().$implicit;
                    return e.\u0275\u0275nextContext().select(s)
                }),
                e.\u0275\u0275template(1, U, 1, 0, "ng-container", 34),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext()
                  , i = t.index
                  , s = t.$implicit
                  , o = e.\u0275\u0275nextContext();
                e.\u0275\u0275classProp("complete-selected", i === o.selectedIdx),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngTemplateOutlet", o.itemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(4, g, s))
            }
        }
        function B(n, l) {
            1 & n && e.\u0275\u0275elementContainer(0)
        }
        function Q(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 33),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const s = e.\u0275\u0275nextContext().$implicit;
                    return e.\u0275\u0275nextContext().select(s)
                }),
                e.\u0275\u0275template(1, B, 1, 0, "ng-container", 34),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext()
                  , i = t.index
                  , s = t.$implicit
                  , o = e.\u0275\u0275nextContext();
                e.\u0275\u0275classProp("complete-selected", i === o.selectedIdx),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngTemplateOutlet", o.itemTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(4, g, s))
            }
        }
        function j(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "li", 31),
                e.\u0275\u0275template(1, q, 2, 6, "div", 32),
                e.\u0275\u0275template(2, Q, 2, 6, "div", 32),
                e.\u0275\u0275elementStart(3, "div", 14),
                e.\u0275\u0275listener("click", function(s) {
                    const d = e.\u0275\u0275restoreView(t).index;
                    return e.\u0275\u0275nextContext().removeHistoryItem(d, s)
                }),
                e.\u0275\u0275elementStart(4, "i", 15),
                e.\u0275\u0275text(5, "close"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = l.$implicit
                  , i = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", i.isTypeString(t)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !i.isTypeString(t))
            }
        }
        function z(n, l) {
            1 & n && e.\u0275\u0275elementContainer(0)
        }
        function J(n, l) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 36),
            e.\u0275\u0275template(1, z, 1, 0, "ng-container", 34),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngTemplateOutlet", t.notFoundTemplate)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, g, t.notFoundText))
            }
        }
        function W(n, l) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 37),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().handleOverlay()
                }),
                e.\u0275\u0275elementEnd()
            }
        }
        const Y = function(n) {
            return {
                active: n
            }
        }
          , k = function(n, l) {
            return {
                "is-hidden": n,
                "is-visible": l
            }
        };
        let G = (()=>{
            class n {
                transform(t, i, s) {
                    let o = i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    o = o.split(" ").filter(c=>c.length > 0).join("|");
                    const d = new RegExp(o,"gi");
                    if (!i)
                        return t;
                    if (s) {
                        const c = t[s].replace(d, u=>`<b>${u}</b>`)
                          , y = O({}, t);
                        return y[s] = c,
                        y
                    }
                    return i ? t.replace(d, c=>`<b>${c}</b>`) : t
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275pipe = e.\u0275\u0275definePipe({
                name: "highlight",
                type: n,
                pure: !0
            }),
            n
        }
        )();
        const b = n=>(n=>38 === n)(n) || (n=>40 === n)(n)
          , _ = n=>13 === n
          , T = n=>27 === n
          , L = n=>9 === n;
        let ie = (()=>{
            class n {
                constructor(t, i) {
                    this.renderer = i,
                    this.query = "",
                    this.filteredList = [],
                    this.historyList = [],
                    this.isHistoryListVisible = !0,
                    this.selectedIdx = -1,
                    this.toHighlight = "",
                    this.notFound = !1,
                    this.isFocused = !1,
                    this.isOpen = !1,
                    this.isScrollToEnd = !1,
                    this.overlay = !1,
                    this.manualOpen = void 0,
                    this.manualClose = void 0,
                    this.data = [],
                    this.placeholder = "",
                    this.heading = "",
                    this.historyHeading = "Recently selected",
                    this.historyListMaxNumber = 15,
                    this.notFoundText = "Not found",
                    this.minQueryLength = 1,
                    this.focusFirst = !1,
                    this.selected = new e.EventEmitter,
                    this.inputChanged = new e.EventEmitter,
                    this.inputFocused = new e.EventEmitter,
                    this.inputCleared = new e.EventEmitter,
                    this.opened = new e.EventEmitter,
                    this.closed = new e.EventEmitter,
                    this.scrolledToEnd = new e.EventEmitter,
                    this.propagateChange = ()=>{}
                    ,
                    this.onTouched = ()=>{}
                    ,
                    this.elementRef = t
                }
                writeValue(t="") {
                    this.query = void 0 !== this.selectedValueRender ? this.selectedValueRender(t) : this.defaultWriteValue(t)
                }
                defaultWriteValue(t) {
                    return t && !this.isTypeString(t) ? t[this.searchKeyword] : t
                }
                registerOnChange(t) {
                    this.propagateChange = t
                }
                registerOnTouched(t) {
                    this.onTouched = t
                }
                onChange(t) {
                    this.propagateChange(t.target.value)
                }
                setDisabledState(t) {
                    this.disabled = t
                }
                ngOnInit() {}
                ngAfterViewInit() {
                    this.initEventStream(),
                    this.handleScroll()
                }
                setInitialValue(t) {
                    this.initialValue && this.select(t)
                }
                ngOnChanges(t) {
                    this.setInitialValue(this.initialValue),
                    t && t.data && Array.isArray(t.data.currentValue) && (this.handleItemsChange(),
                    !t.data.firstChange && this.isFocused && this.handleOpen())
                }
                handleItemsChange() {
                    this.isScrollToEnd = !1,
                    this.isOpen && (this.filteredList = this.data,
                    this.notFound = !this.filteredList || 0 === this.filteredList.length,
                    this.isOpen && this.filterList())
                }
                filterList() {
                    this.selectedIdx = -1,
                    this.initSearchHistory(),
                    null != this.query && this.data ? (this.toHighlight = this.query,
                    this.filteredList = void 0 !== this.customFilter ? this.customFilter([...this.data], this.query) : this.defaultFilterFunction(),
                    this.filteredList.length > 0 && this.focusFirst && (this.selectedIdx = 0)) : this.notFound = !1
                }
                defaultFilterFunction() {
                    return this.data.filter(t=>"string" == typeof t ? t.toLowerCase().indexOf(this.query.toLowerCase()) > -1 : "object" == typeof t && t instanceof Object ? t[this.searchKeyword] ? t[this.searchKeyword].toLowerCase().indexOf(this.query.toLowerCase()) > -1 : "" : void 0)
                }
                isTypeString(t) {
                    return "string" == typeof t
                }
                select(t) {
                    if (this.query = this.isTypeString(t) ? t : t[this.searchKeyword],
                    this.isOpen = !0,
                    this.overlay = !1,
                    this.selected.emit(t),
                    this.propagateChange(t),
                    this.initialValue)
                        if (window.localStorage.getItem(`${this.historyIdentifier}`)) {
                            let s = JSON.parse(localStorage[`${this.historyIdentifier}`]);
                            if (s instanceof Array || (s = []),
                            s.some(o=>this.isTypeString(o) ? o == t : o[this.searchKeyword] == t[this.searchKeyword]))
                                if (this.isTypeString(t)) {
                                    const o = s.slice();
                                    o.splice(o.indexOf(t), 1),
                                    o.splice(0, 0, t),
                                    localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(o))
                                } else {
                                    const o = s.slice()
                                      , d = o.map(c=>c[this.searchKeyword]).indexOf(t[this.searchKeyword]);
                                    o.splice(d, 1),
                                    o.splice(0, 0, t),
                                    localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(o))
                                }
                            else
                                s.unshift(t),
                                localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(s)),
                                s.length >= this.historyListMaxNumber && (s.splice(s.length - 1, 1),
                                localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(s)))
                        } else
                            this.saveHistory(t);
                    else
                        this.saveHistory(t);
                    this.handleClose()
                }
                handleClick(t) {
                    let i = t.target
                      , s = !1;
                    do {
                        i === this.elementRef.nativeElement && (s = !0,
                        this.filteredList.length && this.handleOpen()),
                        i = i.parentNode
                    } while (i);
                    s || this.handleClose()
                }
                handleOverlay() {
                    this.overlay = !1
                }
                handleScroll() {
                    this.renderer.listen(this.filteredListElement.nativeElement, "scroll", ()=>{
                        this.scrollToEnd()
                    }
                    )
                }
                setPanelState(t) {
                    t && t.stopPropagation(),
                    void 0 === this.manualOpen && void 0 === this.manualClose && (this.isOpen = !1,
                    this.handleOpen()),
                    (void 0 === this.manualOpen && !1 === this.manualClose || void 0 === this.manualClose && !1 === this.manualOpen) && (this.isOpen = !1,
                    this.handleOpen()),
                    !1 === this.manualOpen && !1 === this.manualClose && (this.isOpen = !1,
                    this.handleOpen()),
                    this.manualOpen && (this.isOpen = !1,
                    this.handleOpen(),
                    this.manualOpen = !1),
                    this.manualClose && (this.isOpen = !0,
                    this.handleClose(),
                    this.manualClose = !1)
                }
                open() {
                    this.manualOpen = !0,
                    this.isOpen = !1,
                    this.handleOpen()
                }
                close() {
                    this.manualClose = !0,
                    this.isOpen = !0,
                    this.handleClose()
                }
                focus() {
                    this.handleFocus(event)
                }
                clear() {
                    this.remove(event)
                }
                remove(t) {
                    t.stopPropagation(),
                    this.query = "",
                    this.inputCleared.emit(),
                    this.propagateChange(this.query),
                    this.setPanelState(t),
                    this.data && !this.data.length && (this.notFound = !1)
                }
                initSearchHistory() {
                    if (this.isHistoryListVisible = !1,
                    this.historyIdentifier && !this.query) {
                        const t = window.localStorage.getItem(`${this.historyIdentifier}`);
                        t ? (this.isHistoryListVisible = !0,
                        this.filteredList = [],
                        this.historyList = t ? JSON.parse(t) : []) : this.isHistoryListVisible = !1
                    } else
                        this.isHistoryListVisible = !1
                }
                handleOpen() {
                    this.isOpen || this.isOpen && !this.isLoading || this.data && this.data.length && (this.isOpen = !0,
                    this.overlay = !0,
                    this.filterList(),
                    this.opened.emit())
                }
                handleClose() {
                    this.isOpen ? (this.isOpen = !1,
                    this.overlay = !1,
                    this.filteredList = [],
                    this.selectedIdx = -1,
                    this.notFound = !1,
                    this.isHistoryListVisible = !1,
                    this.isFocused = !1,
                    this.closed.emit()) : this.isFocused = !1
                }
                handleFocus(t) {
                    this.searchInput.nativeElement.focus(),
                    !this.isFocused && (this.inputFocused.emit(t),
                    this.data && this.data.length && this.setPanelState(t),
                    this.isFocused = !0)
                }
                scrollToEnd() {
                    if (this.isScrollToEnd)
                        return;
                    const s = this.filteredListElement.nativeElement.clientHeight;
                    0 != s && Math.abs(this.filteredListElement.nativeElement.scrollHeight - s - this.filteredListElement.nativeElement.scrollTop) < 1 && (this.scrolledToEnd.emit(),
                    this.isScrollToEnd = !0)
                }
                initEventStream() {
                    this.inputKeyUp$ = (0,
                    x.R)(this.searchInput.nativeElement, "keyup").pipe((0,
                    v.U)(t=>t)),
                    this.inputKeyDown$ = (0,
                    x.R)(this.searchInput.nativeElement, "keydown").pipe((0,
                    v.U)(t=>t)),
                    this.listenEventStream()
                }
                listenEventStream() {
                    this.inputKeyUp$.pipe((0,
                    p.h)(t=>!(b(t.keyCode) || _(t.keyCode) || T(t.keyCode) || L(t.keyCode))), (0,
                    C.b)(this.debounceTime)).subscribe(t=>{
                        this.onKeyUp(t)
                    }
                    ),
                    this.inputKeyDown$.pipe((0,
                    p.h)(t=>b(t.keyCode))).subscribe(t=>{
                        t.preventDefault(),
                        this.onFocusItem(t)
                    }
                    ),
                    this.inputKeyUp$.pipe((0,
                    p.h)(t=>_(t.keyCode))).subscribe(t=>{}
                    ),
                    this.inputKeyDown$.pipe((0,
                    p.h)(t=>_(t.keyCode))).subscribe(t=>{
                        this.onHandleEnter()
                    }
                    ),
                    this.inputKeyUp$.pipe((0,
                    p.h)(t=>T(t.keyCode), (0,
                    C.b)(100))).subscribe(t=>{
                        this.onEsc()
                    }
                    ),
                    this.inputKeyDown$.pipe((0,
                    p.h)(t=>L(t.keyCode))).subscribe(t=>{
                        this.onTab()
                    }
                    ),
                    this.inputKeyDown$.pipe((0,
                    p.h)(t=>(n=>8 === n)(t.keyCode) || (n=>46 === n)(t.keyCode))).subscribe(t=>{
                        this.onDelete()
                    }
                    )
                }
                onKeyUp(t) {
                    this.notFound = !1,
                    this.query || (this.notFound = !1,
                    this.inputChanged.emit(t.target.value),
                    this.inputCleared.emit(),
                    this.setPanelState(t)),
                    (this.query || "" === this.query) && this.query.length >= this.minQueryLength && (this.inputChanged.emit(t.target.value),
                    this.filterList(),
                    !this.filteredList.length && !this.isLoading && (this.notFound = !!this.notFoundText),
                    this.data && !this.data.length && (this.isOpen = !0))
                }
                onFocusItem(t) {
                    if (this.historyList.length && this.isHistoryListVisible) {
                        const i = this.historyList.length;
                        if ("ArrowDown" === t.key) {
                            let s = this.selectedIdx;
                            s = null === this.selectedIdx ? 0 : s + 1,
                            this.selectedIdx = (i + s) % i,
                            this.scrollToFocusedItem(this.selectedIdx)
                        } else
                            "ArrowUp" === t.key && (-1 == this.selectedIdx && (this.selectedIdx = 0),
                            this.selectedIdx = (i + this.selectedIdx - 1) % i,
                            this.scrollToFocusedItem(this.selectedIdx))
                    } else {
                        const i = this.filteredList.length;
                        if ("ArrowDown" === t.key) {
                            let s = this.selectedIdx;
                            s = null === this.selectedIdx ? 0 : s + 1,
                            this.selectedIdx = (i + s) % i,
                            this.scrollToFocusedItem(this.selectedIdx)
                        } else
                            "ArrowUp" === t.key && (-1 == this.selectedIdx && (this.selectedIdx = 0),
                            this.selectedIdx = (i + this.selectedIdx - 1) % i,
                            this.scrollToFocusedItem(this.selectedIdx))
                    }
                }
                scrollToFocusedItem(t) {
                    let i = null;
                    i = this.historyList.length && this.isHistoryListVisible ? this.historyListElement.nativeElement : this.filteredListElement.nativeElement;
                    const s = Array.prototype.slice.call(i.childNodes).filter(I=>1 === I.nodeType && I.className.includes("item"));
                    if (!s.length)
                        return;
                    const o = i.offsetHeight
                      , d = s[t].offsetHeight
                      , y = i.scrollTop + o - d
                      , u = s[t].offsetTop;
                    u < i.scrollTop && (i.scrollTop = u),
                    u > y && (i.scrollTop = u - o + d)
                }
                onHandleEnter() {
                    this.selectedIdx > -1 && (this.historyList.length && this.isHistoryListVisible ? (this.query = this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx] : this.historyList[this.selectedIdx][this.searchKeyword],
                    this.saveHistory(this.historyList[this.selectedIdx]),
                    this.select(this.historyList[this.selectedIdx])) : (this.query = this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx] : this.filteredList[this.selectedIdx][this.searchKeyword],
                    this.saveHistory(this.filteredList[this.selectedIdx]),
                    this.select(this.filteredList[this.selectedIdx]))),
                    this.isHistoryListVisible = !1,
                    this.handleClose()
                }
                onEsc() {
                    this.searchInput.nativeElement.blur(),
                    this.handleClose()
                }
                onTab() {
                    this.searchInput.nativeElement.blur(),
                    this.handleClose()
                }
                onDelete() {
                    this.isOpen = !0
                }
                saveHistory(t) {
                    if (this.historyIdentifier)
                        if (this.historyList.some(i=>this.isTypeString(i) ? i == t : i[this.searchKeyword] == t[this.searchKeyword]))
                            if (this.isTypeString(t)) {
                                const i = this.historyList.slice();
                                i.splice(this.historyList.indexOf(t), 1),
                                i.splice(0, 0, t),
                                this.saveHistoryToLocalStorage([...i])
                            } else {
                                const i = this.historyList.slice()
                                  , s = i.map(o=>o[this.searchKeyword]).indexOf(t[this.searchKeyword]);
                                i.splice(s, 1),
                                i.splice(0, 0, t),
                                this.saveHistoryToLocalStorage([...i])
                            }
                        else
                            this.saveHistoryToLocalStorage([t, ...this.historyList]),
                            this.historyList.length >= this.historyListMaxNumber && (this.historyList.splice(this.historyList.length - 1, 1),
                            this.saveHistoryToLocalStorage([t, ...this.historyList]))
                }
                saveHistoryToLocalStorage(t) {
                    window.localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(t))
                }
                removeHistoryItem(t, i) {
                    i.stopPropagation(),
                    this.historyList = this.historyList.filter((s,o)=>o !== t),
                    this.saveHistoryToLocalStorage(this.historyList),
                    0 == this.historyList.length && (window.localStorage.removeItem(`${this.historyIdentifier}`),
                    this.filterList())
                }
                resetHistoryList(t) {
                    t.stopPropagation(),
                    this.historyList = [],
                    window.localStorage.removeItem(`${this.historyIdentifier}`),
                    this.filterList()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.Renderer2))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["ng-autocomplete"]],
                contentQueries: function(t, i, s) {
                    if (1 & t && e.\u0275\u0275contentQuery(s, e.TemplateRef, 5),
                    2 & t) {
                        let o;
                        e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i.customTemplate = o.first)
                    }
                },
                viewQuery: function(t, i) {
                    if (1 & t && (e.\u0275\u0275viewQuery(S, 5),
                    e.\u0275\u0275viewQuery(F, 5),
                    e.\u0275\u0275viewQuery(H, 5)),
                    2 & t) {
                        let s;
                        e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i.searchInput = s.first),
                        e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i.filteredListElement = s.first),
                        e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i.historyListElement = s.first)
                    }
                },
                hostAttrs: [1, "ng-autocomplete"],
                hostBindings: function(t, i) {
                    1 & t && e.\u0275\u0275listener("click", function(o) {
                        return i.handleClick(o)
                    }, !1, e.\u0275\u0275resolveDocument)
                },
                inputs: {
                    data: "data",
                    searchKeyword: "searchKeyword",
                    placeholder: "placeholder",
                    heading: "heading",
                    initialValue: "initialValue",
                    historyIdentifier: "historyIdentifier",
                    historyHeading: "historyHeading",
                    historyListMaxNumber: "historyListMaxNumber",
                    notFoundText: "notFoundText",
                    isLoading: "isLoading",
                    debounceTime: "debounceTime",
                    disabled: "disabled",
                    minQueryLength: "minQueryLength",
                    focusFirst: "focusFirst",
                    customFilter: "customFilter",
                    selectedValueRender: "selectedValueRender",
                    itemTemplate: "itemTemplate",
                    notFoundTemplate: "notFoundTemplate"
                },
                outputs: {
                    selected: "selected",
                    inputChanged: "inputChanged",
                    inputFocused: "inputFocused",
                    inputCleared: "inputCleared",
                    opened: "opened",
                    closed: "closed",
                    scrolledToEnd: "scrolledToEnd"
                },
                features: [e.\u0275\u0275ProvidersFeature([{
                    provide: m.JU,
                    useExisting: (0,
                    e.forwardRef)(()=>n),
                    multi: !0
                }]), e.\u0275\u0275NgOnChangesFeature],
                decls: 18,
                vars: 24,
                consts: [["aria-owns", "suggestions suggestions-history", 1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "aria-autocomplete", "list", "role", "combobox", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], ["id", "suggestions", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "suggestions-history", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], ["aria-label", "Close", 1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Delete", 1, "material-icons"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "div", 0),
                    e.\u0275\u0275elementStart(1, "div", 1),
                    e.\u0275\u0275elementStart(2, "input", 2, 3),
                    e.\u0275\u0275listener("ngModelChange", function(o) {
                        return i.query = o
                    })("input", function(o) {
                        return i.onChange(o)
                    })("focus", function(o) {
                        return i.handleFocus(o)
                    })("blur", function(o) {
                        return i.onTouched(o)
                    }),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(4, A, 3, 0, "div", 4),
                    e.\u0275\u0275template(5, V, 13, 0, "div", 5),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(6, "div", 6),
                    e.\u0275\u0275template(7, D, 3, 1, "div", 7),
                    e.\u0275\u0275elementStart(8, "ul", null, 8),
                    e.\u0275\u0275template(10, R, 3, 2, "li", 9),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(11, "div", 10),
                    e.\u0275\u0275template(12, N, 6, 1, "div", 7),
                    e.\u0275\u0275elementStart(13, "ul", null, 11),
                    e.\u0275\u0275template(15, j, 6, 2, "li", 9),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(16, J, 2, 4, "div", 12),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(17, W, 1, 0, "div", 13)),
                    2 & t && (e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(16, Y, i.isOpen)),
                    e.\u0275\u0275attribute("aria-expanded", i.isOpen),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275propertyInterpolate("placeholder", i.placeholder),
                    e.\u0275\u0275property("ngModel", i.query)("disabled", i.disabled),
                    e.\u0275\u0275attribute("aria-label", i.placeholder),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", i.query && !i.isLoading && !i.disabled),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.isLoading),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction2(18, k, i.isHistoryListVisible, !i.isHistoryListVisible)),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.filteredList.length > 0 && i.heading),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("ngForOf", i.filteredList),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction2(21, k, !i.isHistoryListVisible, i.isHistoryListVisible)),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.historyList.length > 0 && i.historyHeading),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("ngForOf", i.historyList),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.isLoading ? !i.isLoading && i.notFound : i.notFound),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.overlay))
                },
                directives: [f.NgClass, m.Fj, m.JJ, m.On, f.NgIf, f.NgForOf, f.NgTemplateOutlet],
                pipes: [G],
                styles: ['@import"https://fonts.googleapis.com/icon?family=Material+Icons";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n'],
                encapsulation: 2
            }),
            n
        }
        )()
          , ne = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.\u0275\u0275defineNgModule({
                type: n
            }),
            n.\u0275inj = e.\u0275\u0275defineInjector({
                imports: [[f.CommonModule, m.u5]]
            }),
            n
        }
        )()
    }
}]);
