function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const targetDate = new Date("August 12, 2024 00:00:00");
    
    const timeDifference = targetDate.getTime() - now.getTime();
    
    if (timeDifference <= 0) {
        clockElement.textContent = "Começou!";
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    clockElement.textContent = countdownString;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função updateClock para exibir a contagem regressiva imediatamente ao carregar a página
updateClock();
