"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[6598], {
    3520: (M,b,a)=>{
        a.d(b, {
            n: ()=>h
        });
        var t = a(60540)
          , o = a(38053)
          , m = a(52047)
          , d = a(83668)
          , f = a(44522);
        let h = (()=>{
            class g {
                constructor(r) {
                    this.httpService = r
                }
                sendSmsOtp(r, c, _) {
                    let O = null;
                    return c && (O = {
                        resend_type: _
                    }),
                    this.httpService.post("/api/user/mobile/otp/save", r, {
                        params: O
                    }).pipe((0,
                    o.U)(P=>P)).pipe((0,
                    m.K)(this.handleError))
                }
                sendEmailOtp(r, c) {
                    return this.httpService.post("/api/user/create-with-email", r).pipe((0,
                    o.U)(x=>x)).pipe((0,
                    m.K)(this.handleError))
                }
                resendEmailOtp(r) {
                    return this.httpService.post("/api/user/create-with-email", r).pipe((0,
                    o.U)(u=>u)).pipe((0,
                    m.K)(this.handleError))
                }
                handleError(r) {
                    try {
                        return (0,
                        t._)(r)
                    } catch (c) {
                        return (0,
                        t._)(r)
                    }
                }
                sendVerificationEmailForOpp(r) {
                    return this.httpService.get("/api/user/verify-email?opId=" + r).pipe((0,
                    o.U)(_=>_)).pipe((0,
                    m.K)(this.handleError))
                }
                verifyRegistrationEmailOtp(r, c) {
                    return this.httpService.post("/api/user/verify-email-otp", {
                        otp: r,
                        email: c
                    }).pipe((0,
                    o.U)(x=>x)).pipe((0,
                    m.K)(this.handleError))
                }
                verifyRegistrationMobileOtp(r, c) {
                    return this.httpService.post("/api/user/verify-mobile-otp/", {
                        otp: r,
                        email: c
                    }).pipe((0,
                    o.U)(x=>x)).pipe((0,
                    m.K)(this.handleError))
                }
            }
            return g.\u0275fac = function(r) {
                return new (r || g)(d.\u0275\u0275inject(f.eN))
            }
            ,
            g.\u0275prov = d.\u0275\u0275defineInjectable({
                token: g,
                factory: g.\u0275fac,
                providedIn: "root"
            }),
            g
        }
        )()
    }
    ,
    90287: (M,b,a)=>{
        a.d(b, {
            k: ()=>tt
        });
        var t = a(83668)
          , o = a(67686)
          , m = a(39357)
          , d = a(95599)
          , f = a(77976)
          , h = a(44522)
          , g = a(53010)
          , p = a(57725)
          , r = a(3520)
          , c = a(86019)
          , _ = a(49133)
          , u = a(7336)
          , x = a(79813)
          , O = a(69334)
          , P = a(10635);
        function v(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275element(1, "img", 20),
            t.\u0275\u0275elementEnd())
        }
        function E(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275element(1, "img", 21),
            t.\u0275\u0275elementEnd())
        }
        function w(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275element(1, "img", 22),
            t.\u0275\u0275elementEnd())
        }
        function S(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275element(1, "img", 23),
            t.\u0275\u0275elementEnd())
        }
        function y(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 19),
            t.\u0275\u0275element(1, "img", 24),
            t.\u0275\u0275elementEnd())
        }
        function D(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 12),
            t.\u0275\u0275elementStart(1, "div", 13),
            t.\u0275\u0275element(2, "img", 14),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(3, "div", 15),
            t.\u0275\u0275elementStart(4, "owl-carousel-o", 16, 17),
            t.\u0275\u0275template(6, v, 2, 0, "ng-template", 18),
            t.\u0275\u0275template(7, E, 2, 0, "ng-template", 18),
            t.\u0275\u0275template(8, w, 2, 0, "ng-template", 18),
            t.\u0275\u0275template(9, S, 2, 0, "ng-template", 18),
            t.\u0275\u0275template(10, y, 2, 0, "ng-template", 18),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275element(11, "app-unstop-stats"),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("options", e.slider)
            }
        }
        function I(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 26),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).hideLoginPanel()
                }),
                t.\u0275\u0275text(1, "close "),
                t.\u0275\u0275elementEnd()
            }
        }
        function L(n, l) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, I, 2, 0, "div", 25),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.hasSticky)
            }
        }
        function T(n, l) {
            1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275elementStart(1, "em", 28),
            t.\u0275\u0275text(2, "keyboard_arrow_left"),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275text(3, " Back "),
            t.\u0275\u0275elementContainerEnd())
        }
        function A(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "div", 27),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext().hideOtpPanel()
                }),
                t.\u0275\u0275template(2, T, 4, 0, "ng-container", 5),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngIf", (e.showActivationEmail || e.showActivationMobile) && !e.emailVerified)
            }
        }
        function U(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 29),
            t.\u0275\u0275elementStart(1, "h2"),
            t.\u0275\u0275text(2, " Verify your account "),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementStart(3, "p"),
            t.\u0275\u0275text(4, " We will send you a One-Time Password to your preferred medium. "),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        function k(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "p"),
            t.\u0275\u0275text(1, " Please enter the OTP sent to your email "),
            t.\u0275\u0275elementStart(2, "strong"),
            t.\u0275\u0275text(3),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275text(4, ". "),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate1("(", e.loginForm.email, ")")
            }
        }
        function R(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "p"),
            t.\u0275\u0275text(1, " Please enter the verification code sent to your mobile "),
            t.\u0275\u0275elementStart(2, "strong"),
            t.\u0275\u0275text(3),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275text(4, ". "),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(3),
                t.\u0275\u0275textInterpolate1("(", e.loginForm.mobile, ")")
            }
        }
        function V(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 30),
            t.\u0275\u0275elementStart(1, "h2"),
            t.\u0275\u0275text(2, " OTP Verification "),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275template(3, k, 5, 1, "p", 5),
            t.\u0275\u0275template(4, R, 5, 1, "p", 5),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", e.showActivationEmail && !e.emailVerified),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.showActivationMobile)
            }
        }
        function F(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "div", 31),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate1(" Too many attempts. Please try again after ", e.timeErr, ". ")
            }
        }
        function K(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "div", 33),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).sendEmailOtp()
                }),
                t.\u0275\u0275text(2, " Verify Via Email "),
                t.\u0275\u0275elementStart(3, "em", 28),
                t.\u0275\u0275text(4, "mail_outline"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(5, "span"),
                t.\u0275\u0275text(6),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(6),
                t.\u0275\u0275textInterpolate(null == e.loginForm ? null : e.loginForm.email)
            }
        }
        function z(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 34),
            t.\u0275\u0275elementStart(1, "span"),
            t.\u0275\u0275text(2, " or "),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        function B(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "div", 33),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).sendSmsOtp()
                }),
                t.\u0275\u0275text(2, " Verify Via Mobile "),
                t.\u0275\u0275elementStart(3, "em", 28),
                t.\u0275\u0275text(4, "phone_iphone"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(5, "span"),
                t.\u0275\u0275text(6),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(6),
                t.\u0275\u0275textInterpolate(null == e.loginForm ? null : e.loginForm.mobile)
            }
        }
        function W(n, l) {
            if (1 & n && (t.\u0275\u0275elementContainerStart(0),
            t.\u0275\u0275template(1, K, 7, 1, "ng-container", 5),
            t.\u0275\u0275template(2, z, 3, 0, "div", 32),
            t.\u0275\u0275template(3, B, 7, 1, "ng-container", 5),
            t.\u0275\u0275elementContainerEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.showEmail),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.showEmail && e.showMobile),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.showMobile)
            }
        }
        function j(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 43),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate(e.otpErrorEmail)
            }
        }
        function N(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "app-timer", 44),
                t.\u0275\u0275listener("timerEnd", function(s) {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).timerEnd(s, "email")
                }),
                t.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275property("duration", e.otpDisableDurationEmail)
            }
        }
        function H(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "button", 45),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).sendEmailOtp(!0)
                }),
                t.\u0275\u0275text(1, " Resend OTP "),
                t.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275property("disabled", e.disableOTPResendEmail)
            }
        }
        function J(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "button", 46),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).verifyLogin("email")
                }),
                t.\u0275\u0275text(1, "Verify Email"),
                t.\u0275\u0275elementEnd()
            }
        }
        function Y(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "div", 35),
                t.\u0275\u0275elementStart(2, "input", 36),
                t.\u0275\u0275listener("ngModelChange", function(s) {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext().e_otp = s
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(3, "em", 28),
                t.\u0275\u0275text(4, "mail_outline"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(5, j, 2, 1, "span", 37),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(6, "div", 38),
                t.\u0275\u0275elementStart(7, "div", 39),
                t.\u0275\u0275text(8, " Didn't receive SMS? Resend in "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(9, N, 1, 1, "app-timer", 40),
                t.\u0275\u0275template(10, H, 2, 1, "button", 41),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(11, J, 2, 0, "button", 42),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngModel", e.e_otp),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", e.otpErrorEmailStatus),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", e.otpDisableDurationEmail > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.otpDisableDurationEmail < 1),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", !e.emailVerified)
            }
        }
        function X(n, l) {
            if (1 & n && (t.\u0275\u0275elementStart(0, "span", 43),
            t.\u0275\u0275text(1),
            t.\u0275\u0275elementEnd()),
            2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate(e.otpErrorMobile)
            }
        }
        function G(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "app-timer", 44),
                t.\u0275\u0275listener("timerEnd", function(s) {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).timerEnd(s, "mobile")
                }),
                t.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275property("duration", e.otpDisableDurationMobile)
            }
        }
        function Q(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 49),
                t.\u0275\u0275elementStart(1, "button", 45),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).sendSmsOtp(!0, "Text")
                }),
                t.\u0275\u0275text(2, " Resend via text "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(3, "button", 45),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext(2).sendSmsOtp(!0, "Voice")
                }),
                t.\u0275\u0275text(4, " Resend via voice "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext(2);
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("disabled", e.disableOTPResendMobile),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("disabled", e.disableOTPResendMobile)
            }
        }
        function Z(n, l) {
            if (1 & n) {
                const e = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementContainerStart(0),
                t.\u0275\u0275elementStart(1, "div", 35),
                t.\u0275\u0275elementStart(2, "input", 47),
                t.\u0275\u0275listener("ngModelChange", function(s) {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext().m_otp = s
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(3, "em", 28),
                t.\u0275\u0275text(4, "phone_iphone"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(5, X, 2, 1, "span", 37),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(6, "div", 38),
                t.\u0275\u0275elementStart(7, "div", 39),
                t.\u0275\u0275text(8, " Didn't receive SMS? Resend in "),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275template(9, G, 1, 1, "app-timer", 40),
                t.\u0275\u0275template(10, Q, 5, 2, "div", 48),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(11, "button", 46),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(e),
                    t.\u0275\u0275nextContext().verifyLogin("mobile")
                }),
                t.\u0275\u0275text(12, "Verify Mobile No."),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const e = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngModel", e.m_otp),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngIf", e.otpErrorMobileStatus),
                t.\u0275\u0275advance(4),
                t.\u0275\u0275property("ngIf", e.otpDisableDurationMobile > 0),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275property("ngIf", e.otpDisableDurationMobile < 1)
            }
        }
        function $(n, l) {
            1 & n && (t.\u0275\u0275elementStart(0, "div", 50),
            t.\u0275\u0275text(1, " Don't have an account? "),
            t.\u0275\u0275elementStart(2, "a", 51),
            t.\u0275\u0275text(3, " Login "),
            t.\u0275\u0275elementEnd(),
            t.\u0275\u0275elementEnd())
        }
        const q = function(n) {
            return {
                pop_up: n
            }
        };
        let tt = (()=>{
            class n {
                constructor(e, i, s, C, et, nt, ot, it) {
                    this.renderer = e,
                    this.http = i,
                    this.authService = s,
                    this.localStorageService = C,
                    this.store = et,
                    this.router = nt,
                    this.otpService = ot,
                    this.helper = it,
                    this.loginPanel = !0,
                    this.loginForm = {
                        name: "",
                        email: "",
                        mobile: null
                    },
                    this.verifyStep = "email",
                    this.showActivationEmail = !1,
                    this.showActivationMobile = !1,
                    this.otpErrorEmail = "Please enter a valid verification code",
                    this.otpErrorMobile = "Please enter a valid verification code",
                    this.otpErrorEmailStatus = !1,
                    this.otpErrorMobileStatus = !1,
                    this.enableSocialLogins = !1,
                    this.emailVerified = !1,
                    this.mobileVerified = !1,
                    this.otpDisableDurationEmail = 0,
                    this.disableOTPResendEmail = !1,
                    this.otpDisableDurationMobile = 0,
                    this.disableOTPResendMobile = !1,
                    this.userLoggedIn = !1,
                    this.isAdmin = !1,
                    this.hasSticky = !1,
                    this.email = null,
                    this.mobile = null,
                    this.showEmail = !0,
                    this.showMobile = !0,
                    this.canRemove = !0,
                    this.closeIcon = !1,
                    this.verified = new t.EventEmitter,
                    this.canceled = new t.EventEmitter,
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
                ngOnInit() {
                    this.getCurrentUser(),
                    this.email && (this.loginForm.email = this.email),
                    this.mobile && (this.loginForm.mobile = this.mobile)
                }
                hideLoginPanel() {
                    this.canRemove && this.canceled.emit()
                }
                hideOtpPanel() {
                    this.showActivationEmail = this.showActivationMobile = !1
                }
                trimNumericChars(e) {
                    const i = e.which ? e.which : e.keyCode;
                    i >= 48 && i <= 57 && e.preventDefault()
                }
                emitVerified() {
                    console.log("verified-email:", this.emailVerified, this.mobileVerified),
                    (this.emailVerified || this.mobileVerified) && this.verified.emit("")
                }
                sendEmailOtp(e=!1) {
                    this.otpDisableDurationEmail = 60,
                    this.disableOTPResendEmail = !0,
                    this.otpService.sendEmailOtp(this.loginForm, e).subscribe(i=>{
                        console.log(i.data.status),
                        i.data.status ? this.showActivationEmail = i.data.status : !i.data.status && 429 == i.data.status_code && (this.timeErr = i.data.msg)
                    }
                    )
                }
                sendSmsOtp(e=!1, i="Text") {
                    this.otpDisableDurationMobile = 60,
                    this.disableOTPResendMobile = !0,
                    console.log(this.loginForm),
                    this.otpService.sendSmsOtp(this.loginForm, e, i).subscribe(s=>{
                        console.log(s.data.status),
                        s.data.status ? this.showActivationMobile = s.data.status : !s.data.status && 429 == s.data.status_code && (this.timeErr = s.data.msg)
                    }
                    )
                }
                redirectToLogin() {
                    this.router.navigateByUrl("/auth/login")
                }
                verifyLogin(e) {
                    this.e_otp && "" != this.e_otp || this.m_otp && "" != this.m_otp ? (this.otpErrorEmailStatus = !1,
                    this.otpErrorMobileStatus = !1,
                    this.showActivationEmail && "email" == e && this.authService.verifyOTP({
                        otp: this.e_otp,
                        email: this.loginForm.email
                    }).subscribe(s=>{
                        s.id ? (this.emailVerified = !0,
                        this.emitVerified()) : (this.otpErrorEmailStatus = !0,
                        this.otpErrorEmail = s.data.msg)
                    }
                    ),
                    this.showActivationMobile && "mobile" == e && this.authService.verifyOTP({
                        otp: this.m_otp,
                        email: this.loginForm.email
                    }, "mobile").subscribe(s=>{
                        s.id ? (this.mobileVerified = !0,
                        this.emitVerified()) : (this.otpErrorMobileStatus = !0,
                        this.otpErrorMobile = s.data.msg)
                    }
                    )) : (this.otpErrorEmailStatus = !0,
                    this.otpErrorMobileStatus = !0)
                }
                redirectIfUserLoggedIn() {
                    this.store.select(m.T).subscribe(e=>{
                        !0 === e && (this.loginPanel = this.showActivationEmail = this.showActivationMobile = !1,
                        this.hideLoginPanel(),
                        this.showActivationEmail = this.showActivationMobile = !1)
                    }
                    )
                }
                timerEnd(e, i) {
                    console.log(e, i),
                    "email" == i ? (this.otpDisableDurationEmail = 0,
                    this.disableOTPResendEmail = !1) : (this.otpDisableDurationMobile = 0,
                    this.disableOTPResendMobile = !1)
                }
                getCurrentUser() {
                    this.store.select(m.T).subscribe(e=>{
                        this.userLoggedIn = e,
                        this.userLoggedIn && this.localStorageService.getEncItem("currentUser") && (this.currentUser = this.localStorageService.getEncItem("currentUser"),
                        this.loginForm.email = this.currentUser.email,
                        this.loginForm.mobile = this.currentUser.mobile,
                        this.loginForm.name = this.currentUser.name,
                        this.isAdmin = !1,
                        console.log(this.currentUser),
                        this.currentUser.userRole && this.currentUser.userRole.length > 0 && this.currentUser.userRole.forEach(i=>{
                            "admin" == i.name && (this.isAdmin = !0)
                        }
                        ),
                        console.log(this.loginForm),
                        this.loginForm.mobile.startsWith("+91") && (this.loginForm.mobile = this.loginForm.mobile.replace("+91", "")),
                        this.loginForm.mobile = +this.loginForm.mobile,
                        this.emailVerified && this.isAdmin && (this.mobileVerified ? this.verified.emit() : this.verifyStep = "mobile"))
                    }
                    )
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.\u0275\u0275directiveInject(t.Renderer2),t.\u0275\u0275directiveInject(h.eN),t.\u0275\u0275directiveInject(o.e),t.\u0275\u0275directiveInject(d.n),t.\u0275\u0275directiveInject(g.yh),t.\u0275\u0275directiveInject(p.F0),t.\u0275\u0275directiveInject(r.n),t.\u0275\u0275directiveInject(f.W_))
            }
            ,
            n.\u0275cmp = t.\u0275\u0275defineComponent({
                type: n,
                selectors: [["login-dialogue"]],
                inputs: {
                    userLoggedIn: "userLoggedIn",
                    currentUser: "currentUser",
                    isAdmin: "isAdmin",
                    hasSticky: "hasSticky",
                    email: "email",
                    mobile: "mobile",
                    showEmail: "showEmail",
                    showMobile: "showMobile",
                    canRemove: "canRemove",
                    closeIcon: "closeIcon"
                },
                outputs: {
                    verified: "verified",
                    canceled: "canceled"
                },
                decls: 17,
                vars: 13,
                consts: [[1, "login-panel-bg", 3, "ngClass"], [1, "login-box", "d2c-container"], ["class", "login-carousel", 4, "ngIf"], [1, "right_sect"], [1, "item"], [4, "ngIf"], [1, "full-width"], ["class", "sub_hdng", 4, "ngIf"], ["class", "sub_hdng mb-30", 4, "ngIf"], ["class", "d2c_alert danger mb-30", 4, "ngIf"], ["formLogin", "ngForm"], ["class", "other_link", 4, "ngIf"], [1, "login-carousel"], ["routerLink", "/"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg", "alt", "Unstop", 1, "logo"], [1, "carousel"], [1, "team-carousel", 3, "options"], ["owlElement", ""], ["carouselSlide", ""], [1, "car-item"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f5b24c1d_login_1.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f71aba10_login_2.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f7c11db9_login_3.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f8bc048d_login_4.png?d=686x858"], ["noloading", "true", "src", "https://d8it4huxumps7.cloudfront.net/uploads/images/63cf9f9b3c016_login_5.png?d=686x858"], ["class", "material-icons close_icon", 3, "click", 4, "ngIf"], [1, "material-icons", "close_icon", 3, "click"], [1, "back_icon", 3, "click"], [1, "material-icons"], [1, "sub_hdng"], [1, "sub_hdng", "mb-30"], [1, "d2c_alert", "danger", "mb-30"], ["class", "or_box", 4, "ngIf"], [1, "input_box", 3, "click"], [1, "or_box"], [1, "input_fields", "verify_input"], ["type", "password", "name", "otp", "id", "pwd", "placeholder", "Enter 6 digit OTP", 3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "otp_timer"], [1, "p"], ["class", "timer", 3, "duration", "timerEnd", 4, "ngIf"], ["class", "cursor-pointer waves-effect", 3, "disabled", "click", 4, "ngIf"], ["class", "d2c_btn waves-effect", 3, "click", 4, "ngIf"], [1, "error"], [1, "timer", 3, "duration", "timerEnd"], [1, "cursor-pointer", "waves-effect", 3, "disabled", "click"], [1, "d2c_btn", "waves-effect", 3, "click"], ["name", "mobileotp", "type", "password", "id", "pswd", "placeholder", "Enter 6 digit OTP", 3, "ngModel", "ngModelChange"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], [1, "other_link"], ["routerLink", "/auth/login"]],
                template: function(e, i) {
                    1 & e && (t.\u0275\u0275elementStart(0, "section", 0),
                    t.\u0275\u0275elementStart(1, "div", 1),
                    t.\u0275\u0275template(2, D, 12, 1, "div", 2),
                    t.\u0275\u0275elementStart(3, "div", 3),
                    t.\u0275\u0275elementStart(4, "div", 4),
                    t.\u0275\u0275template(5, L, 2, 1, "ng-container", 5),
                    t.\u0275\u0275template(6, A, 3, 1, "ng-container", 5),
                    t.\u0275\u0275elementStart(7, "div", 6),
                    t.\u0275\u0275template(8, U, 5, 0, "div", 7),
                    t.\u0275\u0275template(9, V, 5, 2, "div", 8),
                    t.\u0275\u0275template(10, F, 2, 1, "div", 9),
                    t.\u0275\u0275elementStart(11, "form", null, 10),
                    t.\u0275\u0275template(13, W, 4, 3, "ng-container", 5),
                    t.\u0275\u0275template(14, Y, 12, 5, "ng-container", 5),
                    t.\u0275\u0275template(15, Z, 13, 4, "ng-container", 5),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275template(16, $, 4, 0, "div", 11),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd(),
                    t.\u0275\u0275elementEnd()),
                    2 & e && (t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(11, q, !i.hasSticky)),
                    t.\u0275\u0275advance(2),
                    t.\u0275\u0275property("ngIf", i.hasSticky),
                    t.\u0275\u0275advance(3),
                    t.\u0275\u0275property("ngIf", !i.closeIcon),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", i.hasSticky),
                    t.\u0275\u0275advance(2),
                    t.\u0275\u0275property("ngIf", !i.showActivationEmail && !i.showActivationMobile && !i.emailVerified),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", (i.showActivationEmail || i.showActivationMobile) && !i.emailVerified),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", i.timeErr),
                    t.\u0275\u0275advance(3),
                    t.\u0275\u0275property("ngIf", !i.showActivationEmail && !i.showActivationMobile),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", i.showActivationEmail && !i.emailVerified),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", i.showActivationMobile && !i.mobileVerified),
                    t.\u0275\u0275advance(1),
                    t.\u0275\u0275property("ngIf", i.hasSticky))
                },
                directives: [c.NgClass, c.NgIf, _._Y, _.JL, _.F, p.rH, u.H, x.Fy, x.Mp, O.X, _.Fj, _.JJ, _.On, P.K, p.yS],
                styles: ['.login-panel-bg[_ngcontent-%COMP%]{position:fixed;z-index:9999999;background:#ffffff;top:0px;left:0px;width:100%;height:100vh;overflow:hidden;overflow-y:auto}.d2c-container[_ngcontent-%COMP%]{max-width:1250px}.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:65px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:center}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-left:1px solid rgba(39,73,125,.5);padding-left:10px;margin-left:8px;color:#1c4980;font-size:12px}.menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:13px}.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:1px solid #1C4980;width:120px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;transition:.3s;border-radius:8px;background:#1C4980;color:#fff}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#fff;color:#1c4980}@media (max-width: 800px){.menu[_ngcontent-%COMP%]   .d2c-container[_ngcontent-%COMP%]{height:53px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:90px;height:34px}}.hdng[_ngcontent-%COMP%]{width:460px;margin-top:20px}.hdng[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;font-weight:800;font-size:37px;line-height:46px;color:#1c4980}.hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:15px;line-height:140%;color:#27497dcc;margin-bottom:0;margin-top:10px}.hdng[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;display:block}@media (max-width: 991px){.hdng[_ngcontent-%COMP%]{display:none}}.right_sect[_ngcontent-%COMP%]{width:calc(100% - 460px);padding-left:220px;position:relative;z-index:9}@media (max-width: 1200px){.right_sect[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 991px){.right_sect[_ngcontent-%COMP%]{width:100%;padding-left:0;margin-top:30px;min-width:500px}}@media (max-width: 600px){.right_sect[_ngcontent-%COMP%]{min-width:unset}}.item[_ngcontent-%COMP%]{background:#ffffff;border-radius:10px;padding:20px 25px;width:480px;margin:auto;position:relative;min-height:calc(100vh - 180px);display:flex;justify-content:space-between;flex-direction:column}@media (max-width: 800px){.item[_ngcontent-%COMP%]{padding:15px}}@media (max-width: 600px){.item[_ngcontent-%COMP%]{min-width:unset;width:100%}}.header[_ngcontent-%COMP%]{padding:30px 0;display:flex;align-items:center;position:relative;z-index:9;min-height:calc(100vh - 65px)}.header[_ngcontent-%COMP%]:after{content:"";background:rgba(48,130,247,.1);width:370px;height:370px;border-radius:50%;position:absolute;right:-200px;top:0;bottom:0;margin:auto;z-index:-1}@media (max-width: 991px){.header[_ngcontent-%COMP%]{flex-wrap:wrap;padding:30px 15px}.header[_ngcontent-%COMP%]:after{top:-180px;display:none}}@media (max-width: 768px){.header[_ngcontent-%COMP%]{padding-top:0}}.back_icon[_ngcontent-%COMP%]{color:#1c4980;font-weight:600;font-size:14px;display:flex;align-items:center;cursor:pointer;margin-bottom:30px;transition:.3s}.back_icon[_ngcontent-%COMP%]:hover{color:#0073e6}.back_icon[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.sub_hdng[_ngcontent-%COMP%]{border-bottom:1px solid #DDE5EA;padding-bottom:30px;margin-bottom:50px;text-align:center}.sub_hdng[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:20px;color:#1c4980;margin-bottom:10px}.sub_hdng[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:17px;margin-bottom:0;color:#3e6493}.input_box[_ngcontent-%COMP%]{height:64px;background:#FFFFFF;border:1px solid #1C4980;border-radius:8px;font-weight:500;font-size:14px;color:#1c4980;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;transition:.3s}.input_box[_ngcontent-%COMP%]:hover{color:#0073e6;border-color:#0073e6}.input_box[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:20px;margin-left:10px}.input_box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:14px;color:#1c4980;position:absolute;top:-10px;background:#fff;line-height:100%;padding:0 10px}.or_box[_ngcontent-%COMP%]{border-bottom:1px dashed #889EBA;margin:30px 0 40px;height:1px;position:relative;text-align:center}.or_box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:-9px;background:#fff;padding:0 10px}.mesg[_ngcontent-%COMP%]{color:#1c4980;font-size:16px;font-weight:400;margin-bottom:20px}.verify_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0;line-height:100%}.verify_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-weight:600;color:#1c4980cc;font-size:14px}.verify_input[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{position:absolute;right:15px;height:48px;display:flex;align-items:center;justify-content:center;top:0;font-size:22px}.verify_input[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:16px;right:45px}.d2c_btn[_ngcontent-%COMP%]{width:100%;height:50px;text-transform:uppercase;margin-top:50px}.otp_timer[_ngcontent-%COMP%]{margin-top:15px;display:flex;align-items:center;justify-content:space-between}.otp_timer[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%]{color:#1c4980;font-size:13px;margin-bottom:0;font-weight:500;text-align:left}.otp_timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 12px;font-size:11px;cursor:pointer;border-radius:8px;transition:.3s;font-weight:500;color:#fff;background:#0073e6;margin-right:5px;border:0;height:30px;display:inline-flex;align-items:center;justify-content:center}.otp_timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.otp_timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#484848!important;background:#d8d8d8;cursor:not-allowed}.otp_timer[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper{width:80px;display:flex;align-items:center;justify-content:center;height:30px;border-radius:8px;font-size:16px;margin:0;padding:0;line-height:100%}.otp_timer[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span{display:flex;align-items:center;margin:0;min-width:auto}.otp_timer[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper span em{font-size:12px;margin-left:5px;line-height:100%}.otp_timer[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]     .timer-wrapper .colon{display:none}@media (max-width: 800px){.otp_timer[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%]{font-size:12px;line-height:15px}.otp_timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 8px}.otp_timer[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{min-width:215px;justify-content:flex-end}}.other_link[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:#1c4980;margin-top:10px;text-align:center;width:100%}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1c4980;font-weight:500;transition:.3s}.other_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#0073e6}.login-panel-bg.pop_up[_ngcontent-%COMP%]{background:rgba(0,0,0,.8)}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{min-height:100vh}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:after{display:none}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:100%;padding-left:0}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]:before, .login-panel-bg.pop_up[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]:after{display:none}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{min-height:auto;max-height:calc(100vh - 180px);overflow:hidden;overflow-y:auto;padding-bottom:30px;padding-top:30px}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .sub_hdng[_ngcontent-%COMP%]{margin-bottom:30px}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .close_icon[_ngcontent-%COMP%]{position:absolute;right:15px;top:12px;font-size:24px;cursor:pointer;color:#1c4980;transition:.3s}.login-panel-bg.pop_up[_ngcontent-%COMP%]   .close_icon[_ngcontent-%COMP%]:hover{color:#0073e6;transform:rotate(90deg)}@media (max-width: 800px){.login-panel-bg.pop_up[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px;max-height:calc(100vh - 60px)}}.fixed-full[_ngcontent-%COMP%]{background:rgba(0,0,0,.4);z-index:999999}.login-box[_ngcontent-%COMP%]{min-height:calc(100vh - 100px)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{text-align:center;position:absolute;left:60px;top:0;bottom:0;width:650px;display:flex;flex-direction:column;justify-content:center}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:100px;margin:30px 0}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]{padding:20px;width:100%;margin-bottom:30px}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-item.active .car-item{transform:scale(1)}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .team-carousel[_ngcontent-%COMP%]     .owl-dots{bottom:-40px}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]{width:100%;transform:scale(.7);transition:.5s ease-in-out}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;width:auto;height:auto;max-height:none;margin:auto}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{width:550px;position:relative;z-index:9;margin-left:auto;padding-left:0;min-height:100vh;display:flex;align-items:center}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:36px;line-height:44px;color:#1c4980}@media screen and (max-width: 1200px){.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:280px}}@media screen and (max-width: 1100px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{width:calc(100% - 550px);left:30px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]{position:static;width:100%}.login-box[_ngcontent-%COMP%]   .car-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px}}@media screen and (max-width: 991px){.login-box[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{max-width:450px;width:100%;margin:auto;min-height:auto}}@media screen and (max-width: 600px){.login-box[_ngcontent-%COMP%]{flex-direction:column;height:100%;padding:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]{margin-top:0}.login-box[_ngcontent-%COMP%]   .right_sect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;line-height:28px}.login-box[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:none}.login-box[_ngcontent-%COMP%]   .login-carousel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:0}}.stats[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:20px;flex-wrap:wrap;padding:30px 15px 15px;position:relative;z-index:9999}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]{position:relative;width:90px;margin-bottom:40px;margin-right:10px}.stats[_ngcontent-%COMP%]   .bubble-stat.yellow-bg[_ngcontent-%COMP%]{color:#d77b35}.stats[_ngcontent-%COMP%]   .bubble-stat.yellow-bg[_ngcontent-%COMP%]:before{background-color:#fef7e2}.stats[_ngcontent-%COMP%]   .bubble-stat.red-bg[_ngcontent-%COMP%]{color:#c85b50}.stats[_ngcontent-%COMP%]   .bubble-stat.red-bg[_ngcontent-%COMP%]:before{background-color:#f8ecea}.stats[_ngcontent-%COMP%]   .bubble-stat.darkblue-bg[_ngcontent-%COMP%]{color:#1c4980}.stats[_ngcontent-%COMP%]   .bubble-stat.darkblue-bg[_ngcontent-%COMP%]:before{background-color:#eaedf1}.stats[_ngcontent-%COMP%]   .bubble-stat.purple-bg[_ngcontent-%COMP%]{color:#6049e4}.stats[_ngcontent-%COMP%]   .bubble-stat.purple-bg[_ngcontent-%COMP%]:before{background-color:#eae8fb}.stats[_ngcontent-%COMP%]   .bubble-stat.green-bg[_ngcontent-%COMP%]{color:#4aa46d}.stats[_ngcontent-%COMP%]   .bubble-stat.green-bg[_ngcontent-%COMP%]:before{background-color:#ebfef5}.stats[_ngcontent-%COMP%]   .bubble-stat.blue-bg[_ngcontent-%COMP%]{color:#3171de}.stats[_ngcontent-%COMP%]   .bubble-stat.blue-bg[_ngcontent-%COMP%]:before{background-color:#d7e8fe}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10px;top:-20px;margin:auto;width:45px;height:45px;border-radius:50%}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:9}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-weight:700;font-size:18px;line-height:18px;display:inline-block;margin-bottom:5px}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-weight:500;font-size:10px;line-height:12px}@media screen and (max-width: 991px){.stats[_ngcontent-%COMP%]{display:none}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]{width:calc(33.33% - 10px)}}']
            }),
            n
        }
        )()
    }
    ,
    53439: (M,b,a)=>{
        a.d(b, {
            H: ()=>g
        });
        var t = a(49133)
          , o = a(86019)
          , m = a(74859)
          , d = a(79813)
          , f = a(19071)
          , h = a(83668);
        let g = (()=>{
            class p {
            }
            return p.\u0275fac = function(c) {
                return new (c || p)
            }
            ,
            p.\u0275mod = h.\u0275\u0275defineNgModule({
                type: p
            }),
            p.\u0275inj = h.\u0275\u0275defineInjector({
                imports: [[o.CommonModule, t.u5, m.m, d.bB, f.Y]]
            }),
            p
        }
        )()
    }
    ,
    69334: (M,b,a)=>{
        a.d(b, {
            X: ()=>h
        });
        var t = a(77976)
          , o = a(83668)
          , m = a(44522)
          , d = a(86019);
        function f(g, p) {
            1 & g && (o.\u0275\u0275elementStart(0, "div", 1),
            o.\u0275\u0275elementStart(1, "div", 2),
            o.\u0275\u0275elementStart(2, "span"),
            o.\u0275\u0275text(3, " ~5 Mn "),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(4, "br"),
            o.\u0275\u0275elementStart(5, "span"),
            o.\u0275\u0275text(6, "Active Users"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementStart(7, "div", 3),
            o.\u0275\u0275elementStart(8, "span"),
            o.\u0275\u0275text(9, " 130K+ "),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(10, "br"),
            o.\u0275\u0275elementStart(11, "span"),
            o.\u0275\u0275text(12, "Opportunitites"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementStart(13, "div", 4),
            o.\u0275\u0275elementStart(14, "span"),
            o.\u0275\u0275text(15, " 42K+ "),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(16, "br"),
            o.\u0275\u0275elementStart(17, "span"),
            o.\u0275\u0275text(18, "Organisations"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementStart(19, "div", 5),
            o.\u0275\u0275elementStart(20, "span"),
            o.\u0275\u0275text(21, " 22.3 Mn+ "),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(22, "br"),
            o.\u0275\u0275elementStart(23, "span"),
            o.\u0275\u0275text(24, "Assessments"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementStart(25, "div", 6),
            o.\u0275\u0275elementStart(26, "span"),
            o.\u0275\u0275text(27, "500 +"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(28, "br"),
            o.\u0275\u0275elementStart(29, "span"),
            o.\u0275\u0275text(30, "Brands trust us"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementStart(31, "div", 7),
            o.\u0275\u0275elementStart(32, "span"),
            o.\u0275\u0275text(33, "78 +"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275element(34, "br"),
            o.\u0275\u0275elementStart(35, "span"),
            o.\u0275\u0275text(36, "countries"),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd(),
            o.\u0275\u0275elementEnd())
        }
        let h = (()=>{
            class g {
                constructor(r, c) {
                    this.http = r,
                    this.helper = c
                }
                ngOnInit() {
                    this.getStats()
                }
                getStats() {
                    this.http.get("/api/public/get-dashboard-widgets-data-new?s=homepage").subscribe(r=>{
                        this.d2cStats = r.data
                    }
                    )
                }
            }
            return g.\u0275fac = function(r) {
                return new (r || g)(o.\u0275\u0275directiveInject(m.eN),o.\u0275\u0275directiveInject(t.W_))
            }
            ,
            g.\u0275cmp = o.\u0275\u0275defineComponent({
                type: g,
                selectors: [["app-unstop-stats"]],
                decls: 1,
                vars: 1,
                consts: [["class", "stats", 4, "ngIf"], [1, "stats"], [1, "bubble-stat", "yellow-bg"], [1, "bubble-stat", "red-bg"], [1, "bubble-stat", "darkblue-bg"], [1, "bubble-stat", "purple-bg"], [1, "bubble-stat", "green-bg"], [1, "bubble-stat", "blue-bg"]],
                template: function(r, c) {
                    1 & r && o.\u0275\u0275template(0, f, 37, 0, "div", 0),
                    2 & r && o.\u0275\u0275property("ngIf", c.d2cStats)
                },
                directives: [d.NgIf],
                styles: ['.stats[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:20px;flex-wrap:wrap;padding:30px 15px 15px;position:relative}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]{position:relative;width:90px;margin-bottom:40px;margin-right:10px}.stats[_ngcontent-%COMP%]   .bubble-stat.yellow-bg[_ngcontent-%COMP%]{color:#d77b35}.stats[_ngcontent-%COMP%]   .bubble-stat.yellow-bg[_ngcontent-%COMP%]:before{background-color:#fef7e2}.stats[_ngcontent-%COMP%]   .bubble-stat.red-bg[_ngcontent-%COMP%]{color:#c85b50}.stats[_ngcontent-%COMP%]   .bubble-stat.red-bg[_ngcontent-%COMP%]:before{background-color:#f8ecea}.stats[_ngcontent-%COMP%]   .bubble-stat.darkblue-bg[_ngcontent-%COMP%]{color:#1c4980}.stats[_ngcontent-%COMP%]   .bubble-stat.darkblue-bg[_ngcontent-%COMP%]:before{background-color:#eaedf1}.stats[_ngcontent-%COMP%]   .bubble-stat.purple-bg[_ngcontent-%COMP%]{color:#6049e4}.stats[_ngcontent-%COMP%]   .bubble-stat.purple-bg[_ngcontent-%COMP%]:before{background-color:#eae8fb}.stats[_ngcontent-%COMP%]   .bubble-stat.green-bg[_ngcontent-%COMP%]{color:#4aa46d}.stats[_ngcontent-%COMP%]   .bubble-stat.green-bg[_ngcontent-%COMP%]:before{background-color:#ebfef5}.stats[_ngcontent-%COMP%]   .bubble-stat.blue-bg[_ngcontent-%COMP%]{color:#3171de}.stats[_ngcontent-%COMP%]   .bubble-stat.blue-bg[_ngcontent-%COMP%]:before{background-color:#d7e8fe}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10px;top:-20px;margin:auto;width:45px;height:45px;border-radius:50%}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;z-index:9}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-weight:700;font-size:18px;line-height:18px;display:inline-block;margin-bottom:5px}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-weight:500;font-size:10px;line-height:12px}@media screen and (max-width: 991px){.stats[_ngcontent-%COMP%]{display:none}.stats[_ngcontent-%COMP%]   .bubble-stat[_ngcontent-%COMP%]{width:calc(33.33% - 10px)}}']
            }),
            g
        }
        )()
    }
    ,
    19071: (M,b,a)=>{
        a.d(b, {
            Y: ()=>m
        });
        var t = a(86019)
          , o = a(83668);
        let m = (()=>{
            class d {
            }
            return d.\u0275fac = function(h) {
                return new (h || d)
            }
            ,
            d.\u0275mod = o.\u0275\u0275defineNgModule({
                type: d
            }),
            d.\u0275inj = o.\u0275\u0275defineInjector({
                imports: [[t.CommonModule]]
            }),
            d
        }
        )()
    }
}]);
