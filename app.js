const argv =require('./config/yargs').argv;
const colors = require('colors');

const tasks = require('./taskstodo/tasks_to_do');
// console.log('',argv);

let command = argv._[0];

switch (command){

    case 'crear':
         console.log('Nueva Tarea Creada');
         let tarea = tasks.crear(argv.descripcion);
        // console.log('TU',tarea);
    break;
    case 'list': 
        let Tareas = tasks.getListaTareas(argv.complete);
        console.log('',Tareas);
       if (Tareas.length >= 0){
        for( let tarea of Tareas){
            console.log(colors.green('============Tareas por Completar============'));
            console.log('Tarea:',tarea.Descripcion);
            console.log('Estado:',tarea.complete);
            console.log(colors.green('============================================'));
        }
       }else{
           console.log('No hay Tareas por hacer hasta el momento');
       }
        break;
    case 'update':
        let update = tasks.update(argv.descripcion,argv.completado);
        console.log('',update);
        break;
    case 'delete':
        let del = tasks.delet(argv.descripcion);
        console.log('',del);
        break;
    default:
        console.log('Command unreconozide');

}