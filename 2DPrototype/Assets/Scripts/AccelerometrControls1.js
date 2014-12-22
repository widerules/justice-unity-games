#pragma strict

function Update () 
{
    transform.Translate(Input.acceleration.x*0.1, Input.acceleration.y*0.1, 0);
}