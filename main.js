const terminal = {};

terminal.init = () => {
    terminal.print('node run welcome.js', true);
    setTimeout(function() {
        terminal.print('Hello and welcome to the site! 👋');
    }, 1500);

    setTimeout(function() {
        terminal.print(`Take a look around at some of my past work, or read a little bit about me...`);
    }, 3000);

    // setTimeout(function() {
    //     terminal.print(`Looking for custom development expertise for your next exciting project? Let's talk!`);
    // }, 5500);

    terminal.eventListeners();
}

terminal.eventListeners = () => {
    const close = document.querySelector('.js-close');
    close.addEventListener('click', terminal.dismiss);
}

terminal.dismiss = () => {
    document.querySelector('.terminal').remove();
}

terminal.print = (cliMsg, prefix) => {
    const terminalCli = document.querySelector('.terminal__cli');
    const cursor = document.querySelector('.terminal__cursor');

    cursor.remove();

    const newMsgLine = document.createElement('div');
    const newCursor = document.createElement('span');

    newMsgLine.classList.add('terminal__msg');
    if (!prefix) { 
        newMsgLine.classList.add('terminal__msg--md') 
    } else {
        newMsgLine.classList.add('terminal__msg--sm')
    }
    newCursor.classList.add('terminal__cursor');
    newMsgLine.innerText = prefix ? 'egould@🔥 ~ % ' : '';

    terminalCli.append(newMsgLine);
    terminalCli.append(newCursor);

    terminal.printLine(cliMsg, newMsgLine);
}

terminal.printLine = (msg, node) => {
    let i = 0,
        chars = msg.split(''),
        typer = setInterval(function() {
            node.innerHTML += chars[i];
            i++;
            
            if (i == chars.length) { clearInterval(typer) }
        }, 25);
}

terminal.init();