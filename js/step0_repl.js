if (typeof module !== 'undefined') {
    var readline = require('./node_readline');
    var printer = require('./printer');
}

// read
function READ(str) {
    return str;
}

// eval
function EVAL(ast, env) {
    return ast;
}

// print
function PRINT(exp) {
    return exp;
}

// repl
var rep = function(str) { return PRINT(EVAL(READ(str), {})); };
var cb = function(line){
        if (line === null) { 
            console.log('line === null');
        }else{ 
            console.log('line: '+line);
            try {
                if (line) { printer.println(rep(line)); }
            } catch (exc) {
    
                if (exc.stack) { printer.println(exc.stack); }
                else           { printer.println(exc); }
            }
        }
        return null;
    };

// repl loop
if (typeof require !== 'undefined' && require.main === module) {
    // ASynchronous node.js commandline mode

        var aline = readline.readline("user> ", cb);
}
