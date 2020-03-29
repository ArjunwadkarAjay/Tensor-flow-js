// Initialize the the neural network
const neuralNetwork = ml5.neuralNetwork(1, 1);

// add in some data
for (let i = 0; i < 100; i += 1) {
  const x = i;
  const y = i * 2;
  neuralNetwork.data.addData([x], [y]);
}

// normalize your data
neuralNetwork.data.normalize();
// train your model
neuralNetwork.train(finishedTraining);

// when it is done training, run .predict()
function finishedTraining() {
  neuralNetwork.predict([50], (err, results) => {
    console.log(results);
  });
}
