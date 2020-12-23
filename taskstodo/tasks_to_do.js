const fs = require('fs');
const { describe } = require('yargs');

let ListadoTareas = [];

const guardarDB= ()=>{
    let data = JSON.stringify(ListadoTareas);
    //console.log(data);
    //console.log('');
    fs.writeFile('./db/data.json',data,(err)=>{
        if(err)
        { 
            throw new Error('No se pudo guardar los datos',err);
        }
    });
}

const cargarDB = ()=>{
    try {
        ListadoTareas = require('../db/data.json');
    } catch (error) {
        ListadoTareas = [];
    }
    
    // console.log(ListadoTareas);
}

const crear = (Descripcion)=>{
     cargarDB();
    let NewTarea = {
        Descripcion,
        complete: false

    };

    ListadoTareas.push(NewTarea);
    guardarDB();
     return NewTarea;
}

const update = (Descripcion,complete = true)=>{
    cargarDB();
   // console.log('',Descripcion);
    let index = ListadoTareas.findIndex(tarea =>{
        return tarea.Descripcion === Descripcion;
    });
    if(index >=0){
        ListadoTareas[index].complete = complete;
        //console.log('',ListadoTareas[index]);
        guardarDB();
        return true;
    }else{
        return false;  
    }
}

const delet = (Descripcion)=>{

    cargarDB();
    let newlist = ListadoTareas.filter(tarea=>{
        return tarea.Descripcion !== Descripcion;
    });

    if(ListadoTareas.length === newlist.length){
       return false;
    }else{
        ListadoTareas= newlist;
        guardarDB();
        return true;
    }

}

const getListaTareas = (complete)=>{
    cargarDB();

  
        let Tareas = ListadoTareas.filter(tarea =>{
            return tarea.complete === complete;
        });
        return Tareas
        // return ListadoTareas
   

   
}



module.exports={
    crear,
    getListaTareas,
    update,
    delet
}