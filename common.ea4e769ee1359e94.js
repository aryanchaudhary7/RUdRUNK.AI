"use strict";
(self.webpackChunkd2c = self.webpackChunkd2c || []).push([[8592], {
    24708: (M,g,n)=>{
        n.d(g, {
            L: ()=>u
        });
        var e = n(60540)
          , t = n(38053)
          , l = n(52047)
          , r = n(83668)
          , m = n(44522);
        let u = (()=>{
            class _ {
                constructor(s, a) {
                    this.http = s,
                    this.httpService = a
                }
                setOpportunityId(s) {
                    this.opportunity_id = s
                }
                setYear(s) {
                    this.year = s
                }
                registerForOhfNomination(s) {
                    return this.http.post("/api/register-for-ohf-nomination", s).pipe((0,
                    t.U)(d=>d)).pipe((0,
                    l.K)(this.handleError))
                }
                getOhfOpportunity() {
                    let s = "/api/get-ohf-opportunity";
                    return this.year && (s = "/api/get-ohf-opportunity?year=" + this.year),
                    this.http.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                getOhfOrganisers() {
                    let s = "/api/public/get-ohf-organizers";
                    return this.year && (s = "/api/public/get-ohf-organizers?year=" + this.year),
                    this.http.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                getOhfRounds(s) {
                    let a = "/api/get-ohf-rounds?filter=" + s + "&year=2022";
                    return this.year && (a = "/api/get-ohf-rounds?filter=" + s + "&year=" + this.year),
                    this.http.get(a).pipe((0,
                    t.U)(d=>d)).pipe((0,
                    l.K)(this.handleError))
                }
                getMoreResult(s) {
                    return this.httpService.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                handleError(s) {
                    try {
                        return (0,
                        e._)(s)
                    } catch (a) {
                        return (0,
                        e._)(s)
                    }
                }
            }
            return _.\u0275fac = function(s) {
                return new (s || _)(r.\u0275\u0275inject(m.eN),r.\u0275\u0275inject(m.eN))
            }
            ,
            _.\u0275prov = r.\u0275\u0275defineInjectable({
                token: _,
                factory: _.\u0275fac
            }),
            _
        }
        )()
    }
    ,
    19582: (M,g,n)=>{
        n.d(g, {
            I: ()=>u
        });
        var e = n(60540)
          , t = n(38053)
          , l = n(52047)
          , r = n(83668)
          , m = n(44522);
        let u = (()=>{
            class _ {
                constructor(s, a) {
                    this.http = s,
                    this.httpService = a
                }
                setOpportunityId(s) {
                    this.opportunity_id = s
                }
                setYear(s) {
                    this.year = s
                }
                registerForOqfNomination(s) {
                    return this.http.post("/api/register-for-oqf-nomination", s).pipe((0,
                    t.U)(d=>d)).pipe((0,
                    l.K)(this.handleError))
                }
                getOqfOpportunity() {
                    let s = "/api/get-oqf-opportunity";
                    return this.year && (s = "/api/get-oqf-opportunity?year=" + this.year),
                    this.http.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                getOqfOrganisers() {
                    let s = "/api/public/get-oqf-organizers";
                    return this.opportunity_id && (s = "/api/public/get-oqf-organizers?opportunity_id=" + this.opportunity_id),
                    this.http.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                getOqfQuizzes(s) {
                    let a = "/api/get-oqf-quizzes?filter=" + s;
                    return this.opportunity_id && (a = "/api/get-oqf-quizzes?filter=" + s + "&opportunity_id=" + this.opportunity_id),
                    this.http.get(a).pipe((0,
                    t.U)(d=>d)).pipe((0,
                    l.K)(this.handleError))
                }
                getMoreResult(s) {
                    return this.httpService.get(s).pipe((0,
                    t.U)(a=>a)).pipe((0,
                    l.K)(this.handleError))
                }
                handleError(s) {
                    try {
                        return (0,
                        e._)(s)
                    } catch (a) {
                        return (0,
                        e._)(s)
                    }
                }
            }
            return _.\u0275fac = function(s) {
                return new (s || _)(r.\u0275\u0275inject(m.eN),r.\u0275\u0275inject(m.eN))
            }
            ,
            _.\u0275prov = r.\u0275\u0275defineInjectable({
                token: _,
                factory: _.\u0275fac
            }),
            _
        }
        )()
    }
    ,
    34423: (M,g,n)=>{
        n.d(g, {
            f: ()=>t
        });
        var e = n(83668);
        let t = (()=>{
            class l {
                constructor() {}
                readytoRender(m) {
                    setTimeout(function() {
                        window.prerenderReady = !0,
                        console.log("prerender ready")
                    }, m || 0)
                }
            }
            return l.\u0275fac = function(m) {
                return new (m || l)
            }
            ,
            l.\u0275prov = e.\u0275\u0275defineInjectable({
                token: l,
                factory: l.\u0275fac
            }),
            l
        }
        )()
    }
    ,
    97397: (M,g,n)=>{
        n.d(g, {
            R: ()=>r
        });
        var e = n(86019)
          , t = n(74859)
          , l = n(83668);
        let r = (()=>{
            class m {
            }
            return m.\u0275fac = function(_) {
                return new (_ || m)
            }
            ,
            m.\u0275mod = l.\u0275\u0275defineNgModule({
                type: m
            }),
            m.\u0275inj = l.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, t.m]]
            }),
            m
        }
        )()
    }
    ,
    80146: (M,g,n)=>{
        n.d(g, {
            h: ()=>_
        });
        var e = n(86019)
          , t = n(57725)
          , l = n(85293)
          , r = n(23249)
          , m = n(79813)
          , u = n(83668);
        let _ = (()=>{
            class h {
            }
            return h.\u0275fac = function(a) {
                return new (a || h)
            }
            ,
            h.\u0275mod = u.\u0275\u0275defineNgModule({
                type: h
            }),
            h.\u0275inj = u.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, l.y, r.g, t.Bz, m.bB]]
            }),
            h
        }
        )()
    }
    ,
    78190: (M,g,n)=>{
        n.d(g, {
            S: ()=>u
        });
        var e = n(60540)
          , t = n(38053)
          , l = n(52047)
          , r = n(83668)
          , m = n(44522);
        let u = (()=>{
            class _ {
                constructor(s, a) {
                    this.http = s,
                    this.httpService = a
                }
                sendParticipationCertificateAll(s, a) {
                    return this.httpService.post("/api/certificates/opportunity/" + s + "/send-participation-certificates", a).pipe((0,
                    t.U)(o=>o, (0,
                    l.K)(this.handleError)))
                }
                sendWinnernCertificateAll(s, a) {
                    return this.httpService.post("/api/certificates/opportunity/" + s + "/send-winner-certificates", a).pipe((0,
                    t.U)(o=>o, (0,
                    l.K)(this.handleError)))
                }
                sendCertificateToRoundWinners(s, a) {
                    return this.httpService.post("/api/certificates/association/" + s + "/send-winner-certificates", a).pipe((0,
                    t.U)(o=>o, (0,
                    l.K)(this.handleError)))
                }
                sendCertificateToRoundParticipents(s, a) {
                    return this.httpService.post("/api/certificates/association/" + s + "/send-participation-certificates", a).pipe((0,
                    t.U)(o=>o, (0,
                    l.K)(this.handleError)))
                }
                getGeneratedCertificates(s, a, d, o="") {
                    return this.httpService.get("/api/certificates/" + a + "/" + s + "/get-certificates?page=" + d + o).pipe((0,
                    t.U)(c=>c, (0,
                    l.K)(this.handleError)))
                }
                sendGeneratedCertificates(s, a) {
                    return this.httpService.get("/api/certificates/" + a + "/" + s + "/send-certificates").pipe((0,
                    t.U)(o=>o, (0,
                    l.K)(this.handleError)))
                }
                updateLogosConfig(s) {
                    return this.httpService.post("/api/certificates/opportunity/update-logos-config", s).pipe((0,
                    t.U)(d=>d, (0,
                    l.K)(this.handleError)))
                }
                updateCertificatetype(s) {
                    return this.httpService.post("/api/certificates/opportunity/update-certificate-config", s).pipe((0,
                    t.U)(d=>d, (0,
                    l.K)(this.handleError)))
                }
                getCertificatetemplates(s) {
                    return this.httpService.get("/api/certificates/opportunity/list-certificate-templates?type=" + s).pipe((0,
                    t.U)(d=>d, (0,
                    l.K)(this.handleError)))
                }
                getCertificateJobStatus(s) {
                    return this.httpService.get("/api/certificates/job_status/" + s).pipe((0,
                    t.U)(d=>d, (0,
                    l.K)(this.handleError)))
                }
                getCertPdfView(s) {
                    return this.httpService.get(s).pipe((0,
                    t.U)(a=>a, (0,
                    l.K)(this.handleError)))
                }
                handleError(s) {
                    try {
                        return (0,
                        e._)(s)
                    } catch (a) {
                        return (0,
                        e._)(s)
                    }
                }
            }
            return _.\u0275fac = function(s) {
                return new (s || _)(r.\u0275\u0275inject(m.eN),r.\u0275\u0275inject(m.eN))
            }
            ,
            _.\u0275prov = r.\u0275\u0275defineInjectable({
                token: _,
                factory: _.\u0275fac
            }),
            _
        }
        )()
    }
    ,
    55055: (M,g,n)=>{
        n.d(g, {
            g: ()=>s
        });
        var e = n(38053)
          , t = n(52047)
          , l = n(60540)
          , r = n(95599)
          , m = n(39357)
          , u = n(83668)
          , _ = n(44522)
          , h = n(53010);
        let s = (()=>{
            class a {
                constructor(o, i, c) {
                    this.http = o,
                    this.localStorageService = i,
                    this.store = c
                }
                getMentorDashboard() {
                    return this.http.get("/api/mentorship/get-mentor-dashboard").pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getMentorDashboardSessions() {
                    return this.http.get("/api/mentorship/get-mentor-dashboard-sessions").pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getMentorSessionDetails(o) {
                    return this.http.get("/api/mentorship/get-mentor-sessions-details/" + o).pipe((0,
                    e.U)(c=>c)).pipe((0,
                    t.K)(this.handleError))
                }
                getMentorProfile() {
                    return this.http.get("/api/mentorship/get-mentor-profile").pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getTopMentors() {
                    return this.http.get("/api/mentorship/get-top-mentors").pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                updateMentorProfile(o) {
                    return this.http.post("/api/mentorship/update-mentor-profile", o).pipe((0,
                    e.U)(c=>c)).pipe((0,
                    t.K)(this.handleError))
                }
                getReviews(o) {
                    return this.http.get("/api/mentorship/reviews/" + o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getServices() {
                    return this.http.get("/api/mentorship/get-mentor-services").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                updateService(o) {
                    return this.http.post("/api/mentorship/update-mentor-service", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                deleteService(o) {
                    return this.http.get("/api/mentorship/delete-mentor-service/" + o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getServiceDetails(o) {
                    return this.http.get("/api/mentorship/service/" + o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getApplicationDetails() {
                    return this.http.get("/api/mentorship/get-application-details").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                getSkills() {
                    return this.http.get("/api/mentorship/get-mentor-skills").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                updateSkills(o) {
                    return this.http.post("/api/mentorship/update-mentor-skills", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getDefaultSkillsAndQuestions(o) {
                    return this.http.post("/api/mentorship/get-default-skills-and-questions", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                updateApplication(o) {
                    return this.http.post("/api/mentorship/update-application-details", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                updateMentorEducation(o) {
                    return this.http.post("/api/mentorship/update-mentor-education", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                updateMentorWorkExperience(o) {
                    return this.http.post("/api/mentorship/update-mentor-experience", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                deleteMentorEducation(o) {
                    return this.http.post("/api/mentorship/delete-mentor-education", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                deleteMentorExperience(o) {
                    return this.http.post("/api/mentorship/delete-mentor-experience", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                uploadAvatar(o) {
                    return this.http.post("/api/mentorship/upload-mentor-avatar", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getSchedules() {
                    return this.http.get("/api/mentorship/get-mentor-schedules").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                updateSchedules(o) {
                    return this.http.post("/api/mentorship/update-mentor-schedules", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getUnavailableSchedule() {
                    return this.http.get("/api/mentorship/get-mentor-unavailable-schedules").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                updateUnavailableSchedules(o) {
                    return this.http.post("/api/mentorship/update-mentor-unavailable-schedules", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getPaymentDetails() {
                    return this.http.get("/api/mentorship/get-mentor-payment-details").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                updatePaymentDetails(o) {
                    return this.http.post("/api/mentorship/update-mentor-payment-details", o).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                getCompletePayments() {
                    return this.http.get("/api/mentorship/get-mentor-complete-payment").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                getPendingPayments() {
                    return this.http.get("/api/mentorship/get-mentor-pending-payment").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                getFeedbackStats() {
                    return this.http.get("/api/mentorship/get-mentor-feedback-stats").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                getLanguages() {
                    return this.http.get("/api/mentorship/languages-for-mentor").pipe((0,
                    e.U)(o=>o)).pipe((0,
                    t.K)(this.handleError))
                }
                rescheduleByMentor(o) {
                    return this.http.get(`/api/mentorship/reschedule-by-mentor/${o}`).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                checkUsernameAvailability(o) {
                    return this.http.get(`/api/mentorship/check-mentor-username-availability/${o}`).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                generateSharableImage(o) {
                    return this.http.get(`/api/mentorship/generate-mentor-shareable-image?regenerate=${o}`).pipe((0,
                    e.U)(i=>i)).pipe((0,
                    t.K)(this.handleError))
                }
                updateReferral(o, i, c) {
                    let f = this.localStorageService.getItem("ref")
                      , p = this.getCurrentUser();
                    if (f && o) {
                        let E = {
                            ref_id: f,
                            user_id: p,
                            entity_id: o,
                            entity_type: i,
                            action: c,
                            client_id: localStorage.getItem("clientId"),
                            players_count: 0,
                            time_zone: (new Intl.DateTimeFormat).resolvedOptions().timeZone
                        };
                        this.http.post("/api/campaign/update-medium-action", E).subscribe(C=>{
                            console.log(C)
                        }
                        )
                    }
                }
                getCurrentUser() {
                    let o = null;
                    return this.store.select(m.T).subscribe(i=>{
                        this.userLoggedIn = i,
                        i && this.localStorageService.getEncItem("currentUser") && (o = this.localStorageService.getEncItem("currentUser").id)
                    }
                    ),
                    o
                }
                handleError(o) {
                    try {
                        return (0,
                        l._)(o)
                    } catch (i) {
                        return (0,
                        l._)(o)
                    }
                }
            }
            return a.\u0275fac = function(o) {
                return new (o || a)(u.\u0275\u0275inject(_.eN),u.\u0275\u0275inject(r.n),u.\u0275\u0275inject(h.yh))
            }
            ,
            a.\u0275prov = u.\u0275\u0275defineInjectable({
                token: a,
                factory: a.\u0275fac,
                providedIn: "root"
            }),
            a
        }
        )()
    }
    ,
    52045: (M,g,n)=>{
        n.d(g, {
            D: ()=>s
        });
        var e = n(45423)
          , t = n(41073)
          , l = n(67686)
          , r = n(83668)
          , m = n(7336)
          , u = n(86019);
        function _(a, d) {
            1 & a && (r.\u0275\u0275elementStart(0, "div", 13),
            r.\u0275\u0275element(1, "img", 14),
            r.\u0275\u0275elementEnd())
        }
        function h(a, d) {
            1 & a && (r.\u0275\u0275elementStart(0, "div", 13),
            r.\u0275\u0275element(1, "img", 15),
            r.\u0275\u0275elementEnd())
        }
        let s = (()=>{
            class a {
                constructor(o) {
                    this.authService = o
                }
                onWindowResize() {
                    this.viewport = window.innerWidth > 800 ? "desktop" : "mobile"
                }
                ngOnDestroy() {}
                ngOnInit() {
                    this.onWindowResize()
                }
            }
            return a.\u0275fac = function(o) {
                return new (o || a)(r.\u0275\u0275directiveInject(l.e))
            }
            ,
            a.\u0275cmp = r.\u0275\u0275defineComponent({
                type: a,
                selectors: [["app-our-numbers"]],
                hostBindings: function(o, i) {
                    1 & o && r.\u0275\u0275listener("resize", function(f) {
                        return i.onWindowResize(f)
                    }, !1, r.\u0275\u0275resolveWindow)
                },
                features: [r.\u0275\u0275ProvidersFeature([e.Y, t.o])],
                decls: 41,
                vars: 2,
                consts: [[1, "our-numbers", "blue-dot-arrow"], [1, "d2c-container"], [1, "section-ttl"], [1, "align-center"], ["src", "https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27", "alt", "", "width", "34px", "height", "25px"], [1, "numbers-by-group", "align-center"], [1, "numbers-item", "vertical-align", "users"], [1, "numbers-item", "vertical-align", "opportunities"], [1, "numbers-item", "vertical-align", "organisations"], ["class", "vertical-align", 4, "ngIf"], [1, "numbers-item", "vertical-align", "assessments"], [1, "numbers-item", "vertical-align", "trust"], [1, "numbers-item", "vertical-align", "countries"], [1, "vertical-align"], ["src", "https://cdn.unstop.com/uploads/images/home/digit-right.png?d=462x376", "alt", "Digit", "width", "236", "height", "200"], ["src", "https://cdn.unstop.com/uploads/images/home/digit-left.png?d=462x376", "alt", "Digit", "width", "236", "height", "200"]],
                template: function(o, i) {
                    1 & o && (r.\u0275\u0275elementStart(0, "section", 0),
                    r.\u0275\u0275elementStart(1, "div", 1),
                    r.\u0275\u0275elementStart(2, "div", 2),
                    r.\u0275\u0275elementStart(3, "h2", 3),
                    r.\u0275\u0275text(4, "Our "),
                    r.\u0275\u0275elementStart(5, "strong"),
                    r.\u0275\u0275text(6, "Numbers"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275element(7, "img", 4),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(8, "div", 5),
                    r.\u0275\u0275elementStart(9, "div", 6),
                    r.\u0275\u0275elementStart(10, "h3"),
                    r.\u0275\u0275text(11, "~5 Mn"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(12, "span"),
                    r.\u0275\u0275text(13, "Active Users"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(14, "div", 7),
                    r.\u0275\u0275elementStart(15, "h3"),
                    r.\u0275\u0275text(16, "130K+"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(17, "span"),
                    r.\u0275\u0275text(18, "Opportunities"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(19, "div", 8),
                    r.\u0275\u0275elementStart(20, "h3"),
                    r.\u0275\u0275text(21, "42K+"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(22, "span"),
                    r.\u0275\u0275text(23, "Organisations"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275template(24, _, 2, 0, "div", 9),
                    r.\u0275\u0275template(25, h, 2, 0, "div", 9),
                    r.\u0275\u0275elementStart(26, "div", 10),
                    r.\u0275\u0275elementStart(27, "h3"),
                    r.\u0275\u0275text(28, "22.3 Mn+"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(29, "span"),
                    r.\u0275\u0275text(30, "Assessments"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(31, "div", 11),
                    r.\u0275\u0275elementStart(32, "h3"),
                    r.\u0275\u0275text(33, "500+"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(34, "span"),
                    r.\u0275\u0275text(35, "Brands trust us"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(36, "div", 12),
                    r.\u0275\u0275elementStart(37, "h3"),
                    r.\u0275\u0275text(38, "78+"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementStart(39, "span"),
                    r.\u0275\u0275text(40, "Countries"),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd(),
                    r.\u0275\u0275elementEnd()),
                    2 & o && (r.\u0275\u0275advance(24),
                    r.\u0275\u0275property("ngIf", "desktop" == i.viewport),
                    r.\u0275\u0275advance(1),
                    r.\u0275\u0275property("ngIf", "desktop" == i.viewport))
                },
                directives: [m.H, u.NgIf],
                styles: ['img[_ngcontent-%COMP%]{max-width:100%;height:auto}.section-ttl[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:28px;line-height:140%;color:#1c4980;margin-bottom:10px}.section-ttl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:140%;color:#1c4980;margin-bottom:0}@media (max-width: 767px){.section-ttl[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;margin-bottom:4px}.section-ttl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}}.our-numbers[_ngcontent-%COMP%]{margin-bottom:100px}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:54px;font-weight:400;line-height:42px}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700;margin-left:8px}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:10px}.our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]{flex-wrap:wrap;margin-top:32px}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]{flex-direction:column;border:1px solid #DDE5EA}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:50px;line-height:50px;margin-top:56px;margin-bottom:24px;position:relative}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";background:#EAE8FB;position:absolute;width:122px;height:122px;bottom:-12px;left:-18px;z-index:-1;border-radius:50%}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:24px;line-height:28px;text-align:center;color:#4aa46d}.our-numbers[_ngcontent-%COMP%]   .numbers-item.users[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#d77b35}.our-numbers[_ngcontent-%COMP%]   .numbers-item.users[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#FEF7E2}.our-numbers[_ngcontent-%COMP%]   .numbers-item.users[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d77b35}.our-numbers[_ngcontent-%COMP%]   .numbers-item.opportunities[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#c85b50}.our-numbers[_ngcontent-%COMP%]   .numbers-item.opportunities[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#F8ECEA}.our-numbers[_ngcontent-%COMP%]   .numbers-item.opportunities[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#c85b50}.our-numbers[_ngcontent-%COMP%]   .numbers-item.organisations[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1c4980}.our-numbers[_ngcontent-%COMP%]   .numbers-item.organisations[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#EAEDF1}.our-numbers[_ngcontent-%COMP%]   .numbers-item.organisations[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1c4980}.our-numbers[_ngcontent-%COMP%]   .numbers-item.assessments[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#6049e4}.our-numbers[_ngcontent-%COMP%]   .numbers-item.assessments[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#EAE8FB}.our-numbers[_ngcontent-%COMP%]   .numbers-item.assessments[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6049e4}.our-numbers[_ngcontent-%COMP%]   .numbers-item.trust[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4aa46d}.our-numbers[_ngcontent-%COMP%]   .numbers-item.trust[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#EBFEF5}.our-numbers[_ngcontent-%COMP%]   .numbers-item.trust[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4aa46d}.our-numbers[_ngcontent-%COMP%]   .numbers-item.countries[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#3171de}.our-numbers[_ngcontent-%COMP%]   .numbers-item.countries[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{background:#D7E8FE}.our-numbers[_ngcontent-%COMP%]   .numbers-item.countries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3171de}@media (max-width: 991px){.our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]{border:1px solid #DDE5EA;border-radius:12px;margin-top:12px}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]{width:33.33%;height:82px;border-radius:0;border:none}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]:nth-child(3) ~ .numbers-item[_ngcontent-%COMP%]{border-top:1px solid #DDE5EA}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]:not(:nth-child(3n)){border-right:1px solid #DDE5EA}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;line-height:18px;margin-top:16px;margin-bottom:10px}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";background:#EAE8FB;position:absolute;width:45px;height:45px;bottom:-8px;left:-8px}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:10px;line-height:12px}}@media (max-width: 767px){.our-numbers[_ngcontent-%COMP%]{margin-bottom:50px}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:16px;line-height:140%}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-left:4px}.our-numbers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:14px;height:auto;margin-left:6px}}@media (min-width: 768px){.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]{height:170px}}@media (min-width: 992px){.our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]   .vertical-align[_ngcontent-%COMP%]:nth-child(4), .our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]   .vertical-align[_ngcontent-%COMP%]:nth-child(5){padding:16px;width:20%;pointer-events:none;position:relative}.our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]   .vertical-align[_ngcontent-%COMP%]:nth-child(4):after, .our-numbers[_ngcontent-%COMP%]   .numbers-by-group[_ngcontent-%COMP%]   .vertical-align[_ngcontent-%COMP%]:nth-child(5):after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:1}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]{width:26.66%;height:222px}.our-numbers[_ngcontent-%COMP%]   .numbers-item[_ngcontent-%COMP%]:nth-child(3) ~ .numbers-item[_ngcontent-%COMP%]{margin-top:-1px}.our-numbers[_ngcontent-%COMP%]   .numbers-item.users[_ngcontent-%COMP%]{border-radius:30px 0 0 30px;border-right:none}.our-numbers[_ngcontent-%COMP%]   .numbers-item.opportunities[_ngcontent-%COMP%]{border-right:none}.our-numbers[_ngcontent-%COMP%]   .numbers-item.organisations[_ngcontent-%COMP%]{border-radius:0 30px 0 0}.our-numbers[_ngcontent-%COMP%]   .numbers-item.assessments[_ngcontent-%COMP%]{border-radius:0 0 0 30px;border-right:none}.our-numbers[_ngcontent-%COMP%]   .numbers-item.trust[_ngcontent-%COMP%]{border-right:none}.our-numbers[_ngcontent-%COMP%]   .numbers-item.countries[_ngcontent-%COMP%]{border-radius:0 30px 30px 0}}']
            }),
            a
        }
        )()
    }
    ,
    59477: (M,g,n)=>{
        n.d(g, {
            E: ()=>u
        });
        var e = n(86019)
          , t = n(57725)
          , l = n(85293)
          , r = n(23249)
          , m = n(83668);
        let u = (()=>{
            class _ {
            }
            return _.\u0275fac = function(s) {
                return new (s || _)
            }
            ,
            _.\u0275mod = m.\u0275\u0275defineNgModule({
                type: _
            }),
            _.\u0275inj = m.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, l.y, r.g, t.Bz]]
            }),
            _
        }
        )()
    }
    ,
    81815: (M,g,n)=>{
        n.r(g),
        n.d(g, {
            SolutionsRoutingModule: ()=>a,
            PagesSolutionsModule: ()=>d
        });
        var e = n(49133)
          , t = n(91594)
          , l = n(79813)
          , r = n(86019)
          , m = n(57725)
          , u = n(23249)
          , _ = n(46397)
          , h = n(83668);
        const s = [{
            path: "event-organizers",
            redirectTo: "talent-acquisition-platform-for-hiring",
            pathMatch: "full"
        }, {
            path: "employers-companies",
            redirectTo: "talent-engagement-platform",
            pathMatch: "full"
        }, {
            path: "colleges",
            redirectTo: "talent-engagement-platform",
            pathMatch: "full"
        }];
        let a = (()=>{
            class o {
            }
            return o.\u0275fac = function(c) {
                return new (c || o)
            }
            ,
            o.\u0275mod = h.\u0275\u0275defineNgModule({
                type: o
            }),
            o.\u0275inj = h.\u0275\u0275defineInjector({
                imports: [[m.Bz.forChild(s)], m.Bz]
            }),
            o
        }
        )()
          , d = (()=>{
            class o {
            }
            return o.\u0275fac = function(c) {
                return new (c || o)
            }
            ,
            o.\u0275mod = h.\u0275\u0275defineNgModule({
                type: o
            }),
            o.\u0275inj = h.\u0275\u0275defineInjector({
                imports: [[r.CommonModule, a, t.Z, l.bB, u.g, e.u5, _.F]]
            }),
            o
        }
        )()
    }
    ,
    95624: (M,g,n)=>{
        n.d(g, {
            c: ()=>a
        });
        var e = n(86019)
          , t = n(74859)
          , l = n(40429)
          , r = n(49133)
          , m = n(2871)
          , u = n(47611)
          , _ = n(51263)
          , h = n(16400)
          , s = n(83668);
        let a = (()=>{
            class d {
            }
            return d.\u0275fac = function(i) {
                return new (i || d)
            }
            ,
            d.\u0275mod = s.\u0275\u0275defineNgModule({
                type: d
            }),
            d.\u0275inj = s.\u0275\u0275defineInjector({
                providers: [_.N],
                imports: [[r.u5, e.CommonModule, t.m, l.j, m.z, u.lQ, h.LD]]
            }),
            d
        }
        )()
    }
    ,
    17169: (M,g,n)=>{
        n.d(g, {
            n: ()=>u
        });
        var e = n(86019)
          , t = n(74859)
          , l = n(40429)
          , r = n(49133)
          , m = n(83668);
        let u = (()=>{
            class _ {
            }
            return _.\u0275fac = function(s) {
                return new (s || _)
            }
            ,
            _.\u0275mod = m.\u0275\u0275defineNgModule({
                type: _
            }),
            _.\u0275inj = m.\u0275\u0275defineInjector({
                providers: [],
                imports: [[r.u5, e.CommonModule, t.m, l.j]]
            }),
            _
        }
        )()
    }
    ,
    89310: (M,g,n)=>{
        n.d(g, {
            y: ()=>a
        });
        var e = n(64762)
          , t = n(83668)
          , l = n(36669)
          , r = n(21978)
          , m = n(86019)
          , u = n(49133);
        function _(d, o) {
            if (1 & d) {
                const i = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 12),
                t.\u0275\u0275elementStart(1, "input", 13),
                t.\u0275\u0275listener("ngModelChange", function(f) {
                    return t.\u0275\u0275restoreView(i).$implicit.checked = f
                })("change", function(f) {
                    return t.\u0275\u0275restoreView(i),
                    t.\u0275\u0275nextContext(2).setReviewRejectMessage(f)
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(2, "label", 14),
                t.\u0275\u0275text(3),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const i = o.$implicit
                  , c = o.index;
                t.\u0275\u0275advance(1),
                t.\u0275\u0275propertyInterpolate1("id", "incomplete-", c, ""),
                t.\u0275\u0275property("ngModel", i.checked),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275propertyInterpolate1("for", "incomplete-", c, ""),
                t.\u0275\u0275advance(1),
                t.\u0275\u0275textInterpolate(i.title)
            }
        }
        const h = function(d) {
            return {
                active: d
            }
        };
        function s(d, o) {
            if (1 & d) {
                const i = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 1),
                t.\u0275\u0275elementStart(1, "div", 2),
                t.\u0275\u0275elementStart(2, "h3"),
                t.\u0275\u0275text(3, "Query for rejection"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(4, "div", 3),
                t.\u0275\u0275template(5, _, 4, 4, "div", 4),
                t.\u0275\u0275elementStart(6, "div", 5),
                t.\u0275\u0275elementStart(7, "div", 6),
                t.\u0275\u0275elementStart(8, "label", 7),
                t.\u0275\u0275text(9, " Reject Reason"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(10, "textarea", 8),
                t.\u0275\u0275listener("ngModelChange", function(f) {
                    return t.\u0275\u0275restoreView(i),
                    t.\u0275\u0275nextContext().finalRejectMessage = f
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(11, "div", 9),
                t.\u0275\u0275elementStart(12, "a", 10),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(i),
                    t.\u0275\u0275nextContext().rejectModel()
                }),
                t.\u0275\u0275text(13, "Cancel"),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementStart(14, "input", 11),
                t.\u0275\u0275listener("click", function() {
                    return t.\u0275\u0275restoreView(i),
                    t.\u0275\u0275nextContext().rejectReview()
                }),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd(),
                t.\u0275\u0275elementEnd()
            }
            if (2 & d) {
                const i = t.\u0275\u0275nextContext();
                t.\u0275\u0275advance(5),
                t.\u0275\u0275property("ngForOf", i.reviewRejectMessages),
                t.\u0275\u0275advance(3),
                t.\u0275\u0275property("ngClass", t.\u0275\u0275pureFunction1(3, h, (null == i.finalRejectMessage ? null : i.finalRejectMessage.length) > 0)),
                t.\u0275\u0275advance(2),
                t.\u0275\u0275property("ngModel", i.finalRejectMessage)
            }
        }
        let a = (()=>{
            class d {
                constructor(i, c) {
                    this.organisationService = i,
                    this.toastService = c,
                    this.finalRejectMessage = "",
                    this.comp_reject = !1,
                    this.isButtonCancelClicked = new t.EventEmitter,
                    this.isButtonSubmitClicked = new t.EventEmitter
                }
                ngOnInit() {
                    this.comp_reject = !1
                }
                setReviewRejectMessage(i) {
                    this.finalRejectMessage = "",
                    this.reviewRejectMessages.forEach(c=>{
                        c.checked && (this.finalRejectMessage += c.message + "\n \n")
                    }
                    )
                }
                getRejectMessages(i) {
                    return (0,
                    e.mG)(this, void 0, void 0, function*() {
                        this.reviewRejectMessages || (yield this.organisationService.getRejectMessages(i).subscribe(c=>{
                            this.reviewRejectMessages = c.data
                        }
                        ))
                    })
                }
                rejectModel() {
                    this.comp_reject = !1,
                    this.finalRejectMessage = "",
                    this.reviewRejectMessages.map(i=>{
                        i.checked = !1
                    }
                    ),
                    this.isButtonCancelClicked.emit("true")
                }
                rejectReview() {
                    this.finalRejectMessage ? (this.isButtonSubmitClicked.emit(this.finalRejectMessage),
                    this.rejectModel()) : this.showToast("Please add some reject reason", 3e3, "red")
                }
                showToast(i, c=3e3, f="") {
                    this.toastService.toast(i, c, f)
                }
                ngOnChanges(i) {
                    i.requestType.currentValue != i.requestType.previousValue && (this.reviewRejectMessages = null,
                    this.getRejectMessages(i.requestType.currentValue))
                }
            }
            return d.\u0275fac = function(i) {
                return new (i || d)(t.\u0275\u0275directiveInject(l.w),t.\u0275\u0275directiveInject(r.k))
            }
            ,
            d.\u0275cmp = t.\u0275\u0275defineComponent({
                type: d,
                selectors: [["app-reject-modal"]],
                inputs: {
                    rejectModalActions: "rejectModalActions",
                    compReject: "compReject",
                    review: "review",
                    index: "index",
                    type: "type",
                    requestType: "requestType"
                },
                outputs: {
                    isButtonCancelClicked: "isButtonCancelClicked",
                    isButtonSubmitClicked: "isButtonSubmitClicked"
                },
                features: [t.\u0275\u0275NgOnChangesFeature],
                decls: 1,
                vars: 1,
                consts: [["id", "rejected-modal", "class", "modal my_model", 4, "ngIf"], ["id", "rejected-modal", 1, "modal", "my_model"], [1, "modal-content", "clearfix"], [1, "row"], ["class", "col s12 m6 input-field", 4, "ngFor", "ngForOf"], [1, "col", "s12", "m12"], [1, "input-field", "textarea-field"], ["for", "reject-text", 1, "reject-text-label", 3, "ngClass"], ["id", "reject-text", 1, "", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "clearfix"], [1, "waves-effect", "waves-green", "btn", "red", "left", "ml-15", 3, "click"], ["type", "submit", "value", "Reject", 1, "right", "modal-action", "modal-close", "waves-effect", "waves-green", "btn", "mr-15", 3, "click"], [1, "col", "s12", "m6", "input-field"], ["type", "checkbox", 1, "filled-in", 3, "ngModel", "id", "ngModelChange", "change"], [3, "for"]],
                template: function(i, c) {
                    1 & i && t.\u0275\u0275template(0, s, 15, 5, "div", 0),
                    2 & i && t.\u0275\u0275property("ngIf", c.rejectModalActions)
                },
                directives: [m.NgIf, m.NgForOf, m.NgClass, u.Fj, u.JJ, u.On, u.Wl],
                styles: [".my_model[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;color:#333;font-weight:500;margin:0;padding-bottom:10px;border-bottom:1px solid #e3e3e3}.my_model[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{border-top:1px solid #e3e3e3}.textarea-field[_ngcontent-%COMP%]{margin-top:40px}.textarea-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{top:0!important}.textarea-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:5px;margin:0;height:150px;resize:none}"]
            }),
            d
        }
        )()
    }
    ,
    71965: (M,g,n)=>{
        n.d(g, {
            o: ()=>r
        });
        var e = n(86019)
          , t = n(49133)
          , l = n(83668);
        let r = (()=>{
            class m {
            }
            return m.\u0275fac = function(_) {
                return new (_ || m)
            }
            ,
            m.\u0275mod = l.\u0275\u0275defineNgModule({
                type: m
            }),
            m.\u0275inj = l.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, t.u5]]
            }),
            m
        }
        )()
    }
    ,
    41708: (M,g,n)=>{
        n.d(g, {
            T: ()=>i
        });
        var e = n(83668)
          , t = n(35427)
          , l = n(86019);
        function r(c, f) {
            if (1 & c) {
                const p = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "button", 2),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(p),
                    e.\u0275\u0275nextContext().showfile()
                }),
                e.\u0275\u0275text(1, "Preview File"),
                e.\u0275\u0275elementEnd()
            }
        }
        function m(c, f) {
            if (1 & c && e.\u0275\u0275element(0, "iframe", 7),
            2 & c) {
                const p = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275styleMap(p.safeStyle),
                e.\u0275\u0275property("src", p.fullUrl, e.\u0275\u0275sanitizeResourceUrl)
            }
        }
        function u(c, f) {
            if (1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275template(1, m, 1, 3, "iframe", 6),
            e.\u0275\u0275elementContainerEnd()),
            2 & c) {
                const p = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", p.fullUrl)
            }
        }
        function _(c, f) {
            if (1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275elementStart(1, "video", 8),
            e.\u0275\u0275element(2, "source", 9),
            e.\u0275\u0275text(3, " Your browser does not support the video tag. "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementContainerEnd()),
            2 & c) {
                const p = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("src", p.url, e.\u0275\u0275sanitizeUrl)
            }
        }
        function h(c, f) {
            if (1 & c && e.\u0275\u0275element(0, "iframe", 11),
            2 & c) {
                const p = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275styleMap(p.safeStyle),
                e.\u0275\u0275property("src", p.safeUrl1, e.\u0275\u0275sanitizeResourceUrl)
            }
        }
        function s(c, f) {
            if (1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275template(1, h, 1, 3, "iframe", 10),
            e.\u0275\u0275elementContainerEnd()),
            2 & c) {
                const p = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", p.safeUrl1)
            }
        }
        function a(c, f) {
            if (1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275elementStart(1, "div", 12),
            e.\u0275\u0275element(2, "img", 13),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementContainerEnd()),
            2 & c) {
                const p = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("src", p.url, e.\u0275\u0275sanitizeUrl)
            }
        }
        function d(c, f) {
            1 & c && (e.\u0275\u0275elementContainerStart(0),
            e.\u0275\u0275elementStart(1, "div", 14),
            e.\u0275\u0275element(2, "img", 15),
            e.\u0275\u0275text(3, " Please click on 'Download File' button to download the zip file. "),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementContainerEnd())
        }
        function o(c, f) {
            if (1 & c && (e.\u0275\u0275elementStart(0, "div", 3),
            e.\u0275\u0275elementContainerStart(1, 4),
            e.\u0275\u0275template(2, u, 2, 1, "ng-container", 5),
            e.\u0275\u0275template(3, _, 4, 1, "ng-container", 5),
            e.\u0275\u0275template(4, s, 2, 1, "ng-container", 5),
            e.\u0275\u0275template(5, a, 3, 1, "ng-container", 5),
            e.\u0275\u0275template(6, d, 4, 0, "ng-container", 5),
            e.\u0275\u0275elementContainerEnd(),
            e.\u0275\u0275elementEnd()),
            2 & c) {
                const p = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitch", !0),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitchCase", "pptx" == p.fileType || "ppt" == p.fileType || "docx" == p.fileType || "doc" == p.fileType),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitchCase", "mp4" == p.fileType || "m4v" == p.fileType || "avi" == p.fileType || "mov" == p.fileType),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitchCase", "pdf" == p.fileType.toLowerCase()),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitchCase", "jpg" == p.fileType || "png" == p.fileType || "jpeg" == p.fileType || "gif" == p.fileType),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngSwitchCase", "zip" == p.fileType || "rar" == p.fileType)
            }
        }
        let i = (()=>{
            class c {
                constructor(p, E) {
                    this.domSanitizer = p,
                    this.ngZone = E,
                    this.configuredViewer = "office",
                    this.loaded = new e.EventEmitter,
                    this.googleCheckInterval = 3e3,
                    this.viewFile = !1,
                    this.autoLoad = !1,
                    this.safeStyle || (this.safeStyle = this.domSanitizer.bypassSecurityTrustStyle("width:100%;height:50vh;"))
                }
                set style(p) {
                    this.safeStyle = this.domSanitizer.bypassSecurityTrustStyle(p)
                }
                set viewer(p) {
                    const E = p.toLowerCase().trim();
                    "google" !== E && "office" !== E && console.error(`Unsupported viewer: '${p}'. Supported viewers: google, office`),
                    this.configuredViewer = E
                }
                ngOnDestroy() {
                    this.checkIFrameSubscription && this.checkIFrameSubscription.unsubscribe()
                }
                ngOnChanges(p) {
                    (p.url && p.url.currentValue !== p.url.previousValue || p.viewer && p.viewer.currentValue !== p.viewer.previousValue) && p.url && this.autoLoad && setTimeout(()=>{
                        this.showfile()
                    }
                    , 500)
                }
                showfile() {
                    const p = this.url.indexOf("/") ? encodeURIComponent(this.url) : this.url;
                    this.fileType = p.split(".").pop(),
                    console.log(this.fileType),
                    ("pptx" == this.fileType || "ppt" == this.fileType || "docx" == this.fileType || "doc" == this.fileType) && (this.fullUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("google" === this.configuredViewer ? `https://docs.google.com/gview?url=${p}&embedded=true` : `https://view.officeapps.live.com/op/embed.aspx?src=${p}`)),
                    "pdf" == this.fileType && (this.safeUrl1 = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/gview?url=${this.url}&embedded=true`)),
                    this.viewFile = !0
                }
                checkIFrame(p) {}
                reloadIFrame(p) {}
            }
            return c.\u0275fac = function(p) {
                return new (p || c)(e.\u0275\u0275directiveInject(t.H7),e.\u0275\u0275directiveInject(e.NgZone))
            }
            ,
            c.\u0275cmp = e.\u0275\u0275defineComponent({
                type: c,
                selectors: [["d2c-doc-viewer"]],
                inputs: {
                    url: "url",
                    googleCheckInterval: "googleCheckInterval",
                    style: "style",
                    viewer: "viewer",
                    autoLoad: "autoLoad"
                },
                outputs: {
                    loaded: "loaded"
                },
                features: [e.\u0275\u0275NgOnChangesFeature],
                decls: 2,
                vars: 2,
                consts: [["class", "d2c_btn", 3, "click", 4, "ngIf"], ["class", "file-viewer", 4, "ngIf"], [1, "d2c_btn", 3, "click"], [1, "file-viewer"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["id", "iframe", "frameBorder", "0", 3, "style", "src", 4, "ngIf"], ["id", "iframe", "frameBorder", "0", 3, "src"], ["width", "320", "height", "240", "controls", ""], ["type", "video/mp4", 3, "src"], ["id", "iframe1", "frameBorder", "0", 3, "style", "src", 4, "ngIf"], ["id", "iframe1", "frameBorder", "0", 3, "src"], [1, "image-wrapper"], ["alt", "Unstop submission image", 3, "src"], [1, "zip-file", "vertical-align"], ["src", "https://d8it4huxumps7.cloudfront.net/uploads/images/manage-registrations/zip-icon.svg", "alt", "Zip"]],
                template: function(p, E) {
                    1 & p && (e.\u0275\u0275template(0, r, 2, 0, "button", 0),
                    e.\u0275\u0275template(1, o, 7, 6, "div", 1)),
                    2 & p && (e.\u0275\u0275property("ngIf", !E.viewFile),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", E.viewFile))
                },
                directives: [l.NgIf, l.NgSwitch, l.NgSwitchCase],
                styles: ["video[_ngcontent-%COMP%]{width:100%;height:320px;background:#000}#iframe1[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;overflow:scroll;-webkit-box-pack:center;-webkit-box-align:center;display:-webkit-box}iframe[_ngcontent-%COMP%]{width:100%;height:75vh!important}.image-wrapper[_ngcontent-%COMP%]{padding:5px;height:auto;min-height:200px}.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.zip-file[_ngcontent-%COMP%]{height:200px;flex-direction:column;color:#5a6b87}.zip-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;margin-bottom:18px}.file-viewer[_ngcontent-%COMP%]{min-height:250px;box-shadow:0 0 12px #0000001a;border-radius:5px;background:#fff}"]
            }),
            c
        }
        )()
    }
    ,
    87064: (M,g,n)=>{
        n.d(g, {
            N: ()=>m
        });
        var e = n(86019)
          , t = n(40429)
          , l = n(23249)
          , r = n(83668);
        let m = (()=>{
            class u {
            }
            return u.\u0275fac = function(h) {
                return new (h || u)
            }
            ,
            u.\u0275mod = r.\u0275\u0275defineNgModule({
                type: u
            }),
            u.\u0275inj = r.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, t.j, l.g]]
            }),
            u
        }
        )()
    }
    ,
    37971: (M,g,n)=>{
        n.r(g),
        n.d(g, {
            PointsHistoryModule: ()=>u
        });
        var e = n(86019)
          , t = n(45538)
          , l = n(74859)
          , r = n(40429)
          , m = n(83668);
        let u = (()=>{
            class _ {
            }
            return _.\u0275fac = function(s) {
                return new (s || _)
            }
            ,
            _.\u0275mod = m.\u0275\u0275defineNgModule({
                type: _
            }),
            _.\u0275inj = m.\u0275\u0275defineInjector({
                imports: [[e.CommonModule, t.k, l.m, r.j]]
            }),
            _
        }
        )()
    }
    ,
    33731: (M,g,n)=>{
        n.d(g, {
            $e: ()=>t,
            s5: ()=>l,
            xX: ()=>r,
            Ym: ()=>u
        });
        var e = n(69814);
        const t = (0,
        e.X$)("fadeInDown", [(0,
        e.eR)(":enter", [(0,
        e.jt)("600ms linear", (0,
        e.F4)([(0,
        e.oB)({
            transform: "translate3d(0, -50px, 0)",
            height: "0%",
            overflow: "hidden",
            offset: 0
        }), (0,
        e.oB)({
            opacity: 1,
            transform: "none",
            height: "100%",
            overflow: "visible",
            offset: 1
        })]))]), (0,
        e.eR)(":leave", [(0,
        e.jt)("400ms linear", (0,
        e.F4)([(0,
        e.oB)({
            opacity: 1,
            offset: 0
        }), (0,
        e.oB)({
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
            offset: 1
        })]))])])
          , l = (0,
        e.X$)("expandHeight", [(0,
        e.eR)(":enter", [(0,
        e.jt)("1000ms linear", (0,
        e.F4)([(0,
        e.oB)({
            height: "0",
            overflow: "hidden",
            offset: 0
        }), (0,
        e.oB)({
            height: "100%",
            overflow: "hidden",
            offset: 1
        })]))]), (0,
        e.eR)(":leave", [(0,
        e.jt)("1000ms linear", (0,
        e.F4)([(0,
        e.oB)({
            height: "100%",
            overflow: "hidden",
            offset: 0
        }), (0,
        e.oB)({
            height: "0",
            overflow: "hidden",
            offset: 1
        })]))])])
          , r = (0,
        e.X$)("animateHeight", [(0,
        e.eR)(":enter", [(0,
        e.jt)("800ms ease-in", (0,
        e.F4)([(0,
        e.oB)({
            maxHeight: "0",
            overflow: "hidden",
            opacity: "0",
            offset: 0
        }), (0,
        e.oB)({
            maxHeight: "200px",
            overflow: "hidden",
            opacity: "0.6",
            offset: .5
        }), (0,
        e.oB)({
            maxHeight: "600px",
            overflow: "visible",
            opacity: "1",
            offset: 1
        })]))]), (0,
        e.eR)(":leave", [(0,
        e.jt)("100ms ease-out", (0,
        e.F4)([(0,
        e.oB)({
            maxHeight: "600px",
            overflow: "visible",
            opacity: "1",
            offset: 0
        }), (0,
        e.oB)({
            maxHeight: "0",
            overflow: "hidden",
            offset: 1
        })]))])])
          , u = ((0,
        e.X$)("slideLeftRight", [(0,
        e.eR)(":enter", [(0,
        e.jt)("600ms ease-in", (0,
        e.F4)([(0,
        e.oB)({
            transform: "transitionX(-100%)",
            opacity: "0",
            offset: 0
        }), (0,
        e.oB)({
            transform: "transitionX(0%)",
            opacity: "1",
            offset: 1
        })]))]), (0,
        e.eR)(":leave", [(0,
        e.jt)("100ms ease-out", (0,
        e.F4)([(0,
        e.oB)({
            transform: "transitionX(0%)",
            opacity: "1",
            offset: 0
        }), (0,
        e.oB)({
            transform: "transitionX(-100%)",
            opacity: "1",
            offset: 1
        })]))])]),
        (0,
        e.X$)("slideIn", [(0,
        e.SB)("*", (0,
        e.oB)({
            transform: "scale(1,0)",
            transformOrigin: "top",
            opacity: 0
        })), (0,
        e.SB)("in", (0,
        e.oB)({
            transform: "scale(1,1)",
            transformOrigin: "top",
            opacity: 1
        })), (0,
        e.eR)("* => in", (0,
        e.jt)("400ms ease-in")), (0,
        e.eR)("in => *", (0,
        e.jt)("400ms ease-out"))]))
    }
    ,
    80180: (M,g,n)=>{
        n.d(g, {
            Q: ()=>l
        });
        var e = n(83668)
          , t = n(35427);
        let l = (()=>{
            class r {
                constructor(u) {
                    this.domSanitizer = u
                }
                transform(u, _) {
                    return this.domSanitizer.bypassSecurityTrustResourceUrl(u)
                }
            }
            return r.\u0275fac = function(u) {
                return new (u || r)(e.\u0275\u0275directiveInject(t.H7, 16))
            }
            ,
            r.\u0275pipe = e.\u0275\u0275definePipe({
                name: "safeUrl",
                type: r,
                pure: !0
            }),
            r
        }
        )()
    }
}]);
