/*! myFocus v2.0.4 | http://cosmissy.com/ */
(function() {
    var q = function(a) {
            return typeof a === 'string' ? document.getElementById(a) : a
        },
        $tag = function(a, b) {
            return (q(b) || document).getElementsByTagName(a)
        },
        $tag_ = function(a, b) {
            return $getChild(a, b, 'tag')
        },
        $class = function(a, b) {
            var c = $tag('*', b),
                arr = [];
            for (var i = 0, l = c.length; i < l; i++) {
                if (hasClass(a, c[i])) {
                    arr.push(c[i])
                }
            }
            return arr
        },
        $class_ = function(a, b) {
            return $getChild(a, b)
        },
        $getChild = function(a, b, c) {
            var d = [],
                fn = c === 'tag' ? $tag : $class,
                doms = fn(a, b),
                len = doms.length;
            for (var i = 0; i < len; i++) {
                if (doms[i].parentNode === b) d.push(doms[i]);
                i += fn(a, doms[i]).length
            }
            return d
        },
        hasClass = function(a, b) {
            return eval('/(^|\\s)' + a + '(\\s|$)/').test(b.className)
        };
    myFocus = function(a) {
        return new myFocus.constr(a)
    };
    myFocus.extend = function() {
        var a = arguments,
            len = a.length;
        if (this === myFocus) {
            if (len === 1) dest = myFocus, i = 0;
            else dest = a[0], i = 1
        } else {
            dest = this, i = 0
        }
        for (i; i < len; i++) {
            for (var p in a[i]) {
                dest[p] = a[i][p]
            }
        }
        return dest
    };
    myFocus.extend({
        defConfig: {
            pattern: 'mF_fancy',
            trigger: 'click',
            txtHeight: 'default',
            wrap: true,
            auto: true,
            time: 4,
            index: 0,
            loadingShow: true,
            delay: 100,
            autoZoom: false,
            onChange: null,
            xmlFile: '',
            __focusConstr__: true
        },
        constr: function(a) {
            var e = a,
                len = e && e.length;
            if (e instanceof myFocus.constr) return e;
            this.length = 0;
            if (!e || (e.sort && !len) || (e.item && !len)) {
                Array.prototype.push.call(this)
            } else if (e.__focusConstr__) {
                e = q(e.id);
                Array.prototype.push.call(this, e);
                this.settings = a;
                this.HTMLUList = $tag('li', $tag('ul', e)[0]);
                this.HTMLUListLength = this.HTMLUList.length
            } else if (len) {
                for (var i = 0; i < len; i++) Array.prototype.push.call(this, e[i])
            } else {
                Array.prototype.push.call(this, e)
            }
            return this
        },
        fn: {
            splice: [].splice
        },
        pattern: {},
        config: {}
    });
    myFocus.constr.prototype = myFocus.fn;
    myFocus.fn.extend = myFocus.pattern.extend = myFocus.config.extend = myFocus.extend;
    myFocus.fn.extend({
        find: function(b) {
            var c = this,
                isChild = false,
                $ = myFocus;
            var d = this.parseSelector(b);
            if (this.length)
                for (var i = 0, len = d.length; i < len; i++) {
                    var f = [],
                        s = d[i];
                    switch (s.charAt(0)) {
                        case '>':
                            isChild = true;
                            break;
                        case '.':
                            var g = s.slice(1);
                            var h = isChild ? $class_ : $class;
                            $(c).each(function() {
                                f = f.concat(h(g, this))
                            });
                            isChild = false;
                            break;
                        case '#':
                            var j = s.slice(1),
                                e = q(j);
                            if (e) f.push(q(j));
                            isChild = false;
                            break;
                        default:
                            var h = isChild ? $tag_ : $tag,
                                sArr = s.split('.');
                            var k = sArr[0],
                                g = sArr[1];
                            $(c).each(function() {
                                var a = h(k, this);
                                for (var i = 0, len = a.length; i < len; i++) {
                                    if (g && !hasClass(g, a[i])) continue;
                                    f.push(a[i])
                                }
                            });
                            isChild = false
                    }
                    if (!isChild) c = f
                }
            return $(c)
        },
        parent: function() {
            return myFocus(this[0].parentNode)
        },
        html: function(s) {
            if (typeof s !== 'undefined') {
                this[0].innerHTML = s;
                return this
            } else return this[0].innerHTML
        },
        each: function(a) {
            var b = this;
            for (var i = 0, len = b.length; i < len; i++) {
                var c = a.call(b[i], i);
                if (c === false) break;
                if (c === true) continue
            }
            return this
        },
        eq: function(n) {
            return myFocus(this[n])
        },
        parseSelector: function(a) {
            var b = /(([^[\]'"]+)+\]|\\.|([^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g;
            var c = [],
                m;
            while ((m = b.exec(a)) !== null) {
                c.push(m[1])
            }
            return c
        },
        wrap: function(a) {
            var o = this[0],
                e = document.createElement('div');
            e.innerHTML = a;
            var b = e.firstChild;
            o.parentNode.replaceChild(b, o);
            b.appendChild(o);
            return this
        },
        addHtml: function(a) {
            var b = this[0];
            var e = document.createElement('div');
            e.innerHTML = a;
            var c = e.childNodes[0];
            b.appendChild(c);
            return myFocus(c)
        },
        addList: function(a, b) {
            var c = this.HTMLUList,
                n = this.HTMLUListLength;
            var d = ['<div class="' + a + '"><ul>'];
            for (var i = 0; i < n; i++) {
                var e = $tag('img', c[i])[0],
                    html;
                switch (b) {
                    case 'num':
                        html = '<a>' + (i + 1) + '</a><b></b>';
                        break;
                    case 'txt':
                        html = e ? c[i].innerHTML.replace(/\<img(.|\n|\r)*?\>/i, e.alt) + '<p>' + e.getAttribute("text") + '</p><b></b>' : '';
                        break;
                    case 'thumb':
                        html = e ? '<a><img src=' + (e.getAttribute("thumb") || e.src) + ' /></a><b></b>' : '';
                        break;
                    default:
                        html = '<a></a><b></b>'
                }
                d.push('<li>' + html + '</li>')
            }
            d.push('</ul></div>');
            return this.addHtml(d.join(''))
        },
        addListNum: function(a) {
            return this.addList(a || 'num', 'num')
        },
        addListTxt: function(a) {
            return this.addList(a || 'txt', 'txt')
        },
        addListThumb: function(a) {
            return this.addList(a || 'thumb', 'thumb')
        },
        remove: function() {
            var o = this[0];
            if (o) o.parentNode.removeChild(o)
        },
        repeat: function(n) {
            var n = n || 2,
                pNode = this[0].parentNode,
                html = pNode.innerHTML,
                s = [];
            for (var i = 0; i < n; i++) s.push(html);
            pNode.innerHTML = s.join('');
            return myFocus(pNode).find(this[0].nodeName)
        }
    });
    myFocus.fn.extend({
        css: function(b) {
            var o = this[0],
                value, arr = [';'],
                isIE = myFocus.isIE;
            if (!o) return this;
            if (typeof b === 'string') {
                if (b === 'float') b = isIE ? 'styleFloat' : 'cssFloat';
                if (!(value = o.style[b])) value = (isIE ? o.currentStyle : getComputedStyle(o, ''))[b];
                if (b === 'opacity' && value === undefined) value = 1;
                if (value === 'auto' && (b === 'width' || b === 'height')) value = o['offset' + b.replace(/\w/i, function(a) {
                    return a.toUpperCase()
                })];
                var c = parseFloat(value);
                return isNaN(c) ? value : c
            } else {
                for (var p in b) {
                    if (typeof b[p] === 'number' && !this.cssNumber[p]) b[p] += 'px';
                    arr.push(p.replace(/([A-Z])/g, '-$1') + ':' + b[p] + ';');
                    if (p === 'opacity') arr.push('filter:alpha(opacity=' + b[p] * 100 + ')')
                }
                o.style.cssText += arr.join('');
                return this
            }
        },
        setOpacity: function(a) {
            this[0].style.opacity = a, this[0].style.filter = 'alpha(opacity=' + a * 100 + ')'
        },
        setAnimateStyle: function(a, b, m) {
            this[0].style[b] = Math[m](a) + 'px'
        },
        addClass: function(a) {
            this[0].className += ' ' + a;
            return this
        },
        removeClass: function(a) {
            var o = this[0],
                cls = a && o.className,
                reg = "/\\s*\\b" + a + "\\b/g";
            o.className = cls ? cls.replace(eval(reg), '') : '';
            return this
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        }
    });
    myFocus.fn.extend({
        animate: function(a, f, g, h, i, j) {
            var k = this,
                o = k[0],
                isOpacity = a === 'opacity',
                diffValue = false;
            i && i.call(o);
            if (typeof f === 'string') {
                if (/^[+-]=\d+/.test(f)) f = f.replace('=', ''), diffValue = true;
                f = parseFloat(f)
            }
            var l = k.css(a),
                b = isNaN(l) ? 0 : l,
                c = diffValue ? f : f - b,
                d = g,
                e = this.easing[h],
                m = c > 0 ? 'ceil' : 'floor',
                timerId = '__myFocusTimer__' + a,
                setProperty = k[isOpacity ? 'setOpacity' : 'setAnimateStyle'],
                origTime = (new Date) * 1;
            o[timerId] && clearInterval(o[timerId]);
            o[timerId] = setInterval(function() {
                var t = (new Date) - origTime;
                if (t <= d) {
                    setProperty.call(k, e(t, b, c, d), a, m)
                } else {
                    setProperty.call(k, b + c, a, m);
                    clearInterval(o[timerId]), o[timerId] = null;
                    j && j.call(o)
                }
            }, 13);
            return this
        },
        fadeIn: function(a, b, c) {
            if (typeof a !== 'number') c = a, a = 400;
            if (typeof b === 'function') c = b, b = '';
            this.animate('opacity', 1, a, b || 'linear', function() {
                myFocus(this).css({
                    display: 'block',
                    opacity: 0
                })
            }, c);
            return this
        },
        fadeOut: function(a, b, c) {
            if (typeof a !== 'number') c = a, a = 400;
            if (typeof b === 'function') c = b, b = '';
            this.animate('opacity', 0, a, b || 'linear', null, function() {
                this.style.display = 'none';
                c && c.call(this)
            });
            return this
        },
        slide: function(a, b, c, d) {
            if (typeof b !== 'number') d = b, b = 800;
            if (typeof c === 'function') d = c, c = '';
            for (var p in a) this.animate(p, a[p], b, c || 'easeOut', null, d);
            return this
        },
        stop: function() {
            var o = this[0];
            for (var p in o)
                if (p.indexOf('__myFocusTimer__') !== -1) o[p] && clearInterval(o[p]);
            return this
        },
        easing: {
            linear: function(t, b, c, d) {
                return c * t / d + b
            },
            swing: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
            },
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b
            },
            easeOut: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b
            },
            easeInOut: function(t, b, c, d) {
                return ((t /= d / 2) < 1) ? (c / 2 * t * t * t * t + b) : (-c / 2 * ((t -= 2) * t * t * t - 2) + b)
            }
        }
    });
    myFocus.fn.extend({
        bind: function(a, b) {
            myFocus.addEvent(this[0], a, b);
            return this
        },
        play: function(b, c, d) {
            var f = this,
                p = f.settings,
                n = f.HTMLUListLength,
                t = p.time * 1000,
                d = d || false,
                float = myFocus(f.HTMLUList).css('float'),
                isLevel = float === 'left',
                direction = isLevel ? 'left' : 'top',
                distance = isLevel ? p.width : p.height,
                indexLast = 0,
                indexCurrent = p.index;
            f.find('.loading').remove();
            f.run = function(a) {
                b && b(indexLast, n);
                indexCurrent = typeof a === 'string' ? indexLast + parseInt(a.replace('=', '')) : a;
                if (indexCurrent <= -1) {
                    indexCurrent = n - 1;
                    if (d) f.HTMLUList[0].parentNode.style[direction] = -n * distance + 'px'
                }
                if (indexCurrent >= n) {
                    if (!d) indexCurrent = 0;
                    if (indexCurrent >= 2 * n) {
                        f.HTMLUList[0].parentNode.style[direction] = -(n - 1) * distance + 'px';
                        indexCurrent = n
                    }
                }
                if (d && indexLast >= n && indexCurrent < n) indexCurrent += n;
                c && c(indexCurrent, n, indexLast);
                f.runIndex = indexLast = indexCurrent;
                p.onChange && p.onChange.call(f, indexCurrent)
            };
            try {
                f.run(indexCurrent)
            } catch (e) {
                setTimeout(function() {
                    f.run(indexCurrent)
                }, 0)
            };
            if (p.auto && n > 1) {
                f.runTimer = setInterval(function() {
                    f.run('+=1')
                }, t);
                f.bind('mouseover', function() {
                    clearInterval(f.runTimer);
                    f.runTimer = 'pause'
                }).bind('mouseout', function() {
                    if (!f.isStop && f.runTimer === 'pause') f.runTimer = setInterval(function() {
                        f.run('+=1')
                    }, t)
                })
            }
            f.find('a').each(function() {
                this.onfocus = function() {
                    this.blur()
                }
            })
        },
        bindControl: function(a, b) {
            var c = this,
                p = c.settings,
                type = p.trigger,
                delay = p.delay,
                par = b || {},
                tsNum = par.thumbShowNum || p.thumbShowNum;
            var d = function() {
                if (this.index !== c.runIndex && !par.isRunning) {
                    c.run(this.index);
                    return false
                }
            };
            a.each(function(i) {
                this.index = i;
                var o = this,
                    $o = myFocus(o);
                if (type === 'click') {
                    $o.bind('mouseover', function() {
                        $o.addClass('hover')
                    }).bind('mouseout', function() {
                        $o.removeClass('hover')
                    }).bind('click', d)
                } else if (type === 'mouseover') {
                    $o.bind('mouseover', function() {
                        if (delay === 0) d.call(o);
                        else a.mouseoverTimer = setTimeout(function() {
                            d.call(o)
                        }, delay)
                    }).bind('mouseout', function() {
                        a.mouseoverTimer && clearTimeout(a.mouseoverTimer)
                    })
                } else {
                    alert('myFocus Error Setting(trigger) : \"' + type + '\"');
                    return false
                }
            });
            if (tsNum) {
                var e = a.css('float'),
                    isLevel = e === 'left' || e === 'right';
                a.dir = isLevel ? 'left' : 'top';
                a.n = c.HTMLUListLength;
                a.showNum = tsNum;
                a.showStart = p.index;
                a.showEnd = a.showStart + tsNum - 1;
                a.distance = a.css(isLevel ? 'width' : 'height');
                a.slideBody = a.parent()
            }
        },
        scrollTo: function(i, a) {
            var n = this.n,
                dir = this.dir,
                $ul = this.slideBody,
                css = {};
            if (i >= this.showEnd) {
                this.showEnd = i < n - 1 ? i + 1 : i;
                this.showStart = this.showEnd - this.showNum + 1
            } else if (i <= this.showStart) {
                this.showStart = i > 0 ? i - 1 : 0;
                this.showEnd = this.showStart + this.showNum - 1
            }
            css[dir] = -this.showStart * this.distance;
            $ul.slide(css, a || 500, 'easeOut');
            return this
        }
    });
    myFocus.extend({
        set: function(p, c) {
            var F = this,
                id = p.id,
                oStyle = F.initBaseCSS(id);
            p.pattern = p.pattern || F.defConfig.pattern;
            p.__clsName = p.pattern + '_' + id;
            F.addEvent(window, 'load', function() {
                F.onloadWindow = true
            });
            F.loadPattern(p, function() {
                p = F.extend({}, F.defConfig, F.config[p.pattern], p);
                F.getBoxReady(p, function() {
                    var b = F(q(id));
                    p.$o = b;
                    p.xmlFile && F.loadXML(p);
                    p.pic = $class('pic', b[0])[0];
                    p.width = p.width || b.css('width'), p.height = p.height || b.css('height');
                    F.initCSS(p, oStyle);
                    b.addClass(p.pattern + ' ' + p.__clsName);
                    F.getIMGReady(p, function(a) {
                        if (p.autoZoom) F.zoomIMG(p, a);
                        F.pattern[p.pattern](p, F);
                        c && c()
                    })
                })
            })
        },
        onloadWindow: false,
        loadPattern: function(p, a) {
            if (this.pattern[p.pattern]) {
                a();
                return
            }
            var b = this.getFilePath() + 'mf-pattern/' + p.pattern;
            var c = document.createElement("script"),
                css = document.createElement("link"),
                src = b + '.js',
                href = b + '.css';
            c.type = "text/javascript", c.src = src;
            css.rel = "stylesheet", css.href = href;
            var d = $tag('head')[0],
                isSuccess = false,
                timeout = 10 * 1000;
            d.appendChild(css);
            d.appendChild(c);
            c.onload = c.onreadystatechange = function() {
                if (isSuccess) return;
                if (!c.readyState || c.readyState == "loaded" || c.readyState == "complete") {
                    isSuccess = true;
                    a();
                    c.onload = c.onreadystatechange = null
                }
            };
            setTimeout(function() {
                if (!isSuccess) q(p.id).innerHTML = '加载失败: ' + src
            }, timeout)
        },
        getFilePath: function() {
            var a = '';
            var b = $tag("script");
            for (var i = 0, len = b.length; i < len; i++) {
                var c = b[i].src;
                if (c && /myfocus([\.-].*)?\.js/i.test(c)) {
                    a = c;
                    break
                }
            };
            return a.slice(0, a.lastIndexOf('/') + 1)
        },
        getBoxReady: function(p, a) {
            var F = this;
            (function() {
                try {
                    if (F.isIE) q(p.id).doScroll();
                    else q(p.id).innerHTML;
                    a()
                } catch (e) {
                    if (!F.onloadWindow) setTimeout(arguments.callee, 0)
                }
            })()
        },
        getIMGReady: function(p, a) {
            var b = p.loadingShow;
            var c = q(p.id),
                img = $tag('img', p.pic),
                len = img.length,
                count = 0,
                done = false,
                arrSize = new Array(len);
            if (!b || !len) {
                a();
                return
            }
            for (var i = 0; i < len; i++) {
                var d = new Image();
                d.i = i;
                d.onload = function() {
                    count += 1;
                    arrSize[this.i] = {
                        w: this.width,
                        h: this.height
                    };
                    if (count == len && !done) {
                        done = true, a(arrSize)
                    }
                };
                d.src = img[i].src
            }
        },
        zoomIMG: function(p, a) {
            var b = $tag('img', p.pic),
                len = b.length,
                boxWidth = p.width,
                boxHeight = p.height;
            for (var i = 0; i < len; i++) {
                var w = a[i].w,
                    h = a[i].h;
                if (w == boxWidth && h == boxHeight) continue;
                if (w < boxWidth && h < boxHeight) {
                    var c = w,
                        height = h,
                        top = (boxHeight - height) / 2
                } else if (w / h >= boxWidth / boxHeight) {
                    var c = boxWidth,
                        height = boxWidth / w * h,
                        top = (boxHeight - height) / 2
                } else {
                    var c = boxHeight / h * w,
                        height = boxHeight,
                        top = 0
                }
                b[i].style.cssText = ';width:' + c + 'px;height:' + height + 'px;margin-top:' + top + 'px;'
            }
        },
        initCSS: function(p, a) {
            var b = [],
                w = p.width || '',
                h = p.height || '';
            if (p.pic) {
                b.push('.' + p.__clsName + ' *{margin:0;padding:0;border:0;list-style:none;}.' + p.__clsName + '{position:relative;width:' + w + 'px;height:' + h + 'px;overflow:hidden;font:12px/1.5 Verdana;text-align:left;background:#fff;visibility:visible!important;}.' + p.__clsName + ' .pic{position:relative;width:' + w + 'px;height:' + h + 'px;overflow:hidden;}.' + p.__clsName + ' .txt li{width:' + w + 'px;height:' + p.txtHeight + 'px!important;overflow:hidden;}');
                if (p.wrap) p.$o.wrap('<div class="' + p.pattern + '_wrap"></div>');
                if (p.autoZoom) b.push('.' + p.__clsName + ' .pic li{text-align:center;width:' + w + 'px;height:' + h + 'px;}')
            }
            try {
                a.styleSheet.cssText = b.join('')
            } catch (e) {
                a.innerHTML = b.join('')
            }
        },
        initBaseCSS: function(a) {
            var s = '#' + a + ' *{display:none}',
                oStyle = document.createElement('style');
            oStyle.type = 'text/css';
            try {
                oStyle.styleSheet.cssText = s
            } catch (e) {
                oStyle.innerHTML = s
            }
            var b = $tag('head', document)[0];
            b.insertBefore(oStyle, b.firstChild);
            return oStyle
        }
    });
    myFocus.extend({
        isIE: !!(document.all && navigator.userAgent.indexOf('Opera') === -1),
        addEvent: function(o, a, b) {
            var c = this.isIE,
                e = c ? 'attachEvent' : 'addEventListener',
                t = (c ? 'on' : '') + a;
            o[e](t, function(e) {
                var e = e || window.event,
                    flag = b.call(o, e);
                if (flag === false) {
                    if (c) e.cancelBubble = true, e.returnValue = false;
                    else e.stopPropagation(), e.preventDefault()
                }
            }, false)
        },
        loadXML: function(p) {
            var a = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLDOM");
            a.open("GET", p.xmlFile + "?" + Math.random(), false);
            a.send(null);
            this.appendXML(a.responseXML, p)
        },
        appendXML: function(a, p) {
            var b = a.documentElement.getElementsByTagName("item"),
                len = b.length;
            var c = ['<div class="loading"></div><div class="pic"><ul>'];
            for (var i = 0; i < len; i++) {
                c.push('<li><a href="' + b[i].getAttribute('href') + '"><img src="' + b[i].getAttribute('image') + '" thumb="' + b[i].getAttribute('thumb') + '" alt="' + b[i].getAttribute('title') + '" text="' + b[i].getAttribute('text') + '" /></a></li>')
            }
            c.push('</ul></div>');
            p.$o[0].innerHTML = c.join('')
        }
    });
    if (typeof jQuery !== 'undefined') {
        jQuery.fn.extend({
            myFocus: function(p, a) {
                if (!p) p = {};
                p.id = this[0].id;
                if (!p.id) p.id = this[0].id = 'mF__ID__';
                myFocus.set(p, a)
            }
        })
    }
})();