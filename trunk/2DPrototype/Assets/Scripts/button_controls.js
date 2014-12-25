#pragma strict

var UpKey : KeyCode;
var DownKey : KeyCode;
var LeftKey : KeyCode;
var RightKey : KeyCode;

var speed : float =10;
var force : float =0.3;
function Update () 
{
	if(Input.GetKey(UpKey))
	{
		
		rigidbody2D.AddForce( new Vector2 (0,force));
		//rigidbody2D.velocity.y=speed;
	}
	if(Input.GetKey(DownKey))
	{
		
		rigidbody2D.AddForce( new Vector2 (0,-force));
		//rigidbody2D.velocity.y=-speed;
	}
	if(Input.GetKey(LeftKey))
	{
	
		rigidbody2D.AddForce( new Vector2 (-force, 0));
		//rigidbody2D.velocity.x=-speed;
	}
	if(Input.GetKey(RightKey))
	{
		rigidbody2D.AddForce( new Vector2 (force, 0));
		//rigidbody2D.velocity.x=speed;
	}
}