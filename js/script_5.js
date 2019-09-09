// default Easing
TweenMax.defaultEase = Power2.easeInOut;

// body parts
var fheadCenter = $('#forehead-center'),
		fheadLeft = $('#forehead-left'),
		fheadRight = $('#forehead-right'),
		cheekLeft = $('#cheek-left'),
		cheekRight = $('#cheek-right'),
		nose = $('#nose'),
		jawLeft = $('#jaw-left'),
		jawRight = $('#jaw-right'),
		chin = $('#chin'),
		clavicle = $('#clavicle'),
		firebaseNeckRight = $('#firebase-neck-r'),
		shoulderLeft = $('#sr-left'),
		shoulderLeftSm = $('#sr-left-sm'),
		shoulderRight = $('#sr-right'),
		shoulderRightSm = $('#sr-right-sm'),
		underchest = $('#underchest'),
		upperarmRight = $('#upperarm-right'),
		upperarmLeft = $('#upperarm-left'),
		handRight = $('#hand-right'),
		handLeft = $('#hand-left'),
		armRight = $('#arm-right'),
		armLeft = $('#arm-left'),
		firebaseHead = $('#firebase-head'),
		firebaseLeft = $('#firebase-left'),
		firebaseRight = $('#firebase-right'),
		firebaseNeckLeft = $('#firebase-neck-l'),
		firebaseNeckCenter = $('#firebase-neck-c'),
		eyeRight = $('#eyeball-right'),
		eyeHolderRight = $('#eyeholder-right'),
		eyeLeft = $('#eyeball-left'),
		eyeHolderLeft = $('#eyeholder-left'),
		sf = $('#sf');

// prepare body parts
TweenMax.set([fheadCenter, fheadLeft, fheadRight, cheekLeft, cheekRight, chin, jawLeft, jawRight, nose, eyeLeft, eyeRight, eyeHolderLeft, eyeHolderRight, firebaseNeckRight, firebaseNeckCenter, firebaseNeckLeft, firebaseLeft, firebaseRight, firebaseHead, shoulderRight, shoulderRightSm, underchest, shoulderLeft, shoulderLeftSm, clavicle, upperarmLeft, upperarmRight, handLeft, handRight, armLeft, armRight ], {
	autoAlpha: 0
});

/*
var tl = new TimelineLite();
	
	tl.fromTo(sf, 0.1, {
		display: 'none'
	}, {
		display: 'inline'
	});

	tl.fromTo([fheadCenter, fheadLeft, fheadRight], 0.4, {
		y: 10
	}, {
		y: 0,
		autoAlpha: 1
	})
	.to([eyeHolderLeft, eyeHolderRight], 0.4, {
		autoAlpha: 1,
	}, '-=0.2')
	.fromTo([cheekLeft, cheekRight, nose], 0.4, {
		y: -10
	}, {
		y: 0,
		autoAlpha: 1,
	}, '-=0.1')
	.fromTo([jawLeft, jawRight, chin], 0.4, {
		y: -10
	}, {
		y: 0
	}, '-=0.2')
	.to([jawLeft, jawRight, chin], 0.4, {
		autoAlpha: 1
	}, '-=0.4')
	.to([clavicle], 0.4, {
		autoAlpha: 1
	})
	.set([shoulderLeft, shoulderLeftSm], {
		x: 20,
		scale: 0.2,
		rotation: -180,
		transformOrigin: 'bottom right',
	})
	.set([shoulderRight, shoulderRightSm], {
		scale: 0.2,
		x: -20,
		rotation: 180,
		transformOrigin: 'bottom left'
	})
	.set(upperarmLeft, {
		x: 30,
		y: -20,
		scale: 0.9,
		rotation: 30,
	})
	.set(upperarmRight, {
		x: -30,
		y: -20,
		scale: 0.9,
		rotation: -30,
	})
	.staggerTo([shoulderLeft, shoulderLeftSm], 0.4, {
		x: 0,
		scale: 1,
		rotation: 0,
		autoAlpha: 1
	}, '0.2')
	.staggerTo([shoulderRight, shoulderRightSm], 0.4, {
		scale: 1,
		x: 0,
		rotation: 0,
		autoAlpha: 1
	}, '0.2', '-=0.6')
	.to([upperarmLeft, upperarmRight], 0.4, {
		x: 0,
		y: 0,
		scale: 1,
		rotation: 0,
		autoAlpha: 1
	}, '-=0.2')
	.set(armLeft, {
		rotation: 45,
		x: 10,
		y: -10,
		transformOrigin: '-10px 20px',
	})
	.set(armRight, {
		rotation: -45,
		x: -10,
		y: -10,
		transformOrigin: '10px 20px',
	})
	.set(handLeft, {
		x: 10,
		y: -10,
	})
	.set(handRight, {
		x: -10,
		y: -10,
	})
	.to([armLeft, armRight], 0.4, {
		rotation: 0,
		x: 0,
		y: 0,
		autoAlpha: 1,
	})
	.to([handLeft, handRight], 0.4, {
		x: 0,
		y: 0,
		autoAlpha: 1,
	}, '-=0.1')
	.to([firebaseNeckRight, firebaseNeckLeft, firebaseNeckCenter], 0.4, {
		autoAlpha: 1,
	})
	.set([firebaseHead, firebaseLeft, firebaseRight], {
		scale: 0.5,
		transformOrigin: 'bottom',
		y: -20
	})
	.staggerTo([firebaseHead, firebaseLeft, firebaseRight], 0.4, {
		autoAlpha: 1,
		scale: 1,
		y: 0,
		ease: Power4.easeOut,
	}, '0.2')
	.set([eyeLeft, eyeRight], {
		scaleY: 0,
		transformOrigin: '0px 50%'
	})
	.to([eyeLeft, eyeRight], 0.4, {
		scaleY: 4,
		autoAlpha: 1,
	})
	.to([eyeLeft, eyeRight], 0.4, {
		scaleY: 1,
		autoAlpha: 1,
		ease: Power4.easeOut,
	}, '-=0.2');
*/

function enableDisplay() {
	var tl = new TimelineLite();
	
	tl.to(sf, 0, {
		display: 'inline'
	});
	
	return tl;
}

function forehead() {
	var tl = new TimelineLite();
	
	tl.fromTo([fheadCenter, fheadLeft, fheadRight], 0.4, {
		y: 10
	}, {
		y: 0,
		autoAlpha: 1
	});
	
	return tl;
}

function eyeholder() {
	var tl = new TimelineLite();
	
	tl.to([eyeHolderLeft, eyeHolderRight], 0.4, {
		autoAlpha: 1,
	}, '-=0.2');
	
	return tl;
}

function face() {
	var tl = new TimelineLite();
	
	tl.fromTo([cheekLeft, cheekRight, nose], 0.4, {
		y: -10
	}, {
		y: 0,
		autoAlpha: 1,
	}, '-=0.1');
	
	return tl;
}

function mouth() {
	var tl = new TimelineLite();
	
	tl.fromTo([jawLeft, jawRight, chin], 0.4, {
		y: -10
	}, {
		y: 0
	}, '-=0.2')
	.to([jawLeft, jawRight, chin], 0.4, {
		autoAlpha: 1
	}, '-=0.4');
	
	return tl;
}

function shoulders() {
	var tl = new TimelineLite();
	
	tl.set([shoulderLeft, shoulderLeftSm], {
		x: 20,
		scale: 0.2,
		rotation: -180,
		transformOrigin: 'bottom right',
	})
	.set([shoulderRight, shoulderRightSm], {
		scale: 0.2,
		x: -20,
		rotation: 180,
		transformOrigin: 'bottom left'
	})
	.set(upperarmLeft, {
		x: 30,
		y: -20,
		scale: 0.9,
		rotation: 30,
	})
	.set(upperarmRight, {
		x: -30,
		y: -20,
		scale: 0.9,
		rotation: -30,
	})
	.staggerTo([shoulderLeft, shoulderLeftSm], 0.4, {
		x: 0,
		scale: 1,
		rotation: 0,
		autoAlpha: 1
	}, '0.2')
	.staggerTo([shoulderRight, shoulderRightSm], 0.4, {
		scale: 1,
		x: 0,
		rotation: 0,
		autoAlpha: 1
	}, '0.2', '-=0.6')
	.to([upperarmLeft, upperarmRight], 0.4, {
		x: 0,
		y: 0,
		scale: 1,
		rotation: 0,
		autoAlpha: 1
	}, '-=0.2')
	.to(underchest, 0.4, {
		autoAlpha: 1
	}, '-=0.2');
	
	return tl;
}

function arms() {
	var tl = new TimelineLite();
	
	tl.set(armLeft, {
		rotation: 45,
		x: 10,
		y: -10,
		transformOrigin: '-10px 20px',
	})
	.set(armRight, {
		rotation: -45,
		x: -10,
		y: -10,
		transformOrigin: '10px 20px',
	})
	.to([armLeft, armRight], 0.4, {
		rotation: 0,
		x: 0,
		y: 0,
		autoAlpha: 1,
	});
	
	return tl;
}

function hands() {
	var tl = new TimelineLite();
	
	tl.set(handLeft, {
		x: 10,
		y: -10
	})
	.set(handRight, {
		x: -10,
		y: -10
	})
	.to([handLeft, handRight], 0.4, {
		x: 0,
		y: 0,
		autoAlpha: 1
	}, '-=0.1');
	
	return tl;
}

// something is wrong with this... 

function clavicles() {
	var tl = new TimelineLite();
	
	tl.to(clavicle, 0.4, {
		autoAlpha: 1
	});
	
	return tl;
} 

function firebaseNeck() {
	var tl = new TimelineLite();
	
	tl.to([firebaseNeckRight, firebaseNeckLeft, firebaseNeckCenter], 0.4, {
		autoAlpha: 1,
	});
	
	return tl;
}

function firebaseOthers() {
	var tl = new TimelineLite();
	
	tl.set([firebaseHead, firebaseLeft, firebaseRight], {
		scale: 0.5,
		transformOrigin: 'bottom',
		y: -20
	})
	.staggerTo([firebaseHead, firebaseLeft, firebaseRight], 0.4, {
		autoAlpha: 1,
		scale: 1,
		y: 0,
		ease: Power4.easeOut,
	}, '0.2');
	
	return tl;
}

function eyeballs() {
	var tl = new TimelineLite();
	
	tl.set([eyeLeft, eyeRight], {
		scaleY: 0,
		transformOrigin: '0px 50%'
	})
	.to([eyeLeft, eyeRight], 0.4, {
		scaleY: 4,
		autoAlpha: 1
	})
	.to([eyeLeft, eyeRight], 0.4, {
		scaleY: 1,
		autoAlpha: 1,
		ease: Power4.easeOut,
	}, '-=0.2');
	
	return tl;
}

function hoverHandLeft() {
	var tl = new TimelineLite();
	
	tl.set([handLeft, firebaseLeft], {
		x: 0,
		y: 0
	})
	.to([handLeft, firebaseLeft], 1, {
		x: 5,
		y: -5,
		yoyo: true,
		repeat: -1,
		ease: RoughEase.ease.config({ template: Power1.easeOut, strength: 1, points: 10, taper: "none", randomize: true, clamp: false})
	});
	
	return tl;
}

function hoverHandRight() {
	var tl = new TimelineLite();
	
	tl.set([handRight, firebaseRight], {
		x: 0,
		y: 0
	})
	.to([handRight, firebaseRight], 1, {
		x: -5,
		y: -5,
		yoyo: true,
		repeat: -1,
		ease: RoughEase.ease.config({ template: Power1.easeOut, strength: 1, points: 10, taper: "none", randomize: true, clamp: false})
	});
	
	return tl;
}

function fireNeck() {
	var tl = new TimelineLite();
	
	tl.set([firebaseNeckRight, firebaseNeckLeft, firebaseNeckCenter], {
		autoAlpha: 0
	})
	.to([firebaseNeckRight, firebaseNeckLeft, firebaseNeckCenter], 1, {
		autoAlpha: 0.6,
		yoyo: true,
		repeat: -1,
		ease: RoughEase.ease.config({ template: Power1.easeOut, strength: 1, points: 10, taper: "none", randomize: true, clamp: false})
	});
	
	return tl;
}

function armLeftMoving() {
	var tl = new TimelineLite();
	
	tl.set([upperarmLeft, armLeft], {
		x: 0,
		y: 0,
	})
	.to([upperarmLeft, armLeft], 1, {
		x: 5,
		y: 2,
		yoyo: true,
		repeat: -1,
		ease: Power1.easeInOut
	});
	
	return tl;
}

function armRightMoving() {
	var tl = new TimelineLite();
	
	tl.set([armRight, upperarmRight], {
		x: 0,
		y: 0,
	})
	.to([armRight, upperarmRight], 1, {
		x: -5,
		y: 2,
		yoyo: true,
		repeat: -1,
		ease: Power1.easeInOut
	});
	
	return tl;
}

function headNod() {
	var tl = new TimelineLite();
	
	tl.set([firebaseHead, eyeHolderLeft, eyeHolderRight, cheekLeft, cheekRight, chin, eyeLeft, eyeRight, fheadCenter, fheadLeft, fheadRight, nose, jawLeft, jawRight], {
		x: 0,
		y: 0,
	})
	.to([firebaseHead, eyeHolderLeft, eyeHolderRight, cheekLeft, cheekRight, chin, eyeLeft, eyeRight, fheadCenter, fheadLeft, fheadRight, nose, jawLeft, jawRight], 1, {
		x: 0,
		y: 2,
		yoyo: true,
		repeat: -1,
		ease: Power2.easeInOut
	});
	
	return tl;
}

function bodyNod() {
	var tl = new TimelineLite();
	
	tl.set([shoulderLeft, shoulderRight, shoulderLeftSm, shoulderRightSm, clavicle, underchest], {
		x: 0,
		y: 0,
	})
	.to([shoulderLeft, shoulderRight, shoulderLeftSm, shoulderRightSm, clavicle, underchest], 1, {
		x: 0,
		y: 3,
		yoyo: true,
		repeat: -1,
		ease: Power2.easeInOut
	});
	
	return tl;
}

var master = new TimelineMax({
	paused: true
});

master
	.add(enableDisplay(), 0)
	.add(forehead())
	.add(eyeholder(), '-=0.2')
	.add(face())
	.add(mouth())
	.add(clavicles())
	.add(shoulders())
	.add(arms())
	.add(hands())
	.add(firebaseNeck())
	.add(firebaseOthers())
	.add(eyeballs())
	.add(hoverHandLeft(), "hand")
	.add([hoverHandRight(), fireNeck()], "hand")
	.add([armLeftMoving(), armRightMoving(), headNod()], "hand")
	.add([bodyNod()], "hand");

master.play();


	