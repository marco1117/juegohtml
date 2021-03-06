Quintus.PersonajeGUI = function (Q) {
  Q.tipoPersonaje = {
    mario: {
      asset: "mario150.png",
      vx: -5,
      danio: 1
    },
    luigi: {
      asset: "Luigi50x50.png",
      vx: -50,
      danio: 1
    },
    princesa: {
      asset: "princesa100x100.png",
      vx: -5,
      danio: 0.5
    },
  };
  //MI PERSONAJE
  Q.Sprite.extend("Mario", {
    init: function (p) {
      this._super(p, {
        type: Q.SPRITE_MARIO,
        collisionMask: Q.SPRITE_BALAS | Q.SPRITE_ENEMIGO,
      });
      this.add("2d");
      // colisionar nuestro personaje
      this.on("bump.left",function(colisionar) {
        if(colisionar.obj.isA("Enemigo")) { 
          // colisionar.obj.destroy();
          colisionar.obj.hacerDanio(this.p.danio);
        }
      });
    },
    step: function (dt) {
      if (this.p.x <= 150) {
        this.destroy();
        Q.stageScene("nivel1");
      }
    },
  });
};
