import React from "react";

const studentName = "Fernando Samayoa Landin";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
<div>
  <h1>Estudiante</h1>
  <h3>{techSkills}</h3>
</div>

  return;
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
