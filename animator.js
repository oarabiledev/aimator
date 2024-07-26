/**
 * Animator Plugin Re-Written For DroidScript Hybrid
 *
 * @license
 * Unlicense license
 *
 * @author
 * Oarabile Koore
 *
 * @version 1.0
 */

// Initialize animation state
ui.Control.prototype.createAnimation = function () {
	// Ensure `this._div` is initialized properly
	if (!this._div) {
		console.error("Element (_div) is not defined");
		return this;
	}

	this._onStart = null;
	this._onCompleted = null;
	this._isAnimating = false;
	this._animationQueue = [];
	this._currentAnimation = null;
	this._computedAnimation = null;
	return this;
};

/**
 * Set the opacity of the element.
 * @param {number} alpha - The opacity value (0 to 1).
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.alpha = function (alpha, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.opacity = alpha;
				this._div.style.transition = `opacity ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Ends the current animation.
 */
ui.Control.prototype.end = function () {
	this._isAnimating = false;
	this._div.style.transition = "";
	this._animationQueue = [];
	this._currentAnimation = null;
};

/**
 * Checks if the animation is currently running.
 * @returns {boolean} - Returns true if the animation is running, otherwise false.
 */
ui.Control.prototype.isRunning = function () {
	return this._isAnimating;
};

/**
 * Moves the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.setPosition = function (left, top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translate(${left}px, ${top}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Moves the element horizontally.
 * @param {number} left - The new left position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.positionX = function (left, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translateX(${left}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Moves the element vertically.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.positionY = function (top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translateY(${top}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.rotate = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `rotate(${angle}deg)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element around the X axis.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.rotateX = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `rotateX(${angle}deg)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element around the Y axis.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.rotateY = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `rotateY(${angle}deg)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in both X and Y directions.
 * @param {number} x - The scale factor in the X direction.
 * @param {number} y - The scale factor in the Y direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.scale = function (x, y, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `scale(${x}, ${y})`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in the X direction.
 * @param {number} x - The scale factor in the X direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.scaleX = function (x, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `scaleX(${x})`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in the Y direction.
 * @param {number} y - The scale factor in the Y direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.scaleY = function (y, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `scaleY(${y})`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Sets the callback function to be called when the animation starts.
 * @param {Function} callback - The callback function to be called when the animation starts.
 */
ui.Control.prototype.setOnStart = function (callback) {
	this._onStart = callback;
};

/**
 * Sets the callback function to be called when the animation ends.
 * @param {Function} callback - The callback function to be called when the animation ends.
 */
ui.Control.prototype.setOnCompleted = function (callback) {
	this._onCompleted = callback;
};

/**
 * Starts the animation queue.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.start = function () {
	if (this._onStart) {
		this._onStart();
	}
	this._isAnimating = true;
	this._executeNextAnimation();
	return this;
};

/**
 * Executes the next animation in the queue.
 * @private
 */
ui.Control.prototype._executeNextAnimation = function () {
	if (this._animationQueue.length > 0) {
		this._currentAnimation = this._animationQueue.shift();
		this._currentAnimation().then(() => {
			this._executeNextAnimation();
		});
	} else {
		this.end();
	}
};

/**
 * Executes a function after the current animation finishes.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.then = function () {
	this._animationQueue.push(() => Promise.resolve());
	return this;
};

/**
 * Translates the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.translate = function (left, top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translate(${left}px, ${top}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Translates the element horizontally.
 * @param {number} left - The new left position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.translateX = function (left, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translateX(${left}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Translates the element vertically.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {ui.Control} - The instance for chaining.
 */
ui.Control.prototype.translateY = function (top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this._div.style.transform = `translateY(${top}px)`;
				this._div.style.transition = `transform ${duration}ms`;
				this._div.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Handles the end of an animation.
 * @private
 */
ui.Control.prototype._onAnimationEnd = function () {
	this._isAnimating = false;
	if (this._animationQueue.length > 0) {
		this._executeNextAnimation();
	} else if (this._onCompleted) {
		this._onCompleted();
	}
};
