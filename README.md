# Aimator

[Animator](https://ds.justplayer.de/projects/animator) Plugin Re-Written For DroidScript Hybrid Framework

To get started with Animator :

```javascript
// load file
ui.script("animator.js");
```

The next thing is to use it by adding the createAnimation method to your ui object.

Note : The code extends the ui.Control class so it doesnt need to be declared by you >3

The following methods are exposed :

```javascript
scale(x, y, duration, delay);

scaleX(x, duration, delay);

scaleY(y, duration, delay);

alpha(alpha, duration, delay);

end();

rotate(angle, duration, delay);

rotateX(angle, duration, delay);

rotateY(angle, duration, delay);

then();

setPosition, positionX, positionY;

translate, translateX, translateY;

setOnStart();

setOnCompleted();

start();
```

Hi, im sorry i couldn't provide well given documentation, however i will swear the jsdoc that appears is good, also you can check the original Animator plugin, this plugin uses the hybrid syntax : )

## License

Unlicense license
