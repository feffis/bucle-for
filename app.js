let angle = 0; // Para el movimiento oscilante

function setup() {
  createCanvas(windowWidth, windowHeight); // Tamaño de la pantalla
  noStroke();
}

function draw() {
  background(0); // Fondo negro
  let colors = [color(255, 165, 0), color(0, 255, 0), color(255, 255, 0)]; // Naranja, verde y amarillo

  let rows = 10; // Número de filas
  let cols = 10; // Número de columnas
  let spacingX = width / cols; // Espaciado horizontal
  let spacingY = height / rows; // Espaciado vertical

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Posición base del círculo
      let x = j * spacingX + spacingX / 2;
      let y = i * spacingY + spacingY / 2;

      // Oscilación de subida y bajada
      let offset = sin(angle + (i + j) * 0.3) * 20;

      // Movimiento con el mouse
      x += (mouseX - width / 2) * 0.1;
      y += (mouseY - height / 2) * 0.1;

      // Cambiar tamaño dinámico
      let size = map(sin(angle + (i + j) * 0.1), -1, 1, 20, 50);

      // Color aleatorio de la lista
      fill(colors[int(random(colors.length))]);

      // Dibujar el círculo (puede ser un rectángulo si quieres que cambie de forma)
      if (frameCount % 60 < 30) {
        ellipse(x, y + offset, size, size); // Círculo
      } else {
        rect(x - size / 2, y + offset - size / 2, size, size); // Rectángulo
      }
    }
  }

  angle += 0.05; // Incrementar ángulo para la animación
}
