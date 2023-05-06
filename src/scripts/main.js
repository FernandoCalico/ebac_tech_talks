AOS.init();

const dataEvento = new Date('Dec 12, 2023 19:00:00');
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStampAtual;
    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;

    const diasAteEvento = Math.floor(tempoAteEvento/diasMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diasMs) / horasMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horasMs) / minutosMs);
    const segundosAteEvento = Math.floor((tempoAteEvento % minutosMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    
    if (tempoAteEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'EVENTO EXPIRADO!';
    };

}, 1000);
