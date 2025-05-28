# Sistema de Gestión de Datos Estudiantiles

***

## Grupo 1 (Integrantes)

* Juan Sebastian Vega Diaz 20231020087
* Felipe Cardenas Mora 20231020145
* Yuber Alejandro Bohorquez Roa 20231020195
* David Neira 20192020086

***

## Descripción del Proyecto

Este proyecto en Java tiene como objetivo la creación de un sistema que permite almacenar, recorrer y procesar información estudiantil aplicando los patrones de diseño **Iterator** y **Visitor**.

A partir del escenario problema planteado, se estructura una solución que involucra:

* Uso de `TreeSet<E>` y `ArrayList<E>` para manejar colecciones de estudiantes.

* Definición de una clase de datos estudiantiles que incluye:
  * Código
  * Nombres
  * Dirección
  * Lista de teléfonos
* Implementación de dos tipos de recorrido diferentes (ordenado y por inserción).
* Validación de datos estudiantiles y notificación si hay campos incompletos.

## Características

1. **Estructura de Datos**
   * `TreeSet`: Para mantener los estudiantes ordenados alfabéticamente o por código.
   * `ArrayList`: Para conservar el orden de inserción.

2. **Patrón Iterator**
   * Se crea una interfaz `Iterator<E>` personalizada que permite recorrer las estructuras de datos mencionadas.
   * Se garantiza independencia del recorrido respecto a la estructura de la colección.

3. **Patrón Visitor**
   * Se utiliza para realizar operaciones sobre los datos estudiantiles sin modificar sus clases.
   * Por ejemplo, verificar si un estudiante tiene toda su información completa o aplicar reglas de negocio adicionales.

## Requisitos del Sistema

* JDK 11 o superior
* IDE compatible con Java (Eclipse, IntelliJ, VS Code)
* Maven (opcional, si deseas manejar dependencias)

## Estructura del Proyecto

Por definir...
