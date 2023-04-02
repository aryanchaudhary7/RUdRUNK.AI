"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[3382, 3712, 7070], {
    12090: (D,w,l)=>{
        l.d(w, {
            Y: ()=>R
        });
        var e = l(83668)
          , M = l(23405)
          , O = l(65686)
          , E = l(25389)
          , u = l(49133)
          , h = l(86019);
        const b = ["ulist"];
        function T(m, y) {
            if (1 & m && e.\u0275\u0275element(0, "span", 6),
            2 & m) {
                const r = e.\u0275\u0275nextContext();
                e.\u0275\u0275propertyInterpolate1("id", "", r.id, "_loader")
            }
        }
        function I(m, y) {
            if (1 & m) {
                const r = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 7),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(r);
                    const C = e.\u0275\u0275nextContext();
                    return C.addNewEventNotify(C.text)
                }),
                e.\u0275\u0275text(1, " Create New "),
                e.\u0275\u0275elementEnd()
            }
            if (2 & m) {
                const r = e.\u0275\u0275nextContext();
                e.\u0275\u0275propertyInterpolate2("id", "", r.id, "_list_item_", "nf", "")
            }
        }
        function A(m, y) {
            if (1 & m && (e.\u0275\u0275elementStart(0, "em", 14),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & m) {
                const r = e.\u0275\u0275nextContext().$implicit;
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" - (", r.organisation.name, ")")
            }
        }
        function S(m, y) {
            if (1 & m) {
                const r = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "li", 12),
                e.\u0275\u0275listener("click", function() {
                    const P = e.\u0275\u0275restoreView(r).$implicit;
                    return e.\u0275\u0275nextContext(2).selectItem(P)
                }),
                e.\u0275\u0275text(1),
                e.\u0275\u0275template(2, A, 2, 1, "em", 13),
                e.\u0275\u0275elementEnd()
            }
            if (2 & m) {
                const r = y.$implicit
                  , g = y.index
                  , C = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275propertyInterpolate2("id", "", C.id, "_list_item_", g, ""),
                e.\u0275\u0275propertyInterpolate("title", r.name),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", r.name, " "),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", (null == r ? null : r.organisation) && (null == r || null == r.organisation ? null : r.organisation.name))
            }
        }
        function k(m, y) {
            if (1 & m) {
                const r = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "li", 15),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(r);
                    const C = e.\u0275\u0275nextContext(2);
                    return C.addNewEventNotify(C.text)
                }),
                e.\u0275\u0275text(1, " Cannot Find "),
                e.\u0275\u0275elementStart(2, "strong"),
                e.\u0275\u0275text(3),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275text(4, ", "),
                e.\u0275\u0275elementStart(5, "em"),
                e.\u0275\u0275text(6, "Create One"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & m) {
                const r = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275propertyInterpolate2("id", "", r.id, "_list_item_", "nf", ""),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275textInterpolate(r.text)
            }
        }
        function L(m, y) {
            if (1 & m && (e.\u0275\u0275elementStart(0, "ul", 8, 9),
            e.\u0275\u0275template(2, S, 3, 5, "li", 10),
            e.\u0275\u0275template(3, k, 7, 3, "li", 11),
            e.\u0275\u0275elementEnd()),
            2 & m) {
                const r = e.\u0275\u0275nextContext();
                e.\u0275\u0275propertyInterpolate1("id", "", r.id, "_list"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", r.suggestions),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", r.allowAddNew && r.text.trim().length > 0 && !r.isItemExactMatch() && !r.fixedCreateBtn)
            }
        }
        const V = function(m) {
            return {
                invalid: m
            }
        };
        let R = (()=>{
            class m {
                constructor() {
                    this.fieldName = "Organisation",
                    this.errorClass = !1,
                    this.searching = !1,
                    this.resetTextOnBlur = !1,
                    this.resetAfterSelect = !1,
                    this.keepSuggestions = !1,
                    this.allowAddNew = !0,
                    this.showAfterOrgFill = !1,
                    this.required = !1,
                    this.name = "",
                    this.disabled = !1,
                    this.fixedCreateBtn = !1,
                    this.completeMethod = new e.EventEmitter,
                    this.valueChange = new e.EventEmitter,
                    this.itemSelected = new e.EventEmitter,
                    this.focusStatus = new e.EventEmitter,
                    this.addNewEvent = new e.EventEmitter,
                    this.showFixedBtn = !1,
                    this.newValue = {
                        name: ""
                    },
                    this.text = "",
                    this.shown = !1,
                    this.tabPressed = !1,
                    this.searchTermStream = new M.xQ
                }
                ngOnChanges(r) {
                    r.value && null != this.value && (this.text = "string" == typeof this.value || this.value instanceof String ? this.value : this.value.name)
                }
                search() {
                    this.value = null,
                    this.valueChange.emit(this.value);
                    const r = this.text.replace(/[^A-Z0-9]/gi, "").length;
                    "" == this.text || this.text.length < 1 || r < 1 ? (this.shown = !1,
                    this.searching = !1) : (this.searching = !0,
                    this.searchTermStream.next(this.text))
                }
                checkIfTabPressed(r) {
                    9 == r.keyCode && (this.tabPressed = !0)
                }
                searchOnKeyUp(r) {
                    9 == r.keyCode ? this.tabPressed = !1 : this.search()
                }
                selectItem(r) {
                    null == this.returnField || "" === this.returnField ? (this.value = r,
                    this.valueChange.emit(r)) : (this.value = r[this.returnField],
                    this.valueChange.emit(r[this.returnField])),
                    this.itemSelected.emit(r),
                    this.keepSuggestions || (this.suggestions = null,
                    this.text = r.name),
                    this.shown = !1,
                    this.resetAfterSelect && setTimeout(()=>{
                        this.value = null,
                        this.keepSuggestions || (this.text = "")
                    }
                    , 200)
                }
                focusChanged(r) {
                    this.focusStatus.emit(r),
                    r && (this.suggestions && null == this.value && (this.shown = !0),
                    this.searchTermStream.next(this.text)),
                    r || (this.searching = r,
                    setTimeout(()=>{
                        this.shown = r,
                        this.resetTextOnBlur && null == this.value && (this.text = "")
                    }
                    , 300))
                }
                ngOnInit() {
                    this.searchTermStream.pipe((0,
                    O.b)(350), (0,
                    E.x)()).subscribe(r=>{
                        this.newValue.name = r,
                        this.shown = !0,
                        null != r && r.length > 0 ? this.completeMethod.emit(r) : (this.suggestions = null,
                        this.valueChange.emit(null))
                    }
                    ),
                    console.log("auto", this.required)
                }
                addNewEventNotify(r) {
                    console.log("Add New In:", r),
                    this.addNewEvent.emit(r),
                    this.shown = !1
                }
                isItemExactMatch() {
                    return !(!this.suggestions || !this.suggestions.length || this.text.trim() != this.suggestions[0].name.trim() && !this.suggestions.some(g=>g.name.trim().toLowerCase() === this.text.trim().toLowerCase()))
                }
            }
            return m.\u0275fac = function(r) {
                return new (r || m)
            }
            ,
            m.\u0275cmp = e.\u0275\u0275defineComponent({
                type: m,
                selectors: [["app-autocomplete"]],
                viewQuery: function(r, g) {
                    if (1 & r && e.\u0275\u0275viewQuery(b, 5),
                    2 & r) {
                        let C;
                        e.\u0275\u0275queryRefresh(C = e.\u0275\u0275loadQuery()) && (g.list = C.first)
                    }
                },
                inputs: {
                    fieldName: "fieldName",
                    errorClass: "errorClass",
                    id: "id",
                    suggestions: "suggestions",
                    returnField: "returnField",
                    placeholder: "placeholder",
                    value: "value",
                    display: "display",
                    searching: "searching",
                    resetTextOnBlur: "resetTextOnBlur",
                    resetAfterSelect: "resetAfterSelect",
                    keepSuggestions: "keepSuggestions",
                    allowAddNew: "allowAddNew",
                    showAfterOrgFill: "showAfterOrgFill",
                    required: "required",
                    name: "name",
                    disabled: "disabled",
                    fixedCreateBtn: "fixedCreateBtn"
                },
                outputs: {
                    completeMethod: "completeMethod",
                    valueChange: "valueChange",
                    itemSelected: "itemSelected",
                    focusStatus: "focusStatus",
                    addNewEvent: "addNewEvent"
                },
                features: [e.\u0275\u0275NgOnChangesFeature],
                decls: 7,
                vars: 15,
                consts: [[1, "input_field", "autocomplete-wrapper", 3, "id"], ["type", "text", "autocomplete", "off", 1, "auto-complete", 3, "id", "ngModel", "name", "required", "disabled", "ngClass", "placeholder", "focus", "blur", "ngModelChange", "keydown", "keyup", "change"], [1, "d-none"], ["class", "ac-loader", 3, "id", 4, "ngIf"], ["class", "fixed-btn", 3, "id", "click", 4, "ngIf"], ["class", "autocomplete-content dropdown-content", 3, "id", 4, "ngIf"], [1, "ac-loader", 3, "id"], [1, "fixed-btn", 3, "id", "click"], [1, "autocomplete-content", "dropdown-content", 3, "id"], ["ulist", ""], [3, "id", "title", "click", 4, "ngFor", "ngForOf"], ["class", "create-new", 3, "id", "click", 4, "ngIf"], [3, "id", "title", "click"], ["class", "font-12 font-normal", 4, "ngIf"], [1, "font-12", "font-normal"], [1, "create-new", 3, "id", "click"]],
                template: function(r, g) {
                    1 & r && (e.\u0275\u0275elementStart(0, "div", 0),
                    e.\u0275\u0275elementStart(1, "input", 1),
                    e.\u0275\u0275listener("focus", function() {
                        return g.focusChanged(!0)
                    })("blur", function() {
                        return g.focusChanged(!1)
                    })("ngModelChange", function(P) {
                        return g.text = P
                    })("keydown", function(P) {
                        return g.checkIfTabPressed(P)
                    })("keyup", function(P) {
                        return g.searchOnKeyUp(P)
                    })("change", function() {
                        return g.search()
                    })("focus", function() {
                        return g.showFixedBtn = !0
                    }),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(2, "span", 2),
                    e.\u0275\u0275text(3),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(4, T, 1, 1, "span", 3),
                    e.\u0275\u0275template(5, I, 2, 2, "button", 4),
                    e.\u0275\u0275template(6, L, 4, 3, "ul", 5),
                    e.\u0275\u0275elementEnd()),
                    2 & r && (e.\u0275\u0275propertyInterpolate1("id", "", g.id, "_div"),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275propertyInterpolate1("id", "", g.id, "_input"),
                    e.\u0275\u0275propertyInterpolate("required", g.required),
                    e.\u0275\u0275propertyInterpolate("placeholder", g.placeholder),
                    e.\u0275\u0275property("ngModel", g.text)("name", g.name)("disabled", g.disabled)("ngClass", e.\u0275\u0275pureFunction1(13, V, g.errorClass))("disabled", g.disabled),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275textInterpolate1("", g.fieldName ? g.fieldName : "Organisation ", " is required"),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", g.searching),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", g.fixedCreateBtn && g.allowAddNew && g.showFixedBtn && g.text.trim().length > 0 && !g.isItemExactMatch()),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", g.shown))
                },
                directives: [u.Fj, u.JJ, u.On, u.Q7, h.NgClass, h.NgIf, h.NgForOf],
                styles: [".autocomplete-wrapper[_ngcontent-%COMP%]{position:relative}.autocomplete-wrapper[_ngcontent-%COMP%]   .ac-loader[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;background:#fff url(https://d8it4huxumps7.cloudfront.net/images/ui-anim_basic_16x16.gif) no-repeat;background-position:center center;height:16px;width:22px;bottom:0;margin:auto}.autocomplete-wrapper[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-right:120px!important;box-sizing:border-box;height:43px;text-overflow:ellipsis;margin-bottom:0}.dropdown-content[_ngcontent-%COMP%]{position:absolute;width:100%;margin-top:0;z-index:9999}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#ff8f87!important;box-shadow:0 0 2px #ff6f6491!important}input.ng-invalid.ng-touched[_ngcontent-%COMP%] + .d-none[_ngcontent-%COMP%]{display:block!important;color:#f44336!important;font-size:12px!important;position:absolute;bottom:-5px;left:auto;right:10px;background:#fff;padding:0 5px;font-weight:500}.autocomplete-content[_ngcontent-%COMP%]{background:#fff;overflow:hidden;overflow-y:auto;box-shadow:0 3px 6px #0000004d;border-radius:5px 0 0 5px}.autocomplete-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px solid #e8e8e8;color:#484848;padding:8px 15px;font-size:14px;cursor:pointer;transition:.3s}.autocomplete-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#e8e8e8;color:#101010}.autocomplete-content[_ngcontent-%COMP%]   li.create-new[_ngcontent-%COMP%]{font-weight:500;color:#333;background:#e3e3e3}.autocomplete-content[_ngcontent-%COMP%]   li.create-new[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#0073e6;font-style:normal}.autocomplete-content[_ngcontent-%COMP%]   li.create-new[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .autocomplete-content[_ngcontent-%COMP%]   li.create-new[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-weight:500}.fixed-btn[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:0;top:0;margin:auto;height:30px;background:#E6F2FD;color:#0073e6;padding:0 12px;border-radius:50px;font-size:12px;font-weight:500;display:inline-block;transition:.3s}.fixed-btn[_ngcontent-%COMP%]:hover{background:#0073E6;color:#fff}"]
            }),
            m
        }
        )()
    }
    ,
    6322: (D,w,l)=>{
        l.d(w, {
            I: ()=>E
        });
        var e = l(49133)
          , M = l(86019)
          , O = l(83668);
        let E = (()=>{
            class u {
            }
            return u.\u0275fac = function(b) {
                return new (b || u)
            }
            ,
            u.\u0275mod = O.\u0275\u0275defineNgModule({
                type: u
            }),
            u.\u0275inj = O.\u0275\u0275defineInjector({
                imports: [[M.CommonModule, e.u5, e.UX]]
            }),
            u
        }
        )()
    }
    ,
    10994: (D,w,l)=>{
        l.d(w, {
            C: ()=>N
        });
        var e = l(83668)
          , M = l(9009)
          , O = l(44522)
          , E = l(86019)
          , u = l(7336)
          , h = l(49133)
          , b = l(16400)
          , T = l(6731);
        function I(d, v) {
            1 & d && (e.\u0275\u0275elementStart(0, "span", 24),
            e.\u0275\u0275text(1, "check"),
            e.\u0275\u0275elementEnd())
        }
        function A(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementContainerStart(0),
                e.\u0275\u0275elementStart(1, "div", 22),
                e.\u0275\u0275listener("click", function() {
                    const p = e.\u0275\u0275restoreView(n)
                      , x = p.$implicit
                      , F = p.index;
                    return e.\u0275\u0275nextContext(2).changeFile(x.src, F)
                }),
                e.\u0275\u0275template(2, I, 2, 0, "span", 23),
                e.\u0275\u0275element(3, "img", 6),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementContainerEnd()
            }
            if (2 & d) {
                const n = v.$implicit
                  , s = v.index
                  , p = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275classProp("active", p.curImg == s)("cropped", null == n ? null : n.updatedFile),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", null == n ? null : n.updatedFile),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("src", n.src, e.\u0275\u0275sanitizeUrl)
            }
        }
        function S(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementContainerStart(0),
                e.\u0275\u0275elementStart(1, "div", 18),
                e.\u0275\u0275template(2, A, 4, 6, "ng-container", 19),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "div", 20),
                e.\u0275\u0275elementStart(4, "image-cropper", 21),
                e.\u0275\u0275listener("imageCropped", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().imageCropped(p)
                })("imageLoaded", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().imageLoaded(p)
                })("cropperReady", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().cropperReady()
                })("loadImageFailed", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().loadImageFailed()
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementContainerEnd()
            }
            if (2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", n.fileList),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("imageBase64", n.imageBase64String)("maintainAspectRatio", n.maintainRatio)("aspectRatio", n.updatedAR)("canvasRotation", n.canvasRotation)("containWithinAspectRatio", n.containeAspectRatio)("transform", n.transform)
            }
        }
        function k(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 27),
                e.\u0275\u0275text(1, " GIF image found "),
                e.\u0275\u0275elementStart(2, "button", 28),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(2).uploadOriginal()
                }),
                e.\u0275\u0275text(3, "Continue with GIF"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        function L(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 20),
                e.\u0275\u0275template(1, k, 4, 0, "div", 25),
                e.\u0275\u0275elementStart(2, "image-cropper", 26),
                e.\u0275\u0275listener("imageCropped", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().imageCropped(p)
                })("imageLoaded", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().imageLoaded(p)
                })("cropperReady", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().cropperReady()
                })("loadImageFailed", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().loadImageFailed()
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.isGifImage),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("imageChangedEvent", n.singleImage)("maintainAspectRatio", n.maintainRatio)("aspectRatio", n.updatedAR)("canvasRotation", n.canvasRotation)("containWithinAspectRatio", n.containeAspectRatio)("resizeToWidth", n.resizeToWidth)("resizeToHeight", n.resizeToHeight)("transform", n.transform)
            }
        }
        function V(d, v) {
            if (1 & d && (e.\u0275\u0275elementStart(0, "a", 29),
            e.\u0275\u0275text(1, "Download"),
            e.\u0275\u0275elementEnd()),
            2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("href", n.croppedImage, e.\u0275\u0275sanitizeUrl)
            }
        }
        function R(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 30),
                e.\u0275\u0275elementStart(1, "button", 31),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().rotateLeft()
                }),
                e.\u0275\u0275element(2, "i", 32),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "button", 33),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().rotateRight()
                }),
                e.\u0275\u0275element(4, "i", 34),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(5, "button", 35),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().flipHorizontal()
                }),
                e.\u0275\u0275element(6, "i", 36),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(7, "button", 37),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().flipVertical()
                }),
                e.\u0275\u0275element(8, "i", 38),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(9, "button", 39),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().zoomIn()
                }),
                e.\u0275\u0275element(10, "i", 40),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(11, "button", 41),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().zoomOut()
                }),
                e.\u0275\u0275element(12, "i", 42),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        function m(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 43),
                e.\u0275\u0275elementStart(1, "input", 44),
                e.\u0275\u0275listener("ngModelChange", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().maintainRatio = p
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(2, "label", 45),
                e.\u0275\u0275text(3, "Maintain aspect ratio"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("checked", n.maintainRatio)("ngModel", n.maintainRatio)
            }
        }
        function y(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 46),
                e.\u0275\u0275elementStart(1, "label"),
                e.\u0275\u0275text(2, "Aspect ratio"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "mat-select", 47),
                e.\u0275\u0275listener("ngModelChange", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().selectedAspectRatio = p
                })("ngModelChange", function(p) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().updateAspectRatio(p)
                }),
                e.\u0275\u0275elementStart(4, "mat-option", 48),
                e.\u0275\u0275text(5, "Unstop Competition Banner(1920x557)"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(6, "mat-option", 48),
                e.\u0275\u0275text(7, "Unstop Blog Banner (700x400)"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(8, "mat-option", 48),
                e.\u0275\u0275text(9, "4:2"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(10, "mat-option", 48),
                e.\u0275\u0275text(11, "4:1"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(12, "mat-option", 48),
                e.\u0275\u0275text(13, "4:3"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(14, "mat-option", 48),
                e.\u0275\u0275text(15, "4:4"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(16, "mat-option", 48),
                e.\u0275\u0275text(17, "3:4"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(18, "mat-option", 48),
                e.\u0275\u0275text(19, "3:2"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("disabled", !n.maintainRatio)("ngModel", n.selectedAspectRatio),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("value", 1920 / 557),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 7 / 4),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 2),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 4),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 4 / 3),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 3 / 4),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("value", 1.5)
            }
        }
        function r(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 49),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().resetImage()
                }),
                e.\u0275\u0275element(1, "i", 50),
                e.\u0275\u0275elementEnd()
            }
        }
        function g(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 51),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().uploadImage()
                }),
                e.\u0275\u0275text(1, "Save"),
                e.\u0275\u0275elementEnd()
            }
        }
        function C(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "a", 52),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().uploadImage()
                }),
                e.\u0275\u0275text(1, "Download Image"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("href", n.croppedImage, e.\u0275\u0275sanitizeUrl)
            }
        }
        function P(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 51),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().updateAndNext()
                }),
                e.\u0275\u0275text(1, "Crop & Save"),
                e.\u0275\u0275elementEnd()
            }
        }
        function z(d, v) {
            if (1 & d) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 51),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().uploadMultiImage()
                }),
                e.\u0275\u0275text(1, "Continue"),
                e.\u0275\u0275elementEnd()
            }
        }
        let N = (()=>{
            class d {
                constructor(n) {
                    this.http = n,
                    this.imageChangedEvent = "",
                    this.selectedAspectRatio = 1920 / 557,
                    this.forPanel = !0,
                    this.resizeToWidth = "",
                    this.resizeToHeight = "",
                    this.isAdmin = !1,
                    this.isMultiple = !1,
                    this.containeAspectRatio = !1,
                    this.closePanel = new e.EventEmitter,
                    this.imageTobeUpload = new e.EventEmitter,
                    this.croppedImage = "",
                    this.scale = 1,
                    this.transform = {},
                    this.showCtrl = !1,
                    this.canvasRotation = 0,
                    this.rotation = 0,
                    this.maintainRatio = !0,
                    this.fileList = [],
                    this.curImg = 0,
                    this.isGifImage = !1
                }
                ngOnInit() {
                    this.updatedAR = this.selectedAspectRatio,
                    this.singleImage = this.imageChangedEvent
                }
                ngOnChanges(n) {
                    if (n.isMultiple) {
                        console.log("asdfsdfa", this.isMultiple);
                        let s = this.imageChangedEvent.target.files;
                        console.log(s);
                        for (let p = 0; p < s.length; p++) {
                            let x = {
                                src: null,
                                file: null,
                                updatedFile: null
                            };
                            const F = s[p];
                            let U = new FileReader;
                            U.onload = W=>{
                                var B;
                                x.src = W.target.result,
                                x.file = F,
                                this.fileList.push(x),
                                (null === (B = this.fileList) || void 0 === B ? void 0 : B.length) > 0 && (this.imageBase64String = this.fileList[0].src),
                                console.log(this.fileList)
                            }
                            ,
                            U.readAsDataURL(F)
                        }
                    }
                }
                changeFile(n, s) {
                    this.imageBase64String = n,
                    this.curImg = s,
                    console.log(this.fileList[this.curImg].file)
                }
                imageCropped(n) {
                    this.croppedImage = n.base64,
                    this.width = n.width,
                    this.height = n.height
                }
                imageLoaded(n) {
                    this.showCtrl = !0,
                    console.log(this.singleImage.target.files[0].name),
                    this.isGifImage = this.checkIfFileExtensionIsValid(this.singleImage.target.files[0].name, "gif"),
                    console.log(this.isGifImage)
                }
                cropperReady() {}
                loadImageFailed() {}
                zoomOut() {
                    this.scale -= .1,
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        scale: this.scale
                    })
                }
                zoomIn() {
                    this.scale += .1,
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        scale: this.scale
                    })
                }
                flipAfterRotate() {
                    const n = this.transform.flipH
                      , s = this.transform.flipV;
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        flipH: s,
                        flipV: n
                    })
                }
                rotateLeft() {
                    this.canvasRotation--,
                    this.flipAfterRotate()
                }
                rotateRight() {
                    this.canvasRotation++,
                    this.flipAfterRotate()
                }
                flipHorizontal() {
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        flipH: !this.transform.flipH
                    })
                }
                flipVertical() {
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        flipV: !this.transform.flipV
                    })
                }
                updateRotation() {
                    this.transform = Object.assign(Object.assign({}, this.transform), {
                        rotate: this.rotation
                    })
                }
                resetImage() {
                    this.scale = 1,
                    this.rotation = 0,
                    this.canvasRotation = 0,
                    this.transform = {}
                }
                exitModal() {
                    this.closePanel.emit(!0)
                }
                uploadOriginal() {
                    let n = {
                        file: this.imageChangedEvent.target.files[0],
                        filename: this.imageChangedEvent.target.files[0].name.toLowerCase(),
                        localFile: this.imageChangedEvent.target.files[0]
                    };
                    this.imageTobeUpload.emit(n),
                    this.exitModal()
                }
                uploadImage() {
                    this.croppedImageToUpload = (0,
                    M.Ll)(this.croppedImage);
                    let n = {
                        file: this.croppedImageToUpload,
                        filename: this.singleImage.target.files[0].name.toLowerCase(),
                        localFile: this.croppedImage
                    };
                    this.imageTobeUpload.emit(n),
                    this.exitModal()
                }
                updateAndNext() {
                    var n;
                    let p = {
                        file: (0,
                        M.Ll)(this.croppedImage),
                        filename: this.fileList[this.curImg].file.name.toLowerCase(),
                        localFile: this.fileList[this.curImg].file
                    };
                    if (this.fileList[this.curImg].updatedFile = p,
                    console.log(this.fileList),
                    console.log(this.checkIfAllFileCropped()),
                    !this.checkIfAllFileCropped()) {
                        let x = this.curImg < (null === (n = this.fileList) || void 0 === n ? void 0 : n.length) - 1 ? this.curImg + 1 : 0;
                        this.changeFile(this.fileList[x].src, x)
                    }
                }
                checkIfFileExtensionIsValid(n, s) {
                    const p = n.split(".");
                    return s.indexOf(p[p.length - 1].toLowerCase()) > -1
                }
                uploadMultiImage() {
                    this.imageTobeUpload.emit(this.fileList),
                    this.exitModal()
                }
                checkIfAllFileCropped() {
                    return !this.fileList.filter(s=>null == s.updatedFile).length
                }
                updateAspectRatio(n) {
                    console.log(n),
                    this.updatedAR = n
                }
            }
            return d.\u0275fac = function(n) {
                return new (n || d)(e.\u0275\u0275directiveInject(O.eN))
            }
            ,
            d.\u0275cmp = e.\u0275\u0275defineComponent({
                type: d,
                selectors: [["app-crop-image"]],
                inputs: {
                    imageChangedEvent: "imageChangedEvent",
                    selectedAspectRatio: "selectedAspectRatio",
                    forPanel: "forPanel",
                    resizeToWidth: "resizeToWidth",
                    resizeToHeight: "resizeToHeight",
                    isAdmin: "isAdmin",
                    isMultiple: "isMultiple",
                    containeAspectRatio: "containeAspectRatio"
                },
                outputs: {
                    closePanel: "closePanel",
                    imageTobeUpload: "imageTobeUpload"
                },
                features: [e.\u0275\u0275NgOnChangesFeature],
                decls: 22,
                vars: 14,
                consts: [[1, "bg", "fixed-bg-full"], [1, "crop-image-wrapper", "fix-center-box"], [4, "ngIf"], ["class", "board vertical-align", 4, "ngIf"], [1, "ctrl"], [1, "preview"], [3, "src"], ["download", "", "class", " preview-icon", "target", "_blank", "rel", "noopener nofollow", 3, "href", 4, "ngIf"], [1, "ratio"], [1, "btns"], ["class", "d-flex", 4, "ngIf"], ["class", "align-center ar-box", 4, "ngIf"], ["class", "aspect-ratio", 4, "ngIf"], [1, "publish"], [1, "btn", "z-depth-0", "red", 3, "click"], ["style", "width: auto; padding: 0px 20px; display: none;", "class", "btn z-depth-0 white-text", 3, "click", 4, "ngIf"], ["class", "btn z-depth-0 p-12", 3, "click", 4, "ngIf"], ["download", "", "class", "btn z-depth-0 p-12", "rel", "noopener nofollow", 3, "href", "click", 4, "ngIf"], [1, "image-list"], [4, "ngFor", "ngForOf"], [1, "board", "vertical-align"], ["format", "png", 3, "imageBase64", "maintainAspectRatio", "aspectRatio", "canvasRotation", "containWithinAspectRatio", "transform", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "s-img", 3, "click"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"], ["class", "is-gif", 4, "ngIf"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "canvasRotation", "containWithinAspectRatio", "resizeToWidth", "resizeToHeight", "transform", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "is-gif"], [1, "btn", "z-depth-0", "p-12", "waves-effect", 3, "click"], ["download", "", "target", "_blank", "rel", "noopener nofollow", 1, "preview-icon", 3, "href"], [1, "d-flex"], ["data-title", "Rotate Left", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-rotate-left"], ["data-title", "Rotate Right", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-rotate-right"], ["data-title", "Flip Horizontal", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-flip-horz"], ["data-title", "Flip Vertical", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-flip-vert"], ["data-title", "Zoom In", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-zoom-in"], ["data-title", "Zoom Out", 1, "d2c-popover", 3, "click"], [1, "icon", "icon-zoom-out"], [1, "align-center", "ar-box"], ["type", "checkbox", "id", "maintain-aspect", 1, "filled-in", 3, "checked", "ngModel", "ngModelChange"], ["for", "maintain-aspect"], [1, "aspect-ratio"], [3, "disabled", "ngModel", "ngModelChange"], [3, "value"], [1, "btn", "z-depth-0", "white-text", 2, "width", "auto", "padding", "0px 20px", "display", "none", 3, "click"], [1, "fa", "fa-refresh"], [1, "btn", "z-depth-0", "p-12", 3, "click"], ["download", "", "rel", "noopener nofollow", 1, "btn", "z-depth-0", "p-12", 3, "href", "click"]],
                template: function(n, s) {
                    1 & n && (e.\u0275\u0275element(0, "div", 0),
                    e.\u0275\u0275elementStart(1, "div", 1),
                    e.\u0275\u0275template(2, S, 5, 7, "ng-container", 2),
                    e.\u0275\u0275template(3, L, 3, 9, "div", 3),
                    e.\u0275\u0275elementStart(4, "div", 4),
                    e.\u0275\u0275elementStart(5, "div", 5),
                    e.\u0275\u0275element(6, "img", 6),
                    e.\u0275\u0275template(7, V, 2, 1, "a", 7),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(8, "div", 8),
                    e.\u0275\u0275text(9),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(10, "div", 9),
                    e.\u0275\u0275template(11, R, 13, 0, "div", 10),
                    e.\u0275\u0275template(12, m, 4, 2, "div", 11),
                    e.\u0275\u0275template(13, y, 20, 10, "div", 12),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(14, "div", 13),
                    e.\u0275\u0275elementStart(15, "button", 14),
                    e.\u0275\u0275listener("click", function() {
                        return s.exitModal()
                    }),
                    e.\u0275\u0275text(16, "Close"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(17, r, 2, 0, "button", 15),
                    e.\u0275\u0275template(18, g, 2, 0, "button", 16),
                    e.\u0275\u0275template(19, C, 2, 1, "a", 17),
                    e.\u0275\u0275template(20, P, 2, 0, "button", 16),
                    e.\u0275\u0275template(21, z, 2, 0, "button", 16),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd()),
                    2 & n && (e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", s.isMultiple),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", !s.isMultiple),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("src", s.croppedImage, e.\u0275\u0275sanitizeUrl),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.forPanel),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275textInterpolate2("Image size: ", s.width, "x", s.height, ""),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", s.isAdmin),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.isAdmin || !s.forPanel),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", !s.forPanel),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("ngIf", s.isAdmin),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.forPanel && !s.isMultiple),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", !s.forPanel && !s.isMultiple),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.isMultiple && !s.checkIfAllFileCropped()),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.isMultiple && s.checkIfAllFileCropped()))
                },
                directives: [E.NgIf, u.H, E.NgForOf, M.ap, h.Wl, h.JJ, h.On, b.gD, T.ey],
                styles: [".bg[_ngcontent-%COMP%]{z-index:999999;background:rgba(0,0,0,.58)}.crop-image-wrapper[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;border-radius:12px;display:flex;width:70%;height:85vh;z-index:9999990}.board[_ngcontent-%COMP%]{width:calc(100% - 300px);padding:30px;background:#f4f6fe;position:relative}.board[_ngcontent-%COMP%]     .ngx-ic-overlay{outline:none!important}.board[_ngcontent-%COMP%]     .ngx-ic-cropper{outline:100vw solid rgba(244,246,254,.75)!important}.board[_ngcontent-%COMP%]   .is-gif[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:15px 12px;display:flex;align-items:center;justify-content:space-between;background:rgba(234,240,255,.71);border-top:1px solid #cfdafb;font-size:14px}.ctrl[_ngcontent-%COMP%]{width:300px;padding:20px;position:relative}.ratio[_ngcontent-%COMP%]{text-align:center;padding:8px;background:#f4f6fe;margin:6px 0 10px;border-radius:6px;font-size:13px;font-weight:500;color:#606c7c}.preview[_ngcontent-%COMP%]{width:100%;margin-bottom:18px;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative;max-height:40vh}.preview[_ngcontent-%COMP%]   .preview-icon[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%);left:50%;bottom:-100%;background:rgba(23,110,222,.82);color:#fff;cursor:pointer;padding:6px 12px;font-size:12px;border-radius:4px;transition:.4s}.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;border:2px solid #e6e9f5}.preview[_ngcontent-%COMP%]:hover   .preview-icon[_ngcontent-%COMP%]{bottom:6px}.publish[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;border-top:1px solid #ddd;left:0px;right:0;padding:15px 20px;display:flex;justify-content:space-between;align-items:center;background:#fff}.btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #ddd;width:100%;text-align:center;padding:3px;margin:0 3px;border-radius:4px;color:#555;display:flex;align-items:center;justify-content:center;height:34px;position:relative;z-index:9}.btns[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:22px;width:22px;display:inline-block;background:url(https://d8it4huxumps7.cloudfront.net/uploads/images/manage-registrations/cropping-tool.svg);background-size:22px 165px;opacity:.7}.btns[_ngcontent-%COMP%]   .icon-zoom-in[_ngcontent-%COMP%]{background-position:0 -143px}.btns[_ngcontent-%COMP%]   .icon-zoom-out[_ngcontent-%COMP%]{background-position:0 -113px}.btns[_ngcontent-%COMP%]   .icon-flip-vert[_ngcontent-%COMP%]{background-position:0 -29px}.btns[_ngcontent-%COMP%]   .icon-flip-horz[_ngcontent-%COMP%]{background-position:0 0px}.btns[_ngcontent-%COMP%]   .icon-rotate-left[_ngcontent-%COMP%]{background-position:0 -58px}.btns[_ngcontent-%COMP%]   .icon-rotate-right[_ngcontent-%COMP%]{background-position:0 -84px}.default[_ngcontent-%COMP%]{padding:12px;margin:-20px -20px 20px;border-bottom:1px solid #ddd}.aspect-ratio[_ngcontent-%COMP%]{margin-bottom:15px}.aspect-ratio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;color:#333}.aspect-ratio[_ngcontent-%COMP%]     .mat-select-trigger{height:36px!important;font-size:13px;border:1px solid #ddd;border-radius:6px;padding:0 10px;margin-top:6px}.ar-box[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:25px}.ar-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:auto;padding-left:24px;font-weight:500;color:#555;margin-left:4px}.image-list[_ngcontent-%COMP%]{padding:10px;width:100px;text-align:center}.image-list[_ngcontent-%COMP%]   .s-img[_ngcontent-%COMP%]{width:100%;height:60px;margin-bottom:10px;border:2px solid #ddd;text-align:center;display:flex;align-items:center;justify-content:center;border-radius:4px;cursor:pointer;position:relative;transition:.4s}.image-list[_ngcontent-%COMP%]   .s-img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;background:#0cb66e;color:#fff;font-size:12px;top:-7px;right:-6px;padding:2px;border-radius:50%}.image-list[_ngcontent-%COMP%]   .s-img.active[_ngcontent-%COMP%], .image-list[_ngcontent-%COMP%]   .s-img[_ngcontent-%COMP%]:hover{border-color:#0073e6}.image-list[_ngcontent-%COMP%]   .s-img.cropped[_ngcontent-%COMP%]{border-color:#0cb66e}.image-list[_ngcontent-%COMP%]   .s-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}@media (max-width: 600px){.crop-image-wrapper[_ngcontent-%COMP%]{flex-direction:column;width:100%;height:100vh;border-radius:0}.board[_ngcontent-%COMP%]{height:80vh;width:100%;padding:15px}.publish[_ngcontent-%COMP%]{position:static;padding:8px 0;margin-top:10px}.ctrl[_ngcontent-%COMP%]{width:100%;padding:10px}.preview[_ngcontent-%COMP%]{display:none}.image-list[_ngcontent-%COMP%]{display:flex;width:100%;overflow-x:auto}.image-list[_ngcontent-%COMP%]   .s-img[_ngcontent-%COMP%]{height:40px;margin:0 5px}}"]
            }),
            d
        }
        )()
    }
    ,
    85693: (D,w,l)=>{
        l.d(w, {
            U: ()=>u
        });
        var e = l(86019)
          , M = l(74859)
          , O = l(9009)
          , E = l(83668);
        let u = (()=>{
            class h {
            }
            return h.\u0275fac = function(T) {
                return new (T || h)
            }
            ,
            h.\u0275mod = E.\u0275\u0275defineNgModule({
                type: h
            }),
            h.\u0275inj = E.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, M.m, O.QG]]
            }),
            h
        }
        )()
    }
    ,
    51714: (D,w,l)=>{
        l.d(w, {
            T: ()=>Z
        });
        var e = l(83668)
          , M = l(67686)
          , O = l(77976)
          , E = l(23405)
          , u = l(60540)
          , h = l(38053)
          , b = l(4102)
          , T = l(65686)
          , I = l(66658)
          , A = l(52047)
          , S = l(44522)
          , k = l(21978)
          , L = l(53010)
          , V = l(12090)
          , R = l(86019)
          , m = l(49133)
          , y = l(36635)
          , r = l(22721)
          , g = l(6731)
          , C = l(94774)
          , P = l(7336)
          , z = l(10994);
        const N = ["error_field"];
        function d(c, f) {
            if (1 & c) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 3),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const o = e.\u0275\u0275nextContext();
                    return o.closeModal(o.addOrganisationModalActions)
                }),
                e.\u0275\u0275elementEnd()
            }
        }
        function v(c, f) {
            1 & c && (e.\u0275\u0275elementStart(0, "div", 34),
            e.\u0275\u0275text(1, " Minimum 2 characters are required! "),
            e.\u0275\u0275elementEnd())
        }
        function n(c, f) {
            if (1 & c) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "mat-option", 37),
                e.\u0275\u0275listener("click", function() {
                    const a = e.\u0275\u0275restoreView(t).$implicit;
                    return e.\u0275\u0275nextContext(3).selectOrganisation(a)
                }),
                e.\u0275\u0275text(1),
                e.\u0275\u0275elementEnd()
            }
            if (2 & c) {
                const t = f.$implicit;
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", t.name, " ")
            }
        }
        function s(c, f) {
            if (1 & c && (e.\u0275\u0275elementStart(0, "div", 35),
            e.\u0275\u0275template(1, n, 2, 1, "mat-option", 36),
            e.\u0275\u0275elementEnd()),
            2 & c) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngForOf", t.topOrganisation)
            }
        }
        function p(c, f) {
            1 & c && (e.\u0275\u0275elementStart(0, "div", 34),
            e.\u0275\u0275text(1, " Organisation Type is Required "),
            e.\u0275\u0275elementEnd())
        }
        function x(c, f) {
            1 & c && (e.\u0275\u0275elementStart(0, "div", 50, 51),
            e.\u0275\u0275text(2, " This field is required. "),
            e.\u0275\u0275elementEnd())
        }
        function F(c, f) {
            1 & c && e.\u0275\u0275element(0, "a", 52),
            2 & c && e.\u0275\u0275property("innerHTML", f.$implicit, e.\u0275\u0275sanitizeHtml)
        }
        function U(c, f) {
            1 & c && (e.\u0275\u0275elementStart(0, "div", 50, 51),
            e.\u0275\u0275text(2, " This field is required. "),
            e.\u0275\u0275elementEnd())
        }
        function W(c, f) {
            1 & c && e.\u0275\u0275element(0, "a", 52),
            2 & c && e.\u0275\u0275property("innerHTML", f.$implicit, e.\u0275\u0275sanitizeHtml)
        }
        function B(c, f) {
            1 & c && e.\u0275\u0275element(0, "a", 52),
            2 & c && e.\u0275\u0275property("innerHTML", f.$implicit, e.\u0275\u0275sanitizeHtml)
        }
        function K(c, f) {
            if (1 & c) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 38),
                e.\u0275\u0275elementStart(1, "div", 39),
                e.\u0275\u0275elementStart(2, "label"),
                e.\u0275\u0275text(3, "Country"),
                e.\u0275\u0275elementStart(4, "sup"),
                e.\u0275\u0275text(5, "*"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(6, x, 3, 0, "div", 40),
                e.\u0275\u0275elementStart(7, "ng-autocomplete", 41),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).get_countries()
                })("selected", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).selectEvent(o, "countries")
                })("inputChanged", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onChangeSearch(o)
                })("inputFocused", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onFocused(o)
                })("inputCleared", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).newOrganisation.country = null
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(8, F, 1, 1, "ng-template", null, 42, e.\u0275\u0275templateRefExtractor),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(10, "div", 43),
                e.\u0275\u0275elementStart(11, "label"),
                e.\u0275\u0275text(12, "State/Province"),
                e.\u0275\u0275elementStart(13, "sup"),
                e.\u0275\u0275text(14, "*"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(15, U, 3, 0, "div", 40),
                e.\u0275\u0275elementStart(16, "ng-autocomplete", 44),
                e.\u0275\u0275listener("selected", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).selectEvent(o, "state")
                })("inputChanged", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onChangeSearch(o)
                })("inputFocused", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onFocused(o)
                })("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).newOrganisation.state = o
                })("inputCleared", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).newOrganisation.state = null
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(17, W, 1, 1, "ng-template", null, 45, e.\u0275\u0275templateRefExtractor),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(19, "div", 46),
                e.\u0275\u0275elementStart(20, "label", 47),
                e.\u0275\u0275text(21, "City"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(22, "ng-autocomplete", 48),
                e.\u0275\u0275listener("selected", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).selectEvent(o, "city")
                })("inputChanged", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onChangeSearch(o)
                })("inputFocused", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onFocused(o)
                })("inputCleared", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).newOrganisation.city = null
                })("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).newOrganisation.city = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(23, B, 1, 1, "ng-template", null, 49, e.\u0275\u0275templateRefExtractor),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & c) {
                const t = e.\u0275\u0275reference(9)
                  , i = e.\u0275\u0275reference(18)
                  , o = e.\u0275\u0275reference(24)
                  , a = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("ngIf", !a.newOrganisation.country || "" == a.newOrganisation.country),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("data", a.countries)("searchKeyword", a.keyword)("itemTemplate", t),
                e.\u0275\u0275advance(8),
                e.\u0275\u0275property("ngIf", !a.newOrganisation.state || "" == a.newOrganisation.state),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("data", a.states)("searchKeyword", a.keyword)("itemTemplate", i)("ngModel", a.newOrganisation.state),
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("data", a.cities)("searchKeyword", a.keyword)("itemTemplate", o)("ngModel", a.newOrganisation.city)
            }
        }
        function j(c, f) {
            if (1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275element(1, "img", 53),
            e.\u0275\u0275elementStart(2, "div", 54),
            e.\u0275\u0275text(3, "Change Logo"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementContainerEnd()),
            2 & c) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275propertyInterpolate("src", t.newOrganisation.logo, e.\u0275\u0275sanitizeUrl)
            }
        }
        function H(c, f) {
            1 & c && (e.\u0275\u0275elementStart(0, "i", 55),
            e.\u0275\u0275text(1, "cloud_upload"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(2, "span"),
            e.\u0275\u0275text(3, "Click here to upload a logo"),
            e.\u0275\u0275elementEnd())
        }
        function Q(c, f) {
            if (1 & c && (e.\u0275\u0275elementStart(0, "div", 56),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & c) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", t.error.logo.message, " ")
            }
        }
        function G(c, f) {
            if (1 & c) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "app-crop-image", 57),
                e.\u0275\u0275listener("imageTobeUpload", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).uploadLogo(o)
                })("closePanel", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).exit(o)
                }),
                e.\u0275\u0275elementEnd()
            }
            if (2 & c) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("containeAspectRatio", !0)("selectedAspectRatio", t.aspectRatio)("forPanel", !0)("imageChangedEvent", t.uploadedFile)("resizeToWidth", 200)("resizeToHeight", 200)
            }
        }
        const J = function(c) {
            return {
                errors: c
            }
        };
        function Y(c, f) {
            if (1 & c) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 4),
                e.\u0275\u0275elementStart(1, "div", 5),
                e.\u0275\u0275elementStart(2, "form", 6, 7),
                e.\u0275\u0275elementStart(4, "div", 8),
                e.\u0275\u0275elementStart(5, "label", 9),
                e.\u0275\u0275text(6, "Organisation Name"),
                e.\u0275\u0275elementStart(7, "sup"),
                e.\u0275\u0275text(8, "*"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(9, "input", 10, 11),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.name = o
                })("keyup", function() {
                    e.\u0275\u0275restoreView(t);
                    const o = e.\u0275\u0275nextContext();
                    return o.getTop5OrganisationDebounce(o.newOrganisation.name)
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(11, v, 2, 0, "div", 12),
                e.\u0275\u0275template(12, s, 2, 1, "div", 13),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(13, "div", 14),
                e.\u0275\u0275elementStart(14, "div", 15),
                e.\u0275\u0275text(15, " Organisation type "),
                e.\u0275\u0275elementStart(16, "sup"),
                e.\u0275\u0275text(17, "*"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(18, "div", 16),
                e.\u0275\u0275elementStart(19, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(21, "label", 19),
                e.\u0275\u0275text(22, "Business School"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(23, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(25, "label", 19),
                e.\u0275\u0275text(26, "Engineering College"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(27, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(29, "label", 19),
                e.\u0275\u0275text(30, "Company"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(31, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(33, "label", 19),
                e.\u0275\u0275text(34, "University"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(35, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(37, "label", 19),
                e.\u0275\u0275text(38, "School"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(39, "input", 17, 18),
                e.\u0275\u0275listener("ngModelChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.organisation_type = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(41, "label", 19),
                e.\u0275\u0275text(42, "Others"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(43, p, 2, 0, "div", 12),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(44, K, 25, 13, "div", 20),
                e.\u0275\u0275elementStart(45, "div", 21),
                e.\u0275\u0275elementStart(46, "div", 15),
                e.\u0275\u0275text(47, " Organisation logo "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(48, "label", 22),
                e.\u0275\u0275elementStart(49, "input", 23),
                e.\u0275\u0275listener("click", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().removeBeforeSelected(o)
                })("change", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().getLogo(o)
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(50, j, 4, 1, "ng-container", 24),
                e.\u0275\u0275template(51, H, 4, 0, "ng-template", null, 25, e.\u0275\u0275templateRefExtractor),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(53, Q, 2, 1, "div", 26),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(54, G, 1, 6, "app-crop-image", 27),
                e.\u0275\u0275elementStart(55, "div", 28),
                e.\u0275\u0275elementStart(56, "label", 29),
                e.\u0275\u0275text(57, "About Organisation"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(58, "simple-tiny", 30),
                e.\u0275\u0275listener("contentChange", function(o) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().newOrganisation.about = o
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(59, "div", 31),
                e.\u0275\u0275elementStart(60, "span", 32),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(t);
                    const o = e.\u0275\u0275nextContext();
                    return o.closeModal(o.addOrganisationModalActions)
                }),
                e.\u0275\u0275text(61, " Close "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(62, "button", 33),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().agreeAddOrganisation()
                }),
                e.\u0275\u0275text(63, "Submit"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & c) {
                const t = e.\u0275\u0275reference(3)
                  , i = e.\u0275\u0275reference(10)
                  , o = e.\u0275\u0275reference(20)
                  , a = e.\u0275\u0275reference(52)
                  , _ = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(49, J, i.invalid && (i.dirty || i.touched))),
                e.\u0275\u0275advance(5),
                e.\u0275\u0275property("ngModel", _.newOrganisation.name),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", i.invalid && (i.dirty || i.touched)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !_.hideTopOrgList && _.topOrganisation && _.topOrganisation.length > 0),
                e.\u0275\u0275advance(7),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type2", _.cnt, ""),
                e.\u0275\u0275property("value", 2)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type2", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type3", _.cnt, ""),
                e.\u0275\u0275property("value", 3)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type3", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type1", _.cnt, ""),
                e.\u0275\u0275property("value", 1)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type1", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type5", _.cnt, ""),
                e.\u0275\u0275property("value", 5)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type5", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type6", _.cnt, ""),
                e.\u0275\u0275property("value", 6)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type6", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("name", "org_type", _.cnt, ""),
                e.\u0275\u0275propertyInterpolate1("id", "org_type4", _.cnt, ""),
                e.\u0275\u0275property("value", 4)("ngModel", _.newOrganisation.organisation_type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275propertyInterpolate1("for", "org_type4", _.cnt, ""),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", o.invalid),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", (2 == _.newOrganisation.organisation_type || 3 == _.newOrganisation.organisation_type || 5 == _.newOrganisation.organisation_type || 6 == _.newOrganisation.organisation_type) && "" == _.customfields),
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("ngIf", _.newOrganisation.logo)("ngIfElse", a),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", _.error.logo.status),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", _.uploadedFile),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("elementId", "custom-msg-editor")("content", _.newOrganisation.about)("hideFontSize", !0)("height", 350)("activeToolbar2", !0)("showLink", !0)("paragraph", !0)("showMenubar", !0),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("disabled", t.invalid || _.error_field)
            }
        }
        let Z = (()=>{
            class c {
                constructor(t, i, o, a, _) {
                    this.helper = t,
                    this.http = i,
                    this.toastService = o,
                    this.store = a,
                    this.authService = _,
                    this.id = "" + (new Date).getTime(),
                    this.getSuggestionsFromServer = !0,
                    this.resetAfterSelect = !1,
                    this.fillAfterSelect = !1,
                    this.required = !1,
                    this.organisation = {
                        name: ""
                    },
                    this.placeHolder = "Start typing Organisation name to select one",
                    this.allowAddNew = !0,
                    this.cnt = 1,
                    this.name = "",
                    this.defaultOrgType = null,
                    this.opportunity_id = null,
                    this.filters = "",
                    this.disabled = !1,
                    this.customfields = "",
                    this.fixedCreateBtn = !1,
                    this.organisationSelected = new e.EventEmitter,
                    this.organisationChange = new e.EventEmitter,
                    this.focusStatus = new e.EventEmitter,
                    this.newOrganisationAdded = new e.EventEmitter,
                    this.searchingOrg = !1,
                    this.searchQuery = "",
                    this.addOrganisationMode = !1,
                    this.addOrganisationModalActions = !1,
                    this.newOrganisation = {
                        moderation_status: 0,
                        name: "",
                        added_by: 0,
                        organisation_type: null,
                        address: null,
                        city: "",
                        state: "",
                        country: "",
                        abbr: null,
                        logo: null,
                        about: ""
                    },
                    this.cities = [],
                    this.states = [],
                    this.statesAndCities = [],
                    this.countryStates = [],
                    this.hideTopOrgList = !1,
                    this.topFiveOrg = new E.xQ,
                    this.aspectRatio = 1,
                    this.error = {
                        logo: {
                            status: !1,
                            message: ""
                        }
                    },
                    this.statesCity$ = this.statesCity("India").pipe((0,
                    h.U)($=>$), (0,
                    b.d)())
                }
                ngOnChanges(t) {
                    (t.getSuggestionsFromServer || t.suggestions) && (this.getSuggestionsFromServer = !this.suggestions),
                    t.organisation && (this.organisation || (this.organisation = {
                        name: ""
                    }))
                }
                ngOnInit() {
                    this.currentUser = this.authService.currentUser,
                    this.getSuggestionsFromServer = !this.suggestions,
                    console.log(this.getSuggestionsFromServer),
                    this.defaultOrgType && (this.newOrganisation.organisation_type = this.defaultOrgType),
                    this.getCountries(),
                    this.topFiveOrg.pipe((0,
                    T.b)(1e3)).subscribe(t=>{
                        this.getTop5Organisation(t)
                    }
                    )
                }
                handleOrganisationFocus(t) {
                    setTimeout(()=>{
                        console.log("B. Focus", this.organisation),
                        !t && !this.addOrganisationMode && (null == this.organisation || !this.organisation.hasOwnProperty("id")) && (this.organisation = {
                            name: ""
                        }),
                        console.log("Aft. Focus", this.organisation),
                        this.organisationChange.emit(this.organisation),
                        this.focusStatus.emit(t)
                    }
                    , 250)
                }
                addNewOrganisation(t) {
                    console.log("Add New Org:", t),
                    this.addOrganisationMode = !0,
                    this.newOrganisation.name = t,
                    this.currentUser && (this.newOrganisation.added_by = this.currentUser.id),
                    this.openModal(this.addOrganisationModalActions)
                }
                agreeAddOrganisation() {
                    this.customfields && "" != this.customfields && (this.newOrganisation.organisation_type = parseInt(this.customfields),
                    this.newOrganisation.moderation_status = 7),
                    this.saveNewOrganisation(this.newOrganisation).subscribe(t=>{
                        const i = t.data.status;
                        if (this.closeModal(this.addOrganisationModalActions),
                        !0 !== i)
                            return this.toastService.toast(t.data.message, 3e3, "red");
                        this.toastService.toast("Organisation added successfully!", 3e3, "green"),
                        this.organisation = t.data.organisation,
                        this.organisationChange.emit(this.organisation),
                        this.newOrganisationAdded.emit(this.organisation),
                        this.focusStatus.emit(!1),
                        console.log("update focus"),
                        this.addOrganisationMode = !1
                    }
                    )
                }
                orgSelected(t) {
                    this.fillAfterSelect || (this.organisation = t),
                    this.resetAfterSelect && (this.organisation = {
                        name: ""
                    }),
                    this.organisationSelected.emit(t),
                    this.organisationChange.emit(this.organisation),
                    console.log("select")
                }
                getOrganisationList(t) {
                    this.searchingOrg = !0;
                    const i = t;
                    this.searchQuery = t,
                    null != this.opportunity_id && "" == this.filters && (this.filters += "opp_id=" + this.opportunity_id),
                    console.log(this.getSuggestionsFromServer),
                    this.getSuggestionsFromServer ? this.getOrganisationAutoComplete(i, this.filters).pipe((0,
                    I.x)(()=>{
                        this.searchingOrg = !1
                    }
                    )).subscribe(o=>{
                        this.organisationsList = o.data
                    }
                    ) : this.suggestions && this.suggestions.length > 0 ? (this.organisationsList = this.suggestions.filter(o=>o.name.startsWith(i)),
                    this.searchingOrg = !1) : (this.organisationsList = [],
                    this.searchingOrg = !1)
                }
                openModal(t) {
                    this.addOrganisationModalActions = !0
                }
                closeModal(t) {
                    this.addOrganisationModalActions = !1
                }
                getOrganisationAutoComplete(t, i="") {
                    return this.http.get("/api/autocomplete/" + t + "/Organisation/name?" + i).pipe((0,
                    h.U)(a=>a)).pipe((0,
                    A.K)(this.handleError))
                }
                saveNewOrganisation(t) {
                    return this.http.post("/api/organisation/add-new", t).pipe((0,
                    h.U)(a=>a)).pipe((0,
                    A.K)(this.handleError))
                }
                getCountries() {
                    return this.http.get("/api/public/get-countries").pipe((0,
                    h.U)(i=>i), (0,
                    b.d)()).pipe((0,
                    A.K)(this.handleError))
                }
                statesCity(t) {
                    return this.http.get("/api/public/get-citiesdata?country=" + t).pipe((0,
                    h.U)(o=>o), (0,
                    b.d)()).pipe((0,
                    A.K)(this.handleError))
                }
                handleError(t) {
                    try {
                        return (0,
                        u._)(t)
                    } catch (i) {
                        return (0,
                        u._)(t)
                    }
                }
                get_countries() {
                    !this.countries || this.countries.length < 1 ? this.getCountries().subscribe(t=>{
                        this.countries = t.data,
                        console.log(this.countries, "countries")
                    }
                    ) : console.log("Skip calling country data")
                }
                selectEvent(t, i) {
                    if (console.log("Type:", i, "Event:", t),
                    "countries" == i)
                        this.newOrganisation.country = t,
                        this.countryStates[t] ? (console.log("Skip Fetching states data:", this.countryStates[t]),
                        this.statesAndCities = this.countryStates[t],
                        this.states = this.statesAndCities.map(o=>o.StateName)) : this.statesCity(t).subscribe(o=>{
                            this.statesAndCities = o.data,
                            this.countryStates[t] = this.statesAndCities,
                            this.states = this.statesAndCities.map(a=>a.StateName),
                            console.log(this.states)
                        }
                        );
                    else if ("state" == i) {
                        this.newOrganisation.state = t;
                        let o = this.statesAndCities.find(a=>a.StateName == t);
                        this.cities = o.Cities
                    } else
                        "city" == i && (this.newOrganisation.city = t)
                }
                onChangeSearch(t) {
                    console.log(t)
                }
                onFocused(t) {
                    console.log(t)
                }
                getTop5OrganisationDebounce(t) {
                    this.topFiveOrg.next(t)
                }
                getTop5Organisation(t) {
                    t.length > 1 && (this.hideTopOrgList = !1,
                    console.log(t),
                    this.http.get("/api/top5-organisations/" + t).subscribe(o=>{
                        o.data && (this.topOrganisation = o.data,
                        console.log(this.topOrganisation))
                    }
                    ))
                }
                selectOrganisation(t) {
                    this.newOrganisation.name = t.name,
                    console.log(t),
                    this.organisation = t,
                    this.organisationSelected.emit(this.organisation),
                    this.organisationChange.emit(this.organisation),
                    console.log("select"),
                    this.closeModal(this.addOrganisationModalActions),
                    this.hideTopOrgList = !0
                }
                clearedInput(t) {
                    this.newOrganisation[t] = null,
                    "country" == t ? (this.newOrganisation.city = null,
                    this.newOrganisation.state = null) : "state" == t && (this.newOrganisation.city = null)
                }
                getLogo(t) {
                    const i = t.target.files;
                    if (i.length > 0) {
                        const o = i[0];
                        if (o.size > 1048576)
                            this.error.logo.status = !0,
                            this.error.logo.message = "Logo Size exceeds limit of 1 MB.";
                        else {
                            console.log(o);
                            let a = this.helper.checkIfFileExtensionIsValid(o.name);
                            console.log(a),
                            a ? this.uploadedFile = t : (this.error.logo.status = !0,
                            this.error.logo.message = "Allowed File Formats are jpg, gif & png.")
                        }
                    }
                }
                removeBeforeSelected(t) {
                    t && (t.target.value = "")
                }
                exit(t) {
                    t && (this.uploadedFile = null)
                }
                uploadLogo(t) {
                    console.log(t),
                    console.log(t.file),
                    (new FormData).append("logo", t.file, t.filename),
                    this.newOrganisation.logo = t.localFile
                }
            }
            return c.\u0275fac = function(t) {
                return new (t || c)(e.\u0275\u0275directiveInject(O.W_),e.\u0275\u0275directiveInject(S.eN),e.\u0275\u0275directiveInject(k.k),e.\u0275\u0275directiveInject(L.yh),e.\u0275\u0275directiveInject(M.e))
            }
            ,
            c.\u0275cmp = e.\u0275\u0275defineComponent({
                type: c,
                selectors: [["app-organisation-autocomplete"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.\u0275\u0275viewQuery(N, 5),
                    2 & t) {
                        let o;
                        e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (i.error_field = o.first)
                    }
                },
                inputs: {
                    id: "id",
                    getSuggestionsFromServer: "getSuggestionsFromServer",
                    suggestions: "suggestions",
                    resetAfterSelect: "resetAfterSelect",
                    fillAfterSelect: "fillAfterSelect",
                    required: "required",
                    organisation: "organisation",
                    placeHolder: "placeHolder",
                    allowAddNew: "allowAddNew",
                    cnt: "cnt",
                    name: "name",
                    defaultOrgType: "defaultOrgType",
                    opportunity_id: "opportunity_id",
                    filters: "filters",
                    disabled: "disabled",
                    fieldName: "fieldName",
                    customfields: "customfields",
                    fixedCreateBtn: "fixedCreateBtn"
                },
                outputs: {
                    organisationSelected: "organisationSelected",
                    organisationChange: "organisationChange",
                    focusStatus: "focusStatus",
                    newOrganisationAdded: "newOrganisationAdded"
                },
                features: [e.\u0275\u0275NgOnChangesFeature],
                decls: 3,
                vars: 15,
                consts: [[3, "id", "resetAfterSelect", "searching", "suggestions", "placeholder", "value", "allowAddNew", "fieldName", "name", "required", "disabled", "keepSuggestions", "fixedCreateBtn", "focusStatus", "itemSelected", "valueChange", "completeMethod", "addNewEvent"], ["class", "modal-bg", 3, "click", 4, "ngIf"], ["id", "new-orgasation-modal", "class", "modal", 4, "ngIf"], [1, "modal-bg", 3, "click"], ["id", "new-orgasation-modal", 1, "modal"], [1, "clearfix", "modal-content"], [1, "mb-0"], ["organisationForm", "ngForm"], [1, "d2c_box", "input_fields", 3, "ngClass"], ["for", "org_name"], ["name", "org_name", "type", "text", "id", "org_name", "minlength", "2", "required", "", "appDisableAutofill", "", 1, "mb-0", 3, "ngModel", "ngModelChange", "keyup"], ["title", "ngModel"], ["class", "error", 4, "ngIf"], ["class", "org_box", 4, "ngIf"], [1, "d2c_box", "type-radios"], [1, "label_title", "mb-15"], ["ngClass", "radio_type"], ["type", "radio", "required", "", 3, "name", "id", "value", "ngModel", "ngModelChange"], ["org", "ngModel"], [3, "for"], ["class", "d2c_box", 4, "ngIf"], [1, "d2c_box", "file-field"], ["for", "opp_logo_org", 1, "upload-logo"], ["type", "file", "name", "logo", "id", "opp_logo_org", 3, "click", "change"], [4, "ngIf", "ngIfElse"], ["blank", ""], ["class", "red-text required-error font-12", 4, "ngIf"], [3, "containeAspectRatio", "selectedAspectRatio", "forPanel", "imageChangedEvent", "resizeToWidth", "resizeToHeight", "imageTobeUpload", "closePanel", 4, "ngIf"], [1, "d2c_box", "input_fields"], ["for", "org_about"], [3, "elementId", "content", "hideFontSize", "height", "activeToolbar2", "showLink", "paragraph", "showMenubar", "contentChange"], [1, "modal_footer"], [1, "d2c_bdr_btn", 3, "click"], ["type", "submit", "value", "Submit", 1, "d2c_btn", "waves-effect", 3, "disabled", "click"], [1, "error"], [1, "org_box"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "d2c_box"], ["for", "org_countrie", 1, "input_fields", "mb-20"], ["class", "error br", 4, "ngIf"], ["placeHolder", "", "historyIdentifier", "countries", "appDisableAutofill", "", 3, "data", "searchKeyword", "itemTemplate", "click", "selected", "inputChanged", "inputFocused", "inputCleared"], ["countryTemplate", ""], ["for", "state", 1, "input_fields", "mb-20"], ["placeHolder", "", "appDisableAutofill", "", 3, "data", "searchKeyword", "itemTemplate", "ngModel", "selected", "inputChanged", "inputFocused", "ngModelChange", "inputCleared"], ["stateTemplate", ""], [1, "input_fields"], ["for", "org_city"], ["placeHolder", "", "appDisableAutofill", "", 3, "data", "searchKeyword", "itemTemplate", "ngModel", "selected", "inputChanged", "inputFocused", "inputCleared", "ngModelChange"], ["itemTemplate", ""], [1, "error", "br"], ["error_field", ""], [3, "innerHTML"], ["alt", "logo", 3, "src"], [1, "change-logo-text"], [1, "material-icons"], [1, "red-text", "required-error", "font-12"], [3, "containeAspectRatio", "selectedAspectRatio", "forPanel", "imageChangedEvent", "resizeToWidth", "resizeToHeight", "imageTobeUpload", "closePanel"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-autocomplete", 0),
                    e.\u0275\u0275listener("focusStatus", function(a) {
                        return i.handleOrganisationFocus(a)
                    })("itemSelected", function(a) {
                        return i.orgSelected(a)
                    })("valueChange", function(a) {
                        return i.organisation = a
                    })("completeMethod", function(a) {
                        return i.getOrganisationList(a)
                    })("addNewEvent", function(a) {
                        return i.addNewOrganisation(a)
                    }),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(1, d, 1, 0, "div", 1),
                    e.\u0275\u0275template(2, Y, 64, 51, "div", 2)),
                    2 & t && (e.\u0275\u0275propertyInterpolate1("id", "", i.id, "-organisation_select"),
                    e.\u0275\u0275property("resetAfterSelect", !0)("searching", i.searchingOrg)("suggestions", i.organisationsList)("placeholder", i.placeHolder)("value", i.organisation)("allowAddNew", i.allowAddNew)("fieldName", i.fieldName)("name", i.name)("required", i.required)("disabled", i.disabled)("keepSuggestions", !0)("fixedCreateBtn", i.fixedCreateBtn),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.addOrganisationModalActions),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.addOrganisationModalActions))
                },
                directives: [V.Y, R.NgIf, m._Y, m.JL, m.F, R.NgClass, m.Fj, m.wO, m.Q7, y.O, m.JJ, m.On, m._, r.d, R.NgForOf, g.ey, C.YR, P.H, z.C],
                styles: ["[type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{left:0}.input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:static}.input_fields[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{right:30px;bottom:14px;background:#fff;padding:0 10px;z-index:9}.input_fields[_ngcontent-%COMP%]   .error.br[_ngcontent-%COMP%]{right:10px;bottom:-8px}.modal[_ngcontent-%COMP%]{width:100%;max-width:600px;top:0;bottom:0;height:100vh;max-height:100vh!important;overflow:hidden!important;left:auto;border-radius:0;background:#F6F8FA}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:30px;height:calc(100vh - 60px);overflow-y:auto}.modal[_ngcontent-%COMP%]   .org_box[_ngcontent-%COMP%]{background:#fff;position:absolute;width:100%;height:190px;z-index:99;overflow:hidden;overflow-y:auto;box-shadow:0 3px 6px #0000004d;border-radius:5px 0 0 5px}.modal[_ngcontent-%COMP%]   .org_box[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%]{line-height:38px;height:38px;padding:0 15px;color:#484848;font-size:14px;border-bottom:1px solid #e8e8e8;transition:.3s}.modal[_ngcontent-%COMP%]   .org_box[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%]:hover{background:#e8e8e8;color:#101010}.modal[_ngcontent-%COMP%]   .modal_footer[_ngcontent-%COMP%]{padding:10px 30px;background:#fff;position:absolute;width:100%;bottom:0;left:0;box-shadow:12px -7px 12px #0000001a;display:flex;align-items:center;justify-content:space-between;z-index:9}.modal[_ngcontent-%COMP%]   .modal_footer[_ngcontent-%COMP%]   .d2c_btn[_ngcontent-%COMP%]{border:0}@media (max-width: 800px){.modal[_ngcontent-%COMP%]{max-width:100%}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:15px}.modal[_ngcontent-%COMP%]   .modal_footer[_ngcontent-%COMP%]{padding:10px 15px}.modal[_ngcontent-%COMP%]   .label_title[_ngcontent-%COMP%]{font-size:12px}}.radio_type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:calc(50% - 30px)}@media (max-width: 800px){.radio_type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:calc(100% - 30px)}}.type-radios[_ngcontent-%COMP%]{position:relative}.type-radios[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:-25px;left:16px;z-index:1}.upload-logo[_ngcontent-%COMP%]{position:static;cursor:pointer;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:10px;border-radius:8px;color:#999;overflow:hidden;background:#f5f8fa;border:2px dashed #BACBD5;height:170px;margin-bottom:0}.upload-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px}.upload-logo[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-45deg,#f6f6f6 25%,transparent 25%,transparent 50%,#f6f6f6 50%,#f6f6f6 75%,transparent 75%,transparent);background-size:30px 30px;animation:stripes 2s linear infinite}.upload-logo[_ngcontent-%COMP%]:hover   .change-logo-text[_ngcontent-%COMP%]{height:33px;opacity:1;visibility:visible}.upload-logo.error-logo[_ngcontent-%COMP%]{border-color:#df55556e;background:rgba(227,33,33,.07)}.upload-logo[_ngcontent-%COMP%]   .change-logo-text[_ngcontent-%COMP%]{position:absolute;bottom:0px;left:0px;width:100%;padding:8px;background:rgba(0,0,0,.5);color:#fff;height:0px;overflow:hidden;opacity:0;visibility:hidden;transition:.4s;text-align:center;font-size:12px}.upload-logo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.upload-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;color:#e3e3e3}.d2c_box[_ngcontent-%COMP%]{margin-bottom:15px}.d2c_box[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]
            }),
            c
        }
        )()
    }
    ,
    7889: (D,w,l)=>{
        l.d(w, {
            U: ()=>T
        });
        var e = l(86019)
          , M = l(6322)
          , O = l(74859)
          , E = l(94774)
          , u = l(83021)
          , h = l(85693)
          , b = l(83668);
        let T = (()=>{
            class I {
            }
            return I.\u0275fac = function(S) {
                return new (S || I)
            }
            ,
            I.\u0275mod = b.\u0275\u0275defineNgModule({
                type: I
            }),
            I.\u0275inj = b.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, M.I, O.m, E.rP, u.y, h.U]]
            }),
            I
        }
        )()
    }
    ,
    36635: (D,w,l)=>{
        l.d(w, {
            O: ()=>M
        });
        var e = l(83668);
        let M = (()=>{
            class O {
                constructor(u, h) {
                    this.el = u,
                    this.renderer = h
                }
                ngAfterViewInit() {
                    const u = Math.random().toString(36).slice(-6);
                    this.primaryElement = "INPUT" == this.el.nativeElement.tagName || "input" == this.el.nativeElement.tagName ? this.el.nativeElement : this.el.nativeElement.querySelector("input"),
                    (!this.primaryElement.name || "" == this.primaryElement.name) && this.renderer.setAttribute(this.primaryElement, "name", u),
                    this.renderer.setAttribute(this.primaryElement, "autocomplete", u)
                }
            }
            return O.\u0275fac = function(u) {
                return new (u || O)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.Renderer2))
            }
            ,
            O.\u0275dir = e.\u0275\u0275defineDirective({
                type: O,
                selectors: [["", "appDisableAutofill", ""]]
            }),
            O
        }
        )()
    }
}]);
