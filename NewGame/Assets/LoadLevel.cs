using UnityEngine;
using System.Collections;

public class LoadLevel : MonoBehaviour 
{

	public void LoadScene( int level)
	{
		Application.LoadLevel (level);
	}
	public void Exit()
	{
		Application.Quit ();
	}
}
