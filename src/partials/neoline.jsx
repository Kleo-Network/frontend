let neoline;
let neolineN3;

function initDapi() {
    const initCommonDapi = new Promise((resolve, reject) => {
        window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
            neoline = new NEOLine.Init();
            console.log("neoline", neoline);
            if (neoline) {
                resolve(neoline);
            } else {
                reject('common dAPI method failed to load.');
            }
        });
    });

    const initN3Dapi = new Promise((resolve, reject) => {
        window.addEventListener('NEOLine.N3.EVENT.READY', () => {
            neolineN3 = new NEOLineN3.Init();
            if (neolineN3) {
                resolve(neolineN3);
            } else {
                reject('N3 dAPI method failed to load.');
            }
        });
    });

    initCommonDapi.then(() => {
        console.log('The common dAPI method is loaded.');

        return initN3Dapi;
    }).then(() => {
        console.log('The N3 dAPI method is loaded.');
        neoline.getAccount()
            .then(account => {
                const {
                    address,
                    label,
                    isLedger
                } = account;

                console.log('Provider address: ' + address);
                console.log('Provider account label (Optional): ' + label);
                console.log('Provider account is ledger account: ' + isLedger);
            })
    }).catch((err) => {
        console.log(err);
    })
};
export {initDapi};

