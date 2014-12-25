#pragma strict

var force : float =0.1;
function Update () 
{
    //transform.Translate(Input.acceleration.x*0.1, Input.acceleration.y*0.1, 0);
    rigidbody2D.AddForce(new Vector2(Input.acceleration.x*force, Input.acceleration.y*force));
}