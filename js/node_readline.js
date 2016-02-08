// IMPORTANT: choose one
//var RL_LIB = "libreadline";  // NOTE: libreadline is GPL
//var RL_LIB = "libedit";

var HISTORY_FILE = require('path').join((process.env.HOME)?process.env.HOME:'./', '.mal-history');

var rlwrap = {}; // namespace for this module in web context

var //ffi = require('ffi'),
    fs = require('fs');

/*var rllib = ffi.Library(RL_LIB, {
    'readline':    [ 'string', [ 'string' ] ],
    'add_history': [ 'int',    [ 'string' ] ]});*/
var greadline = require('readline');
var  rl = greadline.createInterface(process.stdin, process.stdout);
var cb;
var lines=[];    
rl.setPrompt('Emacgelion> ');
rl.prompt();
rl.on('line', function(line) {lines.push(line);switch(line.trim()) {
        case'copy':
            console.log("paste!");
            break;
        case'hello':
            console.log('world!');
            break;
        case'close':
            rl.close();
            break;
        default:
            console.log('cannot compute!!');
            break;
    }
    cb((lines.length==0)?null:lines.shift());//theline;
    rl.prompt();
})

  .on('close', function() {
    console.log('bye bye');
    process.exit(0);
})
  .on('SIGINT', () => {
  rl.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});
var rl_history_loaded = false;

exports.readline = rlwrap.readline = function(prompt, function_line) {
    prompt = prompt || "Emacgelion> ";
    cb=function_line;
//    if (!rl_history_loaded) {
//        rl_history_loaded = true;
//        var lines = [];
//        if (fs.existsSync(HISTORY_FILE)) {
//            lines = fs.readFileSync(HISTORY_FILE).toString().split("\n");
//        }
//        // Max of 2000 lines
//        lines = lines.slice(Math.max(lines.length - 2000, 0));
//        for (var i=0; i<lines.length; i++) {
//            if (lines[i]) { rllib.add_history(lines[i]); }
//        }
//    }

//    var line = rllib.readline(prompt);
//    if (line) {
//        rllib.add_history(line);
//        try {
//            fs.appendFileSync(HISTORY_FILE, line + "\n");
//        } catch (exc) {
//            // ignored
//        }
//    }
    return null;
};

var readline = exports;
