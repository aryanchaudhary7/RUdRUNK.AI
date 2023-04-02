"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[5298], {
    43097: (nt,V,g)=>{
        g.d(V, {
            $: ()=>j
        });
        var r = g(64762)
          , e = g(67686)
          , O = g(77976)
          , L = g(23405)
          , h = g(83668)
          , t = g(57725);
        let j = (()=>{
            class b {
                constructor(m, v, M) {
                    this.helper = m,
                    this.authService = v,
                    this.route = M,
                    this.googleClientId = "1004472777090-s5tneaidliet9cn5qj58hd4e1k3k3rt3.apps.googleusercontent.com",
                    this.fbClientId = "136377486571908",
                    this.isCookiesEnabled = !0,
                    this.socialAuthSub = new L.xQ,
                    this.initializations = {
                        google: !1,
                        fb: !1
                    },
                    this.isApp = !1,
                    this.isAndroid = !1,
                    this.viewport = "desktop"
                }
                init() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        this.onWindowResize(),
                        this.isApp = window.isNative,
                        this.isAndroid = navigator.userAgent.endsWith("-d2capp"),
                        this.helper.msgSub.subscribe(m=>{
                            if (console.log("msg", m),
                            "webview" == m.type && m.payload.isApp && (localStorage.setItem("isApp", "true"),
                            this.isApp = !0,
                            console.log("isApp", this.isApp)),
                            "social-login" == m.type)
                                switch (m.payload.provider) {
                                case "google":
                                    this.getLoginToken({
                                        email: m.payload.email,
                                        token: m.payload.credential
                                    }, "google");
                                    break;
                                case "facebook":
                                    this.getLoginToken({
                                        email: m.payload.email,
                                        token: m.payload.credential
                                    }, "facebook");
                                    break;
                                case "apple":
                                    m.payload.email.endsWith("@privaterelay.appleid.com"),
                                    this.getLoginToken({
                                        email: m.payload.email,
                                        token: m.payload.credential,
                                        name: m.payload.name
                                    }, "apple")
                                }
                        }
                        )
                    })
                }
                initSocialLogins() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        this.onWindowResize(),
                        yield this.init(),
                        !this.isApp && (this.isAndroid ? yield this.initGoogleLogin() : yield this.initGoogleLoginNew(),
                        this.initializations.google = !0,
                        yield this.initFacebookLogin())
                    })
                }
                handleSocialLoginClick(m) {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        let v;
                        if (this.isApp)
                            return this.helper.sendMessageToApp("social-login", m);
                        switch (m) {
                        case "google":
                            v = yield this.handleGoogleClick(),
                            m = "google-one-tap";
                            break;
                        case "facebook":
                            v = yield this.handleFacebookClick()
                        }
                        return yield this.getLoginToken(v, m)
                    })
                }
                getLoginToken(m, v) {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        if (m) {
                            const M = {
                                email: m.email,
                                token: m.token,
                                name: m.name ? m.name : void 0,
                                provider: String(v).toLowerCase()
                            };
                            console.log(M);
                            const S = yield new Promise((E,N)=>{
                                this.authService.login(M, "social").subscribe(C=>{
                                    console.log(C),
                                    E(C)
                                }
                                )
                            }
                            );
                            return this.socialAuthSub.next(S),
                            S
                        }
                    })
                }
                initGoogleLogin() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        const m = {
                            scope: "email",
                            ux_mode: "popup",
                            response_type: "code"
                        };
                        console.log("-------------- gprovider obj-------------", "popup", m);
                        try {
                            yield this.helper.loadScript("https://apis.google.com/js/platform.js")
                        } catch (M) {
                            console.log(M)
                        }
                        yield new Promise((M,S)=>{
                            window.gapi.load("auth2", ()=>{
                                M(1)
                            }
                            )
                        }
                        );
                        let v = !1;
                        try {
                            this.googleAuth2 = yield window.gapi.auth2.init(Object.assign({
                                client_id: this.googleClientId
                            }, m))
                        } catch (M) {
                            console.log(M),
                            v = !0,
                            this.googleAuth2 = window.gapi.auth2.init(Object.assign({
                                client_id: this.googleClientId
                            }, m))
                        }
                        m.onError = M=>{
                            console.log(M)
                        }
                        ,
                        v && (this.isCookiesEnabled = !1)
                    })
                }
                onWindowResize() {
                    this.viewport = window.innerWidth <= 991 ? "mobile" : "desktop"
                }
                initGoogleLoginNew() {
                    var m, v, M;
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        console.log("-------------- gprovider obj-------------", "popup", {
                            scope: "email",
                            ux_mode: "popup",
                            response_type: "code"
                        });
                        try {
                            (null === (M = null === (v = null === (m = window) || void 0 === m ? void 0 : m.google) || void 0 === v ? void 0 : v.accounts) || void 0 === M ? void 0 : M.id) || (yield this.helper.loadScript("https://accounts.google.com/gsi/client"))
                        } catch (E) {
                            console.log(E)
                        }
                        window.google.accounts.id.initialize({
                            client_id: this.googleClientId,
                            callback: E=>this.handleGoogleCallback(E)
                        }),
                        window.google.accounts.id.renderButton(document.getElementById("google-root"), {
                            theme: "outline",
                            size: "large",
                            text: "continue_with",
                            width: "mobile" == this.viewport ? window.innerWidth - 80 + "px" : "500px"
                        })
                    })
                }
                handleGoogleCallback(m) {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        console.log("handleGoogleCallback", m);
                        const v = this.helper.parseJwt(m.credential);
                        return yield this.getLoginToken({
                            email: v.email,
                            token: m.credential
                        }, "google-one-tap")
                    })
                }
                initFacebookLogin() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        try {
                            yield this.helper.loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"),
                            window.FB.Event.subscribe("xfbml.render", ()=>this.initializations.fb = !0),
                            window.FB.init({
                                appId: this.fbClientId,
                                status: !0,
                                xfbml: !0,
                                cookie: this.isCookiesEnabled,
                                version: "v12.0"
                            })
                        } catch (m) {
                            console.log(m)
                        }
                    })
                }
                handleGoogleClick() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        const m = this.isCookiesEnabled ? "popup" : "redirect"
                          , M = (yield new Promise((C,w)=>{
                            this.googleAuth2.signIn({
                                client_id: this.googleClientId,
                                ux_mode: m,
                                response_type: "code",
                                scope: "email"
                            }).then(P=>{
                                console.log("google auth data", P),
                                C(P)
                            }
                            )
                        }
                        ),
                        this.googleAuth2.currentUser.get());
                        console.log("google profile", M);
                        const S = yield M.getBasicProfile();
                        console.log("google profile obj", S);
                        const E = yield M.getAuthResponse(!0);
                        return console.log("google token", E),
                        {
                            email: S.getEmail(),
                            token: E.id_token
                        }
                    })
                }
                handleRedirects() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        console.log("handleRedirects", this.route.snapshot.queryParams),
                        console.log("handleRedirects", this.route.snapshot.queryParams),
                        console.log("handleRedirects", this.route.snapshot.fragment)
                    })
                }
                handleFacebookClick() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        console.log("handle fb click");
                        const m = yield new Promise((v,M)=>{
                            window.FB.login(S=>{
                                this.handleFacebookCallback(S)
                            }
                            , {
                                scope: "email",
                                return_scopes: !0
                            })
                        }
                        );
                        return {
                            email: m.email,
                            token: m.authResponse.accessToken
                        }
                    })
                }
                handleFacebookCallback(m) {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        console.log("fb response", m),
                        m.authResponse ? (console.log("Welcome!  Fetching your information.... "),
                        window.FB.api("/me?fields=id,name,email", v=>{
                            console.log("res, user details", v),
                            console.log("Good to see you, " + v.name + "." + v.email),
                            this.getLoginToken({
                                email: v.email,
                                token: m.authResponse.accessToken
                            }, "facebook")
                        }
                        )) : console.log("User cancelled login or did not fully authorize.")
                    })
                }
                socialSignOut() {
                    console.log("social sign out")
                }
                googleSignOut() {
                    console.log("google sign out"),
                    this.googleAuth2.signOut().then(()=>{
                        console.log("signed out")
                    }
                    )
                }
                facebookSignOut() {
                    console.log("facebook sign out"),
                    window.FB.logout(m=>{
                        console.log("signed out")
                    }
                    )
                }
            }
            return b.\u0275fac = function(m) {
                return new (m || b)(h.\u0275\u0275inject(O.W_),h.\u0275\u0275inject(e.e),h.\u0275\u0275inject(t.gz))
            }
            ,
            b.\u0275prov = h.\u0275\u0275defineInjectable({
                token: b,
                factory: b.\u0275fac,
                providedIn: "root"
            }),
            b
        }
        )()
    }
    ,
    45298: (nt,V,g)=>{
        g.r(V),
        g.d(V, {
            AuthModule: ()=>f
        });
        var r = g(86019)
          , e = g(57725)
          , O = g(91904)
          , L = g(67686)
          , h = g(49133)
          , t = g(83668)
          , z = g(35427)
          , j = g(7336)
          , b = g(79813)
          , D = g(69334);
        function m(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 26),
            t.\u0275\u0275element(1, "img", 27),
            t.\u0275\u0275elementEnd())
        }
        function v(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 26),
            t.\u0275\u0275element(1, "img", 28),
            t.\u0275\u0275elementEnd())
        }
        function M(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 26),
            t.\u0275\u0275element(1, "img", 29),
            t.\u0275\u0275elementEnd())
        }
        function S(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 26),
            t.\u0275\u0275element(1, "img", 30),
            t.\u0275\u0275elementEnd())
        }
        function E(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 26),
            t.\u0275\u0275element(1, "img", 31),
            t.\u0275\u0275elementEnd())
        }
        function N(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 32),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.successMsg, " ")
            }
        }
        function C(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 33),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.errorMsg, " ")
            }
        }
        function w(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 34),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.errorMsg || "Please enter a valid email id", " ")
            }
        }
        const P = function(a, p) {
            return {
                active: a,
                danger: p
            }
        }
          , x = function() {
            return ["/auth"]
        };
        let y = (()=>{
            class a {
                constructor(o, i, d, u, k, F) {
                    this.fb = o,
                    this.router = i,
                    this.route = d,
                    this.authService = u,
                    this.metaService = k,
                    this.titleService = F,
                    this.viewport = "desktop",
                    this.slider = {
                        rewind: !0,
                        autoplay: !0,
                        autoplaySpeed: 1e3,
                        autoplayHoverPause: !0,
                        navText: ["", ""],
                        loop: !0,
                        nav: !1,
                        dots: !0,
                        responsive: {
                            0: {
                                items: 1,
                                stagePadding: 130
                            },
                            300: {
                                items: 1,
                                stagePadding: 70
                            },
                            350: {
                                items: 1,
                                stagePadding: 90
                            },
                            400: {
                                items: 1,
                                stagePadding: 110
                            },
                            500: {
                                items: 1,
                                stagePadding: 130
                            },
                            600: {
                                items: 1,
                                stagePadding: 150
                            },
                            700: {
                                items: 1,
                                stagePadding: 170
                            }
                        }
                    }
                }
                onWindowResize() {
                    this.viewport = window.innerWidth <= 991 ? "mobile" : "desktop"
                }
                ngOnInit() {
                    this.onWindowResize(),
                    this.recoverForm = this.fb.group({
                        email: ["", [h.kI.required, h.kI.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), h.kI.minLength(4)]]
                    }),
                    this.route.queryParams.subscribe(u=>{
                        console.log(u),
                        u.email && this.recoverForm.setValue({
                            email: u.email
                        })
                    }
                    );
                    const o = "Forgot password on Unstop.com"
                      , i = "Create a new password to login your account.";
                    this.titleService.setTitle(o),
                    this.metaService.addTags([{
                        name: "description",
                        content: i
                    }, {
                        name: "og:title",
                        content: o
                    }, {
                        name: "og:description",
                        content: i
                    }, {
                        property: "og:image",
                        content: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/unstop-seo-image.jpg"
                    }, {
                        property: "og:image:height",
                        content: 1536
                    }, {
                        property: "og:image:width",
                        content: 768
                    }])
                }
                login() {
                    this.router.navigate(["auth/login"], this.route.snapshot.queryParams.returnUrl ? {
                        queryParamsHandling: "preserve"
                    } : {
                        queryParams: {
                            returnUrl: "/"
                        }
                    })
                }
                onSubmit() {
                    var o, i, d, u;
                    this.successMsg = null,
                    this.errorMsg = null;
                    const k = this.recoverForm.value;
                    (null === (i = null === (o = this.route.snapshot) || void 0 === o ? void 0 : o.queryParams) || void 0 === i ? void 0 : i.returnUrl) && (k.returnUrl = null === (u = null === (d = this.route.snapshot) || void 0 === d ? void 0 : d.queryParams) || void 0 === u ? void 0 : u.returnUrl);
                    const F = Object.keys(k);
                    this.authService.forgotPassword(k).subscribe(R=>{
                        R.error ? (this.errorMsg = R.error.message,
                        F.forEach(W=>{
                            this.pushErrorFor(W, R.error.message)
                        }
                        )) : this.successMsg = R.data
                    }
                    )
                }
                pushErrorFor(o, i) {
                    this.recoverForm.controls[o].setErrors({
                        msg: i
                    })
                }
            }
            return a.\u0275fac = function(o) {
                return new (o || a)(t.\u0275\u0275directiveInject(h.qu),t.\u0275\u0275directiveInject(e.F0),t.\u0275\u0275directiveInject(e.gz),t.\u0275\u0275directiveInject(L.e),t.\u0275\u0275directiveInject(z.h_),t.\u0275\u0275directiveInject(z.Dx))
            }
            ,
            a.\u0275cmp = t.\u0275\u0275defineComponent({
                type: a,
                selectors: [["app-recover-password"]],
                hostBindings: function(o, i) {
                    1 & o && t.\u0275\u0275listener("resize", function(u) {
                        return i.onWindowResize(u)
                    }, !1, t.\u0275\u0275resolveWindow)
                },
                decls: 38,
                vars: 12,
                consts: [[2, "padding-bottom", "40px"], [1, "login-box", "d2c-container"], [1, "login-carousel"], ["routerLink", "/"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "alt", "Unstop", 1, "logo"], [1, "carousel"], [1, "team-carousel", 3, "options"], ["owlElement", ""], ["carouselSlide", ""], [1, "right_sect"], [1, "item"], ["id", "existing-customer", "data-hook", "login", 1, "panel-body"], [1, "form-title", "mb-15"], [1, "center-align"], ["class", "d2c_alert success mb-15", 4, "ngIf"], ["class", "d2c_alert danger mb-15", 4, "ngIf"], [1, "login_form", "clearfix", 3, "formGroup", "ngSubmit"], ["emailForm", "ngForm"], [1, "input_fields", "mb-0", 3, "ngClass"], ["for", "email"], ["type", "email", "name", "email", "id", "email_address", "formControlName", "email", "autocomplete", "off", "placeholder", "Your Email ID"], ["class", "error", 4, "ngIf"], ["type", "submit", 1, "btn", "login-button", "full-width", "mt-10", 3, "disabled"], [1, "forgot", "mt-20", "j-between"], [3, "click"], [3, "routerLink"], [1, "car-item"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f5b24c1d_login_1.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f71aba10_login_2.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f7c11db9_login_3.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f8bc048d_login_4.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f9b3c016_login_5.png?d=686x858"], [1, "d2c_alert", "success", "mb-15"], [1, "d2c_alert", "danger", "mb-15"], [1, "error"]],
                template: function(o, i) {
                    if (1 & o && (t.\u0275\u0275elementStart(0, "section", 0),
                    t.\u0275\u0275elementStart(1, "div", 1),
                    t.\u0275\u0275elementStart(2, "div", 2),
                    t.\u0275\u0275elementStart(3, "div", 3),
                    t.\u0275\u0275element(4, "img", 4),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(5, "div", 5),
                    t.\u0275\u0275elementStart(6, "owl-carousel-o", 6, 7),
                    t.\u0275\u0275template(8, m, 2, 0, "ng-template", 8),
                    t.\u0275\u0275template(9, v, 2, 0, "ng-template", 8),
                    t.\u0275\u0275template(10, M, 2, 0, "ng-template", 8),
                    t.\u0275\u0275template(11, S, 2, 0, "ng-template", 8),
                    t.\u0275\u0275template(12, E, 2, 0, "ng-template", 8),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275element(13, "app-unstop-stats"),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(14, "div", 9),
                    t.\u0275\u0275elementStart(15, "div", 10),
                    t.\u0275\u0275elementStart(16, "div", 11),
                    t.\u0275\u0275elementStart(17, "div", 12),
                    t.\u0275\u0275elementStart(18, "h2", 13),
                    t.\u0275\u0275text(19, "Reset Password"),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(20, "p"),
                    t.\u0275\u0275text(21, "Create a new password to login your account."),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275template(22, N, 2, 1, "div", 14),
                    t.\u0275\u0275template(23, C, 2, 1, "div", 15),
                    t.\u0275\u0275elementStart(24, "form", 16, 17),
                    t.\u0275\u0275listener("ngSubmit", function() {
                        return i.onSubmit()
                    }),
                    t.\u0275\u0275elementStart(26, "div", 18),
                    t.\u0275\u0275elementStart(27, "label", 19),
                    t.\u0275\u0275text(28, "Email"),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275element(29, "input", 20),
                    t.\u0275\u0275template(30, w, 2, 1, "div", 21),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(31, "button", 22),
                    t.\u0275\u0275text(32, " Submit "),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(33, "div", 23),
                    t.\u0275\u0275elementStart(34, "span", 24),
                    t.\u0275\u0275listener("click", function() {
                        return i.login()
                    }),
                    t.\u0275\u0275text(35, " Login "),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(36, "span", 25),
                    t.\u0275\u0275text(37, " Create Account "),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd()),
                    2 & o) {
                        const d = t.\u0275\u0275reference(25);
                        t.\u0275\u0275advance(6),
                        t.\u0275\u0275property("options", i.slider),
                        t.\u0275\u0275advance(16),
                        t.\u0275\u0275property("ngIf", i.successMsg),
                        t.\u0275\u0275advance(1),
                        t.\u0275\u0275property("ngIf", i.errorMsg),
                        t.\u0275\u0275advance(1),
                        t.\u0275\u0275property("formGroup", i.recoverForm),
                        t.\u0275\u0275advance(2),
                        t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(8, P, i.recoverForm.get("email").value, i.recoverForm.get("email").errors && (i.recoverForm.get("email").dirty || i.recoverForm.get("email").touched))),
                        t.\u0275\u0275advance(4),
                        t.\u0275\u0275property("ngIf", i.recoverForm.get("email").errors && (i.recoverForm.get("email").dirty || i.recoverForm.get("email").touched)),
                        t.\u0275\u0275advance(1),
                        t.\u0275\u0275property("disabled", d.invalid),
                        t.\u0275\u0275advance(5),
                        t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(11, x))
                    }
                },
                directives: [e.rH, j.H, b.Fy, b.Mp, D.X, r.NgIf, h._Y, h.JL, h.sg, r.NgClass, h.Fj, h.JJ, h.u],
                styles: ['section[_ngcontent-%COMP%]{background-color:#fff}@media screen and (max-width: 768px){section[_ngcontent-%COMP%]{justify-content:flex-start}}.d2c-container[_ngcontent-%COMP%]{max-width:1250px}.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:65px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-left:1px solid rgba(39,73,125,.5);padding-left:10px;margin-left:8px;color:#1c4980;font-size:12px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px}.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1c4980;border:1px solid #1C4980;width:120px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:.3s;background:rgba(39,73,125,.1);border-radius:8px;background:#1C4980;color:#fff}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#fff;border-color:#1c4980;color:#1c4980}@media (max-width: 800px){.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{height:53px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:90px;height:34px}}.hdng[_ngcontent-%COMP%]{width:460px;margin-top:20px}.hdng[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-weight:800;font-size:37px;line-height:46px;color:#1c4980}.hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:140%;color:#27497dcc;margin-bottom:0;margin-top:10px}.hdng[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}@media (max-width: 991px){.hdng[_ngcontent-%COMP%]{display:none}}.right_sect[_ngcontent-%COMP%]{width:550px;position:relative;z-index:9;margin-left:auto}@media (max-width: 1200px){.right_sect[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 991px){.right_sect[_ngcontent-%COMP%]{width:400px;width:100%;padding-left:0;max-width:650px;margin:auto}}@media (max-width: 600px){.right_sect[_ngcontent-%COMP%]{min-width:unset}}.item[_ngcontent-%COMP%]{background:#ffffff;border-radius:10px;margin-bottom:25px;padding:20px 25px;width:100%}.item[_ngcontent-%COMP%]:last-child{margin:auto;position:relative}.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{min-height:calc(100vh - 160px);display:flex;flex-direction:column;justify-content:center}@media (max-width: 1100px){.item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 991px){.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{display:block;height:100%}}@media (max-width: 800px){.item[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 600px){.item[_ngcontent-%COMP%]{min-width:unset;width:100%}.item.login[_ngcontent-%COMP%]{width:100%}}.header[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;z-index:9;min-height:calc(100vh - 65px)}@media (max-width: 991px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;padding:30px 15px}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding-top:0;min-height:calc(100vh - 150px)}}.other_link[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:#1c4980;margin-top:10px}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1c4980;font-weight:500;transition:.3s;cursor:pointer}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.other_link[_ngcontent-%COMP%]{font-weight:500;color:#3e6493}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}}.or[_ngcontent-%COMP%]{position:relative;margin:15px 0}.or[_ngcontent-%COMP%]:before, .or[_ngcontent-%COMP%]:after{content:"";height:1px;width:calc(50% - 20px);background:rgba(39,73,125,.2);position:absolute;top:0;margin:auto;bottom:0}.or[_ngcontent-%COMP%]:before{left:0}.or[_ngcontent-%COMP%]:after{right:0}.form-title[_ngcontent-%COMP%]{text-align:center}.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:20px;color:#1c4980;margin-bottom:8px}.form-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#1c4980}.google-btn[_ngcontent-%COMP%]{margin-top:15px}.google-btn[_ngcontent-%COMP%]   .ios-txt[_ngcontent-%COMP%]{width:calc(100% - 100px)}.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px}.login_form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#1c4980d9}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{text-transform:lowercase}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked):after{top:20px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#1c4980}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{position:absolute;top:40px;right:20px;color:#4c5d73;cursor:pointer;transition:.3s}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{top:35px}}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container{border:none!important}@media screen and (max-width: 600px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container   .mat-menu-trigger{top:10px}}.login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     .mat-form-field .mat-select-trigger, .login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     input{border-color:#e7183e!important;background:#fff!important}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-select-trigger{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{line-height:50px;padding-left:15px;font-size:14px}@media only screen and (min-width: 801px){.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{font-weight:400}}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label .mat-placeholder-required{display:none}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper .mat-empty{color:#a9a9a9}.login_form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{margin-top:20px;font-weight:500;height:47px;background:#0073E6;border-radius:8px}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:17px;color:#455368;transition:.3s;cursor:pointer}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]{position:absolute;right:10px;padding:5px 8px;font-size:12px;top:34px;cursor:pointer;border-radius:6px;transition:.4s;font-weight:500}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:hover{background:#c3daf8}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:disabled{color:#484848!important;background:#d8d8d8;cursor:not-allowed}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper{line-height:18px;padding:0;color:#484848!important;background-color:transparent!important}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span{min-width:unset}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper .minute{display:none}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span em{display:none}.error_mesg[_ngcontent-%COMP%]{background:#d63500;border:1px solid #d63500;box-shadow:0 3px 8px #ef535066;color:#fff;font-size:12px;display:flex;align-items:center;padding:0 15px;bottom:-40px;left:0;border-radius:5px;z-index:9;height:34px;line-height:13px}.error_mesg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:6px;max-width:15px}.child-items[_ngcontent-%COMP%]{margin-top:20px;padding:20px;background:#fff;box-shadow:0 0 12px #0080ff40;border-radius:8px;display:flex;flex-wrap:wrap}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px 10px;border-radius:4px;transition:.4s;display:flex;align-items:center;width:50%}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;display:block}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#1c4980;font-weight:500;margin-bottom:0;transition:.3s;width:calc(100% - 40px);padding-left:15px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#eef4ff}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#0073e6}@media (max-width: 800px){.child-items[_ngcontent-%COMP%]{padding:10px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;padding:8px}}.apple_btn[_ngcontent-%COMP%]{background:#fff;color:#1c4980;display:flex;align-items:center;font-weight:500;width:100%;box-shadow:none;border:1px solid #d8d8d8;border-radius:4px;font-size:14px;padding:0 10px}.apple_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:40px}.glogin-ios[_ngcontent-%COMP%]{display:flex;background:#fff;color:#1c4980;align-items:center;width:100%;font-weight:500}.glogin-ios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.glogin-ios[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:40px}.login-modal[_ngcontent-%COMP%]{padding:10px}.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px;min-height:auto}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:100%}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:20px;width:100%}@media (max-width: 600px){.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:20px}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{box-shadow:none;padding:0}}.login-box[_ngcontent-%COMP%]{min-height:calc(100vh - 100px)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{text-align:center;position:absolute;left:60px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:flex-start}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:30px 0}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]{padding:20px;width:100%;margin-bottom:30px}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-item.active .car-item{transform:scale(1)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-dots{bottom:-40px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]{width:100%;transform:scale(.7);transition:.5s ease-in-out}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;width:auto;height:auto;max-height:none;margin:auto}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:36px;line-height:44px;color:#1c4980}@media screen and (max-width: 1200px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{width:calc(100% - 550px);left:30px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{position:static;width:100%}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{max-width:450px;width:100%}}@media screen and (max-width: 600px){.login-box[_ngcontent-%COMP%]{flex-direction:column;height:100%;padding:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:28px}.login-box[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:0}}.h-auto[_ngcontent-%COMP%]{height:100%!important;max-height:unset;min-height:unset!important}', ".form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px!important}"]
            }),
            a
        }
        )();
        var T = g(75650)
          , A = g(96898)
          , I = g(39357)
          , B = g(98320)
          , K = g(95599)
          , G = g(62361)
          , H = g(71084)
          , Q = g(53010)
          , ot = g(21978)
          , $ = g(28167)
          , it = g(16400)
          , rt = g(6731)
          , X = g(47611)
          , q = g(51714)
          , tt = g(90287);
        const at = ["captchaRefe"];
        function lt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 17),
            t.\u0275\u0275element(1, "img", 18),
            t.\u0275\u0275elementEnd())
        }
        function st(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 17),
            t.\u0275\u0275element(1, "img", 19),
            t.\u0275\u0275elementEnd())
        }
        function ct(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 17),
            t.\u0275\u0275element(1, "img", 20),
            t.\u0275\u0275elementEnd())
        }
        function gt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 17),
            t.\u0275\u0275element(1, "img", 21),
            t.\u0275\u0275elementEnd())
        }
        function dt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 17),
            t.\u0275\u0275element(1, "img", 22),
            t.\u0275\u0275elementEnd())
        }
        const pt = function() {
            return ["/competitions"]
        }
          , mt = function() {
            return ["/hiring-challenges"]
        }
          , _t = function() {
            return ["/quizzes"]
        }
          , ut = function() {
            return ["/hackathons"]
        }
          , ht = function() {
            return ["/scholarships"]
        }
          , ft = function() {
            return ["/internships"]
        }
          , xt = function() {
            return ["/jobs"]
        }
          , Ct = function() {
            return ["/workshops"]
        }
          , Pt = function() {
            return ["/creative-cultural-events"]
        }
          , vt = function() {
            return ["/college-fests"]
        }
          , Mt = function(a) {
            return {
                returnUrl: a
            }
        };
        function Ot(a, p) {
            if (1 & a) {
                const o = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div"),
                t.\u0275\u0275elementStart(1, "div", 23),
                t.\u0275\u0275text(2, " You have Successfully Registered ! Please activate your account by clicking on the link sent to your email. "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(3, "div", 24),
                t.\u0275\u0275elementStart(4, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Competitions_Challenges")
                }),
                t.\u0275\u0275element(5, "img", 26),
                t.\u0275\u0275elementStart(6, "p"),
                t.\u0275\u0275text(7, "Competitions & Challenges"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(8, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Hiring_Challenges")
                }),
                t.\u0275\u0275element(9, "img", 27),
                t.\u0275\u0275elementStart(10, "p"),
                t.\u0275\u0275text(11, "Hiring Challenges"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(12, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Quizzes")
                }),
                t.\u0275\u0275element(13, "img", 28),
                t.\u0275\u0275elementStart(14, "p"),
                t.\u0275\u0275text(15, "Quizzes"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(16, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Hackathons")
                }),
                t.\u0275\u0275element(17, "img", 29),
                t.\u0275\u0275elementStart(18, "p"),
                t.\u0275\u0275text(19, "Hackathons"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(20, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Scholarships")
                }),
                t.\u0275\u0275element(21, "img", 30),
                t.\u0275\u0275elementStart(22, "p"),
                t.\u0275\u0275text(23, "Scholarships"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(24, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Jobs_Internships")
                }),
                t.\u0275\u0275element(25, "img", 31),
                t.\u0275\u0275elementStart(26, "p"),
                t.\u0275\u0275text(27, "Internships"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(28, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Jobs_Internships")
                }),
                t.\u0275\u0275element(29, "img", 32),
                t.\u0275\u0275elementStart(30, "p"),
                t.\u0275\u0275text(31, "Jobs"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(32, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Workshops")
                }),
                t.\u0275\u0275element(33, "img", 33),
                t.\u0275\u0275elementStart(34, "p"),
                t.\u0275\u0275text(35, "Workshops & Webinars"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(36, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Cultural")
                }),
                t.\u0275\u0275element(37, "img", 34),
                t.\u0275\u0275elementStart(38, "p"),
                t.\u0275\u0275text(39, "Cultural Events"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(40, "a", 25),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().followClicked("Festivals")
                }),
                t.\u0275\u0275element(41, "img", 35),
                t.\u0275\u0275elementStart(42, "p"),
                t.\u0275\u0275text(43, "College Festivals"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(44, "div", 36),
                t.\u0275\u0275text(45, " Already have an account? "),
                t.\u0275\u0275elementStart(46, "span", 37),
                t.\u0275\u0275text(47, " Login "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd()
            }
            if (2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(11, pt)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(12, mt)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(13, _t)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(14, ut)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(15, ht)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(16, ft)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(17, xt)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(18, Ct)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(19, Pt)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("routerLink", t.\u0275\u0275pureFunction0(20, vt)),
                t.\u0275\u0275advance(6),
                t.\u0275\u0275property("queryParams", t.\u0275\u0275pureFunction1(21, Mt, o.returnUrlSignUp))
            }
        }
        function bt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("first_name").errors.msg || "Please enter a valid name", " ")
            }
        }
        function wt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("last_name").errors.msg || "Please enter a valid name", " ")
            }
        }
        function yt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 84),
            t.\u0275\u0275elementStart(1, "div", 69),
            t.\u0275\u0275elementStart(2, "i", 70),
            t.\u0275\u0275text(3, "info_outline"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(4, "div", 71),
            t.\u0275\u0275text(5),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(5),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("username").errors.msg || "The username must have at least 8 characters with a combination of alphabets & numbers. Only '-' and '_' are allowed as special characters.", " ")
            }
        }
        function St(a, p) {
            1 & a && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275text(1, " Gender "),
            t.\u0275\u0275elementContainerEnd())
        }
        function kt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("gender").errors.msg || "Please select a gender", " ")
            }
        }
        function Et(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(3);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("others_gender").errors.msg || "Special characters are not allowed", " ")
            }
        }
        const U = function(a, p) {
            return {
                active: a,
                danger: p
            }
        };
        function It(a, p) {
            if (1 & a && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275elementStart(1, "div", 85),
            t.\u0275\u0275elementStart(2, "label", 86),
            t.\u0275\u0275text(3, "Others"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275element(4, "input", 87),
            t.\u0275\u0275template(5, Et, 2, 1, "div", 44),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementContainerEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(2, U, o.signUpForm.get("others_gender").value, null == o.error ? null : o.error.message)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", o.signUpForm.get("others_gender").errors && o.signUpForm.get("others_gender").touched)
            }
        }
        function Ut(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("email").errors.msg || "Please enter a valid email id", " ")
            }
        }
        function Ft(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                let i;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", null != (i = o.signUpForm.get("mobile")) && null != i.errors && i.errors.validatePhoneNumber ? "Please enter a valid mobile number" : "", " ")
            }
        }
        function Tt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div", 88),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a && (t.\u0275\u0275advance(1),
            t.\u0275\u0275textInterpolate1(" ", "Please select organisation from list", " "))
        }
        function Lt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 84),
            t.\u0275\u0275elementStart(1, "div", 69),
            t.\u0275\u0275elementStart(2, "i", 70),
            t.\u0275\u0275text(3, "info_outline"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(4, "div", 71),
            t.\u0275\u0275text(5),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(5),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("password").errors.msg || "The password must have at least 8 characters with a combination of alphabets, special characters & numbers.", " ")
            }
        }
        function et(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("password_confirmation").errors.msg || "Password must match", " ")
            }
        }
        function zt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 83),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" ", o.signUpForm.get("agreed").errors.msg || "Please accept the terms & condition.", " ")
            }
        }
        const At = function(a) {
            return {
                "flex-wrap": a
            }
        }
          , Rt = function(a, p) {
            return {
                "mr-15": a,
                "active no-label": p
            }
        }
          , jt = function() {
            return ["in", "us", "ca"]
        }
          , Vt = function(a) {
            return {
                "d-none": a
            }
        };
        function Dt(a, p) {
            if (1 & a) {
                const o = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "form", 38, 39),
                t.\u0275\u0275listener("ngSubmit", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().onSubmit()
                }),
                t.\u0275\u0275elementStart(3, "div", 40),
                t.\u0275\u0275elementStart(4, "div", 41),
                t.\u0275\u0275elementStart(5, "label", 42),
                t.\u0275\u0275text(6, "First Name"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(7, "input", 43),
                t.\u0275\u0275listener("keydown", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().trimNumericChars(d)
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(8, bt, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(9, "div", 41),
                t.\u0275\u0275elementStart(10, "label", 45),
                t.\u0275\u0275text(11, "Last Name"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(12, "input", 46),
                t.\u0275\u0275listener("keydown", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().trimNumericChars(d)
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(13, wt, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(14, "div", 40),
                t.\u0275\u0275elementStart(15, "div", 41),
                t.\u0275\u0275elementStart(16, "label", 47),
                t.\u0275\u0275text(17, "User Name"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(18, "input", 48),
                t.\u0275\u0275listener("ngModelChange", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().userName = d
                })("ngModelChange", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().checkIfUserNameExists()
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(19, yt, 6, 1, "div", 49),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(20, "div", 50),
                t.\u0275\u0275elementStart(21, "label", 51),
                t.\u0275\u0275text(22, "Gender"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(23, "div", 52),
                t.\u0275\u0275elementStart(24, "mat-form-field", 53),
                t.\u0275\u0275elementStart(25, "mat-label"),
                t.\u0275\u0275template(26, St, 2, 0, "ng-container", 13),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(27, "mat-select", 54),
                t.\u0275\u0275elementStart(28, "mat-option", 55),
                t.\u0275\u0275text(29, " Male "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(30, "mat-option", 55),
                t.\u0275\u0275text(31, " Female "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(32, "mat-option", 55),
                t.\u0275\u0275text(33, " Transgender "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(34, "mat-option", 55),
                t.\u0275\u0275text(35, " Intersex "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(36, "mat-option", 55),
                t.\u0275\u0275text(37, " Non Binary "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(38, "mat-option", 55),
                t.\u0275\u0275text(39, " Prefer not to say "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(40, "mat-option", 55),
                t.\u0275\u0275text(41, " Others "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(42, kt, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(43, It, 6, 5, "ng-container", 13),
                t.\u0275\u0275elementStart(44, "div", 40),
                t.\u0275\u0275elementStart(45, "div", 56),
                t.\u0275\u0275elementStart(46, "label", 57),
                t.\u0275\u0275text(47, "Email"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275element(48, "input", 58),
                t.\u0275\u0275template(49, Ut, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(50, "div", 59),
                t.\u0275\u0275elementStart(51, "label", 51),
                t.\u0275\u0275text(52, "Phone"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275element(53, "ngx-mat-intl-tel-input", 60),
                t.\u0275\u0275template(54, Ft, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(55, "div", 61),
                t.\u0275\u0275elementStart(56, "div", 62),
                t.\u0275\u0275elementStart(57, "label", 51),
                t.\u0275\u0275text(58, "Organisation"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(59, "app-organisation-autocomplete", 63),
                t.\u0275\u0275listener("organisationSelected", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().organisationSelected(d)
                })("focusStatus", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().handleOrganisationFocus(d)
                })("newOrganisationAdded", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().organisationSelected(d)
                })("organisationChange", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().organisationSelected(d)
                })("keyup", function(d) {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().onChangeOrganisation(d)
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(60, Tt, 2, 1, "div", 64),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(61, "div", 40),
                t.\u0275\u0275elementStart(62, "div", 65),
                t.\u0275\u0275elementStart(63, "label", 66),
                t.\u0275\u0275text(64, "Password"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275element(65, "input", 67),
                t.\u0275\u0275template(66, Lt, 6, 1, "div", 49),
                t.\u0275\u0275elementStart(67, "div", 68),
                t.\u0275\u0275elementStart(68, "div", 69),
                t.\u0275\u0275elementStart(69, "i", 70),
                t.\u0275\u0275text(70, "info_outline"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(71, "div", 71),
                t.\u0275\u0275text(72),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(73, "div", 72),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().changeType()
                }),
                t.\u0275\u0275text(74),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(75, "div", 73),
                t.\u0275\u0275elementStart(76, "label", 74),
                t.\u0275\u0275text(77, "Confirm Password"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275element(78, "input", 75),
                t.\u0275\u0275template(79, et, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(80, "div", 76),
                t.\u0275\u0275element(81, "input", 77),
                t.\u0275\u0275elementStart(82, "label", 78),
                t.\u0275\u0275text(83, " All your information is collected, stored and processed as per our data processing guidelines. By signing up on Unstop, you agree to our "),
                t.\u0275\u0275elementStart(84, "a", 79),
                t.\u0275\u0275text(85, "Privacy Policy"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275text(86, " and "),
                t.\u0275\u0275elementStart(87, "a", 80),
                t.\u0275\u0275text(88, "Terms of Use"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(89, zt, 2, 1, "div", 44),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(90, "button", 81),
                t.\u0275\u0275text(91, " Register "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(92, "div", 36),
                t.\u0275\u0275text(93, " Already have an account? "),
                t.\u0275\u0275elementStart(94, "span", 82),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().login()
                }),
                t.\u0275\u0275text(95, " Login "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & a) {
                const o = t.\u0275\u0275reference(2)
                  , i = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("formGroup", i.signUpForm),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(44, U, i.signUpForm.get("first_name").value, i.signUpForm.get("first_name").errors && i.signUpForm.get("first_name").touched)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("first_name").errors && i.signUpForm.get("first_name").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(47, U, i.signUpForm.get("last_name").value, i.signUpForm.get("last_name").errors && i.signUpForm.get("last_name").touched)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("last_name").errors && i.signUpForm.get("last_name").touched),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(50, U, i.signUpForm.get("username").value, i.signUpForm.get("username").errors && i.signUpForm.get("username").touched)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngModel", i.userName),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("username").errors && i.signUpForm.get("username").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(53, U, i.signUpForm.get("gender").value, i.signUpForm.get("gender").errors && i.signUpForm.get("gender").touched)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(56, At, "mobile" == i.viewport)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(58, Rt, "OT" == i.signUpForm.value.gender && "desktop" == i.viewport, "" != i.signUpForm.value.gender)),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngIf", "" == i.signUpForm.value.gender),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "M"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "F"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "T"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "I"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "NB"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "O"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("value", "OT"),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("gender").errors && i.signUpForm.get("gender").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", "OT" == i.signUpForm.value.gender),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(61, U, i.signUpForm.get("email").value, i.signUpForm.get("email").errors && i.signUpForm.get("email").touched)),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("email").errors && i.signUpForm.get("email").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(64, U, i.signUpForm.get("mobile").value, i.signUpForm.get("mobile").errors && i.signUpForm.get("mobile").touched)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("preferredCountries", t.\u0275\u0275pureFunction0(67, jt))("enablePlaceholder", !0)("enableSearch", !0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("mobile").errors && i.signUpForm.get("mobile").touched),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(68, U, i.signUpForm.get("organisation_id").value || i.organisationFocus, null == i.error ? null : i.error.message)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("fillAfterSelect", !0)("placeHolder", "Organisation/Institute"),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", null == i.error ? null : i.error.message),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(71, U, i.signUpForm.get("password").value, i.signUpForm.get("password").errors && i.signUpForm.get("password").touched)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275propertyInterpolate("type", i.type),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("password").errors && i.signUpForm.get("password").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(74, Vt, i.signUpForm.get("password").errors && i.signUpForm.get("password").touched)),
                t.\u0275\u0275advance(5),
                t.\u0275\u0275textInterpolate1(" ", (null == i.signUpForm.get("password").errors ? null : i.signUpForm.get("password").errors.msg) || "The password must have at least 8 characters with a combination of alphabets, special characters & numbers.", " "),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275textInterpolate1(" ", "password" == i.type ? "visibility" : "visibility_off", " "),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(76, U, i.signUpForm.get("password_confirmation").value, i.signUpForm.get("password_confirmation").errors && i.signUpForm.get("password_confirmation").touched)),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275propertyInterpolate("type", i.type),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("password_confirmation").errors && i.signUpForm.get("password_confirmation").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(79, U, i.signUpForm.get("agreed").value, i.signUpForm.get("agreed").errors && i.signUpForm.get("agreed").touched)),
                t.\u0275\u0275advance(9),
                t.\u0275\u0275property("ngIf", i.signUpForm.get("agreed").errors && i.signUpForm.get("agreed").touched),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("disabled", o.invalid || i.error.status)
            }
        }
        function Nt(a, p) {
            if (1 & a) {
                const o = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "login-dialogue", 89),
                t.\u0275\u0275listener("verified", function() {
                    t.\u0275\u0275restoreView(o);
                    const d = t.\u0275\u0275nextContext();
                    return d.onCreateOpportunity(d.opCreateType)
                })("canceled", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext().showVerify = !1
                }),
                t.\u0275\u0275elementEnd()
            }
            if (2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275property("hasSticky", !0)("canRemove", !1)("email", o.emaiToverify)("showMobile", !1)
            }
        }
        let Bt = (()=>{
            class a {
                constructor(o, i, d, u, k, F, R, W, J, Y, Z) {
                    this.fb = o,
                    this.store = i,
                    this.toastService = d,
                    this.router = u,
                    this.route = k,
                    this.authService = F,
                    this.menubarService = R,
                    this.localStorageService = W,
                    this.gtmService = J,
                    this.metaService = Y,
                    this.titleService = Z,
                    this.formSubmit = !1,
                    this.title = G.N.AppName,
                    this.permissionErr = {
                        status: !1,
                        msg: "You must first have to confirm your email to your social account in order to login through facebook or try another login method!!!."
                    },
                    this.currentProvider = "",
                    this.redirectUrl = "",
                    this.linkedinLink = "",
                    this.organisationFocus = !1,
                    this.error = {},
                    this.returnUrlSignUp = "",
                    this.type = "password",
                    this.userName = "",
                    this.emaiToverify = null,
                    this.mobileToverify = null,
                    this.showVerify = !1,
                    this.viewport = "desktop",
                    this.services = [{
                        link: "/virtual-event-platform",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/competitions.png",
                        title: "Competitions"
                    }, {
                        link: "/virtual-event-platform",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/d2c-employer-branding.png",
                        title: "Employer Branding"
                    }, {
                        link: "/online-assessment-platform",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/quizz.png",
                        title: "Online Quizzes"
                    }, {
                        link: "/business-simulation-games/business-strategy",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/d2c-business-simulations.png",
                        title: "Business Simulations"
                    }, {
                        link: "/organize-hackathon-virtual-coding-platform-and-assessment-tests",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/hackathon.png",
                        title: "Hackathons"
                    }, {
                        link: "/virtual-event-platform",
                        logo: "https://d8it4huxumps7.cloudfront.net/images/d2c-icons/d2c-employee-engagement.png",
                        title: "Employee Engagement"
                    }],
                    this.captchaResolve = !1,
                    this.slider = {
                        rewind: !0,
                        autoplay: !0,
                        autoplaySpeed: 1e3,
                        autoplayHoverPause: !0,
                        navText: ["", ""],
                        loop: !0,
                        nav: !1,
                        dots: !0,
                        responsive: {
                            0: {
                                items: 1,
                                stagePadding: 130
                            },
                            300: {
                                items: 1,
                                stagePadding: 70
                            },
                            350: {
                                items: 1,
                                stagePadding: 90
                            },
                            400: {
                                items: 1,
                                stagePadding: 110
                            },
                            500: {
                                items: 1,
                                stagePadding: 130
                            },
                            600: {
                                items: 1,
                                stagePadding: 150
                            },
                            700: {
                                items: 1,
                                stagePadding: 170
                            }
                        }
                    },
                    this.redirectIfUserLoggedIn()
                }
                onWindowResize() {
                    this.viewport = window.innerWidth <= 991 ? "mobile" : "desktop"
                }
                ngOnInit() {
                    this.onWindowResize(),
                    this.menubarService.menuBarStatus = !1,
                    this.redirectUrl = encodeURIComponent(G.N.appUrl + "/auth/login"),
                    console.log(this.redirectUrl),
                    this.initForm();
                    const o = "Sign up on Unstop.com"
                      , i = "Create your unstop.com account now.";
                    this.titleService.setTitle(o),
                    this.metaService.addTags([{
                        name: "description",
                        content: i
                    }, {
                        name: "og:title",
                        content: o
                    }, {
                        name: "og:description",
                        content: i
                    }, {
                        property: "og:image",
                        content: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/unstop-seo-image.jpg"
                    }, {
                        property: "og:image:height",
                        content: 1536
                    }, {
                        property: "og:image:width",
                        content: 768
                    }]),
                    this.metaService.updateTag({
                        rel: "canonical",
                        href: "https://unstop.com/auth/signup"
                    })
                }
                handleOrganisationFocus(o) {
                    this.organisationFocus = o,
                    console.log(o)
                }
                login() {
                    this.router.navigate(["auth/login"], this.route.snapshot.queryParams.returnUrl ? {
                        queryParamsHandling: "preserve"
                    } : {
                        queryParams: {
                            returnUrl: "/"
                        }
                    })
                }
                changeType() {
                    this.type = "password" == this.type ? "text" : "password"
                }
                onCreateOpportunity(o) {
                    const i = this.route.snapshot.queryParamMap.get("returnUrl");
                    i && this.router.navigateByUrl(i)
                }
                trimAlphaChar(o) {}
                resolve(o) {
                    if (o && 0 != o.length) {
                        const i = this.signUpForm.value
                          , d = Object.keys(i);
                        console.log(i),
                        this.captchaResolve = !0,
                        this.registerSubs = this.authService.register(i).subscribe(u=>{
                            console.log(u),
                            (null == u ? void 0 : u.unverified_user) && (this.followClick(this.authService.getReturnUrl()),
                            this.showVerify = !0,
                            this.emaiToverify = u.email,
                            this.mobileToverify = u.mobile,
                            this.emaiToverify = u.email,
                            this.mobileToverify = u.mobile),
                            u.activation && (this.showActivation = !0),
                            console.log("return url", this.authService.getReturnUrl()),
                            this.returnUrlSignUp = this.authService.getReturnUrl(),
                            this.redirectIfUserLoggedIn()
                        }
                        , u=>{
                            if (this.captchaRefe.reset(),
                            u && u.error) {
                                const k = u.error.errors;
                                k && d.forEach(F=>{
                                    k[F] && this.pushErrorFor(F, k[F][0])
                                }
                                )
                            }
                        }
                        )
                    } else
                        this.captchaResolve = !1
                }
                checkIfUserNameExists() {
                    this.userName && this.userName.length >= 8 && this.authService.checkUserName(this.userName).subscribe(o=>{
                        o.status || this.pushErrorFor("username", "User Name already taken")
                    }
                    )
                }
                onSubmit() {
                    this.localStorageService.getItem("dismissedAt") && (console.log("deleting current dismissed at"),
                    this.localStorageService.removeItem("dismissedAt"));
                    const o = this.signUpForm.value;
                    console.log(this.signUpForm.value);
                    const i = Object.keys(o);
                    this.formSubmit = !0,
                    this.signUpForm.valid ? G.N.production ? this.captchaRefe.execute() : this.resolve("true") : i.forEach(d=>{
                        const u = this.signUpForm.controls[d];
                        u.valid || (this.pushErrorFor(d, null),
                        u.markAsTouched())
                    }
                    )
                }
                pushErrorFor(o, i) {
                    this.signUpForm.controls[o].setErrors({
                        msg: i
                    })
                }
                initForm() {
                    this.signUpForm = this.fb.group({
                        first_name: ["", [h.kI.required, h.kI.pattern("^[a-zA-Z -']+")]],
                        last_name: ["", [h.kI.required, h.kI.pattern("^[a-zA-Z -']+"), h.kI.maxLength(190)]],
                        username: ["", [h.kI.required, h.kI.pattern("[a-zA-Z0-9_-]*$"), h.kI.minLength(8)]],
                        email: ["", [h.kI.required, h.kI.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        password: ["", [h.kI.required, h.kI.minLength(8), h.kI.pattern("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{7,40}")]],
                        password_confirmation: ["", h.kI.required],
                        mobile: ["", [h.kI.required]],
                        organisation_id: ["", h.kI.required],
                        gender: ["", h.kI.required],
                        agreed: [!1, h.kI.requiredTrue],
                        others_gender: ["", h.kI.pattern(/^[a-zA-Z0-9\-_. ]*$/)]
                    }, {
                        validator: Wt.MatchPassword
                    })
                }
                socialLogin(o) {
                    this.currentProvider = o
                }
                redirectIfUserLoggedIn() {
                    this.store.select(I.T).subscribe(o=>{
                        !0 === o && this.router.navigateByUrl(this.authService.getReturnUrl())
                    }
                    )
                }
                redirectToPage() {
                    this.menubarService.menubarRedirection()
                }
                followClick(o) {
                    "/" == o && (o = "home-url"),
                    this.gtmService.sendEventData("SignUp_success", "sign_up_success", "User:anonymous@notLoggedIn sign up successfully from " + o)
                }
                trimNumericChars(o) {
                    const i = o.which ? o.which : o.keyCode;
                    i >= 48 && i <= 57 && o.preventDefault()
                }
                organisationSelected(o) {
                    "" == o.name ? (this.error.status = !0,
                    this.error.message = "This field is mandatory") : (this.signUpForm.controls.organisation_id.setValue(o.id),
                    this.error.status = !1,
                    this.error.message = "")
                }
                onChangeOrganisation(o) {
                    "" === o.target.value && (this.error.status = !0,
                    this.error.message = "This field is mandatory")
                }
                validateMobileNumber(o) {
                    10 != o.target.value.length && this.signUpForm.controls.mobile.setErrors({
                        msg: "invalid length"
                    })
                }
                showToast(o, i=3e3, d="") {
                    this.toastService.toast(o, i, d)
                }
                ngOnDestroy() {
                    var o;
                    this.registerSubs && this.registerSubs.unsubscribe(),
                    null === (o = this.captchaRefe) || void 0 === o || o.reset()
                }
            }
            return a.\u0275fac = function(o) {
                return new (o || a)(t.\u0275\u0275directiveInject(h.qu),t.\u0275\u0275directiveInject(Q.yh),t.\u0275\u0275directiveInject(ot.k),t.\u0275\u0275directiveInject(e.F0),t.\u0275\u0275directiveInject(e.gz),t.\u0275\u0275directiveInject(L.e),t.\u0275\u0275directiveInject(A.O6),t.\u0275\u0275directiveInject(K.n),t.\u0275\u0275directiveInject(B.e),t.\u0275\u0275directiveInject(z.h_),t.\u0275\u0275directiveInject(z.Dx))
            }
            ,
            a.\u0275cmp = t.\u0275\u0275defineComponent({
                type: a,
                selectors: [["app-sign-up"]],
                viewQuery: function(o, i) {
                    if (1 & o && t.\u0275\u0275viewQuery(at, 5),
                    2 & o) {
                        let d;
                        t.\u0275\u0275queryRefresh(d = t.\u0275\u0275loadQuery()) && (i.captchaRefe = d.first)
                    }
                },
                hostBindings: function(o, i) {
                    1 & o && t.\u0275\u0275listener("resize", function(u) {
                        return i.onWindowResize(u)
                    }, !1, t.\u0275\u0275resolveWindow)
                },
                features: [t.\u0275\u0275ProvidersFeature([])],
                decls: 27,
                vars: 5,
                consts: [[1, "login-box", "d2c-container"], [1, "login-carousel"], ["routerLink", "/"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "alt", "Unstop", 1, "logo"], [1, "carousel"], [1, "team-carousel", 3, "options"], ["owlElement", ""], ["carouselSlide", ""], [1, "right_sect"], [1, "item"], ["id", "content", "data-hook", ""], [1, "form-title", "mb-15"], ["id", "existing-customer", "data-hook", "login", 1, "panel-body"], [4, "ngIf"], ["siteKey", "6LdXXPQUAAAAAGuiq-ZKTYDfuIvdw0gnFH80h6cg", 1, "g-recaptcha", 3, "size", "resolved"], ["captchaRefe", ""], [3, "hasSticky", "canRemove", "email", "showMobile", "verified", "canceled", 4, "ngIf"], [1, "car-item"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f5b24c1d_login_1.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f71aba10_login_2.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f7c11db9_login_3.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f8bc048d_login_4.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f9b3c016_login_5.png?d=686x858"], [1, "d2c_alert", "success"], [1, "child-items"], [3, "routerLink", "click"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/competition-icon.svg", "alt", "Competitions & Challenges"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/hiring-challenge-icon.svg", "alt", "Hiring Challenges"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/quiz-icon.svg", "alt", "Quizzes"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/hackathon-icon.svg", "alt", "Hackathons"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/scholarship-icon.svg", "alt", "Scholarships"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/internships-icon.svg", "alt", "Internships"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/job-icon.svg", "alt", "Jobs"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/workshop-icon.svg", "alt", "Workshops & Webinars"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/cultural-event-icon.svg", "alt", "Cultural Events"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/icon/festival-icon.svg", "alt", "College Festivals"], [1, "other_link", "center-align"], ["routerLink", "/auth/login", 3, "queryParams"], ["novalidate", "", 1, "login_form", "clearfix", 3, "formGroup", "ngSubmit"], ["signInForm", "ngForm"], [1, "row"], [1, "input_fields", "m6", "s12", "col", 3, "ngClass"], ["for", "first_name"], ["id", "first_name", "type", "text", "name", "first_name", "formControlName", "first_name", "autocomplete", "off", "placeholder", "FirstName", 1, "register-user-input-name", "register-user-input", 3, "keydown"], ["class", "error", 4, "ngIf"], ["for", "last_name"], ["id", "last_name", "type", "text", "name", "last_name", "formControlName", "last_name", "autocomplete", "off", "placeholder", "LastName", 1, "register-user-input-name", "register-user-input", 3, "keydown"], ["for", "your_username"], ["id", "your_username", "type", "text", "name", "username", "formControlName", "username", "autocomplete", "off", "placeholder", "User Name", "maxlength", "16", 1, "register-user-input-name", "register-user-input", 3, "ngModel", "ngModelChange"], ["class", "err-hvr", 4, "ngIf"], [1, "genders", "col", "m6", "s12", "input_fields", 3, "ngClass"], ["for", ""], [1, "clearfix", "d-flex", "align-items-center", "full-width", 3, "ngClass"], [1, "input_field", 2, "width", "100%", 3, "ngClass"], ["formControlName", "gender"], [3, "value"], [1, "input_fields", "col", "m6", "s12", 3, "ngClass"], ["for", "email_address"], ["id", "email_address", "type", "email", "name", "email", "formControlName", "email", "autocomplete", "off", "placeholder", "Email", 1, "register-user-input-password", "register-user-input"], [1, "input_fields", "m6", "s12", "col", "mobile-mrgn", 3, "ngClass"], ["formControlName", "mobile", "name", "mobile", 3, "preferredCountries", "enablePlaceholder", "enableSearch"], [1, "row", "mb-15"], [1, "org_list", "input_fields", "col", "m12", "s12", 3, "ngClass"], ["id", "organisation", 3, "fillAfterSelect", "placeHolder", "organisationSelected", "focusStatus", "newOrganisationAdded", "organisationChange", "keyup"], ["class", "error mrgn_btm", 4, "ngIf"], [1, "input_fields", "s12", "m6", "col", "input_fields", "password_sect", 3, "ngClass"], ["for", "choose_password"], ["id", "choose_password", "name", "password", "formControlName", "password", "autocomplete", "off", "placeholder", "Choose Password", 1, "register-user-input-password", "register-user-input", 3, "type"], [1, "err-hvr", "alert", 3, "ngClass"], [1, "err-icon"], [1, "material-icons"], [1, "err-msg"], [1, "view-pwd", "material-icons", 2, "right", "50px", 3, "click"], [1, "input_fields", "s12", "m6", "col", "input_fields", 3, "ngClass"], ["for", "confirm_password"], ["id", "confirm_password", "name", "password_confirmation", "formControlName", "password_confirmation", "autocomplete", "off", "placeholder", "Confirm Password", 1, "register-user-input-password", "register-user-input", 3, "type"], [1, "checkbox_type", 3, "ngClass"], ["id", "agreed", "type", "checkbox", "name", "agreed", "formControlName", "agreed", "value", "agreed", 1, "filled-in"], ["for", "agreed"], ["href", "/legal/privacy-policy", "target", "_blank"], ["href", "/legal/terms-of-use", "target", "_blank"], [1, "btn", "login-button", "full-width", 3, "disabled"], [3, "click"], [1, "error"], [1, "err-hvr"], [1, "input_fields", "full-width", "mb-0", 3, "ngClass"], ["for", "other_g_input"], ["type", "text", "formControlName", "others_gender", "id", "other_g_input", 1, "pl-15", 2, "height", "45px"], [1, "error", "mrgn_btm"], [3, "hasSticky", "canRemove", "email", "showMobile", "verified", "canceled"]],
                template: function(o, i) {
                    1 & o && (t.\u0275\u0275elementStart(0, "section"),
                    t.\u0275\u0275elementStart(1, "div", 0),
                    t.\u0275\u0275elementStart(2, "div", 1),
                    t.\u0275\u0275elementStart(3, "div", 2),
                    t.\u0275\u0275element(4, "img", 3),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(5, "div", 4),
                    t.\u0275\u0275elementStart(6, "owl-carousel-o", 5, 6),
                    t.\u0275\u0275template(8, lt, 2, 0, "ng-template", 7),
                    t.\u0275\u0275template(9, st, 2, 0, "ng-template", 7),
                    t.\u0275\u0275template(10, ct, 2, 0, "ng-template", 7),
                    t.\u0275\u0275template(11, gt, 2, 0, "ng-template", 7),
                    t.\u0275\u0275template(12, dt, 2, 0, "ng-template", 7),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275element(13, "app-unstop-stats"),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(14, "div", 8),
                    t.\u0275\u0275elementStart(15, "div", 9),
                    t.\u0275\u0275elementStart(16, "div", 10),
                    t.\u0275\u0275elementStart(17, "div", 11),
                    t.\u0275\u0275elementStart(18, "h2"),
                    t.\u0275\u0275text(19, "Welcome!"),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(20, "div", 12),
                    t.\u0275\u0275template(21, Ot, 48, 23, "div", 13),
                    t.\u0275\u0275template(22, Dt, 96, 82, "ng-container", 13),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementStart(23, "div"),
                    t.\u0275\u0275elementStart(24, "re-captcha", 14, 15),
                    t.\u0275\u0275listener("resolved", function(u) {
                        return i.resolve(u)
                    }),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275template(26, Nt, 1, 4, "login-dialogue", 16)),
                    2 & o && (t.\u0275\u0275advance(6),
                    t.\u0275\u0275property("options", i.slider),
                    t.\u0275\u0275advance(15),
                    t.\u0275\u0275property("ngIf", i.showActivation),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", !i.showActivation),
                    t.\u0275\u0275advance(2),
                    t.\u0275\u0275property("size", "invisible"),
                    t.\u0275\u0275advance(2),
                    t.\u0275\u0275property("ngIf", i.showVerify))
                },
                directives: [e.rH, j.H, b.Fy, b.Mp, D.X, r.NgIf, H.wT, e.yS, h._Y, h.JL, h.sg, r.NgClass, h.Fj, h.JJ, h.u, h.nD, $.KE, $.hX, it.gD, rt.ey, X.dK, q.T, h.Wl, tt.k],
                styles: ['section[_ngcontent-%COMP%]{background-color:#fff}@media screen and (max-width: 768px){section[_ngcontent-%COMP%]{justify-content:flex-start}}.d2c-container[_ngcontent-%COMP%]{max-width:1250px}.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:65px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-left:1px solid rgba(39,73,125,.5);padding-left:10px;margin-left:8px;color:#1c4980;font-size:12px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px}.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1c4980;border:1px solid #1C4980;width:120px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:.3s;background:rgba(39,73,125,.1);border-radius:8px;background:#1C4980;color:#fff}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#fff;border-color:#1c4980;color:#1c4980}@media (max-width: 800px){.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{height:53px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:90px;height:34px}}.hdng[_ngcontent-%COMP%]{width:460px;margin-top:20px}.hdng[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-weight:800;font-size:37px;line-height:46px;color:#1c4980}.hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:140%;color:#27497dcc;margin-bottom:0;margin-top:10px}.hdng[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}@media (max-width: 991px){.hdng[_ngcontent-%COMP%]{display:none}}.right_sect[_ngcontent-%COMP%]{width:550px;position:relative;z-index:9;margin-left:auto}@media (max-width: 1200px){.right_sect[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 991px){.right_sect[_ngcontent-%COMP%]{width:400px;width:100%;padding-left:0;max-width:650px;margin:auto}}@media (max-width: 600px){.right_sect[_ngcontent-%COMP%]{min-width:unset}}.item[_ngcontent-%COMP%]{background:#ffffff;border-radius:10px;margin-bottom:25px;padding:20px 25px;width:100%}.item[_ngcontent-%COMP%]:last-child{margin:auto;position:relative}.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{min-height:calc(100vh - 160px);display:flex;flex-direction:column;justify-content:center}@media (max-width: 1100px){.item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 991px){.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{display:block;height:100%}}@media (max-width: 800px){.item[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 600px){.item[_ngcontent-%COMP%]{min-width:unset;width:100%}.item.login[_ngcontent-%COMP%]{width:100%}}.header[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;z-index:9;min-height:calc(100vh - 65px)}@media (max-width: 991px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;padding:30px 15px}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding-top:0;min-height:calc(100vh - 150px)}}.other_link[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:#1c4980;margin-top:10px}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1c4980;font-weight:500;transition:.3s;cursor:pointer}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.other_link[_ngcontent-%COMP%]{font-weight:500;color:#3e6493}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}}.or[_ngcontent-%COMP%]{position:relative;margin:15px 0}.or[_ngcontent-%COMP%]:before, .or[_ngcontent-%COMP%]:after{content:"";height:1px;width:calc(50% - 20px);background:rgba(39,73,125,.2);position:absolute;top:0;margin:auto;bottom:0}.or[_ngcontent-%COMP%]:before{left:0}.or[_ngcontent-%COMP%]:after{right:0}.form-title[_ngcontent-%COMP%]{text-align:center}.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:20px;color:#1c4980;margin-bottom:8px}.form-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#1c4980}.google-btn[_ngcontent-%COMP%]{margin-top:15px}.google-btn[_ngcontent-%COMP%]   .ios-txt[_ngcontent-%COMP%]{width:calc(100% - 100px)}.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px}.login_form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#1c4980d9}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{text-transform:lowercase}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked):after{top:20px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#1c4980}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{position:absolute;top:40px;right:20px;color:#4c5d73;cursor:pointer;transition:.3s}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{top:35px}}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container{border:none!important}@media screen and (max-width: 600px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container   .mat-menu-trigger{top:10px}}.login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     .mat-form-field .mat-select-trigger, .login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     input{border-color:#e7183e!important;background:#fff!important}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-select-trigger{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{line-height:50px;padding-left:15px;font-size:14px}@media only screen and (min-width: 801px){.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{font-weight:400}}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label .mat-placeholder-required{display:none}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper .mat-empty{color:#a9a9a9}.login_form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{margin-top:20px;font-weight:500;height:47px;background:#0073E6;border-radius:8px}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:17px;color:#455368;transition:.3s;cursor:pointer}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]{position:absolute;right:10px;padding:5px 8px;font-size:12px;top:34px;cursor:pointer;border-radius:6px;transition:.4s;font-weight:500}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:hover{background:#c3daf8}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:disabled{color:#484848!important;background:#d8d8d8;cursor:not-allowed}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper{line-height:18px;padding:0;color:#484848!important;background-color:transparent!important}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span{min-width:unset}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper .minute{display:none}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span em{display:none}.error_mesg[_ngcontent-%COMP%]{background:#d63500;border:1px solid #d63500;box-shadow:0 3px 8px #ef535066;color:#fff;font-size:12px;display:flex;align-items:center;padding:0 15px;bottom:-40px;left:0;border-radius:5px;z-index:9;height:34px;line-height:13px}.error_mesg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:6px;max-width:15px}.child-items[_ngcontent-%COMP%]{margin-top:20px;padding:20px;background:#fff;box-shadow:0 0 12px #0080ff40;border-radius:8px;display:flex;flex-wrap:wrap}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px 10px;border-radius:4px;transition:.4s;display:flex;align-items:center;width:50%}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;display:block}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#1c4980;font-weight:500;margin-bottom:0;transition:.3s;width:calc(100% - 40px);padding-left:15px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#eef4ff}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#0073e6}@media (max-width: 800px){.child-items[_ngcontent-%COMP%]{padding:10px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;padding:8px}}.apple_btn[_ngcontent-%COMP%]{background:#fff;color:#1c4980;display:flex;align-items:center;font-weight:500;width:100%;box-shadow:none;border:1px solid #d8d8d8;border-radius:4px;font-size:14px;padding:0 10px}.apple_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:40px}.glogin-ios[_ngcontent-%COMP%]{display:flex;background:#fff;color:#1c4980;align-items:center;width:100%;font-weight:500}.glogin-ios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.glogin-ios[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:40px}.login-modal[_ngcontent-%COMP%]{padding:10px}.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px;min-height:auto}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:100%}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:20px;width:100%}@media (max-width: 600px){.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:20px}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{box-shadow:none;padding:0}}.login-box[_ngcontent-%COMP%]{min-height:calc(100vh - 100px)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{text-align:center;position:absolute;left:60px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:flex-start}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:30px 0}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]{padding:20px;width:100%;margin-bottom:30px}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-item.active .car-item{transform:scale(1)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-dots{bottom:-40px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]{width:100%;transform:scale(.7);transition:.5s ease-in-out}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;width:auto;height:auto;max-height:none;margin:auto}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:36px;line-height:44px;color:#1c4980}@media screen and (max-width: 1200px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{width:calc(100% - 550px);left:30px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{position:static;width:100%}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{max-width:450px;width:100%}}@media screen and (max-width: 600px){.login-box[_ngcontent-%COMP%]{flex-direction:column;height:100%;padding:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:28px}.login-box[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:0}}.h-auto[_ngcontent-%COMP%]{height:100%!important;max-height:unset;min-height:unset!important}', '.password_sect[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:70px!important}.input_fields[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{right:15px;bottom:14px;background:#fff;padding:0 5px}.input_fields[_ngcontent-%COMP%]   .error.mrgn_btm[_ngcontent-%COMP%]{bottom:-6px}.input_fields.danger[_ngcontent-%COMP%]   .err-icon[_ngcontent-%COMP%]{color:#e7183e}@media (max-width: 800px){.input_fields.genders[_ngcontent-%COMP%]{margin-bottom:20px}.input_fields.genders[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:-3px}.input_fields.mobile-mrgn[_ngcontent-%COMP%]{margin-bottom:20px}.input_fields.mobile-mrgn[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:-6px}}.checkbox_type[_ngcontent-%COMP%]{position:relative}.checkbox_type[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:-10px;left:auto;right:15px;font-weight:500}@media (max-width: 800px){.checkbox_type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500}}.err-hvr[_ngcontent-%COMP%]{top:42px;right:20px;bottom:auto;position:absolute}.err-hvr[_ngcontent-%COMP%]   .err-icon[_ngcontent-%COMP%]{cursor:pointer}.err-hvr[_ngcontent-%COMP%]   .err-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.err-hvr[_ngcontent-%COMP%]   .err-msg[_ngcontent-%COMP%]{display:none;font-size:13px!important;font-weight:500;color:#fff!important;z-index:9;line-height:16px;padding:12px 15px;top:30px;position:absolute;right:-10px;width:270px;white-space:normal;box-shadow:0 6.13534px 35.7895px #27497d1a;border-radius:6px;background:#E7183E}.err-hvr[_ngcontent-%COMP%]   .err-msg[_ngcontent-%COMP%]:before{content:"";position:absolute;right:13px;top:-5px;margin:auto;background:#E7183E;width:10px;height:10px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg)}@media screen and (max-width: 600px){.err-hvr[_ngcontent-%COMP%]   .err-msg[_ngcontent-%COMP%]{white-space:normal;width:250px}}.err-hvr[_ngcontent-%COMP%]:hover   .err-msg[_ngcontent-%COMP%]{display:inline-block}.err-hvr.alert[_ngcontent-%COMP%]   .err-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#856404!important}.err-hvr.alert[_ngcontent-%COMP%]   .err-msg[_ngcontent-%COMP%]{color:#856404!important;background-color:#fff3cd;border:1px solid #ffeeba;box-shadow:none}.err-hvr.alert[_ngcontent-%COMP%]   .err-msg[_ngcontent-%COMP%]:before{background-color:#fff3cd;border-color:#fff3cd;box-shadow:none}@media (max-width: 800px){.err-hvr[_ngcontent-%COMP%]{top:38px}}']
            }),
            a
        }
        )();
        class Wt {
            static MatchPassword(p) {
                if (p.get("password").value == p.get("password_confirmation").value)
                    return null;
                p.get("password_confirmation").setErrors({
                    MatchPassword: !0
                })
            }
        }
        const Gt = function(a, p) {
            return {
                danger: a,
                success: p
            }
        };
        function Ht(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div", 9),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction2(2, Gt, !o.response.status, o.response.status)),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1("", o.response.message, " ")
            }
        }
        function Kt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "div"),
            t.\u0275\u0275elementStart(1, "div", 10),
            t.\u0275\u0275element(2, "div", 11),
            t.\u0275\u0275element(3, "div", 11),
            t.\u0275\u0275element(4, "div", 11),
            t.\u0275\u0275element(5, "div", 11),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        function Jt(a, p) {
            if (1 & a) {
                const o = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "button", 14),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(o),
                    t.\u0275\u0275nextContext(2).login()
                }),
                t.\u0275\u0275elementStart(1, "i", 15),
                t.\u0275\u0275text(2, "person"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275text(3, " Login "),
                t.\u0275\u0275elementEnd()
            }
        }
        function Yt(a, p) {
            1 & a && (t.\u0275\u0275elementStart(0, "button", 16),
            t.\u0275\u0275elementStart(1, "i", 15),
            t.\u0275\u0275text(2, "person"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275text(3, " My Profile "),
            t.\u0275\u0275elementEnd())
        }
        function Zt(a, p) {
            if (1 & a && (t.\u0275\u0275elementStart(0, "div"),
            t.\u0275\u0275template(1, Jt, 4, 0, "button", 12),
            t.\u0275\u0275template(2, Yt, 4, 0, "button", 13),
            t.\u0275\u0275elementEnd()),
            2 & a) {
                const o = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !o.userLoggedIn),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", o.userLoggedIn)
            }
        }
        const $t = [{
            path: "",
            redirectTo: "signup",
            pathMatch: "full"
        }, {
            path: "signup",
            component: Bt,
            data: {
                hideHeader: !0,
                hideFooter: !0
            }
        }, {
            path: "login",
            component: O.G,
            data: {
                hideHeader: !0,
                hideFooter: !0
            }
        }, {
            path: "callback",
            component: O.G
        }, {
            path: "recover-password",
            component: y,
            data: {
                hideHeader: !0,
                hideFooter: !0
            }
        }, {
            path: "verify/:token",
            component: (()=>{
                class a {
                    constructor(o, i, d, u) {
                        this.router = o,
                        this.authService = i,
                        this.route = d,
                        this.store = u
                    }
                    getCurrentUser() {
                        this.store.select(I.T).subscribe(o=>{
                            this.userLoggedIn = o || null
                        }
                        )
                    }
                    ngOnInit() {
                        this.getCurrentUser(),
                        this.route.queryParams.subscribe(o=>{
                            this.params = o;
                            let i = o.redirectTo;
                            i && (this.redirectTo = "/competitions/" + i + "/register")
                        }
                        ),
                        this.route.params.subscribe(o=>{
                            var i;
                            console.dir(o),
                            this.token = o.token,
                            this.params && (null === (i = this.params) || void 0 === i ? void 0 : i.user_account) ? this.userRoleForAccountVerification() : this.verifyUser()
                        }
                        )
                    }
                    verifyUser() {
                        this.authService.verifyUser(this.token).subscribe(o=>{
                            if (this.response = o.data,
                            console.log(this.response),
                            this.redirectTo)
                                return this.router.navigateByUrl(this.redirectTo)
                        }
                        )
                    }
                    userRoleForAccountVerification() {
                        var o;
                        const i = {
                            token: this.token,
                            user_account: null === (o = this.params) || void 0 === o ? void 0 : o.user_account
                        };
                        this.authService.verifyRoleUserForAccount(i).subscribe(d=>{
                            this.response = d
                        }
                        , d=>{
                            this.response = d.error
                        }
                        )
                    }
                    login() {
                        return this.router.navigateByUrl("auth/login")
                    }
                }
                return a.\u0275fac = function(o) {
                    return new (o || a)(t.\u0275\u0275directiveInject(e.F0),t.\u0275\u0275directiveInject(L.e),t.\u0275\u0275directiveInject(e.gz),t.\u0275\u0275directiveInject(Q.yh))
                }
                ,
                a.\u0275cmp = t.\u0275\u0275defineComponent({
                    type: a,
                    selectors: [["app-user-verification"]],
                    decls: 11,
                    vars: 3,
                    consts: [["data-hook", "", 1, "login-container"], ["id", "content", "data-hook", ""], [1, "align-center", "container"], [1, "panel", "panel-default", "z-depth-1"], [1, "panel-heading"], [1, "panel-title"], ["id", "existing-customer", "data-hook", "login", 1, "panel-body"], ["class", "d2c_alert", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "d2c_alert", 3, "ngClass"], [1, "loading"], [1, "loading-bar"], ["class", "d2c_btn waves-effect", 3, "click", 4, "ngIf"], ["class", "d2c_btn waves-effect", "routerLink", "/user/profile", 4, "ngIf"], [1, "d2c_btn", "waves-effect", 3, "click"], [1, "material-icons", "mr-5"], ["routerLink", "/user/profile", 1, "d2c_btn", "waves-effect"]],
                    template: function(o, i) {
                        1 & o && (t.\u0275\u0275elementStart(0, "div", 0),
                        t.\u0275\u0275elementStart(1, "div", 1),
                        t.\u0275\u0275elementStart(2, "div", 2),
                        t.\u0275\u0275elementStart(3, "div", 3),
                        t.\u0275\u0275elementStart(4, "div", 4),
                        t.\u0275\u0275elementStart(5, "h1", 5),
                        t.\u0275\u0275text(6, "User Verification"),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementStart(7, "div", 6),
                        t.\u0275\u0275template(8, Ht, 2, 5, "div", 7),
                        t.\u0275\u0275template(9, Kt, 6, 0, "div", 8),
                        t.\u0275\u0275template(10, Zt, 3, 2, "div", 8),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementEnd(),
                        t.\u0275\u0275elementEnd()),
                        2 & o && (t.\u0275\u0275advance(8),
                        t.\u0275\u0275property("ngIf", i.response && i.response.message),
                        t.\u0275\u0275advance(1),
                        t.\u0275\u0275property("ngIf", !i.response),
                        t.\u0275\u0275advance(1),
                        t.\u0275\u0275property("ngIf", i.response && i.response.status))
                    },
                    directives: [r.NgIf, r.NgClass, e.rH],
                    styles: [".panel[_ngcontent-%COMP%]{margin-bottom:0;border:none;border-radius:13px;padding:30px;min-width:60%;margin-top:5%;box-shadow:0 6px 65px #27497d17;background:#fff;text-align:left}.panel[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]{padding:0;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px;text-align:center;background-color:transparent}.panel[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:20px;font-size:18px;font-weight:600;text-align:left}@media (max-width: 600px){.panel[_ngcontent-%COMP%]{padding:20px}}.d2c_btn[_ngcontent-%COMP%]{margin-top:35px}.success_msg[_ngcontent-%COMP%]{margin:15px 0 30px;padding:11px 15px!important}.container[_ngcontent-%COMP%]{width:80%;justify-content:center}@media (max-width: 600px){.container[_ngcontent-%COMP%]{width:95%}}.login-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:10px 30px;background:rgba(16,119,214,.14);border-radius:3px;color:#0073e6;font-size:16px;border:1px solid rgba(16,119,214,.15)}.login-input-container[_ngcontent-%COMP%]{margin:20px;border:1px solid #bfc0c6;border-radius:5px;padding:0}fieldset[_ngcontent-%COMP%]{display:block;-webkit-margin-start:2px;-webkit-margin-end:2px;-webkit-padding-before:.35em;-webkit-padding-start:.75em;-webkit-padding-end:.75em;-webkit-padding-after:.625em;min-width:-webkit-min-content;border-width:2px;border-style:groove;border-color:threedface;border-image:initial}.login-input-item[_ngcontent-%COMP%]{position:relative;overflow:hidden}.login-input-item[_ngcontent-%COMP%]:first-child{border-radius:5px 5px 0 0;border-bottom:1px solid #bfc0c6}.login-input-item.confirm-pwd[_ngcontent-%COMP%], .login-input-item[_ngcontent-%COMP%]:last-child{border-radius:0 0 5px 5px}.login-input-item.border[_ngcontent-%COMP%]{border-bottom:1px solid #bfc0c6}.login-container[_ngcontent-%COMP%]{box-sizing:border-box;text-align:center;position:relative;padding-bottom:0;border-top:1px solid #f3f3f3;padding-top:20px;margin-bottom:0;min-height:calc(100vh - 53px);background:#fafafa}.login-user-input-email[_ngcontent-%COMP%]{border-top-left-radius:5px;border-top-right-radius:5px}.login-user-input-password[_ngcontent-%COMP%]{border-top:1px solid #d5d6d9!important;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.login-user-input[_ngcontent-%COMP%]{display:block;color:#282c3f;font-size:15px;width:100%;border:0;padding:15px}input[_ngcontent-%COMP%]{-webkit-appearance:textfield;background-color:#fff;-webkit-rtl-ordering:logical;user-select:text;cursor:auto;padding:1px;border-width:2px;border-style:inset;border-color:initial;border-image:initial;text-rendering:auto;color:initial;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;display:inline-block;text-align:start;margin:0;font:11px system-ui}fieldset[_ngcontent-%COMP%]{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.login-login-button-container[_ngcontent-%COMP%]{padding:10px 20px;margin:0;border:0}.login-login-button[_ngcontent-%COMP%]{font-size:13px;font-weight:500;letter-spacing:2px;padding:15px;display:block;width:100%;border:0;text-transform:uppercase;border-radius:3px;line-height:5px}.login-link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login-link-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;display:inline-block;vertical-align:middle}.login-link[_ngcontent-%COMP%]{text-decoration:none}.login-right-links[_ngcontent-%COMP%]{float:none;margin-bottom:10px}.login-link-container[_ngcontent-%COMP%]{padding:20px}.login-create-account-link[_ngcontent-%COMP%]{margin-left:5px}a[_ngcontent-%COMP%]{background-color:transparent}.login-third-party-login[_ngcontent-%COMP%]{margin-top:30px}.login-button-info-text[_ngcontent-%COMP%]{margin-top:0;margin-bottom:20px}.login-info-text[_ngcontent-%COMP%]{color:#94969f;font-size:12px}.login-button-container[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:40px}@media (min-width: 360px){.login-facebook[_ngcontent-%COMP%]{margin-right:15px;margin-bottom:0}}@media (min-width: 360px){.login-button[_ngcontent-%COMP%]{width:49%;display:inline-block}}.login-facebook[_ngcontent-%COMP%]{margin-bottom:0}.login-button[_ngcontent-%COMP%]{max-width:162px;padding-left:50px;position:relative;font-size:13px;font-weight:500;height:50px;border:1px solid #bfc0c6;background-color:#fff;border-radius:5px;text-align:left}[type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=button][_ngcontent-%COMP%]{-webkit-appearance:button}[type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{overflow:visible}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font:inherit}.header-sprite[_ngcontent-%COMP%]{background:url(https://d8it4huxumps7.cloudfront.net/images/login-social-icon.png) no-repeat 0 0;background-size:159px 48px;display:inline-block}.login-fb-logo[_ngcontent-%COMP%], .login-linkedin-logo[_ngcontent-%COMP%], .login-gplus-logo[_ngcontent-%COMP%]{height:29px;position:absolute;left:15px}.login-fb-logo[_ngcontent-%COMP%]{background-position:-93px 0;width:28px;top:10px}.login-google[_ngcontent-%COMP%]{margin-right:15px}.login-gplus-logo[_ngcontent-%COMP%]{background-position:-122px 5px;width:23px;top:9px}.login-linkedin-logo[_ngcontent-%COMP%]{background-position:-122px -23px;width:27px;top:13px}.login-error-icon[_ngcontent-%COMP%]{padding:0 9px;display:inline-block;position:absolute;top:27px;right:10px;font-weight:500;border-radius:21px;color:#f44336;font-size:16px}.login-error-message[_ngcontent-%COMP%]{font-size:12px;padding-left:15px;text-align:left;margin-top:-17px;position:absolute;max-height:500px;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(0,1,.5,1);color:#f44336;padding-bottom:0}input[type=email][_ngcontent-%COMP%]:focus.valid, input[type=email][_ngcontent-%COMP%]:focus:not([readonly]), input[type=password][_ngcontent-%COMP%]:focus:not([readonly]){border-bottom:none;box-shadow:none}p[_ngcontent-%COMP%]{display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0px;-webkit-margin-end:0px}input[_ngcontent-%COMP%]:not([type]) + label[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after, textarea.materialize-textarea[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{top:54px;left:15px}.btn[disabled][_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled{color:#fff!important;background:rgba(66,165,245,.34)!important}.links-footer[_ngcontent-%COMP%]{font-size:13px;margin-bottom:3px}"]
                }),
                a
            }
            )(),
            data: {
                hideFooter: !0
            }
        }, {
            path: "reset-password/:token",
            component: T.L,
            data: {
                hideHeader: !0,
                hideFooter: !0
            }
        }, {
            path: "verify",
            component: tt.k,
            data: {
                hideHeader: !0,
                hideFooter: !0
            }
        }];
        let Xt = (()=>{
            class a {
            }
            return a.\u0275fac = function(o) {
                return new (o || a)
            }
            ,
            a.\u0275mod = t.\u0275\u0275defineNgModule({
                type: a
            }),
            a.\u0275inj = t.\u0275\u0275defineInjector({
                imports: [[e.Bz.forChild($t)], e.Bz]
            }),
            a
        }
        )();
        var te = g(7889)
          , qt = g(74859)
          , l = g(53439);
        let _ = (()=>{
            class a {
            }
            return a.\u0275fac = function(o) {
                return new (o || a)
            }
            ,
            a.\u0275mod = t.\u0275\u0275defineNgModule({
                type: a
            }),
            a.\u0275inj = t.\u0275\u0275defineInjector({
                imports: [[r.CommonModule]]
            }),
            a
        }
        )();
        var n = g(78293)
          , s = g(23249)
          , c = g(19071);
        let f = (()=>{
            class a {
            }
            return a.\u0275fac = function(o) {
                return new (o || a)
            }
            ,
            a.\u0275mod = t.\u0275\u0275defineNgModule({
                type: a
            }),
            a.\u0275inj = t.\u0275\u0275defineInjector({
                providers: [L.e],
                imports: [[r.CommonModule, Xt, qt.m, te.U, H.a, X.lQ, l.H, _, n.Y, b.bB, s.g, c.Y]]
            }),
            a
        }
        )()
    }
    ,
    91904: (nt,V,g)=>{
        g.d(V, {
            G: ()=>qt
        });
        var r = g(64762)
          , e = g(83668)
          , O = g(49133)
          , L = g(96898)
          , h = g(39357)
          , t = g(98320)
          , z = g(95599)
          , j = g(67686)
          , b = g(62361)
          , D = g(49330)
          , m = g(71084)
          , v = g(23405)
          , M = g(64073)
          , S = g(43097)
          , E = g(34099)
          , N = g(60540)
          , C = g(38053)
          , w = g(52047)
          , P = g(44522);
        let x = (()=>{
            class l {
                constructor(n) {
                    this.httpService = n,
                    this.userDeleted = new E.X(null)
                }
                restoreProfile(n) {
                    return this.httpService.post("/api/user/restore/profile", {
                        email: n
                    }).pipe((0,
                    C.U)(c=>c)).pipe((0,
                    w.K)(this.handleError))
                }
                handleError(n) {
                    try {
                        return (0,
                        N._)(n)
                    } catch (s) {
                        return (0,
                        N._)(n)
                    }
                }
            }
            return l.\u0275fac = function(n) {
                return new (n || l)(e.\u0275\u0275inject(P.eN))
            }
            ,
            l.\u0275prov = e.\u0275\u0275defineInjectable({
                token: l,
                factory: l.\u0275fac
            }),
            l
        }
        )();
        var y = g(44838)
          , T = g(77976)
          , A = g(53010)
          , I = g(57725)
          , B = g(40934)
          , K = g(21978)
          , G = g(35427)
          , H = g(86019)
          , Q = g(93067);
        function ot(l, _) {
            1 & l && e.\u0275\u0275element(0, "div", 2)
        }
        function $(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "input", 8),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(2).restoreProfile()
                }),
                e.\u0275\u0275elementEnd()
            }
        }
        function it(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 3),
                e.\u0275\u0275elementStart(1, "h2"),
                e.\u0275\u0275text(2, " Welcome back! "),
                e.\u0275\u0275elementStart(3, "span"),
                e.\u0275\u0275text(4, " You have deactivated your account! To access your account, you have to restore it by clicking on the "),
                e.\u0275\u0275elementStart(5, "strong"),
                e.\u0275\u0275text(6, '"Restore"'),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275text(7, " button. "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(8, "div", 4),
                e.\u0275\u0275elementStart(9, "strong"),
                e.\u0275\u0275text(10, "Note:"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275text(11, " Restore your account before the end of 30-day window post which it will be permanently deleted! "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(12, "div", 5),
                e.\u0275\u0275elementStart(13, "a", 6),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext().userDeletedStatus = !1
                }),
                e.\u0275\u0275text(14, " Cancel "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(15, $, 1, 0, "input", 7),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(15),
                e.\u0275\u0275property("ngIf", n.userDeletedStatus)
            }
        }
        let rt = (()=>{
            class l {
                constructor(n, s, c, f, a, p) {
                    this.userDeletedModalService = n,
                    this.toastService = s,
                    this.localStorageService = c,
                    this.authService = f,
                    this.store = a,
                    this.router = p,
                    this.userDeletedStatus = !1
                }
                ngOnInit() {
                    this.userDeletedModalService.userDeleted.subscribe(n=>{
                        (null == n ? void 0 : n.status) && (this.userDeletedStatus = n.status,
                        this.email = n.data)
                    }
                    )
                }
                restoreProfile() {
                    this.userDeletedModalService.restoreProfile(this.email).subscribe(n=>{
                        var s, c, f;
                        if (null === (s = null == n ? void 0 : n.data) || void 0 === s ? void 0 : s.status) {
                            let a = this.localStorageService.decEncData(null === (f = null === (c = null == n ? void 0 : n.data) || void 0 === c ? void 0 : c.data) || void 0 === f ? void 0 : f.encData);
                            a.access_token && (this.authService.setLoginInLocalStorage(a),
                            this.authService.updateReferral("login"),
                            this.authService.updateUserVisit()),
                            this.userDeletedStatus = !1,
                            this.toastService.toast("You have successfully restore the profile", 2e3, "green"),
                            this.redirectIfUserLoggedIn(),
                            this.userDeletedModalService.userDeleted.next(null)
                        }
                    }
                    )
                }
                redirectIfUserLoggedIn() {
                    this.storeSub = this.store.select(h.T).subscribe(n=>{
                        !0 === n && this.router.navigateByUrl("/home")
                    }
                    )
                }
            }
            return l.\u0275fac = function(n) {
                return new (n || l)(e.\u0275\u0275directiveInject(x),e.\u0275\u0275directiveInject(K.k),e.\u0275\u0275directiveInject(z.n),e.\u0275\u0275directiveInject(j.e),e.\u0275\u0275directiveInject(A.yh),e.\u0275\u0275directiveInject(I.F0))
            }
            ,
            l.\u0275cmp = e.\u0275\u0275defineComponent({
                type: l,
                selectors: [["app-user-deleted-modal"]],
                decls: 2,
                vars: 2,
                consts: [["class", "modal-bg", 4, "ngIf"], ["id", "sessionModal", "class", "modal u_deletedmodal", 4, "ngIf"], [1, "modal-bg"], ["id", "sessionModal", 1, "modal", "u_deletedmodal"], [1, "d2c_alert"], [1, "j-between"], [1, "d2c_bdr_btn", 3, "click"], ["type", "submit", "class", "d2c_btn waves-effect", "value", "Restore", 3, "click", 4, "ngIf"], ["type", "submit", "value", "Restore", 1, "d2c_btn", "waves-effect", 3, "click"]],
                template: function(n, s) {
                    1 & n && (e.\u0275\u0275template(0, ot, 1, 0, "div", 0),
                    e.\u0275\u0275template(1, it, 16, 1, "div", 1)),
                    2 & n && (e.\u0275\u0275property("ngIf", s.userDeletedStatus),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.userDeletedStatus))
                },
                directives: [H.NgIf],
                styles: [".u_deletedmodal[_ngcontent-%COMP%]{border-radius:12px;padding:30px;width:450px;top:0;bottom:0;margin:auto;height:auto;max-height:max-content;max-height:330px}.u_deletedmodal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:20px;font-weight:700}.u_deletedmodal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:16px;margin-top:8px;color:#1c4980d9;font-weight:600;line-height:22px}.u_deletedmodal[_ngcontent-%COMP%]   .j-between[_ngcontent-%COMP%]{margin-top:30px;position:absolute;width:100%;bottom:0;left:0;padding:15px;background:#fff;z-index:9}.u_deletedmodal[_ngcontent-%COMP%]   .j-between[_ngcontent-%COMP%]   .d2c_btn[_ngcontent-%COMP%]{box-shadow:none;border:0}@media (max-width: 800px){.u_deletedmodal[_ngcontent-%COMP%]{padding:20px;width:calc(100% - 30px)}.u_deletedmodal[_ngcontent-%COMP%]   .j-between[_ngcontent-%COMP%]{margin-top:20px}}"]
            }),
            l
        }
        )();
        var X = g(7336)
          , q = g(79813)
          , tt = g(69334)
          , at = g(10635);
        const lt = ["captchaRef"];
        function st(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "img", 17),
            e.\u0275\u0275elementEnd())
        }
        function ct(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "img", 18),
            e.\u0275\u0275elementEnd())
        }
        function gt(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "img", 19),
            e.\u0275\u0275elementEnd())
        }
        function dt(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "img", 20),
            e.\u0275\u0275elementEnd())
        }
        function pt(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 16),
            e.\u0275\u0275element(1, "img", 21),
            e.\u0275\u0275elementEnd())
        }
        function mt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 9),
            e.\u0275\u0275elementStart(1, "div", 10),
            e.\u0275\u0275element(2, "img", 11),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(3, "div", 12),
            e.\u0275\u0275elementStart(4, "owl-carousel-o", 13, 14),
            e.\u0275\u0275template(6, st, 2, 0, "ng-template", 15),
            e.\u0275\u0275template(7, ct, 2, 0, "ng-template", 15),
            e.\u0275\u0275template(8, gt, 2, 0, "ng-template", 15),
            e.\u0275\u0275template(9, dt, 2, 0, "ng-template", 15),
            e.\u0275\u0275template(10, pt, 2, 0, "ng-template", 15),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275element(11, "app-unstop-stats"),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("options", n.slider)
            }
        }
        function _t(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "h2", 30),
            e.\u0275\u0275text(1, "Welcome Back"),
            e.\u0275\u0275elementEnd())
        }
        function ut(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 35),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).handleSocialLogin("google")
                }),
                e.\u0275\u0275elementEnd()
            }
        }
        function ht(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 36),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).handleSocialLogin("google")
                }),
                e.\u0275\u0275element(1, "img", 37),
                e.\u0275\u0275elementStart(2, "span"),
                e.\u0275\u0275text(3, "Login with Google"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        function ft(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 31),
            e.\u0275\u0275elementStart(1, "div", 32),
            e.\u0275\u0275template(2, ut, 1, 0, "div", 33),
            e.\u0275\u0275template(3, ht, 4, 0, "button", 34),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !(null != n.socialAuthService && n.socialAuthService.isApp || null != n.socialAuthService && n.socialAuthService.isAndroid)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", (null == n.socialAuthService ? null : n.socialAuthService.isApp) || (null == n.socialAuthService ? null : n.socialAuthService.isAndroid))
            }
        }
        function xt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 43),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).handleSocialLogin("google")
                }),
                e.\u0275\u0275elementEnd()
            }
        }
        function Ct(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 44),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).handleSocialLogin("google")
                }),
                e.\u0275\u0275element(1, "img", 37),
                e.\u0275\u0275elementStart(2, "span"),
                e.\u0275\u0275text(3, "Login with Google"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        function Pt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 45),
                e.\u0275\u0275elementStart(1, "button", 46),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).handleSocialLogin("apple")
                }),
                e.\u0275\u0275element(2, "img", 47),
                e.\u0275\u0275elementStart(3, "span"),
                e.\u0275\u0275text(4, "Sign in with Apple"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
        }
        const vt = function(l, _) {
            return {
                "full-width": l,
                "full-width": _
            }
        };
        function Mt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 38),
            e.\u0275\u0275elementStart(1, "div", 39),
            e.\u0275\u0275template(2, xt, 1, 0, "div", 40),
            e.\u0275\u0275template(3, Ct, 4, 0, "button", 41),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275template(4, Pt, 5, 0, "div", 42),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction2(4, vt, null == n.socialAuthService ? null : n.socialAuthService.isApp, null == n.socialAuthService ? null : n.socialAuthService.isAndroid)),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !(null != n.socialAuthService && n.socialAuthService.isApp || null != n.socialAuthService && n.socialAuthService.isAndroid)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", (null == n.socialAuthService ? null : n.socialAuthService.isApp) || (null == n.socialAuthService ? null : n.socialAuthService.isAndroid)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", (null == n.socialAuthService ? null : n.socialAuthService.isApp) && !(null != n.socialAuthService && n.socialAuthService.isAndroid) && n.window.isIOS)
            }
        }
        function Ot(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 48),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(2).showLoginForm = !0
                }),
                e.\u0275\u0275text(1, "Login with Email"),
                e.\u0275\u0275elementEnd()
            }
        }
        const bt = function() {
            return ["/auth/signup"]
        }
          , wt = function(l) {
            return {
                returnUrl: l
            }
        };
        function yt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 49),
            e.\u0275\u0275text(1, " Don't have an account? "),
            e.\u0275\u0275elementStart(2, "span", 50),
            e.\u0275\u0275text(3, " Sign up "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("routerLink", e.\u0275\u0275pureFunction0(2, bt))("queryParams", e.\u0275\u0275pureFunction1(3, wt, n.returnUrl))
            }
        }
        function St(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 57),
            e.\u0275\u0275element(1, "img", 58),
            e.\u0275\u0275text(2),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate1(" ", n.error_msg, " ")
            }
        }
        function kt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "p", 59),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1("*", n.permissionErr.msg, "")
            }
        }
        function Et(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 71),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", null != n.signInForm.get("email").errors && n.signInForm.get("email").errors.msg ? null == n.signInForm.get("email").errors ? null : n.signInForm.get("email").errors.msg : "Please enter Valid email", " ")
            }
        }
        function U(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 71),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", null != n.signInForm.get("password").errors && n.signInForm.get("password").errors.msg ? null == n.signInForm.get("password").errors ? null : n.signInForm.get("password").errors.msg : "Please enter Password", " ")
            }
        }
        function It(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 72),
                e.\u0275\u0275elementStart(1, "a", 73),
                e.\u0275\u0275listener("click", function() {
                    e.\u0275\u0275restoreView(n);
                    const c = e.\u0275\u0275nextContext(4);
                    return c.loginViaOtp(c.signInForm.get("email").value)
                }),
                e.\u0275\u0275text(2, " Login via OTP "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "a", 74),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(4).forgotPassword()
                }),
                e.\u0275\u0275text(4, " Forgot password? "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("disabled", n.signInForm.get("email").errors && (n.signInForm.get("email").dirty || n.signInForm.get("email").touched) || n.disableLoginViaOtp)
            }
        }
        function Ut(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 75),
                e.\u0275\u0275elementStart(1, "re-captcha", 76, 77),
                e.\u0275\u0275listener("resolved", function(c) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(4).resolved(c)
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275propertyInterpolate("siteKey", n.sitekey),
                e.\u0275\u0275property("size", "invisible")
            }
        }
        const Ft = function(l) {
            return {
                pop_btn: l
            }
        }
          , Tt = function(l) {
            return {
                "ml-0 s12": l
            }
        };
        function Lt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 38),
            e.\u0275\u0275elementStart(1, "button", 78),
            e.\u0275\u0275text(2, " Login "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(3, Ft, n.loggedinModal)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("disabled", n.disableLogin)("ngClass", e.\u0275\u0275pureFunction1(5, Tt, "mobile" == n.viewport))
            }
        }
        const et = function(l, _) {
            return {
                active: l,
                danger: _
            }
        };
        function zt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "form", 60),
                e.\u0275\u0275listener("ngSubmit", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).onSubmit()
                }),
                e.\u0275\u0275elementStart(1, "fieldset", 61),
                e.\u0275\u0275elementStart(2, "div", 62),
                e.\u0275\u0275elementStart(3, "label", 63),
                e.\u0275\u0275text(4, "Email Id"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(5, "input", 64),
                e.\u0275\u0275template(6, Et, 2, 1, "div", 65),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(7, "div", 62),
                e.\u0275\u0275elementStart(8, "label", 66),
                e.\u0275\u0275text(9, "Enter Your Password"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(10, "input", 67),
                e.\u0275\u0275text(11),
                e.\u0275\u0275template(12, U, 2, 1, "div", 65),
                e.\u0275\u0275elementStart(13, "div", 68),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).changeType()
                }),
                e.\u0275\u0275text(14),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(15, It, 5, 1, "div", 69),
                e.\u0275\u0275template(16, Ut, 3, 2, "div", 70),
                e.\u0275\u0275template(17, Lt, 3, 7, "div", 25),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275property("formGroup", n.signInForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("disabled", null == n.authService ? null : n.authService.hasMfa),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction2(12, et, n.signInForm.get("email").value, n.signInForm.get("email").errors && (n.signInForm.get("email").dirty || n.signInForm.get("email").touched))),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("ngIf", n.signInForm.get("email").errors && (n.signInForm.get("email").dirty || n.signInForm.get("email").touched)),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction2(15, et, n.signInForm.get("password").value, n.signInForm.get("password").errors && (n.signInForm.get("password").dirty || n.signInForm.get("password").touched))),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275propertyInterpolate("type", n.type),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", null == n.signInForm.get("password").errors ? null : n.signInForm.get("password").errors.msg, " "),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.signInForm.get("password").errors && (n.signInForm.get("password").dirty || n.signInForm.get("password").touched)),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate1(" ", "password" == n.type ? "visibility" : "visibility_off", " "),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !n.modalToken && (n.signInForm.get("email").value.length > 0 || !n.allowSocialLogin) && !n.authService.hasMfa),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.showLoginForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !n.authService.hasMfa)
            }
        }
        function At(l, _) {
            if (1 & l && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementContainerEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(5);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1("Max limit exceeded please try again after ", null == n.otpStatus ? null : n.otpStatus.msg, "")
            }
        }
        function Rt(l, _) {
            if (1 & l && e.\u0275\u0275text(0),
            2 & l) {
                const n = e.\u0275\u0275nextContext(5);
                e.\u0275\u0275textInterpolate(null == n.otpStatus ? null : n.otpStatus.message)
            }
        }
        function jt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 89),
            e.\u0275\u0275element(1, "img", 58),
            e.\u0275\u0275template(2, At, 2, 1, "ng-container", 90),
            e.\u0275\u0275template(3, Rt, 1, 1, "ng-template", null, 91, e.\u0275\u0275templateRefExtractor),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275reference(4)
                  , s = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", 429 == (null == s.otpStatus ? null : s.otpStatus.status_code))("ngIfElse", n)
            }
        }
        function Vt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "app-timer", 92),
                e.\u0275\u0275listener("timerEnd", function(c) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(4).timerEnd(c)
                }),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275property("duration", n.otpDisableDuration)
            }
        }
        function Dt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "Form", 79),
                e.\u0275\u0275listener("ngSubmit", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).onSubmitOtpLogin()
                }),
                e.\u0275\u0275elementStart(1, "div", 80),
                e.\u0275\u0275elementStart(2, "label", 63),
                e.\u0275\u0275text(3, "Email Id"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(4, "input", 81),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(5, "div", 80),
                e.\u0275\u0275elementStart(6, "label", 82),
                e.\u0275\u0275text(7, "OTP"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(8, "input", 83),
                e.\u0275\u0275template(9, jt, 5, 2, "div", 84),
                e.\u0275\u0275elementStart(10, "button", 85),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).resendLoginViaOtp()
                }),
                e.\u0275\u0275text(11, "Resend "),
                e.\u0275\u0275template(12, Vt, 1, 1, "app-timer", 86),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(13, "div", 87),
                e.\u0275\u0275elementStart(14, "a", 74),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).loginViaOtpBlock = !1
                }),
                e.\u0275\u0275text(15, "Login with password"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(16, "button", 88),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).sendLoginViaOtp()
                }),
                e.\u0275\u0275text(17, " Login "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275property("formGroup", n.loginViaOtpForm),
                e.\u0275\u0275advance(8),
                e.\u0275\u0275property("autocomplete", "off"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.otpStatus),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("disabled", n.disableOTPResend),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", n.otpDisableDuration > 0)
            }
        }
        function Nt(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "span", 71),
            e.\u0275\u0275text(1),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(4);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate(null == n.otpStatus ? null : n.otpStatus.message)
            }
        }
        function Bt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 93),
                e.\u0275\u0275elementStart(1, "div", 80),
                e.\u0275\u0275elementStart(2, "label", 82),
                e.\u0275\u0275text(3, "Enter OTP"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(4, "input", 94),
                e.\u0275\u0275listener("ngModelChange", function(c) {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).otp = c
                }),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(5, Nt, 2, 1, "span", 65),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(6, "div", 72),
                e.\u0275\u0275elementStart(7, "a", 95),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).resendOtp()
                }),
                e.\u0275\u0275text(8, " Resend OTP "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(9, "button", 96),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).sendOtp()
                }),
                e.\u0275\u0275text(10, " Submit "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementEnd()
            }
            if (2 & l) {
                const n = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("ngModel", n.otp),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.otpStatus)
            }
        }
        const Wt = function() {
            return ["/auth"]
        };
        function Gt(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 49),
            e.\u0275\u0275text(1, " Don't have an account? "),
            e.\u0275\u0275elementStart(2, "span", 97),
            e.\u0275\u0275text(3, " Sign up "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementEnd()),
            2 & l && (e.\u0275\u0275advance(2),
            e.\u0275\u0275property("routerLink", e.\u0275\u0275pureFunction0(1, Wt)))
        }
        function Ht(l, _) {
            if (1 & l && (e.\u0275\u0275elementStart(0, "div", 51),
            e.\u0275\u0275template(1, St, 3, 1, "div", 52),
            e.\u0275\u0275template(2, kt, 2, 1, "p", 53),
            e.\u0275\u0275template(3, zt, 18, 18, "form", 54),
            e.\u0275\u0275template(4, Dt, 18, 5, "Form", 55),
            e.\u0275\u0275template(5, Bt, 11, 2, "div", 56),
            e.\u0275\u0275template(6, Gt, 4, 2, "div", 28),
            e.\u0275\u0275elementEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.error_msg),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.permissionErr.status),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !n.loginViaOtpBlock && !n.loginWithToken),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.loginViaOtpBlock),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.authService.hasMfa),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !n.loggedinModal)
            }
        }
        function Kt(l, _) {
            if (1 & l) {
                const n = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 99),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(n),
                    e.\u0275\u0275nextContext(3).exitModal()
                }),
                e.\u0275\u0275text(1, "Continue as Guest"),
                e.\u0275\u0275elementEnd()
            }
        }
        function Jt(l, _) {
            if (1 & l && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275elementStart(1, "div", 26),
            e.\u0275\u0275text(2, " Or "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275template(3, Kt, 2, 0, "button", 98),
            e.\u0275\u0275elementContainerEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", n.loggedinModal)
            }
        }
        function Yt(l, _) {
            if (1 & l && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275elementStart(1, "div", 22),
            e.\u0275\u0275template(2, _t, 2, 0, "h2", 23),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275template(3, ft, 4, 2, "div", 24),
            e.\u0275\u0275template(4, Mt, 5, 7, "div", 25),
            e.\u0275\u0275elementStart(5, "div", 26),
            e.\u0275\u0275text(6, " Or "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275template(7, Ot, 2, 0, "button", 27),
            e.\u0275\u0275template(8, yt, 4, 5, "div", 28),
            e.\u0275\u0275template(9, Ht, 7, 6, "div", 29),
            e.\u0275\u0275template(10, Jt, 4, 1, "ng-container", 6),
            e.\u0275\u0275elementContainerEnd()),
            2 & l) {
                const n = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !n.loggedinModal),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.allowSocialLogin && "desktop" == n.viewport),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.allowSocialLogin && "mobile" == n.viewport),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", n.loggedinModal && !n.showLoginForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.loggedinModal && !n.showLoginForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.showLoginForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", n.loggedinModal && n.continueAsGuest)
            }
        }
        function Zt(l, _) {
            1 & l && (e.\u0275\u0275elementStart(0, "div", 100),
            e.\u0275\u0275elementStart(1, "div", 101),
            e.\u0275\u0275element(2, "div", 102),
            e.\u0275\u0275element(3, "div", 103),
            e.\u0275\u0275element(4, "div", 104),
            e.\u0275\u0275element(5, "div", 105),
            e.\u0275\u0275element(6, "div", 106),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275text(7, " Logging in. Please wait... "),
            e.\u0275\u0275elementEnd())
        }
        const Qt = function(l) {
            return {
                "login-modal": l
            }
        }
          , $t = function(l) {
            return {
                "p-0": l
            }
        }
          , Xt = function(l) {
            return {
                popup: l
            }
        };
        let qt = (()=>{
            class l {
                constructor(n, s, c, f, a, p, o, i, d, u, k, F, R, W, J, Y, Z, ee, ne) {
                    this.fb = n,
                    this.store = s,
                    this.route = c,
                    this.router = f,
                    this.authService = a,
                    this.socialAuthService = p,
                    this.sharedActions = o,
                    this.common = i,
                    this.http = d,
                    this.ngZone = u,
                    this.menubarService = k,
                    this.toast = F,
                    this.localStorageService = R,
                    this.gtmService = W,
                    this.metaService = J,
                    this.titleService = Y,
                    this.userDeletedModalService = Z,
                    this.multisessionRevokeService = ee,
                    this.helper = ne,
                    this.title = b.N.AppName,
                    this.state = "devd2cdev",
                    this.disableLoginViaOtp = !1,
                    this.window = window,
                    this.revokeSessionData = [],
                    this.loginFrom = "login-social",
                    this.loggedinModal = !1,
                    this.withFP = !1,
                    this.modalEmail = null,
                    this.modalToken = null,
                    this.redirectTo = null,
                    this.continueAsGuest = !0,
                    this.oppType = "",
                    this.exitLoginModal = new e.EventEmitter,
                    this.clientLogin = !1,
                    this.clientDomain = "",
                    this.logging = !1,
                    this.permissionErr = {
                        status: !1,
                        msg: "You must first have to confirm your email to your social account in order to login through facebook or try another login method!!!."
                    },
                    this.currentProvider = "",
                    this.type = "password",
                    this.socialLoginSub = new v.xQ,
                    this.captchaResolve = !1,
                    this.viewport = "desktop",
                    this.allowSocialLogin = !0,
                    this.loginViaOtpBlock = !1,
                    this.otpDisableDuration = 0,
                    this.showLoginForm = !1,
                    this.isNewUser = !1,
                    this.slider = {
                        rewind: !0,
                        autoplay: !0,
                        autoplaySpeed: 1e3,
                        autoplayHoverPause: !0,
                        navText: ["", ""],
                        loop: !0,
                        nav: !1,
                        dots: !1,
                        responsive: {
                            0: {
                                items: 1,
                                stagePadding: 130
                            },
                            300: {
                                items: 1,
                                stagePadding: 70
                            },
                            400: {
                                items: 1,
                                stagePadding: 110
                            },
                            600: {
                                items: 1,
                                stagePadding: 150
                            },
                            700: {
                                items: 1,
                                stagePadding: 170
                            }
                        }
                    }
                }
                onWindowResize() {
                    window.innerWidth <= 991 ? (this.viewport = "mobile",
                    this.menubarService.mobileMenuBarStatus = !1) : this.viewport = "desktop"
                }
                redirectToPage() {
                    this.menubarService.menubarRedirection()
                }
                changeType() {
                    this.type = "password" == this.type ? "text" : "password"
                }
                checkCookie() {}
                demo() {
                    console.log("sdfdsa")
                }
                socialServiceInit() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        this.authService.socialAuthSub.subscribe(n=>{
                            console.log("----------------- social auth sub", n),
                            this.socialAuthSub && this.socialAuthSub.unsubscribe(),
                            this.socialAuth = n,
                            this.socialAuth && (this.socialAuthSub = this.socialAuth.authState.subscribe(s=>{
                                if (console.log("Social Login Result:", s),
                                s)
                                    if (s.email && "" !== s.email) {
                                        const c = {
                                            email: s.email,
                                            token: s.authToken,
                                            provider: String(s.provider).toLowerCase()
                                        };
                                        this.loginSubs = this.authService.login(c, "social").subscribe(f=>{
                                            console.log(f),
                                            this.redirectIfUserLoggedIn()
                                        }
                                        )
                                    } else
                                        this.permissionErr.status = !0,
                                        this.permissionErr.msg = "facebook" === this.currentProvider ? "You must first have to confirm your email to your facebook account in order to login through facebook or provide us access to email. Or you can try another login method." : "You must first have to confirm your email to the social account you trying to logging in with or you can provide us access to email. Or you can try another login method."
                            }
                            ))
                        }
                        )
                    })
                }
                forgotPassword() {
                    var n, s;
                    if (this.modalToken)
                        this.error_msg = "Cannot reset password!! ";
                    else {
                        if (this.error_msg = "reset password",
                        null === (s = null === (n = this.route.snapshot) || void 0 === n ? void 0 : n.queryParams) || void 0 === s ? void 0 : s.returnUrl) {
                            let c = decodeURIComponent(window.location.href)
                              , f = c.slice(c.indexOf("returnUrl=") + "returnUrl=".length);
                            this.router.navigateByUrl("auth/recover-password?returnUrl=" + f)
                        } else
                            this.router.navigateByUrl("auth/recover-password");
                        this.exitModal()
                    }
                }
                loginViaOtp(n) {
                    console.log(n),
                    this.disableLoginViaOtp = !0,
                    this.authService.setLoginOtp({
                        email: n
                    }).subscribe(s=>{
                        var c, f;
                        console.log(s.data),
                        this.disableLoginViaOtp = !1,
                        (null === (c = s.data) || void 0 === c ? void 0 : c.status) ? (this.loginViaOtpForm = this.fb.group({
                            email: [s.data.email, O.kI.email],
                            otp: ["", O.kI.required]
                        }),
                        this.loginViaOtpBlock = !0,
                        this.otpDisableDuration = 60,
                        this.disableOTPResend = !0) : 429 == (null === (f = s.data) || void 0 === f ? void 0 : f.status_code) ? this.toast.toast("OTP login has been blocked for " + s.data.msg, 2e3, "red") : "mSession" == (null == s ? void 0 : s.status) ? this.multisessionRevokeService.multiSession.next(s) : "uDeletedTemp" == (null == s ? void 0 : s.status) ? this.userDeletedModalService.userDeleted.next(s) : this.toast.toast(s.data.message, 2e3, "red")
                    }
                    )
                }
                timerEnd(n) {
                    this.disableOTPResend = !1,
                    this.otpDisableDuration = 0
                }
                sendLoginViaOtp() {}
                loginViaEmail() {
                    this.showLoginForm = !0
                }
                ngOnInit() {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        this.getStats(),
                        this.showLoginForm = !this.loggedinModal,
                        console.log(this.showLoginForm),
                        this.socialAuthService.socialAuthSub.subscribe(a=>{}
                        ),
                        this.socialAuthService.initSocialLogins(),
                        console.log("viewPort!!", this.viewport);
                        let n = window.location.href;
                        if (console.log(n),
                        n.includes("tvscredit.com") ? (this.sitekey = "6LcR1OEZAAAAAJA68zIpxqoeuTGP5Qz02CIqVwKj",
                        console.log("false")) : (this.sitekey = "6LdXXPQUAAAAAGuiq-ZKTYDfuIvdw0gnFH80h6cg",
                        console.log("true")),
                        this.onWindowResize(),
                        this.socialServiceInit(),
                        this.loggedinModal || (this.menubarService.menuBarStatus = !1),
                        console.log("checking allow_social_login", this.route.snapshot.queryParams.allow_social_login),
                        this.route.snapshot.queryParams.token ? (console.log("asdfasfd"),
                        this.loginWithToken = !0) : this.loginWithToken = !1,
                        0 == this.route.snapshot.queryParams.allow_social_login && (this.allowSocialLogin = !1),
                        this.route.fragment.subscribe(a=>{
                            a && this.queryStringToJSON(a)
                        }
                        ),
                        this.redirectUrl = encodeURIComponent(b.N.appUrl + "/auth/login"),
                        this.route.snapshot.queryParams.token) {
                            console.log("logoutt!!!"),
                            this.authService.logout(),
                            this.logging = !0;
                            const a = JSON.parse(window.atob(this.route.snapshot.queryParams.token));
                            let o = a.redirect_url;
                            this.paramSub = this.authService.login({
                                token: a.token,
                                provider: "d2c"
                            }, "token").subscribe(i=>{
                                if (i && i.error || i.errors) {
                                    const u = i.errors;
                                    u && (this.error_msg = u.email[0],
                                    this.store.dispatch(this.sharedActions.showNotification(u.email[0])))
                                }
                                this.router.navigateByUrl(o)
                            }
                            )
                        }
                        if (this.redirectIfUserLoggedIn(),
                        this.initForm(),
                        this.route.snapshot.queryParams.returnUrl) {
                            const a = this.route.snapshot.queryParams.returnUrl;
                            if (console.log(a),
                            "/auth/signup" != a && "/auth/login" != a) {
                                let p = decodeURIComponent(window.location.href);
                                this.returnUrl = p.slice(p.indexOf("returnUrl=") + "returnUrl=".length),
                                console.log(this.returnUrl)
                            }
                        } else
                            this.common.previousUrl ? "/auth/signup" != this.common.previousUrl && "/auth/login" != this.common.previousUrl && (this.returnUrl = this.common.previousUrl) : this.returnUrl = "/";
                        this.authService.setReturnUrl(this.returnUrl),
                        console.log("checking allow_social_login", this.route.snapshot.queryParams.allow_social_login),
                        0 == this.route.snapshot.queryParams.allow_social_login && (this.allowSocialLogin = !1),
                        window.handleFbSocialLogin = a=>{
                            this.socialAuthService.handleFacebookCallback(a)
                        }
                        ;
                        const s = "Login to Unstop.com"
                          , c = "Login to Unstop using your email.";
                        this.titleService.setTitle(s),
                        this.metaService.addTags([{
                            name: "description",
                            content: c
                        }, {
                            name: "og:title",
                            content: s
                        }, {
                            name: "og:description",
                            content: c
                        }, {
                            property: "og:image",
                            content: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/unstop-seo-image.jpg"
                        }, {
                            property: "og:image:height",
                            content: 1536
                        }, {
                            property: "og:image:width",
                            content: 768
                        }]),
                        this.metaService.updateTag({
                            rel: "canonical",
                            href: "https://unstop.com/auth/login"
                        })
                    })
                }
                resendOtp() {
                    this.onSubmit()
                }
                resendLoginViaOtp() {
                    this.loginViaOtp(this.loginViaOtpForm.get("email").value)
                }
                sendOtp() {
                    console.log(this.otp),
                    this.authService.sendOtp(this.otp).subscribe(n=>{
                        console.log(n),
                        this.otpStatus = n.data,
                        console.log("otppdata:", this.otpStatus)
                    }
                    )
                }
                queryStringToJSON(n) {
                    let s = n.split("&")
                      , c = {};
                    return s.forEach(function(f) {
                        f = f.split("="),
                        c[f[0]] = decodeURIComponent(f[1] || "")
                    }),
                    JSON.parse(JSON.stringify(c))
                }
                socialLogin(n) {}
                socialLogout(n) {}
                resolved(n) {
                    if (console.log("captcha"),
                    n && 0 != n.length) {
                        const s = this.signInForm.value;
                        this.captchaResolve = !0,
                        this.loginSubs = this.authService.login(s).subscribe(c=>{
                            var f, a;
                            if (c && c.error || c.errors) {
                                const o = c.errors;
                                o && ("production" == b.N.environment && this.captchaRef.reset(),
                                this.error_msg = o.email[0],
                                this.store.dispatch(this.sharedActions.showNotification(o.email[0])))
                            }
                            console.log(c),
                            console.log("OTP sent to registered"),
                            this.authService.hasMfa && this.toast.toast("OTP sent to registered EmailId", 3e3, "green"),
                            this.authService.multiSession && (this.multisessionRevokeService.multiSession.next(c),
                            "production" == b.N.environment && this.captchaRef.reset()),
                            this.authService.userDeleted && (this.userDeletedModalService.userDeleted.next(this.authService.userDeleted),
                            "production" == b.N.environment && this.captchaRef.reset()),
                            c.status && "password_reset_mandatory" == c.status && (this.toast.toast("You must reset your password before first login", 3e3, "green"),
                            this.router.navigateByUrl("/auth/reset-password/" + c.reset_token)),
                            !(null === (f = null == c ? void 0 : c.data) || void 0 === f ? void 0 : f.status) && 429 == (null === (a = null == c ? void 0 : c.data) || void 0 === a ? void 0 : a.status_code) && (this.error_msg = "Too many attempts. Please try again after " + c.data.msg + ".",
                            this.disableLogin = !0)
                        }
                        )
                    } else
                        this.captchaResolve = !1;
                    console.log(n)
                }
                exitModal() {
                    this.exitLoginModal.emit("exit")
                }
                onSubmit() {
                    const n = this.signInForm.value;
                    this.loginFrom = "login-normal";
                    const s = Object.keys(n);
                    this.signInForm.valid ? "production" == b.N.environment ? (console.log("sdfsdf"),
                    this.captchaRef.execute()) : this.resolved("true") : s.forEach(c=>{
                        const f = this.signInForm.controls[c];
                        f.valid || (this.pushErrorFor(c, null),
                        f.markAsTouched())
                    }
                    )
                }
                onSubmitOtpLogin() {
                    this.authService.sendOtp(this.loginViaOtpForm.value.otp, this.loginViaOtpForm.value.email).subscribe(n=>{
                        "mSession" == (null == n ? void 0 : n.status) ? this.multisessionRevokeService.multiSession.next(n) : "uDeletedTemp" == (null == n ? void 0 : n.status) ? this.userDeletedModalService.userDeleted.next(n) : this.otpStatus = n.data
                    }
                    )
                }
                initForm() {
                    var n = "";
                    null != this.modalEmail && (n = this.modalEmail),
                    this.signInForm = this.fb.group({
                        email: [n, [O.kI.required, O.kI.email, O.kI.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                        password: ["", O.kI.required]
                    }),
                    console.log(this.signInForm),
                    this.socialLoginSubscription = this.socialLoginSub.pipe((0,
                    M.p)(2e3)).subscribe(c=>this.socialLogin(c))
                }
                onClickSocialLogin(n) {
                    this.socialLoginSub.next(n)
                }
                redirectIfUserLoggedIn() {
                    this.socialAuthService.socialAuthSub.subscribe(n=>{
                        "mSession" == (null == n ? void 0 : n.status) && this.multisessionRevokeService.multiSession.next(n),
                        "uDeletedTemp" == (null == n ? void 0 : n.status) && this.userDeletedModalService.userDeleted.next(n),
                        (null == n ? void 0 : n.new_user) && (console.log("newuserauth"),
                        this.isNewUser = !0)
                    }
                    ),
                    this.storeSub = this.store.select(h.T).subscribe(n=>{
                        if (this.loggedinModal)
                            console.log("updateFormReg"),
                            !0 === n && (this.exitLoginModal.emit("updateForm"),
                            this.loginFrom = "login-modal",
                            this.isNewUser ? this.followClick1(this.returnUrl, "signup-social") : this.followClick(this.returnUrl, this.loginFrom));
                        else {
                            if ((!this.returnUrl || this.returnUrl.includes("/auth/login?code=")) && (this.returnUrl = "/home"),
                            this.isNewUser && (this.returnUrl = this.returnUrl + "?signup=google-click"),
                            !0 === n && this.returnUrl) {
                                if (console.log("in returl", this.returnUrl),
                                "bites" == this.returnUrl)
                                    return void (window.location.href = "https://unstop.com/bites");
                                this.returnUrl.includes("&") && !this.returnUrl.includes("?") && (this.returnUrl = this.returnUrl.replace("&", "?")),
                                this.ngZone.run(()=>this.router.navigateByUrl(this.returnUrl)),
                                this.returnUrl = null
                            }
                            n && (this.authService.hasMfa = !1,
                            this.isNewUser ? this.followClick1(this.returnUrl, "signup-social") : this.followClick(this.returnUrl, this.loginFrom))
                        }
                    }
                    )
                }
                followClick(n, s) {
                    "/" == n && (n = "home-url"),
                    this.gtmService.sendEventData("Login_success", s, "Login successfull from " + n)
                }
                followClick1(n, s) {
                    "/" == n && (n = "home-url"),
                    this.gtmService.sendEventData("SignUp_success", s, "Signup successfull from " + n)
                }
                handleSocialLogin(n) {
                    return (0,
                    r.mG)(this, void 0, void 0, function*() {
                        (yield this.socialAuthService.handleSocialLoginClick(n)) && this.redirectIfUserLoggedIn()
                    })
                }
                ngOnDestroy() {
                    this.loginSubs && this.loginSubs.unsubscribe(),
                    this.socialLoginSubscription && this.socialLoginSubscription.unsubscribe(),
                    this.storeSub && this.storeSub.unsubscribe(),
                    this.paramSub && this.paramSub.unsubscribe(),
                    this.socialAuthSub && this.socialAuthSub.unsubscribe(),
                    this.returnUrl = null
                }
                pushErrorFor(n, s) {
                    this.signInForm.controls[n].setErrors({
                        msg: s
                    })
                }
                backTo() {
                    this.router.navigateByUrl("/" + this.redirectTo),
                    console.log("backTo", this.redirectTo)
                }
                revokedSession(n) {
                    this.toast.toast(n.msg, 2e3, "green"),
                    this.onSubmit(),
                    "production" == b.N.environment && this.captchaRef.reset()
                }
                getStats() {
                    this.http.get("/api/public/get-dashboard-widgets-data-new?s=homepage").subscribe(n=>{
                        this.d2cStats = n.data
                    }
                    )
                }
            }
            return l.\u0275fac = function(n) {
                return new (n || l)(e.\u0275\u0275directiveInject(O.qu),e.\u0275\u0275directiveInject(A.yh),e.\u0275\u0275directiveInject(I.gz),e.\u0275\u0275directiveInject(I.F0),e.\u0275\u0275directiveInject(j.e),e.\u0275\u0275directiveInject(S.$),e.\u0275\u0275directiveInject(B.t$),e.\u0275\u0275directiveInject(D.v),e.\u0275\u0275directiveInject(P.eN),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(L.O6),e.\u0275\u0275directiveInject(K.k),e.\u0275\u0275directiveInject(z.n),e.\u0275\u0275directiveInject(t.e),e.\u0275\u0275directiveInject(G.h_),e.\u0275\u0275directiveInject(G.Dx),e.\u0275\u0275directiveInject(x),e.\u0275\u0275directiveInject(y.C),e.\u0275\u0275directiveInject(T.W_))
            }
            ,
            l.\u0275cmp = e.\u0275\u0275defineComponent({
                type: l,
                selectors: [["app-login"]],
                viewQuery: function(n, s) {
                    if (1 & n && e.\u0275\u0275viewQuery(lt, 5),
                    2 & n) {
                        let c;
                        e.\u0275\u0275queryRefresh(c = e.\u0275\u0275loadQuery()) && (s.captchaRef = c.first)
                    }
                },
                hostBindings: function(n, s) {
                    1 & n && e.\u0275\u0275listener("resize", function(f) {
                        return s.onWindowResize(f)
                    }, !1, e.\u0275\u0275resolveWindow)
                },
                inputs: {
                    loggedinModal: "loggedinModal",
                    withFP: "withFP",
                    modalEmail: "modalEmail",
                    modalToken: "modalToken",
                    redirectTo: "redirectTo",
                    continueAsGuest: "continueAsGuest",
                    oppType: ["type", "oppType"]
                },
                outputs: {
                    exitLoginModal: "exitLoginModal"
                },
                features: [e.\u0275\u0275ProvidersFeature([y.C, x])],
                decls: 10,
                vars: 18,
                consts: [[1, "position-relative", 3, "ngClass"], [1, "login-box", "d2c-container"], ["class", "login-carousel", 4, "ngIf"], [1, "right_sect", 3, "ngClass"], [1, "item", "login", 3, "ngClass"], ["id", "content"], [4, "ngIf"], ["class", "logging_box", 4, "ngIf"], [3, "revokedSession"], [1, "login-carousel"], ["routerLink", "/"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "alt", "Unstop", 1, "logo"], [1, "carousel"], [1, "team-carousel", 3, "options"], ["owlElement", ""], ["carouselSlide", ""], [1, "car-item"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f5b24c1d_login_1.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f71aba10_login_2.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f7c11db9_login_3.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f8bc048d_login_4.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f9b3c016_login_5.png?d=686x858"], [1, "form-title", "position-relative"], ["class", "mb-30", 4, "ngIf"], ["class", "google-btn", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "other_link", "or", "center-align", "grey-text"], ["class", "btn z-depth-0 btn-full-width", 3, "click", 4, "ngIf"], ["class", "other_link center-align", 4, "ngIf"], ["class", "panel-body", "data-hook", "login", 4, "ngIf"], [1, "mb-30"], [1, "google-btn"], [1, "social_btn", "pb-0"], ["class", "", "id", "google-root", "data-width", "500", 3, "click", 4, "ngIf"], ["class", "login-google login-button app-social-btn", 3, "click", 4, "ngIf"], ["id", "google-root", "data-width", "500", 1, "", 3, "click"], [1, "login-google", "login-button", "app-social-btn", 3, "click"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/google-logo-icon.webp"], [3, "ngClass"], [1, "social_btn", "google-btn"], ["class", "", "id", "google-root", 3, "click", 4, "ngIf"], ["class", "btn glogin-ios", 3, "click", 4, "ngIf"], ["class", " mt-10 google-btn ", 4, "ngIf"], ["id", "google-root", 1, "", 3, "click"], [1, "btn", "glogin-ios", 3, "click"], [1, "mt-10", "google-btn"], [1, "login-facebook", "btn", "mb-0", "apple_btn", 3, "click"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/61cae1c99ca69_apple_logo.png"], [1, "btn", "z-depth-0", "btn-full-width", 3, "click"], [1, "other_link", "center-align"], ["queryParamsHandling", "merge", 3, "routerLink", "queryParams"], ["data-hook", "login", 1, "panel-body"], ["class", "main_error error_mesg mb-15", 4, "ngIf"], ["class", "red-text", 4, "ngIf"], ["class", "login_form clearfix", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "login_form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "otp-form position-relative login_form mt-10", 4, "ngIf"], [1, "main_error", "error_mesg", "mb-15"], ["alt", "Error", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/error.svg"], [1, "red-text"], [1, "login_form", "clearfix", 3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "input_fields", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "email", "required", "", "name", "email", "formControlName", "email", "placeholder", "Enter Your Email ID", 1, "login-user-input-email", "login-user-input"], ["class", "error", 4, "ngIf"], ["for", "pwd"], ["id", "pwd", "name", "password", "formControlName", "password", "required", "", "autocomplete", "off", "placeholder", "Enter Your Password", 1, "login-user-input-password", "login-user-input", 3, "type"], [1, "view-pwd", "material-icons", 3, "click"], ["class", "forgot j-between", 4, "ngIf"], ["class", "captcha", 4, "ngIf"], [1, "error"], [1, "forgot", "j-between"], [3, "disabled", "click"], [3, "click"], [1, "captcha"], [1, "g-recaptcha", 3, "size", "siteKey", "resolved"], ["captchaRef", ""], ["type", "submit", 1, "btn", "login-button", "login-button", "full-width", "d2c-bg", "white-text", 3, "disabled", "ngClass"], [1, "login_form", 3, "formGroup", "ngSubmit"], [1, "input_fields"], ["formControlName", "email", "id", "email", "type", "text", "required", "", "name", "email", "autocomplete", "off", "placeholder", "Enter your Email", 1, "login-user-input-email", "login-user-input"], ["for", "otp"], ["formControlName", "otp", "id", "otp", "type", "number", "required", "", "name", "otp", "autocomplete", "off", "placeholder", "Enter OTP", "value", "", 1, "login-user-input-email", "login-user-input", 3, "autocomplete"], ["class", "error_mesg", 4, "ngIf"], [1, "d2c-color", "cursor-pointer", "resend-otp", 3, "disabled", "click"], ["class", "timer", 3, "duration", "timerEnd", 4, "ngIf"], [1, "forgot"], ["type", "submit", 1, "btn", "login-button", "full-width", "z-depth-0", "d2c-bg", 3, "click"], [1, "error_mesg"], [4, "ngIf", "ngIfElse"], ["other_error", ""], [1, "timer", 3, "duration", "timerEnd"], [1, "otp-form", "position-relative", "login_form", "mt-10"], ["id", "otp", "type", "password", "required", "", "name", "otp", "autocomplete", "off", "placeholder", "Enter OTP", "value", "''", 1, "login-user-input-email", "login-user-input", 3, "ngModel", "ngModelChange"], [1, "d2c-color", "cursor-pointer", "resend-otp", 3, "click"], ["type", "submit", 1, "btn", "login-button", "full-width", 3, "click"], ["queryParamsHandling", "merge", 3, "routerLink"], ["class", "btn z-depth-0 btn-full-width guest", 3, "click", 4, "ngIf"], [1, "btn", "z-depth-0", "btn-full-width", "guest", 3, "click"], [1, "logging_box"], [1, "spinner"], [1, "rect1"], [1, "rect2"], [1, "rect3"], [1, "rect4"], [1, "rect5"]],
                template: function(n, s) {
                    1 & n && (e.\u0275\u0275elementStart(0, "section", 0),
                    e.\u0275\u0275elementStart(1, "div", 1),
                    e.\u0275\u0275template(2, mt, 12, 1, "div", 2),
                    e.\u0275\u0275elementStart(3, "div", 3),
                    e.\u0275\u0275elementStart(4, "div", 4),
                    e.\u0275\u0275elementStart(5, "div", 5),
                    e.\u0275\u0275template(6, Yt, 11, 7, "ng-container", 6),
                    e.\u0275\u0275template(7, Zt, 8, 0, "div", 7),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(8, "app-multisession-revoke", 8),
                    e.\u0275\u0275listener("revokedSession", function(f) {
                        return s.revokedSession(f)
                    }),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(9, "app-user-deleted-modal")),
                    2 & n && (e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(12, Qt, s.loggedinModal)),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275classProp("h-auto", s.loggedinModal),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", !s.loggedinModal),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(14, $t, s.loggedinModal)),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(16, Xt, s.loggedinModal)),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275classProp("h-auto", s.loggedinModal)("d-block", s.loggedinModal),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", !s.logging),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", s.logging))
                },
                directives: [H.NgClass, H.NgIf, Q.G, rt, I.rH, X.H, q.Fy, q.Mp, tt.X, O._Y, O.JL, O.sg, O.Fj, O.Q7, O.JJ, O.u, m.wT, O.wV, at.K, O.On],
                styles: ['section[_ngcontent-%COMP%]{background-color:#fff}@media screen and (max-width: 768px){section[_ngcontent-%COMP%]{justify-content:flex-start}}.d2c-container[_ngcontent-%COMP%]{max-width:1250px}.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:65px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-left:1px solid rgba(39,73,125,.5);padding-left:10px;margin-left:8px;color:#1c4980;font-size:12px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px}.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1c4980;border:1px solid #1C4980;width:120px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:.3s;background:rgba(39,73,125,.1);border-radius:8px;background:#1C4980;color:#fff}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#fff;border-color:#1c4980;color:#1c4980}@media (max-width: 800px){.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{height:53px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:90px;height:34px}}.hdng[_ngcontent-%COMP%]{width:460px;margin-top:20px}.hdng[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-weight:800;font-size:37px;line-height:46px;color:#1c4980}.hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:140%;color:#27497dcc;margin-bottom:0;margin-top:10px}.hdng[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}@media (max-width: 991px){.hdng[_ngcontent-%COMP%]{display:none}}.right_sect[_ngcontent-%COMP%]{width:550px;position:relative;z-index:9;margin-left:auto}@media (max-width: 1200px){.right_sect[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 991px){.right_sect[_ngcontent-%COMP%]{width:400px;width:100%;padding-left:0;max-width:650px;margin:auto}}@media (max-width: 600px){.right_sect[_ngcontent-%COMP%]{min-width:unset}}.item[_ngcontent-%COMP%]{background:#ffffff;border-radius:10px;margin-bottom:25px;padding:20px 25px;width:100%}.item[_ngcontent-%COMP%]:last-child{margin:auto;position:relative}.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{min-height:calc(100vh - 160px);display:flex;flex-direction:column;justify-content:center}@media (max-width: 1100px){.item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 991px){.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{display:block;height:100%}}@media (max-width: 800px){.item[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 600px){.item[_ngcontent-%COMP%]{min-width:unset;width:100%}.item.login[_ngcontent-%COMP%]{width:100%}}.header[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;z-index:9;min-height:calc(100vh - 65px)}@media (max-width: 991px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;padding:30px 15px}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding-top:0;min-height:calc(100vh - 150px)}}.other_link[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:#1c4980;margin-top:10px}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1c4980;font-weight:500;transition:.3s;cursor:pointer}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.other_link[_ngcontent-%COMP%]{font-weight:500;color:#3e6493}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}}.or[_ngcontent-%COMP%]{position:relative;margin:15px 0}.or[_ngcontent-%COMP%]:before, .or[_ngcontent-%COMP%]:after{content:"";height:1px;width:calc(50% - 20px);background:rgba(39,73,125,.2);position:absolute;top:0;margin:auto;bottom:0}.or[_ngcontent-%COMP%]:before{left:0}.or[_ngcontent-%COMP%]:after{right:0}.form-title[_ngcontent-%COMP%]{text-align:center}.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:20px;color:#1c4980;margin-bottom:8px}.form-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#1c4980}.google-btn[_ngcontent-%COMP%]{margin-top:15px}.google-btn[_ngcontent-%COMP%]   .ios-txt[_ngcontent-%COMP%]{width:calc(100% - 100px)}.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px}.login_form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#1c4980d9}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{text-transform:lowercase}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked):after{top:20px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#1c4980}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{position:absolute;top:40px;right:20px;color:#4c5d73;cursor:pointer;transition:.3s}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{top:35px}}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container{border:none!important}@media screen and (max-width: 600px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container   .mat-menu-trigger{top:10px}}.login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     .mat-form-field .mat-select-trigger, .login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     input{border-color:#e7183e!important;background:#fff!important}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-select-trigger{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{line-height:50px;padding-left:15px;font-size:14px}@media only screen and (min-width: 801px){.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{font-weight:400}}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label .mat-placeholder-required{display:none}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper .mat-empty{color:#a9a9a9}.login_form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{margin-top:20px;font-weight:500;height:47px;background:#0073E6;border-radius:8px}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:17px;color:#455368;transition:.3s;cursor:pointer}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]{position:absolute;right:10px;padding:5px 8px;font-size:12px;top:34px;cursor:pointer;border-radius:6px;transition:.4s;font-weight:500}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:hover{background:#c3daf8}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:disabled{color:#484848!important;background:#d8d8d8;cursor:not-allowed}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper{line-height:18px;padding:0;color:#484848!important;background-color:transparent!important}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span{min-width:unset}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper .minute{display:none}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span em{display:none}.error_mesg[_ngcontent-%COMP%]{background:#d63500;border:1px solid #d63500;box-shadow:0 3px 8px #ef535066;color:#fff;font-size:12px;display:flex;align-items:center;padding:0 15px;bottom:-40px;left:0;border-radius:5px;z-index:9;height:34px;line-height:13px}.error_mesg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:6px;max-width:15px}.child-items[_ngcontent-%COMP%]{margin-top:20px;padding:20px;background:#fff;box-shadow:0 0 12px #0080ff40;border-radius:8px;display:flex;flex-wrap:wrap}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px 10px;border-radius:4px;transition:.4s;display:flex;align-items:center;width:50%}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;display:block}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#1c4980;font-weight:500;margin-bottom:0;transition:.3s;width:calc(100% - 40px);padding-left:15px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#eef4ff}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#0073e6}@media (max-width: 800px){.child-items[_ngcontent-%COMP%]{padding:10px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;padding:8px}}.apple_btn[_ngcontent-%COMP%]{background:#fff;color:#1c4980;display:flex;align-items:center;font-weight:500;width:100%;box-shadow:none;border:1px solid #d8d8d8;border-radius:4px;font-size:14px;padding:0 10px}.apple_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:40px}.glogin-ios[_ngcontent-%COMP%]{display:flex;background:#fff;color:#1c4980;align-items:center;width:100%;font-weight:500}.glogin-ios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.glogin-ios[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:40px}.login-modal[_ngcontent-%COMP%]{padding:10px}.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px;min-height:auto}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:100%}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:20px;width:100%}@media (max-width: 600px){.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:20px}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{box-shadow:none;padding:0}}.login-box[_ngcontent-%COMP%]{min-height:calc(100vh - 100px)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{text-align:center;position:absolute;left:60px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:flex-start}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:30px 0}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]{padding:20px;width:100%;margin-bottom:30px}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-item.active .car-item{transform:scale(1)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-dots{bottom:-40px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]{width:100%;transform:scale(.7);transition:.5s ease-in-out}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;width:auto;height:auto;max-height:none;margin:auto}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:36px;line-height:44px;color:#1c4980}@media screen and (max-width: 1200px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{width:calc(100% - 550px);left:30px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{position:static;width:100%}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{max-width:450px;width:100%}}@media screen and (max-width: 600px){.login-box[_ngcontent-%COMP%]{flex-direction:column;height:100%;padding:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:28px}.login-box[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:0}}.h-auto[_ngcontent-%COMP%]{height:100%!important;max-height:unset;min-height:unset!important}', '.pop_btn[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.pop_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:48%;box-shadow:none;border:1px solid #1C4980;transition:.3s}.pop_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{color:#1c4980;border:1px solid rgba(39,73,125,.1);background:rgba(39,73,125,.1)}.pop_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:first-child{background:#1C4980;color:#fff}.pop_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:last-child{background:#fff;color:#1c4980}@media (max-width: 600px){.pop_btn[_ngcontent-%COMP%]{flex-wrap:wrap}.pop_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}.back-btn[_ngcontent-%COMP%]{position:absolute;top:-5px;right:0px;cursor:pointer;font-size:18px;padding:6px;color:#1c4980;border-radius:50%;transition:.4s}.back-btn[_ngcontent-%COMP%]:hover{background:rgba(39,73,125,.14)}.btn-full-width[_ngcontent-%COMP%]{height:46px;width:100%;font-family:"Inter",sans-serif;letter-spacing:0px;font-size:15px}.btn-full-width.guest[_ngcontent-%COMP%]{background:#1C4980}@media only screen and (min-width: 1101px){.item.popup[_ngcontent-%COMP%]{min-height:unset}}']
            }),
            l
        }
        )()
    }
    ,
    75650: (nt,V,g)=>{
        g.d(V, {
            L: ()=>E
        });
        var r = g(83668)
          , e = g(49133)
          , O = g(67686)
          , L = g(95599)
          , h = g(57725)
          , t = g(21978)
          , z = g(7336)
          , j = g(86019);
        function b(C, w) {
            if (1 & C && (r.\u0275\u0275elementStart(0, "div", 33),
            r.\u0275\u0275elementStart(1, "i", 34),
            r.\u0275\u0275text(2, "done"),
            r.\u0275\u0275elementEnd(),
            r.\u0275\u0275text(3),
            r.\u0275\u0275elementEnd()),
            2 & C) {
                const P = r.\u0275\u0275nextContext();
                r.\u0275\u0275advance(3),
                r.\u0275\u0275textInterpolate1(" ", P.successMsg, " ")
            }
        }
        function D(C, w) {
            if (1 & C && (r.\u0275\u0275elementStart(0, "div", 35),
            r.\u0275\u0275element(1, "img", 36),
            r.\u0275\u0275text(2),
            r.\u0275\u0275elementEnd()),
            2 & C) {
                const P = r.\u0275\u0275nextContext();
                r.\u0275\u0275advance(2),
                r.\u0275\u0275textInterpolate1(" ", P.errorMsg, " ")
            }
        }
        function m(C, w) {
            1 & C && (r.\u0275\u0275elementStart(0, "div", 37),
            r.\u0275\u0275text(1),
            r.\u0275\u0275elementEnd()),
            2 & C && (r.\u0275\u0275advance(1),
            r.\u0275\u0275textInterpolate1(" ", "Please enter a valid email", " "))
        }
        function v(C, w) {
            1 & C && (r.\u0275\u0275elementStart(0, "div", 38),
            r.\u0275\u0275text(1),
            r.\u0275\u0275elementEnd()),
            2 & C && (r.\u0275\u0275advance(1),
            r.\u0275\u0275textInterpolate1(" ", "The password must have at least 8 characters with a combination of alphabets, special characters & numbers.", " "))
        }
        function M(C, w) {
            1 & C && (r.\u0275\u0275elementStart(0, "div", 37),
            r.\u0275\u0275text(1),
            r.\u0275\u0275elementEnd()),
            2 & C && (r.\u0275\u0275advance(1),
            r.\u0275\u0275textInterpolate1(" ", "Password Confirmation not Matching", " "))
        }
        function S(C, w) {
            if (1 & C) {
                const P = r.\u0275\u0275getCurrentView();
                r.\u0275\u0275elementStart(0, "button", 39),
                r.\u0275\u0275listener("click", function() {
                    return r.\u0275\u0275restoreView(P),
                    r.\u0275\u0275nextContext().skipPasswordReset()
                }),
                r.\u0275\u0275text(1, " Skip "),
                r.\u0275\u0275elementEnd()
            }
        }
        let E = (()=>{
            class C {
                constructor(P, x, y, T, A, I) {
                    this.router = P,
                    this.authService = x,
                    this.route = y,
                    this.fb = T,
                    this.toastService = A,
                    this.localStorageService = I,
                    this.loggedinModal = !1,
                    this.modalEmail = null,
                    this.modalToken = null,
                    this.skipReset = !1,
                    this.exitLoginModal = new r.EventEmitter,
                    this.viewport = "desktop",
                    this.tokenType = "url"
                }
                onWindowResize() {
                    this.viewport = window.innerWidth <= 991 ? "mobile" : "desktop"
                }
                ngOnInit() {
                    this.onWindowResize(),
                    this.modalToken ? (this.token = this.modalToken,
                    this.tokenType = "modal") : (this.route.params.subscribe(x=>{
                        this.token = x.token
                    }
                    ),
                    this.route.queryParams.subscribe(x=>{
                        x.user_account && (this.userAccountString = x.user_account)
                    }
                    ));
                    var P = "";
                    this.modalEmail && (P = this.modalEmail),
                    this.resetForm = this.fb.group({
                        email: new e.NI(P,[e.kI.required, e.kI.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
                        password: new e.NI("",[e.kI.required, e.kI.minLength(8), e.kI.pattern("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{7,40}")]),
                        password_confirmation: new e.NI("",[e.kI.required, e.kI.minLength(8)])
                    }, {
                        validator: N.MatchPassword
                    })
                }
                login() {
                    this.router.navigate(["auth/login"], this.route.snapshot.queryParams.returnUrl ? {
                        queryParamsHandling: "preserve"
                    } : {
                        queryParams: {
                            returnUrl: "/"
                        }
                    })
                }
                skipPasswordReset() {
                    this.exitLoginModal.emit("skipPasswordReset")
                }
                onSubmit() {
                    this.errorMsg = "",
                    this.resetForm.addControl("token", new e.NI(this.token,[])),
                    console.log(this.userAccountString),
                    this.userAccountString && this.resetForm.addControl("user_account", new e.NI(this.userAccountString,[]));
                    const P = this.resetForm.value
                      , x = Object.keys(P);
                    this.authService.resetPassword(P, this.tokenType).subscribe(y=>{
                        var T, A, I, B;
                        y.error ? (this.errorMsg = y.error.message,
                        x.forEach(K=>{}
                        )) : (console.log("reset-data", y.data.encData),
                        this.loggedinModal ? (y.data.encData && this.authService.saveUserDetails(y.data),
                        this.exitLoginModal.emit("updateResetForm")) : (this.successMsg = y.data,
                        this.toastService.toast("Your password has been reset successfully.", 2e3, "green"),
                        (null === (A = null === (T = this.route.snapshot) || void 0 === T ? void 0 : T.queryParams) || void 0 === A ? void 0 : A.returnUrl) ? this.router.navigateByUrl("/auth/login?returnUrl=" + (null === (B = null === (I = this.route.snapshot) || void 0 === I ? void 0 : I.queryParams) || void 0 === B ? void 0 : B.returnUrl)) : this.router.navigateByUrl("/auth/login?returnUrl=/")))
                    }
                    )
                }
                pushErrorFor(P, x) {
                    this.resetForm.controls[P].setErrors({
                        msg: x
                    })
                }
            }
            return C.\u0275fac = function(P) {
                return new (P || C)(r.\u0275\u0275directiveInject(h.F0),r.\u0275\u0275directiveInject(O.e),r.\u0275\u0275directiveInject(h.gz),r.\u0275\u0275directiveInject(e.qu),r.\u0275\u0275directiveInject(t.k),r.\u0275\u0275directiveInject(L.n))
            }
            ,
            C.\u0275cmp = r.\u0275\u0275defineComponent({
                type: C,
                selectors: [["app-reset-password"]],
                hostBindings: function(P, x) {
                    1 & P && r.\u0275\u0275listener("resize", function(T) {
                        return x.onWindowResize(T)
                    }, !1, r.\u0275\u0275resolveWindow)
                },
                inputs: {
                    loggedinModal: "loggedinModal",
                    modalEmail: "modalEmail",
                    modalToken: "modalToken",
                    skipReset: "skipReset"
                },
                outputs: {
                    exitLoginModal: "exitLoginModal"
                },
                decls: 53,
                vars: 9,
                consts: [[2, "padding-bottom", "40px"], [1, "menu"], [1, "d2c-container"], [1, "icon"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "alt", "Unstop Logo", "height", "32", "width", "80"], [1, "d-flex"], ["routerLink", "/auth/login", 1, "active", "mr-15"], ["routerLink", "/auth/signup"], [1, "header", "d2c-container"], [1, "hdng"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/unstop-bg.svg", "alt", "Connecting Unstoppable Talent with the World", "width", "", "height", ""], [1, "right_sect"], [1, "item"], ["id", "content", "data-hook", ""], ["id", "existing-customer", "data-hook", "login", 1, "panel-body"], [1, "form-title", "mb-15"], ["class", "main_error mb-15 success", 4, "ngIf"], ["class", "error_mesg mb-15", 4, "ngIf"], [1, "login_form", "clearfix", 3, "formGroup", "ngSubmit"], ["loginForm", "ngForm"], [1, "input_fields"], ["for", "email"], ["type", "email", "name", "email", "placeholder", "Enter Your Email", "formControlName", "email", "autocomplete", "off", "id", "email", 1, "login-user-input"], ["class", "error", 4, "ngIf"], ["for", "passwrd"], ["type", "password", "id", "passwrd", "name", "password", "placeholder", "Enter New Password", "formControlName", "password", "autocomplete", "off", 1, "login-user-input"], ["class", "error error_block", 4, "ngIf"], ["for", "passwrd_confrim"], ["id", "passwrd_confrim", "type", "password", "name", "password_confirmation", "placeholder", "Confirm Your Password", "formControlName", "password_confirmation", "autocomplete", "off", 1, "login-user-input"], [1, "input_field"], ["type", "hidden", "name", "token", "autocomplete", "off", 1, "login-user-input", 3, "value"], ["type", "submit", 1, "btn", "login-button", "full-width", 3, "disabled"], ["type", "button", "class", "btn  skip_button", 3, "click", 4, "ngIf"], [1, "main_error", "mb-15", "success"], [1, "material-icons"], [1, "error_mesg", "mb-15"], ["alt", "Error", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/error.svg"], [1, "error"], [1, "error", "error_block"], ["type", "button", 1, "btn", "skip_button", 3, "click"]],
                template: function(P, x) {
                    if (1 & P && (r.\u0275\u0275elementStart(0, "section", 0),
                    r.\u0275\u0275elementStart(1, "div", 1),
                    r.\u0275\u0275elementStart(2, "div", 2),
                    r.\u0275\u0275elementStart(3, "div", 3),
                    r.\u0275\u0275element(4, "img", 4),
                    r.\u0275\u0275elementStart(5, "span"),
                    r.\u0275\u0275text(6, " Formerly "),
                    r.\u0275\u0275elementStart(7, "strong"),
                    r.\u0275\u0275text(8, "Dare2Compete"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(9, "div", 5),
                    r.\u0275\u0275elementStart(10, "a", 6),
                    r.\u0275\u0275text(11, " Login "),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(12, "a", 7),
                    r.\u0275\u0275text(13, " Sign up "),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(14, "div", 8),
                    r.\u0275\u0275elementStart(15, "div", 9),
                    r.\u0275\u0275elementStart(16, "h1"),
                    r.\u0275\u0275text(17, " Connecting Unstoppable Talent with the World "),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275element(18, "img", 10),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(19, "div", 11),
                    r.\u0275\u0275elementStart(20, "div", 12),
                    r.\u0275\u0275elementStart(21, "div", 13),
                    r.\u0275\u0275elementStart(22, "div", 14),
                    r.\u0275\u0275elementStart(23, "div", 15),
                    r.\u0275\u0275elementStart(24, "h2"),
                    r.\u0275\u0275text(25, "Reset Password"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(26, "p"),
                    r.\u0275\u0275text(27, "Create a new password to login your account."),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275template(28, b, 4, 1, "div", 16),
                    r.\u0275\u0275template(29, D, 3, 1, "div", 17),
                    r.\u0275\u0275elementStart(30, "form", 18, 19),
                    r.\u0275\u0275listener("ngSubmit", function() {
                        return x.onSubmit()
                    }),
                    r.\u0275\u0275elementStart(32, "div", 20),
                    r.\u0275\u0275elementStart(33, "label", 21),
                    r.\u0275\u0275text(34, "Email"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275element(35, "input", 22),
                    r.\u0275\u0275template(36, m, 2, 1, "div", 23),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(37, "div", 20),
                    r.\u0275\u0275elementStart(38, "label", 24),
                    r.\u0275\u0275text(39, "Password"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275element(40, "input", 25),
                    r.\u0275\u0275template(41, v, 2, 1, "div", 26),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(42, "div", 20),
                    r.\u0275\u0275elementStart(43, "label", 27),
                    r.\u0275\u0275text(44, "Confirm Password"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275element(45, "input", 28),
                    r.\u0275\u0275template(46, M, 2, 1, "div", 23),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(47, "div", 29),
                    r.\u0275\u0275element(48, "input", 30),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(49, "div", 5),
                    r.\u0275\u0275elementStart(50, "button", 31),
                    r.\u0275\u0275text(51, " Submit "),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275template(52, S, 2, 0, "button", 32),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd()),
                    2 & P) {
                        const y = r.\u0275\u0275reference(31);
                        r.\u0275\u0275advance(28),
                        r.\u0275\u0275property("ngIf", x.successMsg),
                        r.\u0275\u0275advance(1),
                        r.\u0275\u0275property("ngIf", x.errorMsg),
                        r.\u0275\u0275advance(1),
                        r.\u0275\u0275property("formGroup", x.resetForm),
                        r.\u0275\u0275advance(6),
                        r.\u0275\u0275property("ngIf", x.resetForm.get("email").errors && x.resetForm.get("email").touched),
                        r.\u0275\u0275advance(5),
                        r.\u0275\u0275property("ngIf", x.resetForm.get("password").errors && (x.resetForm.get("password").dirty || x.resetForm.get("password").touched)),
                        r.\u0275\u0275advance(5),
                        r.\u0275\u0275property("ngIf", x.resetForm.get("password_confirmation").errors && (x.resetForm.get("password_confirmation").dirty || x.resetForm.get("password_confirmation").touched)),
                        r.\u0275\u0275advance(2),
                        r.\u0275\u0275property("value", x.token),
                        r.\u0275\u0275advance(2),
                        r.\u0275\u0275property("disabled", !y.valid),
                        r.\u0275\u0275advance(2),
                        r.\u0275\u0275property("ngIf", x.skipReset)
                    }
                },
                directives: [z.H, h.yS, j.NgIf, e._Y, e.JL, e.sg, e.Fj, e.JJ, e.u],
                styles: ['section[_ngcontent-%COMP%]{background-color:#fff}@media screen and (max-width: 768px){section[_ngcontent-%COMP%]{justify-content:flex-start}}.d2c-container[_ngcontent-%COMP%]{max-width:1250px}.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:65px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-left:1px solid rgba(39,73,125,.5);padding-left:10px;margin-left:8px;color:#1c4980;font-size:12px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px}.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1c4980;border:1px solid #1C4980;width:120px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:.3s;background:rgba(39,73,125,.1);border-radius:8px;background:#1C4980;color:#fff}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#fff;border-color:#1c4980;color:#1c4980}@media (max-width: 800px){.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{height:53px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:90px;height:34px}}.hdng[_ngcontent-%COMP%]{width:460px;margin-top:20px}.hdng[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-weight:800;font-size:37px;line-height:46px;color:#1c4980}.hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:140%;color:#27497dcc;margin-bottom:0;margin-top:10px}.hdng[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}@media (max-width: 991px){.hdng[_ngcontent-%COMP%]{display:none}}.right_sect[_ngcontent-%COMP%]{width:550px;position:relative;z-index:9;margin-left:auto}@media (max-width: 1200px){.right_sect[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 991px){.right_sect[_ngcontent-%COMP%]{width:400px;width:100%;padding-left:0;max-width:650px;margin:auto}}@media (max-width: 600px){.right_sect[_ngcontent-%COMP%]{min-width:unset}}.item[_ngcontent-%COMP%]{background:#ffffff;border-radius:10px;margin-bottom:25px;padding:20px 25px;width:100%}.item[_ngcontent-%COMP%]:last-child{margin:auto;position:relative}.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{min-height:calc(100vh - 160px);display:flex;flex-direction:column;justify-content:center}@media (max-width: 1100px){.item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 991px){.item[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   #existing-customer[_ngcontent-%COMP%]{display:block;height:100%}}@media (max-width: 800px){.item[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 600px){.item[_ngcontent-%COMP%]{min-width:unset;width:100%}.item.login[_ngcontent-%COMP%]{width:100%}}.header[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;z-index:9;min-height:calc(100vh - 65px)}@media (max-width: 991px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;padding:30px 15px}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding-top:0;min-height:calc(100vh - 150px)}}.other_link[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:#1c4980;margin-top:10px}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1c4980;font-weight:500;transition:.3s;cursor:pointer}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.other_link[_ngcontent-%COMP%]{font-weight:500;color:#3e6493}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .other_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}}.or[_ngcontent-%COMP%]{position:relative;margin:15px 0}.or[_ngcontent-%COMP%]:before, .or[_ngcontent-%COMP%]:after{content:"";height:1px;width:calc(50% - 20px);background:rgba(39,73,125,.2);position:absolute;top:0;margin:auto;bottom:0}.or[_ngcontent-%COMP%]:before{left:0}.or[_ngcontent-%COMP%]:after{right:0}.form-title[_ngcontent-%COMP%]{text-align:center}.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:20px;color:#1c4980;margin-bottom:8px}.form-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#1c4980}.google-btn[_ngcontent-%COMP%]{margin-top:15px}.google-btn[_ngcontent-%COMP%]   .ios-txt[_ngcontent-%COMP%]{width:calc(100% - 100px)}.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px}.login_form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:none;padding:0;margin:0}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#1c4980d9}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{text-transform:lowercase}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(:checked):after{top:20px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#1c4980}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{position:absolute;top:40px;right:20px;color:#4c5d73;cursor:pointer;transition:.3s}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]:hover{color:#0073e6}@media (max-width: 800px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]   .view-pwd[_ngcontent-%COMP%]{top:35px}}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:hover, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input:-webkit-autofill:focus, .login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     input{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container{border:none!important}@media screen and (max-width: 600px){.login_form[_ngcontent-%COMP%]   .input_fields[_ngcontent-%COMP%]     .ngx-mat-tel-input-container   .mat-menu-trigger{top:10px}}.login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     .mat-form-field .mat-select-trigger, .login_form[_ngcontent-%COMP%]   .input_fields.danger[_ngcontent-%COMP%]     input{border-color:#e7183e!important;background:#fff!important}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-select-trigger{height:47px;background-color:#fff!important;border:1px solid rgba(28,73,128,.2)!important;border-radius:8px}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{line-height:50px;padding-left:15px;font-size:14px}@media only screen and (min-width: 801px){.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label{font-weight:400}}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper label .mat-placeholder-required{display:none}.login_form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-label-wrapper .mat-empty{color:#a9a9a9}.login_form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{margin-top:20px;font-weight:500;height:47px;background:#0073E6;border-radius:8px}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:17px;color:#455368;transition:.3s;cursor:pointer}.login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .login_form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#0073e6}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]{position:absolute;right:10px;padding:5px 8px;font-size:12px;top:34px;cursor:pointer;border-radius:6px;transition:.4s;font-weight:500}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:hover{background:#c3daf8}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]:disabled{color:#484848!important;background:#d8d8d8;cursor:not-allowed}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper{line-height:18px;padding:0;color:#484848!important;background-color:transparent!important}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span{min-width:unset}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper .minute{display:none}.login_form[_ngcontent-%COMP%]   .resend-otp[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span em{display:none}.error_mesg[_ngcontent-%COMP%]{background:#d63500;border:1px solid #d63500;box-shadow:0 3px 8px #ef535066;color:#fff;font-size:12px;display:flex;align-items:center;padding:0 15px;bottom:-40px;left:0;border-radius:5px;z-index:9;height:34px;line-height:13px}.error_mesg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:6px;max-width:15px}.child-items[_ngcontent-%COMP%]{margin-top:20px;padding:20px;background:#fff;box-shadow:0 0 12px #0080ff40;border-radius:8px;display:flex;flex-wrap:wrap}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px 10px;border-radius:4px;transition:.4s;display:flex;align-items:center;width:50%}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;display:block}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#1c4980;font-weight:500;margin-bottom:0;transition:.3s;width:calc(100% - 40px);padding-left:15px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#eef4ff}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#0073e6}@media (max-width: 800px){.child-items[_ngcontent-%COMP%]{padding:10px}.child-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;padding:8px}}.apple_btn[_ngcontent-%COMP%]{background:#fff;color:#1c4980;display:flex;align-items:center;font-weight:500;width:100%;box-shadow:none;border:1px solid #d8d8d8;border-radius:4px;font-size:14px;padding:0 10px}.apple_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:40px}.glogin-ios[_ngcontent-%COMP%]{display:flex;background:#fff;color:#1c4980;align-items:center;width:100%;font-weight:500}.glogin-ios[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.glogin-ios[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:40px}.login-modal[_ngcontent-%COMP%]{padding:10px}.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px;min-height:auto}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:100%}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:20px;width:100%}@media (max-width: 600px){.login-modal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:20px}.login-modal[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-modal[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{box-shadow:none;padding:0}}.login-box[_ngcontent-%COMP%]{min-height:calc(100vh - 100px)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{text-align:center;position:absolute;left:60px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:flex-start}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:30px 0}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]{padding:20px;width:100%;margin-bottom:30px}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-item.active .car-item{transform:scale(1)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-dots{bottom:-40px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]{width:100%;transform:scale(.7);transition:.5s ease-in-out}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;width:auto;height:auto;max-height:none;margin:auto}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:36px;line-height:44px;color:#1c4980}@media screen and (max-width: 1200px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{width:calc(100% - 550px);left:30px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{position:static;width:100%}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{max-width:450px;width:100%}}@media screen and (max-width: 600px){.login-box[_ngcontent-%COMP%]{flex-direction:column;height:100%;padding:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:28px}.login-box[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:0}}.h-auto[_ngcontent-%COMP%]{height:100%!important;max-height:unset;min-height:unset!important}', ".error_block[_ngcontent-%COMP%]{position:static;margin-top:-15px;margin-bottom:15px;text-align:right}@media (max-width: 767px){.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{display:none}}"]
            }),
            C
        }
        )();
        class N {
            static MatchPassword(w) {
                if (w.get("password").value == w.get("password_confirmation").value)
                    return null;
                w.get("password_confirmation").setErrors({
                    MatchPassword: !0
                })
            }
        }
    }
}]);
