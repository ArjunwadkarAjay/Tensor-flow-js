//this is the model
const model=tf.sequential();
//hidden layer created
const hidden=tf.layers.dense({
    units:2,
    inputShape:[2],
    activation:'sigmoid'
});
//output layer created
const output=tf.layers.dense({
    units:1,
    //inputShape:[4],
    activation:'sigmoid'
});
//adding the layers to the model
model.add(hidden);
model.add(output);
//optimizer
const sgdOpt=tf.train.sgd(0.1);
//compile model
model.compile({
    optimizer:sgdOpt,
    loss:'meanSquaredError'//loss function
});


//training values
const txs =tf.tensor2d([
    [0,0],
    [0,1],
    [1,0],
    [1,1],
]);
const tys=tf.tensor2d([
    [0],
    [1],
    [1],
    [0]
]);
const config={
    verbose:true,
    epochs:5
}
async function train(){
    for(let i=0;i<100;i++){
        const config={
            shuffle:true,
            epochs:1000
        }
const response=await model.fit(txs,tys,config);/* .then((response)=>console.log(response.history.loss[0])); */
console.log(response.history.loss[0]);
    }
}
function setup()
{
    createCanvas(400,400);
    background(0);
}
 async function continuousRun()
{
    let resol=10;
    let columns=width/resol;
    let rows=height/resol;
    for(let i=0;i<columns;i++)
    {
        for(let j=0;j<rows;j++)
        {
            let x=i/columns;
            let y=j/rows;
            let xs=tf.tensor2d([[x,y]]);
            let outputs=model.predict(xs);
            out= await outputs.array();
            //console.log(out);
            fill(out[0]*255);
            rect(i*resol,j*resol,resol,resol);
            
        }
    } 

}
train().then(()=>{
    console.log('trainning complete');
    continuousRun();
    //predicting values
/* let outputs=model.predict(tf.tensor2d([[0,0]]));
console.log(outputs.array()); */
 
})

