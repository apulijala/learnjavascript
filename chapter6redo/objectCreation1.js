let protoRabbit = {
    speak : function(line) {
        console.log(`The ${this.type} rabbit says '${line}' `);
    }   
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("SKREEEE!");