document.addEventListener('DOMContentLoaded',(e)=>{
    console.log("cargo");
    load();
});

function load(){
    let barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
    if (barcodeDetector) {
        console.log('Barcode Detector supported!');
    } else {
        console.log('Barcode Detector is not supported by this browser.');
    }
}