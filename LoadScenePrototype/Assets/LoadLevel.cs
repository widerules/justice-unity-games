using UnityEngine;
using System.Collections;

public class LoadLevel : MonoBehaviour {
	
	
	public void LoadMainScene(int level)
	{
		Application.LoadLevel(level);
	}
}