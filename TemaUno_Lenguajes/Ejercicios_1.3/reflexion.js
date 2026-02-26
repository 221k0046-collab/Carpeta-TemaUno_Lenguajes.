/* REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs')
   y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
   R=La diferencia entre un módulo nativo como fs y uno de NPM como sillyname es su
    origen e instalación Los módulos nativos ya vienen incluidos con Node.js y no necesitan instalarse simplemente
    se usan directamente En cambio los módulos de NPM son creados por terceros y deben descargarse
     e instalarse con npm install por lo que se guardan dentro de la carpeta node_modules


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
   y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
   R=La diferencia entre require y import es la forma y el momento en que cargan los módulos
    Require pertenece a CommonJS y carga los módulos en tiempo de ejecución además puede usarse
     dentro de funciones Import pertenece a ES Modules y carga los módulos de manera estática 
     antes de que el código se ejecute y normalmente debe colocarse al inicio del archivo

3. Sobre el archivo 'package.json':
   a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
      R=Se comparte el package json porque ahí están anotadas las dependencias del proyecto pero no se sube
       la carpeta node_modules porque pesa mucho y se puede volver a crear fácilmente
   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
      R=Si ejecutas npm install donde solo está el package json automáticamente se descargan todas las dependencias y se crea
       la carpeta node_modules otra vez
*/    
