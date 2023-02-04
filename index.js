import * as tf from '@tensorflow/tfjs';

if (module.hot) {
    module.hot.accept();
}

async function generate() {
    model = await tf.loadLayersModel('/model.json');
    noise = tf.randomNormal([1, 50]);

    const prediction = model.predict([noise]).squeeze();

    let canvas = document.querySelector('canvas');
    const container = document.querySelector('.container') || document.body;

    if (!canvas) {
        canvas = document.createElement('canvas');
        container.append(canvas);
        canvas.width = prediction.shape[0] * 2;
        canvas.height = prediction.shape[1] * 2;
    }

    await tf.browser.toPixels(prediction.mul(tf.scalar(0.5)).add(tf.scalar(0.5)), canvas);
}


document.querySelector('button').addEventListener('click', () => {
    generate();
});
