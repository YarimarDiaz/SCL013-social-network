# El Trueke

## Índice


* [1. Definicion del producto](#1-Definicion-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)](#5-Diseño-de-la-interfaz-de-usuario)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***
![trueke-banner](/src/img/logo3.png)



## 1. Definición del producto

La red social EL TRUEKE es una página web dirigida a personas que quieren realizar intercambio de bienes materiales o enceres por otros productos según la necesidad de los usuarios. Esta práctica de intercambio existe desde el periodo neolítico aproximadamente  10.000 años atrás. 

El objetivo de esta red social es facilitar al usuario la búsqueda de los mejores candidatos para realizar un intercambio, pautando una forma de entrega de sus productos sin intervención de dinero.

Las ventajas de realizar intercambio es que las personas pueden reducir la cantidad de productos que tiene en desuso y obtener producto que realmente necesiten favoreciendo a su economía.

* **¿Quiénes son los principales usuarios del producto?**
Personas mayores de edad que tengan productos que puedan ser intercambiador por otros.

* **¿Como crees que el producto que estas creando resuelve el problema del usuario?** 
Debido a la situación actual en la que se encuentra la economía de nuestro país muchas de personas se han visto afectadas ya que han perdido su trabajo o disminuido su porcentaje de ingresos económico. Es por esto que nace "El Trueke", una red social para aportar beneficios ya que no necesitaran de dinero para obtener productos que requieran, El usuario podrá realizar intercambio de productos que tenga en existencia por otro que necesite sin dar un golpe a su bolsillo.

Esta Red Social permitirá a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

### 2. Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Historia 1:** Yo como usuario nuevo quiero registrarme con mi email y contraseña
para obtener información acerca de los trueques.
* **Criterios de Aceptación:** Dado que ingresé mis datos en el formulario, cuando carga 
la interfaz, entonces quedo registrado en la red social.
* **Definición de terminado:** El usuario queda registrado dentro de la base de datos
de la red social.

* **Historia 2:** Yo como usuario registrado quiero logearme con mi cuenta
para acceder al contenido.
* **Criterios de Aceptación:**Dado que ya soy usuario registrado, y mis credenciales
son válidas, entonces mi cuenta ya ha sido activada y veo el contenido de la página.
* **Definición de terminado:**El usuario registrado puede ver el contenido de la página.

* **Historia 3:** Yo como usuario registrado quiero publicar un post para
intercambiar un producto.
* **Criterios de Aceptación:**Dado que deseo publicar un producto para intercambiarlo,
cuando le hago click al botón de publicar, entonces mi producto se publica en la página principal.
* **Definición de terminado:**La publicación puede ser vista por todos los usuarios de la red social.

* **Historia 4:** Yo como usuario registrado quiero eliminar un post para
eliminar mi anuncio una vez intercambiado el producto.
* **Criterios de Aceptación:**Dado que deseo eliminar la publicación de mi producto,
cuando le hago click al botón de eliminar, entonces mi publicación se elimina de la página principal.
* **Definición de terminado:**La publicación se elimina de la red social.


### 3. Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

***
![Prototipo1](/src/img/readme/home1.png)
***
![Prototipo1](/src/img/readme/home2.png)
![Prototipo1](/src/img/readme/home3.png)
![Prototipo1](/src/img/readme/home4.png)
![Prototipo1](/src/img/readme/home5.png)
![Prototipo1](/src/img/readme/home6.png)
![Prototipo1](/src/img/readme/home7.png)




### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en estas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver el muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 8. Pistas, tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve cómo adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
