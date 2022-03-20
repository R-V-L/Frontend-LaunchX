# Frontend LaunchX
¡Hola! Aqui estaré anexando las evidencias de los ejercicios del del Frontend LaunchX.   
Si llegaste aqui de casualidad es probable no le encuentres mucha utilidad... aun asi bienvenido :D  
Si por el contrario eres un Sherpa o un Commander por favor toma esto mientras lees. 🍪 ☕

## 01 - Intro
Contenido de la primer semana, el cual consta de lo siguiente:

1. Requerimentos
Para esto se uso el documento proveído por el MC
2. Buyer persona
Se utilizo como template un PPTX, se trabajo sobre Google Slides
3. Publico objetivo
Se utilizo la siguiente plantilla en [Miro](https://miro.com/es/plantillas/publico-objetivo/)
4. Wireframe
Se utilizo Miro nuevamente, utilizando las herramientas para generar Wireframe.
5. UI
Al principio se intento usar Adobe XD... después de fallar estrepitosamente se volvio a utilizar Miro (parece que alguien descubrio una nueva herramienta preferida). El logo fue generado usando [looka](https://looka.com/logo-maker/).

## 02 - HTML
Contenido de la 2da semana. Pagina simple que imita una pasteleria, creada con HTML, usando Boostrap 5.1.

1. index.html  
Pagina de inicio, con un navbar con el nombre del negocio. Debajo multiples cards que muestran una imagen del producto, el precio y un boton de compra.
2. pedido.html  
Dirigido hacia aqui al presionar el boton de compra desde el index (cualquier boton). Muestra un apartado para agregar ingredientes extra, con 5 checkbox como opciones. Una opcion para agregar adornos, con 3 checkbox y un textarea en caso que se requiera agregar un mensaje personalizado.
3. comprar.html  
Form con text input para nombre completo, telefono, correo electronico y direccion. Adicional a esto se agrega un combobox/dropdown-list para el tipo de entrega.
4. detallescompra.html  
Textarea simple con un summary de los detalles de la compra.

## 03 - CSS

Accesible aqui: [PracticaCSS](https://rawcdn.githack.com/R-V-L/Frontend-LaunchX/26f1b6686566f769f06f525f34e7f7495dd6049e/03%20-%20CSS/index.html?min=1)  
Contenido de la 3er semana. Se busca imitar la apariencia de [esta](https://raw.githubusercontent.com/LaunchX-InnovaccionVirtual/FrontEnd-Mision/main/03%20-%20CSS/practica/landingVacunaci%C3%B3n.png) pagina, usando HTML y CSS. Se creo con HTML y CSS. Adicional se uso Bootstrap 5.1 y Material Icons. Hasta el momento esta a sido la practica mas demandante.  

Al ser una single page se dividira por el tipo de contenido y las herramientas utilizadas:  

1. Imagenes de contenido (doctores)  
Se usaron las imagenes que fueron proveidas en el grupo de teams de LaunchX. Para agregar el background transparente se uso Adobe Photoshop (se intentaron usar multiples herramientas online, pero no dieron un resultado satisfactorio).
2. Imagenes de vacunas  
Obtenidas de Google images, se buscaron con fondo transparente para no tener que removerlo despues. Se aplico un filtro de escala de grises (filter: grayscale(100%)) para el efecto blanco y negro.
3. Imagenes varias  
Los primeros 2 triangulos mostrados al principio de la pagina fueron generados con Photoshop, en realidad es uno solo mostrado 2 veces y al que se le modifico el tamaño desde CSS... sin embargo al querer usarse mas adelante (debajo de la parte donde muestra las imagenes de las vacunas) se opto por generar uno con CSS puro. Por la razon de ser mas sencillo de esta forma y no tener que preocuparme por generar una imagen nueva.
4. Texto  
Se decia que la parte del lenguaje estaba a criterio asi que decidi pasarlo al Español. Sin embargo hubieran algunas partes que no me convencieron, en especial la parte de "Hoax Buster" el cual traduci como "Engaños Sobre Vacunas", sin estar del todo conforme. Se aceptan sugerencias en la traduccion.
5. Elementos  
Se uso CSS grid para el posicionamiento de gran parte de los elementos (el cual desconocia por completo, pero [esta](https://cssgridgarden.com/) web me ayudo a practicar). Lo encontre bastante mas sencillo que Flexbox y parece ser compatible con los navegadores principales.
6. Iconos  
Se uso exclusivamente Material Icons de Google, el cual parece ser el mismo tipo de iconos que se usa en la imagen que se envio para referencia.
7. Tiempo y cafe  
Quizas por mi inexperiencia con CSS pero me llevo mucho mas tiempo del que pensaba para realizarla. Facilmente arriba de las 30 horas, la mayoria de esas horas era relacionado a intentar alinear correctamente algun elemento o que se viera distinto al cambiar entre pantallas de diferentes DPI.
8. Visual Studio Code  
Desde la primer practica he utilizado VSC, pero esto me enseño algunas cosas adicionales y que facilitaron bastante el realizar estas practicas: la extension LiveServer, el cual permite modificar el proyecto sin necesidad de estar refrescando la pagina una y otra vez y el SCM integrado en Visual Studio, el cual me permite tener mi codigo actualizado en los repos facilmente.
9. Varios  
En un principio se utilizo la pagina [imagecolorpicker](https://imagecolorpicker.com/en) para obtener el color de los diferentes elementos de la pagina y de este modo que fuera lo mas fiel posible a la original. Actualmente uso esta extension del navegador para este mismo proposito (Color Picker).

## 04 - JS


Accesible aqui: [Pokedex](https://rawcdn.githack.com/R-V-L/Frontend-LaunchX/26f1b6686566f769f06f525f34e7f7495dd6049e/04%20-%20JS/index.html?min=1)  
4ta semana de Frontend. Se busca replicar un pokedex usando PokéAPI. Se uso HTML, CSS y Javascript para esta practica. Nuevamente se utilizo Bootstrap 5.1 para los estilos, ademas del archivo autocomplete.js para el autocompletado.

1. HTML  
Se busco mantenerse la pagina lo mas sencilla posible, se tiene un contenedor, dentro un titulo y una breve explicacion de la pagina. Un div donde se tiene una imagen como default de una pokebola y multiples "p" con contenido vacio, las cuales se llenaran posteriormente en el JS.  
2. CSS  
Se agrega estilo solamente a 2 elementos: el autocomplete, ya que sino aparece flotando a lado izquierdo de la pantalla. Y a la imagen, la cual se le agrega un borde rojo y gris.  
3. Javascript  
Se utilizan las siguientes funciones:
    - obtenerNombresPokemon  
    Para meter todos los nombres de los pokemon en el array "pokemon"  
    - set_autocomplete  
    Donde se le pasa el ID del input, el nombre del div donde se mostrara el autocomplete y el array "pokemon"  
    - fetchPokemon  
    Va al API y busca el nombre del pokemon deseado. En caso que exista manda la informacion necesaria a la funcion pokeInfo, en caso contrario se manda una alerta diciendo que el nombre del pokemon ingresado no existe.  
    - pokeInfo  
    Recibe la informacion del Pokemon y actualiza los datos en el HTML: incluido los movimientos, imagen, nombre, numero, etc  

> **Nota:** Este documento sigue en progreso, conforme su servidor termine sus practicas y aprenda a usar markdown