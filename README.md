

[X] Manejar usuarios
[X] Esos usarios puedan inicar sesion 
[X] Crear conversaciones
[X] Leer las conversaciones de las cuales son miembros
[X] Crear grupos de conversaciones 
[X] Enviar mensajes 
[X] Eliminar mensajes 

- Confirmacion de lectura del mensaje 
- Manejar fotos de perfil 
- Reenviar un mensaje 
- Crear links para invitar gente a un grupo

![Database Diagram](https://i.imgur.com/IHhtWv2.png)


Ejemplo de respuestas exitosas: 

```JavaScript
{
    error: false,
    status: 201,
    message: 'User created Succesfully',
    data: {
        id: 5,
        firstName: 'Sahid',
        ...
    }
}
```


