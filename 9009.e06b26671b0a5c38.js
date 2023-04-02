"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[9009], {
    9009: (le,Q,y)=>{
        y.d(Q, {
            ap: ()=>ae,
            QG: ()=>ne,
            Ll: ()=>re
        });
        var n = y(83668)
          , b = y(64762)
          , z = y(86019)
          , D = y(35427);
        const L = ["wrapper"]
          , F = ["sourceImage"];
        function U(s, c) {
            if (1 & s) {
                const e = n.\u0275\u0275getCurrentView();
                n.\u0275\u0275elementStart(0, "img", 4, 5),
                n.\u0275\u0275listener("load", function() {
                    return n.\u0275\u0275restoreView(e),
                    n.\u0275\u0275nextContext().imageLoadedInView()
                }),
                n.\u0275\u0275elementEnd()
            }
            if (2 & s) {
                const e = n.\u0275\u0275nextContext();
                n.\u0275\u0275styleProp("visibility", e.imageVisible ? "visible" : "hidden")("transform", e.safeTransformStyle),
                n.\u0275\u0275property("src", e.safeImgDataUrl, n.\u0275\u0275sanitizeUrl)
            }
        }
        function V(s, c) {
            if (1 & s) {
                const e = n.\u0275\u0275getCurrentView();
                n.\u0275\u0275elementContainerStart(0),
                n.\u0275\u0275elementStart(1, "span", 9),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "topleft")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "topleft")
                }),
                n.\u0275\u0275element(2, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(3, "span", 11),
                n.\u0275\u0275element(4, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(5, "span", 12),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "topright")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "topright")
                }),
                n.\u0275\u0275element(6, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(7, "span", 13),
                n.\u0275\u0275element(8, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(9, "span", 14),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottomright")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottomright")
                }),
                n.\u0275\u0275element(10, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(11, "span", 15),
                n.\u0275\u0275element(12, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(13, "span", 16),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottomleft")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottomleft")
                }),
                n.\u0275\u0275element(14, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(15, "span", 17),
                n.\u0275\u0275element(16, "span", 10),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(17, "span", 18),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "top")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "top")
                }),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(18, "span", 19),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "right")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "right")
                }),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(19, "span", 20),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottom")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "bottom")
                }),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementStart(20, "span", 21),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "left")
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext(2);
                    return a.startMove(i, a.moveTypes.Resize, "left")
                }),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275elementContainerEnd()
            }
        }
        function Y(s, c) {
            if (1 & s) {
                const e = n.\u0275\u0275getCurrentView();
                n.\u0275\u0275elementStart(0, "div", 6),
                n.\u0275\u0275listener("keydown", function(i) {
                    return n.\u0275\u0275restoreView(e),
                    n.\u0275\u0275nextContext().keyboardAccess(i)
                }),
                n.\u0275\u0275elementStart(1, "div", 7),
                n.\u0275\u0275listener("mousedown", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext();
                    return a.startMove(i, a.moveTypes.Move)
                })("touchstart", function(i) {
                    n.\u0275\u0275restoreView(e);
                    const a = n.\u0275\u0275nextContext();
                    return a.startMove(i, a.moveTypes.Move)
                }),
                n.\u0275\u0275elementEnd(),
                n.\u0275\u0275template(2, V, 21, 0, "ng-container", 8),
                n.\u0275\u0275elementEnd()
            }
            if (2 & s) {
                const e = n.\u0275\u0275nextContext();
                n.\u0275\u0275styleProp("top", e.cropper.y1, "px")("left", e.cropper.x1, "px")("width", e.cropper.x2 - e.cropper.x1, "px")("height", e.cropper.y2 - e.cropper.y1, "px")("margin-left", "center" === e.alignImage ? e.marginLeft : null)("visibility", e.imageVisible ? "visible" : "hidden"),
                n.\u0275\u0275classProp("ngx-ic-round", e.roundCropper),
                n.\u0275\u0275advance(2),
                n.\u0275\u0275property("ngIf", !e.hideResizeSquares)
            }
        }
        class X {
            constructor() {
                this.format = "png",
                this.maintainAspectRatio = !0,
                this.transform = {},
                this.aspectRatio = 1,
                this.resizeToWidth = 0,
                this.resizeToHeight = 0,
                this.cropperMinWidth = 0,
                this.cropperMinHeight = 0,
                this.cropperMaxHeight = 0,
                this.cropperMaxWidth = 0,
                this.cropperStaticWidth = 0,
                this.cropperStaticHeight = 0,
                this.canvasRotation = 0,
                this.initialStepSize = 3,
                this.roundCropper = !1,
                this.onlyScaleDown = !1,
                this.imageQuality = 92,
                this.autoCrop = !0,
                this.backgroundColor = void 0,
                this.containWithinAspectRatio = !1,
                this.hideResizeSquares = !1,
                this.alignImage = "center",
                this.cropperScaledMinWidth = 20,
                this.cropperScaledMinHeight = 20,
                this.cropperScaledMaxWidth = 20,
                this.cropperScaledMaxHeight = 20,
                this.stepSize = this.initialStepSize
            }
            setOptions(c) {
                Object.keys(c).filter(e=>e in this).forEach(e=>this[e] = c[e]),
                this.validateOptions()
            }
            setOptionsFromChanges(c) {
                Object.keys(c).filter(e=>e in this).forEach(e=>this[e] = c[e].currentValue),
                this.validateOptions()
            }
            validateOptions() {
                if (this.maintainAspectRatio && !this.aspectRatio)
                    throw new Error("`aspectRatio` should > 0 when `maintainAspectRatio` is enabled")
            }
        }
        const _ = {
            Move: "move",
            Resize: "resize",
            Pinch: "pinch"
        };
        let P = (()=>{
            class s {
                crop(e, t, i, a) {
                    const r = this.getImagePosition(e, t, i, a)
                      , o = r.x2 - r.x1
                      , h = r.y2 - r.y1
                      , p = document.createElement("canvas");
                    p.width = o,
                    p.height = h;
                    const l = p.getContext("2d");
                    if (!l)
                        return;
                    null != a.backgroundColor && (l.fillStyle = a.backgroundColor,
                    l.fillRect(0, 0, o, h));
                    const g = (a.transform.scale || 1) * (a.transform.flipH ? -1 : 1)
                      , x = (a.transform.scale || 1) * (a.transform.flipV ? -1 : 1)
                      , m = t.transformed;
                    l.setTransform(g, 0, 0, x, m.size.width / 2, m.size.height / 2),
                    l.translate(-r.x1 / g, -r.y1 / x),
                    l.rotate((a.transform.rotate || 0) * Math.PI / 180),
                    l.drawImage(m.image, -m.size.width / 2, -m.size.height / 2);
                    const d = {
                        width: o,
                        height: h,
                        imagePosition: r,
                        cropperPosition: Object.assign({}, i)
                    };
                    a.containWithinAspectRatio && (d.offsetImagePosition = this.getOffsetImagePosition(e, t, i, a));
                    const f = this.getResizeRatio(o, h, a);
                    return 1 !== f && (d.width = Math.round(o * f),
                    d.height = a.maintainAspectRatio ? Math.round(d.width / a.aspectRatio) : Math.round(h * f),
                    function(s, c, e) {
                        const t = s.width
                          , i = s.height
                          , a = t / (c = Math.round(c))
                          , r = i / (e = Math.round(e))
                          , o = Math.ceil(a / 2)
                          , h = Math.ceil(r / 2)
                          , p = s.getContext("2d");
                        if (p) {
                            const l = p.getImageData(0, 0, t, i)
                              , g = p.createImageData(c, e)
                              , x = l.data
                              , m = g.data;
                            for (let d = 0; d < e; d++)
                                for (let f = 0; f < c; f++) {
                                    const v = 4 * (f + d * c)
                                      , oe = d * r;
                                    let u = 0
                                      , A = 0
                                      , E = 0
                                      , O = 0
                                      , W = 0
                                      , H = 0
                                      , T = 0;
                                    const se = Math.floor(f * a)
                                      , ce = Math.floor(d * r);
                                    let R = Math.ceil((f + 1) * a)
                                      , I = Math.ceil((d + 1) * r);
                                    R = Math.min(R, t),
                                    I = Math.min(I, i);
                                    for (let w = ce; w < I; w++) {
                                        const B = Math.abs(oe - w) / h
                                          , he = f * a
                                          , pe = B * B;
                                        for (let S = se; S < R; S++) {
                                            const k = Math.abs(he - S) / o
                                              , M = Math.sqrt(pe + k * k);
                                            if (M >= 1)
                                                continue;
                                            u = 2 * M * M * M - 3 * M * M + 1;
                                            const C = 4 * (S + w * t);
                                            T += u * x[C + 3],
                                            E += u,
                                            x[C + 3] < 255 && (u = u * x[C + 3] / 250),
                                            O += u * x[C],
                                            W += u * x[C + 1],
                                            H += u * x[C + 2],
                                            A += u
                                        }
                                    }
                                    m[v] = O / A,
                                    m[v + 1] = W / A,
                                    m[v + 2] = H / A,
                                    m[v + 3] = T / E
                                }
                            s.width = c,
                            s.height = e,
                            p.putImageData(g, 0, 0)
                        }
                    }(p, d.width, d.height)),
                    d.base64 = p.toDataURL("image/" + a.format, this.getQuality(a)),
                    d
                }
                getImagePosition(e, t, i, a) {
                    const o = t.transformed.size.width / e.nativeElement.offsetWidth
                      , h = {
                        x1: Math.round(i.x1 * o),
                        y1: Math.round(i.y1 * o),
                        x2: Math.round(i.x2 * o),
                        y2: Math.round(i.y2 * o)
                    };
                    return a.containWithinAspectRatio || (h.x1 = Math.max(h.x1, 0),
                    h.y1 = Math.max(h.y1, 0),
                    h.x2 = Math.min(h.x2, t.transformed.size.width),
                    h.y2 = Math.min(h.y2, t.transformed.size.height)),
                    h
                }
                getOffsetImagePosition(e, t, i, a) {
                    const h = t.transformed.size.width / e.nativeElement.offsetWidth;
                    let p, l;
                    (a.canvasRotation + t.exifTransform.rotate) % 2 ? (p = (t.transformed.size.width - t.original.size.height) / 2,
                    l = (t.transformed.size.height - t.original.size.width) / 2) : (p = (t.transformed.size.width - t.original.size.width) / 2,
                    l = (t.transformed.size.height - t.original.size.height) / 2);
                    const g = {
                        x1: Math.round(i.x1 * h) - p,
                        y1: Math.round(i.y1 * h) - l,
                        x2: Math.round(i.x2 * h) - p,
                        y2: Math.round(i.y2 * h) - l
                    };
                    return a.containWithinAspectRatio || (g.x1 = Math.max(g.x1, 0),
                    g.y1 = Math.max(g.y1, 0),
                    g.x2 = Math.min(g.x2, t.transformed.size.width),
                    g.y2 = Math.min(g.y2, t.transformed.size.height)),
                    g
                }
                getResizeRatio(e, t, i) {
                    const a = i.resizeToWidth / e
                      , r = i.resizeToHeight / t
                      , o = new Array;
                    i.resizeToWidth > 0 && o.push(a),
                    i.resizeToHeight > 0 && o.push(r);
                    const h = 0 === o.length ? 1 : Math.min(...o);
                    return h > 1 && !i.onlyScaleDown ? h : Math.min(h, 1)
                }
                getQuality(e) {
                    return Math.min(1, Math.max(0, e.imageQuality / 100))
                }
            }
            return s.\u0275fac = function(e) {
                return new (e || s)
            }
            ,
            s.\u0275prov = (0,
            n.\u0275\u0275defineInjectable)({
                factory: function() {
                    return new s
                },
                token: s,
                providedIn: "root"
            }),
            s
        }
        )()
          , K = (()=>{
            class s {
                resetCropperPosition(e, t, i) {
                    if (!(null == e ? void 0 : e.nativeElement))
                        return;
                    const a = e.nativeElement;
                    if (i.cropperStaticHeight && i.cropperStaticWidth)
                        t.x1 = 0,
                        t.x2 = a.offsetWidth > i.cropperStaticWidth ? i.cropperStaticWidth : a.offsetWidth,
                        t.y1 = 0,
                        t.y2 = a.offsetHeight > i.cropperStaticHeight ? i.cropperStaticHeight : a.offsetHeight;
                    else {
                        const r = Math.min(i.cropperScaledMaxWidth, a.offsetWidth)
                          , o = Math.min(i.cropperScaledMaxHeight, a.offsetHeight);
                        if (i.maintainAspectRatio)
                            if (a.offsetWidth / i.aspectRatio < a.offsetHeight) {
                                t.x1 = 0,
                                t.x2 = r;
                                const h = r / i.aspectRatio;
                                t.y1 = (a.offsetHeight - h) / 2,
                                t.y2 = t.y1 + h
                            } else {
                                t.y1 = 0,
                                t.y2 = o;
                                const h = o * i.aspectRatio;
                                t.x1 = (a.offsetWidth - h) / 2,
                                t.x2 = t.x1 + h
                            }
                        else
                            t.x1 = 0,
                            t.x2 = r,
                            t.y1 = 0,
                            t.y2 = o
                    }
                }
                move(e, t, i) {
                    const a = this.getClientX(e) - t.clientX
                      , r = this.getClientY(e) - t.clientY;
                    i.x1 = t.x1 + a,
                    i.y1 = t.y1 + r,
                    i.x2 = t.x2 + a,
                    i.y2 = t.y2 + r
                }
                resize(e, t, i, a, r) {
                    const o = this.getClientX(e) - t.clientX
                      , h = this.getClientY(e) - t.clientY;
                    switch (t.position) {
                    case "left":
                        i.x1 = Math.min(Math.max(t.x1 + o, i.x2 - r.cropperScaledMaxWidth), i.x2 - r.cropperScaledMinWidth);
                        break;
                    case "topleft":
                        i.x1 = Math.min(Math.max(t.x1 + o, i.x2 - r.cropperScaledMaxWidth), i.x2 - r.cropperScaledMinWidth),
                        i.y1 = Math.min(Math.max(t.y1 + h, i.y2 - r.cropperScaledMaxHeight), i.y2 - r.cropperScaledMinHeight);
                        break;
                    case "top":
                        i.y1 = Math.min(Math.max(t.y1 + h, i.y2 - r.cropperScaledMaxHeight), i.y2 - r.cropperScaledMinHeight);
                        break;
                    case "topright":
                        i.x2 = Math.max(Math.min(t.x2 + o, i.x1 + r.cropperScaledMaxWidth), i.x1 + r.cropperScaledMinWidth),
                        i.y1 = Math.min(Math.max(t.y1 + h, i.y2 - r.cropperScaledMaxHeight), i.y2 - r.cropperScaledMinHeight);
                        break;
                    case "right":
                        i.x2 = Math.max(Math.min(t.x2 + o, i.x1 + r.cropperScaledMaxWidth), i.x1 + r.cropperScaledMinWidth);
                        break;
                    case "bottomright":
                        i.x2 = Math.max(Math.min(t.x2 + o, i.x1 + r.cropperScaledMaxWidth), i.x1 + r.cropperScaledMinWidth),
                        i.y2 = Math.max(Math.min(t.y2 + h, i.y1 + r.cropperScaledMaxHeight), i.y1 + r.cropperScaledMinHeight);
                        break;
                    case "bottom":
                        i.y2 = Math.max(Math.min(t.y2 + h, i.y1 + r.cropperScaledMaxHeight), i.y1 + r.cropperScaledMinHeight);
                        break;
                    case "bottomleft":
                        i.x1 = Math.min(Math.max(t.x1 + o, i.x2 - r.cropperScaledMaxWidth), i.x2 - r.cropperScaledMinWidth),
                        i.y2 = Math.max(Math.min(t.y2 + h, i.y1 + r.cropperScaledMaxHeight), i.y1 + r.cropperScaledMinHeight);
                        break;
                    case "center":
                        const p = e.scale
                          , l = Math.min(Math.max(r.cropperScaledMinWidth, Math.abs(t.x2 - t.x1) * p), r.cropperScaledMaxWidth)
                          , g = Math.min(Math.max(r.cropperScaledMinHeight, Math.abs(t.y2 - t.y1) * p), r.cropperScaledMaxHeight);
                        i.x1 = t.clientX - l / 2,
                        i.x2 = t.clientX + l / 2,
                        i.y1 = t.clientY - g / 2,
                        i.y2 = t.clientY + g / 2,
                        i.x1 < 0 ? (i.x2 -= i.x1,
                        i.x1 = 0) : i.x2 > a.width && (i.x1 -= i.x2 - a.width,
                        i.x2 = a.width),
                        i.y1 < 0 ? (i.y2 -= i.y1,
                        i.y1 = 0) : i.y2 > a.height && (i.y1 -= i.y2 - a.height,
                        i.y2 = a.height)
                    }
                    r.maintainAspectRatio && this.checkAspectRatio(t.position, i, a, r)
                }
                checkAspectRatio(e, t, i, a) {
                    let r = 0
                      , o = 0;
                    switch (e) {
                    case "top":
                        t.x2 = t.x1 + (t.y2 - t.y1) * a.aspectRatio,
                        r = Math.max(t.x2 - i.width, 0),
                        o = Math.max(0 - t.y1, 0),
                        (r > 0 || o > 0) && (t.x2 -= o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y1 += o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "bottom":
                        t.x2 = t.x1 + (t.y2 - t.y1) * a.aspectRatio,
                        r = Math.max(t.x2 - i.width, 0),
                        o = Math.max(t.y2 - i.height, 0),
                        (r > 0 || o > 0) && (t.x2 -= o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y2 -= o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "topleft":
                        t.y1 = t.y2 - (t.x2 - t.x1) / a.aspectRatio,
                        r = Math.max(0 - t.x1, 0),
                        o = Math.max(0 - t.y1, 0),
                        (r > 0 || o > 0) && (t.x1 += o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y1 += o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "topright":
                        t.y1 = t.y2 - (t.x2 - t.x1) / a.aspectRatio,
                        r = Math.max(t.x2 - i.width, 0),
                        o = Math.max(0 - t.y1, 0),
                        (r > 0 || o > 0) && (t.x2 -= o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y1 += o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "right":
                    case "bottomright":
                        t.y2 = t.y1 + (t.x2 - t.x1) / a.aspectRatio,
                        r = Math.max(t.x2 - i.width, 0),
                        o = Math.max(t.y2 - i.height, 0),
                        (r > 0 || o > 0) && (t.x2 -= o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y2 -= o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "left":
                    case "bottomleft":
                        t.y2 = t.y1 + (t.x2 - t.x1) / a.aspectRatio,
                        r = Math.max(0 - t.x1, 0),
                        o = Math.max(t.y2 - i.height, 0),
                        (r > 0 || o > 0) && (t.x1 += o * a.aspectRatio > r ? o * a.aspectRatio : r,
                        t.y2 -= o * a.aspectRatio > r ? o : r / a.aspectRatio);
                        break;
                    case "center":
                        t.x2 = t.x1 + (t.y2 - t.y1) * a.aspectRatio,
                        t.y2 = t.y1 + (t.x2 - t.x1) / a.aspectRatio;
                        const h = Math.max(0 - t.x1, 0)
                          , p = Math.max(t.x2 - i.width, 0)
                          , l = Math.max(t.y2 - i.height, 0)
                          , g = Math.max(0 - t.y1, 0);
                        (h > 0 || p > 0 || l > 0 || g > 0) && (t.x1 += l * a.aspectRatio > h ? l * a.aspectRatio : h,
                        t.x2 -= g * a.aspectRatio > p ? g * a.aspectRatio : p,
                        t.y1 += g * a.aspectRatio > p ? g : p / a.aspectRatio,
                        t.y2 -= l * a.aspectRatio > h ? l : h / a.aspectRatio)
                    }
                }
                getClientX(e) {
                    var t;
                    return (null === (t = e.touches) || void 0 === t ? void 0 : t[0].clientX) || e.clientX || 0
                }
                getClientY(e) {
                    var t;
                    return (null === (t = e.touches) || void 0 === t ? void 0 : t[0].clientY) || e.clientY || 0
                }
            }
            return s.\u0275fac = function(e) {
                return new (e || s)
            }
            ,
            s.\u0275prov = (0,
            n.\u0275\u0275defineInjectable)({
                factory: function() {
                    return new s
                },
                token: s,
                providedIn: "root"
            }),
            s
        }
        )();
        let$ = (()=>{
            class s {
                constructor() {
                    this.autoRotateSupported = new Promise(s=>{
                        const c = new Image;
                        c.onload = ()=>{
                            s(1 === c.width && 2 === c.height)
                        }
                        ,
                        c.src = "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=="
                    }
                    )
                }
                loadImageFile(e, t) {
                    return new Promise((i,a)=>{
                        const r = new FileReader;
                        r.onload = o=>{
                            this.loadImage(o.target.result, e.type, t).then(i).catch(a)
                        }
                        ,
                        r.readAsDataURL(e)
                    }
                    )
                }
                loadImage(e, t, i) {
                    return this.isValidImageType(t) ? this.loadBase64Image(e, i) : Promise.reject(new Error("Invalid image type"))
                }
                isValidImageType(e) {
                    return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(e)
                }
                loadImageFromURL(e, t) {
                    return new Promise((i,a)=>{
                        const r = new Image;
                        r.onerror = ()=>a,
                        r.onload = ()=>{
                            const o = document.createElement("canvas")
                              , h = o.getContext("2d");
                            o.width = r.width,
                            o.height = r.height,
                            h.drawImage(r, 0, 0),
                            this.loadBase64Image(o.toDataURL(), t).then(i)
                        }
                        ,
                        r.crossOrigin = "anonymous",
                        r.src = e
                    }
                    )
                }
                loadBase64Image(e, t) {
                    return new Promise((i,a)=>{
                        const r = new Image;
                        r.onload = ()=>i({
                            originalImage: r,
                            originalBase64: e
                        }),
                        r.onerror = a,
                        r.src = e
                    }
                    ).then(i=>this.transformImageBase64(i, t))
                }
                transformImageBase64(e, t) {
                    return (0,
                    b.mG)(this, void 0, void 0, function*() {
                        const i = yield this.autoRotateSupported
                          , a = yield function(s) {
                            switch ("string" == typeof s && (s = function(s) {
                                const c = new DataView(function(s) {
                                    s = s.replace(/^data\:([^\;]+)\;base64,/gim, "");
                                    const c = atob(s)
                                      , e = c.length
                                      , t = new Uint8Array(e);
                                    for (let i = 0; i < e; i++)
                                        t[i] = c.charCodeAt(i);
                                    return t.buffer
                                }(s));
                                if (65496 !== c.getUint16(0, !1))
                                    return -2;
                                const e = c.byteLength;
                                let t = 2;
                                for (; t < e; ) {
                                    if (c.getUint16(t + 2, !1) <= 8)
                                        return -1;
                                    const i = c.getUint16(t, !1);
                                    if (t += 2,
                                    65505 == i) {
                                        if (1165519206 !== c.getUint32(t += 2, !1))
                                            return -1;
                                        const a = 18761 == c.getUint16(t += 6, !1);
                                        t += c.getUint32(t + 4, a);
                                        const r = c.getUint16(t, a);
                                        t += 2;
                                        for (let o = 0; o < r; o++)
                                            if (274 == c.getUint16(t + 12 * o, a))
                                                return c.getUint16(t + 12 * o + 8, a)
                                    } else {
                                        if (65280 != (65280 & i))
                                            break;
                                        t += c.getUint16(t, !1)
                                    }
                                }
                                return -1
                            }(s)),
                            s) {
                            case 2:
                                return {
                                    rotate: 0,
                                    flip: !0
                                };
                            case 3:
                                return {
                                    rotate: 2,
                                    flip: !1
                                };
                            case 4:
                                return {
                                    rotate: 2,
                                    flip: !0
                                };
                            case 5:
                                return {
                                    rotate: 1,
                                    flip: !0
                                };
                            case 6:
                                return {
                                    rotate: 1,
                                    flip: !1
                                };
                            case 7:
                                return {
                                    rotate: 3,
                                    flip: !0
                                };
                            case 8:
                                return {
                                    rotate: 3,
                                    flip: !1
                                };
                            default:
                                return {
                                    rotate: 0,
                                    flip: !1
                                }
                            }
                        }(i ? -1 : e.originalBase64);
                        return e.originalImage && e.originalImage.complete ? this.transformLoadedImage({
                            original: {
                                base64: e.originalBase64,
                                image: e.originalImage,
                                size: {
                                    width: e.originalImage.naturalWidth,
                                    height: e.originalImage.naturalHeight
                                }
                            },
                            exifTransform: a
                        }, t) : Promise.reject(new Error("No image loaded"))
                    })
                }
                transformLoadedImage(e, t) {
                    return (0,
                    b.mG)(this, void 0, void 0, function*() {
                        const i = t.canvasRotation + e.exifTransform.rotate
                          , a = {
                            width: e.original.image.naturalWidth,
                            height: e.original.image.naturalHeight
                        };
                        if (0 === i && !e.exifTransform.flip && !t.containWithinAspectRatio)
                            return {
                                original: {
                                    base64: e.original.base64,
                                    image: e.original.image,
                                    size: Object.assign({}, a)
                                },
                                transformed: {
                                    base64: e.original.base64,
                                    image: e.original.image,
                                    size: Object.assign({}, a)
                                },
                                exifTransform: e.exifTransform
                            };
                        const r = this.getTransformedSize(a, e.exifTransform, t)
                          , o = document.createElement("canvas");
                        o.width = r.width,
                        o.height = r.height;
                        const h = o.getContext("2d");
                        h.setTransform(e.exifTransform.flip ? -1 : 1, 0, 0, 1, o.width / 2, o.height / 2),
                        h.rotate(Math.PI * (i / 2)),
                        h.drawImage(e.original.image, -a.width / 2, -a.height / 2);
                        const p = o.toDataURL()
                          , l = yield this.loadImageFromBase64(p);
                        return {
                            original: {
                                base64: e.original.base64,
                                image: e.original.image,
                                size: Object.assign({}, a)
                            },
                            transformed: {
                                base64: p,
                                image: l,
                                size: {
                                    width: l.width,
                                    height: l.height
                                }
                            },
                            exifTransform: e.exifTransform
                        }
                    })
                }
                loadImageFromBase64(e) {
                    return new Promise((t,i)=>{
                        const a = new Image;
                        a.onload = ()=>t(a),
                        a.onerror = i,
                        a.src = e
                    }
                    )
                }
                getTransformedSize(e, t, i) {
                    const a = i.canvasRotation + t.rotate;
                    if (i.containWithinAspectRatio) {
                        if (a % 2) {
                            const o = e.height / i.aspectRatio;
                            return {
                                width: Math.max(e.height, e.width * i.aspectRatio),
                                height: Math.max(e.width, o)
                            }
                        }
                        {
                            const o = e.width / i.aspectRatio;
                            return {
                                width: Math.max(e.width, e.height * i.aspectRatio),
                                height: Math.max(e.height, o)
                            }
                        }
                    }
                    return a % 2 ? {
                        height: e.width,
                        width: e.height
                    } : {
                        width: e.width,
                        height: e.height
                    }
                }
            }
            return s.\u0275fac = function(e) {
                return new (e || s)
            }
            ,
            s.\u0275prov = (0,
            n.\u0275\u0275defineInjectable)({
                factory: function() {
                    return new s
                },
                token: s,
                providedIn: "root"
            }),
            s
        }
        )()
          , ae = (()=>{
            class s {
                constructor(e, t, i, a, r) {
                    this.cropService = e,
                    this.cropperPositionService = t,
                    this.loadImageService = i,
                    this.sanitizer = a,
                    this.cd = r,
                    this.Hammer = (null == window ? void 0 : window.Hammer) || null,
                    this.settings = new X,
                    this.setImageMaxSizeRetries = 0,
                    this.marginLeft = "0px",
                    this.moveTypes = _,
                    this.imageVisible = !1,
                    this.format = this.settings.format,
                    this.transform = {},
                    this.maintainAspectRatio = this.settings.maintainAspectRatio,
                    this.aspectRatio = this.settings.aspectRatio,
                    this.resizeToWidth = this.settings.resizeToWidth,
                    this.resizeToHeight = this.settings.resizeToHeight,
                    this.cropperMinWidth = this.settings.cropperMinWidth,
                    this.cropperMinHeight = this.settings.cropperMinHeight,
                    this.cropperMaxHeight = this.settings.cropperMaxHeight,
                    this.cropperMaxWidth = this.settings.cropperMaxWidth,
                    this.cropperStaticWidth = this.settings.cropperStaticWidth,
                    this.cropperStaticHeight = this.settings.cropperStaticHeight,
                    this.canvasRotation = this.settings.canvasRotation,
                    this.initialStepSize = this.settings.initialStepSize,
                    this.roundCropper = this.settings.roundCropper,
                    this.onlyScaleDown = this.settings.onlyScaleDown,
                    this.imageQuality = this.settings.imageQuality,
                    this.autoCrop = this.settings.autoCrop,
                    this.backgroundColor = this.settings.backgroundColor,
                    this.containWithinAspectRatio = this.settings.containWithinAspectRatio,
                    this.hideResizeSquares = this.settings.hideResizeSquares,
                    this.cropper = {
                        x1: -100,
                        y1: -100,
                        x2: 1e4,
                        y2: 1e4
                    },
                    this.alignImage = this.settings.alignImage,
                    this.disabled = !1,
                    this.imageCropped = new n.EventEmitter,
                    this.startCropImage = new n.EventEmitter,
                    this.imageLoaded = new n.EventEmitter,
                    this.cropperReady = new n.EventEmitter,
                    this.loadImageFailed = new n.EventEmitter,
                    this.reset()
                }
                ngOnChanges(e) {
                    var t;
                    this.onChangesUpdateSettings(e),
                    this.onChangesInputImage(e),
                    (null === (t = this.loadedImage) || void 0 === t ? void 0 : t.original.image.complete) && (e.containWithinAspectRatio || e.canvasRotation) && this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then(i=>this.setLoadedImage(i)).catch(i=>this.loadImageError(i)),
                    (e.cropper || e.maintainAspectRatio || e.aspectRatio) && (this.setMaxSize(),
                    this.setCropperScaledMinSize(),
                    this.setCropperScaledMaxSize(),
                    this.maintainAspectRatio && (e.maintainAspectRatio || e.aspectRatio) ? this.resetCropperPosition() : e.cropper && (this.checkCropperPosition(!1),
                    this.doAutoCrop()),
                    this.cd.markForCheck()),
                    e.transform && (this.transform = this.transform || {},
                    this.setCssTransform(),
                    this.doAutoCrop())
                }
                onChangesUpdateSettings(e) {
                    this.settings.setOptionsFromChanges(e),
                    this.settings.cropperStaticHeight && this.settings.cropperStaticWidth && this.settings.setOptions({
                        hideResizeSquares: !0,
                        cropperMinWidth: this.settings.cropperStaticWidth,
                        cropperMinHeight: this.settings.cropperStaticHeight,
                        cropperMaxHeight: this.settings.cropperStaticHeight,
                        cropperMaxWidth: this.settings.cropperStaticWidth,
                        maintainAspectRatio: !1
                    })
                }
                onChangesInputImage(e) {
                    (e.imageChangedEvent || e.imageURL || e.imageBase64 || e.imageFile) && this.reset(),
                    e.imageChangedEvent && this.isValidImageChangedEvent() && this.loadImageFile(this.imageChangedEvent.target.files[0]),
                    e.imageURL && this.imageURL && this.loadImageFromURL(this.imageURL),
                    e.imageBase64 && this.imageBase64 && this.loadBase64Image(this.imageBase64),
                    e.imageFile && this.imageFile && this.loadImageFile(this.imageFile)
                }
                isValidImageChangedEvent() {
                    var e, t, i;
                    return (null === (i = null === (t = null === (e = this.imageChangedEvent) || void 0 === e ? void 0 : e.target) || void 0 === t ? void 0 : t.files) || void 0 === i ? void 0 : i.length) > 0
                }
                setCssTransform() {
                    this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle("scaleX(" + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ")scaleY(" + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ")rotate(" + (this.transform.rotate || 0) + "deg)")
                }
                ngOnInit() {
                    this.settings.stepSize = this.initialStepSize,
                    this.activatePinchGesture()
                }
                reset() {
                    this.imageVisible = !1,
                    this.loadedImage = null,
                    this.safeImgDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",
                    this.moveStart = {
                        active: !1,
                        type: null,
                        position: null,
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0,
                        clientX: 0,
                        clientY: 0
                    },
                    this.maxSize = {
                        width: 0,
                        height: 0
                    },
                    this.cropper.x1 = -100,
                    this.cropper.y1 = -100,
                    this.cropper.x2 = 1e4,
                    this.cropper.y2 = 1e4
                }
                loadImageFile(e) {
                    this.loadImageService.loadImageFile(e, this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))
                }
                loadBase64Image(e) {
                    this.loadImageService.loadBase64Image(e, this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))
                }
                loadImageFromURL(e) {
                    this.loadImageService.loadImageFromURL(e, this.settings).then(t=>this.setLoadedImage(t)).catch(t=>this.loadImageError(t))
                }
                setLoadedImage(e) {
                    this.loadedImage = e,
                    this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(e.transformed.base64),
                    this.cd.markForCheck()
                }
                loadImageError(e) {
                    console.error(e),
                    this.loadImageFailed.emit()
                }
                imageLoadedInView() {
                    null != this.loadedImage && (this.imageLoaded.emit(this.loadedImage),
                    this.setImageMaxSizeRetries = 0,
                    setTimeout(()=>this.checkImageMaxSizeRecursively()))
                }
                checkImageMaxSizeRecursively() {
                    this.setImageMaxSizeRetries > 40 ? this.loadImageFailed.emit() : this.sourceImageLoaded() ? (this.setMaxSize(),
                    this.setCropperScaledMinSize(),
                    this.setCropperScaledMaxSize(),
                    this.resetCropperPosition(),
                    this.cropperReady.emit(Object.assign({}, this.maxSize)),
                    this.cd.markForCheck()) : (this.setImageMaxSizeRetries++,
                    setTimeout(()=>this.checkImageMaxSizeRecursively(), 50))
                }
                sourceImageLoaded() {
                    var e, t;
                    return (null === (t = null === (e = this.sourceImage) || void 0 === e ? void 0 : e.nativeElement) || void 0 === t ? void 0 : t.offsetWidth) > 0
                }
                onResize() {
                    !this.loadedImage || (this.resizeCropperPosition(),
                    this.setMaxSize(),
                    this.setCropperScaledMinSize(),
                    this.setCropperScaledMaxSize())
                }
                activatePinchGesture() {
                    if (this.Hammer) {
                        const e = new this.Hammer(this.wrapper.nativeElement);
                        e.get("pinch").set({
                            enable: !0
                        }),
                        e.on("pinchmove", this.onPinch.bind(this)),
                        e.on("pinchend", this.pinchStop.bind(this)),
                        e.on("pinchstart", this.startPinch.bind(this))
                    } else
                        (0,
                        n.isDevMode)() && console.warn("[NgxImageCropper] Could not find HammerJS - Pinch Gesture won't work")
                }
                resizeCropperPosition() {
                    const e = this.sourceImage.nativeElement;
                    (this.maxSize.width !== e.offsetWidth || this.maxSize.height !== e.offsetHeight) && (this.cropper.x1 = this.cropper.x1 * e.offsetWidth / this.maxSize.width,
                    this.cropper.x2 = this.cropper.x2 * e.offsetWidth / this.maxSize.width,
                    this.cropper.y1 = this.cropper.y1 * e.offsetHeight / this.maxSize.height,
                    this.cropper.y2 = this.cropper.y2 * e.offsetHeight / this.maxSize.height)
                }
                resetCropperPosition() {
                    this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings),
                    this.doAutoCrop(),
                    this.imageVisible = !0
                }
                keyboardAccess(e) {
                    this.changeKeyboardStepSize(e),
                    this.keyboardMoveCropper(e)
                }
                changeKeyboardStepSize(e) {
                    const t = +e.key;
                    t >= 1 && t <= 9 && (this.settings.stepSize = t)
                }
                keyboardMoveCropper(e) {
                    if (!["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].includes(e.key))
                        return;
                    const i = e.shiftKey ? _.Resize : _.Move
                      , a = e.altKey ? function(s) {
                        switch (s) {
                        case "ArrowUp":
                            return "bottom";
                        case "ArrowRight":
                            return "left";
                        case "ArrowDown":
                            return "top";
                        default:
                            return "right"
                        }
                    }(e.key) : function(s) {
                        switch (s) {
                        case "ArrowUp":
                            return "top";
                        case "ArrowRight":
                            return "right";
                        case "ArrowDown":
                            return "bottom";
                        default:
                            return "left"
                        }
                    }(e.key)
                      , r = function(s, c) {
                        switch (s) {
                        case "ArrowUp":
                            return {
                                clientX: 0,
                                clientY: -1 * c
                            };
                        case "ArrowRight":
                            return {
                                clientX: c,
                                clientY: 0
                            };
                        case "ArrowDown":
                            return {
                                clientX: 0,
                                clientY: c
                            };
                        default:
                            return {
                                clientX: -1 * c,
                                clientY: 0
                            }
                        }
                    }(e.key, this.settings.stepSize);
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.startMove({
                        clientX: 0,
                        clientY: 0
                    }, i, a),
                    this.moveImg(r),
                    this.moveStop()
                }
                startMove(e, t, i=null) {
                    var a, r;
                    (null === (a = this.moveStart) || void 0 === a ? void 0 : a.active) && (null === (r = this.moveStart) || void 0 === r ? void 0 : r.type) === _.Pinch || (e.preventDefault && e.preventDefault(),
                    this.moveStart = Object.assign({
                        active: !0,
                        type: t,
                        position: i,
                        clientX: this.cropperPositionService.getClientX(e),
                        clientY: this.cropperPositionService.getClientY(e)
                    }, this.cropper))
                }
                startPinch(e) {
                    !this.safeImgDataUrl || (e.preventDefault && e.preventDefault(),
                    this.moveStart = Object.assign({
                        active: !0,
                        type: _.Pinch,
                        position: "center",
                        clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
                        clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
                    }, this.cropper))
                }
                moveImg(e) {
                    this.moveStart.active && (e.stopPropagation && e.stopPropagation(),
                    e.preventDefault && e.preventDefault(),
                    this.moveStart.type === _.Move ? (this.cropperPositionService.move(e, this.moveStart, this.cropper),
                    this.checkCropperPosition(!0)) : this.moveStart.type === _.Resize && (!this.cropperStaticWidth && !this.cropperStaticHeight && this.cropperPositionService.resize(e, this.moveStart, this.cropper, this.maxSize, this.settings),
                    this.checkCropperPosition(!1)),
                    this.cd.detectChanges())
                }
                onPinch(e) {
                    this.moveStart.active && (e.stopPropagation && e.stopPropagation(),
                    e.preventDefault && e.preventDefault(),
                    this.moveStart.type === _.Pinch && (this.cropperPositionService.resize(e, this.moveStart, this.cropper, this.maxSize, this.settings),
                    this.checkCropperPosition(!1)),
                    this.cd.detectChanges())
                }
                setMaxSize() {
                    if (this.sourceImage) {
                        const e = this.sourceImage.nativeElement;
                        this.maxSize.width = e.offsetWidth,
                        this.maxSize.height = e.offsetHeight,
                        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle("calc(50% - " + this.maxSize.width / 2 + "px)")
                    }
                }
                setCropperScaledMinSize() {
                    var e, t;
                    (null === (t = null === (e = this.loadedImage) || void 0 === e ? void 0 : e.transformed) || void 0 === t ? void 0 : t.image) ? (this.setCropperScaledMinWidth(),
                    this.setCropperScaledMinHeight()) : (this.settings.cropperScaledMinWidth = 20,
                    this.settings.cropperScaledMinHeight = 20)
                }
                setCropperScaledMinWidth() {
                    this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20
                }
                setCropperScaledMinHeight() {
                    this.settings.cropperScaledMinHeight = this.maintainAspectRatio ? Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio) : this.cropperMinHeight > 0 ? Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height) : 20
                }
                setCropperScaledMaxSize() {
                    var e, t;
                    if (null === (t = null === (e = this.loadedImage) || void 0 === e ? void 0 : e.transformed) || void 0 === t ? void 0 : t.image) {
                        const i = this.loadedImage.transformed.size.width / this.maxSize.width;
                        this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / i : this.maxSize.width,
                        this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / i : this.maxSize.height,
                        this.maintainAspectRatio && (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio ? this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio : this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio && (this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio))
                    } else
                        this.settings.cropperScaledMaxWidth = this.maxSize.width,
                        this.settings.cropperScaledMaxHeight = this.maxSize.height
                }
                checkCropperPosition(e=!1) {
                    this.cropper.x1 < 0 && (this.cropper.x2 -= e ? this.cropper.x1 : 0,
                    this.cropper.x1 = 0),
                    this.cropper.y1 < 0 && (this.cropper.y2 -= e ? this.cropper.y1 : 0,
                    this.cropper.y1 = 0),
                    this.cropper.x2 > this.maxSize.width && (this.cropper.x1 -= e ? this.cropper.x2 - this.maxSize.width : 0,
                    this.cropper.x2 = this.maxSize.width),
                    this.cropper.y2 > this.maxSize.height && (this.cropper.y1 -= e ? this.cropper.y2 - this.maxSize.height : 0,
                    this.cropper.y2 = this.maxSize.height)
                }
                moveStop() {
                    this.moveStart.active && (this.moveStart.active = !1,
                    this.doAutoCrop())
                }
                pinchStop() {
                    this.moveStart.active && (this.moveStart.active = !1,
                    this.doAutoCrop())
                }
                doAutoCrop() {
                    this.autoCrop && this.crop()
                }
                crop() {
                    var e, t;
                    if (null != (null === (t = null === (e = this.loadedImage) || void 0 === e ? void 0 : e.transformed) || void 0 === t ? void 0 : t.image)) {
                        this.startCropImage.emit();
                        const i = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
                        return null != i && this.imageCropped.emit(i),
                        i
                    }
                    return null
                }
            }
            return s.\u0275fac = function(e) {
                return new (e || s)(n.\u0275\u0275directiveInject(P),n.\u0275\u0275directiveInject(K),n.\u0275\u0275directiveInject($),n.\u0275\u0275directiveInject(D.H7),n.\u0275\u0275directiveInject(n.ChangeDetectorRef))
            }
            ,
            s.\u0275cmp = n.\u0275\u0275defineComponent({
                type: s,
                selectors: [["image-cropper"]],
                viewQuery: function(e, t) {
                    if (1 & e && (n.\u0275\u0275viewQuery(L, 7),
                    n.\u0275\u0275viewQuery(F, 5)),
                    2 & e) {
                        let i;
                        n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t.wrapper = i.first),
                        n.\u0275\u0275queryRefresh(i = n.\u0275\u0275loadQuery()) && (t.sourceImage = i.first)
                    }
                },
                hostVars: 4,
                hostBindings: function(e, t) {
                    1 & e && n.\u0275\u0275listener("resize", function() {
                        return t.onResize()
                    }, !1, n.\u0275\u0275resolveWindow)("mousemove", function(a) {
                        return t.moveImg(a)
                    }, !1, n.\u0275\u0275resolveDocument)("touchmove", function(a) {
                        return t.moveImg(a)
                    }, !1, n.\u0275\u0275resolveDocument)("mouseup", function() {
                        return t.moveStop()
                    }, !1, n.\u0275\u0275resolveDocument)("touchend", function() {
                        return t.moveStop()
                    }, !1, n.\u0275\u0275resolveDocument),
                    2 & e && (n.\u0275\u0275styleProp("text-align", t.alignImage),
                    n.\u0275\u0275classProp("disabled", t.disabled))
                },
                inputs: {
                    format: "format",
                    transform: "transform",
                    maintainAspectRatio: "maintainAspectRatio",
                    aspectRatio: "aspectRatio",
                    resizeToWidth: "resizeToWidth",
                    resizeToHeight: "resizeToHeight",
                    cropperMinWidth: "cropperMinWidth",
                    cropperMinHeight: "cropperMinHeight",
                    cropperMaxHeight: "cropperMaxHeight",
                    cropperMaxWidth: "cropperMaxWidth",
                    cropperStaticWidth: "cropperStaticWidth",
                    cropperStaticHeight: "cropperStaticHeight",
                    canvasRotation: "canvasRotation",
                    initialStepSize: "initialStepSize",
                    roundCropper: "roundCropper",
                    onlyScaleDown: "onlyScaleDown",
                    imageQuality: "imageQuality",
                    autoCrop: "autoCrop",
                    backgroundColor: "backgroundColor",
                    containWithinAspectRatio: "containWithinAspectRatio",
                    hideResizeSquares: "hideResizeSquares",
                    cropper: "cropper",
                    alignImage: "alignImage",
                    disabled: "disabled",
                    imageChangedEvent: "imageChangedEvent",
                    imageURL: "imageURL",
                    imageBase64: "imageBase64",
                    imageFile: "imageFile"
                },
                outputs: {
                    imageCropped: "imageCropped",
                    startCropImage: "startCropImage",
                    imageLoaded: "imageLoaded",
                    cropperReady: "cropperReady",
                    loadImageFailed: "loadImageFailed"
                },
                features: [n.\u0275\u0275NgOnChangesFeature],
                decls: 5,
                vars: 10,
                consts: [["wrapper", ""], ["class", "ngx-ic-source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "ngx-ic-source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], [1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], [1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], [1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], [1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], [1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
                template: function(e, t) {
                    1 & e && (n.\u0275\u0275elementStart(0, "div", null, 0),
                    n.\u0275\u0275template(2, U, 2, 5, "img", 1),
                    n.\u0275\u0275element(3, "div", 2),
                    n.\u0275\u0275template(4, Y, 3, 15, "div", 3),
                    n.\u0275\u0275elementEnd()),
                    2 & e && (n.\u0275\u0275styleProp("background", t.imageVisible && t.backgroundColor),
                    n.\u0275\u0275advance(2),
                    n.\u0275\u0275property("ngIf", t.safeImgDataUrl),
                    n.\u0275\u0275advance(1),
                    n.\u0275\u0275styleProp("width", t.maxSize.width, "px")("height", t.maxSize.height, "px")("margin-left", "center" === t.alignImage ? t.marginLeft : null),
                    n.\u0275\u0275advance(1),
                    n.\u0275\u0275property("ngIf", t.imageVisible))
                },
                directives: [z.NgIf],
                styles: ['[_nghost-%COMP%]{display:flex;max-height:100%;max-width:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;transform-origin:center}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{left:0;outline:var(--cropper-overlay-color,#fff) solid 100vw;pointer-events:none;position:absolute;top:0;touch-action:none}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{background:transparent;color:#53535c;display:flex;outline:100vw solid hsla(0,0%,100%,.3);outline:var(--cropper-outline-color,hsla(0,0%,100%,.3)) solid 100vw;position:absolute;touch-action:none}@media (orientation:portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{border:1px dashed;bottom:0;color:inherit;content:"";left:0;opacity:.75;pointer-events:none;position:absolute;right:0;top:0;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border:1px solid hsla(0,0%,100%,.5);cursor:move;width:100%}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{display:inline-block;line-height:6px;opacity:.85;padding:8px;position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{background:#53535c;border:1px solid hsla(0,0%,100%,.5);box-sizing:content-box;display:inline-block;height:6px;width:6px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{cursor:nwse-resize;left:-12px;top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{cursor:ns-resize;left:calc(50% - 12px);top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{cursor:nesw-resize;right:-12px;top:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{cursor:ew-resize;right:-12px;top:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;cursor:nwse-resize;right:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;cursor:ns-resize;left:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;cursor:nesw-resize;left:-12px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{cursor:ew-resize;left:-12px;top:calc(50% - 12px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{cursor:ns-resize;height:22px;left:11px;top:-11px;width:calc(100% - 22px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{cursor:ew-resize;height:calc(100% - 22px);right:-11px;top:11px;width:22px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;cursor:ns-resize;height:22px;left:11px;width:calc(100% - 22px)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{cursor:ew-resize;height:calc(100% - 22px);left:-11px;top:11px;width:22px}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw hsla(0,0%,100%,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,hsla(0,0%,100%,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh hsla(0,0%,100%,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,hsla(0,0%,100%,.3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{display:none}'],
                changeDetection: 0
            }),
            s
        }
        )()
          , ne = (()=>{
            class s {
            }
            return s.\u0275fac = function(e) {
                return new (e || s)
            }
            ,
            s.\u0275mod = n.\u0275\u0275defineNgModule({
                type: s
            }),
            s.\u0275inj = n.\u0275\u0275defineInjector({
                imports: [[z.CommonModule]]
            }),
            s
        }
        )();
        function re(s) {
            const c = s.split(",")
              , e = c[0].replace("data:", "").replace(";base64", "")
              , t = atob(c[1])
              , i = new ArrayBuffer(t.length)
              , a = new Uint8Array(i);
            for (let r = 0; r < t.length; r += 1)
                a[r] = t.charCodeAt(r);
            return new Blob([i],{
                type: e
            })
        }
    }
}]);
