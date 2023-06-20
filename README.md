Para este proyecto se tuvieron en cuenta los siguientes requisitos:
Las tablas utilizadas son users, zones e incidents.
Incident está protegida con el decorador Private

Users:
    @Get()
    @Post('/login') @Public()
    @Post('/singup') @Public()
    @Get('/me') @Private(Role.ADMIN)
    
Incident
    @Get() @Public()
    @Get(':id') @Public()
    @Post() @Private(Role.ADMIN)
    @Put(':id') @Private(Role.ADMIN)
    @Delete(':id') @Private(Role.ADMIN)

Zone:
    @Get() @Public()
    @Get(':id') @Public()
    @Post() @Public()
    @Put(':id') @Public()
    @Delete(':id') @Public()

Relaciones:
    Usuarios -> Zones: Muchos a Uno
    Usuarios -> Incidents: Uno a Muchos
    Zonas -> Incidents: Muchos a Muchos