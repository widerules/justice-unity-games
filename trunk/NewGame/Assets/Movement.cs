using UnityEngine;
using System.Collections;

public class Movement : MonoBehaviour {

	// Use this for initialization
	public float speed = 3.0f;
	public float jumpForce = 5.0f;
	public float deltaT =0.01f;
	public void moveRight()
	{
		//transform.Translate(new Vector3 (speed * deltaT, 0f,0f));
		rigidbody.AddForce (new Vector3 (speed, 0f, 0f));
	}
	public void moveLeft()
	{
		//transform.Translate(new Vector3 (-speed * deltaT, 0f,0f));
		rigidbody.AddForce (new Vector3 (-speed, 0f, 0f));
	}
	public void jump()
	{

	}
}
