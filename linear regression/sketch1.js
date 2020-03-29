let x_val=[];
let y_val=[];
let m,b;
const learningRate = 0.01;
const optimizer = tf.train.sgd(learningRate);

function setup() {
    createCanvas(400,400);
    background(0);
    m=tf.variable(tf.scalar(random(1)))
    b=tf.variable(tf.scalar(random(1)))
}
function loss(predict,labels){

    return predict.sub(labels).square().mean()
}
function predict(xs)
{
    const tfxs=tf.tensor1d(xs)
    const ys=tfxs.mul(m).add(b)
    return(ys)
}
function mousePressed()
{
    let x=map(mouseX,0,width,0,1);
    let y=map(mouseY,0,height,1,0);
    x_val.push(x);
    y_val.push(y);
}
function draw() {
    if(x_val>0)
    {const tfys=tf.tensor1d(y_val)
    optimizer.minimize(()=>loss(predict(x_val),tfys))}
    background(0);
    stroke(255);
    strokeWeight(10);  
    for(let i=0;i<x_val.length;i++)
    {
    let px=map(x_val[i],0,1,0,width);
    let py=map(y_val[i],0,1,height,0);
    point(px,py);
    }
    const xs=[0,1]
    const ys=predict(xs)
    let x1=map(xs[0],0,1,0,width)
    let x2=map(xs[1],0,1,0,width)
    let lineY=ys.dataSync()
    
    let y1=map(LineY[0],0,1,height,0);
    let y2=map(LineY[1],0,1,height,0);
    line(x1,x2,y1,y2)
  

}

