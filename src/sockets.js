let juegos = {};
let jugadoresCartas = {};

export default (io) => {
  io.on("connection", (socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on("crear-juego", () => {
      const codigo = Math.random().toString(36).substring(2, 8).toUpperCase();
      juegos[codigo] = [];
      socket.emit("juego-creado", codigo);
    });

    socket.on('iniciar-partida', () => {
      const codigo = socket.codigoJuego;
      if (codigo && juegos[codigo] && juegos[codigo].length >= 2) {
        io.to(codigo).emit('partida-iniciada');
        // Aquí podrías agregar lógica adicional para manejar la partida en sí
      }
    });

    socket.on("unirse-a-juego", (codigo) => {
      if (juegos[codigo] && juegos[codigo].length < 7) {
        juegos[codigo].push(socket.id);
        socket.join(codigo);
        const miPosicion = juegos[codigo].indexOf(socket.id);
        io.to(codigo).emit("jugadores-actualizados", juegos[codigo].length);
        socket.emit("unido-a-juego", {
          jugadores: juegos[codigo],
          posicion: miPosicion,
        });
        socket.codigoJuego = codigo;
      } else {
        socket.emit("codigo-invalido");
      }
    });   

    // Manejar el evento de repartir cartas
    socket.on("repartir-cartas", (jugadoresConCartas) => {
      const imagenCarta1Jugador1 = jugadoresConCartas[0].jugador1[1];
    });

    socket.on("disconnect", () => {
      console.log("a player disconnected");
      const codigo = socket.codigoJuego;
      if (codigo && juegos[codigo]) {
        juegos[codigo] = juegos[codigo].filter((id) => id !== socket.id);
        io.to(codigo).emit("jugadores-actualizados", juegos[codigo].length);
      }
    });
  });
};
