# Documentación

## Requisitos tomados en cuenta para el desarrollo del proyecto

El proyecto está conformado por tres entidades o tablas, de las cuales representas tres relaciones.

### Tablas

1. User
2. Developer
3. Project

### Relaciones

- User - Developer. **One to One**
- Developer - Project. **Many to Many**

### Rutas

De las rutas creadas las protegidas son: la ruta *Get* de User; *Post*, *Put*, *Delete* de Developer y *Get*, *Post*, *Put*, *Delete* de Project.

User:

    @Get()
    @Post('/login') @Public()
    @Post('/singup') @Public()
    @Get('/me') @Private(Role.ADMIN)
Developer:

    @Get() @Public()
    @Get(':id') @Public()
    @Post() @Private(Role.ADMIN)
    @Put(':id') @Private(Role.ADMIN)
    @Delete(':id') @Private(Role.ADMIN)
Project:

    @Get() @Private(Role.ADMIN)
    @Get(':id') @Public()
    @Post() @Private(Role.ADMIN)
    @Put(':id') @Private(Role.ADMIN)
    @Delete(':id') @Private(Role.ADMIN)
