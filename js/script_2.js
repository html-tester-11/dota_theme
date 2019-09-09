class DAH {

  constructor(nodes) {
    this.nodes = [];

    Array.prototype.slice.call(nodes, 0).forEach(node => {
      this.nodes.push(new Node(node));
    });

    this._bindEvents();
  }

  _bindEvents() {
    ['_resizeHandler'].forEach(fn => this[fn] = this[fn].bind(this));
    window.addEventListener('resize', this._resizeHandler, false);
  }

  _resizeHandler() {
    this.nodes.forEach(node => node.update());
  }
}

class Node {
  constructor(node) {
    this.element = node;
    this._bindEvents().update();
  }

  update() {
    // const bcr = this.element.getBoundingClientRect();
    // this.l = bcr.left;
    // this.t = bcr.top;
    this.w = this.element.offsetWidth;
    this.h = this.element.offsetHeight;
    this.l = this.element.offsetLeft;
    this.t = this.element.offsetTop;
  }

  _bindEvents() {
    ['_mouseEnterHandler', '_mouseOutHandler'].forEach(fn => this[fn] = this[fn].bind(this));
    this.element.addEventListener('mouseenter', this._mouseEnterHandler, false);
    this.element.addEventListener('mouseout', this._mouseOutHandler, false);
    return this;
  }

  _mouseEnterHandler(ev) {
    this._addClass(ev, 'in');
  }

  _mouseOutHandler(ev) {
    this._addClass(ev, 'out');
  }

  _addClass(ev, state) {
    const direction = this._getDirection(ev);
    let class_suffix = '';

    switch (direction) {
      case 0: class_suffix = '-top'; break;
      case 1: class_suffix = '-right'; break;
      case 2: class_suffix = '-bottom'; break;
      case 3: class_suffix = '-left'; break;
    }

    this.element.className = '';
    this.element.classList.add(state + class_suffix);
  }

  _getDirection(ev) {
    const w = this.w,
      h = this.h,
      x = (ev.pageX - this.l - (w / 2) * (w > h ? (h / w) : 1)),
      y = (ev.pageY - this.t - (h / 2) * (h > w ? (w / h) : 1)),
      d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return d;
  }
}

new DAH(document.querySelectorAll('li'));

var width, height, container, canvas, ctx, points, target, animateHeader = true;

function init() {
  initHeader();
  initAnimation();
  addListeners();
}

function initHeader() {
  width = window.innerWidth;
  height = window.innerHeight;
  target = {
    x: width / 2,
    y: height / 2
  };

  container = document.getElementById('connecting-dots');
  container.style.height = height + 'px';

  canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  // create points
  points = [];
  for (var x = 0; x < width; x = x + width / 20) {
    for (var y = 0; y < height; y = y + height / 20) {
      var px = x + Math.random() * width / 100;
      var py = y + Math.random() * height / 100;
      var p = {
        x: px,
        originX: px,
        y: py,
        originY: py
      };
      points.push(p);
    }
  }

  // for each point find the 5 closest points
  for (var i = 0; i < points.length; i++) {
    var closest = [];
    var p1 = points[i];
    for (var j = 0; j < points.length; j++) {
      var p2 = points[j]
      if (!(p1 == p2)) {
        var placed = false;
        for (var k = 0; k < 5; k++) {
          if (!placed) {
            if (closest[k] == undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
        }

        for (var k = 0; k < 5; k++) {
          if (!placed) {
            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
    }
    p1.closest = closest;
  }

  // assign a circle to each point
  for (var i in points) {
    var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(0 ,0 , 0 ,0.9)');
    points[i].circle = c;
  }
}

// Event handling
function addListeners() {
  if (!('ontouchstart' in window)) {
    window.addEventListener("mousemove", mouseMove);
  }
  window.addEventListener("resize", resize, true);
  window.addEventListener("scroll", scrollCheck);
}

function mouseMove(e) {
  var posx = posy = 0;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  target.x = posx;
  target.y = posy;
}

function scrollCheck() {
  if (document.body.scrollTop > height) animateHeader = false;
  else animateHeader = true;
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  container.style.height = height + 'px';
  ctx.canvas.width = width;
  ctx.canvas.height = height;
}

// animation
function initAnimation() {
  animate();
  for (var i in points) {
    shiftPoint(points[i]);
  }
}

function animate() {
  if (animateHeader) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i in points) {
      // detect points in range
      if (Math.abs(getDistance(target, points[i])) < 10000) {
        points[i].active = 0.3;
        points[i].circle.active = 0.6;
      } else if (Math.abs(getDistance(target, points[i])) < 200000) {
        points[i].active = 0.1;
        points[i].circle.active = 0.3;
      } else if (Math.abs(getDistance(target, points[i])) < 400000) {
        points[i].active = 0.02;
        points[i].circle.active = 0.1;
      } else {
        points[i].active = 0;
        points[i].circle.active = 0;
      }

      drawLines(points[i]);
      points[i].circle.draw();
    }
  }
  requestAnimationFrame(animate);
}

function shiftPoint(p) {
  TweenLite.to(p, 1 + 1 * Math.random(), {
    x: p.originX - 50 + Math.random() * 100,
    y: p.originY - 50 + Math.random() * 100,
    ease: Circ.easeInOut,
    onComplete: function() {
      shiftPoint(p);
    }
  });
}

// Canvas manipulation
function drawLines(p) {
  if (!p.active) return;
  for (var i in p.closest) {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.closest[i].x, p.closest[i].y);
    ctx.strokeStyle = 'rgba(0,0,0,' + p.active + ')';
    ctx.stroke();
  }
}

function Circle(pos, rad, color) {
  var _this = this;

  // constructor
  (function() {
    _this.pos = pos || null;
    _this.radius = rad || null;
    _this.color = color || null;
  })();

  this.draw = function() {
    if (!_this.active) return;
    ctx.beginPath();
    ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(0,0,0,' + _this.active + ')';
    ctx.fill();
  };
}

// Util
function getDistance(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

init();
