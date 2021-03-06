Quintus.Hongo = function (Q) {
  Q.Sprite.extend("Hongo", {
    init: function (p) {
      this._super(p, {
        asset: "hongo.png",
        type: Q.SPRITE_HONGOS,
        y: 10,
        x: 300 + Math.random() * (1080 - 360),
        vy: 15,
        scale: 0.04,
      });
      this.add("2d");
      this.on("touch");
    },
    touch: function (touch) {
      // que incremente el contador
      Q.state.inc("cantidadHongo", 50);
      this.destroy();
    },
  });
};
