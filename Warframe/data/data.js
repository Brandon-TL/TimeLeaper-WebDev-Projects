import {PythonShell} from 'python-shell';

PythonShell.run(
    'scrapper.py',
    null,
    function (err) {
        if (err) throw err;
        console.log('finished');
    }
)

document.getElementById("main").textContent += "HOLA";