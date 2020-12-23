const argv = require('yargs')
                    .command('crear','Crear un elemento por hacer',{
                        descripcion:{
                            demand:true,
                            alias: 'd',
                            desc: 'Descripcion de la tarea por hacer'
                        }
                    })
                    .command('update','Actualiza el estado de la tarea',{
                        descripcion:{
                            demand:true,
                            alias: 'd',
                            desc: 'Descripcion de la tarea por hacer'
                        },
                        completado:{
                            default:true,
                            alias:'c',
                            desc:'Marca completado o pendiente la tarea'
                        }
                    })
                    .command('list','list task to do',{
                        list:{
                            alias: 'l'
                        },
                        complete:{
                            default: false,
                            alias: 'c',
                            desc: 'Lista las Tareas ya sean completadas o sin completar'
                        }
                    })
                    .command('delete','Borra un  tarea',{
                        descripcion:{
                            demand:true,
                            alias: 'd',
                            desc: 'Descripcion de la tarea por hacer'
                        },
                        
                    })
                    .help()
                    .argv;


module.exports = {
    argv
}